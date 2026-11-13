# Website-Entwurf v1 (2026-11-13)

Live-Vorschau (privat, Marc): https://claude.ai/artifact/TcLmmx3zTFKxWbyVsXSZxP

- `index.html` ist der Seiteninhalt (ohne `<html>/<head>`-Gerüst, das ergänzt
  die Artifact-Veröffentlichung). Zum lokalen Ansehen einfach im Browser öffnen.
- `img/` enthält die Bilder, vorerst von kurze-rippe.de übernommen
  (Platzhalter, bis eigene Fotos kommen). Lukas hat noch kein Foto.
- Vorbilder laut Marc: Aufbau und Struktur von fenriz-gym.com,
  Scroll-Effekte und Intro von monument.tv.
- Technik: reines HTML/CSS, GSAP 3.12.5 + ScrollTrigger (cdnjs) für
  Intro, aufziehendes Hero-Bild, Wort-für-Wort-Statement, gestapelte
  Kapitel, horizontale Trainer-Spur. Ohne JS ist alles sichtbar.
- Buttons: leichtes Anheben/Vergrößern beim Hover, Nachgeben beim Klick
  (Marcs Wunsch „Apple-like“).
- Inhalte aus `../angebot.md` und dem Briefing der Geschäftsführerin.
  Neue Tarife ab 01.01 sind bewusst **nicht** eingebaut.

## Änderungen v1.1 (2026-11-13, Marcs Feedback)

- Intro: Bild wird beim Scrollen von links nach rechts freigelegt (rote Kante
  läuft mit), Schriftzug bleibt und blendet am Ende aus.
- „Miete unser Gym“ als eigene, große Sektion mit fünf Anlässen und klarer
  Anfrage, danach das Laufband „Hier wurde schon gedreht“.
- Überschneidung von „Fragen? Schreib uns.“ mit den Standort-Karten behoben
  (Reveals laufen jetzt über IntersectionObserver statt über ScrollTrigger).

## Änderungen v1.2 (2026-11-13, Marcs Feedback)

- Intro: Beim Scrollen geht „KURZE RIPPE“ raus, „BOX-CLUB AUS KÖLN“ kommt rein,
  danach wird das Bild von links nach rechts freigelegt.
- Abstand zwischen Gym-Anfrage und „Hier wurde schon gedreht“ verkleinert.
- Neue Variante `blau.html` mit verblasstem Blau (#4f7396) statt Rot und
  bläulich getönten Fotos, weil viel Branding-Material bläulich ist. Nur die
  Trainer-Sektion „Ecke Rot“ bleibt rot. Vorschau:
  https://claude.ai/artifact/VX5CzCTyAVogeDwT57MSoB
- Rote Variante: https://claude.ai/artifact/TcLmmx3zTFKxWbyVsXSZxP
- Offen: Marc entscheidet zwischen Rot und Blau.

## Änderungen v1.3 (2026-11-13, Marcs Feedback)

- Zweite Intro-Zeile heißt jetzt „KULT / BOX CLUB / AUS KÖLN“ (drei Zeilen,
  ohne Bindestrich). Die Ö-Punkte ragen nicht mehr in die Zeile darüber, weil
  „AUS KÖLN“ mehr Abstand nach oben bekommt. Gilt für Rot und Blau.
