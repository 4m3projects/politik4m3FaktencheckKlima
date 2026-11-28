'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

/* Die beiden Einzelvideoansichten teilen sich dieselbe Legenden-Anbindung an ihr Dropdown. */
test('Bewertungslegende setzt die vorhandene Auswahl und fokussiert den ersten verbleibenden Treffer', () => {
  const vm = require('node:vm');
  const app = fs.readFileSync(path.join(__dirname, 'app.js'), 'utf8');
  const implementation = app.slice(app.indexOf('function bindVerdictLegend('), app.indexOf('/* ---------- Hinweistafeln'));
  const a = new EventTarget(), b = new EventTarget(), select = new EventTarget();
  a.dataset = { verdictFilter: 'belegt' };
  b.dataset = { verdictFilter: 'offen' };
  for (const button of [a, b]) button.setAttribute = (key, value) => { button[key] = value; };
  select.value = '';
  let focus, scrolled, movedBy, jumped = 0, search = 'bestehende Suche';
  const target = (id, category, top) => ({ id, category, hidden: false,
    setAttribute(key, value) { this[key] = value; },
    focus() { focus = id; },
    scrollIntoView() { scrolled = id; },
    getBoundingClientRect() { return { top }; }
  });
  const cards = [target('erste', 'belegt', 100), target('zweite', 'offen', 40), target('dritte', 'offen', 100)];
  const empty = target('leer', '', 100);
  let applyCalls = 0;
  select.addEventListener('input', () => {
    applyCalls++;
    for (const c of cards) c.hidden = search === 'ohne Treffer' || (select.value && c.category !== select.value);
  });
  const bind = vm.runInNewContext(implementation + '\nbindVerdictLegend', {
    Event,
    document: { querySelector: selector => selector === '.topbar' ? { getBoundingClientRect: () => ({ bottom: 76 }) } : null },
    window: { scrollBy: ({ top }) => { movedBy = top; } }
  });
  bind({ querySelectorAll: () => [a, b] }, select, cards, empty, () => { jumped++; });
  b.dispatchEvent(new Event('click'));
  assert.equal(select.value, 'offen');
  assert.equal(search, 'bestehende Suche');
  assert.equal(applyCalls, 1);
  assert.equal(focus, 'zweite');
  assert.equal(scrolled, 'zweite');
  assert.equal(cards[1].tabindex, '-1');
  assert.equal(movedBy, -44, 'überlappende Kopfzeile berücksichtigt');
  assert.equal(b['aria-pressed'], 'true');
  assert.equal(a['aria-pressed'], 'false');

  select.value = 'belegt';
  select.dispatchEvent(new Event('input'));
  assert.equal(a['aria-pressed'], 'true');
  assert.equal(b['aria-pressed'], 'false');
  assert.equal(jumped, 1, 'manuelles Dropdown ändert keinen Fokus');

  search = 'ohne Treffer';
  b.dispatchEvent(new Event('click'));
  assert.ok(cards.every(c => c.hidden));
  assert.equal(focus, 'leer');
  assert.equal(scrolled, 'leer');
});
