# Projekt-Gedächtnis: ALREADY-GONE (Brandbuilding)

Dieser Ordner ist das gemeinsame Gedächtnis für das Projekt **ALREADY-GONE**
(Thema: Brandbuilding). Hier steht alles, was eine KI (Claude, Codex oder ein
anderes Werkzeug) oder ein Mensch braucht, um die Arbeit ohne Kontextverlust
fortzusetzen.

Der Rest dieses Repositorys ist der Quellcode des Werkzeugs *ai-memory*. Das
Projekt-Gedächtnis ist davon unabhängig und besteht nur aus einfachen
Markdown-Dateien.

## Die Dateien

| Datei | Inhalt | Wie pflegen |
| --- | --- | --- |
| [`STAND.md`](STAND.md) | Kurzer Überblick: Ziel, aktueller Stand, nächster Schritt | Bei jeder Sitzung überschreiben, damit sie aktuell bleibt |
| [`DECISIONS.md`](DECISIONS.md) | Getroffene Entscheidungen mit Begründung | Nur ergänzen, nie löschen; überholte Entscheidungen als „ersetzt durch …“ markieren |
| [`TODO.md`](TODO.md) | Offene und erledigte Aufgaben | Aufgaben abhaken statt löschen |
| [`LOG.md`](LOG.md) | Datiertes Fortschrittsprotokoll | Neue Einträge oben anfügen |

## So arbeitest du damit (Mensch oder KI)

1. **Zu Beginn** `STAND.md` lesen, dann `TODO.md` und die letzten Einträge in
   `LOG.md`. Bei Fragen zu früheren Weichenstellungen `DECISIONS.md` lesen.
2. **Während der Arbeit** jede neue Entscheidung sofort in `DECISIONS.md`
   eintragen und Aufgaben in `TODO.md` aktualisieren.
3. **Am Ende** einen Eintrag in `LOG.md` schreiben (Datum, was gemacht wurde,
   was offen ist), `STAND.md` aktualisieren, committen und pushen.

Schreibe auf Deutsch, kurz und konkret. Datumsangaben immer absolut im Format
`JJJJ-MM-TT`, nie „gestern“ oder „nächste Woche“.

## Weitermachen mit Codex

Wenn Claude sein Limit erreicht, kann Codex hier nahtlos übernehmen:

1. Codex im Hauptordner dieses Repositorys starten. Codex liest automatisch
   die `AGENTS.md` im Hauptordner; ganz oben steht dort der Verweis auf diesen
   Ordner.
2. Als ersten Auftrag zum Beispiel schreiben:

   > Lies `projekt-gedaechtnis/README.md` und `projekt-gedaechtnis/STAND.md`
   > und mach mit der nächsten offenen Aufgabe aus `TODO.md` weiter.

3. Codex pflegt die Dateien nach denselben Regeln wie oben. Wenn Claude später
   wieder übernimmt, steht dort alles, was Codex gemacht hat.

Wichtig: Änderungen immer committen und pushen, sonst sieht das jeweils andere
Werkzeug sie nicht.
