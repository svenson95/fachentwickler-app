import {Post} from "../../app/models/post";

export const lf6_posts: Post[] = [
    {
        "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/datentypen",
        "topic": "Entwickeln und Bereitstellen von Anwendungssystemen",
        "subject": "lf-6",
        "lessonDate": "2019-09-03",
        "lastUpdate": "2020-10-31",
        "schoolWeek": "2",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "text",
                "content": "Ein Datentyp bezeichnet eine Menge gleichartiger Werte, <u>Datentypen legen die möglichen Werte von Variablen, Attributen (und Methoden) fest</u>, sie bestimmen auch, welche Operationen auf den Werten möglich sind. In Java gibt es 8 elementare Datentypen (engl. <i>primitive data types</i>), dazu gehören unter anderem Zahlen - also ganze Zahlen & Fließkommazahlen, Wahrheitswerte und Zeichen."
            },
            {
                "type": "hint",
                "content": "Jede Klasse bildet einen Datentyp und ist damit eine Erweiterung der elementaren Datentypen um eigene, benutzerdefinierte Attributen & Methoden."
            },
            {
                "type": "title",
                "content": "Elementare Datentypen"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ed7dad04db79250b7ebc5d0"
            },
            {
                "type": "text",
                "content": "→ <u>Ganzzahlige Werte</u> - <code>byte short int long</code> <br/> → <u>Gleitpunktwerte</u> - <code>float double</code> <br/> → <u>Zeichenwert</u> - <code>char</code> <br/> → <u>Wahrheitswerte</u> - <code>boolean</code>"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Variablen & Konstanten"
            },
            {
                "type": "list",
                "content": "<u>Eine Variable ist ein Triple (Name, Adresse, Wert)</u>. Der Name identifiziert die Adresse im Speicher, in dem der aktuelle Wert der Variablen abgelegt ist. In Java ist es üblich Variablen mit Kleinbuchstaben zu deklarieren, valide Zeichen dafür sind Buchstaben, Zahlen und der Unterstrich _. In anderen Sprachen findet man zum Beispiel noch …",
                "list": [
                    "<code>camelCase</code>",
                    "<code>PascalCase</code>",
                    "<code>UPPER_SNAKE_CASE</code>",
                    "<code>snake_case</code>",
                    "<code>kebab-case</code>"
                ]
            },
            {
                "type": "list",
                "content": "Eine Konstante ist eine nicht veränderbare Variable (engl. <i>immutable</i>), was bedeutet, dass <u>der bei der Deklaration zugewiesene Wert nicht geändert werden</u> kann. In Java werden Konstanten mit dem Schlüsselwort final gekennzeichnet. Ein Literal ist ein konstanter Wert oder Ausdruck, der sich zur Laufzeit eines Programms nicht ändert. Allgemein bezeichnet ein Literal eine Zeichenfolge, die die direkte Darstellung der Werte von Basistypen definiert.",
                "list": [
                    "die Ziffern 123 sind ein Literal, denn sie repräsentieren den Wert einhundertdreiundzwanzig"
                ]
            },
            {
                "type": "table",
                "content": "Um andere Zahlensysteme wie zum Beispiel die Hexadezimal darzustellen sind folgende Präfixe möglich ...",
                "rows": [
                    {
                        "type": "header",
                        "columns": [
                            { "align": "middle", "content": "Zahlensystem" },
                            { "align": "middle", "content": "Vorzeichen" },
                            { "align": "middle", "content": "Beispiel" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "<u>Dezimal</u>" },
                            { "align": "middle", "content": "ohne" },
                            { "align": "middle", "content": "23872323 ⇒ 23_872_323" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "<u>Oktal</u>" },
                            { "align": "middle", "content": "0 (Null)" },
                            { "align": "middle", "content": "0133041503 ⇒ 01_3304_1503" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "<u>Hexadezimal</u>" },
                            { "align": "middle", "content": "0x / 0X (Null / NullX)" },
                            { "align": "middle", "content": "0x16C4343 ⇒ 0x16C_4343" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "<u>Binär</u>" },
                            { "align": "middle", "content": "0b / 0B (Nullb / NullB)" },
                            { "align": "middle", "content": "0b10101111 ⇒ 0b1010_1111" }
                        ]
                    }
                ]
            },
            {
                "type": "hint",
                "content": "Ganzzahlige Werte werden üblicherweise mit dem Datentyp int deklariert. Reicht der Wertebereich nicht aus wird der Datentyp long verwendet. In Java wird dieser durch das Anhängen eines l oder L an den ganzzahligen Wert gekennzeichnet."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Gleitkommatypen"
            },
            {
                "type": "subtitle",
                "content": "Fließkommazahl / Gleitkommazahl (engl. <i>Floating Point number</i>)"
            },
            {
                "type": "text",
                "content": "Fließkommaliterale beinhalten Zahlen mit Nachkommastellen, wenn kein Typ angegeben wird werden sie standardmäßig als double - Wert behandelt. Sind sie mit einem angehängten f oder F gekennzeichnet, werden sie als float - Werte interpretiert."
            },
            {
                "type": "text",
                "content": "Beispiel: float price = 3.00f;"
            },
            {
                "type": "subtitle",
                "content": "float und double"
            },
            {
                "type": "table",
                "content": "Neben der Speichergröße - float 32 Bit oder double 64 Bit - gibt es Unterschiede in der Genauigkeit von Kommzahlen. Zwischen zwei beliebigen Zahlen gibt es unendlich viele Zahlen dazwischen …",
                "rows": [
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "0 und 1" },
                            { "align": "middle", "content": "0.1" },
                            { "align": "middle", "content": "0.2" },
                            { "align": "middle", "content": "0.3" },
                            { "align": "middle", "content": "…" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "0.1 und 0.2" },
                            { "align": "middle", "content": "0.11" },
                            { "align": "middle", "content": "0.12" },
                            { "align": "middle", "content": "0.13" },
                            { "align": "middle", "content": "…" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "0.01 und 0.02" },
                            { "align": "middle", "content": "0.011" },
                            { "align": "middle", "content": "0.012" },
                            { "align": "middle", "content": "0.013" },
                            { "align": "middle", "content": "…" }
                        ]
                    }
                ]
            },
            {
                "type": "text",
                "content": "Solche Zahlen haben eine unendliche Anzahl an Ziffern, um diese Ziffern zu speichern zu können würde man unendlichen Speicherplatz benötigen. Daher sind beide Typen von der Genauigkeit der Kommazahlen - und auch ganzen Zahlen - begrenzt."
            },
            {
                "type": "text",
                "content": "Jede float - Zahl kann in einen double gespeichert werden, aber im umgekehrten Fall geht die zusätzliche Genauigkeit verloren, ähnlich wie bei float und int (3.14159f → int wird zu 3). Den Typ float zu verwenden kann vorteilhaft sein wenn mit vielen Variablen gerechnet wird, manche Prozessoren können mit float schneller rechnen als mit double und es braucht die Hälfte an Speicher."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Character-Grundtyp"
            },
            {
                "type": "table",
                "content": "Um auch andere Zeichen wie Smileys oder mathematische Symbole darzustellen, für die es keine Taste gibt, können Literale verwendet werden. Dafür gibt es sogenannte <u>Escape-Sequenzen</u>, um zB. Steuer- oder Sonderzeichen im Text zu verwenden. Beispiel: Der Unicode <code>\\u0061</code> in einem HTML Template wird im Browser als Buchstabe a dargestellt. Außerdem können mit Escape-Sequenzen unter anderem Zeilenumbrüche und Anführungszeichen in Strings hinzugefügt werden.",
                "rows": [
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "\\u0061" },
                            { "align": "left", "content": "Unicode für Buchstabe a" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "\\n" },
                            { "align": "left", "content": "Zeilenumbruch" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "\\f" },
                            { "align": "left", "content": "Seitenumbruch" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "\\t" },
                            { "align": "left", "content": "Horizontaler Tabulator" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "\\\\" },
                            { "align": "left", "content": "Backslash" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "\\b" },
                            { "align": "left", "content": "Rückschritt (Backspace)" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "\\\"" },
                            { "align": "left", "content": "Doppeltes Anführungszeichen" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "\\'" },
                            { "align": "left", "content": "Einfaches Anführungszeichen" }
                        ]
                    }
                ]
            },
            {
                "type": "list",
                "content": "Der Typ char hat 16 bit und ist ein einzelnes Zeichen aus dem Unicodezeichensatz. Einer char - Variablen kann man drei verschiedene Arten von Werten zuweisen:",
                "list": [
                    "→ Ein alphanumerisches Zeichen in einfachen Anführungszeichen",
                    "→ Ein Integerwert aus dem Zahlenbereich 0 bis 65535",
                    "→ oder der vierstellige hexadezimale Index aus dem Unicodezeichensatz"
                ]
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Boolescher-Grundtyp"
            },
            {
                "type": "text",
                "content": "In der Programmierung ist es häufig nötig sogenannte Wahrheitswerte / Zustände zu speichern. Dafür gibt es den Typ boolean, benannt nach <a href='https://de.wikipedia.org/wiki/George_Boole'>George Boole</a>, welcher nur den Wert true oder false annehmen kann. Intern werden diese Werte mit 1 und 0 dargestellt. Bei der Initialisierung eines Booleans lässt sich auch ein Vergleich darstellen …"
            },
            {
                "type": "text",
                "content": "int age = 20; <br/> int restriction = 18; <br/> boolean isOldEnough = age >= restriction; ← true"
            },
            {
                "type": "text",
                "content": "Boolesche Operatoren in Java wären zum Beispiel … <br/> isOldEnough && paymentDone <br/> paymentDone || isPremiumMember <br/> paymentDone == true"
            },
            {
                "type": "text",
                "content": "Die doppelten && und || bedeuten eine Kurzschlussauswertung, sobald beim && der erste Wert false ist, oder bei || der erste Wert true, werden die folgenden Werte nicht mehr ausgewertet. Die Operatoren mit vollständiger Auswertung werden benötigt, wenn es zu Teilausdrücken kommt - wie zB. den Ladezustand zu beenden - also Methodenaufrufe die in jedem Fall ausgeführt werden sollen."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Kodierung"
            },
            {
                "type": "subtitle",
                "content": "Ganzzahlige Datentypen (Zweierkomplementkodierung)"
            },
            {
                "type": "text",
                "content": "Das <a href='https://de.wikipedia.org/wiki/Zweierkomplement'>Zweierkomplement</a> (engl. <i>two’s complement</i>) - auch B(inär)-Komplement oder Basiskomplement - ist eine Möglichkeit negative Integer-Zahlen im Dualsystem darzustellen, ohne zusätzliche Zeichen wie <b>+</b> und <b>−</b> zu benötigen. Dies ist vor allem für Computer bedeutend, welche mit Bits arbeiten, die als Werte nur 0 oder 1 annehmen."
            },
            {
                "type": "hint",
                "content": "Das Zweierkomplement ist die vorherrschende Art, mit der positive und negative Zahlen im Computer dargestellt und für Rechenoperationen mit Hilfe des Rechenwerks erschlossen werden."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ed7dafd4db79250b7ebc5d2"
            },
            {
                "type": "subtitle",
                "content": "Gleitkommatypen (Gleitkommakodierung nach IEEE 754)"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ed7db2f4db79250b7ebc5d4"
            },
            {
                "type": "text",
                "content": "m = normalisierte Mantisse - 1 ≤ m < 2 <br/> e - Exponent"
            },
            {
                "type": "subtitle",
                "content": "Beispiel: Kodierung der Zahl 13, 5"
            },
            {
                "type": "text",
                "content": "Suche den größten Exponenten (Zweierpotenz), so dass 2<sup>e</sup> ≤ x - 13,5 = 1,<b>6875</b> x 2<sup><b>3</b></sup>"
            },
            {
                "type": "text",
                "content": "Um negative Exponenten ohne zusätzliche Codierung (zB. Zweierkomplement) darstellen zu können, wird ein Biaswert (B) zum Exponenten (e) addiert."
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "float" },
                            { "align": "left", "content": "Biaswert (B) - 127" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "double" },
                            { "align": "left", "content": "Biaswert (B) - 1023" }
                        ]
                    }
                ]
            },
            {
                "type": "text",
                "content": "Abgespeichert wird der modifizierte Exponent (e + B) und die reduzierte normalisierte Mantisse f, mit f = m - 1"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ed7db454db79250b7ebc5d6"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Typkonvertierung"
            },
            {
                "type": "subtitle",
                "content": "Typumwandlung (engl. <i>type casting</i>)"
            },
            {
                "type": "text",
                "content": "Wenn ein int - Wert mit einem double - Wert addiert werden soll, welchem Grunddatentyp enstpricht dann das Ergebnis?"
            },
            {
                "type": "list",
                "content": "Implizite Typkonvertierung (engl. <i>implicite typecast</i>) bei Grunddatentypen",
                "list": [
                    "Kleiner Zahlenbereich wird im großen Zahlenbereich abgebildet",
                    "Compiler tut dies in Java problemlos"
                ]
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ed7db5f4db79250b7ebc5d8"
            },
            {
                "type": "text",
                "content": "Java nimmt alle Typumformungen in Pfeilrichtung automatisch (implizit) vor. Dabei können Zwischenschritte übersprungen werden."
            },
            {
                "type": "subtitle",
                "content": "Explizite Typkonvertierung bei Grunddatentypen (explicit typecast)"
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    "großen Zahlenbereich in kleinen Zahlenbereich umwandeln (zB. die Vorkommazahl von 3.14 wird benötigt) also in Java double → int",
                    "Compiler zeigt Fehler an"
                ]
            },
            {
                "type": "text",
                "content": "Alle Typkonvertierungen entgegengesetzt der Pfeilrichtung erfordern in Java einen Konvertierungenoperator (cast-Operator), der den Ziel-Typ der Konvertierung angibt. Es wird explizit kenntlich gemacht, dass die Typkonvertierung gewollt ist. Der Konvertierungsoperator wird in Klammern geschrieben und gibt den Zieldatentyp an. <br/> → Beispiel:(int) 3.14 → Nachkommastellen werden abgeschnitten"
            },
            {
                "type": "hint",
                "content": "Der Grunddatentyp boolean kann in Java nicht konvertiert werden!"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Typsysteme im Vergleich"
            },
            {
                "type": "subtitle",
                "content": "Stark typisierte Sprachen"
            },
            {
                "type": "text",
                "content": "Datentypen werden immer erzwungen. Ohne explizite Typkonvertierung kann ein int - Datentyp nicht in ein char - Datentyp umgewandelt werden (Java und Python)"
            },
            {
                "type": "subtitle",
                "content": "Schwach typisierte Sprachen"
            },
            {
                "type": "text",
                "content": "Datentypen können ignoriert werden. Ein int -Datentyp kann ohne explizite Typkonvertierung als char verwendet werden (C, PHP, Lua)"
            },
            {
                "type": "subtitle",
                "content": "Statisch typisierte Sprachen"
            },
            {
                "type": "text",
                "content": "Der Datentyp steht zur Kompilerzeit fest. Einer Variablen wird vor der Verwendung ein Datentyp zugewiesen (Java und C)"
            },
            {
                "type": "subtitle",
                "content": "Dynamisch typisierte Sprachen"
            },
            {
                "type": "text",
                "content": "Der Datentyp wird bei der Zuweisung einer Variablen zur Laufzeit ermittelt (PHP, Python, Lua)"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "list",
                "content": "Quellen:",
                "list": [
                    "Zentrum für Mediales Lernen am Karlsruher Institut für Technologie (KIT) | Objekt-orientiertes Programmieren in Java, Typen und Variablen, Präzedenz, Wahrheitswertswerte - Vorlesungsaufzeichnung <a href='https://youtu.be/LNsjGxhUJ4I'>https://youtu.be/LNsjGxhUJ4I</a>",
                    "<a href='https://www.a-coding-project.de/ratgeber/java/variablen-und-operatoren'>https://www.a-coding-project.de/ratgeber/java/variablen-und-operatoren</a>",
                    "<a href='https://de.wikipedia.org/wiki/Zweierkomplement'>https://de.wikipedia.org/wiki/Zweierkomplement</a>"
                ]
            }
        ]
    },
    {
        "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/operatoren",
        "topic": "Entwickeln und Bereitstellen von Anwendungssystemen",
        "subject": "lf-6",
        "lessonDate": "2019-09-27",
        "lastUpdate": "2020-10-31",
        "schoolWeek": "3",
        "elements": [
            {
                "type": "subtitle",
                "content": "Arithmetische Operatoren"
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "header",
                        "columns": [
                            { "align": "middle", "content": "Operator" },
                            { "align": "middle", "content": "Ausdruck" },
                            { "align": "middle", "content": "Priorität" },
                            { "align": "left", "content": "Beschreibung" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "+" },
                            { "align": "middle", "content": "a + b" },
                            { "align": "middle", "content": "5" },
                            { "align": "left", "content": "Addition → Summe von a und b" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "-" },
                            { "align": "middle", "content": "a - b" },
                            { "align": "middle", "content": "5" },
                            { "align": "left", "content": "Subtraktion → Differenz von a und b" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "*" },
                            { "align": "middle", "content": "a * b" },
                            { "align": "middle", "content": "4" },
                            { "align": "left", "content": "Multiplikation → Produkt von a und b" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "/" },
                            { "align": "middle", "content": "a / b" },
                            { "align": "middle", "content": "4" },
                            { "align": "left", "content": "Division → Quotienten von a und b" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "%" },
                            { "align": "middle", "content": "a % b" },
                            { "align": "middle", "content": "4" },
                            { "align": "left", "content": "Modulo, Restwert → ganzzahliger Rest der Division von a und b" }
                        ]
                    }
                ]
            },
            {
                "type": "subtitle",
                "content": "Inkrement- und Dekrement-Operatoren"
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "header",
                        "columns": [
                            { "align": "middle", "content": "Operator" },
                            { "align": "middle", "content": "Ausdruck" },
                            { "align": "middle", "content": "Priorität" },
                            { "align": "left", "content": "Beschreibung" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "++" },
                            { "align": "middle", "content": "++a" },
                            { "align": "middle", "content": "2" },
                            { "align": "left", "content": "Prä-Inkrement → Erhöht den Wert von a um 1 vor dem Ausdruck" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "++" },
                            { "align": "middle", "content": "a++" },
                            { "align": "middle", "content": "1" },
                            { "align": "left", "content": "Post-Inkrement → Erhöht den Wert von a um 1 nach dem Ausdruck" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "--" },
                            { "align": "middle", "content": "--a" },
                            { "align": "middle", "content": "2" },
                            { "align": "left", "content": "Prä-Dekrement → Verringert den Wert von a um 1 vor dem Ausdruck" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "--" },
                            { "align": "middle", "content": "--a" },
                            { "align": "middle", "content": "1" },
                            { "align": "left", "content": "Post-Dekrement → Verringert den Wert um 1 nach dem Ausdruck" }
                        ]
                    }
                ]
            },
            {
                "type": "subtitle",
                "content": "Vorzeichen Operatoren"
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "header",
                        "columns": [
                            { "align": "middle", "content": "Operator" },
                            { "align": "middle", "content": "Ausdruck" },
                            { "align": "middle", "content": "Priorität" },
                            { "align": "left", "content": "Beschreibung" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "+" },
                            { "align": "middle", "content": "+a" },
                            { "align": "middle", "content": "2" },
                            { "align": "left", "content": "Konvertiert Werte vom Typ byte, short oder char nach int, lässt ansonsten den Wert unverändert" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "-" },
                            { "align": "middle", "content": "-a" },
                            { "align": "middle", "content": "2" },
                            { "align": "left", "content": "Wechselt das Vorzeichen von a" }
                        ]
                    }
                ]
            },
            {
                "type": "subtitle",
                "content": "Relationale Operatoren"
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "header",
                        "columns": [
                            { "align": "middle", "content": "Operator" },
                            { "align": "middle", "content": "Ausdruck" },
                            { "align": "middle", "content": "Priorität" },
                            { "align": "left", "content": "Beschreibung" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": ">" },
                            { "align": "middle", "content": "a > b" },
                            { "align": "middle", "content": "7" },
                            { "align": "left", "content": "true, wenn a größer als b ist" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": ">=" },
                            { "align": "middle", "content": "a >= b" },
                            { "align": "middle", "content": "7" },
                            { "align": "left", "content": "true, wenn a größer oder gleich b ist" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "<" },
                            { "align": "middle", "content": "a < b" },
                            { "align": "middle", "content": "7" },
                            { "align": "left", "content": "true, wenn a kleiner als b ist" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "<=" },
                            { "align": "middle", "content": "a <= b" },
                            { "align": "middle", "content": "7" },
                            { "align": "left", "content": "true, wenn a kleiner oder gleich b ist" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "==" },
                            { "align": "middle", "content": "a == b" },
                            { "align": "middle", "content": "8" },
                            { "align": "left", "content": "true, wenn a gleich b ist" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "!=" },
                            { "align": "middle", "content": "a != b" },
                            { "align": "middle", "content": "8" },
                            { "align": "left", "content": "true, wenn a ungleich b ist" }
                        ]
                    }
                ]
            },
            {
                "type": "subtitle",
                "content": "Logische Operatoren"
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "header",
                        "columns": [
                            { "align": "middle", "content": "Operator" },
                            { "align": "middle", "content": "Ausdruck" },
                            { "align": "middle", "content": "Priorität" },
                            { "align": "left", "content": "Beschreibung" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "!" },
                            { "align": "middle", "content": "!a" },
                            { "align": "middle", "content": "2" },
                            { "align": "left", "content": "NICHT, der Ausdruck liefert true, wenn a false ist, ansonsten false" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "&&" },
                            { "align": "middle", "content": "a && b" },
                            { "align": "middle", "content": "12" },
                            { "align": "left", "content": "UND (Short Cut), der Ausdruck liefert true, wenn sowohl a als auch b true sind, ansonsten false. Ist a bereits false, wird b nicht mehr bewertet" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "||" },
                            { "align": "middle", "content": "a || b" },
                            { "align": "middle", "content": "13" },
                            { "align": "left", "content": "ODER (Short Cut), der Ausdruck liefert true, wenn midnestens a oder b true ist, ansonsten false. Ist a bereits true liefert der Ausdruck true, ohne dass b noch bewertet wird" }
                        ]
                    }
                ]
            },
            {
                "type": "subtitle",
                "content": "Bit Operatoren"
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "header",
                        "columns": [
                            { "align": "middle", "content": "Operator" },
                            { "align": "middle", "content": "Ausdruck" },
                            { "align": "middle", "content": "Priorität" },
                            { "align": "left", "content": "Beschreibung" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "~" },
                            { "align": "middle", "content": "~a" },
                            { "align": "middle", "content": "2" },
                            { "align": "left", "content": "Einerkomplement" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "&" },
                            { "align": "middle", "content": "a & b" },
                            { "align": "middle", "content": "9" },
                            { "align": "left", "content": "bitweise UND, bei booleschen Operationen ein UND ohne Short Cut" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "|" },
                            { "align": "middle", "content": "a | b" },
                            { "align": "middle", "content": "11" },
                            { "align": "left", "content": "bitweise ODER, bei booleschen Operationen ein ODER ohne Short Cut" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "^" },
                            { "align": "middle", "content": "a ^ b" },
                            { "align": "middle", "content": "10" },
                            { "align": "left", "content": "bitweises EXKLUSIV-ODER" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": ">>" },
                            { "align": "middle", "content": "a >> b" },
                            { "align": "middle", "content": "6" },
                            { "align": "left", "content": "Rechtsschieben mit Vorzeichen" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": ">>>" },
                            { "align": "middle", "content": "a >>> b" },
                            { "align": "middle", "content": "6" },
                            { "align": "left", "content": "Rechtsschieben ohne Vorzeichen" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "<<" },
                            { "align": "middle", "content": "a << b" },
                            { "align": "middle", "content": "6" },
                            { "align": "left", "content": "Linksschieben" }
                        ]
                    }
                ]
            },
            {
                "type": "subtitle",
                "content": "Zuweisungs Operatoren"
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "header",
                        "columns": [
                            { "align": "middle", "content": "Operator" },
                            { "align": "middle", "content": "Ausdruck" },
                            { "align": "middle", "content": "Priorität" },
                            { "align": "left", "content": "Beschreibung" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "=" },
                            { "align": "middle", "content": "a = b" },
                            { "align": "middle", "content": "15" },
                            { "align": "left", "content": "Weist a den Wert von b zu. Rückgabewert des Ausdrucks ist der Wert von b" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "+=" },
                            { "align": "middle", "content": "a += b" },
                            { "align": "middle", "content": "15" },
                            { "align": "left", "content": "Additions-Zuweisung. Kurznotation für a = a + b. Der Ausdruck weist a den Wert a + b zu, Rückgabewert ist a + b" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "-=" },
                            { "align": "middle", "content": "a -= b" },
                            { "align": "middle", "content": "15" },
                            { "align": "left", "content": "Subtraktions-Zuweisung. Kurznotation für a = a - b" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "*=" },
                            { "align": "middle", "content": "a *= b" },
                            { "align": "middle", "content": "15" },
                            { "align": "left", "content": "Multiplikations-Zuweisung. Kurznotation für a = a * b" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "/=" },
                            { "align": "middle", "content": "a /= b" },
                            { "align": "middle", "content": "15" },
                            { "align": "left", "content": "Divisions-Zuweisung. Kurznotation für a = a / b" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "%=" },
                            { "align": "middle", "content": "a %= b" },
                            { "align": "middle", "content": "15" },
                            { "align": "left", "content": "Modulo-Zuweisung. Kurznotation für a = a % b" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "&=" },
                            { "align": "middle", "content": "a &= b" },
                            { "align": "middle", "content": "15" },
                            { "align": "left", "content": "UND-Zuweisung. Kurznotation für a = a & b" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "|=" },
                            { "align": "middle", "content": "a |= b" },
                            { "align": "middle", "content": "15" },
                            { "align": "left", "content": "ODER-Zuweisung. Kurznotation für a = a | b" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "^=" },
                            { "align": "middle", "content": "a ^= b" },
                            { "align": "middle", "content": "15" },
                            { "align": "left", "content": "EXKLUSIV-ODER-Zuweisung. Kurznotation für a = a ^ b" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": ">>=" },
                            { "align": "middle", "content": "a >>= b" },
                            { "align": "middle", "content": "15" },
                            { "align": "left", "content": "Rechtsschiebe-Zuweisung. Kurznotation für a = a >> b" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": ">>>=" },
                            { "align": "middle", "content": "a >>>= b" },
                            { "align": "middle", "content": "15" },
                            { "align": "left", "content": "Rechtsschiebe-Zuweisung mit Nullexpansion. Kurznotation für a = a >>> b" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "<<=" },
                            { "align": "middle", "content": "a <<= b" },
                            { "align": "middle", "content": "15" },
                            { "align": "left", "content": "Linksschiebe-Zuweisung. Kurznotation für a = a << b" }
                        ]
                    }
                ]
            },
            {
                "type": "subtitle",
                "content": "Sonstige Operatoren"
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "header",
                        "columns": [
                            { "align": "middle", "content": "Operator" },
                            { "align": "middle", "content": "Priorität" },
                            { "align": "left", "content": "Beschreibung" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "?:" },
                            { "align": "middle", "content": "14" },
                            { "align": "left", "content": "Fragezeichen-Operator (Bedingungsoperator, Konditionaloperator). Syntax: a ? b : c;. a ist ein boolescher Wert. Ist a true, liefert der Fragezeichen-Ausdruck den Wert b, andernfalls den Wert von c" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "[]" },
                            { "align": "middle", "content": "1" },
                            { "align": "left", "content": "Eckige Klammern, um Arrays zu deklarieren, zu initialisieren und um auf Array-Elemente zuzugreifen" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "." },
                            { "align": "middle", "content": "1" },
                            { "align": "left", "content": "Punkt als Trennzeichen zur Bildung qualifizierter Namen" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "(parameterliste)" },
                            { "align": "middle", "content": "1" },
                            { "align": "left", "content": "Die runden Klammern sind bei der Deklaration und beim Aufruf von Methoden anzugeben" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "(type)" },
                            { "align": "middle", "content": "3" },
                            { "align": "left", "content": "Operator für die Typkonvertierung (cast-Operator)" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "new" },
                            { "align": "middle", "content": "3" },
                            { "align": "left", "content": "Operator zum Erzeugen einer neuen Instanz (eines neuen Objekts)" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "instanceof" },
                            { "align": "middle", "content": "7" },
                            { "align": "left", "content": "Der Ausdruck op instanceof class testet, ob der Operand op eine Instanz einer Klasse class oder einer davon abgeleiteten Klasse ist" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "+" },
                            { "align": "middle", "content": "5" },
                            { "align": "left", "content": "Stringverkettung. Ist beim Zeichen + einer der beiden Operanden ein String, wird eine Stringverkettung durchgeführt. Nicht-String-Operanden werden dabei ggf. in String-Instanzen konvertiert" }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/kontrollstrukturen",
        "topic": "Entwickeln und Bereitstellen von Anwendungssystemen",
        "subject": "lf-6",
        "lessonDate": "2019-10-28",
        "lastUpdate": "2020-10-18",
        "schoolWeek": "4",
        "elements": [
            {
                "type": "title",
                "content": "Ausdrücke"
            },
            {
                "type": "text",
                "content": "Ausdrücke (engl. \"expressions\") werden in einem Programm verwendet, um vorzunehmende Auswertungen zu beschreiben."
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "auf der rechten Seite von Zuweisungen" },
                            { "align": "left", "content": "<code>x = Ausdruck;</code>" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "als Argumente von Methoden" },
                            { "align": "left", "content": "<code>f(Ausdruck) { ... };</code>" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "als Rückgabewerte von Funktionen" },
                            { "align": "left", "content": "<code>return Ausdruck;</code>" }
                        ]
                    }
                ]
            },
            {
                "type": "text",
                "content": "Jeder Ausdruck hat einen Typ <br/> <code>(3.0 + y) * 4.0</code> - ist ein Ausdruck vom Typ <code>double</code> <br/> <code>new Vector2D(1.0, 2.0)</code> - ist ein Ausdruck vom Typ <code>Vector2D</code> <br/> <code>x == 2</code> - ist ein Ausdruck vom Typ <code>boolean</code>"
            },
            {
                "type": "hint",
                "content": "Ausdrücke vom Typ <code>boolean</code> nennt man auch Bedingungen."
            },
            {
                "type": "subtitle",
                "content": "Weitere Ausdrücke in Java"
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "<code>f(Ausdruck<sub>1</sub>)" },
                            { "align": "left", "content": "Methodenaufruf" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "<code>Ausdruck<sub>1</sub> x Ausdruck<sub>2</sub></code>" },
                            { "align": "left", "content": "hier bezeichnet x einen beliebigen binären Operator" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "<code>yAusdruck</code>" },
                            { "align": "left", "content": "hier bezeichnet y einen beliebigen binären Operator" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "<code>new Klasse()</code>" },
                            { "align": "left", "content": "Initialisierung einer Klasse" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "<code>Variable = Ausdruck</code>" },
                            { "align": "left", "content": "Zuweisung" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "<code>_ instanceof _</code>" },
                            { "align": "left", "content": "Klassen-Zugehörigkeits-Test" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "<code>_ ? _ : _</code>" },
                            { "align": "left", "content": "Bedingter Ausdruck (wenn-dann-sonst)" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "<code>(Typ) _</code>" },
                            { "align": "left", "content": "Typumwandlung (type cast)" }
                        ]
                    }
                ]
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Anweisungen"
            },
            {
                "type": "text",
                "content": "Anweisungen (engl. \"statements\") sind Einheiten der Ausführung, auch \"Sätze in der Programmiersprache\" genannt. Anweisungen haben meistens eine Zustandsveränderung zur Folge."
            },
            {
                "type": "list",
                "content": "Anweisungen in Java",
                "list": [
                    "Deklaration lokaler Variablen - <code>int x;</code>",
                    "Block-Anweisungen - <code>{ Anweisung1; ... }</code>",
                    "Return-Anweisungen - <code>return Ausdruck; bzw. return;</code>"
                ]
            },
            {
                "type": "list",
                "content": "\"Expression-Statements\" sind ausgewählte Ausdrücke, die gleichzeitig auch als Anweisungen verwendet werden können",
                "list": [
                    "Inkrement- / Dekrement-Operator <br/> <code>i++;</code> == <code>Ausdruck<sub>1</sub> = y + (i++);</code>",
                    "Zuweisungen <br/> <code>x = y;</code> == <code>Ausdruck<sub>2</sub> = (y = z);</code>",
                    "Methodenaufrufe <br/> <code>f(x,y);</code> == <code>Ausdruck<sub>3</sub> = (y = z);</code>",
                    "new-Operator <br/> <code>new Vector2D();</code> == <code>Ausdruck<sub>4</sub> = new Vector2D();</code>"
                ]
            },
            {
                "type": "subtitle",
                "content": "Ausdruck vs Anweisung"
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "header",
                        "columns": [
                            { "align": "middle", "content": "" },
                            { "align": "middle", "content": "Ausdruck" },
                            { "align": "middle", "content": "Anweisung" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "Typisiert" },
                            { "align": "middle", "content": "Ja" },
                            { "align": "middle", "content": "Nein" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "Zweck" },
                            { "align": "middle", "content": "„Berechne ...“" },
                            { "align": "middle", "content": "„Mache ...“" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "Effekt" },
                            { "align": "middle", "content": "Liefert Wert" },
                            { "align": "middle", "content": "Ändert Zustand" }
                        ]
                    }
                ]
            },
            {
                "type": "hint",
                "content": "Ein Ausdruck ist immer Teil einer Anweisung, der Rumpf jeder Methode ist immer eine Folge von Anweisungen."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Übung"
            },
            {
                "type": "list",
                "content": "Bei welchen Java-Fragmenten handelt es sich um gültige Anweisungen?",
                "list": [
                    "1) <code>P = new Vector2D().shift(1.0, 2.0);</code>",
                    "2) <code>(int)foo(x);</code>",
                    "2) <code>x = y = z;</code>",
                    "2) <code>(i++)++;</code>"
                ]
            },
            {
                "type": "subtitle",
                "content": "Eingaben über die Konsole"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5eefac334db79250b7ebc5df"
            },
            {
                "type": "list",
                "content": "Vorgefertigte Klasse <code>Scanner</code>",
                "list": [
                    "Importieren mit - <code>import java.util.Scanner;s</code>",
                    "Objekt erstellen mit - <code>new Scanner(System.in);</code>",
                    "Zeile einlesen mit - <code>scanner.nextInt();</code>"
                ]
            },
            {
                "type": "hint",
                "content": "Achtung: Noch gibt es keine Fehlerbehandlung wenn keine Zahl eingegeben wird!"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Kontrollfluss-Anweisungen (engl. \"control-flow-statements\")"
            },
            {
                "type": "text",
                "content": "<code>if</code> - Anweisung <br/> <code>switch</code> - Anweisung <br/> <code>while / do-while</code> - Anweisung <br/> <code>for</code> - Anweisung <br/> <code>break</code> - Anweisung <br/> <code>continue</code> - Anweisung"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Die <code>if</code> – Anweisung"
            },
            {
                "type": "text",
                "content": "Fallunterscheidung: wenn-dann-Prinzip <br/> → Fallunterscheidung ist eine fundamentale Technik der Mathematik und des Programmierens"
            },
            {
                "type": "text",
                "content": "Beispielanweisung der Fallunterscheidung in Java"
            },
            {
                "type": "code",
                "language": "java",
                "content": "int a = scanner.nextInt(); \nint b = scanner.nextInt(); \nint max = 0; \n\nif (a >= b) { \n    max = a; \n} else { \n    max = b; \n}"
            },
            {
                "type": "text",
                "content": "Als Kontrollfluss-Diagramm"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5eefce7d4db79250b7ebc5e1"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Geschachtelte <code>if</code> – Anweisungen"
            },
            {
                "type": "text",
                "content": "Man kann die <code>if</code> - Anweisung auch mehrfach schachteln, nach Möglichkeit sollten die am häufigsten auftretenden Fälle zuerst behandelt werden. In jedem <code>else</code> - Zweig gilt die Negation aller vorangegangenen Bedingungen"
            },
            {
                "type": "code",
                "language": "java",
                "content": "int points = 70;\nint grade = 0; \n\nif (points >= 87) {\n    grade = 1 \n} else if (points >= 75) {\n    grade = 2;\n} else if (points >= 63) {\n    grade = 3;\n} else if (points >= 51) {\n    grade = 4;\n} else {\n    grade = 5;\n}\n\nSystem.out.println(\"Note: \" + grade);"
            },
            {
                "type": "text",
                "content": "Als Kontrollfluss-Diagramm"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5eefce9e4db79250b7ebc5e3"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Übung"
            },
            {
                "type": "text",
                "content": "Schreiben Sie ein Programm, das für zwei Integer-Eingaben a und b ausgibt, ob a größer, kleiner oder gleich b ist."
            },
            {
                "type": "text",
                "content": "Beispiel-Lösung"
            },
            {
                "type": "code",
                "language": "java",
                "content": "Scanner scanner = new Scanner(System.in);\nint a = scanner.nextInt(); \nint b = scanner.nextInt(); \n\nif (a > b) {\n    System.out.println(\"a ist größer als b\");\n} else if (a < b) {\n    System.out.println(\"a ist kleiner als b\");\n} else {\n    System.out.println(\"a ist gleich b\");\n}"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Die <code>switch</code> – Anweisung"
            },
            {
                "type": "text",
                "content": "Die switch – Anweisung (engl. ‚switch statement‘) realisiert eine weitere Form der Verzweigung."
            },
            {
                "type": "text",
                "content": "Beispiel-Lösung"
            },
            {
                "type": "code",
                "language": "java",
                "content": "// Konstanten der Klasse\nstatic final char NEW = ‘n‘;\nstatic final char OPEN = ‘o‘;\nstatic final char SAVE = ‘s‘;\nstatic final char QUIT = ‘q‘;\n\n// Innerhalb einer Methode\nchar command = ...;\nswitch (command) {\n   case NEW:   createFile();\n   break;\n   case OPEN:  openFile();\n   break;\n   case SAVE:  saveFile();\n   break;\n   case QUIT:  exitProgram();\n   break;\n   default:    System.out.println(\"Unbekanntes Kommando: \" + command);\n   break;\n}"
            },
            {
                "type": "text",
                "content": "Syntax"
            },
            {
                "type": "code",
                "language": "java",
                "content": "switch (command) {\n   case WERT_1: Anweisung_1;\n   default: Anweisung_2;\n}"
            },
            {
                "type": "text",
                "content": "Der Ausdruck muss dabei den Typ <code>char</code>, <code>byte</code>, <code>short</code>, <code>int</code> oder (seit Java 7 möglich) <code>enum</code> oder <code>string</code> haben. Die Werte nach <code>case</code> müssen kontant sein (keine Variablen!), ein „<code>case</code>“-Wert legt nur den Einstiegspunkt innerhalb des <code>switch</code> – Blocks fest. Die break – Anweisung veranlasst das (sofortige) Verlassen des gesamten <code>switch</code> – blocks. Ohne <code>break</code> werden auch alle Anweisungen der nachfolgenden <code>case</code> – Blöcke abgearbeitet. Nimmt der Ausdruck keinen der Werte an, so wird der (optionale) <code>default</code> – Block abgearbeitet."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Beispiel - Tage pro Monat"
            },
            {
                "type": "text",
                "content": "Die rechte Variante ist zwar kürzer, aber schlechter lesbar. Es werden auch Monate größer 12 und kleiner 1 akzeptiert. → Fehlerfindung (engl. „debugging“) erschwert."
            },
            {
                "type": "code",
                "language": "java",
                "content": "int month = 5;\nint days = 0;\n\n// Erstes Variante\nswitch (month) {\n   case  1: days = 31; break;\n   case  2: days = 28; break;\n   case  3: days = 31; break;\n   case  4: days = 30; break;\n   case  5: days = 31; break;\n   case  6: days = 30; break;\n   case  7: days = 31; break;\n   case  8: days = 31; break;\n   case  9: days = 30; break;\n   case 10: days = 31; break;\n   case 11: days = 30; break;\n   case 12: days = 31; break;\n}\n\n// Zweite Variante\nswitch (month) {\n   case  2: days = 28; break;\n   case  4:\n   case  6:\n   case  9:\n   case 11: days = 30; break;\n   default: days = 31; break;\n}"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "list",
                "content": "Quellen:",
                "list": [
                    "Zentrum für Mediales Lernen am Karlsruher Institut für Technologie (KIT) | Kontrollstrukturen, Ausdrücke, Programmieren von Schleifen, Unterschied for- und while-Schleifen - Vorlesungsaufzeichnung <a href='https://youtu.be/7afJG3_JSDo'>https://youtu.be/7afJG3_JSDo</a>"
                ]
            }
        ]
    },
    {
        "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/schleifen",
        "topic": "Entwickeln und Bereitstellen von Anwendungssystemen",
        "subject": "lf-6",
        "lessonDate": "2019-12-09",
        "lastUpdate": "2020-10-18",
        "schoolWeek": "6",
        "elements": [
            {
                "type": "title",
                "content": "Programmieren von Schleifen"
            },
            {
                "type": "text",
                "content": "Schleifen erlauben die wiederholte Ausführung von Anweisungen, die Programmierung von Schleifen erfolgt nach dem Muster: Vorbereitung, Schleife, Nachbereitung."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Die <code>while</code> - Schleife"
            },
            {
                "type": "text",
                "content": "Die <code>while</code> – Anweisung (engl. ‘while-statement‘) realisiert eine sich wiederholende Ausführung."
            },
            {
                "type": "code",
                "language": "java",
                "content": "int a = 8;\nint b = 11;\n\nint i = a;\nint sum = 0;\n\nwhile (i <= b) {\n   sum = sum + i;\n   i = i + 1;\n}"
            },
            {
                "type": "table",
                "content": "Vorgänge der Ausführung",
                "rows": [
                    {
                        "type": "header",
                        "columns": [
                            { "align": "middle", "content": "Iteration" },
                            { "align": "middle", "content": "<code>i</code>" },
                            { "align": "middle", "content": "<code>sum</code>" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "-" },
                            { "align": "middle", "content": "8" },
                            { "align": "middle", "content": "0" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "1" },
                            { "align": "middle", "content": "9" },
                            { "align": "middle", "content": "8" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "2" },
                            { "align": "middle", "content": "10" },
                            { "align": "middle", "content": "17" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "3" },
                            { "align": "middle", "content": "11" },
                            { "align": "middle", "content": "27" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "4" },
                            { "align": "middle", "content": "12" },
                            { "align": "middle", "content": "38" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "5" },
                            { "align": "middle", "content": "-" },
                            { "align": "middle", "content": "-" }
                        ]
                    }
                ]
            },
            {
                "type": "text",
                "content": "→ Ergebnis: 38"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Die <code>do-while</code> - Schleife"
            },
            {
                "type": "text",
                "content": "<code>do { Anweisungen } while (Bedingung)</code>"
            },
            {
                "type": "text",
                "content": "Als Kontrollfluss-Diagramm"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5eefcffd4db79250b7ebc5e9"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Übung"
            },
            {
                "type": "text",
                "content": "Schreiben Sie ein Programm, das für eine Integer – Eingaben p die Zahlen von 1 bis p ausgibt, gewünschte Ausgabe für <code></code>p = 5</code>"
            },
            {
                "type": "code",
                "language": "java",
                "content": "Scanner scanner = new Scanner(System.in);\nint p = scanner.nextInt();\nint i = 1;\n\nwhile (i <= p) {\n   System.out.println(i + \" \");\n   i++;\n}"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Die <code>for</code> - Schleife"
            },
            {
                "type": "text",
                "content": "Die <code>for</code> – Schleife (engl. \"for statement\") ist eine Zählschleife"
            },
            {
                "type": "text",
                "content": "<code>for (Initialisierung; Bedingung; Schritt) { Anweisungen }</code>"
            },
            {
                "type": "text",
                "content": "Die Initialisierung ist eine Anweisung, die einmalig am Anfang der Schleife ausgeführt wird, vor jedem Schleifendurchlauf wird geprüft, ob die Bedingung wahr ist. Der Schritt ist eine Anweisung, die am Ende jedes Schleifendurchlaufs ausgeführt wird (nach den Anweisungen)."
            },
            {
                "type": "code",
                "language": "java",
                "content": "int a = 8;\nint b = 11;\nint sum = 0;\n\nfor (int i = a; i <= b; i++) {\n   sum = sum + i;\n}"
            },
            {
                "type": "text",
                "content": "Als Kontrollfluss-Diagramm"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5eefcf1b4db79250b7ebc5e7"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Unterschied <code>for</code> – und <code>while</code> – Schleife"
            },
            {
                "type": "text",
                "content": "<code>for (n) { ... }</code> <br/> → Ich weiß wie oft es ausgeführt wird, da es wie ein sequentiellles Programm ohne Schleife läuft"
            },
            {
                "type": "code",
                "language": "java",
                "content": "for (initialisierung; abbruchbedingung; anweisungen_2) {\n   anweisungen_1;\n}"
            },
            {
                "type": "text",
                "content": "<code>while (n) { ... }</code> <br/> → → Ich weiß vor Beginn der Ausführung nicht unbedingt, wie oft die Schleife ausgeführt wird"
            },
            {
                "type": "code",
                "language": "java",
                "content": "Typ initialisierung;\n\nwhile (abbruchbedingung) {\n   anweisungen_1; anweisungen_2\n}"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Beispiel: Collatz – Funktion"
            },
            {
                "type": "text",
                "content": "Hier ist im Voraus unbekannt, wie häufig die Schleife ausgeführt wird."
            },
            {
                "type": "code",
                "language": "java",
                "content": "n = Zahl;\n\nwhile (n != 1) {\n   if (n%2 == 0) {\n      n = n / 2;\n   } else {\n      n = n * 3 + 1;\n   }\n}"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Übung"
            },
            {
                "type": "text",
                "content": "Gesucht: Ein Programm, das für zwei Integer – Eingaben p und m dann p Zeilen in der Konsole ausgeben, die jeweils die Zahlen von 1 bis m enthalten. <br/> Gewünschte Ausgabe für p = 2 und m = 5"
            },
            {
                "type": "code",
                "language": "java",
                "content": "int p = scanner.nextInt();\nint m = scanner.nextInt();\n\nfor (int i = 1; i <= p; i++) {\n   for (int j = 1; j <= m; j++) {\n      System.out.print(j + \" \");\n   }\n\n   System.out.println(\"\");\n}"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Die <code>break</code> - Schleife"
            },
            {
                "type": "text",
                "content": "Manchmal möchte man eine Schleife verlassen, bevor alle Schleifendurchläufe abgearbeitet wurden. „break“ veranlasst das sofortige Verlassen der innersten Schleife, es sollte nur sparsam und gezielt eingesetzt werden, damit der Programmcode übersichtlich und verständlich bleibt."
            },
            {
                "type": "code",
                "language": "java",
                "content": "int i, sum = 0;\n\nwhile (true) {\n   i = scanner.nextInt();\n   if (i == 0) {\n      break;\n   }\n   sum += i;\n   System.out.println(\"sum = \" + sum);\n}"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Die <code>continue</code> - Schleife"
            },
            {
                "type": "text",
                "content": "Bricht die Ausführung der aktuellen Schleifeniteration ab und springt direkt zur nächsten Iteration <br/> → Die Schleifenbedingung wird dabei geprüft <br/> → Bei einer for – Schleife wird zuvor auch noch die Schritt – Anweisung ausgeführt"
            },
            {
                "type": "code",
                "language": "java",
                "content": "int i, numOnes = 0;\n\nwhile (true) {\n   i = scanner.nextInt();\n   if (i == 0) {\n      break;\n   } else if (i != 1) {\n      continue;\n   }\n   numOnes++;\n   System.out.println(\"number of ones = \" + numOnes);\n}"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "list",
                "content": "Quellen:",
                "list": [
                    "Zentrum für Mediales Lernen am Karlsruher Institut für Technologie (KIT) | Kontrollstrukturen, Ausdrücke, Programmieren von Schleifen, Unterschied for- und while-Schleifen - Vorlesungsaufzeichnung <a href='https://youtu.be/7afJG3_JSDo'>https://youtu.be/7afJG3_JSDo</a>"
                ]
            }
        ]
    },
    {
        "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/datenstrukturen_und_arrays",
        "topic": "Entwickeln und Bereitstellen von Anwendungssystemen",
        "subject": "lf-6",
        "lessonDate": "2020-01-17",
        "lastUpdate": "2020-05-16",
        "schoolWeek": "7",
        "elements": [
            {
                "type": "title",
                "content": "Referenzdatentypen"
            },
            {
                "type": "text",
                "content": "Java unterscheidet grundsätzlich zwei Arten von Datentypen mit der eine Variable deklariert werden kann: elementare Datentypen und Referenzdatentypen. Elementare oder auch primitive Datentypen sind int, double, char, usw. Über einen Variablennamen kann direkt auf die Speicherzelle, die den Wert eines elementaren Datentyps enthält, zugegriffen werden."
            },
            {
                "type": "text",
                "content": "Elementare Typen kommen so oder ähnlich in fast jeder Programmiersprache vor."
            },
            {
                "type": "code",
                "language": "java",
                "content": "int a = 42;"
            },
            {
                "type": "text",
                "content": "Die Speicherzelle der Variable enthält den Wert eines elementaren Datentyps."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ef931064ec54c25305a507a"
            },
            {
                "type": "text",
                "content": "Eine Variable des Referentdatentyps enthält entweder eine Referenz auf ein Objekt oder eine Null-Referenz. Klassen, Interfaces (werden später behandelt) und Felder (Arrays) benutzen Referenzdatentypen. Das Schlüsselwort <code>new</code> reserviert Speicherplatz für das referenzierte Objekt und erzeugt dieses."
            },
            {
                "type": "text",
                "content": "Im folgenden Beispiel wird ein neues Array-Objekt für fünf Integer-Zahlen erzeugt und die Referenz darauf in der Referenzvariable a gespeichert."
            },
            {
                "type": "code",
                "language": "java",
                "content": "int[] a = new int[5];"
            },
            {
                "type": "text",
                "content": "Die Speicherzelle der Variable enthält eine Referenz auf ein Objekt (Adresse bzw. Verweis auf einen Speicherbereich, in dem das Objekt abgelegt ist)."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ef931144ec54c25305a507c"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Die Null-Referenz"
            },
            {
                "type": "code",
                "language": "java",
                "content": "int[] a;"
            },
            {
                "type": "text",
                "content": "In Java gibt es drei spezielle Referenzen: <code>null</code>, <code>this</code> und <code>super</code>. Mit edem Literal <code>null</code> wird eine Referenz repräsentiert, die auf nichts verweist. Diese Referenz ist typenlos, d. h. sie kann jeder Referenzvariable, egal welchen Typs, zugewiesen werden. Da in Java Objekte erst zur Laufzeit erzeugt werden, erhalten uninitialisierte Referenzvariablen eine Null-Referenz (<code>null</code>). Die anderen zwei speziellen Referenzen werden später behandelt."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ef931304ec54c25305a507e"
            },
            {
                "type": "code",
                "language": "java",
                "content": "int[] a = null;\n// oder\nchar[] a = null;"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Datenstrukturen"
            },
            {
                "type": "text",
                "content": "Viele Probleme lassen sich mit den bisherigen \"Boardmitteln\" nur umständlich programmieren. Angenommen, Sie wollen ein Programm schreiben, das aus 100 Werten vom Typ <code>int</code> das Minimum ausgibt. Dazu müssten Sie 100 Variablen vom Typ <code>int</code> deklaieren (anlegen), initialisieren (einlesen) und selektieren (100 Vergleiche abfragen)."
            },
            {
                "type": "code",
                "language": "java",
                "content": "int wert1 = 3, wert2 = 46, wert3 = 97, wert4 = 70, ..., wert100 = 54;\nint minimum\nminimum = wert1;\nif (minimum > wert2) minimum = wert2;\nif (minimum > wert3) minimum = wert3;\nif (minimum > wert4) minimum = wert4;\n// ...\nif (minimum > wert100) minimum = wert100;"
            },
            {
                "type": "text",
                "content": "Stellen Sie sich diesen Aufwand mit 1000 Zahlen vor. Es ist offensichtlich, dass das beschriebene Verfahren nicht besonders effizient ist."
            },
            {
                "type": "text",
                "content": "Ein oft einfacherer Weg, algorithmische Probleme zu lösen, ist die Verwendung von Datenstrukturen. Grundlegene Datenstrukturen für die vorrangig imperative Programmierung sidn Tupel (engl. \"record\"), Feld (engl. \"array\", \"vector\"), Verkettete Liste (engl. \"linked list\"), Stapelspeicher/Kellerspeicher (engl. \"stack\"), Warteschlange (engl. \"queue\"), Vorrangswarteschlange/Prioritätswarteschlange (engl. \"priority queue\"), Graph, Baum (engl. \"tree\"), Heap, Treap, Hashtabelle (engl. \"hash table\", \"dictionary\" oder \"map\")."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Datenstruktur <code>Array</code>"
            },
            {
                "type": "text",
                "content": "Ein Array ist ein ein- oder mehrdimensionales statisches Feld, das Datenwerte vom gleichen Datentyp im Speicher ablegt. Über einen Arraynamen und einen Index kann eindeutig auf die Speicherzelle zugegriffen werden, die den Datenwert enthält."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ef931454ec54c25305a5080"
            },
            {
                "type": "text",
                "content": "In Java werden Arrays als Objekte behandelt. Die Deklaration ist, abgesehen von den rechteckigen Klammern, identisch der Deklaration von Variablen primitiven Datentyps. Mit dem Schlüsselwort <code>new</code> wird das Objekt (hier das Array) erzeugt. Es wird Speicherplatz entsprechend der Arraylänge reserviert. Die Datenwerte werden hintereinander im Speicher abgelegt, so dass auf einzelne Array-elemente schnell zugegriffen werden kann. Ein Array wird, anders als eine Variable, zur Laufzeit erzeugt, da zur Compilerzeit die Größe des Arrays nicht feststeht. Das Beispiel zeigt die Deklaration und Initialisierung eines eindimensionalen Integer-Arrays mit vier Elementen in Java"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ef9314d4ec54c25305a5082"
            },
            {
                "type": "code",
                "language": "java",
                "content": "int[] a = new int[4];\na[0] = 6;\na[1] = 0;\na[2] = 9;\na[3] = 1;"
            },
            {
                "type": "text",
                "content": "oder kurz als Initialisierungsliste"
            },
            {
                "type": "code",
                "language": "java",
                "content": "int[] feld;\nfeld = new int[] { 6, 0, 9, 1 };\n// oder\nint[] a = { 6, 0, 9, 1 };"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Die Größe eines Arrays"
            },
            {
                "type": "text",
                "content": "Die Größe (Länge) eines Array-Objekts wird durch Anzahl der aufnehmbaren Elemente bestimmt und in der Objektvariable <code>length</code> gespeichert. Das Attribut ist frei zugänglich (<code>public</code>), schreibgeschützt (<code>final</code>) und vom Typ <code>int</code>, dessen Wert immer positiv oder 0 ist."
            },
            {
                "type": "text",
                "content": "Im Zusammenspiel mit Schleifen wird der Vorteil von Arrays gegenüber Variablen schnell sichtbar. Das Beispiel zeigt die Lösung des Minimum-Problems von oben mit Hilfe von Arrays."
            },
            {
                "type": "code",
                "language": "java",
                "content": "int[] wert = { 6, 0, 9, 1, ..., 15 };\nint minimum = wert[0];\nfor (int i = 0; i < wert.length; i++) {\n   if (minimum > wert[i]) minimum = wert[i];\n}\n\nSystem.out.println('Das Minimum ist: ' + minimum);"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Mehrdimensionale Arrays"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ef9316d4ec54c25305a5084"
            },
            {
                "type": "text",
                "content": "Ein mehrdimensionales Array wird als geschachteltes Array (ein Array aus Arrays) gespeichert ..."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ef931754ec54c25305a5086"
            },
            {
                "type": "code",
                "language": "java",
                "content": "int[][] a = new int[2][3];\na[0][0] = 1;\na[0][1] = 2;\na[0][2] = 3;\na[1][0] = 4;\na[1][1] = 5;\na[1][2] = 6;\nSystem.out.println('' + a[0][0] + a[0][1] + a[0][2]);\nSystem.out.println('' + a[1][0] + a[1][1] + a[1][2]);\n\n// Ausgabe: 123 456"
            },
            {
                "type": "text",
                "content": " ... Dadurch ist es möglich, nicht-\"rechteckige\" Arrays zu erzeugen. Das folgende Beispiel deklariert und initialisiert ein zweidimensionales dreieckiges Array."
            },
            {
                "type": "code",
                "language": "java",
                "content": "int[][] a = { {0}, {1,2}, {3,4,5}, {6,7,8,9} };\nfor (int i = 0; i < a.length; ++i) {\n   for (int j = 0; j < a[i].length; ++j) {\n      System.out.println(a[i][j]);\n   }\n\n   System.out.println();\n}\n\n// Ausgabe: 0 12 345 6789"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Aliasing"
            },
            {
                "type": "text",
                "content": "Eine Zuweisung mit einem Referenztyp erzeugt eine Referenzkopie auf das gleiche Objekt! Dieser Effekt wird als Aliasing (dts. \"Überlappung/Überlagerung\") bezeichnet. Es wird nur die Referenz kopiert, nicht der Wert!"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ef931814ec54c25305a5088"
            },
            {
                "type": "text",
                "content": "Achtung: Vergleiche und Zuweisungen mit Referenzvariablen verhalten sich anders als mit Variablen! Vorsicht beim Kopieren und Vergleichen von Arrays!"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ef9318f4ec54c25305a508a"
            },
            {
                "type": "code",
                "language": "java",
                "content": "int[] a = { 1, 2, 3, 4 };\nint[] b = a;\na[0] = 999;\nSystem.out.println(b[0]);\n\n// Ausgabe: 999"
            },
            {
                "type": "text",
                "content": "Das Beispiel zeigt, dass nur die Referenz und nicht das Array übergeben worden ist. Der gespeicherte Wert 999 in <code>a[0]</code> ist der gleiche Wert wie in b[0], denn es handelt sich um ein und dasselbe Array. Ein ähnlicher Effekt ist auch beim Vergleich von zwei Arrays zu beobachten (siehe Beispiel unten)."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ef9319d4ec54c25305a508c"
            },
            {
                "type": "code",
                "language": "java",
                "content": "int[] a = { 1, 2, 3, 4 };\nint[] b = { 1, 2, 3, 4 };\nSystem.out.println(a === b);\n\n// Ausgabe: false"
            }
        ]
    },
    {
        "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/statische_methoden",
        "topic": "Entwickeln und Bereitstellen von Anwendungssystemen",
        "subject": "lf-6",
        "lessonDate": "2020-02-11",
        "lastUpdate": "2020-09-03",
        "schoolWeek": "8",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "text",
                "content": "Mit dem Konstrukt der statischen Methoden (Klassenmethoden) werden in Java Funktionen implementiert. In der prozeduralen Programmmierwelt entspricht dies der Unterprogrammtechnik."
            },
            {
                "type": "text",
                "content": "Die Mathematik beschreibt eine Funktion als Abbildung, die jedem Element des Definitionsbereichs (Menge X) genau ein Element des Wertebereichs (Menge Y) zuordnet. So bildet die Sinusfunktion 𝑓(x) = sin(x) die Werte -π, 0, π, 2π auf den Wert 0, den Wert -1/2π auf den Wert -1 und den Wert 1/2π auf den Wert 1 ab."
            },
            {
                "type": "hint",
                "content": "Mit statischen Methoden lässt sich das Programmparadigma \"divide et impera\" (lateinisch für teile und hersche, engl. \"divide and conquer\") umsetzen. Komplexe Aufgaben werden in weniger komplexe Teilaufgaben zerlegt, womit sich das Debuggen, Warten und Wiederverwenden von Codes vereinfacht."
            },
            {
                "type": "text",
                "content": "Das Verhalten statischer Methoden ist den mathematischen Funktionen ähnlich. Ein oder mehrere Eingabewerte werden von der Methode zu einem Ergebnis verarbeitet, das bei Bedarf ausgegeben wird. Mit statischen Methoden können nicht nur mathematische Funktionen implementiert werden. Bereits verwendetete Beispiele sind die <code>main()</code>-Methode, mit der jedes Java-Programm gestartet wird, sowie die Methode zur Bildschirmausgabe <code>System.out.println()</code>."
            },
            {
                "type": "text",
                "content": "Der gesamte Code einer Datei wird als Modul bezeichnet. Da in Java jede Klasse in einer eigenständigen Datei steht und mit statischen Methoden auf andere Klassen (Dateien) zugegriffen werden kann, eignet sich dieses Konzept besonders gut, um Programme im Stil der modularen Programmierung zu erstellen."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Statische Methoden definieren"
            },
            {
                "type": "text",
                "content": "Der primäre Zweck von statischen Methoden ist die Implementierung von Funktionen. Liegen Methoden und Methodenaufruf in unterschiedlichen Klassen, wird die Methode mit <code>Klasse.Methode()</code> aufgerufen (Listing 4, Zeile 12: <code>AusgabeArray.ausgabe(a)</code>)."
            },
            {
                "type": "text",
                "content": "Der Klassenname muss immer groß geschrieben werden. So ist erkennbar, dass es sich um eine Klasse mit einer statischen Methode handelt und nicht um einen Objektnamen (dazu später mehr). Liegt die Methode in der gleichen Klasse wie der Methodenaufruf, kann der Klassenname weggelassen werden (Listing 4, Zeile 13: <code>tausch(a,1,2)</code>)."
            },
            {
                "type": "text",
                "content": "Namenskonvention: Bezeichner von Methoden (Name der Methode) beginnen immer mit einem Kleinbuchstaben, jedes weitere Wort mit einem Großbuchstaben (lowerCamelCase). Statische Methoden bestehen mindestens aus dem Modifizierer <code>static</code>, einem Rückgabetyp, einer Signatur gefolgt vom Methodenrumpf, der durch geschweifte Klammern eingegrenzt wird."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ef94b7b4ec54c25305a508e"
            },
            {
                "type": "text",
                "content": "Statische Methoden können auch mehrere Argumente übernehmen. Diese müssen nicht zwingend vom gleichen Typ sein. Der Methodenrumpf definiert, was die Methode tun soll."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Rückgabewerte"
            },
            {
                "type": "text",
                "content": "Soll eine Methode einen Wert an den Methodenaufruf zurückliefern, muss im Methodenrumpf eine <code>return</code>-Anweisung mit dem zurückliefernden Wert (Listing 4, Zeile 39) und im Methodenkopf der Rückgabetyp dieses Wertes (Listing 4, Zeile 32) stehen. Soll die Methode keinen Wert an den Methodenaufruf zurückliefern, gibt es im Methodenrumpf keine <code>return</code>-Anweisung. Im Methodenkopf steht statt des Rückgabetyps das Schlüsselwort <code>void</code> (Listing 4, Zeile 26)."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Gültigkeitsbereich von Variablen - Scope"
            },
            {
                "type": "text",
                "content": "<strong>Klassenvariablen (global)</strong>: gelten innerhalb der gesamtem Klasse. Sie werden mit <code>static Typ Variable;</code> deklariert (zB <code>static int c = 50;</code> siehe Listing 4, Zeile 2)."
            },
            {
                "type": "text",
                "content": "<strong>Lokale Variablen</strong>: Variablen gelten nur innerhalb des Blocks, in dem sie deklariert worden sind. Dieser Block kann eine Methode aber auch eine Schleife sein (siehe zB Listing 4, Zeile 7 und Zeile 20)."
            },
            {
                "type": "hint",
                "content": "Besitzen Klassenvariable und lokale Variable den gleichen Bezeichner, ist innerhalb der Methode nur die lokale Variable sichtbar und zugreifbar (Listing 4, Zeile 2, 7 und 20)."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Methoden mit Parameter"
            },
            {
                "type": "text",
                "content": "Methoden können auf zwei Arten Parameter übergeben werden."
            },
            {
                "type": "text",
                "content": "<strong>call-by-value (Wertaufruf)</strong>: Ein Wert wird beim Methodenaufruf übergeben (zB bei primitiven Datentypen). Nimmt eine Methode Änderungen an den Argumenten vor, sind diese im methodenaufrufenden Programm nicht sichtbar. Bei Call-by-value-Methoden-aufrufen wird also eine Kopie vom Wert des Parameters und nicht der Wert selbst als Parameter übergeben."
            },
            {
                "type": "text",
                "content": "<strong>call-by-reference (Referenzaufruf)</strong>: Eine Referenz wird beim Methodenaufruf übergeben (zB bei der Übergabe von Arrays). Nimmt eine Methode Änderungen an den Argumenten vor, sind diese im methodenaufrufenden Programm sichtbar. Ein Rückgabewert ist oft nicht notwendig."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Modifizierer-Attribute"
            },
            {
                "type": "text",
                "content": "Java stellt verschiedene Modifizierer zur Verfügung. Der Zugriffsmodifizierer legt die Sichtbarkeit der Methode fest. Die folgenden Arten gibt es:"
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "header",
                        "columns": [
                            { "align": "middle", "content": "Zeichen" },
                            { "align": "middle", "content": "Syntax" },
                            { "align": "middle", "content": "Bedeutung" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "+" },
                            { "align": "left", "content": "<code>public</code>" },
                            { "align": "left", "content": "öffentliche Elemente (unbeschränkt sichtbar)" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "#" },
                            { "align": "left", "content": "<code>protected</code>" },
                            { "align": "left", "content": "geschützte Elemente (nur in der eigenen Klasse sichtbar)" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "~" },
                            { "align": "left", "content": "<code>package</code>" },
                            { "align": "left", "content": "geschützte Elemente innerhalb des Pakets" }
                        ]
                    }
                ]
            },
            {
                "type": "text",
                "content": "Da es zu diesem Zeitpunkt sinnvoll ist, alle Methoden sichtbar zu machen, d. h. allen anderen Programmen zur Verfügung zu stellen, sollten statische Methoden mit dem Modifizierer <code>public</code> deklariert werden."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Überladen von Methoden"
            },
            {
                "type": "text",
                "content": "Statische Methoden werden nicht am Namen sondern anhand ihrer Signatur identifiziert. Dadurch ist es möglich, für verschiedene Methoden, die genügend Gemeinsamkeiten aufweisen, den gleichen Namen zu vergeben. Dies ist zum Beispiel sinnvoll, wenn Methoden die gleichen Operationen auf unterschiedliche Parameter durchführen (Listing 1 und 2). Statische Methoden mit gleichem Namen und unterschiedlichen Parametern werden als überladen (engl. \"overloading\") bezeichnet."
            },
            {
                "type": "code",
                "language": "java",
                "content": "// Listing 1: Unterschiedliche Argumenttypen\npublic static int max(int a, int b) { ... }\npublic static int max(double a, double b) { ... }\n\n// Listing 2: Unterschiedliche Anzahl an Argumentvariablen\npublic static String copyValueOf(char[] data) { ... }\npublic static String copyValueOf(char[] data, int offset, int count) { ... }"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Variable Argument-Anzahl"
            },
            {
                "type": "text",
                "content": "Die Methoden im Listing 1 sind auf zwei Argumente festgelegt. Folgen dem letzten Argumenttyp statt einer Argumentvariable drei Punkte (ohne Leerzeichen), so ist die Anzahl an Argumenten von diesem Argumenttyp beliebig. Um einen eindeutigen Methodenaufruf zu gewährleisten, muss das variable Argument (<code>varargs</code>, kurz für variable length argument lists) immer an letzter Stelle in der Parameterliste stehen."
            },
            {
                "type": "text",
                "content": "Das variable Argument wird intern als Array übergeben und in der Methode auch genauso angesprochen. Listing 3 zeigt die variable Argumentaufnahme mit mindestens zwei Argumenten für die Methode max(). Eine vollständige Methode wird im Listing 4, Zeile 20 gezeigt."
            },
            {
                "type": "code",
                "language": "java",
                "content": "// Listing 3: Methode mit variabler Argument-Anzahl\npublic static int max(int a, int... werte) { ... }\n\n// Listing 4: Methodenaufruf\npublic class JavaApplication1 {\n   static int c = 50; // eine völlig überflüssige globale Variable\n\n   public static void main(String[] args) {\n      int[] a = { 3, 2, 7, 5, 1, 4, 6 };\n      double[] b = { 3.3, 2.2, 7.7, 5.5, 1.1, 4.4, 6.6 };\n      int c = 42;\n\n      int summe = sume(c,1,c,2); // summe = 87\n      System.out.println('c ist immer noch ' + c + '.'); // c = 42\n      System.out.println('Die Summe ist aber ' + summe + ',';\n      AusgabeArray.ausgabe(a); // Methodenaufruf aus anderer Klasse\n      tausch(a, 1, 2); // Methodenaufruf\n      AusgabeArray.ausgabe(a);\n      System.out.println('Das höchstwertige Element im Array ist ' + max(a));\n      AusgabeArray.ausgabe(b);\n   }\n\n   public static int summe(int c, int... array) {\n      for (int i = 0; i < array.length; i++) {\n         c = c + array[i];\n      }\n      return c; // c = 87\n   }\n\n   public static void tausch(int[] a, int i, int j) {\n      int temp = a[i];\n      a[i] = a[j];\n      a[j] = temp;\n   }\n\n   public static int max(int[] a) {\n      int max = a[0];\n      for (int i = 1; i < a.length; i++) {\n         if (a[i] > max) {\n            max = a[i];\n         }\n      }\n      return max;\n   }\n}\n\n// Listing 5: Überladung der Methode ausgabe()\npublic class AusgabeArray {\n   public static void ausgabe(int array[]) {\n      for (int i = 0; i < array.length; i++) {\n         System.out.print(array[i] + ' ');\n      }\n      System.out.print(\"\\n\");\n   }\n\n   public static void ausgabe(double array[]) {\n      for (int i = 0; i < array.length; i++) {\n         System.out.print(array[i] + \" \");\n      }\n      System.out.print(\"\\n\");\n   }\n}"
            }
        ]
    },
    {
        "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/eulersche_phi_funktion",
        "topic": "Entwickeln und Bereitstellen von Anwendungssystemen",
        "subject": "lf-6",
        "lessonDate": "2020-03-02",
        "lastUpdate": "2020-09-03",
        "schoolWeek": "9",
        "elements": [
            {
                "type": "text",
                "content": "Die eulersche Phi-Funktion (φ) ist eine zahlentheoretische Funktion. Sie ordnet jeder natürlichen Zahl n die Anzahl der natürlichen Zahlen a von 1 bis n zu, die zu n teilerfremd sind, für die also ggT(a,n) = 1 ist."
            },
            {
                "type": "hint",
                "content": "Wenn zwei zahlen nur den gemeinsamen Teiler 1 besitzen, so sind sie teilerfremd."
            },
            {
                "type": "text",
                "content": "Beispiele: <br/> → Die Zahl 6 ist zu zwei Zahlen zwischen 1 und 6 teilerfremd (1 und 5), also ist φ(6) = 2 <br/> → Die Zahl 13 ist als Primzahl zu den zwölf Zahlen von 1 bis 12 teilerfremd, also ist φ(13) = 12 <br/> → Die ersten 20 Werte der φ-Fuktion lauten"
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "n" },
                            { "align": "middle", "content": "1" },
                            { "align": "middle", "content": "2" },
                            { "align": "middle", "content": "3" },
                            { "align": "middle", "content": "4" },
                            { "align": "middle", "content": "5" },
                            { "align": "middle", "content": "6" },
                            { "align": "middle", "content": "7" },
                            { "align": "middle", "content": "8" },
                            { "align": "middle", "content": "9" },
                            { "align": "middle", "content": "10" },
                            { "align": "middle", "content": "11" },
                            { "align": "middle", "content": "12" },
                            { "align": "middle", "content": "13" },
                            { "align": "middle", "content": "14" },
                            { "align": "middle", "content": "15" },
                            { "align": "middle", "content": "16" },
                            { "align": "middle", "content": "17" },
                            { "align": "middle", "content": "18" },
                            { "align": "middle", "content": "19" },
                            { "align": "middle", "content": "20" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "f(n)" },
                            { "align": "middle", "content": "1" },
                            { "align": "middle", "content": "1" },
                            { "align": "middle", "content": "2" },
                            { "align": "middle", "content": "2" },
                            { "align": "middle", "content": "4" },
                            { "align": "middle", "content": "2" },
                            { "align": "middle", "content": "6" },
                            { "align": "middle", "content": "4" },
                            { "align": "middle", "content": "6" },
                            { "align": "middle", "content": "4" },
                            { "align": "middle", "content": "10" },
                            { "align": "middle", "content": "4" },
                            { "align": "middle", "content": "12" },
                            { "align": "middle", "content": "6" },
                            { "align": "middle", "content": "8" },
                            { "align": "middle", "content": "8" },
                            { "align": "middle", "content": "16" },
                            { "align": "middle", "content": "6" },
                            { "align": "middle", "content": "18" },
                            { "align": "middle", "content": "8" }
                        ]
                    }
                ]
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Funktionsaufruf"
            },
            {
                "type": "code",
                "language": "java",
                "content": "public class Main { \n    void main(String[] args) { \n        System.out.println(phi(11)); \n    } \n}"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Funktion: Größter gemeinsamer Teiler"
            },
            {
                "type": "code",
                "language": "java",
                "content": "public static int ggt(int x, int y) {\n    while ( y != 0 ) {\n        int z = x % y;\n        x = y;\n        y = z;\n    }\n    return x;\n }"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Funktion: phi Funktion"
            },
            {
                "type": "code",
                "language": "java",
                "content": "public class Main { \n    void main(String[] args) { \n        System.out.println(phi(11)); \n    } \n}"
            }
        ]
    },
    {
        "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/aktienkurs_berechnung_php",
        "topic": "Entwickeln und Bereitstellen von Anwendungssystemen",
        "subject": "lf-6",
        "lessonDate": "2020-03-24",
        "lastUpdate": "2020-10-31",
        "schoolWeek": "10",
        "elements": [
            {
                "type": "title",
                "content": "Lösungsansatz"
            },
            {
                "type": "text",
                "content": "Ermitteln Sie für den gegebenen Zeitraum Ankaufs- und Verkaufstage der Aktie, um den maximalen Gewinn zu erlösen."
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Tag" },
                            { "align": "middle", "content": "1" },
                            { "align": "middle", "content": "2" },
                            { "align": "middle", "content": "3" },
                            { "align": "middle", "content": "4" },
                            { "align": "middle", "content": "5" },
                            { "align": "middle", "content": "6" },
                            { "align": "middle", "content": "7" },
                            { "align": "middle", "content": "8" },
                            { "align": "middle", "content": "9" },
                            { "align": "middle", "content": "10" },
                            { "align": "middle", "content": "11" },
                            { "align": "middle", "content": "12" },
                            { "align": "middle", "content": "13" },
                            { "align": "middle", "content": "14" },
                            { "align": "middle", "content": "15" },
                            { "align": "middle", "content": "16" },
                            { "align": "middle", "content": "17" },
                            { "align": "middle", "content": "18" },
                            { "align": "middle", "content": "19" },
                            { "align": "middle", "content": "20" },
                            { "align": "middle", "content": "21" },
                            { "align": "middle", "content": "22" },
                            { "align": "middle", "content": "23" },
                            { "align": "middle", "content": "24" },
                            { "align": "middle", "content": "25" },
                            { "align": "middle", "content": "26" },
                            { "align": "middle", "content": "27" },
                            { "align": "middle", "content": "28" },
                            { "align": "middle", "content": "29" },
                            { "align": "middle", "content": "30" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Kurs" },
                            { "align": "middle", "content": "+4" },
                            { "align": "middle", "content": "+2" },
                            { "align": "middle", "content": "-1" },
                            { "align": "middle", "content": "-3" },
                            { "align": "middle", "content": "+4" },
                            { "align": "middle", "content": "-1" },
                            { "align": "middle", "content": "+7" },
                            { "align": "middle", "content": "-2" },
                            { "align": "middle", "content": "-2" },
                            { "align": "middle", "content": "+3" },
                            { "align": "middle", "content": "+1" },
                            { "align": "middle", "content": "-8" },
                            { "align": "middle", "content": "+2" },
                            { "align": "middle", "content": "-1" },
                            { "align": "middle", "content": "+4" },
                            { "align": "middle", "content": "-5" },
                            { "align": "middle", "content": "+2" },
                            { "align": "middle", "content": "+1" },
                            { "align": "middle", "content": "+3" },
                            { "align": "middle", "content": "+2" },
                            { "align": "middle", "content": "-3" },
                            { "align": "middle", "content": "+5" },
                            { "align": "middle", "content": "-7" },
                            { "align": "middle", "content": "+2" },
                            { "align": "middle", "content": "-3" },
                            { "align": "middle", "content": "+2" },
                            { "align": "middle", "content": "-1" },
                            { "align": "middle", "content": "-1" },
                            { "align": "middle", "content": "+2" },
                            { "align": "middle", "content": "+1" }
                        ]
                    }
                ]
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Aufgabe 1"
            },
            {
                "type": "text",
                "content": "→ Entwickeln Sie einen Algorithmus, der das Problem <strong>iterativ</strong> löst. <br/> → Messen sie die Laufzeit des Algorithmus mit Hilfe der Methode <code>System.nanoTime()</code>."
            },
            {
                "type": "text",
                "content": "1. Erzeugen Sie alle Teilfolgen der obigen Folge. <br/> 2. Berechnen Sie zu jeder Teilfolge die Summe. <br/> 3. Geben Sie die größte Summe als Ergebnis aus."
            },
            {
                "type": "code",
                "language": "php",
                "content": "<?php\n\n$history = [4,2, -1, -3, 4, -1, 7, -2, -2, 3, 1, -8, 2, -1, 4, -5, 2, 1, 3, 2, -3, 5, -7, 2, -3, 2, -1, -1, 2, 1,];\n\nfunction getMaxDifference($differences) {\n   $max = 0;\n   $result = [];\n\n   for ($i = 0; $i < count($differences); $i++) {\n      if ($max < $differences[$i][$j] {\n\n         $max = $differences[$i][$j];\n         $result = [\n            'buy' => 'day ' . ($i + 1),\n            'sell' => 'day ' . ($j + 1)\n         ];\n      }\n   }\n   return $result;\n}\n\necho '<h1>Aufgabe 1</h1>';\n\n$differences = [];\n$startTime = microtime(true);\n\nfor ($i = 0; $i <count($history); $i++) {\n   $current = 0;\n\n   for ($j = $i; $j <count($history); $j++) {\n      $current += $history[$j];\n      $differences[$i][$j] = $current;\n   }\n}\n\necho (microtime(true) - $startTime) * 1000;\n\n/*\necho '<pre>';\nvar_dump($differences);\necho '</pre>';\n*/\n\necho '<pre>';\nvar_dump(getMaxDifference($differences));\necho '</pre>';\n\n?>"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Aufgabe 2"
            },
            {
                "type": "text",
                "content": "→ Implementieren Sie zum obigen Problem einen <strong>rekurisven</strong> Algorithmus, der nach dem Prinzip Divide and Conquer (Teile und Herrsche) arbeitet. <br/> → Messen Sie auch hier wieder die Laufzeit beider Algorithmen und vergleichen Sie die Werte."
            },
            {
                "type": "code",
                "language": "php",
                "content": "<?php\n\n$history = [4,2, -1, -3, 4, -1, 7, -2, -2, 3, 1, -8, 2, -1, 4, -5, 2, 1, 3, 2, -3, 5, -7, 2, -3, 2, -1, -1, 2, 1,];\n\n// Funktion aus Aufgabe 1\nfunction getMaxDifference($differences) {\n   $max = 0;\n   $result = [];\n\n   for ($i = 0; $i < count($differences); $i++) {\n      if ($max < $differences[$i][$j] {\n\n         $max = $differences[$i][$j];\n         $result = [\n            'buy' => 'day ' . ($i + 1),\n            'sell' => 'day ' . ($j + 1)\n         ];\n      }\n   }\n   return $result;\n}\n\necho '<h1>Aufgabe 2</h1>';\n\n$differences = [];\n$startTime = microtime(true);\n\nfillDifferencesRecursive($history, $differences);\n\necho (microtime(true) - $startTime) * 1000;\n\n/*\necho '<pre>';\nvar_dump($differences);\necho '</pre>';\n*/\n\nfunction fillDifferencesRecursive($history, &$differences, $currentDifference = 0, $currentStart = 0, $currentEnd = 0) {\n\n   if ($currentStart>= count($history)) {\n      return;\n   }\n\n   if ($currentEnd>= count($history)) {\n      fillDifferencesRecursive($history, $differences, 0, $currentStart + 1, $currentStart + 1);\n      return;\n   }\n\n   $currentDifference += $history[$currentEnd];\n   $differences[$currentStart][$currentEnd] = $currentDifference;\n\n   fillDifferencesRecursive($history, $differences, $currentDifference, $currentStart, $currentEnd + 1);\n}\n\necho '<pre>';\nvar_dump(getMaxDifference($differences));\necho '</pre>';\n\n?>"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Aufgabe 3"
            },
            {
                "type": "text",
                "content": "→ Schreiben Sie ein Programm, dass den maximalen Gewinnerlös (maximale Summe einer Teilfolge) effizienter löst. <br/> → Messen Sie die Laufzeit Ihres Algorithmus."
            },
            {
                "type": "code",
                "language": "php",
                "content": "<?php\n\n$history = [4,2, -1, -3, 4, -1, 7, -2, -2, 3, 1, -8, 2, -1, 4, -5, 2, 1, 3, 2, -3, 5, -7, 2, -3, 2, -1, -1, 2, 1,];\n\necho '<h1>Aufgabe 3</h1>';\n\n$startTime = microtime(true);\n$maximum = 0;\n$maxRight = 0;\n\nfor ($i = 0; $i <count($history); $i++) {\n\n   $tmpMaxRight = $maxRight + $history[$i];\n\n   if ($tmpMaxRight> 0) {\n      $maxRight = $tmpMaxRight;\n   }\n\n   if ($maxRight> $maximum) {\n      $maximum = $maxRight;\n   }\n}\n\necho (microtime(true) - $startTime) * 1000;\n\necho '<br/>';\necho $maximum;\n\n?>"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "list",
                "content": "Quellen:",
                "list": [
                    "<a href='https://bio.informatik.uni-jena.de/wp/wp-content/uploads/2019/11/MaxPartSums.pdf'>https://bio.informatik.uni-jena.de/wp/wp-content/uploads/2019/11/MaxPartSums.pdf</a>"
                ]
            }
        ]
    },
    {
        "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/aktienkurs_berechnung_javascript",
        "topic": "Entwickeln und Bereitstellen von Anwendungssystemen",
        "subject": "lf-6",
        "lessonDate": "2020-03-24",
        "lastUpdate": "2020-05-28",
        "schoolWeek": "10",
        "elements": [
            {
                "type": "title",
                "content": "Lösungsansatz"
            },
            {
                "type": "text",
                "content": "Ermitteln Sie für den gegebenen Zeitraum Ankaufs- und Verkaufstage der Aktie, um den maximalen Gewinn zu erlösen."
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Tag" },
                            { "align": "middle", "content": "1" },
                            { "align": "middle", "content": "2" },
                            { "align": "middle", "content": "3" },
                            { "align": "middle", "content": "4" },
                            { "align": "middle", "content": "5" },
                            { "align": "middle", "content": "6" },
                            { "align": "middle", "content": "7" },
                            { "align": "middle", "content": "8" },
                            { "align": "middle", "content": "9" },
                            { "align": "middle", "content": "10" },
                            { "align": "middle", "content": "11" },
                            { "align": "middle", "content": "12" },
                            { "align": "middle", "content": "13" },
                            { "align": "middle", "content": "14" },
                            { "align": "middle", "content": "15" },
                            { "align": "middle", "content": "16" },
                            { "align": "middle", "content": "17" },
                            { "align": "middle", "content": "18" },
                            { "align": "middle", "content": "19" },
                            { "align": "middle", "content": "20" },
                            { "align": "middle", "content": "21" },
                            { "align": "middle", "content": "22" },
                            { "align": "middle", "content": "23" },
                            { "align": "middle", "content": "24" },
                            { "align": "middle", "content": "25" },
                            { "align": "middle", "content": "26" },
                            { "align": "middle", "content": "27" },
                            { "align": "middle", "content": "28" },
                            { "align": "middle", "content": "29" },
                            { "align": "middle", "content": "30" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Kurs" },
                            { "align": "middle", "content": "+4" },
                            { "align": "middle", "content": "+2" },
                            { "align": "middle", "content": "-1" },
                            { "align": "middle", "content": "-3" },
                            { "align": "middle", "content": "+4" },
                            { "align": "middle", "content": "-1" },
                            { "align": "middle", "content": "+7" },
                            { "align": "middle", "content": "-2" },
                            { "align": "middle", "content": "-2" },
                            { "align": "middle", "content": "+3" },
                            { "align": "middle", "content": "+1" },
                            { "align": "middle", "content": "-8" },
                            { "align": "middle", "content": "+2" },
                            { "align": "middle", "content": "-1" },
                            { "align": "middle", "content": "+4" },
                            { "align": "middle", "content": "-5" },
                            { "align": "middle", "content": "+2" },
                            { "align": "middle", "content": "+1" },
                            { "align": "middle", "content": "+3" },
                            { "align": "middle", "content": "+2" },
                            { "align": "middle", "content": "-3" },
                            { "align": "middle", "content": "+5" },
                            { "align": "middle", "content": "-7" },
                            { "align": "middle", "content": "+2" },
                            { "align": "middle", "content": "-3" },
                            { "align": "middle", "content": "+2" },
                            { "align": "middle", "content": "-1" },
                            { "align": "middle", "content": "-1" },
                            { "align": "middle", "content": "+2" },
                            { "align": "middle", "content": "+1" }
                        ]
                    }
                ]
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Aufgabe 1"
            },
            {
                "type": "text",
                "content": "→ Entwickeln Sie einen Algorithmus, der das Problem <strong>iterativ</strong> löst. <br/> → Messen sie die Laufzeit des Algorithmus mit Hilfe der Methode <code>System.nanoTime()</code>."
            },
            {
                "type": "text",
                "content": "1. Erzeugen Sie alle Teilfolgen der obigen Folge. <br/> 2. Berechnen Sie zu jeder Teilfolge die Summe. <br/> 3. Geben Sie die größte Summe als Ergebnis aus."
            },
            {
                "type": "code",
                "language": "javascript",
                "content": "let start = new Date();\nlet history = [\n   4, 2, -1, -3, 4, -1, 7, -2, -2, 3,\n   1, -8, 2, -1, 4, -5, 2, 1, 3, 2,\n   -3, 5, -7, 2, -3, 2, -1, -1, 2, 1\n];\n\nfunction calculate() {\n   let buyInDays = [], buyOutDays = [], profits = [];\n   let recommendBuyInDay, profit;\n   let recommendBuyOutDay = 1;\n\n   for (let buyInDay = 0; buyInDay < history.length; buyInDay++) {\n      profit = 0;\n\n      for (let buyOutDay = buyInDay + 1; buyOutDay < history.length; buyOutDay++) {\n         profit = profit + history[buyOutDay];\n         profits.push(profit);\n         buyInDays.push((buyInDay + 1));\n         buyOutDays.push((buyOutDay + 1));\n      }\n   }\n\n   let highestProfit = profits[0];\n   for (let i = 0; i < profits.length; i++) {\n      if (profits[i] > highestProfit) {\n         highestProfit = profits[i];\n         recommendBuyInDay = buyInDays[i];\n         recommendBuyOutDay = buyOutDays[i];\n      }\n   }\n\n   console.log(\"Recommendend Buy-In Day: \" + recommendBuyInDay + \"; Recommended Buy-Out Day: \" + recommendBuyOutDay + \"; Profit: \" + highestProfit);\n}\n\ncalculate();\nconsole.log((new Date() - start) / 1000 + \" seconds runtime\");"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Aufgabe 2"
            },
            {
                "type": "text",
                "content": "→ Implementieren Sie zum obigen Problem einen <strong>rekurisven</strong> Algorithmus, der nach dem Prinzip Divide and Conquer (Teile und Herrsche) arbeitet. <br/> → Messen Sie auch hier wieder die Laufzeit beider Algorithmen und vergleichen Sie die Werte."
            },
            {
                "type": "code",
                "language": "javascript",
                "content": "let start = new Date();\nlet history = [\n   4, 2, -1, -3, 4, -1, 7, -2, -2, 3,\n   1, -8, 2, -1, 4, -5, 2, 1, 3, 2,\n   -3, 5, -7, 2, -3, 2, -1, -1, 2, 1\n];\n\nfunction calculateAllOptions(start, end) {\n   let profit = 0;\n   for (let i = start, i < end; i++) {\n      profit = profit + history[i];\n   }\n   return profit;\n}\n\nfunction calculate(start, end) {\n   const profit1 = calculateAllOptions(start, end) {\n      \n\n      if (start >= end - 1) {\n         return [profit1, start, end];\n      }\n\n      const result2 = calculate(start + 1, end);\n      const result3 = calculate(start, end - 1);\n\n      const profit2 = result2[0];\n      const profit3 = result3[0];\n\n      if (profit1 > profit2) {\n         if (profit1 > profit3) {\n            return [profit1, start, end];\n         }\n         return result3;\n      }\n\n      if (profit2 > profit3) return result2;\n\n      return result3;\n   }   \n\n   console.log(calculate(1, 30));\n   console.log((new Date() - startDate) / 1000 + \" seconds runtime\");\n}"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Aufgabe 3"
            },
            {
                "type": "text",
                "content": "→ Schreiben Sie ein Programm, dass den maximalen Gewinnerlös (maximale Summe einer Teilfolge) effizienter löst. <br/> → Messen Sie die Laufzeit Ihres Algorithmus."
            },
            {
                "type": "code",
                "language": "javascript",
                "content": "let start = new Date();\nlet history = [\n   4, 2, -1, -3, 4, -1, 7, -2, -2, 3,\n   1, -8, 2, -1, 4, -5, 2, 1, 3, 2,\n   -3, 5, -7, 2, -3, 2, -1, -1, 2, 1\n];\nlet profit, recommendBuyInDay, recommendBuyOutDay, highestProfit = 0;\n\nfunction calculate() {\n   for (let buyInDay = 0; buyInDay <history.length; buyInDay++) {\n      profit = 0;\n\n      for (let buyOutDay = buyInDay + 1; buyOutDay < history.length; buyOutDay++) {\n         profit = profit + history[buyOutDay];\n\n         if (profit > highestProfit) {\n            highestProfit = profit;\n            recommendBuyInDay = buyInDay + 1;\n            recommendBuyOutDay = buyOutDay + 1;\n         }\n      }\n   }\n\n   console.log(\"Recommended Buy-In Day: \" + recommendBuyInDay + \"; Recommended Buy-Out Day: \" + recommendBuyOutDay + \"; Profit: \" + highestProfit);\n}\n\ncalculate();\nconsole.log((new Date() - start) / 1000 + \" seconds runtime\");"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "list",
                "content": "Quellen:",
                "list": [
                    "<a href='https://bio.informatik.uni-jena.de/wp/wp-content/uploads/2019/11/MaxPartSums.pdf'>https://bio.informatik.uni-jena.de/wp/wp-content/uploads/2019/11/MaxPartSums.pdf</a>"
                ]
            }
        ]
    },
    {
        "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/eigene_java_bibliothek_bauen_myarray",
        "topic": "Entwickeln und Bereitstellen von Anwendungssystemen",
        "subject": "lf-6",
        "lessonDate": "2020-06-10",
        "lastUpdate": "2020-10-16",
        "schoolWeek": "13",
        "elements": [
            {
                "type": "title",
                "content": "Aufgabe"
            },
            {
                "type": "text",
                "content": "Schreiben Sie eine Java-Bibliothek MyArray mit API (Java-Doc) für ein eindimensionales Array. Verwenden Sie keine fertigen Methoden. Da wo es sinnvoll ist, sollen Methoden überladen werden, d. h. für den Datentyp double, char, char und String gelten. Wenn möglich, sollen in die Methoden Sicherheitsfeatures eingebaut werden."
            },
            {
                "type": "hint",
                "content": "Beispiel: Für den Benutzer muss eine Fehlermeldung erscheinen, wenn ein Element an 10ter Stelle eines 8 elementigen Arrays eingefügt wird."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Beispieldaten"
            },
            {
                "type": "code",
                "language": "java",
                "content": "int[] intArray = new int[]{1, 3, 6, 2};\ndouble[] doubleArray = new double[]{1.246, 1.968, 1.312, 1.567, 1.634};\nchar[] charArray = new char[]{'a', 'b', 'd', 'k', 'c', 'f'};\nString[] stringArray = new String[]{\"Berlin\", \"Rio\", \"Canberra\", \"Buenos Aires\", \"Paris\", \"Prag\", \"Amsterdam\"};\n\n// Und für Aufgabe 15, 24 & 27 angepasste Arrays"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Die Java-Bibliothek soll folgende Funktionen bereitstellen"
            },
            {
                "type": "text",
                "content": "<span class='ddu-list-number'>1</span> Ausgabe der Länge (die Objektvariable length darf verwendet werden): <code>myLength()</code>"
            },
            {
                "type": "code",
                "language": "java",
                "content": "public static int myLength(int[] array) {\n   if (array.length == 0) throw new IllegalArgumentException();\n   return array.length;\n}\n\npublic static int myLength(double[] array) {\n   if (array.length == 0) throw new IllegalArgumentException();\n   return array.length;\n}\n\npublic static int myLength(char[] array) {\n   if (array.length == 0) throw new IllegalArgumentException();\n   return array.length;\n}\n\npublic static int myLength(String[] array) {\n   if (array.length == 0) throw new IllegalArgumentException();\n   return array.length;\n}\n\nSystem.out.println(\"Length of intArray: \" + MyArray.myLength(intArray));\n// ...\n\n// Length of intArray: 4\n// Length of doubleArray: 5\n// Length of charArray: 6\n// Length of stringArray: 7"
            },
            {
                "type": "text",
                "content": "<span class='ddu-list-number'>2</span> Ausgabe der Länge des längsten Elements: <code>maxElement()</code> <br/> Die overload functions müssen dem Typ entsprechend angepasst werden."
            },
            {
                "type": "code",
                "language": "java",
                "content": "public static int maxElement(int[] array) {\n   int index = 0, elementLength = 0;\n   if (array.length == 0) throw new IllegalArgumentException();\n   for (int i = 0; i < array.length; i++) {\n      if (array[i] > elementLength) {\n         index = i;\n         elementLength = array[i];\n      }\n   }\n   return array[index];\n}\n\n// ... overload functions for double, char & string"
            },
            {
                "type": "text",
                "content": "<span class='ddu-list-number'>3</span> Ausgabe des kürzesten Elements: <code>minElement()</code> <br/> Die overload functions müssen dem Typ entsprechend angepasst werden."
            },
            {
                "type": "code",
                "language": "java",
                "content": "public static int minElement(int[] array) {\n   int index = 0, elementLength = 0;\n   if (array.length == 0) throw new IllegalArgumentException();\n   for (int i = 0; i < array.length; i++) {\n      if (array[i] < elementLength) {\n         index = i;\n         elementLength = array[i];\n      }\n   }\n   return array[index];\n}\n\n// ... overload functions for double, char & string"
            },
            {
                "type": "text",
                "content": "<span class='ddu-list-number'>4</span> Ausgabe aller Elemente des Arrays: <code>printArray()</code> <br/> Die overload functions müssen dem Typ entsprechend angepasst werden."
            },
            {
                "type": "code",
                "language": "java",
                "content": "public static String printArray(int[] array) {\n   if (array.length == 0) throw new IllegalArgumentException();\n   return Arrays.toString(array);\n}\n\n// ... overload functions for double, char & string"
            },
            {
                "type": "text",
                "content": "<span class='ddu-list-number'>5</span> Konvertieren aller Elemente in Großbuchstaben: <code>uppercase()</code> <br/> Die overload functions müssen dem Typ entsprechend angepasst werden."
            },
            {
                "type": "code",
                "language": "java",
                "content": "public static String[] uppercase(String[] array) {\n   String[] convertedArray = new String[array.length];\n   if (array.length == 0) throw new IllegalArgumentException();\n   for (int i = 0; i < array.length; i++) {\n      convertedArray[i] = array[i].toUpperCase();\n   }\n   return convertedArray;\n}"
            },
            {
                "type": "text",
                "content": "<span class='ddu-list-number'>6</span> Konvertieren aller Elemente in Kleinbuchstaben: <code>lowercase()</code>"
            },
            {
                "type": "code",
                "language": "java",
                "content": "public static String[] lowercase(String[] array) {\n   String[] convertedArray = new String[array.length];\n   if (array.length == 0) throw new IllegalArgumentException();\n   for (int i = 0; i < array.length; i++) {\n      convertedArray[i] = array[i].toLowerCase();\n   }\n   return convertedArray;\n}"
            },
            {
                "type": "text",
                "content": "<span class='ddu-list-number'>7</span> Invertieren aller Elemente (Großbuchstaben in Kleinbuchstaben und umgekehrt): <code>inverted()</code>"
            },
            {
                "type": "code",
                "language": "java",
                "content": "public static String[] inverted(String[] array) {\n   String[] convertedArray = new String[array.length];\n   if (array.length == 0) throw new IllegalArgumentException();\n   for (int i = 0; i < array.length; i++) {\n      char[] chars = array[i].toCharArray();\n      for (int charIndex = 0; charIndex < chars.length; charIndex++) {\n         char c = chars[charIndex];\n         if (Character.isUpperCase(c)) {\n            chars[charIndex] = Character.toLowerCase(c);\n         } else if (Character.isLowerCase(c)) {\n            chars[charIndex] = Character.toUpperCase(c);\n         }\n      }\n      convertedArray[i] = new String(chars);\n   }\n   return convertedArray;\n}"
            },
            {
                "type": "text",
                "content": "<span class='ddu-list-number'>8</span> Aufsummieren aller Elemente im Array: <code>sum()</code>"
            },
            {
                "type": "code",
                "language": "java",
                "content": "public static int sum(int[] array) {\n   int sum = 0;\n   if (array.length == 0) throw new IllegalArgumentException();\n   for (int value : array) {\n      sum += value;\n   }\n   return sum;\n}\n\n// ... overload function for double"
            },
            {
                "type": "text",
                "content": "<span class='ddu-list-number'>9</span> Kaufmännisches ganzzahliges Runden aller Elemente im Array: <code>round()</code>"
            },
            {
                "type": "code",
                "language": "java",
                "content": "public static double[] round(double[] array) {\n   double[] convertedArray = new double[array.length];\n   if (array.length == 0) throw new IllegalArgumentException();\n   for (int i = 0; i < array.length; i++) {\n      convertedArray[i] = (double) Math.round(array[i] * 100) / 100;\n   }\n   return convertedArray;\n}"
            },
            {
                "type": "text",
                "content": "<span class='ddu-list-number'>10</span> Rücksetzen aller Elemente im Array auf den default-Wert: <code>initialAll()</code>"
            },
            {
                "type": "text",
                "content": "<span class='ddu-list-number'>11</span> Rücksetzen eines bestimmten Elements im Array auf den default-Wert (rücksetzen aller vorkommender Elemente von dem übergebenden Element): <code>initial()</code>"
            },
            {
                "type": "text",
                "content": "<span class='ddu-list-number'>12</span> Rücksetzen eines bestimmten Elements im Array auf den default-Wert (Übergabe des Arrays und der Position): <code>initial()</code>"
            },
            {
                "type": "text",
                "content": "<span class='ddu-list-number'>13</span> Suchen nach einem bestimmten Element im Array (true oder false zurückgeben): <code>search()</code> <br/> Die overload functions müssen dem Typ entsprechend angepasst werden."
            },
            {
                "type": "code",
                "language": "java",
                "content": "public static boolean search(int value, int[] array) {\n   if (array.length == 0) throw new IllegalArgumentException();\n   for (int item : array) {\n      if (item == value) return true;\n   }\n   return false;\n}\n\n// ... overload functions for double, char & string"
            },
            {
                "type": "text",
                "content": "<span class='ddu-list-number'>14</span> Suchen nach einem bestimmten Element im Array (Position zurückgeben): <code>searchPos()</code> <br/> Die overload functions müssen dem Typ entsprechend angepasst werden."
            },
            {
                "type": "code",
                "language": "java",
                "content": "public static int searchPos(int value, int[] array) {\n   if (array.length == 0) throw new IllegalArgumentException();\n   int index = -1;\n   for (int i = 0; i < array.length; i++) {\n      if (array[i] == value) index = i;\n   }\n   return index;\n}\n\n// ... overload functions for double, char & string"
            },
            {
                "type": "text",
                "content": "<span class='ddu-list-number'>15</span> Suchen nach einem bestimmten Element im Array und die Anzahl der Vorkommnisse zurückgegeben: <code>count()</code> <br/> Die overload functions müssen dem Typ entsprechend angepasst werden."
            },
            {
                "type": "code",
                "language": "java",
                "content": "public static int count(int value, int[] array) {\n   if (array.length == 0) throw new IllegalArgumentException();\n   int occurrences = 0;\n   for (int item : array) {\n      if (item == value) occurrences += 1;\n   }\n   return occurrences;\n}\n\n// ... overload functions for double, char & string"
            },
            {
                "type": "text",
                "content": "<span class='ddu-list-number'>16</span> Alle Elemente im Array auf- und absteigend sortieren (als Parameter sollen ASC und DESC übergeben werden): <code>sort()</code> <br/> Die overload functions müssen dem Typ entsprechend angepasst werden."
            },
            {
                "type": "code",
                "language": "java",
                "content": "enum sort { ASC, DESC }\npublic static Integer[] sort(sort direction, int[] array) {\n   Integer[] convertedArray = Arrays.stream(array).boxed().toArray(Integer[]::new);\n   if (array.length == 0) throw new IllegalArgumentException();\n   if (direction == sort.ASC) {\n      Arrays.sort(convertedArray);\n   } else if (direction == sort.DESC) {\n      Arrays.sort(convertedArray, Collections.reverseOrder());\n   }\n   return convertedArray;\n}\n\n// ... overload functions for double, char & String"
            },
            {
                "type": "text",
                "content": "<span class='ddu-list-number'>17</span> Ein bestimmtes Element im Array verändern (überschreiben, modifizieren): <code>modify()</code> <br/> Die overload functions müssen dem Typ entsprechend angepasst werden."
            },
            {
                "type": "code",
                "language": "java",
                "content": "public static int[] modify(int oldVal, int newVal, int[] array) {\n   int[] modifiedArray = array.clone();\n   boolean valueModified = false;\n   if (array.length == 0) throw new IllegalArgumentException(\"Array is empty\");\n   for (int i = 0; i < array.length; i++) {\n      if (modifiedArray[i] == oldVal) {\n         modifiedArray[i] = newVal;\n         valueModified = true;\n      }\n   }\n   if (!valueModified) throw new IllegalArgumentException(\"Value to modify not found\");\n   return modifiedArray;\n}\n\n// ... overload functions for double, char & string"
            },
            {
                "type": "text",
                "content": "<span class='ddu-list-number'>18</span> Ein Element an letzter Stelle im Array hinzufügen: <code>addLastElement()</code> <br/> Die overload functions müssen dem Typ entsprechend angepasst werden."
            },
            {
                "type": "code",
                "language": "java",
                "content": "public static int[] addLastElement(int element, int[] array) {\n   int[] modifiedArray = new int[array.length + 1];\n   if (array.length == 0) throw new IllegalArgumentException(\"Array is empty\");\n   for (int i = 0; i < array.length; i++) {\n      modifiedArray[i] = array[i];\n   }\n   modifiedArray[modifiedArray.length-1] = element;\n   return modifiedArray;\n}\n\n// ... overload functions for double, char & string"
            },
            {
                "type": "text",
                "content": "<span class='ddu-list-number'>19</span> Ein Element an beliebiger Stelle im Array hinzufügen: <code>addElement()</code> <br/> Die overload functions müssen dem Typ entsprechend angepasst werden."
            },
            {
                "type": "code",
                "language": "java",
                "content": "public static int[] addElement(int element, int[] array) {\n   int[] modifiedArray = new int[array.length + 1];\n   if (array.length == 0) throw new IllegalArgumentException(\"Array is empty\");\n   for (int i = 0; i < array.length; i++) {\n      modifiedArray[i+1] = array[i];\n   }\n   modifiedArray[0] = element;\n   return modifiedArray;\n}\n\n// ... overload functions for double, char & string"
            },
            {
                "type": "text",
                "content": "<span class='ddu-list-number'>20</span> Eine Kopie des Arrays erstellen (eine neue Referenz auf das selbe Array): <code>copy()</code>"
            },
            {
                "type": "text",
                "content": "<span class='ddu-list-number'>21</span> Eine “echte“ Kopie eines Arrays erstellen: <code>realCopy()</code> <br/> Die overload functions müssen dem Typ entsprechend angepasst werden."
            },
            {
                "type": "code",
                "language": "java",
                "content": "public static int[] realCopy(int[] array) {\n   return array.clone();\n}\n\n// ... overload functions for double, char & string"
            },
            {
                "type": "text",
                "content": "<span class='ddu-list-number'>22</span> Die Reihenfolge der Elemente in einem Array umdrehen: <code>reverse()</code> <br/> Die overload functions müssen dem Typ entsprechend angepasst werden."
            },
            {
                "type": "code",
                "language": "java",
                "content": "public static int[] reverse(int[] array) {\n   int[] modifiedArray = array.clone();\n   int index = array.length;\n   for (int value : array) {\n      modifiedArray[index - 1] = value;\n      index -= 1;\n   }\n   return modifiedArray;\n}\n\n// ... overload functions for double, char & string"
            },
            {
                "type": "text",
                "content": "<span class='ddu-list-number'>23</span> Das am häufigsten vorkommende (auftretende) Element im Array ausgeben: <code>mostFrequentlyElement()</code> <br/> Die overload functions müssen dem Typ entsprechend angepasst werden."
            },
            {
                "type": "code",
                "language": "java",
                "content": "public static int mostFrequentlyElement(int[] array) {\n   int count = 0, tempCount;\n   int tempElement;\n   int popular = -1;\n   for (int value : array) {\n      tempElement = value;\n      tempCount = 1;\n      for (int index = 1; index < array.length; index++) {\n         if (tempElement == array[index]) tempCount++;\n      }\n      if (tempCount > count) {\n         popular = tempElement;\n         count = tempCount;\n      }\n   }\n   return popular;\n}\n\n// ... overload functions for double, char & string"
            },
            {
                "type": "text",
                "content": "<span class='ddu-list-number'>24</span> Das am wenigsten vorkommende (auftretende) Element im Array ausgeben: <code>leastFrequentlyElement()</code> <br/> Die overload functions müssen dem Typ entsprechend angepasst werden."
            },
            {
                "type": "code",
                "language": "java",
                "content": "public static int leastFrequentlyElement(int[] array) {\n   Arrays.sort(array);\n   int minCount = array.length + 1, tempCount = 1;\n   int res = -1;\n\n   for (int i = 1; i < array.length; i++) {\n      if (array[i] == array[i - 1]) {\n         tempCount++;\n      } else {\n         if (tempCount < minCount) {\n            minCount = tempCount;\n            res = array[i - 1];\n         }\n         tempCount = 1;\n      }\n   }\n\n   if (tempCount < minCount) {\n      res = array[array.length - 1];\n   }\n   return res;\n}\n\n// ... overload functions for double, char & string"
            },
            {
                "type": "text",
                "content": "<span class='ddu-list-number'>25</span> Das prozentuale (durchschnittliche) Vorkommen eines Elements im Array ausgeben: <code>frequenceOfElement()</code> <br/> Die overload functions müssen dem Typ entsprechend angepasst werden."
            },
            {
                "type": "code",
                "language": "java",
                "content": "public static double frequenceOfElement(int[] array, int element) {\n   double count = 0;\n   for (int item : array) {\n      if (item == element) count += 1;\n   }\n   return count / array.length;\n}\n\n// ... overload functions for double, char & string"
            },
            {
                "type": "text",
                "content": "<span class='ddu-list-number'>26</span> Die Anzahl des am häufigsten vorkommende (auftretende) Element im Array ausgeben: <code>mostDuplicates()</code> <br/> Die overload functions müssen dem Typ entsprechend angepasst werden."
            },
            {
                "type": "code",
                "language": "java",
                "content": "public static int mostDuplicates(int[] array) {\n   int count = 0, tempCount;\n   int tempElement;\n   for (int value : array) {\n      tempElement = value;\n      tempCount = 0;\n      for (int index = 0; index < array.length; index++) {\n         if (tempElement == array[index]) tempCount++;\n      }\n      if (tempCount > count) {\n         count = tempCount;\n      }\n   }\n   return count;\n}\n\n// ... overload functions for double, char & string"
            },
            {
                "type": "text",
                "content": "<span class='ddu-list-number'>27</span> Die Anzahl des am wenigsten vorkommende (auftretende) Element im Array ausgeben: <code>leastDuplicates()</code> <br/> Die overload functions müssen dem Typ entsprechend angepasst werden."
            },
            {
                "type": "code",
                "language": "java",
                "content": "public static int leastDuplicates(int[] array) {\n   Arrays.sort(array);\n   int minCount = array.length + 1, tempCount = 1;\n\n   for (int i = 1; i < array.length; i++) {\n      if (array[i] == array[i - 1]) {\n         tempCount++;\n      } else {\n         if (tempCount < minCount) {\n            minCount = tempCount;\n            }\n         tempCount = 1;\n      }\n   }\n   return minCount;\n}\n\n// ... overload functions for double, char & string"
            },
            {
                "type": "text",
                "content": "<span class='ddu-list-number'>28</span> Umwandlung aller Elemente von integer zu double: <code>intToDouble()</code>"
            },
            {
                "type": "code",
                "language": "java",
                "content": "public static double[] intToDouble(int[] array) {\n   double[] newArray = new double[array.length];\n   for (int i = 0; i < array.length; i++) {\n      double integer = array[i];\n      newArray[i] = integer;\n   }\n   return newArray;\n}\n\n// [1.0, 3.0, 6.0, 2.0]"
            },
            {
                "type": "text",
                "content": "<span class='ddu-list-number'>29</span> Umwandlung aller Elemente von double zu integer: <code>doubleToInt()</code>"
            },
            {
                "type": "code",
                "language": "java",
                "content": "public static int[] doubleToInt(double[] array) {\n   int[] newArray = new int[array.length];\n   for (int i = 0; i < array.length; i++) {\n      newArray[i] = (int) Math.round(array[i]);\n   }\n   return newArray;\n}\n\n// [1, 2, 1, 2, 2]"
            },
            {
                "type": "text",
                "content": "<span class='ddu-list-number'>30</span> Ausgabe aller Elemente im Unicode: <code>unicode()</code>"
            },
            {
                "type": "code",
                "language": "java",
                "content": ""
            },
            {
                "type": "text",
                "content": "<span class='ddu-list-number'>31</span> Teilen des Arrays an beliebiger Stelle, die Rückgabe ist ein neues Array mit zwei Array-Elementen: <code>divide()</code>"
            },
            {
                "type": "code",
                "language": "java",
                "content": "public static int[][] divide(int[] array, int splitIndex) {\n   int[] firstArr = new int[splitIndex+1];\n   int[] secondArr = new int[(array.length-1) - splitIndex];\n   int[][] newArray = { firstArr, secondArr };\n\n   for (int i = 0; i < array.length; i++) {\n      if (i < firstArr.length) {\n         firstArr[i] = array[i];\n      } else {\n         secondArr[i - firstArr.length] = array[i];\n      }\n   }\n\n   return newArray;\n}\n\n// ... overload functions for double, char & string\n// Print: MyArray.subArray(stringArray, 1, 2)\n// [[Berlin, Rio, Canberra], [Buenos Aires, Paris, Prag, Amsterdam]]"
            },
            {
                "type": "text",
                "content": "<span class='ddu-list-number'>32</span> Ein Sub-Array erstellen – die Elemente zwischen zwei ausgewählten Elementen inklusive der ausgewählten Elemente bilden ein neues Sub-Array: <code>subArray()</code>"
            },
            {
                "type": "code",
                "language": "java",
                "content": "public static int[] subArray(int[] array, int firstIndex, int secondIndex) {\n   int newArrayLength = secondIndex - firstIndex + 1;\n   int[] newArray = new int[newArrayLength];\n   int newIndex = 0;\n\n   for (int i = 0; i < array.length; i++, newIndex++) {\n      if (i >= firstIndex && i <= secondIndex) {\n         newArray[newIndex - 1] = array[i];\n      }\n   }\n\n   return newArray;\n}\n\n// ... overload functions for double, char & string\n// Print: MyArray.subArray(stringArray, 1, 2)\n// [Rio, Canberra]"
            },
            {
                "type": "text",
                "content": "<span class='ddu-list-number'>33</span> Zwei Arrays zusammenfügen / concatenate two arrays: <code>concatenateArrays()</code>"
            },
            {
                "type": "code",
                "language": "java",
                "content": "public static int[] concatenateArrays(int[]... arrays) {\n   int length = 0;\n   for (int[] array: arrays) {\n      length += array.length;\n   }\n   int[] newArray = new int[length];\n   int index = 0;\n   for (int[] array : arrays) {\n      for (int element : array) {\n         newArray[index] = element;\n         index++;\n      }\n   }\n\n   return newArray;\n}\n\n// ... overload functions for double, char & string\n// Arrays: [1, 3, 6, 2], [1, 3, 6, 2, 1, 1], [1, 1, 1, 2, 2, 3, 5, 5, 5]\n// [1, 3, 6, 2, 1, 3, 6, 2, 1, 1, 1, 1, 1, 2, 2, 3, 5, 5, 5]"
            },
            {
                "type": "text",
                "content": "<span class='ddu-list-number'>34</span> Array Elemente mischen / shuffle array elements"
            },
            {
                "type": "code",
                "language": "java",
                "content": "public static int[] shuffleArray(int[] array) {\n   int n = array.length;\n   Random random = new Random();\n   random.nextInt();\n   for (int i = 0; i < n; i++) {\n      int change = i + random.nextInt(n - i);\n      int item = array[i];\n      array[i] = array[change];\n      array[change] = item;\n   }\n\n   return array;\n}\n\n// ... overload functions for double, char & string\n// charArray: ['a', 'b', 'd', 'k', 'c', 'f']\n// Print: MyArray.shuffleArray(charArray)\n// [k, b, f, d, c, a]"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "text",
                "content": "Die Bibliothek soll im Klasspath eingetragen werden."
            }
        ]
    },
    {
        "url": "kontrollstrukturen_datentypen_und_ausdruecke/test",
        "topic": "Entwickeln und Bereitstellen von Anwendungssystemen",
        "subject": "lf-6",
        "lessonDate": "2019-11-22",
        "lastUpdate": "2020-05-28",
        "schoolWeek": "5",
        "elements": [
            {
                "type": "title",
                "content": "Aufgabe 1"
            },
            {
                "type": "list",
                "content": "Das Catering der Cafeteria des OSZ-Teltow gewährt beim Kauf von Schnitzelbaguettes",
                "list": [
                    "bei Mindestabnahme von 3 Baguettes 5% Rabatt",
                    "bei Mindestabnahme von 5 Baguettes 10% Rabatt",
                    "bei Mindestabnahme von 7 Baguettes 15% Rabatt"
                ]
            },
            {
                "type": "text",
                "content": "a) Die Kasse soll diese Regelung automatisch berücksichtigen. Sie bekommen den Auftrag, diesen Programmbaustein zu implementieren. Als Lösungsvorschlag liegt Ihnen das nachfolgende Nassi-Shneiderman-Diagramm (Stuktogramm) vor."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5efbc7794ec54c25305a5093"
            },
            {
                "type": "list",
                "content": "Überprüfen Sie den Lösungsvorschlag und kreuzen Sie den Fehler an, der bei der Bearbeitung dieses Algorithmus gemacht wurde.",
                "list": [
                    "A - Bei unter 3 Baguettes würde Rabatt berechnet werden",
                    "B - Ab 3 bis unter 5 Baguettes würde kein Rabatt berechnet werden",
                    "C - Ab 3 bis unter 5 Baguettes würde mehr als 5% Rabatt berechnet werden",
                    "<strong>D - Ab 5 bis unter 7 Baguettes würde 5% Rabatt berechnet werden</strong>",
                    "E - Ab 5 bis unter 7 Baguettes würde kein Rabatt berechnet werden"
                ]
            },
            {
                "type": "list",
                "content": "b) Der Algorithmus, der mit Hilfe des Nassi-Shneiderman-Diagramms dargestellt wird, ist implementiert worden. Dabei ist ein logischer Fehler aufgetreten. Kreuzen Sie die Tätigkeit an die ausgeübt wurde, um einen solchen Fehler ausfindig zu machen.",
                "list": [
                    "A - Übersetzen mit Compiler",
                    "B - Editieren mit einer IDE (engl. \"Integrated Development Environment\")",
                    "C - Starten des Debuggers zum Anzeigen der logischen Fehler",
                    "<strong>D - Ausführen mit speziell generierten Testdaten</strong>",
                    "E - Binden mit dem Linker"
                ]
            },
            {
                "type": "text",
                "content": "c) Nachdem der erste Lösungsansatz verworfen wurde, werden weitere Stukrogramme vorgelegt. Kontrollieren Sie diese, ob die vorgegebene Regelung logisch richtig umgesetzt wird. Prüfen Sie, welches Nassi-Shneiderman-Diagramm korrekt ist und kreuzen Sie dieses an."
            },
            {
                "type": "subtitle",
                "content": "A"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5efbc7844ec54c25305a5095"
            },
            {
                "type": "subtitle",
                "content": "<strong>B</strong>"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5efbc78b4ec54c25305a5097"
            },
            {
                "type": "subtitle",
                "content": "C"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5efbc79a4ec54c25305a5099"
            },
            {
                "type": "subtitle",
                "content": "D"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5efbc7a14ec54c25305a509b"
            },
            {
                "type": "subtitle",
                "content": "E"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5efbc7ac4ec54c25305a509d"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Aufgabe 2"
            },
            {
                "type": "text",
                "content": "(a < b < c) testet, ob die Integer Zahlen a, b und c geordnet sind. Schreiben Sie den entsprechenden Code in Java-Syntax."
            },
            {
                "type": "text",
                "content": "<strong>→ if <code>((a < b) && (b < c))</code></strong>"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Aufgabe 3"
            },
            {
                "type": "text",
                "content": "Nennen Sie die Ausgabe des folgenden Programmfragments."
            },
            {
                "type": "code",
                "language": "java",
                "content": "System.out.println(10^5);"
            },
            {
                "type": "text",
                "content": "<strong>→ 15</strong>"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Aufgabe 4"
            },
            {
                "type": "text",
                "content": "Nennen Sie die Ausgabe des folgenden Programmfragments."
            },
            {
                "type": "code",
                "language": "java",
                "content": "int x = 1 / 2;\nSystem.out.println(x);"
            },
            {
                "type": "text",
                "content": "<strong>→ 0</strong>"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Aufgabe 5"
            },
            {
                "type": "text",
                "content": "Nennen Sie die Werte von m und n nach Ausführung des Codes."
            },
            {
                "type": "code",
                "language": "java",
                "content": "int n = 987654321;\nint m = 0;\nwhile (n != 0) {\n   m = (10 * m) + (n % 10);\n   n = n / 10;\n}"
            },
            {
                "type": "text",
                "content": "<strong>→ n = 0, m = 123456789</strong>"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Aufgabe 6"
            },
            {
                "type": "text",
                "content": "Eine Variable a ist als double a = 5 deklariert und initialisiert. Nennen Sie die Ausgabe der folgenden Anweisungen."
            },
            {
                "type": "code",
                "language": "java",
                "content": "System.out.println(8 / a); // Ausgabe: 1,6\nSystem.out.println( (int) (8 / a) ); // Ausgabe: 1"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Aufgabe 7"
            },
            {
                "type": "text",
                "content": "Werten Sie die folgenden Programmzellen aus und geben Sie die Werte von c, d, e, f und g an."
            },
            {
                "type": "code",
                "language": "java",
                "content": "boolean a = true, b = false, c, d, e, f, g;\n\nc = a ^ b;\nd = a || b;\ne = (d && !c) || !a;\nf = ( (d === e) || (!d != e) ) == true;\ng = 5 == 7;"
            },
            {
                "type": "text",
                "content": "<strong>→ c = true, d = true, e = false, f = true, g = false</strong>"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Aufgabe 8"
            },
            {
                "type": "text",
                "content": "Gegeben ist das folgende Programmfragment. Nennen Sie den Wert, den b am Ende angenommen hat."
            },
            {
                "type": "code",
                "language": "java",
                "content": "boolean b;\nint a = 8, c = 21, d;\nd = (c / a) * 2;\nb = ( (c % a) >= (c / a) ) && (d == 4);"
            },
            {
                "type": "text",
                "content": "<strong>→ b = true</strong>"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Aufgabe 9"
            },
            {
                "type": "text",
                "content": "Die Zeile 3 im nachfolgenden Programm gibt die größte darstellbare Zahl im Integer Bereich aus (2147483647). Nennen Sie die Zahl, die in Zeile 4 ausgegeben wird. Begründen Sie Ihre Antwort."
            },
            {
                "type": "code",
                "language": "java",
                "content": "class Zahlen {\n   public static void main(String[] args) {\n      System.out.println(Integer.MAX_VALUE);\n      System.out.println(Integer.MAX_VALUE + 1);\n   }\n}"
            },
            {
                "type": "text",
                "content": "<strong>→ Zum MAX_VALUE wird die 1 dazu addiert, das ergibt 21447483648, Summe springt vom größten Wert MAX_VALUE 21447483647 zu MIN_VALUE <u>-21447483648</u>, wird overflow / underflow genannt.</strong>"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Aufgabe 10"
            },
            {
                "type": "text",
                "content": "Nennen Sie die Ausgabe des folgenden Programmfragments."
            },
            {
                "type": "code",
                "language": "java",
                "content": "int c = 1;\nwhile (c > 0) c++;\nSystem.out.println(c);"
            },
            {
                "type": "text",
                "content": "<strong>→ 1, erst nach Ablauf des Programms wird c um 1 erhöht</strong>"
            }
        ]
    },
    {
        "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/rekursion_definition_und_uebungen",
        "topic": "Entwickeln und Bereitstellen von Anwendungssystemen",
        "subject": "lf-6",
        "lessonDate": "2020-08-14",
        "lastUpdate": "2020-11-04",
        "schoolWeek": "14",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "subtitle",
                "content": "Der Terminus"
            },
            {
                "type": "text",
                "content": "Rekursion (lat. recurrere) bedeutet Selbstbezüglichkeit, d. h. etwas verweist auf sich selbst."
            },
            {
                "type": "text",
                "content": "<b>Inkarnation</b>: wiederholte Selbstaufrufe einer Funktion <br/> <b>Termination</b>: die Inkarnationskette bricht ab"
            },
            {
                "type": "hint",
                "content": "Der Abbruch der Inkarnationskette muss garantiert werden, d. h. der Algorithmus muss terminieren!"
            },
            {
                "type": "subtitle",
                "content": "Motivation Rekursionen"
            },
            {
                "type": "list",
                "content": "Rekursive Programme sind ...",
                "list": [
                    "In der Regel kürzer/einfacher zu formulieren",
                    "eng verbunden mit dem leistungsfähigen Algorithmenschema Teile-und-Herrsche",
                    {
                        "content": "Viele Berechnungen und Datenstrukturen sind von Haus aus selbstbezüglich:",
                        "sublist": [
                            "Ein Verzeichnis enthält Daten und andere Verzeichnisse",
                            "Euklidischer Algorithmus ggT",
                            "Quicksort",
                            "Listen, Bäume"
                        ]
                    }
                ]
            },
            {
                "type": "subtitle",
                "content": "Fakultätsberechnung - Beispiel einer rekursiven Funktion"
            },
            {
                "type": "text",
                "content": "Die Fakultät ist in der Mathematik eine Funktion, die <code>fac</code>-Funktion erwartet einen Parameter vom Typ <code>int</code> und gibt einen Wert als <code>int</code> zurück. Da sich die Funktion selbst aufruft spricht man hier von einer rekursiven Funktion."
            },
            {
                "type": "code",
                "language": "java",
                "content": "public static int fac(int n) {\n   if (n > 0) return n * fac(n - 1);\n   else return 1;\n}\n\npublic static void main(String[] args) {\n   int n = 4;\n   System.out.println(fac(n));\n}"
            },
            {
                "type": "subtitle",
                "content": "Iterativ und Rekursiv"
            },
            {
                "type": "code",
                "language": "java",
                "content": "// iterativ\npublic static int fac(int n) {\n   int fac = 1;\n   while (n > 0) {\n      fac = fac * a;\n      n = n - 1;\n   }\n   return fac;\n}\n\n// rekursiv\npublic static int fac(int n) {\n   return n === 0 ? 1 : n * fac(n - 1);\n}"
            },
            {
                "type": "text",
                "content": "Ein rekursiver Ansatz ist meist eleganter als ein Programm mit iterativem Ansatz. <br/> Ein iterativer Ansatz ist meist effizienter als ein Programm mit rekursivem Ansatz. <br/> Jede rekursive Funktion kann durch ein iterativen Pendant ersetzt werden und umgekehrt."
            },
            {
                "type": "list",
                "content": "Es gibt direkte und indirekte rekursive Funktionen ...",
                "list": [
                    {
                        "content": "Direkte rekursive Funktion",
                        "sublist": [
                            "Die Funktion ruft sich mindestens einmal selbst auf"
                        ]
                    },
                    {
                        "content": "Indirekte rekursive Funktion (verschränkte Rekursion)",
                        "sublist": [
                            "Die Funktion ruft eine andere Funktion auf, die wiederum eine weitere Funktion aufruft, die wiederum eine weitere Funktion aufruft, bis irgendwann eine Funktion die erste Funktion wieder aufruft. Alle aufgerufenen Funktionen sind damit natürlich rekursiv."
                        ]
                    }
                ]
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Rekursionsmuster"
            },
            {
                "type": "text",
                "content": "Es gibt vier grundlegende Rekursionsmuster"
            },
            {
                "type": "subtitle",
                "content": "Lineare Rekursion"
            },
            {
                "type": "code",
                "language": "java",
                "content": "public static int fac(int n) {\n   if (n === 0) {\n      return 1;\n   } else {\n      return n * fac(n - 1);\n   }\n}"
            },
            {
                "type": "text",
                "content": "Spezialfall: Repetitive Rekursion (engl. <i>tail recursive</i>, auch endrekursiv, iterativ rekursiv) Die Funktion ruft sich selbst mit einem veränderten Parameter auf."
            },
            {
                "type": "code",
                "language": "java",
                "content": "// Beispiel: Moduloperation - Aufruf von mod(5,3) läuft bis mod(2,3) aufgerufen wird (return 2)\npublic static int mod(int a, int b) {\n   if (a < b) {\n      return a;\n   } else {\n      return mod(a - b, b);\n   }\n}\n\n// Beispiel: Größter gemeinsamer Teiler\npublic static int ggT(int a, int b) {\n   if (b ==== 0) {\n      return a;\n   } else {\n      return ggT(b, a % b);\n   }\n}\n\n// Beispiel: Der Klassiker -  Die Türme von Hanoi\nprivate static void verschiebe(char a, char b, char c, int n) {\n   if (n === 1) {\n      System.out.println(\"Lege die oberste Scheibe von Turm\" + a + \" auf Turm \" + c + \".\");\n   } else {\n      verschiebe(a, c, b, n - 1);\n      verschiebe(a, b, c, 1);\n      verschiebe(b, a, c, n - 1);\n   }\n}\n\npublic static void main(String [] args) {\n   // verschiebe von -> nach -> über, Höhe des Turms\n   verschiebe('A', 'B', 'C', 3);\n}"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Baumartige Rekursion"
            },
            {
                "type": "code",
                "language": "java",
                "content": "// Beispiel: Fibonacci-Folge ist rekursiv definiert\npublic static long fib(int n) {\n   if (n <= 1) return n;\n   else return fib(n-1) + fib(n-2);\n}"
            },
            {
                "type": "text",
                "content": "Baumartige Rekursion für die Fibonacci-Folge F<sub>5</sub>"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f43d11f846fa034c7ff8c6a"
            },
            {
                "type": "code",
                "language": "java",
                "content": "// Beispiel: Pascalsche Dreieck\npublic static int pas(int n, int k) {\n   if ((k === 0) || (k === n))\n      return 1;\n   else\n      return pas(n-1, k) + pas(n-1, k-1);\n}"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f43d132846fa034c7ff8c6c"
            },
            {
                "type": "text",
                "content": "Im rekursiven Code kann es zu extremen Speicherbedarf und extrem häufigen Neuberechnungen kommen. Besonders vorsichtig sollten Sie im rekursiven Code bei der Erzeugung von Arrays sein. Baumrekursion kann durch Memoisation (engl. <i>memoization</i> oder <i>memoisation</i>) optimiert werden."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Geschachtelte Rekursion"
            },
            {
                "type": "text",
                "content": "Resultate einer rekursiven Berechnung sind nicht immer offensichtlich. Was ist das Ergebnis der folgenden Funktion?"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f43d140846fa034c7ff8c6e"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Verschränkte Rekursion"
            },
            {
                "type": "text",
                "content": "Zwei oder mehrere Funktionen rufen sich gegenseitig auf."
            }
        ]
    },
    {
        "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/datenbanken_und_datenbanksysteme",
        "topic": "Entwickeln und Bereitstellen von Anwendungssystemen",
        "subject": "lf-6",
        "lessonDate": "2020-08-31",
        "lastUpdate": "2020-09-20",
        "schoolWeek": "15",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "text",
                "content": "So genannte Datenbank-Management-Systeme (DBMS) für Datenbanken strukturieren , beispielsweise relationale Datenbanken (MySQL) oder NoSQL Datenbanken. Eine Datenbank ist eine organisierte Sammlung von elektronischen Daten. Das DBMS ist die Software, die mit Endbenutzern, Anwendungen und der Datenbank selbst interagiert, um die Daten zu erfassen, zu analysieren, verwalten oder zu löschen. Zusammen bilden diese beiden Komponenten ein Datenbanksystem (DBS)."
            },
            {
                "type": "text",
                "content": "Warenwirtschaftssysteme (Amazon, Online-Shops), Enterprise Ressource Planning (ERP) Software und CRM Systeme nutzen Datenbanksysteme im Hintergrund. Dabei kommen Typen wie MariaDB oder MySQL zum Einsatz, zum Beispiel WordPress arbeitet intern mit MySQL-Datenbanken."
            },
            {
                "type": "list",
                "content": "Typen",
                "list": [
                    "Tabellenbasierte Datenbanken (MySQL)",
                    "Dokumentenbasierte Datenbanken (MongoDB)",
                    "Hierarchische Datenbanken",
                    "Grafische Datenbanken / Graphdatenbank"
                ]
            },
            {
                "type": "list",
                "content": "Datenbanksystem Anforderungen / Merkmale",
                "list": [
                    {
                        "content": "Datenunabhängigkeit",
                        "sublist": [
                            "Anwendungsprogramm und Datenhaltung sollten unabhängig voneinader sein"
                        ]
                    },
                    {
                        "content": "Paralleler Datenzugriff",
                        "sublist": [
                            "Mehrere Benutzer müssen gleichzeitig auf die Daten zugreifen können. Hierfür benötigt es Protokolle für Transaktionskontrollen"
                        ]
                    },
                    {
                        "content": "Datenkonsistenz",
                        "sublist": [
                            "Die Daten innerhalb einer Tabelle / Collection können einem einheitlichen Modell folgen, bei MongoDB beispielsweise nicht zwingend vorgegeben"
                        ]
                    },
                    {
                        "content": "Datensicherheit",
                        "sublist": [
                            "Der Zugriff darf nur durch autorisierte Benutzer gestattet werden"
                        ]
                    },
                    {
                        "content": "Abfragesprache",
                        "sublist": [
                            "Muss eine Möglichkeit für die Datenmanipulation (Erstellen / Create, Abfragen / Read, Bearbeiten / Update, Löschen / Delete - kurz CRUD) bereitstellen"
                        ]
                    },
                    {
                        "content": "Keine / kontrollierte Redundanz",
                        "sublist": [
                            "Um Inkonsistenz des gleichen Werts in verschiedenen Objekten zu vermeiden, sollte die redundante (mehrfache) Speicherung von identischen Daten vermieden werden. In Ausnahmefällen kann Redundanz zur Performance-Optimierung verwendet werden"
                        ]
                    }
                ]
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Tabellenbasierte Datenbanken"
            },
            {
                "type": "text",
                "content": "Eine Datenbanktabelle ist eine Sammlung verwandter Daten, das bedeutet sie stellt eine Datenbank-Relation dar - Die Datensätze verschiedener Spalten haben Verbindungen zueinander. Diese werden in einem strukturierten Format in einer Tabelle mit Zeilen und Spalten gespeichert. Die Anzahl der Spalten ist festgelegt, die Anzahl von Zeilen ist beliebig."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f67aec18dcdb242a7e7c65c"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Dokumentenbasierte Datenbanken"
            },
            {
                "type": "text",
                "content": "Bei einer Dokumentbasierten Datenbank bilden Dokumente die Grundeinheit zur Speicherung von Daten ab. Es muss keinem exakten Datenbankschema / Modell gefolgt werden, die Dokuemnte können untereinander unterschiedlich sein und Inkonsistenzen bezüglich der vorhandenen Werte aufweisen. In MongoDB beispielsweise werden JSON-Dokumente verwendet."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f67aece8dcdb242a7e7c65e"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Hierarchisches Datenbankmodell"
            },
            {
                "type": "text",
                "content": "Das älteste Datenbankmodell, es bildet seinen Inhalt durch eine hierarchische Baumstruktur ab. Jedet Satz (Record) hat also genau einen Vorgänger, mit Ausnahme eines Satzes, nämlich der Wurzel / dem obersten Satz der so entstehenden Baumstruktur. Die Daten werden in einer Reihe von Datensätzen gespeichert, mit denen verschiedene Felder verknüpft sind."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f67aed78dcdb242a7e7c660"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Grafisches Datenbankmodell"
            },
            {
                "type": "text",
                "content": "Benutzt Graphen, um stark vernetzte Informationen darzustellen und abzuspeichern. Besteht aus Knoten und Kanten, den Verbindungen zwischen den Knoten. Gehören zu den NoSQL-Datenbanken und priorisieren die Beziehung zwischen den Daten, wodurch die Abbildung hierarchischer und vernetzter Strukturen vereinfacht wird."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f67aede8dcdb242a7e7c662"
            }
        ]
    },
    {
        "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/relationale_datenbanken_mysql",
        "topic": "Entwickeln und Bereitstellen von Anwendungssystemen",
        "subject": "lf-6",
        "lessonDate": "2020-08-31",
        "lastUpdate": "2020-09-26",
        "schoolWeek": "15",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "text",
                "content": "MySQL steht für My - My Widenius, Tochter des Mitbegründers Michael Widenius - SQL - Structured Query Language. SQL, früher noch SEQUEL (Structured English Query Language) genannt, wurde in den 1970er Jahren entworfen. MySQL wurde 1994 entworfen und ist eines der am verbreitetesten Datenbanksysteme weltweit, es gehört zu den relationalen Datenbankverwaltungssystemen."
            },
            {
                "type": "text",
                "content": "Eine relationale Datenbank (auch RDBMS - Relational Database Management System genannt) zeichnet sich durch die Relation zwischen Objekten aus. Als Beispiel könnte man sich einen Online-Shop für Bücher vorstellen, welcher die Datenbanken"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Integer Datentypen"
            },
            {
                "type": "text",
                "content": "Für Zahlen gibt es verschiedene Datentypen für unterschiedliche Zahlenbereiche, da höhere Zahlen mehr Speicherplatz verbrauchen. Es ist gibt auch \"unsigned\" Datentypen, welche ausschließlich positive Zahlenwerte enthalten dürfen - die Zahlenbereiche sind in diesem Fall so hoch wie die Range des Datentyps, bei TinyInt wären das -128 bis 127 = 255."
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    {
                        "content": "TinyInt",
                        "sublist": [
                            "Sehr kleiner Integer",
                            "Zahlenbereich: -128 bis 127",
                            "1 Byte"
                        ]
                    },
                    {
                        "content": "SmallInt",
                        "sublist": [
                            "Kleiner Integer",
                            "Zahlenbereich: -32768 bis 32767",
                            "2 Bytes"
                        ]
                    },
                    {
                        "content": "MediumInt",
                        "sublist": [
                            "Mittelgroßer Integer",
                            "Zahlenbereich: -8388608 bis 8388607",
                            "3 Bytes"
                        ]
                    },
                    {
                        "content": "Int",
                        "sublist": [
                            "(Default) Integer",
                            "Zahlenbereich: -2147483648 bis 2147483647",
                            "4 Bytes"
                        ]
                    },
                    {
                        "content": "BigInt",
                        "sublist": [
                            "Großer Integer",
                            "Zahlenbereich: -2<sup>63</sup> bis 2<sup>63</sup>-1",
                            "8 Bytes"
                        ]
                    }
                ]
            },
            {
                "type": "hint",
                "content": "In der Abschlussprüfung sollte man die grundlegenen Datentypen kennen, zum Beispiel dass für Bilder der Datentyp BLOB - Binary Large Object - verwendet wird."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Integer Datentypen"
            },
            {
                "type": "text",
                "content": "Für boolesche Datentypen kann <code>Bool</code> / <code>Boolean</code> verwendet werden, außerdem kann auch <code>TinyInt</code> genutzt werden und mit den Werten 0 für <code>false</code> und 1 für <code>true</code> die Wahrheitswerte bestimmen, in JavaScript ergibt die Null 0 als Integer <code>false</code> wenn der Wert in einer if - Abfrage geprüft wird, diesen Effekt sollte man kennen."
            }
        ]
    },
    {
        "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/relationale_algebra_projektion_selektion_und_join_in_sql",
        "topic": "Entwickeln und Bereitstellen von Anwendungssystemen",
        "subject": "lf-6",
        "lessonDate": "2020-09-02",
        "lastUpdate": "2020-10-04",
        "schoolWeek": "15",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "text",
                "content": "Eine Algebra ist eine Menge zusammen mit Operationen auf dieser Menge. Zum Beispiel ist die Menge von mehreren Integer zusammen mit den Operationen + und * eine Algebra. Im Fall der relationalen Algebra ist diese Menge die Menge aller endlichen Relationen. Eine Anfrage ist ein Term / Ausdruck in der Algebra."
            },
            {
                "type": "text",
                "content": "SQL ist eine deklarative Manipulations- und Abfragesprache, sie wird verwendet um Daten einer Datenbank abzufragen oder zu bearbeiten. Dafür gibt es sogenannte Operationen der relationalen Algebra (Projektion, Selektion und Join in verschiedenen Varianten), kenntnisse der relationalen Algebra helfen, SQL und relationale Datenbanksysteme besser zu verstehen."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f79ff54a40070503d0a75f7"
            },
            {
                "type": "subtitle",
                "content": "Projektion - Auswahl spezieller Spalten"
            },
            {
                "type": "text",
                "content": "<code>SELECT spalte1, spalte2 FROM datenbank</code>"
            },
            {
                "type": "subtitle",
                "content": "Selektion - Auswahl von Zeilen nach Bedingungen"
            },
            {
                "type": "text",
                "content": "<code>SELECT * FROM WHERE spalte1 > 1</code>"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Operationen auf Relationen - Projektion"
            },
            {
                "type": "text",
                "content": "Die Projektion ist eine Abfrage in der nur gewünschte Spalten angezeigt werden, die Spalten werden nicht entfernt oder verändert, nur die explizit genannten Spalten werden angezeigt."
            },
            {
                "type": "text",
                "content": "Wird in SQL in der SELECT-Klausel kodiert. Die projizierten Eigenschaften werden hinter SELECT als Liste angegeben. Wird keine Projektion durchgeführt, d.h. es sind alle Eigenschaften des Relationenformats ausgewählt, wird dies in SQL durch einen Stern * anstelle der Liste angegeben."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Operationen auf Relationen - Selektion"
            },
            {
                "type": "text",
                "content": "Es wird ein Prädikat P über Eigenschaften des Relationenformats einer Relation R gebildet. Nur Tupel r є R , für die das Prädikat erfüllt ist, werden in die Ergebniserlation Σ( R ) aufgenommen. Das Prädikat P wird in SQL in der WHERE-Kausel kodiert."
            },
            {
                "type": "text",
                "content": "<b>Vergleichsausdrücke</b> <br/> <code>Gehalt >= 2000 AND Geschlecht = 'male'</code> <br/> <code>YEAR(Geburtstag) < 1980</code>"
            },
            {
                "type": "text",
                "content": "<b>Standardprädikate</b> <br/> <code>Name LIKE '%nn%' </code> <br/> <code>Ort IN ('Bautzen', 'Dresden')</code> <br/> <code>Telefon IS NULL</code>"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Operationen auf Relationen - JOIN"
            },
            {
                "type": "text",
                "content": "Es wird ein Prädikat P über Eigenschaften des Relationenformats einer Relation R gebildet. Nur Tupel r є R , für die das Prädikat erfüllt ist, werden in die Ergebniserlation Σ( R ) aufgenommen. Das Prädikat P wird in SQL in der WHERE-Kausel kodiert."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Aufgaben"
            },
            {
                "type": "subtitle",
                "content": "<span class='ddu-list-number'>1</span> Datenbank importieren"
            },
            {
                "type": "text",
                "content": "Importieren Sie eine Datenbank mit "
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "<span class='ddu-list-number'>2</span> Alle Datensätze anzeigen"
            },
            {
                "type": "text",
                "content": "Schreiben Sie eine SQL-Abfrage (engl. query) die alle Datensätze einer Tabelle ausgibt."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "<span class='ddu-list-number'>3</span> Bestimmte Spalten anzeigen"
            },
            {
                "type": "text",
                "content": "Geben Sie nur die Spalten <code>leistung</code> und <code>jahr</code> aus der Tabelle aus."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f79ff60a40070503d0a75f9"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "<span class='ddu-list-number'>4</span> Spaltenzuordnung zur Tabelle"
            },
            {
                "type": "text",
                "content": "Es ist möglich, dass es in einer Datenbank mehrere Tabellen mit gleichem Spaltennamen gibt. Um Verwechslungen auszuschließen, kann der Spaltenname einer Tabelle zugewiesen werden. Ordnen Sie dem SELECT-Statement den Spaltennamen der Tabelle zu."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "<span class='ddu-list-number'>5</span> Tabellenalias"
            },
            {
                "type": "text",
                "content": "Der Tabellenname <code>informatiker</code> ist sehr lang. Stattdessen kann ein Tabellenalias verwendet werden. Dies spart Schreibarbeit und macht ein SQL-Statement übersichtlich. Schreiben Sie eine SELECT-Abfrage, die die Spalten <code>leistung</code> und <code>jahr</code> der Tabelle <code>informatiker</code> ausgibt. Verwenden Sie den Tabellenalias (table alias) i"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "<span class='ddu-list-number'>6</span> Spaltenalias"
            },
            {
                "type": "text",
                "content": "Die Spalte <code>leistung</code> der Tabelle <code>informatiker</code> ist nicht sehr aussagekräftig. Es ist möglich, in der Ausgabeanzeige den Spaltennamen zu ändern, ohne die Originaltabelle in der Datenbank zu beeinflussen. Vergeben Sie für die Ausgabe den Tabellenspaltennamen (column alias) power für die Spalte <code>leistung</code>."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f79ff74a40070503d0a75fb"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "<span class='ddu-list-number'>7</span> Duplikate entfernen"
            },
            {
                "type": "text",
                "content": "Geben Sie alle Informatiker aus der Tabelle <code>informatiker</code> genau einmal aus - ohne Duplikate."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f79ff95a40070503d0a75fd"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "<span class='ddu-list-number'>8</span> Die WHERE-Komponente"
            },
            {
                "type": "text",
                "content": "Mit der WHERE-Komponente können einzelne Datensätze selektiert werden. Geben Sie nur die Datensätze aus, in denen das Attribut <code>jahr</code> der Jahreszahl 1968 entspricht."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f79ffa1a40070503d0a75ff"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "<span class='ddu-list-number'>9</span> Logische Operatoren"
            },
            {
                "type": "text",
                "content": "Die folgende Aufgabe kann mit logischen und relationalen Operatoren gelöst werden. Ermitteln Sie, welche Leistung Herr Knuth vor 1970 vorzuweisen hat."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f79ffaaa40070503d0a7601"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "list",
                "content": "Quellen:",
                "list": [
                    "<a href='https://www.tinohempel.de/info/info/datenbanken_prolog/abfragen_II.htm'>https://www.tinohempel.de/info/info/datenbanken_prolog/abfragen_II.htm</a>",
                    "<a href='https://www2.htw-dresden.de/~sobe/InfoMB_Jg14/Vo/4_Datenbanken_Teil2.pdf'>https://www2.htw-dresden.de/~sobe/InfoMB_Jg14/Vo/4_Datenbanken_Teil2.pdf</a>"
                ]
            }
        ]
    },
    {
        "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/sql_funktionen_daten_zusammenfassen_und_aggregatfunktionen",
        "topic": "Entwickeln und Bereitstellen von Anwendungssystemen",
        "subject": "lf-6",
        "lessonDate": "2020-09-21",
        "lastUpdate": "2020-10-15",
        "schoolWeek": "16",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "subtitle",
                "content": "Aggregatfunktionen"
            },
            {
                "type": "text",
                "content": "Eine Aggregatfunktion (engl. <i>aggregate</i>, anhäufen, vereinigen) ist eine Funktion, die bestimmte Spalten und Werte von Daten zusammenfasst. Die fünf wichtigsten SQL-Aggregatfunktionen sind <code>COUNT</code>, <code>SUM</code>, <code>AVG</code>, <code>MIN</code> und <code>MAX</code> - mit diesen können Werte nach bestimmten Bedingungen gefiltert werden. Mittels <code>GROUP BY</code>, <code>HAVING</code> oder <code>ORDER</code> können die Ergebnisse von Abfragen gruppiert und sortiert werden."
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "header",
                        "columns": [
                            { "align": "left", "content": "Aggregatfunktion" },
                            { "align": "left", "content": "Beschreibung" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "<code>SUM(spalte)</code>" },
                            { "align": "left", "content": "Addiert alle in der <code>spalte</code> enthaltenen Werte" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "<code>AVG(spalte)</code>" },
                            { "align": "left", "content": "Gibt den Mittelwert der in der <code>spalte</code> enthaltenen Werte aus" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "<code>MIN(spalte)</code>" },
                            { "align": "left", "content": "Ermittelt den kleinsten Wert in der <code>spalte</code>" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "<code>MAX(spalte)</code>" },
                            { "align": "left", "content": "Ermittelt den größten Wert in der <code>spalte</code>" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "<code>COUNT(spalte)</code>" },
                            { "align": "left", "content": "Gibt die Anzahl aller Datensätze in der <code>spalte</code> aus" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "<code>COUNT(*)</code>" },
                            { "align": "left", "content": "Gibt die Anzahl aller Datensätze aus" }
                        ]
                    }
                ]
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Alle Einträge"
            },
            {
                "type": "code",
                "language": "sql",
                "content": "SELECT * FROM informatiker;"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f7b25073da9d453ce6db570"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Duplikate entfernen"
            },
            {
                "type": "code",
                "language": "sql",
                "content": "SELECT DISTINCT wiss_name FROM informatiker;"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f7b25113da9d453ce6db572"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Duplikate entfernen und in GROßBUCHSTABEN"
            },
            {
                "type": "code",
                "language": "sql",
                "content": "SELECT DISTINCT upper(wiss_name) FROM informatiker;"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f7b251a3da9d453ce6db574"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Zeige alle Einträge in den \"Kalkül\" vorkommt und gebe dessen Start-Index im gefilterten Wort aus"
            },
            {
                "type": "code",
                "language": "sql",
                "content": "SELECT wiss_name, leistung, POSITION(\"Kalkül\" in leistung) FROM informatiker AS MatchPosition;"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f7b25223da9d453ce6db576"
            }
        ]
    },
    {
        "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/sql_funktionen_daten_zusammenfassen_uebungen",
        "topic": "Entwickeln und Bereitstellen von Anwendungssystemen",
        "subject": "lf-6",
        "lessonDate": "2020-09-23",
        "lastUpdate": "2020-10-15",
        "schoolWeek": "16",
        "elements": [
            {
                "type": "title",
                "content": "Aufgaben"
            },
            {
                "type": "subtitle",
                "content": "<span class='ddu-list-number'>1</span> Nützliche Operatoren (1)"
            },
            {
                "type": "text",
                "content": "Es gibt in SQL nützliche Operatoren, um die Lesbarkeit unter Verwendung des natürlichen Sprachgebrrauchs zu erhöhen. Schreiben Sie die folgende SQL-Abfrage ohne <code>IN</code>-Operator."
            },
            {
                "type": "code",
                "language": "sql",
                "content": "SELECT *\nFROM informatiker\nWHERE wiss_name IN ('Knuth, Donald Ervin', 'Hoare, Tonys');"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "<span class='ddu-list-number'>2</span> Nützliche Operatoren (2)"
            },
            {
                "type": "text",
                "content": "Es gibt in SQL nützliche Operatoren, um die Lesbarkeit unter Verwendung des natürlichen Sprachgebrrauchs zu erhöhen. Schreiben Sie die folgende SQL-Abfrage ohne <code>BETWEEN</code>-Operator."
            },
            {
                "type": "code",
                "language": "sql",
                "content": "SELECT *\nFROM informatiker\nWHERE jahr BETWEEN  1960 AND 1970;"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "<span class='ddu-list-number'>3</span> Mustervergleiche von Texten (1)"
            },
            {
                "type": "text",
                "content": "Nützlich sind Mustervergleiche von Texten in Prädikaten. Finden Sie alle Datensätze, in denen das Attribut <i>leistung</i> das Wort <i>Begründer</i> enthält. Das Zeichen % entspricht dabei einer beliebigen Zeichenfolge."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "<span class='ddu-list-number'>4</span> Mustervergleiche von Texten (2)"
            },
            {
                "type": "text",
                "content": "Es gibt in SQL auch einen Platzhalter für ein einzelnes beliebiges Zeichen. Ermitteln Sie alle Namen ohne Duplikate, die als zweiten Buchstaben ein / enthalten."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "<span class='ddu-list-number'>5</span> Selektion - Sortierung in aufsteigender Reihenfolge"
            },
            {
                "type": "text",
                "content": "Durch eine sortierte Ausgabe der Daten erlangen Sie eine bessere Übersichtlichkeit. SQL stellt dafür die <code>ORDER BY</code>-Komponente zur Verfügung. Ermitteln Sie alle Namen ohne Duplikate in aufsteigender Reihenfolge."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "<span class='ddu-list-number'>6</span> Selektion - Sortierung in absteigender Reihenfolge"
            },
            {
                "type": "text",
                "content": "Ermitteln Sie nun mit <code>ORDER BY</code> alle Namen ohne Duplikate in absteigender Reihenfolge."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "<span class='ddu-list-number'>7</span> Selektion - Sortierung mit mehreren Suchkriterien"
            },
            {
                "type": "text",
                "content": "Es ist möglich, mehrere Suchkriterien zur Sortierung zu berücksichtigen. Schreiben Sie eine SQL-Abfrage, die alle Datensätze erst nach Namen und dann nach Jahren sortiert ausgibt."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "<span class='ddu-list-number'>8</span> Selektion - Mehrere Tabellen vereinen (1)"
            },
            {
                "type": "text",
                "content": "Mit dem Schlüsselwort UNION werden zwei (oder mehr) <code>SELECT</code>-Anweisungen ohne Duplikate zusammengefasst. Schreiben Sie eine SQL-Abfrage, die in der ersten <code>SELECT</code>-Anweisung alle Wissenschaftlernamen die mit \"D\" beginnen ausgibt, und in der zweiten <code>SELECT</code>-Anweisung die Namensliste aller Wissenschaftler ausgibt. Untersuchen Sie die Ausgabe, was passiert, wenn Sie statt <code>UNION</code> das Schlüsselwort <code>UNION ALL</code> verwenden"
            },
            {
                "type": "code",
                "language": "sql",
                "content": "SELECT *\nFROM informatiker\nWHERE jahr BETWEEN  1960 AND 1970;"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "<span class='ddu-list-number'>9</span> Selektion - Mehrere Tabellen vereinen (2)"
            },
            {
                "type": "text",
                "content": "Mit dem Schlüsselwort <code>UNION</code> werden zwei (oder mehr) <code>SELECT</code>-Anweisungen ohne Duplikate zusammengefasst. Interessant sind die folgenden Beobachtungen."
            },
            {
                "type": "text",
                "content": "Es werden zwei Tabellen mit unterschiedlichen Attributen (<i>jahr</i> und <i>leistung</i>) zusammengefasst. Werden die Daten trotz verschiedener Datentypen untereinander aufgelistet?"
            },
            {
                "type": "text",
                "content": "Welches Attribut steht im Tabellenkopf? Was passiert, wenn das Attribut weggelassen wird?"
            },
            {
                "type": "code",
                "language": "sql",
                "content": "SELECT '\"D\" oder \"d\" im Namen' informatiker_mit, wiss_name, jahr\nFROM informatiker\nWHERE wiss_name like '%D%'\nUNION\nSELECT '\"O\" oder \"o\" im Namen' informatiker_mit, wiss_name, leistung\nFROM informatiker\nWHERE wiss_name LIKE '%o%';"
            }
        ]
    },
    {
        "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/sql_joins",
        "topic": "Entwickeln und Bereitstellen von Anwendungssystemen",
        "subject": "lf-6",
        "lessonDate": "2020-10-26",
        "lastUpdate": "2020-11-03",
        "schoolWeek": "17",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "text",
                "content": "Entwurfstext"
            }
        ]
    },
    {
        "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/sql_uebung_anweisungen_schachteln",
        "topic": "Entwickeln und Bereitstellen von Anwendungssystemen",
        "subject": "lf-6",
        "lessonDate": "2020-10-28",
        "lastUpdate": "2020-11-03",
        "schoolWeek": "17",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "text",
                "content": "Entwurfstext"
            }
        ]
    },










    {
        "url": "test",
        "topic": "test",
        "subject": "lf-6",
        "lessonDate": "2020-01-01",
        "lastUpdate": "2020-01-01",
        "schoolWeek": "15",
        "elements": [
            {
                "type": "title",
                "content": "test"
            },
            {
                "type": "subtitle",
                "content": "test"
            },
            {
                "type": "text",
                "content": "test"
            },
            {
                "type": "text",
                "content": "<span class='ddu-list-number'>1</span> | "
            },
            {
                "type": "hint",
                "content": "test"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "code",
                "language": "javascript",
                "content": "test"
            },
            {
                "type": "list",
                "content": "test",
                "list": [
                    "test",
                    "test",
                    {
                        "content": "test",
                        "sublist": [
                            "test",
                            "test"
                        ]
                    }
                ]
            },
            {
                "type": "table",
                "content": "test",
                "rows": [
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "test" }
                        ]
                    }
                ]
            }
        ]
    }
];
