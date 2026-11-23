# Rhetorik und Darstellung

Die fachlichen Regeln stehen in [AGENTEN_RHETORIK.md](AGENTEN_RHETORIK.md), unverändert aus dem Schwesterprojekt übernommen. Die bestehende Anzeige und das gemeinsame Modul `site/rhetoric.js` bleiben unverändert.

## Daten und Prüfung

Die optionale Datei `faktenchecks/<Video-ID>/rhetorik.json` enthält `schemaVersion: 1`, `videoId`, den Prüfstand `review` und einzelne `annotations`. Die verbindlichen Feldnamen und zulässigen Werte prüft `FactRhetoric.validate(data, videoId, facts)` in `site/rhetoric.js`.

Jeder Hinweis nennt Zeitmarken, Sprecher, Beobachtung, Begründung, Kontext, Unsicherheit, tatsächliche Grundlage und Verlauf. `claimId` verweist auf eine bestehende Aussage oder ist `null`, wenn die Beobachtung den übergreifenden Einstieg oder Gesprächsverlauf betrifft. Hinweise zu einer Aussage sind auf der Detailseite zusätzlich dieser Aussage zugeordnet. Neue Einordnungen bleiben bis zur unabhängigen redaktionellen Bestätigung `KI-Vorschlag`.

`review.coverage` nennt den tatsächlich geprüften Umfang. Untertitel erlauben eine sprachliche Einordnung, ersetzen aber keine Prüfung von Stimme, Musik, Mimik, Schnitt und Einblendungen. Solange solche Grenzen bestehen, lautet der Prüfstand `Teilweise geprüft`; fehlende Hinweise bedeuten nicht, dass eine Darstellung unauffällig ist. Bei gezielten Stichproben dürfen nicht das ganze Video oder ungesehene Sequenzen als geprüft gelten.

Der Seitenaufbau prüft vorhandene Darstellungsdaten einschließlich Aussagenbezügen, Sprechern und Laufzeitgrenzen:

```text
node scripts/build-index.js --check
node --test site/rhetoric-test.js
```

Die aus dem Schwesterprojekt übernommenen Tests sichern unter anderem die Trennung von Fakten und Darstellung, ungültige Zeitmarken, Sprecherzuordnung und das Verbot einer behaupteten Vollständigkeit bei offenen Grenzen. Beide Prüfungen laufen in der CI vor der Veröffentlichung. Eine fehlende Datei bleibt zulässig und bedeutet weiterhin „Noch nicht geprüft“.

Faktenstatus, Bedeutungsfaktoren, Faktenindex und Rangliste werden durch Darstellungsdaten nicht verändert. Themen werden bei jeder Ergänzung mitgeprüft; neue Darstellungsmerkmale sind keine neuen Sachthemen. Der öffentliche Änderungsverlauf entsteht aus Git, die Übersichtsflags aus `scripts/build-index.js`.

## Nachprüfung vom 23.11.2026

Die bisher fehlenden Darstellungsdateien wurden anhand der zugänglichen deutschen Originaluntertitel ergänzt. Der tatsächliche Umfang steht jeweils direkt in `review.coverage`, verbleibende Grenzen in `review.limits`. Die beiden vorhandenen Prüfungen bleiben mit ihrem bisherigen Verlauf erhalten. Originaluntertitel und Metadaten liegen privat außerhalb des Repositorys; hier werden nur eigene Paraphrasen und Fundstellen veröffentlicht.
