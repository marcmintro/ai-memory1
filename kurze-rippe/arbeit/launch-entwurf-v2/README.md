# Websitefilm und Präsentation v2, 16.11.2026

## Marcs Präzisierung

Der Film soll die Internetseite im Format 16:9 für die Geschäftsführung zeigen. Nach der bestehenden Übersicht der Content-Säulen soll eine weitere Folie echte Säulen mit Unterthemen zeigen. Marc findet den bisherigen Look von Video und Präsentation grundsätzlich gut.

## Ergebnisse

- `kurze-rippe-websitefilm-16zu9-v2.mp4`: 32 Sekunden, 1920 × 1080, 25 fps, H.264 mit AAC-Ton. Der Film zeigt den vorhandenen blauen HTML-Entwurf: Intro mit Bild-Reveal, Kursübersicht, Probetraining, Kursplan mit Standortwechsel, Trainer, Gym-Vermietung und Kontakt.
- Der Ton ist ein eigener synthetischer Percussion-Entwurf ohne Fremdmusik oder Voiceover.
- Die Live-Präsentation hat jetzt zehn Folien. Referenz `artifact_jovCuWh78XphC34tnPPeePoirWFQg5xb` im Codex-Chat „Kurze Rippe“.
- Die neue Folie 5 zeigt fünf bearbeitbare Säulen mit Unterthemen. Übersicht der Säulen bleibt auf Folie 4. Die Filmfolie 7 beschreibt nun den 16:9-Websitefilm.
- `content-saeulen-v2.png` und `praesentation-vorschau-v2.png` zeigen die neue Folie und die aktuelle Gesamtübersicht.

Das Hochkantvideo bleibt unter `../launch-entwurf-v1/` als erster Entwurf erhalten. Maßgeblich für Marcs aktuellen Wunsch ist der Websitefilm hier. Kein Launch-Datum und keine externe Veröffentlichung beim Club freigegeben.

## Reproduktion

`deck.mjs` baut zunächst die bisherigen neun Folien auf, ergänzt mit `pillars.mjs` die Säulen und aktualisiert mit `film-slide.mjs` die Filmfolie. Native Formen und Texte bleiben in der Artifact Session bearbeitbar.

Für den Film lädt `python3 prepare.py` die Original-Webschriften und die beiden bereits verwendeten GSAP-Dateien, kopiert die lokalen Website-Bilder und erstellt `website-film.html`. `seek.js` steuert die Kamerafahrt durch die Seite deterministisch. Das Scroll-Pinning der Trainer wird für den Filmschnitt gelöst und die horizontale Fahrt gezielt gesteuert. Der eigentliche Website-Entwurf bleibt als Quelle in `../website-entwurf/`.

`render.mjs` benötigt Playwright und Chrome und rendert mit `--frames` 800 Full-HD-PNGs in `frames/` (Ordner vorher anlegen). `sound.py` erstellt die 32-Sekunden-Tonspur. Unter macOS kompiliert `swiftc encode.swift -o encode` den AVFoundation-Encoder. `encode` erhält Quellordner und MP4-Ziel als Argumente. Laufzeitdateien, Schriften, Bibliotheken und Frames sind per `.gitignore` ausgeschlossen.

## Quellen

Blauer Website-Entwurf vom 13.11. mit den vorhandenen Fotos und dem Original-Logo. Inhalte laut GF-Briefing vom 13.11., `../content-saeulen.md` und bisheriger Präsentation. Der Kursplan im Film ist der Entwurfsstand November 2026.

## Nächster Schritt

Marc prüft den 16:9-Film und die zusätzliche Säulenfolie. Danach Tempo, Auswahl der Website-Bereiche und Unterthemen nach Feedback anpassen.
