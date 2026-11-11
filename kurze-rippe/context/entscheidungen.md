# Entscheidungen

Neueste oben. Format: Datum, Entscheidung, Grund.

## 2026-11-11: Gedächtnis liegt als Markdown im Repo

Der Arbeitsstand für Kurze Rippe liegt in `kurze-rippe/` im Repo
`marcmintro/ai-memory1`, mit `AGENTS.md` (liest Codex) und `CLAUDE.md`
(liest Claude Code, verweist auf `AGENTS.md`).
**Grund:** Beide Tools lesen diese Dateien von selbst. Git ist der einzige
Speicher, den Claude in der Cloud und Codex beide sicher erreichen. Ein
ai-memory-Server in der Cloud-Sitzung würde mit der Sitzung verschwinden.
Lokal installiertes ai-memory kommt über `.ai-memory.toml` ergänzend dazu.
