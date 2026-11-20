# Politik4M3 Faktencheck – Klima & Energie

Unabhängiger Faktencheck zu Aussagen über Klimawandel, Wetter, Umwelt, Atomkraft und Energieversorgung.

**[Zur Projektseite](https://4m3projects.github.io/politik4m3FaktencheckKlima/)**

Die Seite übernimmt zentrale Funktionen der Weboberfläche des Schwesterprojekts Ungeskriptet. Geprüfte Videos liegen unter `faktenchecks/<Video-ID>/` (Metadaten in `video.json`, Einzelprüfungen in `strukturiert/aussagen.json`, Berichte als Markdown). Neue Prüfungen werden erst nach Quellenprüfung aufgenommen.

Index und Statistik werden nie von Hand gepflegt, sondern mit `node scripts/build-index.js` aus den Prüfdaten erzeugt; der Workflow prüft mit `--check`, dass sie aktuell sind.

## Veröffentlichung
GitHub Pages wird per GitHub Actions aus `site/` und `daten/` gebaut. In **Settings → Pages → Source: GitHub Actions** auswählen. Weitere Hinweise: [Deployment](docs/DEPLOYMENT.md).

## Zusammenarbeit
Änderungen und Fehlerhinweise über GitHub Issues oder Pull Requests. Fakten, Meinungen und Rhetorik werden getrennt behandelt. Die [Hauptseite](https://4m3projects.github.io/politik4m3Facktencheck/) und die Schwesterseite [Faktencheck Ungeskriptet](https://4m3projects.github.io/politik4m3FaktencheckUngeskriptet/) sind über das Menü am Seitentitel verbunden; beide verlinken seit dem 20.11.2026 auch hierher.
