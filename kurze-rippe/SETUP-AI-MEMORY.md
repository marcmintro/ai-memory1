# ai-memory lokal einrichten (optional)

Die Übergabe funktioniert schon allein über die Dateien in diesem Ordner.
Wer zusätzlich automatische Erinnerung über Sitzungen hinweg möchte
(Sitzungsverlauf, Handoffs, Suche), installiert ai-memory lokal einmal pro
Rechner. Ausführlich: `../docs/install.md` und `../INSTALL_FOR_AGENTS.md`.

## Kurzfassung

1. Binary installieren: siehe `../install.sh` bzw. `../docs/install.md`.
2. `ai-memory setup` ausführen und Claude Code sowie Codex auswählen.
3. Codex-Plugin:

   ```bash
   codex plugin marketplace add akitaonrails/ai-memory
   codex plugin add ai-memory@ai-memory
   ```

   Danach in Codex `/hooks` aufrufen und den ai-memory-Hooks vertrauen.
4. Claude Code: das ai-memory-Plugin aus dem Marketplace installieren
   (`../docs/install.md`, Abschnitt Claude Code).
5. `ai-memory doctor` prüft, ob alles läuft.

`.ai-memory.toml` in diesem Ordner sorgt dafür, dass beide Tools im selben
Projektgedächtnis landen: Workspace `kurze-rippe`, Projekt `kurze-rippe`.
