# To-Do App:

#### 1. HTML-Struktur erstellen:

- Erstelle einen Input-Bereich für neue Aufgaben mit einer entsprechenden ID.

- Erstelle eine ungeordnete Liste (ul) mit einer ID für die Aufgabenliste.

#### 2. JavaScript-Code für das Hinzufügen von Aufgaben:

- Verwende `document.querySelector` für den Input-Bereich und die Aufgabenliste.

- Füge einen Event Listener für das 'keydown'-Ereignis auf dem Input-Bereich hinzu.

- Prüfe, ob die gedrückte Taste die Eingabetaste (Enter) ist und der eingegebene Text nicht leer ist.

- Erstelle ein neues Listenelement (`li`) und setze den Inhalt auf den eingegebenen Text.

- Füge das Listenelement der Aufgabenliste hinzu.

- Setze den Wert des Input-Bereichs auf leer.

#### 3. JavaScript-Code für das Markieren von Aufgaben:

- Verwende `document.querySelector` für die Aufgabenliste.

- Füge einen Event Listener für das 'click'-Ereignis auf der Aufgabenliste hinzu.

- Überprüfe, ob das angeklickte Element ein Listenelement (`li`) ist.

- Füge der geklickten Aufgabe die CSS-Klasse 'completed' hinzu oder entferne sie, je nach aktuellem Status.

#### 4. CSS-Styling:

- Erstelle eine CSS-Regel für die Klasse 'completed'.

- Verwende `text-decoration: line-through;`, um erledigte Aufgaben durchzustreichen.

#### 5. Zusätzliche Funktionen (optional):

- Füge die Möglichkeit hinzu, Aufgaben zu löschen.

- Implementiere die Speicherung der Aufgaben in `localStorage`, um sie zwischen Sitzungen beizubehalten.

# Interaktiver Farbwechsler:

Erstelle eine einfache Webseite, auf der sich die Hintergrundfarbe ändert, wenn auf einen Button geklickt wird.

#### 1. HTML-Struktur erstellen:

- Erstelle einen Button mit einer ID, um den Farbwechsel auszulösen.

- Füge ein HTML-Element hinzu, das die aktuelle Farbe anzeigt.

#### 2. JavaScript-Code für den Farbwechsler:

- Verwende `document.querySelector` für den Button und das Element zur Anzeige der Farbe.

- Füge einen Event Listener für das 'click'-Ereignis auf dem Button hinzu.

- Definiere ein Array von Farben, die du verwenden möchtest.

- Schreibe eine Funktion, die eine zufällige Farbe aus dem Array auswählt.

- Ändere die Hintergrundfarbe der Webseite auf die ausgewählte Farbe.

- Aktualisiere den Text im Element zur Anzeige der Farbe.

#### 3. CSS-Styling (optional):

- Stilisiere den Button und das Element zur Anzeige der Farbe, um das Erscheinungsbild zu verbessern.

#### 4. Zusätzliche Funktionen (optional):

- Füge die Möglichkeit hinzu, zwischen einem vordefinierten Satz von Farben zu wechseln.

- Erstelle einen Schieberegler, um die Helligkeit oder Sättigung der Farben anzupassen.

# Interaktive Bildergalerie

Erstelle eine einfache Bildergalerie, die es dem Benutzer ermöglicht, zwischen verschiedenen Bildern zu navigieren.

#### 1. HTML-Struktur erstellen:

- Erstelle eine Liste von Bildern, die du in der Galerie anzeigen möchtest. Verwende dafür `img`-Tags.

- Füge vor und nach den Bildern jeweils Buttons hinzu, um vorwärts und rückwärts zu navigieren.

#### 2. JavaScript-Code für die Bildergalerie:

- Verwende `document.querySelector` für die Bilder, vorwärts- und rückwärts-Navigationsbuttons.

- Erstelle eine Variable, um den aktuellen Index des angezeigten Bildes zu speichern.

- Füge Event Listener für die Buttons hinzu, um auf Klicks zu reagieren.

