# Politik4M3 Faktencheck – Klima & Energie

Unabhängiger Faktencheck zu Aussagen über Klimawandel, Wetter, Umwelt, Atomkraft und Energieversorgung.

**[Zur Projektseite](https://4m3projects.github.io/politik4m3FaktencheckKlima/)**

Die Seite übernimmt zentrale Funktionen der Weboberfläche des Schwesterprojekts Ungeskriptet. Geprüfte Videos liegen unter `faktenchecks/<Video-ID>/` (Metadaten in `video.json`, Einzelprüfungen in `strukturiert/aussagen.json`, Berichte als Markdown). Neue Prüfungen werden erst nach Quellenprüfung aufgenommen.

Jedes Video zeigt den gemeinsamen **Faktenindex** aller Politik4M3-Faktencheckseiten mit Ampel und Prüfabdeckung ([Regeln](docs/FAKTENINDEX.md)); er wird bei jedem Aufruf berechnet, nie gespeichert.

Themen (`faktenchecks/<ID>/themen.json`, [Wissensdatenbank](docs/WISSENSDATENBANK.md)) werden je Video von den Agenten zugeordnet; der [Verlauf](docs/VERLAUF.md) wird aus der Git-Historie berechnet.

Index und Statistik werden nie von Hand gepflegt, sondern mit `node scripts/build-index.js` aus den Prüfdaten erzeugt; der Workflow prüft mit `--check`, dass sie aktuell sind.

## YouTube-Transkript lokal importieren

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\Import-YouTubeTranscript.ps1 -Url "https://www.youtube.com/watch?v=VIDEO_ID"
```

Der Import nutzt externes [yt-dlp](https://github.com/yt-dlp/yt-dlp) und optional [Deno](https://github.com/denoland/deno). Das Skript sucht nach `yt-dlp.exe` unter `..\youtubedownload\.tools` und anschließend im PATH. Andere Installationen können mit `-YtDlpPath` und `-DenoPath` angegeben werden. Der Import legt Untertitel, Zeitstempel, Metadaten und Beschreibung in `..\.politik4m3-private\<Video-ID>\` ab. Die Quelldateien bleiben außerhalb des Git-Arbeitsbaums.

## Veröffentlichung
GitHub Pages wird per GitHub Actions aus `site/` und `daten/` gebaut. In **Settings → Pages → Source: GitHub Actions** auswählen. Weitere Hinweise: [Deployment](docs/DEPLOYMENT.md).

## Zusammenarbeit
Änderungen und Fehlerhinweise über GitHub Issues oder Pull Requests. Fakten, Meinungen und Rhetorik werden getrennt behandelt. Die [Hauptseite](https://4m3projects.github.io/politik4m3Facktencheck/) und die Schwesterseite [Faktencheck Ungeskriptet](https://4m3projects.github.io/politik4m3FaktencheckUngeskriptet/) sind über das Menü am Seitentitel verbunden; beide verlinken seit dem 20.11.2026 auch hierher.
