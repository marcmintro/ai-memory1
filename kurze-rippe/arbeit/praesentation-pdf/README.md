# Präsentation als PDF

Stand: 23.11.2026, 15 Folien. Export des aktuellen Live-Stands `artifact_jovCuWh78XphC34tnPPeePoirWFQg5xb`, Version 13.

Marc wünscht eine PDF mit vollständig enthaltenen Bildern, weil im bisherigen PowerPoint-Export die ersten Bilder fehlen. Die PDF enthält deshalb jede Folie als fest eingebettete hochauflösende Ansicht. Fotos und Schriften benötigen keine externen Dateien. Sie ist eine Bild-PDF, der Text ist darin nicht als separater Text auswählbar. Die editierbare Fassung bleibt die Live-Präsentation.

## Export

1. In Artifact Session alle Folien mit `presentation.render({scale: 3})` rendern. Erwartete Auflösung pro PNG: 3840 × 2160 Pixel.
2. `export_pdf.py <Render-Verzeichnis> <Ziel.pdf>` mit der bereitgestellten Python-Laufzeit ausführen.
3. Die fertige PDF wieder mit Poppler rendern und die Bilder visuell prüfen, besonders Seiten 1, 2, 3, 6 und 15.

Die Bildfolien verwenden JPEG mit hoher Qualität, die übrigen Seiten verlustfreie Bildkompression. Das PDF-Format ist 16:9, 960 × 540 pt. Der Export erzeugt eine Datei von etwa 6,8 MB und prüft nach erneutem Öffnen die Seitenzahl sowie die vollständige Einbettung aller 15 Folienbilder.

Der direkte PDF-Export der Sitzung scheiterte an einer internen Bildreferenz (`ArrayBuffer`). Der Export aus Folienansichten umgeht diese Referenz und erhält den geprüften Look. Der PowerPoint-Export wurde hierdurch nicht repariert.

## Aktueller Inhalt

- Instagram-Grid mit rotem Ringfoto, blauem Trainingsmotiv und Umkleide auf Folie 6.
- Start Januar 2027 mit Website-Relaunch, Ankündigung nach Weihnachten 2026.
- Betreuung 850 €/Monat, fehlende Materialproduktion separat erläutert.
- Aufnahmeweg: Handy-Content oder professionelle Kamera, je nach Format.
- Domain-/Hosting-/Umsatzsteuerhinweis von der Honorarseite entfernt.
- Keine Website-Filmfolie.

`Kurze-Rippe-Praesentation.pdf` ist die geprüfte PDF, `vorschau.jpg` zeigt deren Seitenübersicht. Die Rohbilder und Prüfdateien bleiben außerhalb des Repositorys.
