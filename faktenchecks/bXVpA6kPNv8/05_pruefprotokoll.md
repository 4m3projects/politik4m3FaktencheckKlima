# Prüfprotokoll und Gegenkontrolle

Stand: 23.11.2026. Bearbeitung Kai (ChatGPT), mit drei getrennten Recherche-/Prüfinstanzen. Die Gegenkontrollen sind getrennte Arbeitsgänge desselben KI-Systems, keine menschliche Begutachtung.

## Material und tatsächlicher Umfang

Originalmetadaten und vollständige deutsche Automatikuntertitel des Videos vom 23.11.2026 (15:33) wurden gelesen. Nutzertranskript und öffentlich verlinktes Erstellerskript dienten zum Abgleich von Formulierung und Erkennungsfehlern. Alle drei Sachkapitel, Begleitangaben, Werbeinformationen und Schlusszahlen sind erfasst. Das bedeutet weder eine audiovisuelle Vollsichtung noch die separate Aufnahme jeder Nebenbemerkung, Selbstreferenz oder Kommentarreaktion. Rohuntertitel und fremdes Vollskript bleiben privat außerhalb des Repositorys.

## Getrennte Recherche und Kontrolle

| Arbeitsgang | Prüfinstanz | Ergebnis |
| --- | --- | --- |
| Materialerfassung, Begleitangaben, Werbeblock, Neckar-Alb | video_claims | Metadaten, vollständiger Text und Originalprojekt-/Behördenquellen geprüft; Zukunftsangaben und Erkennungsfehler abgegrenzt. |
| Infraschall und medizinische Studien | sources_infrasound | Originalstudien/Behördenbefunde, klinische Reichweite, Nocebo und Poster geprüft. |
| Brände, DWD, Waldstandorte und Genehmigungsunterlagen | repo_integration_review | Seltenheit qualitativ belegt; private Zählungen und nationale Negativaussage offen; Brandbarriere durch BFW-Originalquelle ergänzt. |
| Insekten | Kai – Redaktion, danach sources_infrasound | DLR-Modell, Fangmethoden, Pfinztaler Studie und neuere Übersicht gegengeprüft; Modellkritik und Populationsschluss getrennt. |
| Endkontrolle der Paraphrasen | video_claims | Jahreswortlaut, Zitatmodalität, CO2-Äquivalente, Zeitgrenzen und Fazitzuordnung korrigiert; Millionenschaden als zusätzliche offene Aussage ergänzt. |
| Quellenreichweite und Status | repo_integration_review | Alle ursprünglichen 47 Aussagen und 57 Quellenangaben gegengelesen; Nachtrag A0048 und BFW-Quelle gesondert bestätigt. |
| Bedeutungsfaktoren und Anteile | sources_infrasound, Nachtrag A0048 zusätzlich repo_integration_review | Alle 44 Faktoren bestätigt, acht begründete Änderungen mit separater Schlussbestätigung; eigene A0032-Anteile geprüft. |

## Relevante Entscheidungen

- A0014: Die konkreten Brandbeispiele werden übernommen und normal bewertet; sie sind keine behauptete hohe Brandhäufigkeit. Die Millionenschadensangabe bleibt separat A0048 offen.
- A0043: Qualitative Seltenheit ist durch die amtliche FAQ belegbar. Daraus werden weder genaue Rate noch private Fallzahlen bestätigt.
- A0032: Nachgewiesene Methodenverwechslung wird in eigenen Anteilen als falsch und nicht als ungeklärter Rest erfasst. Das ursprüngliche Gewicht und die Abweichung bleiben im Verlauf dokumentiert.
- A0033: Das Video nennt den Einzelstandort und zitiert das Autorenfazit zutreffend. Die Kritik betrifft die Verwechslung von Fallenfängen und Kollisionsquote; Feldarbeit 2018 und Veröffentlichung 2021 sind in der Begründung getrennt.
- A0034/A0036: Der grobe Fledermausvergleich ist als referierte Rechnung nachvollziehbar; der ökologische Fehlschluss wird nur einmal beim Populationsfazit bewertet.
- A0040: Der stärkere Experiment-Satz und das vorsichtigere Gesundheitsfazit stehen sichtbar im selben Prüfbündel. Keine zusätzliche Zählung des Fazits und keine Gleichsetzung von MRT-Befund mit Hirnschaden.
- A0008/A0046/A0047: Gesicherter BGR-Rechenfehler, journalistisch dokumentierte persönliche Entschuldigung und offene mehrjährige Hinweisgeschichte bleiben getrennt.
- A0041: Abweichende Projektangaben zur Haushaltsprognose bleiben sichtbar. Frühere KI-Prüfungen dienen als Hinweis, nicht als unabhängiger Ertragsbeleg.

