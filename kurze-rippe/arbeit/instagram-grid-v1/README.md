# Instagram-Grid, Entwurf 02

Stand: 23.11.2026. Gestaltungsvorschlag zur Abstimmung, keine Veröffentlichung.

Auf Marcs Wunsch drei Bilder ersetzt: „Deckung hoch“ mit dem roten Ringfoto KR-135, „Rhythmus finden“ mit KR-256 und „Boxen in Köln“ mit der Umkleide KR-6. Typografie und Raster bleiben erhalten. Die roten und warmen Motive ergänzen die blaue Basis.

## Gestaltung

Das 3×3-Raster verbindet sechs Fotomotive mit drei Typografie-Beiträgen. Die Posts sind einzeln verständlich und brauchen keine feste Puzzle-Reihenfolge. Vorgeschlagenes Beitragsformat: 1080 × 1440 Pixel.

- **Headlines:** Big Shoulders Stencil Display, groß und in Versalien wie im blauen Website-Entwurf. Big Shoulders Display ergänzt ruhigere Fotomotive.
- **Informationen:** Inter Tight für Seriennamen und kurze Hinweise.
- **Farben:** Schwarz `#0b0d10`, Blau `#4f7396`, helles Blau `#7d9fc0`, gebrochenes Weiß `#e9edf1`.
- **Layout:** Gleiche Außenabstände, Serienname oben links, kurze Headline passend zum Bild, vorhandenes Logo unten rechts. Die Originalfotos behalten ihre Lightroom-Farbgestaltung.

## Beispielthemen im Raster

| Position | Säule | Motiv / Überschrift | Ausgangsbild |
|---|---|---|---|
| oben links | Die Gesichter | In deiner Ecke | KR-110.jpg |
| oben Mitte | Dein Einstieg | Deine erste Runde | Typografie |
| oben rechts | Kult & Old School | Unser Gym | KR-179.jpg |
| Mitte links | Echtes Boxen | Deckung hoch | KR-135.jpg |
| Mitte | Marke | Kult Box Club aus Köln | Typografie |
| Mitte rechts | Echtes Boxen | Rhythmus finden | KR-256.jpg |
| unten links | Kult & Old School | Boxen in Köln | KR-6.jpg |
| unten Mitte | Ring frei | Runde für Runde | KR-36.jpg |
| unten rechts | Relaunch | Unser neuer Auftritt, Januar 2027 | Typografie |

## Bildsichtung und Materialbedarf

Gesichtet: 343 JPEG-Dateien aus Marcs Ordner `KurzeRippe__Lightroom _`, davon 281 Aufnahmen und 62 Web-Exporte. Viele Motive sind Varianten desselben Shootings. Die ausgewählten Aufnahmen zeigen den inszenierten Box-Look in Blau und Rot sowie warme Gymdetails. Ihre EXIF-Daten stammen aus März/April 2020. Das Material eignet sich für den visuellen Entwurf und ausgewählte Markenbeiträge.

Die Fotos belegen keine heutigen Trainerrollen, aktuellen Termine, Ergebnisse oder Mitgliederaussagen. Trainerporträts, echte O-Töne, konkrete Technik-Erklärungen, aktuelle Einstiegsinformationen und die übrigen Unterthemen brauchen die in der Präsentation geplante Recherche und gezielte neue Aufnahmen. Der Entwurf ersetzt diese Produktion nicht.

Es gibt keine erfundenen Namen, Zitate, Preise oder Wettkampfergebnisse. Alle fünf Content-Säulen erscheinen als Seriennamen. Die Reihenfolge zeigt einen möglichen visuellen Rhythmus, keinen verbindlichen Redaktionsplan.

## Dateien

- `instagram-grid.jpg`: Gesamtansicht.
- `posts/`: neun einzelne Gestaltungsentwürfe.
- `grid.html`: editierbare Typografie und Layouts mit lokalen Bildverweisen.
- `assets/`: verkleinerte Arbeitskopien der Auswahl sowie der vorherigen Bildvarianten, Original-Logo und die Schriften des bestehenden Webentwurfs. Die großen Lightroom-Originale bleiben auf dem externen Laufwerk unverändert.
- `auswahl.json`: Dateinamen und Bildmaße zur Nachverfolgung.
- `deck.mjs`: ergänzt die bestehende Präsentation v3 um diese Folie nach den Content-Säulen. `build(p)` erstellt den gesamten Stand mit 15 Folien, `revise(p)` ergänzt den verifizierten Stand mit 14 Folien. `refreshGrid(p)` aktualisiert nur Bild und Layoutbeschreibung der bestehenden Grid-Folie.
- `grid-folie.png`: Folienvorschau. Die Begleittexte bleiben in der Live-Präsentation editierbar, die Postgestaltung liegt zusätzlich als HTML vor.
- `praesentation-vorschau.png`: Überblick der 15 Folien.
- `render.mjs`: rendert Gesamtansicht und neun Einzelmotive mit Playwright und Sharp aus der bereitgestellten Node-Laufzeit. Ausführen mit dem gebündelten Node und dessen `node_modules`; keine Abhängigkeiten im Projekt nachinstallieren.

Die Live-Präsentation bleibt unter `artifact_jovCuWh78XphC34tnPPeePoirWFQg5xb`. Honorar 850 €/Monat, separat angebotene Materialproduktion, Start Januar 2027 und Anmoderation nach Weihnachten 2026 bleiben bestehen. Die Website-Filmfolie bleibt entfernt.
