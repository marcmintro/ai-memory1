# HANDOFF: Kurze Rippe

Zuletzt aktualisiert: 2026-11-13 (Website-Entwurf) von Claude.

## Stand

- [x] Arbeitsbereich und Übergabe-Regeln angelegt (`AGENTS.md`, `CLAUDE.md`,
      `.ai-memory.toml`, `context/`).
- [x] Website analysiert → `arbeit/website-analyse.md` (echte Domain:
      **kurze-rippe.de** mit „e“; Boxclub in Köln, zwei Standorte)
- [x] Angebot zusammengefasst → `arbeit/angebot.md`
- [x] Branding / Markenbild Entwurf v1 → `arbeit/branding.md`
- [x] Content-Säulen + wiederkehrende Post-Formate Entwurf v1 →
      `arbeit/content-saeulen.md` (5 Säulen, 10 Serien, Wochenplan)
- [x] Briefing der Geschäftsführerin (13.11.) abgelegt →
      `context/briefing-geschaeftsfuehrung-2026-11-13.md` (hat Vorrang vor Website)
- [x] Angebot, Branding, Content-Säulen auf v2 gebracht (inkl. Kursplan,
      Merch, Familiengeschichte, Gym-Miete, mögliche Tarife ab 01.01)
- [x] Website-Entwurf v1 → `arbeit/website-entwurf/` (Vorbilder Fenriz Gym +
      Monument, Live-Vorschau im README)
- [ ] Feedback von Marc zum Website-Entwurf
- [ ] Freigabe der Entwürfe v2 durch Marc
- [ ] Instagram-Ist-Stand prüfen (@kurze_rippe_boxclub)
- [ ] Templates gestalten, ersten Monat planen

## Nächster Schritt

Marcs Feedback zu Branding und Content-Säulen v2 einarbeiten. Danach den
Instagram-Kanal prüfen (instagram.com ist in der Cloud-Umgebung noch nicht
freigeschaltet) und den ersten Monat konkret mit Caption-Entwürfen planen.

## Offene Fragen an Marc

- Darf das Logo modernisiert werden?
- Geschichte des Namens „Kurze Rippe“, Gründungsjahr?
- Rotes Akzentfarb-Vorschlag ok (statt Website-Blau)?
- Wer liefert Fotos/Videos, welche Trainer machen vor der Kamera mit?
- Zugang zu Instagram/Facebook-Statistiken?
- TikTok zusätzlich gewünscht?
- Gendern mit Sternchen oder neutral?
- Pro Trainer Fokus/Stil, Infos zu Fatih und Lukas.
- Merch: Preise, nur vor Ort oder online?
- Tarife ab 01.01: beschlossen? Was gilt für Bestandsmitglieder?

## So geht es in Codex weiter

```bash
git clone https://github.com/marcmintro/ai-memory1
cd ai-memory1
git checkout claude/project-thread-6g45z4   # enthält p7zjwq + Ergebnisse; bzw. main, falls gemergt
cd kurze-rippe
codex
```

Erste Nachricht an Codex: „Lies AGENTS.md und HANDOFF.md und mach beim
nächsten Schritt weiter.“
