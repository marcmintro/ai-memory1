# Launch-Entwurf v1, 16.11.2026

Marc bestätigt im Codex-Chat die Richtung: blaue Website-Variante, rund 15 Sekunden Hochkant-Teaser zum Website-Relaunch und eine Präsentation für die Geschäftsführung. Das ist die Richtung für diesen Entwurf, noch keine Freigabe zur Veröffentlichung.

## Ergebnisse

- `kurze-rippe-relaunch-teaser-v1.mp4`: 15 Sekunden, 1080 × 1920, 30 fps, H.264 und AAC. Bewegte Typografie, Bild-Reveal, Fotofahrten, Website-Blick, Abschluss „Bald online“. Kein festes Launch-Datum.
- Originaler synthetischer Percussion-Entwurf aus `sound.py`, ohne Voiceover und ohne Fremdmusik.
- Bearbeitbare Live-Präsentation im Codex-Chat „Kurze Rippe“, Artifact-Referenz `artifact_jovCuWh78XphC34tnPPeePoirWFQg5xb`.
- `praesentation-vorschau.png`: Übersicht der neun Folien.
- `deck.mjs`: rekonstruierbare Folienquelle für die Artifact Session. Überschriften Impact, Fließtext Arial. Der Teaser nutzt die Original-Webschriften Big Shoulders Stencil Display und Inter Tight.

Die Folien zeigen Marke, Website, fünf Content-Säulen, konkrete Serien, Teaser, Startplan und Zusammenarbeit. Nur die bereits bestätigten Preise 1.890 € einmalig und 650 €/Monat stehen darin. Die Umsatzsteuerangabe bleibt bis zum finalen Angebot offen. Kein optionales Budget als verbindlichen Preis ausgegeben.

## Quellen und Material

Vorhandener blauer HTML-Entwurf unter `../website-entwurf/blau.html`, Originalfotos und Logo aus `../website-entwurf/img/`, GF-Briefing vom 13.11., Content-Säulen und Angebotstext. Die Fotos stammen laut Website-README ursprünglich von kurze-rippe.de. Es liegen hier keine neuen Realfilm-Clips vor, der Teaser animiert die vorhandenen Fotos und das Layout.

## Weiterbearbeitung

`teaser.html` ist die deterministische Bewegungsvorlage. `seek(t)` steuert den Zeitpunkt in Sekunden. `render.mjs` rendert den lokalen Website-Blick und mit `--frames` 450 PNG-Frames. Es benötigt Playwright und ein verfügbares Chrome. Die Schriften werden bei Bedarf mit `python3 download_fonts.py` in `assets/fonts/` geladen. Schriftdateien sind nicht ins Repository kopiert.

Vor `render.mjs --frames` den Ordner `frames/` anlegen. `encode.swift` erzeugt unter macOS mit AVFoundation die MP4 aus Frames und `sound.wav`. Dafür `sound.py` ausführen, Swift kompilieren und den Quellordner sowie die Zieldatei als Argumente übergeben. Kompilate, Frames und Caches bleiben außerhalb von Git.

## Nächster Schritt

Marc prüft Bildauswahl, Tempo und Sound des Teasers sowie Umfang und Ton der Präsentation. Danach Text und Reihenfolge nach Feedback anpassen. Launch-Termin und finale Freigabe stehen noch aus.
