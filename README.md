# Politik4M3 Faktencheck – Klima & Energie

Eigenständige Projektseite für Klima-, Wetter-, Umwelt- und Energiefaktenchecks.

## Lokal testen

Die statische Website kann mit einem lokalen HTTP-Server geöffnet werden, beispielsweise `python3 -m http.server 8000`.

## Videos hinzufügen

In `videos.json` Einträge der Form `{ "title": "Titel", "url": "https://...", "description": "Kurzbeschreibung" }` ergänzen. Bis dahin wird bewusst ein Leerzustand angezeigt.

## Veröffentlichung

GitHub Pages auf `main` / Root aktivieren, nachdem der Pull Request geprüft und zusammengeführt wurde. Die Hauptseite wird absichtlich **nicht** verändert; diese Unterseite verlinkt bereits zur Hauptseite.

Hinweis: Dies ist zunächst ein eigenständiges statisches Grundgerüst, keine Übernahme der kompletten bestehenden Prüf- und Datenpipeline. Die Integration sollte anhand der bestehenden Projektarchitektur erfolgen.
