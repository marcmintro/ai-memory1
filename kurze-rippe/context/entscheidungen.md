# Entscheidungen

Neueste oben. Format: Datum, Entscheidung, Grund.

## 2026-11-13: Eine Marke, zwei Standorte; Briefing hat Vorrang

Der zweite Standort heißt „Kurze Rippe Boxclub city-nord“ (früher Worthoff
Boxing), der erste „Kurze Rippe Boxclub city“. Kommuniziert wird nur noch
„Kurze Rippe“. Das Briefing der Geschäftsführerin vom 13.11. gilt vor der
Website. Mögliche neue Tarife ab 01.01 werden erst kommuniziert, wenn sie
beschlossen sind.
**Grund:** Angaben der Geschäftsführerin (über Marc), Website ist teils veraltet.

## 2026-11-11: Domain ist kurze-rippe.de, Farbwelt schwarz-weiß + Rot (Vorschlag)

Die Website liegt unter kurze-rippe.de (nicht kurz-rippe.de). Für Social
Media wird Schwarz-Weiß aus dem Logo mit rotem Akzent vorgeschlagen, das
Website-Blau soll weg. Status: **Vorschlag, wartet auf Marcs Freigabe.**
**Grund:** Das Logo ist schwarz-weiß, rote Handschuhe/Sandsäcke prägen die
Fotos; das blaue Theme passt nicht dazu.

## 2026-11-11: Gedächtnis liegt als Markdown im Repo

Der Arbeitsstand für Kurze Rippe liegt in `kurze-rippe/` im Repo
`marcmintro/ai-memory1`, mit `AGENTS.md` (liest Codex) und `CLAUDE.md`
(liest Claude Code, verweist auf `AGENTS.md`).
**Grund:** Beide Tools lesen diese Dateien von selbst. Git ist der einzige
Speicher, den Claude in der Cloud und Codex beide sicher erreichen. Ein
ai-memory-Server in der Cloud-Sitzung würde mit der Sitzung verschwinden.
Lokal installiertes ai-memory kommt über `.ai-memory.toml` ergänzend dazu.
