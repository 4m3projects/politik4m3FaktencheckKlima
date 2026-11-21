> **Abschlussnachtrag, 21.11.2026:** Die Sachrecherche ist abgeschlossen. Die ergänzende direkte Standbildkontrolle und der erneute Quellenabgleich stehen in [06_abschluss.md](06_abschluss.md). Eine lückenlose audiovisuelle Vollprüfung wird weiterhin nicht behauptet.

# Ausführliche Analyse des Wärmepumpen-Videos

**Alfred räumt auf: Warum regt das Wort Wärmepumpe so viele auf?**  
Veröffentlicht am 21. November 2026, Laufzeit 21:08. Prüfstand: 21. November 2026.

**Ergebnis:** Die zentralen technischen Erklärungen, die wesentlichen Mess- und Preisangaben und große Teile der politischen Chronologie sind belastbar. Acht erfasste Aussagen benötigen begrenzte Präzisierungen. Kein erfasster Sachpunkt wurde als widerlegt eingeordnet.

**Grenze:** Alle zugänglichen gesprochenen Abschnitte wurden anhand des vollständigen Captiontexts und der Quellen bearbeitet. Die direkte Videowiedergabe blieb bei 0:00. Eine eigene vollständige Bild- und Tonprüfung und eine Vollprüfung ausschließlich eingeblendeter Daten fehlen. Der Status bleibt deshalb „Teilbestand geprüft“.

Die folgenden Kapitel erläutern die Befunde. [Alle Einzelprüfungen](03_einzelpruefungen.md) enthalten stabile Aussage-IDs, ungefähre Zeitintervalle, Begründungen und Quellen. [Das Prüfprotokoll](04_pruefprotokoll.md) dokumentiert Materialzugang, Gegenprüfung und verbleibende Aufgaben. [Der Quellenabgleich](05_quellenabgleich.md) führt Q01 bis Q37 einzeln.

## Technik und Physik: Eine tragfähige Erklärung mit einigen Präzisierungen

Die physikalische Erklärung in Alfreds Video ist insgesamt schlüssig. Der Kältekreislauf, die Druckbeispiele und die konkreten Leistungszahlen lassen sich nachvollziehen. Ergänzungen sind vor allem dort sinnvoll, wo eine anschauliche Vereinfachung wie eine allgemeine Betriebszusage klingen könnte.

**Prüfgrundlage:** vollständig vorliegende deutsche Untertitel und die angegebenen Fachquellen, ergänzt durch Hersteller- und Behördeninformationen. Die Zeitangaben bezeichnen ungefähre Captionintervalle. Eine eigene vollständige Ton- und Bildkontrolle ist damit nicht verbunden; die richtige Darstellung einzelner Animationen wird hier nicht behauptet.

### 1. Warum kalte Luft trotzdem eine Wärmequelle ist

