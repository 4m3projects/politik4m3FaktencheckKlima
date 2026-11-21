# Prüfprotokoll: ChatGPT-Durchlauf zu „Klimakrise erlogen?“

**Protokollstand: 21. November 2026.** Dieses Protokoll dokumentiert den Arbeitsumfang, die tatsächlich verfügbaren Belege und die Grenzen der Prüfung des Videos **DSnpxR_my-4**. Es ist ein Audit des Arbeitsablaufs. Die aktuellen Einzelurteile stehen in den [strukturierten Aussagen](strukturiert/aussagen.json), der redaktionelle Stand im [Prüfbericht](README.md).

**Die verfügbaren Untertitel wurden vollständig gelesen. Eine erfolgreiche eigene Wiedergabe von Bild und Ton gelang dagegen nicht.** Deshalb ist die inhaltliche Erfassung des gesprochenen Materials von einer vollständigen audiovisuellen Prüfung zu unterscheiden. Die Darstellungsprüfung bleibt teilweise abgeschlossen.

## 1. Auftrag und Veröffentlichungsweg

Jens beauftragte zunächst die Aufnahme dieses Videos in den Klima-Faktencheck und erweiterte den Auftrag ausdrücklich: ChatGPT sollte die Prüfung ausführen, Ergebnisse veröffentlichen und bereits Zwischenstände live stellen. Anlass war sein Interesse daran, wie gut sich die Aufgabe in ChatGPT Pro erledigen lässt. Der Auftrag enthielt keine Durchführung derselben Aufgabe durch Codex oder Claude unter identischen Bedingungen.

