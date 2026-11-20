#!/usr/bin/env node
/*
 * Politik4M3 Faktencheck Klima & Energie – Index und Statistik erzeugen.
 *
 * Liest faktenchecks/<ID>/video.json, strukturiert/aussagen.json und die Markdown-Berichte und erzeugt:
 *   faktenchecks/<ID>/strukturiert/statistik.json   (Zählwerte, nie von Hand gepflegt)
 *   daten/index.json                                (Übersicht für die Webseite)
 *
 * Aufruf:  node scripts/build-index.js            Dateien schreiben
 *          node scripts/build-index.js --check    nur prüfen, ob die Dateien aktuell und gültig sind
 *
 * Grundsatz: Alle Zahlen werden aus aussagen.json berechnet. Keine manuell gesetzten Statistikwerte.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const FactRelations = require('../site/relations.js');

const ROOT = path.resolve(__dirname, '..');
const FC = path.join(ROOT, 'faktenchecks');
const CHECK = process.argv.includes('--check');

const VERDICTS = ['Belegt', 'Teilweise belegt', 'Irreführend / Kontext fehlt', 'Widerlegt', 'Nicht ausreichend belegbar', 'Meinung / Prognose'];
/* Kurzbegründung (shortReason): Pflicht bei diesen Bewertungen, sonst freiwillig. */
const SHORT_REQUIRED = ['Teilweise belegt', 'Irreführend / Kontext fehlt', 'Widerlegt', 'Nicht ausreichend belegbar'];
const SHORT_MAX = 200;
const STATUS = ['Abgeschlossen', 'In Bearbeitung', 'Offen', 'Nicht überprüfbar'];
const KINDS = ['Tatsachenbehauptung', 'Meinung', 'Prognose'];
const PRECISION = ['Ungefähr', 'Kontrolliert'];

const errors = [];
const isoDate = x => typeof x === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(x);
const text = x => typeof x === 'string' && x.trim().length > 0;

function readJson(p) { return JSON.parse(fs.readFileSync(p, 'utf8')); }
function listFiles(dir, base = '') {
  const out = [];
  for (const name of fs.readdirSync(dir).sort()) {
    const full = path.join(dir, name);
    const rel = base ? base + '/' + name : name;
    if (fs.statSync(full).isDirectory()) out.push(...listFiles(full, rel));
    else out.push(rel);
  }
  return out;
}