**Etwa 02:10–04:01.** Alfreds Einstieg über die Rechenzentrumswärme ist grundsätzlich richtig: Elektrische Energie, die Rechner aufnehmen, erscheint schließlich nahezu vollständig als Wärme. Für eine Wohnung nutzbar wird diese Abwärme erst durch eine passende Wärmeübertragung. Der Energieverbrauch der Rechner allein sagt noch nichts über eine solche Nutzung aus. Diesen Unterschied erläutern auch [JLLs Fachbeitrag zur Rechenzentrumsabwärme](https://www.jll.com/de-de/insights/abwarme-aus-rechenzentren) und die [US-Energiebehörde zur Kühlung von Rechenzentren](https://www.energy.gov/cmei/femp/cooling-water-efficiency-opportunities-federal-data-centers).

Auch Luft unter null Grad Celsius besitzt thermische Energie. Der absolute Nullpunkt liegt bei −273,15 °C; Alfreds Rundung auf −273 °C ist für diese Einführung angemessen. Fachsprachlich bezeichnet Wärme die übertragene Energie. Die Alltagssprache spricht dagegen häufig von der in einem Gegenstand enthaltenen Wärme. Diese sprachliche Vereinfachung macht die Erklärung nicht falsch. Die Temperaturumrechnung bestätigt das [amerikanische Metrologieinstitut NIST](https://www.nist.gov/pml/owm/si-units-temperature).

Das Bild mit ungefähr neun Zehnteln benötigt allerdings eine Bedingung. Für −10 °C Außenluft und 20 °C Zimmerluft ergibt sich:

```
263,15 K / 293,15 K ≈ 0,898
```

Bei gleicher Luftmenge ist das im idealisierten Gasmodell ein verständlicher Vergleich der thermischen Bewegungsenergie. Das [OpenStax-Lehrbuch erläutert die Beziehung zwischen innerer Energie und absoluter Temperatur](https://openstax.org/books/university-physics-volume-2/pages/3-5-heat-capacities-of-an-ideal-gas). Daraus folgt noch keine bestimmte nutzbare Heizwärme. Für die Wärmepumpe zählen zusätzlich Temperaturunterschied, Wärmeübertragung und Antriebsarbeit. Die zentrale Aussage bleibt richtig: Der Verdampfer kann kälter als die Außenluft arbeiten und dadurch Energie aufnehmen.

### 2. Die vier Stationen und die Rolle des Drucks

**Etwa 04:01–06:44.** Die Erklärung über den Schnellkochtopf funktioniert: Höherer Druck verschiebt den Siedepunkt. Die genannten 116 °C sind ein mögliches Betriebsbeispiel. Die verlinkte [Fachveröffentlichung im Physik Journal](https://pro-physik.de/zeitschriften/download/21006) nennt dafür ungefähr 75 Kilopascal Überdruck. Andere Druckstufen ergeben andere Temperaturen.

Der beschriebene Wärmepumpenkreislauf lässt sich so zusammenfassen:

| Station | Vorgang | Aufgabe |
|---|---|---|
| Verdampfer | Kaltes Kältemittel verdampft bei niedrigem Druck. | Energie aus der Wärmequelle aufnehmen. |
| Verdichter | Dem Dampf wird mechanische Arbeit zugeführt; Druck und Temperatur steigen. | Ein höheres Temperaturniveau erreichen. |
| Verflüssiger | Das Kältemittel gibt Energie ab und kondensiert. | Wärme an Luft oder Heizwasser übertragen. |
| Expansionsventil | Druck und Temperatur sinken; ein Flüssigkeits-Dampf-Gemisch entsteht. | Den kalten Betriebspunkt wiederherstellen. |

Diese Abfolge entspricht den Erläuterungen von [Natural Resources Canada](https://natural-resources.canada.ca/energy-efficiency/energy-star/heating-cooling-heat-pump) und dem [Fachverband AHRI](https://www.ahrinet.org/scholarships-education/education/homeowners/how-things-work/air-source-heat-pumps).

Auch Alfreds Propanwerte passen. Die [Climalife-Stofftabelle für R290](https://climalife.com/wp-content/uploads/2022/09/uploadsproductmediadocumenthc-r-290-en.pdf) nennt folgende Sättigungspunkte:

| Temperatur | Druck, absolut |
|---|---:|
| −42,12 °C | 1,013 bar |
| −10 °C | 3,453 bar |
| +45 °C | 15,343 bar |

Zwischen den beiden Beispielbetriebspunkten liegt damit ein Druckverhältnis von rund 4,44. Alfreds Formulierung eines ungefähr vierfachen Drucks ist als Rundung vertretbar; präziser wäre viereinhalbfach. Ein nach der Verdichtung zunächst über 50 °C warmer Dampf und anschließende Kondensation bei rund 45 °C sind plausibel. Es handelt sich um Beispielzustände, nicht um feste Temperaturen jeder Anlage.

Beim Expansionsventil bleibt die spezifische Enthalpie näherungsweise gleich. Ein Teil der Flüssigkeit verdampft; das Gemisch erreicht einen niedrigeren Druck und eine niedrigere Temperatur. Alfred lässt diesen Zwischenschritt aus, beschreibt aber die Funktion richtig. Das [BFE-Fachbuch zu Wärmepumpen](https://pubdb.bfe.admin.ch/de/publication/download/3188) erklärt die thermodynamischen Größen und den Kreisprozess ausführlicher.

### 3. Kühlschrank, Splitgerät und Monoblock

**Etwa 06:44–08:05.** Der Kühlschrankvergleich trifft den gemeinsamen Grundprozess: Innen wird Wärme aufgenommen und an den Raum abgegeben. Bei einer Heizung ist die warme Seite der gewünschte Nutzen. Ein umschaltbares Splitgerät kann im Sommer Wärme aus dem Zimmer nach außen transportieren. Dabei wird der Kältemittelweg umgeschaltet; der Verdichter läuft nicht einfach rückwärts.

Die Unterscheidung zwischen Luft-Luft und Luft-Wasser ist ebenfalls richtig. Ein Splitgerät erwärmt Raumluft direkt. Eine Luft-Wasser-Wärmepumpe versorgt einen Wasser-Heizkreis und kann auch die Trinkwassererwärmung übernehmen. Eine gewöhnliche Split-Klimaanlage übernimmt diese Warmwasseraufgabe üblicherweise nicht. Deshalb sind Kosten- und Messwerte beider Systeme nur begrenzt unmittelbar vergleichbar. [ENERGY STAR beschreibt die Bauweise und Verwendung von Luftwärmepumpen und Mini-Splits](https://www.energystar.gov/products/air_source_heat_pumps).

Alfred unterscheidet außerdem ausdrücklich die erwähnten Propan-Monoblocks von Sinans geplantem Splitgerät. Bei der [Viessmann Vitocal 250-A](https://www.viessmann.de/content/dam/public-brands/master/products/heat-pump/vitocal-250-a/DB-6195458-vitocal-250-a.pdf) liegt der Kältekreis im Außengerät; Heizwasserleitungen verbinden ihn mit dem Haus. Bei einem Splitgerät verbinden Kältemittelleitungen die Einheiten. Sinans genaue Modellwahl und dessen Kältemittel bleiben unbekannt. Aus dem Propanbeispiel lässt sich dazu nichts Weiteres ableiten.

### 4. Stromverbrauch und Leistungszahlen

**Etwa 06:44–07:01 und 08:20–08:53.** Die Aussage, der Strom werde nur für die Verdichtung benötigt, ist zu knapp. Der Verdichter ist der Hauptverbraucher; hinzu kommen Ventilatoren, Pumpen, Regelung und gegebenenfalls Zusatzheizung. Das BFE-Fachbuch führt diese Verbraucher bei den Bilanzgrenzen getrennt auf.

Die Einheitenrechnung stimmt: 2 Kilowatt während einer halben Stunde ergeben 1 Kilowattstunde. Auch die Umwandlung einer elektrischen Widerstandsheizung ist am Gerät ungefähr eins zu eins. Bedarfsgerecht nutzbare Wärme und ungewollte Wärmeabgabe sind anschließend gesondert zu betrachten. Das erläutert die [US-Energiebehörde zur Widerstandsheizung](https://webarchive-beta.loc.gov/playback-services/general/20240224010919mp_/https%3A/www.energy.gov/energysaver/electric-resistance-heating).

Bei Gas- und Ölheizungen braucht eine genaue Vergleichsrechnung einen Nutzungsgrad. Neben Abgasverlusten können weitere Verluste auftreten. Auch der Bezug auf Heizwert oder Brennwert muss einheitlich bleiben. Alfreds vereinfachte Erklärung verletzt die Energieerhaltung nicht; für konkrete Kosten- und Emissionswerte sind diese Annahmen jedoch relevant.

### 5. Hohe Vorlauftemperatur und Frost

**Etwa 12:19–12:52.** Die angegebenen COP-Werte sind nachprüfbar. Der Typ **Viessmann 251.A10** erreicht laut Hersteller bei −7 °C Außenluft und 35 °C Heizwasser einen COP von **3,16**. Bei ebenfalls −7 °C außen und 55 °C Heizwasser sind es **2,13**. Gerundet stimmen Alfreds **3,2 und 2,1**. Die [im Video verlinkte Datenblattfassung](https://documents.unidomo.de/de/viessmann/6195458VDP00006_1.pdf) enthält ebenfalls passende Werte in der A10-Spalte.

COP beschreibt einen festgelegten Betriebspunkt. Eine Jahresarbeitszahl setzt dagegen die über einen längeren Zeitraum gelieferte Wärme zum erfassten Stromverbrauch ins Verhältnis. Beide Kennzahlen müssen anhand ihrer jeweiligen Bilanzgrenzen verglichen werden.

Die Botschaft, Wärmepumpen funktionierten auch bei Frost, ist richtig. Die Einschränkung auf bloß schlechtere Effizienz bleibt allerdings unvollständig: Heizleistung, Abtauung, Gebäude-Wärmebedarf und möglicher Zusatzheizbedarf zählen ebenfalls. Das genannte Herstellerdatenblatt begrenzt den Heizbetrieb auf Außenlufttemperaturen ab −20 °C. Eine sinnvolle Formulierung wäre deshalb: Innerhalb ihres ausgelegten Temperaturbereichs arbeitet sie auch bei Frost; Leistung und Wärmebedarf müssen zusammenpassen.

### 6. Historisches Beispiel und Token-Schluss

**Etwa 08:05–08:20 und 19:57 bis Schluss.** Die Geschichte der Zürcher Rathausanlage ist belegt: Inbetriebnahme 1938, Wärmequelle Limmat und Ersatz der Holzöfen. Der [fachhistorische Bericht von Martin Zogg](https://www.zogg-engineering.ch/Publi/GeschichteWP_Z_Zogg.pdf) beschreibt 63 Betriebsjahre bis zum Ersatz 2001; der [Kanton Zürich bestätigt den frühen Einsatz](https://www.zh.ch/content/dam/zhweb/bilder-dokumente/footer/news/2021/09/Abstimmung%20Energiegesetz%2C%20Faktenblatt%20W%C3%A4rmeerzeugerersatz.pdf). Das ist ein eindrucksvoller Einzelfall, keine Lebensdauerprognose für heutige Haushaltsgeräte.

Die am Schluss genannten rund 790.000 Tokens lassen sich ohne Sitzungsprotokoll nicht unabhängig überprüfen. Daraus folgt kein negatives Wahrheitsurteil. Eine Tokenzahl allein liefert auch keinen Stromverbrauch; dazu wären unter anderem Angaben zu Modellen, Hardware und Verarbeitung nötig. Alfred nennt keine konkrete Umrechnung in Kilowattstunden. Seine Rückkehr zur Wärme-Metapher sollte deshalb nicht als zusätzliche physikalische Falschbehauptung bewertet werden.



---

## Wärmepumpen: Was Alfreds Zahlen tragen – und welche Grenzen dazugehören

**Prüfbereich: 08:53–13:08. Prüfstand: 21. November 2026.** Dieser Abschnitt untersucht Alfreds Aussagen zu Effizienz, Emissionen, Kosten und Förderung. Die folgenden Rechnungen dienen ausschließlich dazu, die Videoargumentation zu prüfen; sie sind keine persönliche Heizungsberatung.

Alfreds Zahlenkern ist weitgehend belastbar. Die Feldmessung, die Energiepreise, der Angebotsmedian und die aktuellen Förderbeträge lassen sich bestätigen. Die wichtigsten Ergänzungen betreffen die Bezugsgrößen: Welche Anlagen wurden untersucht? Wo wurde Wärme gemessen? Welche Emissionen zählen mit? Und welche Voraussetzungen gelten für den Zuschuss? Solche Grenzen machen eine verständliche Beispielrechnung nicht automatisch falsch. Entscheidend ist, ob das Video daraus eine weitergehende Sicherheit ableitet, als die Daten erlauben.

### 1. Die Fraunhofer-Messung: belastbare Daten, aber kein Leistungsversprechen

Alfred nennt ab 08:53 eine vierjährige Untersuchung mit 77 Wärmepumpen, für Luft-Wasser-Anlagen eine durchschnittliche Jahresarbeitszahl von 3,4 und eine Spanne von 2,6 bis 4,9. Das entspricht der [Pressemitteilung des Fraunhofer ISE vom 3. November 2025](https://www.ise.fraunhofer.de/de/presse-und-medien/presseinformationen/2025/waermepumpen-heizen-auch-im-altbau-klimafreundlich-forschungsprojekt-des-fraunhofer-ise-abgeschlossen.html). Auch die Beteiligung von neun Herstellern stimmt. Dass Alfred sie erwähnt, ist ein sinnvoller Transparenzhinweis; allein daraus folgt weder eine Entwertung noch eine besondere Bestätigung der Messergebnisse.

Für eine genaue Einordnung muss man den gesamten Projektumfang vom ausgewerteten Teil unterscheiden. Der Pool umfasste 77 Anlagen, darunter 61 mit Außenluft als Wärmequelle. Der Mittelwert 3,4 und die genannte Spanne beziehen sich auf **49 Luft-Wasser-Anlagen im Hauptauswertejahr 2024**. Es handelt sich damit nicht um einen gemeinsamen Vierjahresmittelwert aller 77 Geräte. Die [Projektbeschreibung](https://www.ise.fraunhofer.de/de/forschungsprojekte/wp-qs-im-bestand.html) macht diese Abgrenzung ausdrücklich. Alfreds verkürzte Darstellung ist als Zusammenfassung verständlich; diese Präzisierung sollte im ausführlichen Faktencheck ergänzt werden.

Die Jahresarbeitszahl beschreibt das Verhältnis von bereitgestellter Wärme zu eingesetztem Strom über einen längeren Zeitraum. Der verwendete Wert ist eine Erzeugerarbeitszahl an der sogenannten Bilanzgrenze 3. Er berücksichtigt unter anderem den Heizstab und den Wärmequellenantrieb; die für das Abtauen entzogene Wärme wird abgezogen. Speicher- und Verteilverluste auf dem weiteren Weg sind damit nicht sämtlich abgedeckt. Der [Abschlussbericht, Seiten 67–69](https://www.ise.fraunhofer.de/content/dam/ise/de/documents/projekte/WP-QS_Schlussbericht.pdf), beschreibt diese Grenze. Sie ist wichtig, wenn man verschiedene Studien oder Heizsysteme vergleicht: Eine Zahl am Wärmeerzeuger darf nicht unbemerkt mit einer Zahl für tatsächlich im Zimmer nutzbare Wärme gleichgesetzt werden.

Der fehlende Zusammenhang zwischen Baujahr und Effizienz bedeutet außerdem nicht, dass Dämmung oder Heizkörper bedeutungslos wären. Ein Baujahr beschreibt den heutigen Gebäudezustand nur grob. Vor allem ist Sinans geplantes Gerät eine **Luft-Luft-Wärmepumpe**. Alfred benennt den Typenunterschied zuvor korrekt. Die Messwerte der Luft-Wasser-Studie sind deshalb eine Illustration des Prinzips, kein individueller Nachweis für seine Splitanlage.

### 2. CO₂: richtige Division, sorgfältig zu benennende Vergleichsbasis

Die 344 Gramm CO₂ je Kilowattstunde Strom stimmen mit der [UBA-Veröffentlichung vom 23. März 2026](https://www.umweltbundesamt.de/themen/co2-emissionen-pro-kilowattstunde-strom-2025-nur) überein. Es ist der geschätzte Wert für 2025. Alfreds Rechnung ergibt:

**344 ÷ 3,4 = 101,18 Gramm CO₂ je Kilowattstunde bereitgestellter Wärme.**

Gegenüber seiner Gasreferenz von 190 Gramm entspricht das rund 47 Prozent weniger. Die gerundete Aussage einer ungefähr halbierten Belastung passt also zur gewählten Rechnung.

Die Gasreferenz braucht allerdings eine zusätzliche Annahme. Alfreds [verlinkte EBeV-Tabelle, Anlage 1](https://www.gesetze-im-internet.de/ebev_2022/anlage_1.html), enthält zunächst einen Brennstofffaktor. Aus 3,2508 Gigajoule je Megawattstunde und 0,056 Tonnen CO₂ je Gigajoule ergeben sich **182,0448 Gramm je bezogener Brennstoff-kWh**, bezogen auf den Brennwert. Für die erzeugte Nutzwärme muss dieser Wert durch den Nutzungsgrad geteilt werden. Bei beispielhaft 95 Prozent ergeben sich 191,6 Gramm, bei 90 Prozent 202,3 Gramm. Rund 190 Gramm sind somit für einen effizienten Brennwertkessel plausibel, aber kein allgemeiner Wert jeder Gasheizung. Die historische Verordnung wird hier als Quelle des Rechenfaktors verwendet, nicht als Behauptung über heutige Meldepflichten.

Hinzu kommt die zeitliche und sachliche Abgrenzung. Der Jahresmittelwert des Stroms bildet das tatsächliche Verbrauchsprofil einer bestimmten Heizung nicht vollständig ab. Eine genauere Betriebsbilanz gewichtet den Emissionsfaktor jeder Zeitspanne mit dem tatsächlichen Strombedarf. Hoher Heizbedarf, sinkende Leistungszahlen und die Zusammensetzung der Stromerzeugung treten nicht zufällig unabhängig voneinander auf. Die Fraunhofer-Untersuchung berücksichtigt diesen Zusammenhang und berichtet für den untersuchten Anlagenpool 2024 eine Minderung von 64 Prozent gegenüber ihrer Gasreferenz. Wegen anderer Vergleichsbedingungen ersetzt dieser Wert Alfreds eigene Rechnung nicht einfach. Quelle: [Fraunhofer-Ergebnisse und Methodik](https://www.ise.fraunhofer.de/de/presse-und-medien/presseinformationen/2025/waermepumpen-heizen-auch-im-altbau-klimafreundlich-forschungsprojekt-des-fraunhofer-ise-abgeschlossen.html).

Ebenso sind direkte CO₂-Emissionen keine vollständige Lebenszyklusbilanz einschließlich aller Vorketten und Anlagenbestandteile. Das [UBA unterscheidet diese Größen ausdrücklich](https://www.umweltbundesamt.de/system/files/medien/11850/publikationen/2026-03/16_2026_CC.pdf). Für einen umfassenderen Vergleich müssten beide Heizsysteme nach denselben Regeln bilanziert werden. Nur auf einer Seite zusätzliche Emissionen einzurechnen wäre methodisch unfair.

Diese Grenzen widerlegen Alfreds Rechnung nicht. Sie bestimmen, was sie aussagt: einen überschlägigen Vergleich direkter Betriebs-CO₂-Emissionen mit einer angegebenen Effizienz.

### 3. Heizkosten: Die Rechenbeispiele funktionieren

Die [Destatis-Mitteilung zum ersten Halbjahr 2026](https://www.destatis.de/DE/Presse/Pressemitteilungen/2026/09/PD26_345_61243.html) nennt 37,97 Cent je Kilowattstunde Haushaltsstrom und 11,58 Cent je Kilowattstunde Erdgas. Das sind statistische Gesamtpreise, die auch feste Preisbestandteile einbeziehen. Die Gaszahl bezieht sich auf den Brennstoff, nicht bereits auf verlustfrei bereitgestellte Wärme.

Mit einer Jahresarbeitszahl von 3,4 ergeben sich für die Wärmepumpe 11,17 Cent je Kilowattstunde Wärme. Bei einem beispielhaften Gasnutzungsgrad von 95 Prozent wären es dort 12,19 Cent. Alfreds Einordnung ähnlicher Betriebskosten mit Haushaltsstrom ist daher vertretbar; er nennt ausdrücklich die Abhängigkeit von der Effizienz.

Die folgende **eigene Beispielrechnung** zeigt diese Abhängigkeit. Sie setzt die Preise unverändert an und verändert ausschließlich die Jahresarbeitszahl:

| Angenommene Jahresarbeitszahl | Wärme bei 37,97 ct/kWh Strom | Wärme bei 20,66 ct/kWh Strom | Direkte CO₂-Emissionen bei 344 g/kWh Strom |
|---|---:|---:|---:|
| 2,6 | 14,60 ct/kWh Wärme | 7,95 ct/kWh Wärme | 132,3 g/kWh Wärme |
| 3,4 | 11,17 ct/kWh Wärme | 6,08 ct/kWh Wärme | 101,2 g/kWh Wärme |
| 4,9 | 7,75 ct/kWh Wärme | 4,22 ct/kWh Wärme | 70,2 g/kWh Wärme |

Berechnet wurde jeweils **Strompreis beziehungsweise Emissionsfaktor geteilt durch die Jahresarbeitszahl**. Die Tabelle prognostiziert keine bestimmte Anlage. Insbesondere ist der Bestwert 4,9 kein üblicher Anspruch an jedes Gebäude.

Die zweite Preisspalte beruht auf [Verivox’ eigener Tarifauswertung](https://www.verivox.de/heizstrom/waermepumpenstrom-preisentwicklung/): 20,66 Cent bei 7.500 Kilowattstunden Jahresverbrauch, Stand 13. Juli 2026, für günstige Neukundentarife mit bestimmten Bedingungen. Alfred grenzt dieses günstige Angebot ausdrücklich vom allgemeinen Durchschnitt ab. Das ist eine Stärke seiner Darstellung. Ob ein Haushalt diesen Vorteil erreicht, hängt jedoch auch vom verfügbaren Tarif und Messkonzept ab.

Der [Passauer Nachtspeichertarif](https://energie.stadtwerke-passau.de/files/dateien/energie/daten/Strom/Heiztarife/Heizstrom%28wst%29_ab%2001.04.2026.pdf) bestätigt 23,59 Cent im Niedertarif; bei getrennter Messung kommen 83,97 Euro Grundpreis jährlich hinzu. Er betrifft bestimmte Bestandsanlagen. Alfreds Rangfolge innerhalb der gewählten Beispiele stimmt. Ein bundesweit repräsentativer Tarifvergleich entsteht dadurch nicht.

### 4. Investition: Rund 35.000 Euro sind ein Median

Die [Verbraucherzentrale Rheinland-Pfalz](https://www.verbraucherzentrale-rlp.de/media/34390/download) untersuchte 160 Angebote aus dem Zeitraum September 2025 bis April 2026. Der Median beträgt 34.898 Euro, der arithmetische Mittelwert 36.397 Euro. Alfreds Angabe eines mittleren Angebots um 35.000 Euro ist deshalb richtig. Der Median ist der Wert in der Mitte der geordneten Angebote; einzelne besonders teure Angebote beeinflussen den Mittelwert stärker.

Die untersuchten Angebote stammen aus einer regionalen Beratungsstichprobe. Der Bericht warnt selbst vor einer unmittelbaren Übertragung auf den Gesamtmarkt. Außerdem variieren Leistungsumfang und Gebäudesituation. Ein Angebotsmedian ist weder ein garantierter Komplettpreis noch ein Preis für jede Wärmepumpenart.

Gerade beim Bezug zu Sinan ist das relevant: Ein Luft-Wasser-Heizungsumbau und eine Luft-Luft-Splitanlage umfassen unterschiedliche Arbeiten. Aus dem genannten Median lässt sich daher nicht der Preis seines Vorhabens ableiten. Alfred spricht an dieser Stelle allerdings ausdrücklich von Luft-Wasser-Angeboten; diese Typenangabe sollte bei der Bewertung erhalten bleiben.

### 5. Förderung: 46 Prozent aus 28.000 Euro sind aktuell bestätigt

Das [KfW-Merkblatt 458, Stand September 2026](https://www.kfw.de/PDF/Download-Center/F%C3%B6rderprogramme-(Inlandsf%C3%B6rderung)/PDF-Dokumente/6000005131_M_458.pdf), bestätigt die von Alfred genannten Zahlen: 30 Prozent Grundförderung plus 16 Prozent Klimageschwindigkeitsbonus, bei höchstens 28.000 Euro berücksichtigten Kosten für die erste Wohneinheit. Eine Gegenprüfung mit älteren Förderbeträgen wäre falsch.

Der Zuschuss ist aber an Bedingungen geknüpft. Der Geschwindigkeitsbonus verlangt insbesondere Selbstnutzung durch den Eigentümer und den Austausch einer **funktionstüchtigen** Altanlage. Bei gewöhnlichen Gaszentralheizungen gilt grundsätzlich ein Mindestalter von 20 Jahren; Gasetagenheizungen gehören zu den gesondert aufgeführten Fällen. Weitere technische und verfahrensbezogene Voraussetzungen kommen hinzu. Diese Anspruchsbedingungen fehlen in Alfreds stark verkürztem Satz teilweise.

**Eigene Beispielrechnung:** Eine Installation kostet 35.000 Euro, mindestens 28.000 Euro der Ausgaben sind anerkennungsfähig, und Grundförderung sowie Geschwindigkeitsbonus werden bewilligt. Dann beträgt der Zuschuss:

**28.000 Euro × 46 Prozent = 12.880 Euro.**

Von der Gesamtrechnung verbleiben **22.120 Euro**. Die Rechnung zeigt zugleich, warum 46 Prozent nicht auf die gesamte Rechnung angewendet werden dürfen. Zusätzliche Einkommensförderung kann das Ergebnis verändern; ohne erfüllte Bonusbedingungen fällt es anders aus.

### 6. Spezifische Einsparung ist noch keine Gesamtwirtschaftlichkeit

Niedrigere Kosten je Kilowattstunde Wärme sind ein Betriebsvorteil. Ob sich eine höhere Anfangsinvestition insgesamt auszahlt, hängt zusätzlich vom jährlichen Wärmebedarf, der Investitionsdifferenz, Förderung, Wartung, Finanzierung und Nutzungsdauer ab. Eine Einsparung je Wärmeeinheit ist daher noch keine Amortisationszeit.

Alfred behauptet in seinen Rechenbeispielen jedoch keine vollständige Lebenszeitrechnung. Er behandelt die Anschaffung ausdrücklich als Nachteil und nennt die Bedeutung guter Planung. Die [technische Verbraucherzentrale-Broschüre](https://www.verbraucherzentrale-rlp.de/sites/default/files/2026-02/260210_wp-faktencheck_vzrp.pdf) stützt diese praktische Einschränkung.

Das angemessene Prüfurteil lautet deshalb: **Die Zahlen und vereinfachten Vergleiche tragen Alfreds bedingtes Fazit.** Für eine individuelle Entscheidung reichen sie nicht aus. Ergänzungsbedarf besteht vor allem bei Fördervoraussetzungen, Gasnutzungsgrad und der Übertragung zwischen unterschiedlichen Wärmepumpentypen.



---

## Gesetz, Medien, Kampagnen und Akzeptanz

**Prüfbereich: etwa 13:08–19:57. Rechts- und Quellenstand: 21. November 2026.** Die politische Passage ist eine Mischung aus überprüfbaren Daten, zugeschriebenen Forschungsbefunden und Alfreds eigener Deutung. Diese Ebenen verlangen unterschiedliche Urteile. Eine korrekte Wiedergabe einer Studie beweist beispielsweise noch nicht deren gesamte kausale Interpretation.

### 1. Die Gesetzesgeschichte ist im Kern richtig

Das Gebäudeenergiegesetz stammt aus dem Jahr 2020. Der [Bundestag dokumentiert den Beschluss](https://www.bundestag.de/webarchiv/textarchiv/2020/kw25-de-energieeinsparrecht-698640) mit den Stimmen der damaligen Koalition aus CDU/CSU und SPD. Alfreds historische Einordnung stimmt; formal beschloss das Parlament das Gesetz.

Der [Ampel-Koalitionsvertrag von 2021](https://www.spd.de/fileadmin/Dokumente/Koalitionsvertrag/Koalitionsvertrag_2021-2025.pdf) sah die 65-Prozent-Vorgabe für neu eingebaute Heizungen zunächst ab 2025 vor. Auch die Vorziehung auf 2024 im März 2022 ist belegt. Besonders wichtig für den Quellenabgleich: Alfreds Q25 ist zwar ein Dokument vom März 2023, verweist aber auf Seite 16 ausdrücklich auf die Entscheidung des Koalitionsausschusses vom **24. März 2022**. Das jüngere Veröffentlichungsdatum macht den [rückblickenden Beleg](https://www.spd.de/fileadmin/Dokumente/Beschluesse/20230328_Koalitionsausschuss.pdf) nicht falsch.

Die Unterscheidung zwischen neu eingebauten und bereits funktionierenden Heizungen ist ebenfalls sachgerecht. Eine allgemeine Pflicht zur sofortigen Entfernung aller laufenden Gas- und Ölanlagen lässt sich daraus nicht ableiten. Besondere Altanlagenregeln und Übergänge müssen bei einer individuellen Rechtsfrage zusätzlich geprüft werden.

Präzisiert werden sollte dagegen Alfreds Satz über 2045: Entscheidend war das Ende des Betriebs mit **fossilen Brennstoffen**, nicht pauschal die technische Bauart eines Gas- oder Ölkessels. Diese Verkürzung rechtfertigt eine begrenzte Teilbewertung, keine Behauptung, Alfred habe die gesamte Gesetzeslage erfunden.

Eine praktisch wichtigere Verkürzung betrifft die kommunale Wärmeplanung. Ein Wärmeplan allein hätte die 65-Prozent-Pflicht nicht schon vor den allgemeinen Fristen ausgelöst. Dazu war eine zusätzliche Entscheidung über ein Wärme- oder Wasserstoffnetzgebiet erforderlich; die Rechtsfolge sollte einen Monat nach Bekanntgabe eintreten. Daneben bestanden gesetzliche Fristen. Diese Trennung ist im [Gesetzgebungsdokument, insbesondere § 71 Absatz 8 und dessen Begründung](https://dserver.bundestag.de/btd/20/076/2007619.pdf), nachvollziehbar.

### 2. Den Rechtsstand von 2026 nicht mit älteren Informationen verwechseln

Alfred nennt den 29. Juli 2026 als Ende der bisherigen 65-Prozent-Regel. Die [Bundesregierung bestätigt dieses Inkrafttreten der neuen Regelung](https://www.bundesregierung.de/breg-de/bundesregierung/bundeskanzleramt/neues-gebaeudemodernisierungsgesetz-2430284). Eine Prüfung, die hier nur den Rechtsstand von 2024 oder 2025 zugrunde legt, würde selbst einen Fehler erzeugen.

Auch die [aktuelle gesetzliche Auswahlmöglichkeit für Gas- und Ölheizungen](https://www.gesetze-im-internet.de/geg/__42.html) ist belegt. Wahlfreiheit bedeutet dabei nicht, dass jede spätere Anforderung wegfällt. Diesen Zusammenhang erkennt Alfred grundsätzlich an, indem er unmittelbar danach die steigenden Anforderungen ab 2029 anspricht.

Die sogenannte Biotreppe ist jedoch breiter als seine Kurzfassung mit Biogas und Bioöl. [§ 43 des aktuellen Gesetzes](https://www.gesetze-im-internet.de/geg/__43.html) nennt weitere zulässige Brennstoffe und Erfüllungswege. Für die dort erfassten neu eingebauten Anlagen in bestehenden Gebäuden werden 10 Prozent ab 2029, 15 Prozent ab 2030, 30 Prozent ab 2035 und 60 Prozent ab 2040 genannt. Zusätzlich bestehen unter Bedingungen technische Alternativen, etwa Solarthermie, Wärmerückgewinnung oder Wärmepumpenhybride. Der steigende Pflichtanteil stimmt; der Eindruck, ausschließlich die zwei genannten Biobrennstoffe seien möglich, wäre zu eng.

Ein zunächst denkbarer Einwand gegen Alfreds Formulierung, die früheren Fristen seien nicht mehr zur Anwendung gekommen, wurde verworfen: Die Großstadtfrist war bereits vor der Aufhebung verschoben worden. Eine pauschal behauptete Zwischenphase vom 1. bis 28. Juli 2026 wäre deshalb kein belastbarer Gegenbeleg. Die [BMWE-Unterlage](https://table.media/assets/berlin/bmwe-information-gebaudemodernisierungsgesetz.pdf) beschreibt die Fristverschiebung; das [amtliche Bundesgesetzblatt vom 26. Juni 2026](https://www.recht.bund.de/bgbl/1/2026/191/regelungstext.pdf?__blob=publicationFile&v=1) bestätigt mit Artikel 8 und 9 die rechtzeitige Änderung zum 27. Juni 2026. Die bereits frühere Geltung für bestimmte Neubauten bleibt davon zu unterscheiden.

### 3. Zwei Medienanalysen können unterschiedliche und zugleich zutreffende Befunde liefern

Der Beginn der zugespitzten BILD-Berichterstattung Ende Februar 2023, der geleakte Entwurf sowie das wiederkehrende Verbotsvokabular sind dokumentiert. Alfred benennt zudem den entscheidenden Kontext: Für neue rein fossile Anlagen hatte die Zuspitzung einen sachlichen Anknüpfungspunkt; für eine pauschale Stilllegung aller vorhandenen Heizungen wäre sie falsch.

Die [Studie von Loschke und Mitautoren](https://www.oeko.de/fileadmin/oekodoc/Heating_up_the_headlines_How_tabloid_framing_reshapes_Germany_s_Building_Energy_Act.pdf) untersucht insbesondere BILD und den Zusammenhang zwischen medialen Deutungen und politischen Änderungen. Die Größenordnungen von 333 BILD-Artikeln, mehr als 250 Hammer-Nennungen und rund 800 Artikeln mit Verbotsvokabular lassen sich der Untersuchung zuordnen. Solche Zählungen belegen zunächst die Präsenz bestimmter Begriffe. Sie messen nicht automatisch die Wirkung auf Wähler, Eigentümer oder Gesetzgeber.

Alfreds Zurückhaltung bei der kausalen Interpretation ist deshalb berechtigt. Die Originalarbeit umfasst allerdings mehr als eine bloße zeitliche Parallelisierung: Sie verbindet Textauswertung mit einer Rekonstruktion politischer Veränderungen. Das stärkt eine begründete Einflussinterpretation, isoliert aber nicht zweifelsfrei den Anteil der Berichterstattung gegenüber Koalitionsstreit, Interessenpolitik und anderen Erklärungen.

Die [Studie des Progressiven Zentrums und der Universität Mainz](https://www.progressives-zentrum.org/wp-content/uploads/2024/04/240418_DPZ_Studie_Aufgeheizte-Debatte.pdf) umfasst 2.036 Beiträge aus 19 Medien. Ihr von Alfred genanntes 93-Prozent-Ergebnis betrifft einen eng umrissenen Prüfgegenstand: Informationen zum Weiterbetrieb beziehungsweise Austausch alter Heizungen. Es ist kein Gütesiegel für 93 Prozent sämtlicher Medienaussagen. Alfred stellt diese Begrenzung selbst her.

Beide Untersuchungen unterscheiden sich in Auswahl, Fragen und Methode. Daraus folgt: Ihre Ergebnisse dürfen nebeneinander stehen. Alfreds Beschreibung verschiedener Ergebnisse ist vertretbar; ihm einen behaupteten logischen Widerspruch identischer Untersuchungen zu unterstellen, wäre eine Überdehnung seiner Aussage.

#### Eine offene Frage zur Originalstudie

Beim Nachprüfen des DPZ-Berichts fallen schwer vereinbare Bezugsgrößen auf. Neben 2.036 Gesamtbeiträgen und 378 Beiträgen mit einschlägigen Informationen nennt der Text 6 Prozent korrekte und 0,5 Prozent irreführende Darstellungen unter allen Berichten. Die eigene Rechnung ergibt **378/2.036 = 18,57 Prozent**, während **6 + 0,5 = 6,5 Prozent** sind. Die relevanten PDF-Seiten wurden in der Gegenprüfung auch visuell kontrolliert.

Ein nicht erklärter Nennerwechsel oder ein redaktioneller Fehler ist möglich. Ohne Rohdaten und Codebuch ist das hier nicht aufzulösen. Alfreds Wiedergabe der veröffentlichten 93 Prozent bleibt belegt. Der offene Punkt betrifft die vollständige Reproduktion der Quelle und darf nicht in die Behauptung umgedeutet werden, Alfreds Zahl sei widerlegt.

### 4. Finanzierung ist ein Prüfhinweis, kein automatisches Gegenargument

Alfred legt mehrere relevante Verbindungen offen: Herstellerbeteiligung am Wärmepumpenprojekt, teilweise Ministeriumsfinanzierung der Öko-Untersuchung und Campact als Auftraggeber der DPZ-Studie. Diese Angaben sind nachvollziehbar. Bei Campact entspricht die Einordnung als Kampagnenorganisation auch der [Selbstbeschreibung](https://www.campact.de/).

Aus einem Auftraggeber oder Förderer allein folgt keine Manipulation. Für die Beurteilung entscheidend bleiben Stichprobe, Messung, Auswertung, Fragestellung und Reichweite der Schlussfolgerungen. Umgekehrt hebt die Offenlegung eines möglichen Interesses die Pflicht zur Methodenkritik nicht auf. Das gilt gleichermaßen für ein Forschungsinstitut, einen Branchenverband und ein kommerzielles Vergleichsportal.

### 5. Welche Kampagnen und Kosten belegt sind

Die CDU veröffentlichte eine eigene Kampagne; das [Originalflugblatt](https://assets.ctfassets.net/nwwnl7ifahow/6pkp4XpVz3t5L0U6KUTf7B/7ad1985a1a211ebe4557f974679df1bd/Kampagne_Fair_heizen_Flugblatt_Heizungs-Hammer.pdf) trägt den Stand 10. Mai 2023. Der Titel verbindet faires Heizen mit dem Verheizen-Wortspiel. Die Untertitelform darf ohne Hörkontrolle nicht als sicherer Namensfehler Alfreds behandelt werden. Auch die [AfD-Kampagnenseite](https://www.afd.de/heizhammer-stoppen/) belegt die Existenz dieser Aktivität, nicht die Richtigkeit jedes darauf verwendeten Arguments.

Die Kostenangabe zur Woche der Wärmepumpe stimmt: Eine [Antwort der Bundesregierung](https://dserver.bundestag.de/btd/20/143/2014338.pdf) nennt **4.099.765 Euro brutto** für die Veranstaltungswoche vom 4. bis 10. November 2024 mit 196 Veranstaltungen. Dieser Betrag umfasst die Veranstaltungskampagne; er ist nicht allein ein Anzeigenbudget.

Bei der Gasindustrie zieht Alfred eine angemessene Erkenntnisgrenze: Er habe eine konkrete bezahlte Anti-Wärmepumpenkampagne nicht nachweisen können. Er sagt ausdrücklich nicht, dass es keinerlei Einfluss gegeben habe. Ohne sein Suchprotokoll lässt sich seine Recherche nicht vollständig reproduzieren. Allgemeine [Lobbyfinanzdaten](https://www.lobbyregister.bundestag.de/media/43/a3/451384/GuV-2023.pdf) ersetzen weder einen Nachweis einer bestimmten Kampagne noch einen Entlastungsbeweis.

### 6. Absatzdaten und Umfragen richtig auseinanderhalten

Der [BDH berichtet für 2023](https://www.bdh-industrie.de/presse/pressemeldungen/artikel/heizungsindustrie-rekordabsatz-in-turbulentem-marktumfeld) einen außergewöhnlich hohen Absatz. Die zugehörige [Absatztabelle](https://www.bdh-industrie.de/fileadmin/user_upload/Downloads/PresseMeldungen/Absatzzahlen_Waermemarkt_Deutschland_2023-12.pdf) bestätigt 1.308.500 Geräte insgesamt und 790.500 gasbasierte Geräte. Für 2024 weist der [Verband einen Rückgang um 46 Prozent](https://www.bdh-industrie.de/presse/pressemeldungen/artikel/heizungen-absatz-2024-um-die-haelfte-eingebrochen) aus; auch die Wärmepumpen lagen etwa in dieser Größenordnung.

Die [Halbjahresmitteilung 2026](https://www.bdh-industrie.de/fileadmin/user_upload/Downloads/PresseMeldungen/PM_BDH_Heizungsmarkt_legt_zu_11082026.pdf) nennt 194.500 Wärmepumpen bei 352.000 Wärmeerzeugern insgesamt. Die eigene Rechnung ergibt **55,26 Prozent**. Alfreds Aussage von mehr als jeder zweiten neuen Heizung passt zu dieser Absatzstatistik. Es handelt sich um verkaufte Geräte, nicht um den Anteil am gesamten Heizungsbestand. Erklärungen des Verbands zu Vorzieheffekten und zum Einfluss der Debatte sind als dessen Deutung kenntlich zu halten.

Auch die [TÜV/Ipsos-Zahlen von 2023](https://www.tuev-verband.de/pressemitteilungen/waermewende-mehrheit-fuer-austauschpflicht-kaputter-oel-und-gasheizungen) stimmen: 59 Prozent Zustimmung zum Ersatz kaputter Anlagen und 60 Prozent Ablehnung eines allgemeinen Verbots. Die Befragung umfasste 1.000 Menschen ab 16 Jahren. Die Fragen beschreiben unterschiedliche Maßnahmen. Deshalb lässt sich daraus kein isolierter Effekt bloßer Wortwahl bei sonst gleicher Regel berechnen.

Genau an dieser Stelle ist eine faire Gegenprüfung wichtig: Alfred sagt selbst, es komme darauf an, was genau gefragt werde. Sein anschließender Handwerker-/Behördenvergleich ist eine rhetorische Deutung. Ihn als behauptetes kontrolliertes Framingexperiment zu widerlegen, würde dem Video eine stärkere Aussage unterschieben.

Die [NIM-Studie 2026](https://www.nim.org/fileadmin/PUBLIC/3_NIM_Publikationen/NIM-Studien/NIMpulse/2026/NIMpulse_22_Heizung/260324_Heizung_NIMpulse_22_final.pdf) bestätigt schließlich die Wärmepumpe als häufigsten Wunschtyp: 36 Prozent gegenüber 16 Prozent für Gas. Das ist eine relative Spitzenposition, keine absolute Mehrheit. Unter den befragten Wärmepumpenbesitzern geben 75 Prozent an, wieder diesen Typ wählen zu wollen. Eine geäußerte Präferenz und eine tatsächliche spätere Investitionsentscheidung sind verschiedene Messgrößen.

### 7. Was Alfreds politische Schlussdeutung leisten kann

Die Schlussidee, Menschen hörten beim Wort Wärmepumpe den politischen Konflikt von 2023 mit, ist als Deutung erkennbar. Die geprüften Kampagnen, Medienbefunde und Befragungen machen sie plausibel. Sie belegen aber keinen exakt messbaren Anteil der Ablehnung, der allein darauf zurückginge.

Reale Kosten, die Eignung eines Gebäudes, Vertrauen in Handwerker und politische Erwartungen können nebeneinander wirken. Alfred erwähnt finanzielle und praktische Probleme selbst. Die faire Bewertung lautet deshalb: eine überwiegend belegte Darstellung der Vorgänge mit einer persönlichen zusammenfassenden Interpretation und einigen relevanten rechtlichen Verkürzungen.