Gegenstand ist das [Originalvideo „Klimakrise erlogen?“ Markus Krall im Gen-Z-Faktencheck](https://www.youtube.com/watch?v=DSnpxR_my-4) des Kanals **Janek Fischer | SOLARZAN**, laut abgerufenen Metadaten veröffentlicht am **6. November 2026**, mit einer Laufzeit von **8:20 Minuten**. Es ist ein Reaktionsvideo mit eigenen Kommentaren und eingespielten Aussagen anderer Personen.

Der erste öffentlich versionierte Zwischenstand ist [Pull Request #32](https://github.com/4m3projects/politik4m3FaktencheckKlima/pull/32). Er trennt bereits geprüfte Punkte von laufender Recherche. Der erweiterte Prüfstand wird in einem gesonderten Pull Request fortgeschrieben; veröffentlichte Fassungen sind im [Verlauf](https://4m3projects.github.io/politik4m3FaktencheckKlima/#/verlauf) und im [Prüfauftrag](https://github.com/4m3projects/politik4m3FaktencheckKlima/issues/31) verlinkt.

Der jeweils aktuelle Faktenindex, die Ampel und die Prüfabdeckung sind in der [berechneten Videoanzeige](https://4m3projects.github.io/politik4m3FaktencheckKlima/#/video/DSnpxR_my-4) zu prüfen. Dieses Protokoll setzt keinen eigenen Zahlenindex und erklärt keinen Zwischenstand nachträglich zum endgültigen Ergebnis.

## 2. Wer hat welche Arbeit ausgeführt?

Die Arbeit wurde innerhalb dieses ChatGPT-Durchlaufs in Teilaufgaben gegliedert. Die Trennung sollte unterschiedliche Fragen gezielt bearbeiten und gegenseitige Kontrollen ermöglichen. Sie ist keine externe Begutachtung.

| Teilaufgabe | Tatsächlich bearbeitet | Grenze |
| --- | --- | --- |
| Materialprüfung | Videometadaten und sämtliche 32 verfügbaren deutschen Captionblöcke lesen; Aussageinventar, Sprecher, Übernahme durch den Host, Auslassungen und vorläufige Bedeutungsfaktoren erfassen. | Automatische Untertitel können Wörter und Namen falsch wiedergeben; die Prüfung ersetzt kein eigenes Hören. |
| Klimarecherche | Klimaaussagen einzeln recherchieren, Originalquellen öffnen, Messgrößen und Zeitraum unterscheiden, Gegenargumente und Unsicherheiten festhalten. | Die Identität einer im Video möglicherweise eingeblendeten Studie oder Grafik ist durch eine passende Recherche allein noch nicht visuell bestätigt. |
| Energie- und Politikrecherche | Steuer-, Effizienz-, Kosten-, Unternehmens- und Politikbehauptungen anhand zugänglicher Primärquellen prüfen; Rechnungen und fehlende Bezugsgegenstände offenlegen. | Unternehmensdarstellungen beweisen nicht sämtliche Ursachen; ein nicht bezeichnetes Gesetz oder Programm wird nicht durch eine beliebige plausible Auswahl ersetzt. |
| Redaktionelle Integration | Aussage-IDs, Quellenverweise, Kurzbegründungen, Status, Themen und Sprecherzuordnung zusammenführen; Abgrenzungen kontrollieren; Zwischenstand erzeugen und validieren. | Eine redaktionelle Kontrolle ist keine neue Messung und keine menschliche Fachbegutachtung. |
| Darstellungsprüfung | Sprachliche Merkmale aus dem Captionkontext erfassen; Hinweise auf zu kontrollierende Bild- und Tonstellen sammeln; eigenen Wiedergabeversuch durchführen. | Der Wiedergabeversuch scheiterte. Bestätigte audiovisuelle Einzelbefunde können daraus nicht abgeleitet werden. |

**Alle genannten Prüferrollen gehören zu diesem ChatGPT-Durchlauf.** Es gab in diesem Ablauf weder eine Gegenprüfung durch ein anderes Modell wie Claude oder Codex noch eine dokumentierte menschliche Fachprüfung. „Gesonderte Teilaufgabe“ bedeutet hier organisatorisch getrennte Arbeit innerhalb ChatGPT. Gemeinsame Ausgangsdaten und mögliche gemeinsame Modellfehler bleiben bestehen.

## 3. Materialzugang und tatsächliche Sichtungsgrenze

Die Materialgrundlage bestand aus den abgerufenen Videometadaten, der Beschreibung und **32 deutschen Captionblöcken**, die vollständig gelesen wurden. Daraus entstand zunächst ein Inventar von **24 Aussagekomplexen**. Durch die redaktionelle Trennung verschiedener Sachfragen und Wertungen innerhalb dieser Komplexe umfasst der spätere Datensatz **30 Aussagen**. Wiederholte Behauptungen wurden zusammengeführt; Werbung, persönliche Angaben und Aufforderungen blieben in der Erfassung sichtbar. Öffentliche Berichte verwenden eigene Paraphrasen und veröffentlichen kein Volltranskript.

Zusätzlich wurde einmalig eine vidIQ-Szenenanalyse abgerufen. Dieser automatisch erzeugte Bericht lieferte Hinweise darauf, an welchen Stellen Grafiken, Quellen oder Einblendungen zu suchen sein könnten. Seine eigene Behauptung, das ganze Video betrachtet zu haben, wurde **nicht** als Nachweis einer eigenen Vollsichtung durch ChatGPT übernommen. Er blieb eine Suchhilfe.

Ein späterer direkter Wiedergabeversuch im Browser, einschließlich erneutem Versuch, blieb bei **0:00** stehen; der ausgelesene Medienzustand blieb **`readyState = 0`**. Es wurde damit keine fortlaufende Bild- und Tonwiedergabe nachgewiesen. Eine vollständig gehörte Tonspur, kontrollierte Sprecherwechsel oder eine eigene Sichtung aller Frames werden nicht behauptet. Aus dem technischen Fehlschlag wird auch keine bestimmte Fehlerursache abgeleitet.

Für den ausgeführten Arbeitsablauf war kein neuer Login des Nutzers erforderlich; es wurde keiner angefordert. Die fehlende Wiedergabe wurde als Prüfgrenze dokumentiert und nicht durch eine behauptete Sichtung ersetzt.

### Zeitmarken und Personen

Die Zeitmarken beruhen auf Captionintervallen und sind **ungefähr**. Sie sind keine sekundengenau überprüften Satz- oder Schnittgrenzen. Die Sprecherzuordnung ist **plausibel**, gestützt auf Einleitungen, Namensnennungen, Metadaten und sprachlichen Zusammenhang. Die vier erfassten Sprecher sind Janek Fischer, Markus Krall, Felix Goldbach und Mark Benecke. Automatische Schreibvarianten in den Untertiteln wurden nicht als zusätzliche Personen behandelt.

## 4. Erfassung der gesamten Laufzeit

Die folgende Tabelle deckt **00:00 bis 08:20 ohne zeitliche Lücke** ab. „Erfasst“ bezeichnet die Lektüre und Einordnung der Captioninhalte im jeweiligen Abschnitt. Es bedeutet weder, dass jeder darin vorkommende Satz ein eigenständiges Faktenurteil benötigt, noch dass Bild und Ton vollständig kontrolliert wurden. Die Grenzen können innerhalb eines Captionblocks um einige Sekunden abweichen.

Die Kurzkennungen A0001 bis A0030 bezeichnen die entsprechenden stabilen IDs im [Aussagendatensatz](strukturiert/aussagen.json). Die später hinzugekommenen IDs trennen Teilfragen bereits erfasster Abschnitte; sie stehen nicht für zusätzliche Laufzeit.

| Ungefähres Intervall | Inhalt und zugeordnete Aussagen | Behandlung und verbleibende Grenze |
| --- | --- | --- |
| 00:00–00:15 | Eröffnungsfrage, eingespielte Krisenleugnung, Gegenüberstellung zweier Positionen; A0001. | Tatsachenkern und Motivzuschreibung auseinanderhalten. Die als Gegenposition gezeigte Aussage wird dem Host nicht automatisch zugerechnet. Titelbild und Schnitt sind nicht selbst visuell geprüft. |
| 00:15–01:01 | Goldbach-Anspielung, Vorstellung des Hosts, Angaben zu Medienarbeit und Auftraggebern, Kanalstart und Abo-Aufruf. | Selbstauskünfte und erkennbare Eigenwerbung erfasst. Die behaupteten Auftragsbeziehungen und der persönliche Werdegang wurden nicht unabhängig nachgewiesen. Eine angekündigte Betrachtung beider Seiten ist kein Beleg für bereits erreichte Ausgewogenheit. |
| 01:01–01:32 | Verallgemeinerung über Klimawissen, CO₂-Mengenangabe und Beginn der Deutung durch den Host; A0002–A0003 sowie der zugeschriebene Schluss A0030. | Zahl und Personengruppenbehauptung getrennt prüfen. Die Interpretation einer fremden Argumentation wird nicht als eigene Ablehnung des Treibhauseffekts behandelt. Originalton und genaue Übergänge bleiben offen. |
| 01:32–02:04 | Fortsetzung der Argumentdeutung und Goldbachs Erklärung von Treibhausgasen; A0004. | Naturwissenschaftlichen Kern recherchieren. Die vom Szenenbericht angekündigte Energieflussgrafik einschließlich Zahlen, Einheiten und Pfeilzuordnung ist nicht unmittelbar kontrolliert. |
| 02:04–02:52 | Einführung Beneckes, Datenmenge, Temperaturverlauf, Industrialisierungsbezug und menschliche Ursache; A0005–A0008. | Mehrere Sachfragen getrennt erfassen; persönliche Vertrauensbekundungen nicht als eigenen wissenschaftlichen Nachweis zählen. Vermutete Paper- und Diagrammeinblendungen bleiben visuell unbestätigt. |
| 02:52–03:08 | Zustimmung, Elektrifizierung und zugespitzte Zukunftsaussage; A0009. | Prognose und allgemeine technische Wertung kennzeichnen. Der konkrete Fahrzeugvergleich wird unter A0018 geprüft und nicht noch einmal als gleicher belegter Sachverhalt gezählt. |
| 03:08–03:41 | Erdbahn, Erdachsenorientierung, Sonne und ihre behauptete Erklärungskraft; A0010–A0012. | Existenz langfristiger Zyklen, Begriffserklärung und Übertragung auf die heutige Erwärmung getrennt prüfen. Ein naturwissenschaftlich richtiger Teil bestätigt nicht automatisch den weitergehenden Kausalschluss. |
| 03:41–04:13 | Der Host fordert Daten, bietet ein Gespräch an und positioniert sich zur Energiewende. | Quellenkritik, Einladung und Positionierung erfasst. Aus den Untertiteln allein ist nicht bewiesen, dass im Ausschnitt keine Quelle sichtbar ist; über das ganze Ausgangsgespräch wird nichts behauptet. |
| 04:13–04:44 | Motivvorwurf, Benzinsteuerrechnung, Wunsch nach billigem Benzin und Angaben zu gemieteten E-Autos; A0013 und A0025. | Steuerbehauptung als Sachfrage behandeln; Wunsch und private Nutzungserzählung gesondert erfassen. Der Wunsch bestätigt nicht automatisch die genaue Rechnung des Einspielers. |
| 04:44–05:32 | Eigenwerbung für Social-Media-Dienstleistungen in der Energiebranche, erwartete Geschäftserfolge und Selbstdarstellung. | Als Werbung dokumentiert. Werbliche Erfolgs- und Spitzenstellungsbehauptungen wurden nicht als unabhängig belegte Geschäftsergebnisse übernommen und nicht in den wissenschaftlichen Faktenindex aufgenommen. Eine sichtbare Werbekennzeichnung ist nicht selbst bestätigt. |
| 05:32–06:04 | Unbestimmte Besteuerungsbehauptung, freiwillige Flugbeiträge, pauschaler Betrugsvorwurf, Schadenskosten und Vermutung zur Geldverwendung; A0014–A0017 sowie A0026. | Steuer und freiwillige Zahlung unterscheiden. Absichtsvorwurf nicht mit Qualitätsproblemen gleichsetzen. Unklare politische Referenzen und ausdrücklich markierte Vermutungen bleiben kenntlich. |
| 06:04–06:34 | Fahrzeugwirkungsgrad, private Fahrerfahrung, PV-Ladekosten und Förderwunsch; A0018–A0019 sowie A0017. | Technischen Kern und bedingte Kostenrechnung prüfen, Bezugsgröße offenlegen. Private Tesla-/Polestar-Erfahrung ist nicht unabhängig geprüft. Wunsch zur Mittelverwendung bleibt ein Wunsch. |
| 06:34–07:20 | Persönlicher Besuchsbericht, Next2Sun, Aufträge, Finanzierung, politische Sicherheit und politische Wertung; A0020–A0022 sowie A0027–A0029. | Unternehmensereignis, Aufträge, Finanzierungsproblem, Ursachenbehauptung und Wertung unterscheiden. Besuch nicht unabhängig nachgewiesen. Bezug der Sicherheitszusage und gemeinte Gesetzesfassung benötigen eigene Belege. |
| 07:20–07:36 | Erneuter Motivvorwurf und Trumps angebliche Abschaffung einer Maßnahme; A0023 und A0025. | Unbenannten Gegenstand nicht erraten. Der ergänzende Captionabgleich im Ausgangsgespräch verengt den Zusammenhang auf Klimabeiträge und Klima-/Energiebepreisung, benennt aber weiterhin kein eindeutiges US-Instrument. Das ganze Ausgangsgespräch ist nicht geprüft. |
| 07:36–08:07 | Reaktion auf ausbleibenden Widerspruch, Aufforderung zur Positionierung und Warnung vor Klimafolgen; A0024. | Sympathie, Lagerwahl und Risikobehauptung trennen. Kein Schluss über den Verlauf des gesamten Originalgesprächs; Risiken als bedingte Aussagen prüfen, nicht als Vorhersage eines bestimmten Ereignisses ausgeben. |
| 08:07–08:20 | Dank, Likes, Abonnement, Spendenaufruf, Abschied und Solardach-Slogan. | Outro und Eigenwerbung vollständig in der Texterfassung berücksichtigt. Keine Spendenhöhe, Zahlung oder Wirkung behauptet; Schlussbilder und Ton nicht unmittelbar geprüft. |

## 5. Quellenarbeit, Stichtag und vorhandenes Projektwissen

**Sachlicher Bewertungsstichtag ist der 6. November 2026, Recherchedatum der 21. November 2026.** Eine später abgerufene Quelle wird nicht allein deshalb zu einem Beleg dafür, welche Information am Veröffentlichungstag verfügbar war. Veröffentlichungsdatum, Beobachtungszeitraum und Abrufdatum werden nach Möglichkeit getrennt ausgewiesen. Spätere Unternehmensereignisse dürfen nicht rückwirkend die Bewertung einer früheren Aussage bestimmen.

Die Recherche nutzte direkt geöffnete Originalquellen: amtliche Messdaten und Fachinformationen, wissenschaftliche Originalarbeiten und Berichte, Gesetzestexte und amtliche Haushaltsunterlagen, von Prüforganisationen veröffentlichte Fahrzeugtests sowie Unternehmensmitteilungen. Titel, URLs, Fundstellen, Datum und Aussagebezug stehen bei den jeweiligen Aussagen. Primärquelle bedeutet dabei nicht automatisch interessenfrei: Eine Unternehmensmitteilung belegt zunächst, was das Unternehmen bekanntgab; eine Verbandsstellungnahme belegt dessen Argumentation. Kausalaussagen brauchen darüber hinaus passende Belege.

Das vorhandene Wissen wurde gezielt in allen drei Projekten durchsucht:

| Projekt | Suchbereiche | Ergebnis für diesen Fall |
| --- | --- | --- |
| Klima & Energie (KL) | CO₂, Treibhauseffekt, Temperatur, natürliche Zyklen; CO₂-Einnahmen, Benzinsteuern, PV, E-Auto-Effizienz, Next2Sun und Finanzierung. | Keine äquivalenten Wissenseinträge, aus denen sich die konkreten Urteile dieses Videos unverändert übernehmen ließen. |
| Hauptprojekt (HP) | Dieselben sachlichen Begriffe und verwandte Politikbehauptungen. | Einzelne thematische Treffer, aber keine gleichwertige Prüfung derselben Aussage mit demselben Zeit- und Sachbezug. |
| Ungeskriptet (UG) | Dieselben Suchfelder; zusätzlich mögliche vorbestehende Argument- und Quellenbezüge. | Keine passende Vorprüfung, die die neue Quellenlektüre ersetzt hätte. |

Vorhandene Treffer dienten somit der Orientierung. Ihre Urteile wurden nicht als fertige Belege kopiert. Die verwendeten Originalquellen wurden neu geöffnet. Die Kontextsuche und ihre Grenzen sind Teil der Recherchedokumentation, kein Nachweis, dass im gesamten Projektbestand niemals ein verwandtes Thema vorkommt.

## 6. Regeln für schwierige Aussagearten

**Sprecher und Übernahme:** Der Faktenstatus einer fremden Aussage und ihre Anrechnung auf das Reaktionsvideo sind getrennte Entscheidungen. Eine zurückgewiesene oder nur wiedergegebene Aussage Kralls wird sachlich geprüft, aber nicht automatisch zum Fehler des Hosts. Als Stütze der eigenen Argumentation übernommene Aussagen von Goldbach oder Benecke unterliegen derselben Sachprüfung.

**Motive und Betrugsvorwürfe:** Ob eine Klimabehauptung sachlich trägt, ob eine Zahlung wirksam ist und ob jemand vorsätzlich täuscht, sind verschiedene Fragen. Aus Steuereinnahmen oder einem mangelhaften Projekt allein folgt kein Beweis für eine gemeinsame Täuschungsabsicht. Das Protokoll schreibt Personen keine geheimen Motive zu. Sprachliche Emotionalisierung bleibt von einem Tatsachenurteil getrennt.

**Wünsche, Prognosen und private Angaben:** Ein politischer Wunsch ist keine Behauptung, dass der gewünschte Zustand schon besteht. Eine erkennbare Zukunftszuspitzung wird als Prognose behandelt. Wissenschaftlich begründbare Risikobehauptungen können gleichwohl auf ihre empirische Grundlage geprüft werden. Private Fahrten, Besuche oder Kundenbeziehungen werden ohne zugängliche Belege nicht als unabhängig bestätigt ausgegeben.

**Offene Fragen:** Fehlende Recherche oder fehlender Zugang ist kein Gegenbeweis. Ein wegen fehlender Bild- oder Tonprüfung offener Punkt bleibt offen. „Nicht überprüfbar“ ist kein Ersatzetikett für einen nicht funktionierenden Player. Bei mehrdeutigen politischen Sätzen wird dokumentiert, welcher konkrete Bezug fehlt und welche Recherchen ihn nicht klären konnten. Ein möglicher Referent wird nicht stillschweigend zur ursprünglichen Behauptung gemacht.

**Gewichte und Doppelzählungen:** Die Bedeutungsfaktoren wurden in der Materialaufgabe zunächst vor den Sachurteilen vorgeschlagen. Ihre spätere redaktionelle Kontrolle darf nicht nachträglich als vorurteilsfreie Erstvergabe bezeichnet werden. Vorläufigkeit, Gegenprüfung und Änderungen gehören in die strukturierten Daten. Wiederholungen erhöhen nicht automatisch die Zahl unabhängiger Belege; es gibt keine vorgegebene Zielnote.

## 7. Offene audiovisuelle und ursprüngliche Quellen

Die vidIQ-Suchhinweise betreffen unter anderem eine Energieflussgrafik bei ungefähr **01:41–02:01**, eine mögliche Paper-Einblendung bei **02:06–02:11** und ein Temperaturdiagramm bei **02:14–02:45**. Zu kontrollieren bleiben die tatsächlich gezeigten Quellen, Achsen, Einheiten, Referenzperioden, Ausschnitte und Zahlenzuordnungen. Auch das mögliche Vorhandensein einer Werbekennzeichnung, der genaue Schnitt und die Musik- oder Tonführung sind nicht durch eigene Wiedergabe bestätigt. Das Fehlen einer Erwähnung im Szenenbericht beweist nicht das Fehlen im Video.

Die Videobeschreibung verweist auf drei Ausgangsvideos:

- [Markus-Krall-Gespräch](https://www.youtube.com/watch?v=7LZiS2b7_Ns&t=3300s)
- [Felix Goldbach: Die größten Lügen zur Energiewende](https://www.youtube.com/watch?v=894SoYQfAn8&t=601s)
- [Mark Benecke: Time is up – Herbst 2026](https://www.youtube.com/watch?v=YXXlFn1ec_8&t=469s)

Diese Links dokumentieren den Herkunftshinweis der Beschreibung. Für das Krall-Gespräch wurden im weiteren Verlauf zusätzlich Metadaten und Original-Captions abgerufen. Gelesen wurden **00:00–03:00** sowie der unmittelbare Klimakontext **ungefähr 51:07–1:00:50**. Das Ausgangsvideo wurde laut Metadaten am **5. November 2026** veröffentlicht und dauert **2:26:37 Stunden**. Ein separates Aufnahmedatum ist nicht verifiziert.

Beim ergänzenden Abruf lautete der Titel „Warum kauft USA deutsche Firmen? | Dr Markus Krall“ und wich damit vom Titel in der Beschreibung des Reaktionsvideos ab. Die Identifizierung beruht auf der identischen Video-ID **7LZiS2b7_Ns** und sechs übereinstimmenden Passageankern, nicht allein auf dem Titel. Grundlage bleiben die Original-Captions; ein eigener Hör- oder Bildabgleich wird damit nicht behauptet.

| Ungefähre Stelle im Reaktionsvideo | Ungefähre Stelle im Krall-Ausgangsvideo | Abgeglichener Passageanker |
| --- | --- | --- |
| 00:00–00:15 | 52:43–53:14 | Krisenleugnung und Übergang zur CO₂-Mengenargumentation. |
| 01:01–01:32 | 52:59–53:29 | Unwissenheitsvorwurf, Zehn-Prozent-Schätzung und Unter-400-ppm-Angabe in derselben Reihenfolge. |
| 03:08–03:41 | 54:48–55:36 | Erdabstand, Erdachsenorientierung, Kreiselvergleich, Sonnenaktivität und lange Zeiträume. |
| 04:13–04:28 | 58:47–59:02 | Motivvorwurf und Benzinpreis nach Abzug der Steuern. |
| 05:32–05:48 | 59:02–59:18 | Produktbesteuerung, freiwilliger Flugbeitrag und Betrugsvorwurf. |
| 07:20–07:36 | 59:18–59:33 | Europa, Amerika, Trump und abschließender Motivvorwurf. |

Der ergänzend gelesene Kontext hilft, die gegenwärtige CO₂-Angabe und die kausale Übertragung der natürlichen Zyklen genauer zuzuordnen. Bei der Benzinbehauptung nennt er keine frühere Preisperiode; ein konkreter Literpreis fehlt weiterhin. Auch der weitere Kontext benennt nicht eindeutig, auf welches US-Instrument der Trump-Satz oder auf welchen Gesetzesplan die allgemeine Produktbesteuerung zielt. Das sind Ergebnisse eines begrenzten Textabgleichs, keine neuen Bild- oder Tonbefunde.

**Die vollständigen Ausgangsvideos wurden in diesem Durchlauf nicht geprüft.** Der ergänzende Krall-Abgleich ist keine Vollprüfung des 2:26:37 Stunden langen Interviews; für Goldbach und Benecke wird ebenfalls keine vollständige Originalsichtung behauptet. Daher bestätigt dieses Audit weder die Vollständigkeit aller Ausschnitte noch die Fairness sämtlicher Schnitte. Insbesondere lässt sich eine Beobachtung des Hosts über fehlenden Widerspruch nicht ohne Weiteres auf das ganze Krall-Gespräch übertragen. Diese Lücken bleiben benannt, auch wenn eine im Ausschnitt enthaltene naturwissenschaftliche Aussage separat anhand von Fachquellen beurteilt werden kann.

## 8. Überprüfbare Kriterien für den gewünschten Prüffall

Die folgende Liste ist eine **nachträglich offengelegte Auditstruktur**, kein vorab registrierter Benchmark. Sie ermöglicht eine Prüfung der Arbeit, ohne aus einem einzelnen Fall eine Leistungsrangfolge abzuleiten.

| Kriterium | Was überprüfbar sein soll | Stand oder Grenze dieses Durchlaufs |
| --- | --- | --- |
| Vollständige Materialerfassung | Alle verfügbaren Captionblöcke und die ganze Laufzeit berücksichtigen; Werbung und Outro ausweisen. | 32 Blöcke gelesen; lückenlose Segmenttabelle vorhanden. Vollständigkeit bezieht sich auf das verfügbare Textmaterial. |
| Ehrliche audiovisuelle Abdeckung | Nur tatsächlich gesehene oder gehörte Stellen als kontrolliert bezeichnen. | Wiedergabe nach erneutem Versuch bei 0:00, `readyState = 0`; keine eigene audiovisuelle Vollsichtung. |
| Nachvollziehbare Aussagen | Stabile IDs, eigene Paraphrasen, Quellen und konkrete Begründungen verbinden. | Im strukturierten Datensatz dokumentiert; Urteile können einzeln angefochten und korrigiert werden. |
| Zutreffende Zuschreibung | Fremdzitat, eigene Aussage und Haltung des Hosts trennen. | Vier Sprecher und Übernahmeentscheidungen erfasst; Zuordnung bleibt wegen fehlender Tonkontrolle plausibel. |
| Quellenqualität und Zeitbezug | Originalquellen öffnen und passende Zeiträume verwenden. | Quellen und Rechercheschritte dokumentiert; Aktualisierungen nach dem Videodatum müssen kenntlich bleiben. |
| Umgang mit Unsicherheit | Fehlenden Zugang, fehlenden Beleg, Widerlegung und Mehrdeutigkeit unterscheiden. | Offene Bild-/Tonfragen und unklare politische Referenzen ausdrücklich ausgewiesen. |
| Rechen- und Bewertungsdisziplin | Annahmen nennen, doppelte Zählung vermeiden und keinen Index von Hand setzen. | Rechnungen bei den Sachbehauptungen; Gesamtanzeige wird aus Daten und Projektregeln berechnet. |
| Technische Gültigkeit | Datenmodell und Projektregeln maschinell kontrollieren. | Für den ersten strukturierten Zwischenstand waren `build-index.js`, `faktenindex.js pruefen` und `wissen.js pruefen` erfolgreich; auch die Rhetorikvalidierung meldete keine Fehler. Das prüft die Struktur, nicht die Wahrheit sämtlicher Inhalte. |
| Öffentliche Nachvollziehbarkeit | Frühstand und spätere Änderungen versionieren. | Erster öffentlich versionierter Stand: PR #32. Weitere Veröffentlichung und spätere Korrekturen müssen über ihre tatsächlichen Versionen nachvollziehbar bleiben. |
| Vergleichbarkeit mit anderen Systemen | Gleiche Eingabe, gleicher Quellenzugang, gleiches Zeitbudget und unabhängige Bewertung. | Nicht durchgeführt. Es liegen keine vergleichbaren Codex-/Claude-Durchläufe und keine unabhängigen Benchmarknoten vor. |

Für einen kontrollierten Vergleich müssten vor einem weiteren Durchlauf dieselben Aufgaben, Stichtage, Datenzugänge, Veröffentlichungsrechte und Bewertungskriterien festgelegt werden. Notwendig wären zudem eine von den geprüften Systemen unabhängige Bewertung sowie ein nachvollziehbarer Umgang mit Zugangsfehlern. Bearbeitungsdauer, Kosten und Fehlerraten wurden hier nicht in einem solchen Versuchsdesign erhoben.

Dieses Protokoll belegt damit einen konkreten, versionierten Arbeitsversuch mit dokumentierten Grenzen. **Eine Leistungsüberlegenheit von ChatGPT Pro gegenüber anderen Systemen wird daraus nicht behauptet.**