Die endgültigen Zählwerte, Abdeckung, Faktenindex und Ampel werden von den vorhandenen Modulen berechnet und nicht in dieser Dokumentation vorgegeben. Die Bedeutungseinschätzung erfolgte nach Kenntnis der Urteile; assessedBeforeVerdict ist ehrlich false. Darstellungsmerkmale sind separate KI-Vorschläge ohne Sachfehlerpunkte.

## Technische Freigabe

Vor Veröffentlichung werden Index und Statistik regeneriert, build-index --check, faktenindex pruefen, wissen pruefen und wissen themen ausgeführt. Die vorhandenen Tests für Faktenindex, Darstellung, Verlauf, Rangliste und Wissen laufen gemeinsam. Der Pull Request muss die vollständige CI einschließlich Gleichstand zum Hauptprojekt und Websiteexport bestehen. Erst nach erfolgreichem Deployment werden die tatsächlich veröffentlichten Datendateien, der Videoeintrag und die Einbindung in Themen/Verlauf kontrolliert. CI- und Commitnachweise sind über den zugehörigen Pull Request abrufbar.

Die offenen Sachfragen stehen in PRUEFAUFTRAG.md. Der globale Status bleibt Teilbestand geprüft.

## Gemeinsame Validierung: chronologische Gegenprüfung

Bei der Freigabe fiel ein bestehender Fehler im gemeinsamen Validierungsmodul auf: ISO-Datumszeichenfolgen wurden numerisch verglichen; dadurch konnte eine bestätigende Gegenprüfung einen früheren dokumentierten Dissens nicht auflösen. Die ursprünglichen Abweichungen und Änderungen wurden deshalb nicht aus den Forschungsdaten entfernt. Stattdessen wurde der Fehler im maßgeblichen Hauptprojekt mit gezielten Regressionstests korrigiert.

Die Korrektur aus [Hauptprojekt-PR 120](https://github.com/4m3projects/politik4m3Facktencheck/pull/120), Merge e03a68de251d19242923cc4b78312c3f8ed6c10b, wurde byteidentisch in site/faktenindex.js und site/faktenindex-test.js übernommen. Das ISO-Datum entscheidet zuerst, bei gleichem Datum die Reihenfolge der Einträge. Ein späterer Dissens bleibt offen, bis eine nachfolgende Bestätigung vorliegt. Eine getrennte technische Gegenprüfung bestand 21 von 21 gezielten Fällen; die vollständige Hauptprojekt-CI bestand ebenfalls. Indexformel, Schwellen, Urteilsanteile, Faktoren und Sachbewertungen wurden durch diese Softwarekorrektur nicht verändert.

## Lokale Freigabe des Veröffentlichungskandidaten

Am 23.11.2026 bestanden nach Übernahme der gemeinsamen Korrektur alle lokalen Freigabeschritte: Index/Statistik neu aufgebaut, build-index --check, faktenindex pruefen, wissen pruefen und wissen themen. Die gemeinsame Testsuite für Faktenindex, Rhetorik, Verlauf, Rangliste und Wissen bestand 97 von 97 Tests ohne Fehler oder ausgelassene Tests. Der berechnete Bericht erfasst elf Videos im Gesamtprojekt. Die vorhandenen Themen energie und energie/windkraft werden weiterverwendet; keine neue öffentliche Kategorie wurde angelegt. Die Veröffentlichungs-CI und der anschließende Live-Abgleich bleiben eigenständige Nachweise im Pull Request.