function validateClaims(data, id) {
  const at = `aussagen.json (${id})`;
  if (data.schemaVersion !== 2) errors.push(at + ': schemaVersion muss 2 sein.');
  const s = data.scope || {};
  if (s.videoId !== id) errors.push(at + ': scope.videoId passt nicht zum Verzeichnis.');
  for (const k of ['kind', 'coverageNote', 'researchNote', 'videoUrl']) if (!text(s[k])) errors.push(at + ': scope.' + k + ' fehlt.');
  if (!isoDate(s.asOf)) errors.push(at + ': scope.asOf muss ein Datum JJJJ-MM-TT sein.');
  const sources = new Set();
  for (const src of data.sources || []) {
    if (sources.has(src.id)) errors.push(at + ': Quelle doppelt: ' + src.id);
    sources.add(src.id);
    if (!/^https:\/\//.test(src.url || '')) errors.push(at + ': Quelle ' + src.id + ' braucht eine HTTPS-Adresse.');
    for (const k of ['title', 'details', 'accessBasis']) if (!text(src[k])) errors.push(at + ': Quelle ' + src.id + ': ' + k + ' fehlt.');
    if (!isoDate(src.accessedOn)) errors.push(at + ': Quelle ' + src.id + ': accessedOn fehlt.');
  }
  const ids = new Set();
  const used = new Set();
  for (const c of data.claims || []) {
    const ca = at + ' ' + c.id;
    if (!String(c.id || '').startsWith(id + '-')) errors.push(ca + ': id muss mit der Video-ID beginnen.');
    if (ids.has(c.id)) errors.push(ca + ': id doppelt.');
    ids.add(c.id);
    if (!KINDS.includes(c.kind)) errors.push(ca + ': unbekannte kind.');
    if (!STATUS.includes(c.status)) errors.push(ca + ': unbekannter status.');
    if (c.status === 'Abgeschlossen' && !VERDICTS.includes(c.verdict)) errors.push(ca + ': abgeschlossene Aussage braucht eine Bewertung.');
    if (c.status !== 'Abgeschlossen' && c.verdict) errors.push(ca + ': nur abgeschlossene Aussagen haben eine Bewertung.');
    if (c.kind !== 'Tatsachenbehauptung' && c.verdict && c.verdict !== 'Meinung / Prognose') errors.push(ca + ': Meinung/Prognose nur als „Meinung / Prognose“ bewerten.');
    for (const k of ['description', 'reason', 'assessmentBasis']) if (!text(c[k])) errors.push(ca + ': ' + k + ' fehlt.');
    /* Kurzbegründung (docs/KURZBEGRUENDUNG.md): ein Satz, schon im zugeklappten Zustand sichtbar. */
    if ('shortReason' in c) {
      const t = c.shortReason;
      if (!text(t)) errors.push(ca + ': shortReason muss ein nichtleerer Text sein.');
      else {
        if (c.status !== 'Abgeschlossen' && c.status !== 'Nicht überprüfbar') errors.push(ca + ': shortReason nur bei abschließend eingeordneten Aussagen.');
        if (t.length > SHORT_MAX || /[\r\n]/.test(t)) errors.push(ca + ': shortReason höchstens ' + SHORT_MAX + ' Zeichen in einer Zeile.');
        if (t === c.reason) errors.push(ca + ': shortReason darf die vollständige Begründung nicht wiederholen.');
        if ((c.verdict === 'Widerlegt' || c.verdict === 'Irreführend / Kontext fehlt') && /^(Stimmt|Richtig|Belegt|Zutreffend|Korrekt)\b/.test(t)) errors.push(ca + ': shortReason widerspricht der Bewertung.');
        if (c.verdict === 'Belegt' && /^(Falsch|Widerlegt|Stimmt nicht|Unzutreffend)\b/.test(t)) errors.push(ca + ': shortReason widerspricht der Bewertung.');
      }
    } else if (SHORT_REQUIRED.includes(c.verdict)) errors.push(ca + ': Bewertung „' + c.verdict + '“ braucht eine Kurzbegründung (shortReason).');
    if (!Number.isInteger(c.chapter)) errors.push(ca + ': chapter muss eine ganze Zahl sein.');
    if (!Array.isArray(c.occurrences) || !c.occurrences.length) errors.push(ca + ': mindestens eine Fundstelle nötig.');
    for (const o of c.occurrences || []) {
      if (!(o.startSeconds >= 0) || !(o.endSeconds >= o.startSeconds)) errors.push(ca + ': Fundstelle mit ungültiger Zeit.');
      if (s.durationSeconds && o.endSeconds > s.durationSeconds) errors.push(ca + ': Fundstelle nach Videoende.');
      if (!PRECISION.includes(o.precision)) errors.push(ca + ': unbekannte Zeitpräzision.');
    }
    for (const r of c.sourceRefs || []) {
      used.add(r.sourceId);
      if (!sources.has(r.sourceId)) errors.push(ca + ': unbekannte Quelle ' + r.sourceId);
    }
    if (c.status === 'Abgeschlossen' && c.kind === 'Tatsachenbehauptung' && !(c.sourceRefs || []).length) errors.push(ca + ': abgeschlossene Tatsachenbehauptung ohne Quelle.');
  }
  for (const sid of sources) if (!used.has(sid)) errors.push(at + ': Quelle ' + sid + ' wird nirgends verwendet.');
}

function statistics(data) {
  const claims = data.claims || [];
  const facts = claims.filter(c => c.kind === 'Tatsachenbehauptung');
  const completedFacts = facts.filter(c => c.status === 'Abgeschlossen');
  const statusCounts = Object.fromEntries(STATUS.map(st => [st, claims.filter(c => c.status === st).length]));
  const denominator = completedFacts.length;
  const categories = VERDICTS.map(v => {
    const n = claims.filter(c => c.status === 'Abgeschlossen' && c.verdict === v).length;
    const nf = completedFacts.filter(c => c.verdict === v).length;
    return {
      category: v,
      completedCount: n,
      completedFactPercent: v === 'Meinung / Prognose' || !denominator ? null : Math.round(nf / denominator * 1000) / 10
    };
  });
  return {
    schemaVersion: 1,
    generatedBy: 'scripts/build-index.js',
    uniqueStatements: claims.length,
    statusCounts,
    factClaims: facts.length,
    completedFacts: completedFacts.length,
    openFacts: facts.filter(c => c.status === 'Offen').length,
    inProgressFacts: facts.filter(c => c.status === 'In Bearbeitung').length,
    unverifiableFacts: facts.filter(c => c.status === 'Nicht überprüfbar').length,
    percentageDenominator: denominator,
    categories
  };
}

function writeOrCheck(file, obj) {
  const json = JSON.stringify(obj, null, 2) + '\n';
  const old = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null;
  if (old === json) return;
  if (CHECK) errors.push(path.relative(ROOT, file) + ' ist nicht aktuell; bitte `node scripts/build-index.js` ausführen.');
  else fs.writeFileSync(file, json);
}

const videos = [];
if (fs.existsSync(FC)) {
  for (const id of fs.readdirSync(FC).sort()) {
    const dir = path.join(FC, id);
    if (!fs.statSync(dir).isDirectory()) continue;
    const video = readJson(path.join(dir, 'video.json'));
    errors.push(...FactRelations.validateVideoMeta(video, id));
    const claimsFile = path.join(dir, 'strukturiert', 'aussagen.json');
    const structured = fs.existsSync(claimsFile);
    if (structured) {
      const data = readJson(claimsFile);
      validateClaims(data, id);
      writeOrCheck(path.join(dir, 'strukturiert', 'statistik.json'), statistics(data));
    }
    const files = listFiles(dir).filter(f => f.endsWith('.md'));
    if (!files.includes('README.md')) errors.push(id + ': README.md fehlt.');
    videos.push({
      id,
      title: video.title,
      structured,
      rhetoric: fs.existsSync(path.join(dir, 'rhetorik.json')),
      files,
      video
    });
  }
}

const indexFile = path.join(ROOT, 'daten', 'index.json');
const prev = fs.existsSync(indexFile) ? readJson(indexFile) : {};
const index = {
  /* generated/commit setzt der Workflow beim Bauen (GITHUB_SHA); lokal bleiben die bisherigen Werte. */
  generated: process.env.GITHUB_SHA && !CHECK ? new Date().toISOString().slice(0, 10) : (prev.generated ?? null),
  commit: process.env.GITHUB_SHA && !CHECK ? process.env.GITHUB_SHA : (prev.commit ?? null),
  repository: '4m3projects/politik4m3FaktencheckKlima',
  videos
};
if (process.env.GITHUB_SHA && !CHECK) fs.writeFileSync(indexFile, JSON.stringify(index, null, 2) + '\n');
else writeOrCheck(indexFile, index);

if (errors.length) {
  console.error(errors.map(e => '✗ ' + e).join('\n'));
  process.exit(1);
}
console.log(`✓ ${videos.length} Video(s) geprüft${CHECK ? '' : ' und Index geschrieben'}.`);