- Schreibe eine Funktion, um das aktuell angezeigte Bild zu ändern.

- Ändere den `src`-Attributwert des Bildes basierend auf dem aktuellen Index und den Button-Klicks.

- Behandle den Fall, dass der Benutzer am Anfang oder Ende der Galerie angelangt ist.

#### 3. CSS-Styling (optional):

- Gestalte die Navigationsbuttons und die Anordnung der Bilder, um die Galerie benutzerfreundlich zu gestalten.

#### 4. Zusätzliche Funktionen (optional):

- Füge eine Bildunterschrift unter jedem Bild hinzu.

- Implementiere eine Lightbox-Funktion, die ein Bild in voller Größe anzeigt, wenn der Benutzer daraufklickt.

# Währungsumrechner

Erstelle einen einfachen Währungsumrechner, der es dem Benutzer ermöglicht, Beträge zwischen verschiedenen Währungen umzurechnen.

#### 1. HTML-Struktur erstellen:

- Erstelle Eingabefelder für den Betrag und Dropdown-Menüs für die Ausgangs- und Zielwährungen.

- Füge einen Button hinzu, der den Umrechnungsvorgang auslöst.

- Erstelle ein Element, das das umgerechnete Ergebnis anzeigt.

#### 2. JavaScript-Code für den Währungsumrechner:

- Verwende `document.querySelector` für die Eingabefelder, Dropdown-Menüs und den Button.

- Erstelle ein Objekt, das Währungskurse enthält (z. B. EUR zu USD, EUR zu GBP usw.).

- Füge einen Event Listener für den Button hinzu, um auf Klicks zu reagieren.

- Schreibe eine Funktion, die den eingegebenen Betrag, die Ausgangs- und Zielwährung verwendet, um den umgerechneten Betrag zu berechnen.

- Aktualisiere das Element, das das Ergebnis anzeigt, mit dem berechneten Betrag.

#### 3. CSS-Styling (optional):

- Stilisiere die Eingabefelder, Dropdown-Menüs und das Ergebnisfeld, um das Erscheinungsbild zu verbessern.

#### 4. Zusätzliche Funktionen (optional):

- Füge mehr Währungen und Wechselkurse hinzu.

- Implementiere eine automatische Aktualisierung der Wechselkurse aus einer externen Quelle.

# Notizbuchanwendung

Erstelle eine einfache Webanwendung, die es Benutzern ermöglicht, Notizen hinzuzufügen, anzuzeigen und zu löschen.

#### 1. HTML-Struktur erstellen:

- Erstelle ein Textfeld für den Notizinhalt und einen "Hinzufügen"-Button.

- Erstelle eine Liste oder einen Container, um die gespeicherten Notizen anzuzeigen.

#### 2. JavaScript-Code für die Notizbuchanwendung:

- Verwende `document.querySelector` für das Textfeld, den "Hinzufügen"-Button und den Container für die Notizen.

- Füge einen Event Listener für den "Hinzufügen"-Button hinzu.

- Schreibe eine Funktion, die den Inhalt des Textfelds als Notiz speichert und zur Liste der Notizen hinzufügt.

- Zeige die Notizen in der Liste an, indem du neue Elemente (z. B. `li`) erstellst und den Notizinhalt einfügst.

- Füge bei jeder Notiz ein Löschen-Button hinzu.

- Füge einen Event Listener für die Löschen-Buttons hinzu, um Notizen zu entfernen.

#### 3. CSS-Styling (optional):

- Stilisiere die Notizenliste und die Eingabeelemente, um eine angenehme Benutzeroberfläche zu erstellen.

#### 4. Zusätzliche Funktionen (optional):

- Füge Bearbeitungsfunktionen hinzu, um Notizen zu aktualisieren.

- Speichere die Notizen lokal im Browser, um sie zwischen Sitzungen beizubehalten.

- Verbessere das Design, um eine ansprechende Benutzeroberfläche zu erstellen.