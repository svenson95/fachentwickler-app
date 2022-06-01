import { PostArticle } from '../../app/models/post';
/* eslint-disable quotes, quote-props, max-len, comma-dangle */

export const LF6_POSTS: PostArticle[] = [
  {
    "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/objektorientierung_und_vererbung",
    "_id": "60bc2b8b2e26a059c20d3597",
    "topicId": "6056629db0623029d4a68f6b",
    "title": "Objektorientierung und Vererbung",
    "description": "Thema vom 12.08.2019",
    "subject": "lf-6",
    "type": "article",
    "lessonDate": "2019-08-12",
    "lastUpdate": "2021-06-06",
    "schoolWeek": "1",
    "elements": [
      {
        "type": "TITLE",
        "content": "Definition"
      },
      {
        "type": "SUBTITLE",
        "content": "Objektorientierung"
      },
      {
        "type": "TEXT",
        "content": "Unter Objektorientierung (kurz OO, engl. <i>object-oriented</i>) versteht man in der Entwicklung von Software eine Sichtweise auf komplexe Systeme, bei der ein System durch das Zusammenspiel kooperierender Objekte beschrieben wird. Objektorientierung wird hauptsächlich im Rahmen der objektorientierten Programmierung (OOP) verwendet, um die Komplexität der entstehenden Programme zu verringern. Der Begriff existiert jedoch auch für andere, der Programmierung vorgelagerte Phasen der Softwareentwicklung, wie die objektorientierte Analyse und objektorientiertes Design (Synonym objektorientierter Entwurf) von Software."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Vererbung"
      },
      {
        "type": "TEXT",
        "content": "In der Regel ist in objektorientierten Ansätzen das Konzept der Vererbung zu finden, bei dem Eigenschaften und Methoden zwischen Klassen hierarchisch ausgetauscht beziehungsweise ergänzt werden können. Vererbung bedeutet vereinfacht, dass eine abgeleitete Klasse die Methoden und Attribute der Basisklasse ebenfalls besitzt, also „erbt“. Somit kann die abgeleitete Klasse auch darauf zugreifen. Neue Arten von Objekten können auf der Basis bereits vorhandener Objekt-Definitionen festgelegt werden. Es können neue Bestandteile hinzugenommen werden oder vorhandene überlagert werden."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "LIST",
        "content": "Quellen:",
        "list": [
          "Wikipedia - Objektorientierung | 06.06.2021 | <a href='https://de.wikipedia.org/wiki/Objektorientierung'>https://de.wikipedia.org/wiki/Objektorientierung</a>"
        ]
      }
    ]
  },
  {
    "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/datentypen_in_java",
    "_id": "60bc15892e26a059c20d3591",
    "topicId": "6056629db0623029d4a68f6b",
    "title": "Datentypen (in Java)",
    "description": "Thema vom 03.09.2019",
    "subject": "lf-6",
    "type": "article",
    "lessonDate": "2019-09-03",
    "lastUpdate": "2021-01-06",
    "schoolWeek": "2",
    "elements": [
      {
        "type": "TITLE",
        "content": "Definition"
      },
      {
        "type": "TEXT",
        "content": "Ein Datentyp bezeichnet eine Menge gleichartiger Werte, <u>Datentypen legen die möglichen Werte von Variablen, Attributen (und Methoden) fest</u>, sie bestimmen auch, welche Operationen auf den Werten möglich sind. In Java gibt es 8 elementare Datentypen (engl. <i>primitive data types</i>), dazu gehören unter anderem Zahlen - also ganze Zahlen & Fließkommazahlen, Wahrheitswerte und Zeichen."
      },
      {
        "type": "HINT",
        "content": "Jede Klasse bildet einen Datentyp und ist damit eine Erweiterung der elementaren Datentypen um eigene, benutzerdefinierte Attributen & Methoden."
      },
      {
        "type": "TITLE",
        "content": "Elementare Datentypen"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5ed7dad04db79250b7ebc5d0"
      },
      {
        "type": "TEXT",
        "content": "→ Ganzzahlige Werte - <code>byte short int long</code> <br/> → Gleitpunktwerte - <code>float double</code> <br/> → Zeichenwert - <code>char</code> <br/> → Wahrheitswerte - <code>boolean</code>"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Variablen & Konstanten"
      },
      {
        "type": "LIST",
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
        "type": "LIST",
        "content": "Eine <b>Konstante</b> ist eine nicht veränderbare Variable (engl. <i>immutable</i>), was bedeutet, dass <b>der bei der Deklaration zugewiesene Wert nicht geändert werden</b> kann. In Java werden Konstanten mit dem Schlüsselwort final gekennzeichnet. Ein Literal ist ein konstanter Wert oder Ausdruck, der sich zur Laufzeit eines Programms nicht ändert. Allgemein bezeichnet ein Literal eine Zeichenfolge, die die direkte Darstellung der Werte von Basistypen definiert.",
        "list": [
          "die Ziffern 123 sind ein Literal, denn sie repräsentieren den Wert einhundertdreiundzwanzig"
        ]
      },
      {
        "type": "TABLE",
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
              { "align": "middle", "content": "<b>Dezimal</b>" },
              { "align": "middle", "content": "ohne" },
              { "align": "middle", "content": "23872323 ⇒ 23_872_323" }
            ]
          },
          {
            "type": "default",
            "columns": [
              { "align": "middle", "content": "<b>Oktal</b>" },
              { "align": "middle", "content": "0 (Null)" },
              { "align": "middle", "content": "0133041503 ⇒ 01_3304_1503" }
            ]
          },
          {
            "type": "default",
            "columns": [
              { "align": "middle", "content": "<b>Hexadezimal</b>" },
              { "align": "middle", "content": "0x / 0X (Null / NullX)" },
              { "align": "middle", "content": "0x16C4343 ⇒ 0x16C_4343" }
            ]
          },
          {
            "type": "default",
            "columns": [
              { "align": "middle", "content": "<b>Binär</b>" },
              { "align": "middle", "content": "0b / 0B (Nullb / NullB)" },
              { "align": "middle", "content": "0b10101111 ⇒ 0b1010_1111" }
            ]
          }
        ]
      },
      {
        "type": "HINT",
        "content": "Ganzzahlige Werte werden üblicherweise mit dem Datentyp int deklariert. Reicht der Wertebereich nicht aus wird der Datentyp long verwendet. In Java wird dieser durch das Anhängen eines l oder L an den ganzzahligen Wert gekennzeichnet."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Gleitkommatypen"
      },
      {
        "type": "SUBTITLE",
        "content": "Fließkommazahl / Gleitkommazahl (engl. <i>Floating Point number</i>)"
      },
      {
        "type": "TEXT",
        "content": "Fließkommaliterale beinhalten Zahlen mit Nachkommastellen, wenn kein Typ angegeben wird werden sie standardmäßig als double - Wert behandelt. Sind sie mit einem angehängten f oder F gekennzeichnet, werden sie als float - Werte interpretiert."
      },
      {
        "type": "TEXT",
        "content": "Beispiel: float price = 3.00f;"
      },
      {
        "type": "SUBTITLE",
        "content": "float und double"
      },
      {
        "type": "TABLE",
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
        "type": "TEXT",
        "content": "Solche Zahlen haben eine unendliche Anzahl an Ziffern, um diese Ziffern zu speichern zu können würde man unendlichen Speicherplatz benötigen. Daher sind beide Typen von der Genauigkeit der Kommazahlen - und auch ganzen Zahlen - begrenzt."
      },
      {
        "type": "TEXT",
        "content": "Jede float - Zahl kann in einen double gespeichert werden, aber im umgekehrten Fall geht die zusätzliche Genauigkeit verloren, ähnlich wie bei float und int (3.14159f → int wird zu 3). Den Typ float zu verwenden kann vorteilhaft sein wenn mit vielen Variablen gerechnet wird, manche Prozessoren können mit float schneller rechnen als mit double und es braucht die Hälfte an Speicher."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Character-Grundtyp"
      },
      {
        "type": "TABLE",
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
        "type": "LIST",
        "content": "Der Typ char hat 16 bit und ist ein einzelnes Zeichen aus dem Unicodezeichensatz. Einer char - Variablen kann man drei verschiedene Arten von Werten zuweisen:",
        "list": [
          "→ Ein alphanumerisches Zeichen in einfachen Anführungszeichen",
          "→ Ein Integerwert aus dem Zahlenbereich 0 bis 65535",
          "→ oder der vierstellige hexadezimale Index aus dem Unicodezeichensatz"
        ]
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Boolescher-Grundtyp"
      },
      {
        "type": "TEXT",
        "content": "In der Programmierung ist es häufig nötig sogenannte Wahrheitswerte / Zustände zu speichern. Dafür gibt es den Typ boolean, benannt nach <a href='https://de.wikipedia.org/wiki/George_Boole'>George Boole</a>, welcher nur den Wert true oder false annehmen kann. Intern werden diese Werte mit 1 und 0 dargestellt. Bei der Initialisierung eines Booleans lässt sich auch ein Vergleich darstellen …"
      },
      {
        "type": "TEXT",
        "content": "int age = 20; <br/> int restriction = 18; <br/> boolean isOldEnough = age >= restriction; ← true"
      },
      {
        "type": "TEXT",
        "content": "Boolesche Operatoren in Java wären zum Beispiel … <br/> isOldEnough && paymentDone <br/> paymentDone || isPremiumMember <br/> paymentDone == true"
      },
      {
        "type": "TEXT",
        "content": "Die doppelten && und || bedeuten eine Kurzschlussauswertung, sobald beim && der erste Wert false ist, oder bei || der erste Wert true, werden die folgenden Werte nicht mehr ausgewertet. Die Operatoren mit vollständiger Auswertung werden benötigt, wenn es zu Teilausdrücken kommt - wie zB. den Ladezustand zu beenden - also Methodenaufrufe die in jedem Fall ausgeführt werden sollen."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Kodierung"
      },
      {
        "type": "SUBTITLE",
        "content": "Ganzzahlige Datentypen (Zweierkomplementkodierung)"
      },
      {
        "type": "TEXT",
        "content": "Das <a href='https://de.wikipedia.org/wiki/Zweierkomplement'>Zweierkomplement</a> (engl. <i>two’s complement</i>) - auch B(inär)-Komplement oder Basiskomplement - ist eine Möglichkeit negative Integer-Zahlen im Dualsystem darzustellen, ohne zusätzliche Zeichen wie <b>+</b> und <b>−</b> zu benötigen. Dies ist vor allem für Computer bedeutend, welche mit Bits arbeiten, die als Werte nur 0 oder 1 annehmen."
      },
      {
        "type": "HINT",
        "content": "Das Zweierkomplement ist die vorherrschende Art, mit der positive und negative Zahlen im Computer dargestellt und für Rechenoperationen mit Hilfe des Rechenwerks erschlossen werden."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5ed7dafd4db79250b7ebc5d2"
      },
      {
        "type": "SUBTITLE",
        "content": "Gleitkommatypen (Gleitkommakodierung nach IEEE 754)"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5ed7db2f4db79250b7ebc5d4"
      },
      {
        "type": "TEXT",
        "content": "m = normalisierte Mantisse - 1 ≤ m < 2 <br/> e - Exponent"
      },
      {
        "type": "SUBTITLE",
        "content": "Beispiel: Kodierung der Zahl 13, 5"
      },
      {
        "type": "TEXT",
        "content": "Suche den größten Exponenten (Zweierpotenz), so dass 2<sup>e</sup> ≤ x - 13,5 = 1,<b>6875</b> x 2<sup><b>3</b></sup>"
      },
      {
        "type": "TEXT",
        "content": "Um negative Exponenten ohne zusätzliche Codierung (zB. Zweierkomplement) darstellen zu können, wird ein Biaswert (B) zum Exponenten (e) addiert."
      },
      {
        "type": "TABLE",
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
        "type": "TEXT",
        "content": "Abgespeichert wird der modifizierte Exponent (e + B) und die reduzierte normalisierte Mantisse f, mit f = m - 1"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5ed7db454db79250b7ebc5d6"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Typkonvertierung"
      },
      {
        "type": "SUBTITLE",
        "content": "Typumwandlung (engl. <i>type casting</i>)"
      },
      {
        "type": "TEXT",
        "content": "Wenn ein int - Wert mit einem double - Wert addiert werden soll, welchem Grunddatentyp enstpricht dann das Ergebnis?"
      },
      {
        "type": "LIST",
        "content": "Implizite Typkonvertierung (engl. <i>implicite typecast</i>) bei Grunddatentypen",
        "list": [
          "Kleiner Zahlenbereich wird im großen Zahlenbereich abgebildet",
          "Compiler tut dies in Java problemlos"
        ]
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5ed7db5f4db79250b7ebc5d8"
      },
      {
        "type": "TEXT",
        "content": "Java nimmt alle Typumformungen in Pfeilrichtung automatisch (implizit) vor. Dabei können Zwischenschritte übersprungen werden."
      },
      {
        "type": "SUBTITLE",
        "content": "Explizite Typkonvertierung bei Grunddatentypen (explicit typecast)"
      },
      {
        "type": "LIST",
        "content": "",
        "list": [
          "großen Zahlenbereich in kleinen Zahlenbereich umwandeln (zB. die Vorkommazahl von 3.14 wird benötigt) also in Java double → int",
          "Compiler zeigt Fehler an"
        ]
      },
      {
        "type": "TEXT",
        "content": "Alle Typkonvertierungen entgegengesetzt der Pfeilrichtung erfordern in Java einen Konvertierungenoperator (cast-Operator), der den Ziel-Typ der Konvertierung angibt. Es wird explizit kenntlich gemacht, dass die Typkonvertierung gewollt ist. Der Konvertierungsoperator wird in Klammern geschrieben und gibt den Zieldatentyp an. <br/> → Beispiel:(int) 3.14 → Nachkommastellen werden abgeschnitten"
      },
      {
        "type": "HINT",
        "content": "Der Grunddatentyp boolean kann in Java nicht konvertiert werden!"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Typsysteme im Vergleich"
      },
      {
        "type": "SUBTITLE",
        "content": "Stark typisierte Sprachen"
      },
      {
        "type": "TEXT",
        "content": "Datentypen werden immer erzwungen. Ohne explizite Typkonvertierung kann ein int - Datentyp nicht in ein char - Datentyp umgewandelt werden (Java und Python)"
      },
      {
        "type": "SUBTITLE",
        "content": "Schwach typisierte Sprachen"
      },
      {
        "type": "TEXT",
        "content": "Datentypen können ignoriert werden. Ein int -Datentyp kann ohne explizite Typkonvertierung als char verwendet werden (C, PHP, Lua)"
      },
      {
        "type": "SUBTITLE",
        "content": "Statisch typisierte Sprachen"
      },
      {
        "type": "TEXT",
        "content": "Der Datentyp steht zur Kompilerzeit fest. Einer Variablen wird vor der Verwendung ein Datentyp zugewiesen (Java und C)"
      },
      {
        "type": "SUBTITLE",
        "content": "Dynamisch typisierte Sprachen"
      },
      {
        "type": "TEXT",
        "content": "Der Datentyp wird bei der Zuweisung einer Variablen zur Laufzeit ermittelt (PHP, Python, Lua)"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "LIST",
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
    "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/operatoren_in_java",
    "title": "Operatoren (in Java)",
    "description": "Thema vom 27.09.2019",
    "subject": "lf-6",
    "type": "article",
    "lessonDate": "2019-09-27",
    "lastUpdate": "2020-10-31",
    "schoolWeek": "3",
    "elements": [
      {
        "type": "SUBTITLE",
        "content": "Arithmetische Operatoren"
      },
      {
        "type": "TABLE",
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
        "type": "SUBTITLE",
        "content": "Inkrement- und Dekrement-Operatoren"
      },
      {
        "type": "TABLE",
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
        "type": "SUBTITLE",
        "content": "Vorzeichen Operatoren"
      },
      {
        "type": "TABLE",
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
        "type": "SUBTITLE",
        "content": "Relationale Operatoren"
      },
      {
        "type": "TABLE",
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
        "type": "SUBTITLE",
        "content": "Logische Operatoren"
      },
      {
        "type": "TABLE",
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
        "type": "SUBTITLE",
        "content": "Bit Operatoren"
      },
      {
        "type": "TABLE",
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
        "type": "SUBTITLE",
        "content": "Zuweisungs Operatoren"
      },
      {
        "type": "TABLE",
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
        "type": "SUBTITLE",
        "content": "Sonstige Operatoren"
      },
      {
        "type": "TABLE",
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
    "title": "Kontrollstrukturen (in Java)",
    "description": "Thema vom 28.10.2019",
    "subject": "lf-6",
    "type": "article",
    "lessonDate": "2019-10-28",
    "lastUpdate": "2020-10-18",
    "schoolWeek": "4",
    "elements": [
      {
        "type": "TITLE",
        "content": "Ausdrücke"
      },
      {
        "type": "TEXT",
        "content": "Ausdrücke (engl. \"expressions\") werden in einem Programm verwendet, um vorzunehmende Auswertungen zu beschreiben."
      },
      {
        "type": "TABLE",
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
        "type": "TEXT",
        "content": "Jeder Ausdruck hat einen Typ <br/> <code>(3.0 + y) * 4.0</code> - ist ein Ausdruck vom Typ <code>double</code> <br/> <code>new Vector2D(1.0, 2.0)</code> - ist ein Ausdruck vom Typ <code>Vector2D</code> <br/> <code>x == 2</code> - ist ein Ausdruck vom Typ <code>boolean</code>"
      },
      {
        "type": "HINT",
        "content": "Ausdrücke vom Typ <code>boolean</code> nennt man auch Bedingungen."
      },
      {
        "type": "SUBTITLE",
        "content": "Weitere Ausdrücke in Java"
      },
      {
        "type": "TABLE",
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
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Anweisungen"
      },
      {
        "type": "TEXT",
        "content": "Anweisungen (engl. \"statements\") sind Einheiten der Ausführung, auch \"Sätze in der Programmiersprache\" genannt. Anweisungen haben meistens eine Zustandsveränderung zur Folge."
      },
      {
        "type": "LIST",
        "content": "Anweisungen in Java",
        "list": [
          "Deklaration lokaler Variablen - <code>int x;</code>",
          "Block-Anweisungen - <code>{ Anweisung1; ... }</code>",
          "Return-Anweisungen - <code>return Ausdruck; bzw. return;</code>"
        ]
      },
      {
        "type": "LIST",
        "content": "\"Expression-Statements\" sind ausgewählte Ausdrücke, die gleichzeitig auch als Anweisungen verwendet werden können",
        "list": [
          "Inkrement- / Dekrement-Operator <br/> <code>i++;</code> == <code>Ausdruck<sub>1</sub> = y + (i++);</code>",
          "Zuweisungen <br/> <code>x = y;</code> == <code>Ausdruck<sub>2</sub> = (y = z);</code>",
          "Methodenaufrufe <br/> <code>f(x,y);</code> == <code>Ausdruck<sub>3</sub> = (y = z);</code>",
          "new-Operator <br/> <code>new Vector2D();</code> == <code>Ausdruck<sub>4</sub> = new Vector2D();</code>"
        ]
      },
      {
        "type": "SUBTITLE",
        "content": "Ausdruck vs Anweisung"
      },
      {
        "type": "TABLE",
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
        "type": "HINT",
        "content": "Ein Ausdruck ist immer Teil einer Anweisung, der Rumpf jeder Methode ist immer eine Folge von Anweisungen."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Übung"
      },
      {
        "type": "LIST",
        "content": "Bei welchen Java-Fragmenten handelt es sich um gültige Anweisungen?",
        "list": [
          "1) <code>P = new Vector2D().shift(1.0, 2.0);</code>",
          "2) <code>(int)foo(x);</code>",
          "2) <code>x = y = z;</code>",
          "2) <code>(i++)++;</code>"
        ]
      },
      {
        "type": "SUBTITLE",
        "content": "Eingaben über die Konsole"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5eefac334db79250b7ebc5df"
      },
      {
        "type": "LIST",
        "content": "Vorgefertigte Klasse <code>Scanner</code>",
        "list": [
          "Importieren mit - <code>import java.util.Scanner;s</code>",
          "Objekt erstellen mit - <code>new Scanner(System.in);</code>",
          "Zeile einlesen mit - <code>scanner.nextInt();</code>"
        ]
      },
      {
        "type": "HINT",
        "content": "Achtung: Noch gibt es keine Fehlerbehandlung wenn keine Zahl eingegeben wird!"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Kontrollfluss-Anweisungen (engl. \"control-flow-statements\")"
      },
      {
        "type": "TEXT",
        "content": "<code>if</code> - Anweisung <br/> <code>switch</code> - Anweisung <br/> <code>while / do-while</code> - Anweisung <br/> <code>for</code> - Anweisung <br/> <code>break</code> - Anweisung <br/> <code>continue</code> - Anweisung"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Die <code>if</code> – Anweisung"
      },
      {
        "type": "TEXT",
        "content": "Fallunterscheidung: wenn-dann-Prinzip <br/> → Fallunterscheidung ist eine fundamentale Technik der Mathematik und des Programmierens"
      },
      {
        "type": "TEXT",
        "content": "Beispielanweisung der Fallunterscheidung in Java"
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "int a = scanner.nextInt(); \nint b = scanner.nextInt(); \nint max = 0; \n\nif (a >= b) { \n    max = a; \n} else { \n    max = b; \n}"
      },
      {
        "type": "TEXT",
        "content": "Als Kontrollfluss-Diagramm"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5eefce7d4db79250b7ebc5e1"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Geschachtelte <code>if</code> – Anweisungen"
      },
      {
        "type": "TEXT",
        "content": "Man kann die <code>if</code> - Anweisung auch mehrfach schachteln, nach Möglichkeit sollten die am häufigsten auftretenden Fälle zuerst behandelt werden. In jedem <code>else</code> - Zweig gilt die Negation aller vorangegangenen Bedingungen"
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "int points = 70;\nint grade = 0; \n\nif (points >= 87) {\n    grade = 1 \n} else if (points >= 75) {\n    grade = 2;\n} else if (points >= 63) {\n    grade = 3;\n} else if (points >= 51) {\n    grade = 4;\n} else {\n    grade = 5;\n}\n\nSystem.out.println(\"Note: \" + grade);"
      },
      {
        "type": "TEXT",
        "content": "Als Kontrollfluss-Diagramm"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5eefce9e4db79250b7ebc5e3"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Übung"
      },
      {
        "type": "TEXT",
        "content": "Schreiben Sie ein Programm, das für zwei Integer-Eingaben a und b ausgibt, ob a größer, kleiner oder gleich b ist."
      },
      {
        "type": "TEXT",
        "content": "Beispiel-Lösung"
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "Scanner scanner = new Scanner(System.in);\nint a = scanner.nextInt(); \nint b = scanner.nextInt(); \n\nif (a > b) {\n    System.out.println(\"a ist größer als b\");\n} else if (a < b) {\n    System.out.println(\"a ist kleiner als b\");\n} else {\n    System.out.println(\"a ist gleich b\");\n}"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Die <code>switch</code> – Anweisung"
      },
      {
        "type": "TEXT",
        "content": "Die switch – Anweisung (engl. ‚switch statement‘) realisiert eine weitere Form der Verzweigung."
      },
      {
        "type": "TEXT",
        "content": "Beispiel-Lösung"
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "// Konstanten der Klasse\nstatic final char NEW = ‘n‘;\nstatic final char OPEN = ‘o‘;\nstatic final char SAVE = ‘s‘;\nstatic final char QUIT = ‘q‘;\n\n// Innerhalb einer Methode\nchar command = ...;\nswitch (command) {\n   case NEW:   createFile();\n   break;\n   case OPEN:  openFile();\n   break;\n   case SAVE:  saveFile();\n   break;\n   case QUIT:  exitProgram();\n   break;\n   default:    System.out.println(\"Unbekanntes Kommando: \" + command);\n   break;\n}"
      },
      {
        "type": "TEXT",
        "content": "Syntax"
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "switch (command) {\n   case WERT_1: Anweisung_1;\n   default: Anweisung_2;\n}"
      },
      {
        "type": "TEXT",
        "content": "Der Ausdruck muss dabei den Typ <code>char</code>, <code>byte</code>, <code>short</code>, <code>int</code> oder (seit Java 7 möglich) <code>enum</code> oder <code>string</code> haben. Die Werte nach <code>case</code> müssen kontant sein (keine Variablen!), ein „<code>case</code>“-Wert legt nur den Einstiegspunkt innerhalb des <code>switch</code> – Blocks fest. Die break – Anweisung veranlasst das (sofortige) Verlassen des gesamten <code>switch</code> – blocks. Ohne <code>break</code> werden auch alle Anweisungen der nachfolgenden <code>case</code> – Blöcke abgearbeitet. Nimmt der Ausdruck keinen der Werte an, so wird der (optionale) <code>default</code> – Block abgearbeitet."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Beispiel - Tage pro Monat"
      },
      {
        "type": "TEXT",
        "content": "Die rechte Variante ist zwar kürzer, aber schlechter lesbar. Es werden auch Monate größer 12 und kleiner 1 akzeptiert. → Fehlerfindung (engl. „debugging“) erschwert."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "int month = 5;\nint days = 0;\n\n// Erstes Variante\nswitch (month) {\n   case  1: days = 31; break;\n   case  2: days = 28; break;\n   case  3: days = 31; break;\n   case  4: days = 30; break;\n   case  5: days = 31; break;\n   case  6: days = 30; break;\n   case  7: days = 31; break;\n   case  8: days = 31; break;\n   case  9: days = 30; break;\n   case 10: days = 31; break;\n   case 11: days = 30; break;\n   case 12: days = 31; break;\n}\n\n// Zweite Variante\nswitch (month) {\n   case  2: days = 28; break;\n   case  4:\n   case  6:\n   case  9:\n   case 11: days = 30; break;\n   default: days = 31; break;\n}"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "LIST",
        "content": "Quellen:",
        "list": [
          "Zentrum für Mediales Lernen am Karlsruher Institut für Technologie (KIT) | Kontrollstrukturen, Ausdrücke, Programmieren von Schleifen, Unterschied for- und while-Schleifen - Vorlesungsaufzeichnung <a href='https://youtu.be/7afJG3_JSDo'>https://youtu.be/7afJG3_JSDo</a>"
        ]
      }
    ]
  },
  {
    "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/schleifen",
    "title": "Schleifen (in Java)",
    "description": "Thema vom 09.12.2019",
    "subject": "lf-6",
    "type": "article",
    "lessonDate": "2019-12-09",
    "lastUpdate": "2020-10-18",
    "schoolWeek": "6",
    "elements": [
      {
        "type": "TITLE",
        "content": "Programmieren von Schleifen"
      },
      {
        "type": "TEXT",
        "content": "Schleifen erlauben die wiederholte Ausführung von Anweisungen, die Programmierung von Schleifen erfolgt nach dem Muster: Vorbereitung, Schleife, Nachbereitung."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Die <code>while</code> - Schleife"
      },
      {
        "type": "TEXT",
        "content": "Die <code>while</code> – Anweisung (engl. ‘while-statement‘) realisiert eine sich wiederholende Ausführung."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "int a = 8;\nint b = 11;\n\nint i = a;\nint sum = 0;\n\nwhile (i <= b) {\n   sum = sum + i;\n   i = i + 1;\n}"
      },
      {
        "type": "TABLE",
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
        "type": "TEXT",
        "content": "→ Ergebnis: 38"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Die <code>do-while</code> - Schleife"
      },
      {
        "type": "TEXT",
        "content": "<code>do { Anweisungen } while (Bedingung)</code>"
      },
      {
        "type": "TEXT",
        "content": "Als Kontrollfluss-Diagramm"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5eefcffd4db79250b7ebc5e9"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Übung"
      },
      {
        "type": "TEXT",
        "content": "Schreiben Sie ein Programm, das für eine Integer – Eingaben p die Zahlen von 1 bis p ausgibt, gewünschte Ausgabe für <code></code>p = 5</code>"
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "Scanner scanner = new Scanner(System.in);\nint p = scanner.nextInt();\nint i = 1;\n\nwhile (i <= p) {\n   System.out.println(i + \" \");\n   i++;\n}"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Die <code>for</code> - Schleife"
      },
      {
        "type": "TEXT",
        "content": "Die <code>for</code> – Schleife (engl. \"for statement\") ist eine Zählschleife"
      },
      {
        "type": "TEXT",
        "content": "<code>for (Initialisierung; Bedingung; Schritt) { Anweisungen }</code>"
      },
      {
        "type": "TEXT",
        "content": "Die Initialisierung ist eine Anweisung, die einmalig am Anfang der Schleife ausgeführt wird, vor jedem Schleifendurchlauf wird geprüft, ob die Bedingung wahr ist. Der Schritt ist eine Anweisung, die am Ende jedes Schleifendurchlaufs ausgeführt wird (nach den Anweisungen)."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "int a = 8;\nint b = 11;\nint sum = 0;\n\nfor (int i = a; i <= b; i++) {\n   sum = sum + i;\n}"
      },
      {
        "type": "TEXT",
        "content": "Als Kontrollfluss-Diagramm"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5eefcf1b4db79250b7ebc5e7"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Unterschied <code>for</code> – und <code>while</code> – Schleife"
      },
      {
        "type": "TEXT",
        "content": "<code>for (n) { ... }</code> <br/> → Ich weiß wie oft es ausgeführt wird, da es wie ein sequentiellles Programm ohne Schleife läuft"
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "for (initialisierung; abbruchbedingung; anweisungen_2) {\n   anweisungen_1;\n}"
      },
      {
        "type": "TEXT",
        "content": "<code>while (n) { ... }</code> <br/> → → Ich weiß vor Beginn der Ausführung nicht unbedingt, wie oft die Schleife ausgeführt wird"
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "Typ initialisierung;\n\nwhile (abbruchbedingung) {\n   anweisungen_1; anweisungen_2\n}"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Beispiel: Collatz – Funktion"
      },
      {
        "type": "TEXT",
        "content": "Hier ist im Voraus unbekannt, wie häufig die Schleife ausgeführt wird."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "n = Zahl;\n\nwhile (n != 1) {\n   if (n%2 == 0) {\n      n = n / 2;\n   } else {\n      n = n * 3 + 1;\n   }\n}"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Übung"
      },
      {
        "type": "TEXT",
        "content": "Gesucht: Ein Programm, das für zwei Integer – Eingaben p und m dann p Zeilen in der Konsole ausgeben, die jeweils die Zahlen von 1 bis m enthalten. <br/> Gewünschte Ausgabe für p = 2 und m = 5"
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "int p = scanner.nextInt();\nint m = scanner.nextInt();\n\nfor (int i = 1; i <= p; i++) {\n   for (int j = 1; j <= m; j++) {\n      System.out.print(j + \" \");\n   }\n\n   System.out.println(\"\");\n}"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Die <code>break</code> - Schleife"
      },
      {
        "type": "TEXT",
        "content": "Manchmal möchte man eine Schleife verlassen, bevor alle Schleifendurchläufe abgearbeitet wurden. „break“ veranlasst das sofortige Verlassen der innersten Schleife, es sollte nur sparsam und gezielt eingesetzt werden, damit der Programmcode übersichtlich und verständlich bleibt."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "int i, sum = 0;\n\nwhile (true) {\n   i = scanner.nextInt();\n   if (i == 0) {\n      break;\n   }\n   sum += i;\n   System.out.println(\"sum = \" + sum);\n}"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Die <code>continue</code> - Schleife"
      },
      {
        "type": "TEXT",
        "content": "Bricht die Ausführung der aktuellen Schleifeniteration ab und springt direkt zur nächsten Iteration <br/> → Die Schleifenbedingung wird dabei geprüft <br/> → Bei einer for – Schleife wird zuvor auch noch die Schritt – Anweisung ausgeführt"
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "int i, numOnes = 0;\n\nwhile (true) {\n   i = scanner.nextInt();\n   if (i == 0) {\n      break;\n   } else if (i != 1) {\n      continue;\n   }\n   numOnes++;\n   System.out.println(\"number of ones = \" + numOnes);\n}"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "LIST",
        "content": "Quellen:",
        "list": [
          "Zentrum für Mediales Lernen am Karlsruher Institut für Technologie (KIT) | Kontrollstrukturen, Ausdrücke, Programmieren von Schleifen, Unterschied for- und while-Schleifen - Vorlesungsaufzeichnung <a href='https://youtu.be/7afJG3_JSDo'>https://youtu.be/7afJG3_JSDo</a>"
        ]
      }
    ]
  },
  {
    "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/datenstrukturen_und_arrays",
    "title": "Datenstrukuturen und Arrays (in Java)",
    "description": "Mitschrift vom 17.01.2020",
    "subject": "lf-6",
    "type": "article",
    "lessonDate": "2020-01-17",
    "lastUpdate": "2020-05-16",
    "schoolWeek": "7",
    "elements": [
      {
        "type": "TITLE",
        "content": "Referenzdatentypen"
      },
      {
        "type": "TEXT",
        "content": "Java unterscheidet grundsätzlich zwei Arten von Datentypen mit der eine Variable deklariert werden kann: elementare Datentypen und Referenzdatentypen. Elementare oder auch primitive Datentypen sind int, double, char, usw. Über einen Variablennamen kann direkt auf die Speicherzelle, die den Wert eines elementaren Datentyps enthält, zugegriffen werden."
      },
      {
        "type": "TEXT",
        "content": "Elementare Typen kommen so oder ähnlich in fast jeder Programmiersprache vor."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "int a = 42;"
      },
      {
        "type": "TEXT",
        "content": "Die Speicherzelle der Variable enthält den Wert eines elementaren Datentyps."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5ef931064ec54c25305a507a"
      },
      {
        "type": "TEXT",
        "content": "Eine Variable des Referentdatentyps enthält entweder eine Referenz auf ein Objekt oder eine Null-Referenz. Klassen, Interfaces (werden später behandelt) und Felder (Arrays) benutzen Referenzdatentypen. Das Schlüsselwort <code>new</code> reserviert Speicherplatz für das referenzierte Objekt und erzeugt dieses."
      },
      {
        "type": "TEXT",
        "content": "Im folgenden Beispiel wird ein neues Array-Objekt für fünf Integer-Zahlen erzeugt und die Referenz darauf in der Referenzvariable a gespeichert."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "int[] a = new int[5];"
      },
      {
        "type": "TEXT",
        "content": "Die Speicherzelle der Variable enthält eine Referenz auf ein Objekt (Adresse bzw. Verweis auf einen Speicherbereich, in dem das Objekt abgelegt ist)."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5ef931144ec54c25305a507c"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Die Null-Referenz"
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "int[] a;"
      },
      {
        "type": "TEXT",
        "content": "In Java gibt es drei spezielle Referenzen: <code>null</code>, <code>this</code> und <code>super</code>. Mit edem Literal <code>null</code> wird eine Referenz repräsentiert, die auf nichts verweist. Diese Referenz ist typenlos, d. h. sie kann jeder Referenzvariable, egal welchen Typs, zugewiesen werden. Da in Java Objekte erst zur Laufzeit erzeugt werden, erhalten uninitialisierte Referenzvariablen eine Null-Referenz (<code>null</code>). Die anderen zwei speziellen Referenzen werden später behandelt."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5ef931304ec54c25305a507e"
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "int[] a = null;\n// oder\nchar[] a = null;"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Datenstrukturen"
      },
      {
        "type": "TEXT",
        "content": "Viele Probleme lassen sich mit den bisherigen \"Boardmitteln\" nur umständlich programmieren. Angenommen, Sie wollen ein Programm schreiben, das aus 100 Werten vom Typ <code>int</code> das Minimum ausgibt. Dazu müssten Sie 100 Variablen vom Typ <code>int</code> deklaieren (anlegen), initialisieren (einlesen) und selektieren (100 Vergleiche abfragen)."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "int wert1 = 3, wert2 = 46, wert3 = 97, wert4 = 70, ..., wert100 = 54;\nint minimum\nminimum = wert1;\nif (minimum > wert2) minimum = wert2;\nif (minimum > wert3) minimum = wert3;\nif (minimum > wert4) minimum = wert4;\n// ...\nif (minimum > wert100) minimum = wert100;"
      },
      {
        "type": "TEXT",
        "content": "Stellen Sie sich diesen Aufwand mit 1000 Zahlen vor. Es ist offensichtlich, dass das beschriebene Verfahren nicht besonders effizient ist."
      },
      {
        "type": "TEXT",
        "content": "Ein oft einfacherer Weg, algorithmische Probleme zu lösen, ist die Verwendung von Datenstrukturen. Grundlegene Datenstrukturen für die vorrangig imperative Programmierung sidn Tupel (engl. \"record\"), Feld (engl. \"array\", \"vector\"), Verkettete Liste (engl. \"linked list\"), Stapelspeicher/Kellerspeicher (engl. \"stack\"), Warteschlange (engl. \"queue\"), Vorrangswarteschlange/Prioritätswarteschlange (engl. \"priority queue\"), Graph, Baum (engl. \"tree\"), Heap, Treap, Hashtabelle (engl. \"hash table\", \"dictionary\" oder \"map\")."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Datenstruktur <code>Array</code>"
      },
      {
        "type": "TEXT",
        "content": "Ein Array ist ein ein- oder mehrdimensionales statisches Feld, das Datenwerte vom gleichen Datentyp im Speicher ablegt. Über einen Arraynamen und einen Index kann eindeutig auf die Speicherzelle zugegriffen werden, die den Datenwert enthält."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5ef931454ec54c25305a5080"
      },
      {
        "type": "TEXT",
        "content": "In Java werden Arrays als Objekte behandelt. Die Deklaration ist, abgesehen von den rechteckigen Klammern, identisch der Deklaration von Variablen primitiven Datentyps. Mit dem Schlüsselwort <code>new</code> wird das Objekt (hier das Array) erzeugt. Es wird Speicherplatz entsprechend der Arraylänge reserviert. Die Datenwerte werden hintereinander im Speicher abgelegt, so dass auf einzelne Array-elemente schnell zugegriffen werden kann. Ein Array wird, anders als eine Variable, zur Laufzeit erzeugt, da zur Compilerzeit die Größe des Arrays nicht feststeht. Das Beispiel zeigt die Deklaration und Initialisierung eines eindimensionalen Integer-Arrays mit vier Elementen in Java"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5ef9314d4ec54c25305a5082"
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "int[] a = new int[4];\na[0] = 6;\na[1] = 0;\na[2] = 9;\na[3] = 1;"
      },
      {
        "type": "TEXT",
        "content": "oder kurz als Initialisierungsliste"
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "int[] feld;\nfeld = new int[] { 6, 0, 9, 1 };\n// oder\nint[] a = { 6, 0, 9, 1 };"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Die Größe eines Arrays"
      },
      {
        "type": "TEXT",
        "content": "Die Größe (Länge) eines Array-Objekts wird durch Anzahl der aufnehmbaren Elemente bestimmt und in der Objektvariable <code>length</code> gespeichert. Das Attribut ist frei zugänglich (<code>public</code>), schreibgeschützt (<code>final</code>) und vom Typ <code>int</code>, dessen Wert immer positiv oder 0 ist."
      },
      {
        "type": "TEXT",
        "content": "Im Zusammenspiel mit Schleifen wird der Vorteil von Arrays gegenüber Variablen schnell sichtbar. Das Beispiel zeigt die Lösung des Minimum-Problems von oben mit Hilfe von Arrays."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "int[] wert = { 6, 0, 9, 1, ..., 15 };\nint minimum = wert[0];\nfor (int i = 0; i < wert.length; i++) {\n   if (minimum > wert[i]) minimum = wert[i];\n}\n\nSystem.out.println('Das Minimum ist: ' + minimum);"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Mehrdimensionale Arrays"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5ef9316d4ec54c25305a5084"
      },
      {
        "type": "TEXT",
        "content": "Ein mehrdimensionales Array wird als geschachteltes Array (ein Array aus Arrays) gespeichert ..."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5ef931754ec54c25305a5086"
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "int[][] a = new int[2][3];\na[0][0] = 1;\na[0][1] = 2;\na[0][2] = 3;\na[1][0] = 4;\na[1][1] = 5;\na[1][2] = 6;\nSystem.out.println('' + a[0][0] + a[0][1] + a[0][2]);\nSystem.out.println('' + a[1][0] + a[1][1] + a[1][2]);\n\n// Ausgabe: 123 456"
      },
      {
        "type": "TEXT",
        "content": " ... Dadurch ist es möglich, nicht-\"rechteckige\" Arrays zu erzeugen. Das folgende Beispiel deklariert und initialisiert ein zweidimensionales dreieckiges Array."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "int[][] a = { {0}, {1,2}, {3,4,5}, {6,7,8,9} };\nfor (int i = 0; i < a.length; ++i) {\n   for (int j = 0; j < a[i].length; ++j) {\n      System.out.println(a[i][j]);\n   }\n\n   System.out.println();\n}\n\n// Ausgabe: 0 12 345 6789"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Aliasing"
      },
      {
        "type": "TEXT",
        "content": "Eine Zuweisung mit einem Referenztyp erzeugt eine Referenzkopie auf das gleiche Objekt! Dieser Effekt wird als Aliasing (dts. \"Überlappung/Überlagerung\") bezeichnet. Es wird nur die Referenz kopiert, nicht der Wert!"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5ef931814ec54c25305a5088"
      },
      {
        "type": "TEXT",
        "content": "Achtung: Vergleiche und Zuweisungen mit Referenzvariablen verhalten sich anders als mit Variablen! Vorsicht beim Kopieren und Vergleichen von Arrays!"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5ef9318f4ec54c25305a508a"
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "int[] a = { 1, 2, 3, 4 };\nint[] b = a;\na[0] = 999;\nSystem.out.println(b[0]);\n\n// Ausgabe: 999"
      },
      {
        "type": "TEXT",
        "content": "Das Beispiel zeigt, dass nur die Referenz und nicht das Array übergeben worden ist. Der gespeicherte Wert 999 in <code>a[0]</code> ist der gleiche Wert wie in b[0], denn es handelt sich um ein und dasselbe Array. Ein ähnlicher Effekt ist auch beim Vergleich von zwei Arrays zu beobachten (siehe Beispiel unten)."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5ef9319d4ec54c25305a508c"
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "int[] a = { 1, 2, 3, 4 };\nint[] b = { 1, 2, 3, 4 };\nSystem.out.println(a === b);\n\n// Ausgabe: false"
      }
    ]
  },
  {
    "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/statische_methoden",
    "title": "Statische Methoden (in Java)",
    "description": "Mitschrift vom 11.02.2020",
    "subject": "lf-6",
    "type": "article",
    "lessonDate": "2020-02-11",
    "lastUpdate": "2020-09-03",
    "schoolWeek": "8",
    "elements": [
      {
        "type": "TITLE",
        "content": "Definition"
      },
      {
        "type": "TEXT",
        "content": "Mit dem Konstrukt der statischen Methoden (Klassenmethoden) werden in Java Funktionen implementiert. In der prozeduralen Programmmierwelt entspricht dies der Unterprogrammtechnik."
      },
      {
        "type": "TEXT",
        "content": "Die Mathematik beschreibt eine Funktion als Abbildung, die jedem Element des Definitionsbereichs (Menge X) genau ein Element des Wertebereichs (Menge Y) zuordnet. So bildet die Sinusfunktion 𝑓(x) = sin(x) die Werte -π, 0, π, 2π auf den Wert 0, den Wert -1/2π auf den Wert -1 und den Wert 1/2π auf den Wert 1 ab."
      },
      {
        "type": "HINT",
        "content": "Mit statischen Methoden lässt sich das Programmparadigma \"divide et impera\" (lateinisch für teile und hersche, engl. \"divide and conquer\") umsetzen. Komplexe Aufgaben werden in weniger komplexe Teilaufgaben zerlegt, womit sich das Debuggen, Warten und Wiederverwenden von Codes vereinfacht."
      },
      {
        "type": "TEXT",
        "content": "Das Verhalten statischer Methoden ist den mathematischen Funktionen ähnlich. Ein oder mehrere Eingabewerte werden von der Methode zu einem Ergebnis verarbeitet, das bei Bedarf ausgegeben wird. Mit statischen Methoden können nicht nur mathematische Funktionen implementiert werden. Bereits verwendetete Beispiele sind die <code>main()</code>-Methode, mit der jedes Java-Programm gestartet wird, sowie die Methode zur Bildschirmausgabe <code>System.out.println()</code>."
      },
      {
        "type": "TEXT",
        "content": "Der gesamte Code einer Datei wird als Modul bezeichnet. Da in Java jede Klasse in einer eigenständigen Datei steht und mit statischen Methoden auf andere Klassen (Dateien) zugegriffen werden kann, eignet sich dieses Konzept besonders gut, um Programme im Stil der modularen Programmierung zu erstellen."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Statische Methoden definieren"
      },
      {
        "type": "TEXT",
        "content": "Der primäre Zweck von statischen Methoden ist die Implementierung von Funktionen. Liegen Methoden und Methodenaufruf in unterschiedlichen Klassen, wird die Methode mit <code>Klasse.Methode()</code> aufgerufen (Listing 4, Zeile 12: <code>AusgabeArray.ausgabe(a)</code>)."
      },
      {
        "type": "TEXT",
        "content": "Der Klassenname muss immer groß geschrieben werden. So ist erkennbar, dass es sich um eine Klasse mit einer statischen Methode handelt und nicht um einen Objektnamen (dazu später mehr). Liegt die Methode in der gleichen Klasse wie der Methodenaufruf, kann der Klassenname weggelassen werden (Listing 4, Zeile 13: <code>tausch(a,1,2)</code>)."
      },
      {
        "type": "TEXT",
        "content": "Namenskonvention: Bezeichner von Methoden (Name der Methode) beginnen immer mit einem Kleinbuchstaben, jedes weitere Wort mit einem Großbuchstaben (lowerCamelCase). Statische Methoden bestehen mindestens aus dem Modifizierer <code>static</code>, einem Rückgabetyp, einer Signatur gefolgt vom Methodenrumpf, der durch geschweifte Klammern eingegrenzt wird."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5ef94b7b4ec54c25305a508e"
      },
      {
        "type": "TEXT",
        "content": "Statische Methoden können auch mehrere Argumente übernehmen. Diese müssen nicht zwingend vom gleichen Typ sein. Der Methodenrumpf definiert, was die Methode tun soll."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Rückgabewerte"
      },
      {
        "type": "TEXT",
        "content": "Soll eine Methode einen Wert an den Methodenaufruf zurückliefern, muss im Methodenrumpf eine <code>return</code>-Anweisung mit dem zurückliefernden Wert (Listing 4, Zeile 39) und im Methodenkopf der Rückgabetyp dieses Wertes (Listing 4, Zeile 32) stehen. Soll die Methode keinen Wert an den Methodenaufruf zurückliefern, gibt es im Methodenrumpf keine <code>return</code>-Anweisung. Im Methodenkopf steht statt des Rückgabetyps das Schlüsselwort <code>void</code> (Listing 4, Zeile 26)."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Gültigkeitsbereich von Variablen - Scope"
      },
      {
        "type": "TEXT",
        "content": "<strong>Klassenvariablen (global)</strong>: gelten innerhalb der gesamtem Klasse. Sie werden mit <code>static Typ Variable;</code> deklariert (zB <code>static int c = 50;</code> siehe Listing 4, Zeile 2)."
      },
      {
        "type": "TEXT",
        "content": "<strong>Lokale Variablen</strong>: Variablen gelten nur innerhalb des Blocks, in dem sie deklariert worden sind. Dieser Block kann eine Methode aber auch eine Schleife sein (siehe zB Listing 4, Zeile 7 und Zeile 20)."
      },
      {
        "type": "HINT",
        "content": "Besitzen Klassenvariable und lokale Variable den gleichen Bezeichner, ist innerhalb der Methode nur die lokale Variable sichtbar und zugreifbar (Listing 4, Zeile 2, 7 und 20)."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Methoden mit Parameter"
      },
      {
        "type": "TEXT",
        "content": "Methoden können auf zwei Arten Parameter übergeben werden."
      },
      {
        "type": "TEXT",
        "content": "<strong>call-by-value (Wertaufruf)</strong>: Ein Wert wird beim Methodenaufruf übergeben (zB bei primitiven Datentypen). Nimmt eine Methode Änderungen an den Argumenten vor, sind diese im methodenaufrufenden Programm nicht sichtbar. Bei Call-by-value-Methoden-aufrufen wird also eine Kopie vom Wert des Parameters und nicht der Wert selbst als Parameter übergeben."
      },
      {
        "type": "TEXT",
        "content": "<strong>call-by-reference (Referenzaufruf)</strong>: Eine Referenz wird beim Methodenaufruf übergeben (zB bei der Übergabe von Arrays). Nimmt eine Methode Änderungen an den Argumenten vor, sind diese im methodenaufrufenden Programm sichtbar. Ein Rückgabewert ist oft nicht notwendig."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Modifizierer-Attribute"
      },
      {
        "type": "TEXT",
        "content": "Java stellt verschiedene Modifizierer zur Verfügung. Der Zugriffsmodifizierer legt die Sichtbarkeit der Methode fest. Die folgenden Arten gibt es:"
      },
      {
        "type": "TABLE",
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
        "type": "TEXT",
        "content": "Da es zu diesem Zeitpunkt sinnvoll ist, alle Methoden sichtbar zu machen, d. h. allen anderen Programmen zur Verfügung zu stellen, sollten statische Methoden mit dem Modifizierer <code>public</code> deklariert werden."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Überladen von Methoden"
      },
      {
        "type": "TEXT",
        "content": "Statische Methoden werden nicht am Namen sondern anhand ihrer Signatur identifiziert. Dadurch ist es möglich, für verschiedene Methoden, die genügend Gemeinsamkeiten aufweisen, den gleichen Namen zu vergeben. Dies ist zum Beispiel sinnvoll, wenn Methoden die gleichen Operationen auf unterschiedliche Parameter durchführen (Listing 1 und 2). Statische Methoden mit gleichem Namen und unterschiedlichen Parametern werden als überladen (engl. \"overloading\") bezeichnet."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "// Listing 1: Unterschiedliche Argumenttypen\npublic static int max(int a, int b) { ... }\npublic static int max(double a, double b) { ... }\n\n// Listing 2: Unterschiedliche Anzahl an Argumentvariablen\npublic static String copyValueOf(char[] data) { ... }\npublic static String copyValueOf(char[] data, int offset, int count) { ... }"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Variable Argument-Anzahl"
      },
      {
        "type": "TEXT",
        "content": "Die Methoden im Listing 1 sind auf zwei Argumente festgelegt. Folgen dem letzten Argumenttyp statt einer Argumentvariable drei Punkte (ohne Leerzeichen), so ist die Anzahl an Argumenten von diesem Argumenttyp beliebig. Um einen eindeutigen Methodenaufruf zu gewährleisten, muss das variable Argument (<code>varargs</code>, kurz für variable length argument lists) immer an letzter Stelle in der Parameterliste stehen."
      },
      {
        "type": "TEXT",
        "content": "Das variable Argument wird intern als Array übergeben und in der Methode auch genauso angesprochen. Listing 3 zeigt die variable Argumentaufnahme mit mindestens zwei Argumenten für die Methode max(). Eine vollständige Methode wird im Listing 4, Zeile 20 gezeigt."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "// Listing 3: Methode mit variabler Argument-Anzahl\npublic static int max(int a, int... werte) { ... }\n\n// Listing 4: Methodenaufruf\npublic class JavaApplication1 {\n   static int c = 50; // eine völlig überflüssige globale Variable\n\n   public static void main(String[] args) {\n      int[] a = { 3, 2, 7, 5, 1, 4, 6 };\n      double[] b = { 3.3, 2.2, 7.7, 5.5, 1.1, 4.4, 6.6 };\n      int c = 42;\n\n      int summe = sume(c,1,c,2); // summe = 87\n      System.out.println('c ist immer noch ' + c + '.'); // c = 42\n      System.out.println('Die Summe ist aber ' + summe + ',';\n      AusgabeArray.ausgabe(a); // Methodenaufruf aus anderer Klasse\n      tausch(a, 1, 2); // Methodenaufruf\n      AusgabeArray.ausgabe(a);\n      System.out.println('Das höchstwertige Element im Array ist ' + max(a));\n      AusgabeArray.ausgabe(b);\n   }\n\n   public static int summe(int c, int... array) {\n      for (int i = 0; i < array.length; i++) {\n         c = c + array[i];\n      }\n      return c; // c = 87\n   }\n\n   public static void tausch(int[] a, int i, int j) {\n      int temp = a[i];\n      a[i] = a[j];\n      a[j] = temp;\n   }\n\n   public static int max(int[] a) {\n      int max = a[0];\n      for (int i = 1; i < a.length; i++) {\n         if (a[i] > max) {\n            max = a[i];\n         }\n      }\n      return max;\n   }\n}\n\n// Listing 5: Überladung der Methode ausgabe()\npublic class AusgabeArray {\n   public static void ausgabe(int array[]) {\n      for (int i = 0; i < array.length; i++) {\n         System.out.print(array[i] + ' ');\n      }\n      System.out.print(\"\\n\");\n   }\n\n   public static void ausgabe(double array[]) {\n      for (int i = 0; i < array.length; i++) {\n         System.out.print(array[i] + \" \");\n      }\n      System.out.print(\"\\n\");\n   }\n}"
      }
    ]
  },
  {
    "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/eulersche_phi_funktion",
    "_id": "5f429cdf165d0ab470bc57e7",
    "topicId": "6056629db0623029d4a68f6b",
    "title": "Eulersche Phi-Funktion",
    "description": "Thema vom 02.03.2020",
    "subject": "lf-6",
    "type": "article",
    "lessonDate": "2020-03-02",
    "lastUpdate": "2020-09-03",
    "schoolWeek": "9",
    "elements": [
      {
        "type": "TEXT",
        "content": "Die eulersche Phi-Funktion (φ) ist eine zahlentheoretische Funktion. Sie ordnet jeder natürlichen Zahl n die Anzahl der natürlichen Zahlen a von 1 bis n zu, die zu n teilerfremd sind, für die also ggT(a,n) = 1 ist."
      },
      {
        "type": "HINT",
        "content": "Wenn zwei zahlen nur den gemeinsamen Teiler 1 besitzen, so sind sie teilerfremd."
      },
      {
        "type": "TEXT",
        "content": "Beispiele: <br/> → Die Zahl 6 ist zu zwei Zahlen zwischen 1 und 6 teilerfremd (1 und 5), also ist φ(6) = 2 <br/> → Die Zahl 13 ist als Primzahl zu den zwölf Zahlen von 1 bis 12 teilerfremd, also ist φ(13) = 12 <br/> → Die ersten 20 Werte der φ-Fuktion lauten"
      },
      {
        "type": "TABLE",
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
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Funktionsaufruf"
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "public class Main { \n    void main(String[] args) { \n        System.out.println(phi(11)); \n    } \n}"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Funktion: Größter gemeinsamer Teiler"
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "public static int ggt(int x, int y) {\n    while ( y != 0 ) {\n        int z = x % y;\n        x = y;\n        y = z;\n    }\n    return x;\n }"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Funktion: phi Funktion"
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "public class Main { \n    void main(String[] args) { \n        System.out.println(phi(11)); \n    } \n}"
      }
    ]
  },
  {
    "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/aktienkurs_berechnung_php",
    "_id": "5f429cf5165d0ab470bc57e8",
    "topicId": "6056629db0623029d4a68f6b",
    "title": "Aktienkurs Berechnung (in PHP)",
    "description": "Aufgaben vom 24.03.2020",
    "subject": "lf-6",
    "type": "tasks",
    "lessonDate": "2020-03-24",
    "lastUpdate": "2021-07-29",
    "schoolWeek": "10",
    "elements": [
      {
        "type": "TITLE",
        "content": "Lösungsansatz"
      },
      {
        "type": "TEXT",
        "content": "Ermitteln Sie für den gegebenen Zeitraum Ankaufs- und Verkaufstage der Aktie, um den maximalen Gewinn zu erlösen."
      },
      {
        "type": "TABLE",
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
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Aufgabe 1"
      },
      {
        "type": "TEXT",
        "content": "→ Entwickeln Sie einen Algorithmus, der das Problem <strong>iterativ</strong> löst. <br/> → Messen sie die Laufzeit des Algorithmus mit Hilfe der Methode <code>System.nanoTime()</code>."
      },
      {
        "type": "TEXT",
        "content": "1. Erzeugen Sie alle Teilfolgen der obigen Folge. <br/> 2. Berechnen Sie zu jeder Teilfolge die Summe. <br/> 3. Geben Sie die größte Summe als Ergebnis aus."
      },
      {
        "type": "CODE",
        "language": "php",
        "content": "<?php\n\n$history = [4,2, -1, -3, 4, -1, 7, -2, -2, 3, 1,\n            -8, 2, -1, 4, -5, 2, 1, 3, 2, -3,\n            5, -7, 2, -3, 2, -1, -1, 2, 1];\n\nfunction getMaxDifference($differences) {\n   $max = 0;\n   $result = [];\n\n   for ($i = 0; $i < count($differences); $i++) {\n      if ($max < $differences[$i][$j] {\n\n         $max = $differences[$i][$j];\n         $result = [\n            'buy' => 'day ' . ($i + 1),\n            'sell' => 'day ' . ($j + 1)\n         ];\n      }\n   }\n   return $result;\n}\n\necho '<h1>Aufgabe 1</h1>';\n\n$differences = [];\n$startTime = microtime(true);\n\nfor ($i = 0; $i <count($history); $i++) {\n   $current = 0;\n\n   for ($j = $i; $j <count($history); $j++) {\n      $current += $history[$j];\n      $differences[$i][$j] = $current;\n   }\n}\n\necho (microtime(true) - $startTime) * 1000;\n\n/*\necho '<pre>';\nvar_dump($differences);\necho '</pre>';\n*/\n\necho '<pre>';\nvar_dump(getMaxDifference($differences));\necho '</pre>';\n\n?>"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Aufgabe 2"
      },
      {
        "type": "TEXT",
        "content": "→ Implementieren Sie zum obigen Problem einen <strong>rekursiven</strong> Algorithmus, der nach dem Prinzip Divide and Conquer (Teile und Herrsche) arbeitet. <br/> → Messen Sie auch hier wieder die Laufzeit beider Algorithmen und vergleichen Sie die Werte."
      },
      {
        "type": "CODE",
        "language": "php",
        "content": "<?php\n\n$history = [4,2, -1, -3, 4, -1, 7, -2, -2, 3, 1,\n            -8, 2, -1, 4, -5, 2, 1, 3, 2, -3,\n            5, -7, 2, -3, 2, -1, -1, 2, 1];\n\n// Funktion aus Aufgabe 1\nfunction getMaxDifference($differences) {\n   $max = 0;\n   $result = [];\n\n   for ($i = 0; $i < count($differences); $i++) {\n      if ($max < $differences[$i][$j] {\n\n         $max = $differences[$i][$j];\n         $result = [\n            'buy' => 'day ' . ($i + 1),\n            'sell' => 'day ' . ($j + 1)\n         ];\n      }\n   }\n   return $result;\n}\n\necho '<h1>Aufgabe 2</h1>';\n\n$differences = [];\n$startTime = microtime(true);\n\nfillDifferencesRecursive($history, $differences);\n\necho (microtime(true) - $startTime) * 1000;\n\n/*\necho '<pre>';\nvar_dump($differences);\necho '</pre>';\n*/\n\nfunction fillDifferencesRecursive($history, &$differences, $currentDifference = 0, $currentStart = 0, $currentEnd = 0) {\n\n   if ($currentStart>= count($history)) {\n      return;\n   }\n\n   if ($currentEnd>= count($history)) {\n      fillDifferencesRecursive($history, $differences, 0, $currentStart + 1, $currentStart + 1);\n      return;\n   }\n\n   $currentDifference += $history[$currentEnd];\n   $differences[$currentStart][$currentEnd] = $currentDifference;\n\n   fillDifferencesRecursive($history, $differences, $currentDifference, $currentStart, $currentEnd + 1);\n}\n\necho '<pre>';\nvar_dump(getMaxDifference($differences));\necho '</pre>';\n\n?>"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Aufgabe 3"
      },
      {
        "type": "TEXT",
        "content": "→ Schreiben Sie ein Programm, dass den maximalen Gewinnerlös (maximale Summe einer Teilfolge) effizienter löst. <br/> → Messen Sie die Laufzeit Ihres Algorithmus."
      },
      {
        "type": "CODE",
        "language": "php",
        "content": "<?php\n\n$history = [4,2, -1, -3, 4, -1, 7, -2, -2, 3, 1,\n            -8, 2, -1, 4, -5, 2, 1, 3, 2, -3,\n            5, -7, 2, -3, 2, -1, -1, 2, 1];\n\necho '<h1>Aufgabe 3</h1>';\n\n$startTime = microtime(true);\n$maximum = 0;\n$maxRight = 0;\n\nfor ($i = 0; $i <count($history); $i++) {\n\n   $tmpMaxRight = $maxRight + $history[$i];\n\n   if ($tmpMaxRight> 0) {\n      $maxRight = $tmpMaxRight;\n   }\n\n   if ($maxRight> $maximum) {\n      $maximum = $maxRight;\n   }\n}\n\necho (microtime(true) - $startTime) * 1000;\n\necho '<br/>';\necho $maximum;\n\n?>"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "LIST",
        "content": "Quellen:",
        "list": [
          "<a href='https://bio.informatik.uni-jena.de/wp/wp-content/uploads/2019/11/MaxPartSums.pdf'>https://bio.informatik.uni-jena.de/wp/wp-content/uploads/2019/11/MaxPartSums.pdf</a>"
        ]
      }
    ]
  },
  {
    "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/aktienkurs_berechnung_javascript",
    "title": "Aktienkurs Berechnung (in JavaScript)",
    "description": "Aufgaben vom 24.03.2020",
    "subject": "lf-6",
    "type": "tasks",
    "lessonDate": "2020-03-24",
    "lastUpdate": "2021-01-06",
    "schoolWeek": "10",
    "elements": [
      {
        "type": "TITLE",
        "content": "Lösungsansatz"
      },
      {
        "type": "TEXT",
        "content": "Ermitteln Sie für den gegebenen Zeitraum Ankaufs- und Verkaufstage der Aktie, um den maximalen Gewinn zu erlösen."
      },
      {
        "type": "TABLE",
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
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Aufgabe 1"
      },
      {
        "type": "TEXT",
        "content": "→ Entwickeln Sie einen Algorithmus, der das Problem <strong>iterativ</strong> löst. <br/> → Messen sie die Laufzeit des Algorithmus mit Hilfe der Methode <code>System.nanoTime()</code>."
      },
      {
        "type": "TEXT",
        "content": "1. Erzeugen Sie alle Teilfolgen der obigen Folge. <br/> 2. Berechnen Sie zu jeder Teilfolge die Summe. <br/> 3. Geben Sie die größte Summe als Ergebnis aus."
      },
      {
        "type": "CODE",
        "language": "javascript",
        "content": "let start = new Date();\nlet history = [\n   4, 2, -1, -3, 4, -1, 7, -2, -2, 3,\n   1, -8, 2, -1, 4, -5, 2, 1, 3, 2,\n   -3, 5, -7, 2, -3, 2, -1, -1, 2, 1\n];\n\nfunction calculate() {\n   let buyInDays = [], buyOutDays = [], profits = [];\n   let recommendBuyInDay, profit;\n   let recommendBuyOutDay = 1;\n\n   for (let buyInDay = 0; buyInDay < history.length; buyInDay++) {\n      profit = 0;\n\n      for (let buyOutDay = buyInDay + 1; buyOutDay < history.length; buyOutDay++) {\n         profit = profit + history[buyOutDay];\n         profits.push(profit);\n         buyInDays.push((buyInDay + 1));\n         buyOutDays.push((buyOutDay + 1));\n      }\n   }\n\n   let highestProfit = profits[0];\n   for (let i = 0; i < profits.length; i++) {\n      if (profits[i] > highestProfit) {\n         highestProfit = profits[i];\n         recommendBuyInDay = buyInDays[i];\n         recommendBuyOutDay = buyOutDays[i];\n      }\n   }\n\n   console.log(\"Recommendend Buy-In Day: \" + recommendBuyInDay + \"; Recommended Buy-Out Day: \" + recommendBuyOutDay + \"; Profit: \" + highestProfit);\n}\n\ncalculate();\nconsole.log((new Date() - start) / 1000 + \" seconds runtime\");"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Aufgabe 2"
      },
      {
        "type": "TEXT",
        "content": "→ Implementieren Sie zum obigen Problem einen <strong>rekursiven</strong> Algorithmus, der nach dem Prinzip Divide and Conquer (Teile und Herrsche) arbeitet. <br/> → Messen Sie auch hier wieder die Laufzeit beider Algorithmen und vergleichen Sie die Werte."
      },
      {
        "type": "CODE",
        "language": "javascript",
        "content": "let start = new Date();\nlet history = [\n   4, 2, -1, -3, 4, -1, 7, -2, -2, 3,\n   1, -8, 2, -1, 4, -5, 2, 1, 3, 2,\n   -3, 5, -7, 2, -3, 2, -1, -1, 2, 1\n];\n\nfunction calculateAllOptions(start, end) {\n   let profit = 0;\n   for (let i = start, i < end; i++) {\n      profit = profit + history[i];\n   }\n   return profit;\n}\n\nfunction calculate(start, end) {\n   const profit1 = calculateAllOptions(start, end) {\n      \n\n      if (start >= end - 1) {\n         return [profit1, start, end];\n      }\n\n      const result2 = calculate(start + 1, end);\n      const result3 = calculate(start, end - 1);\n\n      const profit2 = result2[0];\n      const profit3 = result3[0];\n\n      if (profit1 > profit2) {\n         if (profit1 > profit3) {\n            return [profit1, start, end];\n         }\n         return result3;\n      }\n\n      if (profit2 > profit3) return result2;\n\n      return result3;\n   }   \n\n   console.log(calculate(1, 30));\n   console.log((new Date() - startDate) / 1000 + \" seconds runtime\");\n}"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Aufgabe 3"
      },
      {
        "type": "TEXT",
        "content": "→ Schreiben Sie ein Programm, dass den maximalen Gewinnerlös (maximale Summe einer Teilfolge) effizienter löst. <br/> → Messen Sie die Laufzeit Ihres Algorithmus."
      },
      {
        "type": "CODE",
        "language": "javascript",
        "content": "let start = new Date();\nlet history = [\n   4, 2, -1, -3, 4, -1, 7, -2, -2, 3,\n   1, -8, 2, -1, 4, -5, 2, 1, 3, 2,\n   -3, 5, -7, 2, -3, 2, -1, -1, 2, 1\n];\nlet profit, recommendBuyInDay, recommendBuyOutDay, highestProfit = 0;\n\nfunction calculate() {\n   for (let buyInDay = 0; buyInDay <history.length; buyInDay++) {\n      profit = 0;\n\n      for (let buyOutDay = buyInDay + 1; buyOutDay < history.length; buyOutDay++) {\n         profit = profit + history[buyOutDay];\n\n         if (profit > highestProfit) {\n            highestProfit = profit;\n            recommendBuyInDay = buyInDay + 1;\n            recommendBuyOutDay = buyOutDay + 1;\n         }\n      }\n   }\n\n   console.log(\"Recommended Buy-In Day: \" + recommendBuyInDay + \"; Recommended Buy-Out Day: \" + recommendBuyOutDay + \"; Profit: \" + highestProfit);\n}\n\ncalculate();\nconsole.log((new Date() - start) / 1000 + \" seconds runtime\");"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "LIST",
        "content": "Quellen:",
        "list": [
          "<a href='https://bio.informatik.uni-jena.de/wp/wp-content/uploads/2019/11/MaxPartSums.pdf'>https://bio.informatik.uni-jena.de/wp/wp-content/uploads/2019/11/MaxPartSums.pdf</a>"
        ]
      }
    ]
  },
  {
    "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/eigene_java_bibliothek_bauen_myarray",
    "title": "Eigene Java Bibliothek bauen - MyArray",
    "description": "Aufgaben vom 24.03.2020",
    "subject": "lf-6",
    "type": "tasks",
    "lessonDate": "2020-06-10",
    "lastUpdate": "2020-10-16",
    "schoolWeek": "13",
    "elements": [
      {
        "type": "TITLE",
        "content": "Aufgabe"
      },
      {
        "type": "TEXT",
        "content": "Schreiben Sie eine Java-Bibliothek MyArray mit API (Java-Doc) für ein eindimensionales Array. Verwenden Sie keine fertigen Methoden. Da wo es sinnvoll ist, sollen Methoden überladen werden, d. h. für den Datentyp double, char, char und String gelten. Wenn möglich, sollen in die Methoden Sicherheitsfeatures eingebaut werden."
      },
      {
        "type": "HINT",
        "content": "Beispiel: Für den Benutzer muss eine Fehlermeldung erscheinen, wenn ein Element an 10ter Stelle eines 8 elementigen Arrays eingefügt wird."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Beispieldaten"
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "int[] intArray = new int[]{1, 3, 6, 2};\ndouble[] doubleArray = new double[]{1.246, 1.968, 1.312, 1.567, 1.634};\nchar[] charArray = new char[]{'a', 'b', 'd', 'k', 'c', 'f'};\nString[] stringArray = new String[]{\"Berlin\", \"Rio\", \"Canberra\", \"Buenos Aires\", \"Paris\", \"Prag\", \"Amsterdam\"};\n\n// Und für Aufgabe 15, 24 & 27 angepasste Arrays"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Die Java-Bibliothek soll folgende Funktionen bereitstellen"
      },
      {
        "type": "TEXT",
        "content": "<span class='ddu-list-number'>1</span> Ausgabe der Länge (die Objektvariable length darf verwendet werden): <code>myLength()</code>"
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "public static int myLength(int[] array) {\n   if (array.length == 0) throw new IllegalArgumentException();\n   return array.length;\n}\n\npublic static int myLength(double[] array) {\n   if (array.length == 0) throw new IllegalArgumentException();\n   return array.length;\n}\n\npublic static int myLength(char[] array) {\n   if (array.length == 0) throw new IllegalArgumentException();\n   return array.length;\n}\n\npublic static int myLength(String[] array) {\n   if (array.length == 0) throw new IllegalArgumentException();\n   return array.length;\n}\n\nSystem.out.println(\"Length of intArray: \" + MyArray.myLength(intArray));\n// ...\n\n// Length of intArray: 4\n// Length of doubleArray: 5\n// Length of charArray: 6\n// Length of stringArray: 7"
      },
      {
        "type": "TEXT",
        "content": "<span class='ddu-list-number'>2</span> Ausgabe der Länge des längsten Elements: <code>maxElement()</code> <br/> Die overload functions müssen dem Typ entsprechend angepasst werden."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "public static int maxElement(int[] array) {\n   int index = 0, elementLength = 0;\n   if (array.length == 0) throw new IllegalArgumentException();\n   for (int i = 0; i < array.length; i++) {\n      if (array[i] > elementLength) {\n         index = i;\n         elementLength = array[i];\n      }\n   }\n   return array[index];\n}\n\n// ... overload functions for double, char & string"
      },
      {
        "type": "TEXT",
        "content": "<span class='ddu-list-number'>3</span> Ausgabe des kürzesten Elements: <code>minElement()</code> <br/> Die overload functions müssen dem Typ entsprechend angepasst werden."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "public static int minElement(int[] array) {\n   int index = 0, elementLength = 0;\n   if (array.length == 0) throw new IllegalArgumentException();\n   for (int i = 0; i < array.length; i++) {\n      if (array[i] < elementLength) {\n         index = i;\n         elementLength = array[i];\n      }\n   }\n   return array[index];\n}\n\n// ... overload functions for double, char & string"
      },
      {
        "type": "TEXT",
        "content": "<span class='ddu-list-number'>4</span> Ausgabe aller Elemente des Arrays: <code>printArray()</code> <br/> Die overload functions müssen dem Typ entsprechend angepasst werden."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "public static String printArray(int[] array) {\n   if (array.length == 0) throw new IllegalArgumentException();\n   return Arrays.toString(array);\n}\n\n// ... overload functions for double, char & string"
      },
      {
        "type": "TEXT",
        "content": "<span class='ddu-list-number'>5</span> Konvertieren aller Elemente in Großbuchstaben: <code>uppercase()</code> <br/> Die overload functions müssen dem Typ entsprechend angepasst werden."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "public static String[] uppercase(String[] array) {\n   String[] convertedArray = new String[array.length];\n   if (array.length == 0) throw new IllegalArgumentException();\n   for (int i = 0; i < array.length; i++) {\n      convertedArray[i] = array[i].toUpperCase();\n   }\n   return convertedArray;\n}"
      },
      {
        "type": "TEXT",
        "content": "<span class='ddu-list-number'>6</span> Konvertieren aller Elemente in Kleinbuchstaben: <code>lowercase()</code>"
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "public static String[] lowercase(String[] array) {\n   String[] convertedArray = new String[array.length];\n   if (array.length == 0) throw new IllegalArgumentException();\n   for (int i = 0; i < array.length; i++) {\n      convertedArray[i] = array[i].toLowerCase();\n   }\n   return convertedArray;\n}"
      },
      {
        "type": "TEXT",
        "content": "<span class='ddu-list-number'>7</span> Invertieren aller Elemente (Großbuchstaben in Kleinbuchstaben und umgekehrt): <code>inverted()</code>"
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "public static String[] inverted(String[] array) {\n   String[] convertedArray = new String[array.length];\n   if (array.length == 0) throw new IllegalArgumentException();\n   for (int i = 0; i < array.length; i++) {\n      char[] chars = array[i].toCharArray();\n      for (int charIndex = 0; charIndex < chars.length; charIndex++) {\n         char c = chars[charIndex];\n         if (Character.isUpperCase(c)) {\n            chars[charIndex] = Character.toLowerCase(c);\n         } else if (Character.isLowerCase(c)) {\n            chars[charIndex] = Character.toUpperCase(c);\n         }\n      }\n      convertedArray[i] = new String(chars);\n   }\n   return convertedArray;\n}"
      },
      {
        "type": "TEXT",
        "content": "<span class='ddu-list-number'>8</span> Aufsummieren aller Elemente im Array: <code>sum()</code>"
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "public static int sum(int[] array) {\n   int sum = 0;\n   if (array.length == 0) throw new IllegalArgumentException();\n   for (int value : array) {\n      sum += value;\n   }\n   return sum;\n}\n\n// ... overload function for double"
      },
      {
        "type": "TEXT",
        "content": "<span class='ddu-list-number'>9</span> Kaufmännisches ganzzahliges Runden aller Elemente im Array: <code>round()</code>"
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "public static double[] round(double[] array) {\n   double[] convertedArray = new double[array.length];\n   if (array.length == 0) throw new IllegalArgumentException();\n   for (int i = 0; i < array.length; i++) {\n      convertedArray[i] = (double) Math.round(array[i] * 100) / 100;\n   }\n   return convertedArray;\n}"
      },
      {
        "type": "TEXT",
        "content": "<span class='ddu-list-number'>10</span> Rücksetzen aller Elemente im Array auf den default-Wert: <code>initialAll()</code>"
      },
      {
        "type": "TEXT",
        "content": "<span class='ddu-list-number'>11</span> Rücksetzen eines bestimmten Elements im Array auf den default-Wert (rücksetzen aller vorkommender Elemente von dem übergebenden Element): <code>initial()</code>"
      },
      {
        "type": "TEXT",
        "content": "<span class='ddu-list-number'>12</span> Rücksetzen eines bestimmten Elements im Array auf den default-Wert (Übergabe des Arrays und der Position): <code>initial()</code>"
      },
      {
        "type": "TEXT",
        "content": "<span class='ddu-list-number'>13</span> Suchen nach einem bestimmten Element im Array (true oder false zurückgeben): <code>search()</code> <br/> Die overload functions müssen dem Typ entsprechend angepasst werden."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "public static boolean search(int value, int[] array) {\n   if (array.length == 0) throw new IllegalArgumentException();\n   for (int item : array) {\n      if (item == value) return true;\n   }\n   return false;\n}\n\n// ... overload functions for double, char & string"
      },
      {
        "type": "TEXT",
        "content": "<span class='ddu-list-number'>14</span> Suchen nach einem bestimmten Element im Array (Position zurückgeben): <code>searchPos()</code> <br/> Die overload functions müssen dem Typ entsprechend angepasst werden."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "public static int searchPos(int value, int[] array) {\n   if (array.length == 0) throw new IllegalArgumentException();\n   int index = -1;\n   for (int i = 0; i < array.length; i++) {\n      if (array[i] == value) index = i;\n   }\n   return index;\n}\n\n// ... overload functions for double, char & string"
      },
      {
        "type": "TEXT",
        "content": "<span class='ddu-list-number'>15</span> Suchen nach einem bestimmten Element im Array und die Anzahl der Vorkommnisse zurückgegeben: <code>count()</code> <br/> Die overload functions müssen dem Typ entsprechend angepasst werden."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "public static int count(int value, int[] array) {\n   if (array.length == 0) throw new IllegalArgumentException();\n   int occurrences = 0;\n   for (int item : array) {\n      if (item == value) occurrences += 1;\n   }\n   return occurrences;\n}\n\n// ... overload functions for double, char & string"
      },
      {
        "type": "TEXT",
        "content": "<span class='ddu-list-number'>16</span> Alle Elemente im Array auf- und absteigend sortieren (als Parameter sollen ASC und DESC übergeben werden): <code>sort()</code> <br/> Die overload functions müssen dem Typ entsprechend angepasst werden."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "enum sort { ASC, DESC }\npublic static Integer[] sort(sort direction, int[] array) {\n   Integer[] convertedArray = Arrays.stream(array).boxed().toArray(Integer[]::new);\n   if (array.length == 0) throw new IllegalArgumentException();\n   if (direction == sort.ASC) {\n      Arrays.sort(convertedArray);\n   } else if (direction == sort.DESC) {\n      Arrays.sort(convertedArray, Collections.reverseOrder());\n   }\n   return convertedArray;\n}\n\n// ... overload functions for double, char & String"
      },
      {
        "type": "TEXT",
        "content": "<span class='ddu-list-number'>17</span> Ein bestimmtes Element im Array verändern (überschreiben, modifizieren): <code>modify()</code> <br/> Die overload functions müssen dem Typ entsprechend angepasst werden."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "public static int[] modify(int oldVal, int newVal, int[] array) {\n   int[] modifiedArray = array.clone();\n   boolean valueModified = false;\n   if (array.length == 0) throw new IllegalArgumentException(\"Array is empty\");\n   for (int i = 0; i < array.length; i++) {\n      if (modifiedArray[i] == oldVal) {\n         modifiedArray[i] = newVal;\n         valueModified = true;\n      }\n   }\n   if (!valueModified) throw new IllegalArgumentException(\"Value to modify not found\");\n   return modifiedArray;\n}\n\n// ... overload functions for double, char & string"
      },
      {
        "type": "TEXT",
        "content": "<span class='ddu-list-number'>18</span> Ein Element an letzter Stelle im Array hinzufügen: <code>addLastElement()</code> <br/> Die overload functions müssen dem Typ entsprechend angepasst werden."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "public static int[] addLastElement(int element, int[] array) {\n   int[] modifiedArray = new int[array.length + 1];\n   if (array.length == 0) throw new IllegalArgumentException(\"Array is empty\");\n   for (int i = 0; i < array.length; i++) {\n      modifiedArray[i] = array[i];\n   }\n   modifiedArray[modifiedArray.length-1] = element;\n   return modifiedArray;\n}\n\n// ... overload functions for double, char & string"
      },
      {
        "type": "TEXT",
        "content": "<span class='ddu-list-number'>19</span> Ein Element an beliebiger Stelle im Array hinzufügen: <code>addElement()</code> <br/> Die overload functions müssen dem Typ entsprechend angepasst werden."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "public static int[] addElement(int element, int[] array) {\n   int[] modifiedArray = new int[array.length + 1];\n   if (array.length == 0) throw new IllegalArgumentException(\"Array is empty\");\n   for (int i = 0; i < array.length; i++) {\n      modifiedArray[i+1] = array[i];\n   }\n   modifiedArray[0] = element;\n   return modifiedArray;\n}\n\n// ... overload functions for double, char & string"
      },
      {
        "type": "TEXT",
        "content": "<span class='ddu-list-number'>20</span> Eine Kopie des Arrays erstellen (eine neue Referenz auf das selbe Array): <code>copy()</code>"
      },
      {
        "type": "TEXT",
        "content": "<span class='ddu-list-number'>21</span> Eine “echte“ Kopie eines Arrays erstellen: <code>realCopy()</code> <br/> Die overload functions müssen dem Typ entsprechend angepasst werden."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "public static int[] realCopy(int[] array) {\n   return array.clone();\n}\n\n// ... overload functions for double, char & string"
      },
      {
        "type": "TEXT",
        "content": "<span class='ddu-list-number'>22</span> Die Reihenfolge der Elemente in einem Array umdrehen: <code>reverse()</code> <br/> Die overload functions müssen dem Typ entsprechend angepasst werden."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "public static int[] reverse(int[] array) {\n   int[] modifiedArray = array.clone();\n   int index = array.length;\n   for (int value : array) {\n      modifiedArray[index - 1] = value;\n      index -= 1;\n   }\n   return modifiedArray;\n}\n\n// ... overload functions for double, char & string"
      },
      {
        "type": "TEXT",
        "content": "<span class='ddu-list-number'>23</span> Das am häufigsten vorkommende (auftretende) Element im Array ausgeben: <code>mostFrequentlyElement()</code> <br/> Die overload functions müssen dem Typ entsprechend angepasst werden."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "public static int mostFrequentlyElement(int[] array) {\n   int count = 0, tempCount;\n   int tempElement;\n   int popular = -1;\n   for (int value : array) {\n      tempElement = value;\n      tempCount = 1;\n      for (int index = 1; index < array.length; index++) {\n         if (tempElement == array[index]) tempCount++;\n      }\n      if (tempCount > count) {\n         popular = tempElement;\n         count = tempCount;\n      }\n   }\n   return popular;\n}\n\n// ... overload functions for double, char & string"
      },
      {
        "type": "TEXT",
        "content": "<span class='ddu-list-number'>24</span> Das am wenigsten vorkommende (auftretende) Element im Array ausgeben: <code>leastFrequentlyElement()</code> <br/> Die overload functions müssen dem Typ entsprechend angepasst werden."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "public static int leastFrequentlyElement(int[] array) {\n   Arrays.sort(array);\n   int minCount = array.length + 1, tempCount = 1;\n   int res = -1;\n\n   for (int i = 1; i < array.length; i++) {\n      if (array[i] == array[i - 1]) {\n         tempCount++;\n      } else {\n         if (tempCount < minCount) {\n            minCount = tempCount;\n            res = array[i - 1];\n         }\n         tempCount = 1;\n      }\n   }\n\n   if (tempCount < minCount) {\n      res = array[array.length - 1];\n   }\n   return res;\n}\n\n// ... overload functions for double, char & string"
      },
      {
        "type": "TEXT",
        "content": "<span class='ddu-list-number'>25</span> Das prozentuale (durchschnittliche) Vorkommen eines Elements im Array ausgeben: <code>frequenceOfElement()</code> <br/> Die overload functions müssen dem Typ entsprechend angepasst werden."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "public static double frequenceOfElement(int[] array, int element) {\n   double count = 0;\n   for (int item : array) {\n      if (item == element) count += 1;\n   }\n   return count / array.length;\n}\n\n// ... overload functions for double, char & string"
      },
      {
        "type": "TEXT",
        "content": "<span class='ddu-list-number'>26</span> Die Anzahl des am häufigsten vorkommende (auftretende) Element im Array ausgeben: <code>mostDuplicates()</code> <br/> Die overload functions müssen dem Typ entsprechend angepasst werden."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "public static int mostDuplicates(int[] array) {\n   int count = 0, tempCount;\n   int tempElement;\n   for (int value : array) {\n      tempElement = value;\n      tempCount = 0;\n      for (int index = 0; index < array.length; index++) {\n         if (tempElement == array[index]) tempCount++;\n      }\n      if (tempCount > count) {\n         count = tempCount;\n      }\n   }\n   return count;\n}\n\n// ... overload functions for double, char & string"
      },
      {
        "type": "TEXT",
        "content": "<span class='ddu-list-number'>27</span> Die Anzahl des am wenigsten vorkommende (auftretende) Element im Array ausgeben: <code>leastDuplicates()</code> <br/> Die overload functions müssen dem Typ entsprechend angepasst werden."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "public static int leastDuplicates(int[] array) {\n   Arrays.sort(array);\n   int minCount = array.length + 1, tempCount = 1;\n\n   for (int i = 1; i < array.length; i++) {\n      if (array[i] == array[i - 1]) {\n         tempCount++;\n      } else {\n         if (tempCount < minCount) {\n            minCount = tempCount;\n            }\n         tempCount = 1;\n      }\n   }\n   return minCount;\n}\n\n// ... overload functions for double, char & string"
      },
      {
        "type": "TEXT",
        "content": "<span class='ddu-list-number'>28</span> Umwandlung aller Elemente von integer zu double: <code>intToDouble()</code>"
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "public static double[] intToDouble(int[] array) {\n   double[] newArray = new double[array.length];\n   for (int i = 0; i < array.length; i++) {\n      double integer = array[i];\n      newArray[i] = integer;\n   }\n   return newArray;\n}\n\n// [1.0, 3.0, 6.0, 2.0]"
      },
      {
        "type": "TEXT",
        "content": "<span class='ddu-list-number'>29</span> Umwandlung aller Elemente von double zu integer: <code>doubleToInt()</code>"
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "public static int[] doubleToInt(double[] array) {\n   int[] newArray = new int[array.length];\n   for (int i = 0; i < array.length; i++) {\n      newArray[i] = (int) Math.round(array[i]);\n   }\n   return newArray;\n}\n\n// [1, 2, 1, 2, 2]"
      },
      {
        "type": "TEXT",
        "content": "<span class='ddu-list-number'>30</span> Ausgabe aller Elemente im Unicode: <code>unicode()</code>"
      },
      {
        "type": "CODE",
        "language": "java",
        "content": ""
      },
      {
        "type": "TEXT",
        "content": "<span class='ddu-list-number'>31</span> Teilen des Arrays an beliebiger Stelle, die Rückgabe ist ein neues Array mit zwei Array-Elementen: <code>divide()</code>"
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "public static int[][] divide(int[] array, int splitIndex) {\n   int[] firstArr = new int[splitIndex+1];\n   int[] secondArr = new int[(array.length-1) - splitIndex];\n   int[][] newArray = { firstArr, secondArr };\n\n   for (int i = 0; i < array.length; i++) {\n      if (i < firstArr.length) {\n         firstArr[i] = array[i];\n      } else {\n         secondArr[i - firstArr.length] = array[i];\n      }\n   }\n\n   return newArray;\n}\n\n// ... overload functions for double, char & string\n// Print: MyArray.subArray(stringArray, 1, 2)\n// [[Berlin, Rio, Canberra], [Buenos Aires, Paris, Prag, Amsterdam]]"
      },
      {
        "type": "TEXT",
        "content": "<span class='ddu-list-number'>32</span> Ein Sub-Array erstellen – die Elemente zwischen zwei ausgewählten Elementen inklusive der ausgewählten Elemente bilden ein neues Sub-Array: <code>subArray()</code>"
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "public static int[] subArray(int[] array, int firstIndex, int secondIndex) {\n   int newArrayLength = secondIndex - firstIndex + 1;\n   int[] newArray = new int[newArrayLength];\n   int newIndex = 0;\n\n   for (int i = 0; i < array.length; i++, newIndex++) {\n      if (i >= firstIndex && i <= secondIndex) {\n         newArray[newIndex - 1] = array[i];\n      }\n   }\n\n   return newArray;\n}\n\n// ... overload functions for double, char & string\n// Print: MyArray.subArray(stringArray, 1, 2)\n// [Rio, Canberra]"
      },
      {
        "type": "TEXT",
        "content": "<span class='ddu-list-number'>33</span> Zwei Arrays zusammenfügen / concatenate two arrays: <code>concatenateArrays()</code>"
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "public static int[] concatenateArrays(int[]... arrays) {\n   int length = 0;\n   for (int[] array: arrays) {\n      length += array.length;\n   }\n   int[] newArray = new int[length];\n   int index = 0;\n   for (int[] array : arrays) {\n      for (int element : array) {\n         newArray[index] = element;\n         index++;\n      }\n   }\n\n   return newArray;\n}\n\n// ... overload functions for double, char & string\n// Arrays: [1, 3, 6, 2], [1, 3, 6, 2, 1, 1], [1, 1, 1, 2, 2, 3, 5, 5, 5]\n// [1, 3, 6, 2, 1, 3, 6, 2, 1, 1, 1, 1, 1, 2, 2, 3, 5, 5, 5]"
      },
      {
        "type": "TEXT",
        "content": "<span class='ddu-list-number'>34</span> Array Elemente mischen / shuffle array elements"
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "public static int[] shuffleArray(int[] array) {\n   int n = array.length;\n   Random random = new Random();\n   random.nextInt();\n   for (int i = 0; i < n; i++) {\n      int change = i + random.nextInt(n - i);\n      int item = array[i];\n      array[i] = array[change];\n      array[change] = item;\n   }\n\n   return array;\n}\n\n// ... overload functions for double, char & string\n// charArray: ['a', 'b', 'd', 'k', 'c', 'f']\n// Print: MyArray.shuffleArray(charArray)\n// [k, b, f, d, c, a]"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TEXT",
        "content": "Die Bibliothek soll im Klasspath eingetragen werden."
      }
    ]
  },
  {
    "url": "kontrollstrukturen_datentypen_und_ausdruecke/test",
    "title": "Leistungskontrolle - Kontrollstrukturen, Datentypen & Ausdrücke",
    "description": "Kurztest vom 22.11.2019",
    "subject": "lf-6",
    "type": "test",
    "lessonDate": "2019-11-22",
    "lastUpdate": "2020-05-28",
    "schoolWeek": "5",
    "elements": [
      {
        "type": "TITLE",
        "content": "Aufgabe 1"
      },
      {
        "type": "LIST",
        "content": "Das Catering der Cafeteria des OSZ-Teltow gewährt beim Kauf von Schnitzelbaguettes",
        "list": [
          "bei Mindestabnahme von 3 Baguettes 5% Rabatt",
          "bei Mindestabnahme von 5 Baguettes 10% Rabatt",
          "bei Mindestabnahme von 7 Baguettes 15% Rabatt"
        ]
      },
      {
        "type": "TEXT",
        "content": "a) Die Kasse soll diese Regelung automatisch berücksichtigen. Sie bekommen den Auftrag, diesen Programmbaustein zu implementieren. Als Lösungsvorschlag liegt Ihnen das nachfolgende Nassi-Shneiderman-Diagramm (Stuktogramm) vor."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5efbc7794ec54c25305a5093"
      },
      {
        "type": "LIST",
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
        "type": "LIST",
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
        "type": "TEXT",
        "content": "c) Nachdem der erste Lösungsansatz verworfen wurde, werden weitere Stukrogramme vorgelegt. Kontrollieren Sie diese, ob die vorgegebene Regelung logisch richtig umgesetzt wird. Prüfen Sie, welches Nassi-Shneiderman-Diagramm korrekt ist und kreuzen Sie dieses an."
      },
      {
        "type": "SUBTITLE",
        "content": "A"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5efbc7844ec54c25305a5095"
      },
      {
        "type": "SUBTITLE",
        "content": "<strong>B</strong>"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5efbc78b4ec54c25305a5097"
      },
      {
        "type": "SUBTITLE",
        "content": "C"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5efbc79a4ec54c25305a5099"
      },
      {
        "type": "SUBTITLE",
        "content": "D"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5efbc7a14ec54c25305a509b"
      },
      {
        "type": "SUBTITLE",
        "content": "E"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5efbc7ac4ec54c25305a509d"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Aufgabe 2"
      },
      {
        "type": "TEXT",
        "content": "(a < b < c) testet, ob die Integer Zahlen a, b und c geordnet sind. Schreiben Sie den entsprechenden Code in Java-Syntax."
      },
      {
        "type": "TEXT",
        "content": "<strong>→ if <code>((a < b) && (b < c))</code></strong>"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Aufgabe 3"
      },
      {
        "type": "TEXT",
        "content": "Nennen Sie die Ausgabe des folgenden Programmfragments."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "System.out.println(10^5);"
      },
      {
        "type": "TEXT",
        "content": "<strong>→ 15</strong>"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Aufgabe 4"
      },
      {
        "type": "TEXT",
        "content": "Nennen Sie die Ausgabe des folgenden Programmfragments."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "int x = 1 / 2;\nSystem.out.println(x);"
      },
      {
        "type": "TEXT",
        "content": "<strong>→ 0</strong>"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Aufgabe 5"
      },
      {
        "type": "TEXT",
        "content": "Nennen Sie die Werte von m und n nach Ausführung des Codes."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "int n = 987654321;\nint m = 0;\nwhile (n != 0) {\n   m = (10 * m) + (n % 10);\n   n = n / 10;\n}"
      },
      {
        "type": "TEXT",
        "content": "<strong>→ n = 0, m = 123456789</strong>"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Aufgabe 6"
      },
      {
        "type": "TEXT",
        "content": "Eine Variable a ist als double a = 5 deklariert und initialisiert. Nennen Sie die Ausgabe der folgenden Anweisungen."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "System.out.println(8 / a); // Ausgabe: 1,6\nSystem.out.println( (int) (8 / a) ); // Ausgabe: 1"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Aufgabe 7"
      },
      {
        "type": "TEXT",
        "content": "Werten Sie die folgenden Programmzellen aus und geben Sie die Werte von c, d, e, f und g an."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "boolean a = true, b = false, c, d, e, f, g;\n\nc = a ^ b;\nd = a || b;\ne = (d && !c) || !a;\nf = ( (d === e) || (!d != e) ) == true;\ng = 5 == 7;"
      },
      {
        "type": "TEXT",
        "content": "<strong>→ c = true, d = true, e = false, f = true, g = false</strong>"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Aufgabe 8"
      },
      {
        "type": "TEXT",
        "content": "Gegeben ist das folgende Programmfragment. Nennen Sie den Wert, den b am Ende angenommen hat."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "boolean b;\nint a = 8, c = 21, d;\nd = (c / a) * 2;\nb = ( (c % a) >= (c / a) ) && (d == 4);"
      },
      {
        "type": "TEXT",
        "content": "<strong>→ b = true</strong>"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Aufgabe 9"
      },
      {
        "type": "TEXT",
        "content": "Die Zeile 3 im nachfolgenden Programm gibt die größte darstellbare Zahl im Integer Bereich aus (2147483647). Nennen Sie die Zahl, die in Zeile 4 ausgegeben wird. Begründen Sie Ihre Antwort."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "class Zahlen {\n   public static void main(String[] args) {\n      System.out.println(Integer.MAX_VALUE);\n      System.out.println(Integer.MAX_VALUE + 1);\n   }\n}"
      },
      {
        "type": "TEXT",
        "content": "<strong>→ Zum MAX_VALUE wird die 1 dazu addiert, das ergibt 21447483648, Summe springt vom größten Wert MAX_VALUE 21447483647 zu MIN_VALUE <u>-21447483648</u>, wird overflow / underflow genannt.</strong>"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Aufgabe 10"
      },
      {
        "type": "TEXT",
        "content": "Nennen Sie die Ausgabe des folgenden Programmfragments."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "int c = 1;\nwhile (c > 0) c++;\nSystem.out.println(c);"
      },
      {
        "type": "TEXT",
        "content": "<strong>→ 1, erst nach Ablauf des Programms wird c um 1 erhöht</strong>"
      }
    ]
  },
  {
    "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/rekursion_definition_und_uebungen",
    "_id": "5f429c59165d0ab470bc57e2",
    "topicId": "6056629db0623029d4a68f6b",
    "title": "Rekursion - Definition & Übungen",
    "description": "Thema vom 14.08.2020",
    "subject": "lf-6",
    "type": "article",
    "lessonDate": "2020-08-14",
    "lastUpdate": "2021-06-06",
    "schoolWeek": "14",
    "elements": [
      {
        "type": "TITLE",
        "content": "Definition"
      },
      {
        "type": "SUBTITLE",
        "content": "Der Terminus"
      },
      {
        "type": "TEXT",
        "content": "Rekursion, oder auch rekursivität / rekurrenz bedeutet Selbstbezüglichkeit, es kommt aus dem Lateinischen recurrere - zurücklaufen. Eine Rekursion tritt immer dann auf, wenn etwas auf sich selbst verweist. Bei der rekursiven Programmierung ruft sich eine Funktion / Methode selbst auf. Auch der gegenseitige Aufruf stellt eine Rekursion dar, ein rekursives Element muss sich also nicht direkt auf sich selbst verweisen. Wenn sich die Funktion selbst aufruft, spricht man von der <b>direkten Rekursion</b>."
      },
      {
        "type": "TEXT",
        "content": "Eine Prozedur dieser Art, die einen Teil der Aufgabe selbst löst und dann den Rest erledigt, indem sie sich selbst aufruft, wird rekursive Prozedur genannt. Wenn also im realen Leben das Geschirr gespült werden muss, würde man wie folgt vorgehen ..."
      },
      {
        "type": "LIST",
        "content": "",
        "list": [
          "man spült ein einziges Teil ab (erledigt einen Teil der Aufgabe)",
          "man sucht die nächste Person, die den Abwasch erledigen soll"
        ]
      },
      {
        "type": "TEXT",
        "content": "So muss keiner mehr als ein Teil spülen, und der Letzte muss garnichts mehr machen. In diesem Fall würde man sich selbst einmal aufrufen - angenommen wir haben eine Klasse <code>Person</code> mit der Funktion <code>washDishes()</code>, dann würde man in der Funktion <code>washDishes()</code> selbst nochmal <code>washDishes()</code> aufrufen (lassen), indem die nächste Person gesucht wird welche dann wieder <code>washDishes()</code> ausführt. Weil der Job somit für die nächste Person ein wenig kleiner wird, ist er irgendwann ganz erledigt und die Schleife kann gebrochen werden."
      },
      {
        "type": "LIST",
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
        "type": "SUBTITLE",
        "content": "Fachbegriffe"
      },
      {
        "type": "TEXT",
        "content": "<b>Inkarnation</b>: wiederholte Selbstaufrufe einer Funktion <br/> <b>Termination</b>: die Inkarnationskette bricht ab"
      },
      {
        "type": "HINT",
        "content": "Der Abbruch der Inkarnationskette muss garantiert werden, d. h. der Algorithmus muss terminieren!"
      },
      {
        "type": "LIST",
        "content": "Grundidee der Rekursion ist die Reduktion eines gegebenen Problems auf ein einfacheres Problem. Rekursive Programme sind ...",
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
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Rekursionsmuster"
      },
      {
        "type": "LIST",
        "content": "Es gibt verschiedene Arten von Rekursionen ...",
        "list": [
          "Lineare Rekursion",
          "Verzweigte Rekursion",
          "Verschachtelte Rekursion",
          "Verschränkte Rekursion"
        ]
      },
      {
        "type": "SUBTITLE",
        "content": "Lineare Rekursion & Nicht Lineare Rekursion"
      },
      {
        "type": "TEXT",
        "content": "Man unterscheidet zwischen linearen und nicht linearen Rekursionen. Eine Funktion ist linear rekursiv, wenn nur ein rekursiver Aufruf erfolgt - wie bei der Fakultät. Eine rekursive Funktion ist nicht-linear rekursiv, wenn die Ausführung zu mehr als einem rekursiven Aufruf führt - wie in der Fibonacci-Folge."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "public static int fac(int n) {\n   if (n === 0) {\n      return 1;\n   } else {\n      return n * fac(n - 1);\n   }\n}"
      },
      {
        "type": "SUBTITLE",
        "content": "Repetitive Rekursion"
      },
      {
        "type": "TEXT",
        "content": "Eine Funktion ist repetitiv rekursiv (engl. <i>tail recursive</i>) wenn sich die Funktion am Ende selbst aufruft, also der letzte auszuwertende Ausdruck ist."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "// Beispiel: Moduloperation - Aufruf von mod(5,3) läuft bis mod(2,3) aufgerufen wird (return 2)\npublic static int mod(int a, int b) {\n   if (a < b) {\n      return a;\n   } else {\n      return mod(a - b, b);\n   }\n}\n\n// Beispiel: Größter gemeinsamer Teiler\npublic static int ggT(int a, int b) {\n   if (b ==== 0) {\n      return a;\n   } else {\n      return ggT(b, a % b);\n   }\n}"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Fakultätsberechnung - Beispiel einer rekursiven Funktion"
      },
      {
        "type": "TEXT",
        "content": "Die Fakultät ist eine mathematische Funktion. Die Fakultät einer Zahl ist das Produkt aller ganzen Zahlen kleiner gleich der Zahl selbst. Die <code>fac</code>-Funktion erwartet einen Parameter vom Typ <code>int</code> und gibt einen Wert als <code>int</code> zurück."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "public static int fac(int n) {\n   if (n > 0) return n * fac(n - 1);\n   else return 1;\n}\n\npublic static void main(String[] args) {\n   System.out.println(fac(4)); // 3\n}"
      },
      {
        "type": "TEXT",
        "content": "Jede Rekursion lässt sich auch in eine iterative Lösung umwandeln und umgekehrt. Iterationen haben den Vorteil, dass sie performanter sind."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "// iterativ\npublic static int fac(int n) {\n   int fac = 1;\n   while (n > 0) {\n      fac = fac * a;\n      n = n - 1;\n   }\n   return fac;\n}\n\n// rekursiv\npublic static int fac(int n) {\n   return n === 0 ? 1 : n * fac(n - 1);\n}"
      },
      {
        "type": "HINT",
        "content": "Ein rekursiver Ansatz ist meist eleganter als ein Programm mit iterativem Ansatz. <br/> Ein iterativer Ansatz ist meist effizienter als ein Programm mit rekursivem Ansatz. <br/> Jede rekursive Funktion kann durch ein iterativen Pendant ersetzt werden und umgekehrt."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Fibonacci-Folge"
      },
      {
        "type": "TEXT",
        "content": "Baumartige Rekursion für die Fibonacci-Folge F<sub>5</sub>"
      },
      {
        "type": "TEXT",
        "content": "Im rekursiven Code kann es zu extremen Speicherbedarf und extrem häufigen Neuberechnungen kommen. Besonders vorsichtig sollten Sie im rekursiven Code bei der Erzeugung von Arrays sein. Baumrekursion kann durch Memoisation (engl. <i>memoization</i> oder <i>memoisation</i>) optimiert werden."
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "public static long fib(int n) {\n   if (n <= 1) return n;\n   else return fib(n-1) + fib(n-2);\n}\n\nfib(5)\nfib(5-1) + fib(5-2)\nfib(4) // erste Schleife\nfib(4-1) + fib(4-2)\nfib(3)\nfib(3-1) + fib(3-2)\nfib(2)\nfib(2-1) + fib(2-2)\nfib(1)\nfib(1) <= 1\nfib(0)\nfib(0) <= 1\nfib(1)\nfib(1) <= 1\nfib(2)\nfib(2-1) + fib(2-2)\nfib(1)\nfib(1) <= 1\nfib(0)\nfib(0) <= 1\nfib(3) // Zweite Schleife\nfib(3-1) + fib(3-2)\nfib(2)\nfib(2-1) + fib(2-2)\nfib(1)\nfib(1) <= 1\nfib(0)\nfib(0) <= 1\nfib(1)\nfib(1) <= 1"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5f43d11f846fa034c7ff8c6a"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Pascalsche Dreieck"
      },
      {
        "type": "CODE",
        "language": "java",
        "content": "public static int pas(int n, int k) {\n   if ((k === 0) || (k === n))\n      return 1;\n   else\n      return pas(n-1, k) + pas(n-1, k-1);\n}"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5f43d132846fa034c7ff8c6c"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Verschachtelte Rekursion"
      },
      {
        "type": "TEXT",
        "content": "Resultate einer rekursiven Berechnung sind nicht immer offensichtlich. Was ist das Ergebnis der folgenden Funktion?"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5f43d140846fa034c7ff8c6e"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Verschränkte Rekursion"
      },
      {
        "type": "TEXT",
        "content": "Wenn sich zwei oder mehrere Funktionen gegenseitig aufrufen, spricht man von verschränkt rekursiven Funktionen."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "LIST",
        "content": "Quellen:",
        "list": [
          "Phansud Wiki - Rekursion | 06.06.2021 | <a href='http://ais.informatik.uni-freiburg.de/teaching/ss09/info_MST/material/mst_08_recursion.pdf'>http://ais.informatik.uni-freiburg.de/teaching/ss09/info_MST/material/mst_08_recursion.pdf</a>",
          "Einführung in die Informatik - Recursion - Wolfram Burgard & Cyrill Stachniss | 06.06.2021 | <a href='https://phansud.fandom.com/de/wiki/Rekursion'>https://phansud.fandom.com/de/wiki/Rekursion</a>"
        ]
      }
    ]
  },
  {
    "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/datenbanken_und_datenbanksysteme",
    "_id": "5f67ad91257ec895e489e34c",
    "topicId": "6056629db0623029d4a68f6b",
    "title": "Datenbanken und Datenbanksysteme",
    "description": "Thema vom 31.08.2020",
    "subject": "lf-6",
    "type": "article",
    "lessonDate": "2020-08-31",
    "lastUpdate": "2021-06-26",
    "schoolWeek": "15",
    "elements": [
      {
        "type": "TITLE",
        "content": "Definition"
      },
      {
        "type": "TEXT",
        "content": "So genannte Datenbank-Management-Systeme (DBMS) für Datenbanken strukturieren , beispielsweise relationale Datenbanken (MySQL) oder NoSQL Datenbanken. Eine Datenbank ist eine organisierte Sammlung von elektronischen Daten. Das DBMS ist die Software, die mit Endbenutzern, Anwendungen und der Datenbank selbst interagiert, um die Daten zu erfassen, zu analysieren, verwalten oder zu löschen. Zusammen bilden diese beiden Komponenten ein Datenbanksystem (DBS)."
      },
      {
        "type": "TEXT",
        "content": "Warenwirtschaftssysteme (Amazon, Online-Shops), Enterprise Ressource Planning (ERP) Software und CRM Systeme nutzen Datenbanksysteme im Hintergrund. Dabei kommen Typen wie MariaDB oder MySQL zum Einsatz, zum Beispiel WordPress arbeitet intern mit MySQL-Datenbanken."
      },
      {
        "type": "LIST",
        "content": "Typen",
        "list": [
          "Tabellenbasierte Datenbanken (MySQL)",
          "Dokumentenbasierte Datenbanken (MongoDB)",
          "Hierarchische Datenbanken",
          "Grafische Datenbanken / Graphdatenbank"
        ]
      },
      {
        "type": "LIST",
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
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Tabellenbasierte Datenbanken"
      },
      {
        "type": "TEXT",
        "content": "Eine Datenbanktabelle ist eine Sammlung verwandter Daten, das bedeutet sie stellt eine Datenbank-Relation dar - Die Datensätze verschiedener Spalten haben Verbindungen zueinander. Diese werden in einem strukturierten Format in einer Tabelle mit Zeilen und Spalten gespeichert. Die Anzahl der Spalten ist festgelegt, die Anzahl von Zeilen ist beliebig."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5f67aec18dcdb242a7e7c65c"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Dokumentenbasierte Datenbanken"
      },
      {
        "type": "TEXT",
        "content": "Bei einer Dokumentbasierten Datenbank bilden Dokumente die Grundeinheit zur Speicherung von Daten ab. Es muss keinem exakten Datenbankschema / Modell gefolgt werden, die Dokuemnte können untereinander unterschiedlich sein und Inkonsistenzen bezüglich der vorhandenen Werte aufweisen. In MongoDB beispielsweise werden JSON-Dokumente verwendet."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5f67aece8dcdb242a7e7c65e",
        "size": "s"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Hierarchisches Datenbankmodell"
      },
      {
        "type": "TEXT",
        "content": "Das älteste Datenbankmodell, es bildet seinen Inhalt durch eine hierarchische Baumstruktur ab. Jedet Satz (Record) hat also genau einen Vorgänger, mit Ausnahme eines Satzes, nämlich der Wurzel / dem obersten Satz der so entstehenden Baumstruktur. Die Daten werden in einer Reihe von Datensätzen gespeichert, mit denen verschiedene Felder verknüpft sind."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5f67aed78dcdb242a7e7c660"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Grafisches Datenbankmodell"
      },
      {
        "type": "TEXT",
        "content": "Benutzt Graphen, um stark vernetzte Informationen darzustellen und abzuspeichern. Besteht aus Knoten und Kanten, den Verbindungen zwischen den Knoten. Gehören zu den NoSQL-Datenbanken und priorisieren die Beziehung zwischen den Daten, wodurch die Abbildung hierarchischer und vernetzter Strukturen vereinfacht wird."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5f67aede8dcdb242a7e7c662",
        "size": "s"
      }
    ]
  },
  {
    "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/relationale_datenbanken_und_datentypen_mysql",
    "title": "Relationale Datenbanken und Datentypen - MySQL",
    "description": "Thema vom 31.08.2020",
    "subject": "lf-6",
    "type": "article",
    "lessonDate": "2020-08-31",
    "lastUpdate": "2020-12-15",
    "schoolWeek": "15",
    "elements": [
      {
        "type": "TITLE",
        "content": "Definition"
      },
      {
        "type": "TEXT",
        "content": "MySQL steht für ...<br/> <u>My</u> - My Widenius, Tochter des Mitbegründers Michael Widenius<br/> <u>SQL</u> - Structured Query Language"
      },
      {
        "type": "TEXT",
        "content": "Es ist eines der am verbreitetesten Datenbanksysteme weltweit und gehört zu den relationalen Datenbankverwaltungssystemen. SQL ist eine Datenbank-Abfrage-Sprache, früher noch SEQUEL - <i>Structured English Query Language</i> - genannt. Diese wurde bereits in den 1970er Jahren entworfen."
      },
      {
        "type": "TEXT",
        "content": "Eine relationale Datenbank (auch RDBMS - Relational Database Management System genannt) zeichnet sich durch die Relation zwischen Objekten aus. "
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Integer Datentypen"
      },
      {
        "type": "TEXT",
        "content": "Für Zahlen gibt es verschiedene Datentypen für unterschiedliche Zahlenbereiche, da höhere Zahlen mehr Speicherplatz verbrauchen. Es ist gibt auch \"unsigned\" Datentypen, welche ausschließlich positive Zahlenwerte enthalten dürfen - die Zahlenbereiche sind in diesem Fall so hoch wie die Range des Datentyps, bei TinyInt wären das -128 bis 127 = 255."
      },
      {
        "type": "LIST",
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
        "type": "HINT",
        "content": "In der Abschlussprüfung sollte man die grundlegenen Datentypen kennen, zum Beispiel dass für Bilder der Datentyp BLOB - Binary Large Object - verwendet wird."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Boolean Datentypen"
      },
      {
        "type": "TEXT",
        "content": "Für boolesche Datentypen kann <code>Bool</code> / <code>Boolean</code> verwendet werden, außerdem kann auch <code>TinyInt</code> genutzt werden und mit den Werten 0 für <code>false</code> und 1 für <code>true</code> die Wahrheitswerte bestimmen, in JavaScript ergibt die Null 0 als Integer <code>false</code> wenn der Wert in einer if - Abfrage geprüft wird, diesen Effekt sollte man kennen."
      }
    ]
  },
  {
    "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/relationale_algebra_projektion_selektion_und_join_in_sql",
    "title": "Relationale Algebra & SQL - Projektion, Selektion und Join",
    "description": "Aufgaben vom 02.09.2020",
    "subject": "lf-6",
    "type": "tasks",
    "lessonDate": "2020-09-02",
    "lastUpdate": "2020-12-15",
    "schoolWeek": "15",
    "elements": [
      {
        "type": "TITLE",
        "content": "Definition"
      },
      {
        "type": "TEXT",
        "content": "Eine Algebra ist eine Menge zusammen mit Operationen auf dieser Menge. Zum Beispiel ist die Menge von mehreren Integer zusammen mit den Operationen + und * eine Algebra. Im Fall der relationalen Algebra ist diese Menge die Menge aller endlichen Relationen. Eine Anfrage ist ein Term / Ausdruck in der Algebra."
      },
      {
        "type": "TEXT",
        "content": "SQL ist eine deklarative Manipulations- und Abfragesprache, sie wird verwendet um Daten einer Datenbank abzufragen oder zu bearbeiten. Dafür gibt es sogenannte Operationen der relationalen Algebra (Projektion, Selektion und Join in verschiedenen Varianten), kenntnisse der relationalen Algebra helfen, SQL und relationale Datenbanksysteme besser zu verstehen."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5f79ff54a40070503d0a75f7"
      },
      {
        "type": "TEXT",
        "content": "<b>Projektion - Auswahl spezieller Spalten</b> <br/> <code>spalte1</code> & <code>spalte2</code> sind die Tabellen in der Datenbank"
      },
      {
        "type": "CODE",
        "language": "sql",
        "content": "SELECT spalte1, spalte2 FROM datenbank;"
      },
      {
        "type": "TEXT",
        "content": "<b>Selektion - Auswahl von Zeilen nach Bedingungen</b> <br/> Gibt alle Elemente zurück die den Wert 2 oder höher haben"
      },
      {
        "type": "CODE",
        "language": "sql",
        "content": "SELECT * FROM WHERE spalte1 > 1;"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Operationen auf Relationen - Projektion"
      },
      {
        "type": "TEXT",
        "content": "Die Projektion ist eine Abfrage in der nur gewünschte Spalten angezeigt werden, die Spalten werden nicht entfernt oder verändert, nur die explizit genannten Spalten werden angezeigt."
      },
      {
        "type": "TEXT",
        "content": "Wird in SQL in der SELECT-Klausel kodiert. Die projizierten Eigenschaften werden hinter SELECT als Liste angegeben. Wird keine Projektion durchgeführt, d.h. es sind alle Eigenschaften des Relationenformats ausgewählt, wird dies in SQL durch einen Stern * anstelle der Liste angegeben."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Operationen auf Relationen - Selektion"
      },
      {
        "type": "TEXT",
        "content": "Es wird ein Prädikat P über Eigenschaften des Relationenformats einer Relation R gebildet. Nur Tupel r є R , für die das Prädikat erfüllt ist, werden in die Ergebniserlation Σ( R ) aufgenommen. Das Prädikat P wird in SQL in der WHERE-Kausel kodiert."
      },
      {
        "type": "TEXT",
        "content": "<b>Vergleichsausdrücke</b>"
      },
      {
        "type": "CODE",
        "language": "sql",
        "content": "Gehalt >= 2000 AND Geschlecht = 'male' \nYEAR(Geburtstag) < 1980;"
      },
      {
        "type": "TEXT",
        "content": "<b>Standardprädikate</b>"
      },
      {
        "type": "CODE",
        "language": "sql",
        "content": "Name LIKE '%nn%'; \nOrt IN ('Bautzen', 'Dresden') \nTelefon IS NULL"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Operationen auf Relationen - JOIN"
      },
      {
        "type": "TEXT",
        "content": "Es wird ein Prädikat P über Eigenschaften des Relationenformats einer Relation R gebildet. Nur Tupel r є R , für die das Prädikat erfüllt ist, werden in die Ergebniserlation Σ( R ) aufgenommen. Das Prädikat P wird in SQL in der WHERE-Kausel kodiert."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Aufgaben"
      },
      {
        "type": "SUBTITLE",
        "content": "<span class='ddu-list-number'>1</span> Datenbank importieren"
      },
      {
        "type": "TEXT",
        "content": "Importieren Sie eine Datenbank mit "
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "<span class='ddu-list-number'>2</span> Alle Datensätze anzeigen"
      },
      {
        "type": "TEXT",
        "content": "Schreiben Sie eine SQL-Abfrage (engl. query) die alle Datensätze einer Tabelle ausgibt."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "<span class='ddu-list-number'>3</span> Bestimmte Spalten anzeigen"
      },
      {
        "type": "TEXT",
        "content": "Geben Sie nur die Spalten <code>leistung</code> und <code>jahr</code> aus der Tabelle aus."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5f79ff60a40070503d0a75f9"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "<span class='ddu-list-number'>4</span> Spaltenzuordnung zur Tabelle"
      },
      {
        "type": "TEXT",
        "content": "Es ist möglich, dass es in einer Datenbank mehrere Tabellen mit gleichem Spaltennamen gibt. Um Verwechslungen auszuschließen, kann der Spaltenname einer Tabelle zugewiesen werden. Ordnen Sie dem SELECT-Statement den Spaltennamen der Tabelle zu."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "<span class='ddu-list-number'>5</span> Tabellenalias"
      },
      {
        "type": "TEXT",
        "content": "Der Tabellenname <code>informatiker</code> ist sehr lang. Stattdessen kann ein Tabellenalias verwendet werden. Dies spart Schreibarbeit und macht ein SQL-Statement übersichtlich. Schreiben Sie eine SELECT-Abfrage, die die Spalten <code>leistung</code> und <code>jahr</code> der Tabelle <code>informatiker</code> ausgibt. Verwenden Sie den Tabellenalias (table alias) i"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "<span class='ddu-list-number'>6</span> Spaltenalias"
      },
      {
        "type": "TEXT",
        "content": "Die Spalte <code>leistung</code> der Tabelle <code>informatiker</code> ist nicht sehr aussagekräftig. Es ist möglich, in der Ausgabeanzeige den Spaltennamen zu ändern, ohne die Originaltabelle in der Datenbank zu beeinflussen. Vergeben Sie für die Ausgabe den Tabellenspaltennamen (column alias) power für die Spalte <code>leistung</code>."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5f79ff74a40070503d0a75fb"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "<span class='ddu-list-number'>7</span> Duplikate entfernen"
      },
      {
        "type": "TEXT",
        "content": "Geben Sie alle Informatiker aus der Tabelle <code>informatiker</code> genau einmal aus - ohne Duplikate."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5f79ff95a40070503d0a75fd"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "<span class='ddu-list-number'>8</span> Die WHERE-Komponente"
      },
      {
        "type": "TEXT",
        "content": "Mit der WHERE-Komponente können einzelne Datensätze selektiert werden. Geben Sie nur die Datensätze aus, in denen das Attribut <code>jahr</code> der Jahreszahl 1968 entspricht."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5f79ffa1a40070503d0a75ff"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "<span class='ddu-list-number'>9</span> Logische Operatoren"
      },
      {
        "type": "TEXT",
        "content": "Die folgende Aufgabe kann mit logischen und relationalen Operatoren gelöst werden. Ermitteln Sie, welche Leistung Herr Knuth vor 1970 vorzuweisen hat."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5f79ffaaa40070503d0a7601"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "LIST",
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
    "title": "SQL Funktionen - Daten zusammenfassen & Aggregatfunktionen",
    "description": "Mitschrift vom 21.09.2020",
    "subject": "lf-6",
    "type": "article",
    "lessonDate": "2020-09-21",
    "lastUpdate": "2020-10-15",
    "schoolWeek": "16",
    "elements": [
      {
        "type": "TITLE",
        "content": "Definition"
      },
      {
        "type": "SUBTITLE",
        "content": "Aggregatfunktionen"
      },
      {
        "type": "TEXT",
        "content": "Eine Aggregatfunktion (engl. <i>aggregate</i>, anhäufen, vereinigen) ist eine Funktion, die bestimmte Spalten und Werte von Daten zusammenfasst. Die fünf wichtigsten SQL-Aggregatfunktionen sind <code>COUNT</code>, <code>SUM</code>, <code>AVG</code>, <code>MIN</code> und <code>MAX</code> - mit diesen können Werte nach bestimmten Bedingungen gefiltert werden. Mittels <code>GROUP BY</code>, <code>HAVING</code> oder <code>ORDER</code> können die Ergebnisse von Abfragen gruppiert und sortiert werden."
      },
      {
        "type": "TABLE",
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
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Alle Einträge"
      },
      {
        "type": "CODE",
        "language": "sql",
        "content": "SELECT * FROM informatiker;"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5f7b25073da9d453ce6db570"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Duplikate entfernen"
      },
      {
        "type": "CODE",
        "language": "sql",
        "content": "SELECT DISTINCT wiss_name FROM informatiker;"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5f7b25113da9d453ce6db572"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Duplikate entfernen und in GROßBUCHSTABEN"
      },
      {
        "type": "CODE",
        "language": "sql",
        "content": "SELECT DISTINCT upper(wiss_name) FROM informatiker;"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5f7b251a3da9d453ce6db574"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Zeige alle Einträge in den \"Kalkül\" vorkommt und gebe dessen Start-Index im gefilterten Wort aus"
      },
      {
        "type": "CODE",
        "language": "sql",
        "content": "SELECT wiss_name, leistung, POSITION(\"Kalkül\" in leistung) FROM informatiker AS MatchPosition;"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5f7b25223da9d453ce6db576"
      }
    ]
  },
  {
    "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/sql_funktionen_daten_zusammenfassen_uebungen",
    "title": "SQL Funktionen - Daten zusammenfassen - Übungen",
    "description": "Aufgaben vom 23.09.2020",
    "subject": "lf-6",
    "type": "tasks",
    "lessonDate": "2020-09-23",
    "lastUpdate": "2020-10-15",
    "schoolWeek": "16",
    "elements": [
      {
        "type": "TITLE",
        "content": "Aufgaben"
      },
      {
        "type": "SUBTITLE",
        "content": "<span class='ddu-list-number'>1</span> Nützliche Operatoren (1)"
      },
      {
        "type": "TEXT",
        "content": "Es gibt in SQL nützliche Operatoren, um die Lesbarkeit unter Verwendung des natürlichen Sprachgebrrauchs zu erhöhen. Schreiben Sie die folgende SQL-Abfrage ohne <code>IN</code>-Operator."
      },
      {
        "type": "CODE",
        "language": "sql",
        "content": "SELECT *\nFROM informatiker\nWHERE wiss_name IN ('Knuth, Donald Ervin', 'Hoare, Tonys');"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "<span class='ddu-list-number'>2</span> Nützliche Operatoren (2)"
      },
      {
        "type": "TEXT",
        "content": "Es gibt in SQL nützliche Operatoren, um die Lesbarkeit unter Verwendung des natürlichen Sprachgebrrauchs zu erhöhen. Schreiben Sie die folgende SQL-Abfrage ohne <code>BETWEEN</code>-Operator."
      },
      {
        "type": "CODE",
        "language": "sql",
        "content": "SELECT *\nFROM informatiker\nWHERE jahr BETWEEN  1960 AND 1970;"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "<span class='ddu-list-number'>3</span> Mustervergleiche von Texten (1)"
      },
      {
        "type": "TEXT",
        "content": "Nützlich sind Mustervergleiche von Texten in Prädikaten. Finden Sie alle Datensätze, in denen das Attribut <i>leistung</i> das Wort <i>Begründer</i> enthält. Das Zeichen % entspricht dabei einer beliebigen Zeichenfolge."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "<span class='ddu-list-number'>4</span> Mustervergleiche von Texten (2)"
      },
      {
        "type": "TEXT",
        "content": "Es gibt in SQL auch einen Platzhalter für ein einzelnes beliebiges Zeichen. Ermitteln Sie alle Namen ohne Duplikate, die als zweiten Buchstaben ein / enthalten."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "<span class='ddu-list-number'>5</span> Selektion - Sortierung in aufsteigender Reihenfolge"
      },
      {
        "type": "TEXT",
        "content": "Durch eine sortierte Ausgabe der Daten erlangen Sie eine bessere Übersichtlichkeit. SQL stellt dafür die <code>ORDER BY</code>-Komponente zur Verfügung. Ermitteln Sie alle Namen ohne Duplikate in aufsteigender Reihenfolge."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "<span class='ddu-list-number'>6</span> Selektion - Sortierung in absteigender Reihenfolge"
      },
      {
        "type": "TEXT",
        "content": "Ermitteln Sie nun mit <code>ORDER BY</code> alle Namen ohne Duplikate in absteigender Reihenfolge."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "<span class='ddu-list-number'>7</span> Selektion - Sortierung mit mehreren Suchkriterien"
      },
      {
        "type": "TEXT",
        "content": "Es ist möglich, mehrere Suchkriterien zur Sortierung zu berücksichtigen. Schreiben Sie eine SQL-Abfrage, die alle Datensätze erst nach Namen und dann nach Jahren sortiert ausgibt."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "<span class='ddu-list-number'>8</span> Selektion - Mehrere Tabellen vereinen (1)"
      },
      {
        "type": "TEXT",
        "content": "Mit dem Schlüsselwort UNION werden zwei (oder mehr) <code>SELECT</code>-Anweisungen ohne Duplikate zusammengefasst. Schreiben Sie eine SQL-Abfrage, die in der ersten <code>SELECT</code>-Anweisung alle Wissenschaftlernamen die mit \"D\" beginnen ausgibt, und in der zweiten <code>SELECT</code>-Anweisung die Namensliste aller Wissenschaftler ausgibt. Untersuchen Sie die Ausgabe, was passiert, wenn Sie statt <code>UNION</code> das Schlüsselwort <code>UNION ALL</code> verwenden"
      },
      {
        "type": "CODE",
        "language": "sql",
        "content": "SELECT *\nFROM informatiker\nWHERE jahr BETWEEN  1960 AND 1970;"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "<span class='ddu-list-number'>9</span> Selektion - Mehrere Tabellen vereinen (2)"
      },
      {
        "type": "TEXT",
        "content": "Mit dem Schlüsselwort <code>UNION</code> werden zwei (oder mehr) <code>SELECT</code>-Anweisungen ohne Duplikate zusammengefasst. Interessant sind die folgenden Beobachtungen."
      },
      {
        "type": "TEXT",
        "content": "Es werden zwei Tabellen mit unterschiedlichen Attributen (<i>jahr</i> und <i>leistung</i>) zusammengefasst. Werden die Daten trotz verschiedener Datentypen untereinander aufgelistet?"
      },
      {
        "type": "TEXT",
        "content": "Welches Attribut steht im Tabellenkopf? Was passiert, wenn das Attribut weggelassen wird?"
      },
      {
        "type": "CODE",
        "language": "sql",
        "content": "SELECT '\"D\" oder \"d\" im Namen' informatiker_mit, wiss_name, jahr\nFROM informatiker\nWHERE wiss_name like '%D%'\nUNION\nSELECT '\"O\" oder \"o\" im Namen' informatiker_mit, wiss_name, leistung\nFROM informatiker\nWHERE wiss_name LIKE '%o%';"
      }
    ]
  },
  {
    "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/sql_joins",
    "title": "SQL Übung - Joins (ENTWURF)",
    "description": "Mitschrift vom 26.10.2020",
    "subject": "lf-6",
    "type": "article",
    "lessonDate": "2020-10-26",
    "lastUpdate": "2020-11-03",
    "schoolWeek": "17",
    "elements": [
      {
        "type": "TITLE",
        "content": "Definition"
      },
      {
        "type": "TEXT",
        "content": "Entwurfstext"
      }
    ]
  },
  {
    "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/sql_uebung_anweisungen_schachteln",
    "title": "SQL Übung - Anweisungen schachteln (ENTWURF)",
    "description": "Aufgaben vom 28.10.2020",
    "subject": "lf-6",
    "type": "tasks",
    "lessonDate": "2020-10-28",
    "lastUpdate": "2020-11-03",
    "schoolWeek": "17",
    "elements": [
      {
        "type": "TITLE",
        "content": "Definition"
      },
      {
        "type": "TEXT",
        "content": "Entwurfstext"
      }
    ]
  },
  {
    "url": "sql_grundlagen/test",
    "title": "SQL Grundlagen",
    "description": "Kurztest vom 18.11.2020",
    "subject": "lf-6",
    "type": "test",
    "lessonDate": "2020-11-18",
    "lastUpdate": "2020-12-21",
    "schoolWeek": "18",
    "elements": [
      {
        "type": "TITLE",
        "content": "Definition"
      },
      {
        "type": "TEXT",
        "content": "Entwurfstext"
      }
    ]
  },
  {
    "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/datenbank_relationstheorie",
    "title": "Datenbank Relationstheorie (ENTWURF)",
    "description": "Aufgaben vom 19.11.2020",
    "subject": "lf-6",
    "type": "article",
    "lessonDate": "2020-11-19",
    "lastUpdate": "2020-12-21",
    "schoolWeek": "18",
    "elements": [
      {
        "type": "TITLE",
        "content": "Definition"
      },
      {
        "type": "TEXT",
        "content": "Entwurfstext"
      }
    ]
  },
  {
    "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/planung_von_relationalen_datenbanken",
    "title": "Planung von Relationalen Datenbanken (ENTWURF)",
    "description": "Aufgaben vom 09.12.2020",
    "subject": "lf-6",
    "type": "article",
    "lessonDate": "2020-12-09",
    "lastUpdate": "2020-12-21",
    "schoolWeek": "19",
    "elements": [
      {
        "type": "TITLE",
        "content": "Definition"
      },
      {
        "type": "TEXT",
        "content": "Entwurfstext"
      }
    ]
  },
  {
    "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/hashfunktionen",
    "title": "Hashfunktionen (ENTWURF)",
    "description": "Aufgaben vom 11.01.2021",
    "subject": "lf-6",
    "type": "article",
    "lessonDate": "2021-01-11",
    "lastUpdate": "2021-02-08",
    "schoolWeek": "20",
    "elements": [
      {
        "type": "TITLE",
        "content": "Definition"
      },
      {
        "type": "TEXT",
        "content": "Eine Hashfunktion (im kryptographischen Sinn) ist eine Einwegfunktion, die eine Datenmenge variabler Größe auf eine Datenmenge fester Größe abbildet. Sie wird zum Signieren von Nachrichten verwendet, um die Integrität dieser sicherzustellen. Der Hashwert einer Hashfunktion kann mit einem Fingerabdruck verglichen werden. Jeder Hashwert (Fingerabdruck) bestimmt eindeutig einen Datensatz (Kollisionen vernachlässigt; dazu später im Unterricht mehr)."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Aufgaben"
      },
      {
        "type": "TEXT",
        "content": "Bilden Sie den SHA3-256 Hashwert zur Zeichenkette OSZ Technik Teltow. (ohne Punkt) Der Hashwert wird später das Passwort für die Aufgaben sein."
      }
    ]
  },
  {
    "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/hashfunktion_uebung",
    "title": "Hashfunktion - Übung (ENTWURF)",
    "description": "Aufgaben vom 14.01.2021",
    "subject": "lf-6",
    "type": "tasks",
    "lessonDate": "2021-01-14",
    "lastUpdate": "2021-02-08",
    "schoolWeek": "20",
    "elements": [
      {
        "type": "TITLE",
        "content": "Definition"
      },
      {
        "type": "TEXT",
        "content": "Eine Hashfunktion (im kryptographischen Sinn) ist eine Einwegfunktion, die eine Datenmenge variabler Größe auf eine Datenmenge fester Größe abbildet. Sie wird zum Signieren von Nachrichten verwendet, um die Integrität dieser sicherzustellen. Der Hashwert einer Hashfunktion kann mit einem Fingerabdruck verglichen werden. Jeder Hashwert (Fingerabdruck) bestimmt eindeutig einen Datensatz (Kollisionen vernachlässigt; dazu später im Unterricht mehr)."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Aufgaben"
      },
      {
        "type": "TEXT",
        "content": "Bilden Sie den SHA3-256 Hashwert zur Zeichenkette OSZ Technik Teltow. (ohne Punkt) Der Hashwert wird später das Passwort für die Aufgaben sein."
      }
    ]
  },
  {
    "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/sql_statements_abfragen_über_mehrere_tabellen",
    "title": "SQL-Statements - Abfragen über mehrere Tabellen (ENTWURF)",
    "description": "Aufgaben vom 08.02.2021",
    "subject": "lf-6",
    "type": "article",
    "lessonDate": "2021-02-08",
    "lastUpdate": "2021-02-27",
    "schoolWeek": "21",
    "elements": [
      {
        "type": "TITLE",
        "content": "Definition"
      },
      {
        "type": "TEXT",
        "content": "Equi-Join - Inner-Join - Left- und Right-Join"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Aufgaben"
      },
      {
        "type": "SUBTITLE",
        "content": "<span class='list-number'>1</span> VII.1"
      },
      {
        "type": "TEXT",
        "content": "Arbeiten Sie im Buch „Datenbanken – Relationale Datenbanken entwerfen und realisieren“ die Seiten 117 bis 122 (Kapitel 10.6, 10.6.1 und 10.6.2) durch."
      }
    ]
  },
  {
    "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/sql_server_einrichten_und_uebungsaufgaben",
    "title": "SQL-Server einrichten und Übungsaufgaben (ENTWURF)",
    "description": "Aufgaben vom 12.02.2021",
    "subject": "lf-6",
    "type": "tasks",
    "lessonDate": "2021-02-12",
    "lastUpdate": "2021-02-27",
    "schoolWeek": "21",
    "elements": [
      {
        "type": "TITLE",
        "content": "Definition"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Aufgaben"
      },
      {
        "type": "TEXT",
        "content": "Loggen Sie sich auf Ihren SQL Server ein. Verbinden Sie sich mit der Schuldatenbank. Lösen sie die Aufgaben 12.10.5 (5-1 bis 5-9) auf Seite 178 f. Die Aufgabe 5-6 (Self-Join) können Sie vernachlässigen. Eine Übersicht der Schul-Datenbank (ER-Modell) finden Sie auf Seite 173."
      }
    ]
  },
  {
    "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/grundkonzepte_des_er_modells_1",
    "title": "Aufgaben - Grundkonzepte des ER-Modells",
    "description": "Aufgaben vom 03.03.2021",
    "subject": "lf-6",
    "type": "tasks",
    "lessonDate": "2021-03-03",
    "lastUpdate": "2021-03-05",
    "schoolWeek": "22",
    "elements": [
      {
        "type": "TITLE",
        "content": "Aufgaben"
      },
      {
        "type": "TEXT",
        "content": "Es soll jeweils ein ER-Modell erstellt werden"
      },
      {
        "type": "SUBTITLE",
        "content": "<span class='list-number'>1</span>Lufttransport"
      },
      {
        "type": "LIST",
        "content": "Für die Entwicklung des Datenbanksystems liegt folgende Beschreibung vor:",
        "list": [
          "Auf einem Frachtflug werden Frachten, die von einem oder mehreren Kunden stammen, transportiert",
          "Die Fracht eines Kunden kann auf einen oder mehrere Flüge verteilt werden",
          "Ein Flug wird mit einem Flugzeug ausgeführt",
          "Ein Flugzeug wird für viele Flüge eingesetzt",
          "Ein Flugzeug wird von verschiedenen Piloten geflogen",
          "Piloten können auf verschiedenen Flugzeugen eingesetzt werden",
          "Ein Pilot führt viele Flüge durch",
          "Ein Flug wird von zwei Piloten ausgeführt"
        ]
      },
      {
        "type": "TEXT",
        "content": "Erstellen Sie ein enstsprechendes ER-Diagramm ohne Attribute"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "<span class='list-number'>2</span>Lieferservice"
      },
      {
        "type": "TEXT",
        "content": "Die durchgeführten Lieferfahrten sollen in einem relatonalen Datenbanksystem erfasst werden"
      },
      {
        "type": "TEXT",
        "content": "a) Im ersten Entwicklungsschritt werden Sie beauftragt, für diesen Zweck ein ER-Modell zu erstellen"
      },
      {
        "type": "LIST",
        "content": "Vervollständigen Sie dazu auf der gegenüberliegenden Seite das ER-Diagramm anhand folgender Vorgaben",
        "list": [
          "Auf einer Lieferfahrt werden Frachten von einem oder mehreren Kunden transportiert",
          "Die Fracht eines Kunden kann auf eine oder mehrere Lieferfahrten verteilt werden",
          "Eine Lieferfahrt wird mit einem LKW ausgeführt",
          "Ein LKW wird für viele Lieferfahrten auf unterschiedlichen Routen eingesetzt",
          "Ein LKW wird von verschiedenen Fahreren gefahren",
          "Fahrer können auf verschiedenen LKW's eingesetzt werden",
          "Ein Fahrer führt viele Lieferfahrten durch",
          "Eine Lieferfahrt wird von einem Fahrer ausgeführt",
          "Eine Lieferfahrt führt über eine Route, die sich aus mehreren Strecken zusammensetzt",
          "Eine Strecke verbindet zwei Lager und kann zu verschiedenen Routen gehören"
        ]
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "<span class='list-number'>3</span>Elektro-IT-Artikel"
      },
      {
        "type": "TEXT",
        "content": "Die Fachzeitschrift \"El-I.te\" für Elektro- und Informationstechnologie erscheint einmal im Quartal und enthält fundierte Artikel zu aktuellen Themen. Jede Ausgabe enthält eine Heft-CD, auf der unter anderem auch die Artikel der jeweiligen Ausgabe im PDF-Format gespeichert sind."
      },
      {
        "type": "TEXT",
        "content": "Die Schüler der Technik-AG nutzen diese PDF-Dateien, um die Artikel auf einer Dateiablage zu archivieren. Für jedes Jahr wird ein eigenes Verzeichnis angelegt. Für jede, in diesem Jahr erschienene Ausgabe wird wiederum ein Unterverzeichnis erstellt, in dem alle Artikel dieser Ausgabe zu finden sind."
      },
      {
        "type": "LIST",
        "content": "Anforderungsliste:",
        "ordered": true,
        "list": [
          "Welche Artikel gibt es?",
          "Um die Position des Artikels im Verzeichnisbaum bestimmen zu können, muss das Jahr, die Ausgabe und der Dateiname gespeichert werden",
          "Zusätzlich muss zu jedem Artikel ein Thema angegeben werden",
          "Welche Autoren gibt es?",
          "Ein Autor wird über den Vor- und Nachnamen oder das Autorenkürzel eindeutig bestimmt",
          "Ein oder mehrere Autoren schreiben einen Artikel",
          "Welche Schlüsselwörter gibt es?",
          "Das Schlüsselwort selbst wird gespeichert",
          "Ein Schlüsselwort kommt in mehreren Artikeln vor",
          "In einem Artikel können mehrere Schlüsselwörter vorkommen",
          "Welche Rubriken gibt es?",
          "Eine Rubrik hat eine Bezeichnung",
          "Jeder Artikel kann eindeutig einer Rubrik zugeordnet werden"
        ]
      },
      {
        "type": "TEXT",
        "content": "<a routerLink='http://159.65.105.150/lf-6/entwickeln_und_bereitstellen_von_anwendungssystemen/grundkonzepte_des_er_modells_2'>Aufgabe gelöst? Zur Musterlösung</a>"
      }
    ]
  },
  {
    "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/grundkonzepte_des_er_modells_2",
    "_id": "60428604b0c00c20f201d16a",
    "topicId": "605c90fe23779759b9bb2907",
    "title": "Grundkonzepte des ER-Modells",
    "description": "Thema vom 05.03.2021",
    "subject": "lf-6",
    "type": "article",
    "lessonDate": "2021-03-05",
    "lastUpdate": "2021-04-08",
    "schoolWeek": "22",
    "elements": [
      {
        "type": "TITLE",
        "content": "Definition"
      },
      {
        "type": "TEXT",
        "content": "Bei der Datenanalyse ist die Darstellung der gefundenen Zusammenhänge als ER-Modell (engl. 'Entity-Relationship') sehr hilfreich. Dieses Datenmodell wird parallel zur Datenanalyse eingesetzt bzw. dient als Hilfsmittel zur Datenanalyse. Bereits wenn Entitäten und Beziehungen aus der Anforderungsliste ermittelt worden sind, kann ein vorläufiges ER-Modell erstellt werden."
      },
      {
        "type": "SUBTITLE",
        "content": "Vorläufiges ER-Modell"
      },
      {
        "type": "TEXT",
        "content": "In einem ER-Modell werden Entitäten als Rechtecke dargestellt. Beziehungen zwischen Entitäten werden durch Rauten symbolisiert. Die Beziehung wird durch einfache Linien mit den zugehörigen Entitäten verbunden."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/604713d5b0c00c20f201d1bb"
      },
      {
        "type": "TEXT",
        "content": "Der Zusammenhang „ist-Mitschüler“ zwischen den Entitäten „Schüler“ und „Klasse“ wird im ER-Modell wie folgt dargestellt:"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60471403b0c00c20f201d1bd"
      },
      {
        "type": "LIST",
        "content": "Bereits mit diesen wenigen Elementen lässt sich ein vorläufiges ER-Modell zur Schuldatenbank aufstellen. Für dieses ER-Modell müssen lediglich die Entitäten und die Beziehungen betrachtet werden, die den Unterpunkten 1. und 2. der Anforderungslistenanalyse aus dem Thema Datenanalyse (verlinkung).",
        "ordered": true,
        "list": [
          "Entitäten → \"Schüler\", \"Klasse\", \"Lehrer\"",
          "Beziehungen → \"ist-Mitschüler\", \"ist-Klassensprecher\", \"ist-Klassenlehrer\", \"unterrichtet\""
        ]
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60471493b0c00c20f201d1bf"
      },
      {
        "type": "SUBTITLE",
        "content": "Anzahlangaben im ER-Modell"
      },
      {
        "type": "LIST",
        "content": "Das ER-Modell wird um die Anzahlangagben erweitert. Zu jeder Beziehung müssen zwei Anzahlangaben bestimmt werden. Für die Beziehung „ist-Mitschüler“ können die folgenden beiden Fragen betrachtet werden:",
        "ordered": true,
        "list": [
          "Ein Schüler ist Mitscühler in wie vielen Klassen?",
          "Eine Klasse hat wie viele (Mit-)Schüler?"
        ]
      },
      {
        "type": "TEXT",
        "content": "Dabei wird also untersucht, wie viele Objekte der einen Entität durch die Beziehung von genau einem Objekt der anderen Entität beeinflusst werden."
      },
      {
        "type": "SUBTITLE",
        "content": "Ermittlung der Anzahlangabe (bei Klasse):"
      },
      {
        "type": "TEXT",
        "content": "\"Ein Schüler ist Mitschüler in wie vielen Klassen?\""
      },
      {
        "type": "TEXT",
        "content": "Da ein Schüler immer nur Schüler einer Klasse sein kann, wird in dem ER-Modell an der Position des Fragezeichens eine \"1\" eingetragen."
      },
      {
        "type": "SUBTITLE",
        "content": "Ermittlung der Anzahlangabe (bei Schüler):"
      },
      {
        "type": "TEXT",
        "content": "\"Eine Klasse hat wie viele (Mit-)Schüler)?\""
      },
      {
        "type": "TEXT",
        "content": "Da eine Klasse immer aus mehreren Schülern besteht, wird in dem ER-Modell an der Position des Fragezeichens ein „m“ eingetragen."
      },
      {
        "type": "SUBTITLE",
        "content": "ER-Modell mit Anzahlangaben"
      },
      {
        "type": "TEXT",
        "content": "Das um die Anzahlangaben erweiterte ER-Modell für die Beziehung „ist-Mitschüler“ sieht demnach wie folgt aus:"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/604715dbb0c00c20f201d1c1"
      },
      {
        "type": "TEXT",
        "content": "Auf diese Art und Weise kann das gesamte ER-Modell der Schuldatenbank um die Anzahlangaben erweitert werden."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Merkmale im ER-Modell"
      },
      {
        "type": "TEXT",
        "content": "Erst nachdem die Anzahlangaben im ER-Modell eingefügt worden sind, werden auch die Merkmale der Entitäten und Beziehungen aufgenommen. Diese werden als runde Kästchen dargestellt. Für jede Entität muss ein einzigartiges Identitätsmerkmal (ID) festgelegt werden – auch <u>Schlüsselmerkmal</u> genannt."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60471652b0c00c20f201d1c4"
      },
      {
        "type": "TEXT",
        "content": "Damit lassen sich alle noch fehlenden Informationen zum ER-Modell hinzufügen."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Einsatz des ER-Modells bei der Datenanalyse"
      },
      {
        "type": "LIST",
        "content": "Für die Entwicklung des Datenbanksystems liegt folgende Beschreibung vor:",
        "ordered": true,
        "list": [
          "Ermitteln der Entitäten",
          "Ermitteln der Beziehungen in der Anforderungsliste",
          "Erstellen eines vorläufigen ER-Modells (nur Entitäten und Beziehungen)",
          "Ermitteln aller Anzahlangaben aus der Anforderungsliste",
          "Erweitern des ER-Modells um die Anzahlangaben",
          "Ermitteln aller Merkmale zu den Entitäten und Beziehungen",
          "Erweitern des ER-Modells um die Merkmale. Dabei für jede Entität eine einzigartige ID festlegen!"
        ]
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Beispiel-Lösungen"
      },
      {
        "type": "TEXT",
        "content": "Es soll jeweils ein ER-Modell erstellt werden"
      },
      {
        "type": "SUBTITLE",
        "content": "<span class='list-number'>1</span>Lufttransport"
      },
      {
        "type": "LIST",
        "content": "Für die Entwicklung des Datenbanksystems liegt folgende Beschreibung vor:",
        "list": [
          "Auf einem Frachtflug werden Frachten, die von einem oder mehreren Kunden stammen, transportiert",
          "Die Fracht eines Kunden kann auf einen oder mehrere Flüge verteilt werden",
          "Ein Flug wird mit einem Flugzeug ausgeführt",
          "Ein Flugzeug wird für viele Flüge eingesetzt",
          "Ein Flugzeug wird von verschiedenen Piloten geflogen",
          "Piloten können auf verschiedenen Flugzeugen eingesetzt werden",
          "Ein Pilot führt viele Flüge durch",
          "Ein Flug wird von zwei Piloten ausgeführt"
        ]
      },
      {
        "type": "TEXT",
        "content": "Erstellen Sie ein enstsprechendes ER-Diagramm ohne Attribute"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/6043d019b0c00c20f201d175",
        "size": "s"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "<span class='list-number'>2</span>Lieferservice"
      },
      {
        "type": "TEXT",
        "content": "Die durchgeführten Lieferfahrten sollen in einem relatonalen Datenbanksystem erfasst werden"
      },
      {
        "type": "TEXT",
        "content": "a) Im ersten Entwicklungsschritt werden Sie beauftragt, für diesen Zweck ein ER-Modell zu erstellen"
      },
      {
        "type": "LIST",
        "content": "Vervollständigen Sie dazu auf der gegenüberliegenden Seite das ER-Diagramm anhand folgender Vorgaben",
        "list": [
          "Auf einer Lieferfahrt werden Frachten von einem oder mehreren Kunden transportiert",
          "Die Fracht eines Kunden kann auf eine oder mehrere Lieferfahrten verteilt werden",
          "Eine Lieferfahrt wird mit einem LKW ausgeführt",
          "Ein LKW wird für viele Lieferfahrten auf unterschiedlichen Routen eingesetzt",
          "Ein LKW wird von verschiedenen Fahreren gefahren",
          "Fahrer können auf verschiedenen LKW's eingesetzt werden",
          "Ein Fahrer führt viele Lieferfahrten durch",
          "Eine Lieferfahrt wird von einem Fahrer ausgeführt",
          "Eine Lieferfahrt führt über eine Route, die sich aus mehreren Strecken zusammensetzt",
          "Eine Strecke verbindet zwei Lager und kann zu verschiedenen Routen gehören"
        ]
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/6043d046b0c00c20f201d178",
        "size": "m"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "<span class='list-number'>3</span>Elektro-IT-Artikel"
      },
      {
        "type": "TEXT",
        "content": "Die Fachzeitschrift \"El-I.te\" für Elektro- und Informationstechnologie erscheint einmal im Quartal und enthält fundierte Artikel zu aktuellen Themen. Jede Ausgabe enthält eine Heft-CD, auf der unter anderem auch die Artikel der jeweiligen Ausgabe im PDF-Format gespeichert sind."
      },
      {
        "type": "TEXT",
        "content": "Die Schüler der Technik-AG nutzen diese PDF-Dateien, um die Artikel auf einer Dateiablage zu archivieren. Für jedes Jahr wird ein eigenes Verzeichnis angelegt. Für jede, in diesem Jahr erschienene Ausgabe wird wiederum ein Unterverzeichnis erstellt, in dem alle Artikel dieser Ausgabe zu finden sind."
      },
      {
        "type": "LIST",
        "content": "Anforderungsliste:",
        "ordered": true,
        "list": [
          "Welche Artikel gibt es?",
          "Um die Position des Artikels im Verzeichnisbaum bestimmen zu können, muss das Jahr, die Ausgabe und der Dateiname gespeichert werden",
          "Zusätzlich muss zu jedem Artikel ein Thema angegeben werden",
          "Welche Autoren gibt es?",
          "Ein Autor wird über den Vor- und Nachnamen oder das Autorenkürzel eindeutig bestimmt",
          "Ein oder mehrere Autoren schreiben einen Artikel",
          "Welche Schlüsselwörter gibt es?",
          "Das Schlüsselwort selbst wird gespeichert",
          "Ein Schlüsselwort kommt in mehreren Artikeln vor",
          "In einem Artikel können mehrere Schlüsselwörter vorkommen",
          "Welche Rubriken gibt es?",
          "Eine Rubrik hat eine Bezeichnung",
          "Jeder Artikel kann eindeutig einer Rubrik zugeordnet werden"
        ]
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/6043d055b0c00c20f201d17b",
        "size": "m"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "LIST",
        "content": "Quellen:",
        "list": [
          "<a href='https://www.westermann.de/artikel/978-3-14-222492-3/Datenbanken-Relationale-Datenbanken-entwerfen-und-realisieren'>Relationale Datenbanken entwerfen und realisieren. Schülerband 2. Auflage 2017.</a>"
        ]
      }
    ]
  },
  {
    "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/datenbank_einrichten_und_abfragen_bereitstellen_aufgabe",
    "_id": "605c875e23779759b9bb2903",
    "topicId": "605c90fe23779759b9bb2907",
    "title": "Datenbank einrichten und Abfragen bereitstellen - Aufgabe",
    "description": "Thema vom 24.03.2021",
    "subject": "lf-6",
    "type": "tasks",
    "lessonDate": "2021-03-24",
    "lastUpdate": "2021-05-25",
    "schoolWeek": "23",
    "elements": [
      {
        "type": "TITLE",
        "content": "Aufgaben"
      },
      {
        "type": "SUBTITLE",
        "content": "<span class='list-number'>1</span> Sportkurs-Verwaltung"
      },
      {
        "type": "TEXT",
        "content": "Für einen Sportverein soll eine Datenbank zur Verwaltung von Kursen entwickelt werden. Dafür wurde bereits folgende Vorlage in Form von Tabellen erstellt."
      },
      {
        "type": "TABLE_GROUP",
        "content": "",
        "elements": [
          {
            "type": "TABLE",
            "content": "",
            "rows": [
              {
                "type": "header",
                "columns": [
                  { "align": "left", "content": "Kunde" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "KundenID (PK)" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "Nachname" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "Vorname" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "Straße" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "PLZ" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "Ort" }
                ]
              }
            ]
          },
          {
            "type": "TABLE",
            "content": "",
            "rows": [
              {
                "type": "header",
                "columns": [
                  { "align": "left", "content": "KundeKurs" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "KundenID (FK)" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "KursID (FK)" }
                ]
              }
            ]
          },
          {
            "type": "TABLE",
            "content": "",
            "rows": [
              {
                "type": "header",
                "columns": [
                  { "align": "left", "content": "Kurs" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "KursID (PK)" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "KursartID (FK)" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "TrainerID (FK)" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "SportstätteID (FK)" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "Datum-Uhrzeit-Beginn" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "Preis" }
                ]
              }
            ]
          },
          {
            "type": "TABLE",
            "content": "",
            "rows": [
              {
                "type": "header",
                "columns": [
                  { "align": "left", "content": "Kursart" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "KursartID (PK)" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "Bezeichnung" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "SportartID (FK)" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "Teilnehmer-Max" }
                ]
              }
            ]
          },
          {
            "type": "TABLE",
            "content": "",
            "rows": [
              {
                "type": "header",
                "columns": [
                  { "align": "left", "content": "Trainer" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "TrainerID (PK)" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "Name" }
                ]
              }
            ]
          },
          {
            "type": "TABLE",
            "content": "",
            "rows": [
              {
                "type": "header",
                "columns": [
                  { "align": "left", "content": "Sportart" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "SportartID (PK)" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "Bezeichnung" }
                ]
              }
            ]
          },
          {
            "type": "TABLE",
            "content": "",
            "rows": [
              {
                "type": "header",
                "columns": [
                  { "align": "left", "content": "TrainerSportart" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "TrainerID (FK)" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "SportartID (FK)" }
                ]
              }
            ]
          },
          {
            "type": "TABLE",
            "content": "",
            "rows": [
              {
                "type": "header",
                "columns": [
                  { "align": "left", "content": "Sportstätte" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "SportstaetteID (PK)" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "Bezeichnung" }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "TEXT",
        "content": "Für diese Datenbank sollen Sie einige SQL-Anweisungen und Testdaten erstellen."
      },
      {
        "type": "HINT",
        "content": "Die Teilnehmer-Max in der Tabelle Kursart ist immer größer 0."
      },
      {
        "type": "TEXT",
        "content": "<b>a) Gewünschte Datenänderung: <br/> Reduzierung der Preise um 10% aller Kurse, die vor 16:00 Uhr beginnen. Erstellen Sie die entsprechende SQL-Anweisung.</b>"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TEXT",
        "content": "<b>b) Gewünschte Ausgabe: <br/> Liste aller Kunden aus dem Postleitzahlbereich 50000 bis 59999. Auflistung aller Kundenattribute. Aufsteigende Sortierung nach Nachname, Vorname. Erstellen Sie die entsprechende SQL-Anweisung.</b>"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "LIST",
        "content": "Quellen:",
        "list": [
          "<a href=''></a>"
        ]
      }
    ]
  },
  {
    "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/mariadb_datenbank_und_abfragen",
    "title": "MariaDB Datenbank und Abfragen",
    "description": "Thema vom 25.03.2021",
    "subject": "lf-6",
    "type": "article",
    "lessonDate": "2021-03-25",
    "lastUpdate": "2021-03-25",
    "schoolWeek": "23",
    "elements": [
      {
        "type": "TITLE",
        "content": "Definition"
      },
      {
        "type": "TEXT",
        "content": "..."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "LIST",
        "content": "Quellen:",
        "list": [
          "<a href=''></a>"
        ]
      }
    ]
  },
  {
    "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/normalisierung_und_normalformen",
    "_id": "60a5736559a0005b1c634b64",
    "topicId": "605c90fe23779759b9bb2907",
    "title": "Normalisierung und Normalformen",
    "description": "Thema vom 19.05.2021",
    "subject": "lf-6",
    "type": "article",
    "lessonDate": "2021-05-19",
    "lastUpdate": "2021-05-19",
    "schoolWeek": "25",
    "elements": [
      {
        "type": "TITLE",
        "content": "Definition"
      },
      {
        "type": "TEXT",
        "content": "Unter Normalisierung versteht man die Aufteilung von Attributen in mehrere Relationen (Tabellen) mithilfe der Normalisierungsregeln und deren Normalformen, sodass eine relationale Form entsteht, die keine vermeidbaren Redundanzen mehr enthält."
      },
      {
        "type": "TEXT",
        "content": "Ziel der Normalisierung ist eine redundanzfreie Datenspeicherung zu erstellen. Redundanzfrei bedeutet, dass keine Daten doppelt vorhanden sind. Redundante Datensätze können entfernt werden, ohne dass es zu Informationsverlusten kommt."
      },
      {
        "type": "HINT",
        "content": "Die Normalisierung einer Datenbank bringt funktionale Abhängigkeiten zwischen den Daten mit sich, es ist eine Möglichkeit relationale Datenbanken zu erhalten. Kann eingesetzt werden um Anomalien zu beseitigen oder Redundanzen zu minimieren."
      },
      {
        "type": "TEXT",
        "content": "In der Datenbankentwicklung ist die Dritte Normalform oft ausreichend, um die perfekte Balance aus Redundanz, Performance und Flexibilität für eine Datenbank zu gewährleisten. Natürlich gibt es auch Sonderfälle, z.B. im wissenschaftlichen Bereich, wo eine Datenbank bis zur 5. Normalform normalisiert werden kann bzw muss."
      },
      {
        "type": "SUBTITLE",
        "content": "Vorteile"
      },
      {
        "type": "LIST",
        "content": "",
        "list": [
          "Beseitigung von Redundanzen",
          "Vermeidung von Anomalien (funktionelle und transitive Abhängigkeiten)",
          "Erstellung eines klar strukturierten Datenbankmodells"
        ]
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Funktionale Abhängigkeit"
      },
      {
        "type": "TEXT",
        "content": "Eine funktionale Abhängigkeit zwischen Attribut Y und Attribut X liegt dann vor, wenn es zu jedem X genau ein Y gibt."
      },
      {
        "type": "SUBTITLE",
        "content": "Voll funktionale Abhängigkeit"
      },
      {
        "type": "TEXT",
        "content": "Eine vollständig funktionale Abhängigkeit liegt dann vor, wenn dass Nicht-Schlüsselattribut nicht nur von einem Teil der Attribute eines zusammengesetzten Schlüsselkandidaten funktional abhängig ist, sondern von allen Teilen eines Relationstyps. Die vollständig funktionale Abhängigkeit wird mit der 2. Normalform (2NF) erreicht."
      },
      {
        "type": "SUBTITLE",
        "content": "Transitive Abhängigkeit"
      },
      {
        "type": "TEXT",
        "content": "Eine transitive Abhängigkeit liegt dann vor, wenn Y von X funktional abhängig und Z von Y, so ist Z von X funktional abhängig. Diese Abhängigkeit ist transitiv. Die transitive Abhängigkeit wird mit 3. Normalform (3NF) erreicht."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Beispiel Normalisierungsprozess"
      },
      {
        "type": "SUBTITLE",
        "content": "1. Normalform | 1NF"
      },
      {
        "type": "TEXT",
        "content": "Eine Relation befindet sich in der ersten Normalform, wenn alle Attribute nur einfache Attributwerte aufweisen (Bezeichnung: atomar)."
      },
      {
        "type": "TABLE",
        "content": "<b>Relation Lernangebotesübersicht</b>",
        "rows": [
          {
            "type": "header",
            "columns": [
              { "align": "left", "content": "<u>SchülerNr</u>" },
              { "align": "left", "content": "Name" },
              { "align": "left", "content": "Vorname" },
              { "align": "left", "content": "Klasse" },
              { "align": "left", "content": "Klassenlehrer" },
              { "align": "left", "content": "LernangebotsNr" },
              { "align": "left", "content": "Beschreibung" },
              { "align": "left", "content": "Zeit in h" }
            ]
          },
          {
            "type": "default",
            "columns": [
              { "align": "left", "content": "1" },
              { "align": "left", "content": "Jürgens" },
              { "align": "left", "content": "Ina" },
              { "align": "left", "content": "11a" },
              { "align": "left", "content": "Lempel" },
              { "align": "left", "content": "2" },
              { "align": "left", "content": "Tanz" },
              { "align": "left", "content": "12" }
            ]
          },
          {
            "type": "default",
            "columns": [
              { "align": "left", "content": "2" },
              { "align": "left", "content": "Schmidt" },
              { "align": "left", "content": "Tom" },
              { "align": "left", "content": "12a" },
              { "align": "left", "content": "Breier" },
              { "align": "left", "content": "3" },
              { "align": "left", "content": "Chor" },
              { "align": "left", "content": "22" }
            ]
          },
        ]
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "LIST",
        "content": "Quellen:",
        "list": [
          "Normalisierung von Datenbanken - Datenbanken verstehen | 19.05.2021 | <a href='https://www.datenbanken-verstehen.de/datenmodellierung/normalisierung'>https://www.datenbanken-verstehen.de/datenmodellierung/normalisierung</a>",
          "Normalisierung und Abhängigkeiten - Datenbanken verstehen | 19.05.2021 | <a href='https://www.datenbanken-verstehen.de/datenmodellierung/normalisierung/abhaengigkeiten-normalisierung'>https://www.datenbanken-verstehen.de/datenmodellierung/normalisierung/abhaengigkeiten-normalisierung</a>",
          "Normalisierung von Datenbanken - Informatikmaterialien von Tino Hempel | 19.05.2021 | <a href='https://www.tinohempel.de/info/info/datenbank/normalisierung.htm'>https://www.tinohempel.de/info/info/datenbank/normalisierung.htm</a>"
        ]
      }
    ]
  },
  {
    "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/uebungen_zum_thema_normalisierung",
    "_id": "60aa77286f1e34465948183e",
    "topicId": "605c90fe23779759b9bb2907",
    "title": "Übungen zum Thema Normalisierung",
    "description": "Thema vom 19.05.2021",
    "subject": "lf-6",
    "type": "tasks",
    "lessonDate": "2021-05-19",
    "lastUpdate": "2021-05-19",
    "schoolWeek": "25",
    "elements": [
      {
        "type": "TITLE",
        "content": "Definition"
      },
      {
        "type": "TEXT",
        "content": "<span class='list-number'>1</span> <b>Aufgabe | Leicht | 25 Punkte</b>"
      },
      {
        "type": "TEXT",
        "content": "Die rapidPack GmbH stellt Maschinen aus verschiedenen Teilen her und will für ein neues Teilebestellsystem eine Datenbank entwickeln. Ein grober, noch unvollständiger Entwurf der Datenbank liegt bereits vor."
      },
      {
        "type": "LIST",
        "content": "a) Vervollständigen Sie das Datenmodell.",
        "list": [
          "Ergänzen Sie in den Tabellen <i>Teil</i>, <i>Bestellung</i>, <i>Lieferer</i> und <i>BestellPosition</i> die erforderlichen Attribute",
          {
            "content": "Ergänzen Sie die leere Tabelle, um die folgende Anforderung zu erfüllen:",
            "sublist": [
              "Ein Teil kann von verschiedenen Lieferern zu unterschiedlichen Preisen bezogen werden",
              "Für jede Bestellung kommen die Teile stets von einem Lieferanten",
              "Vergeben Sie einen sinnvollen Tabellennamen und tragen Sie die erforderlichen Atrribute ein"
            ]
          },
          "Kennzeichnen Sie die Primärschlüssel mit (PK) und die Fremdschlüssel mit (FK) ",
          "Zeichnen Sie die Beziehungen zwischen den Tabellen mit den Kardinalitäten ein"
        ]
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60aa770c6f1e34465948183c"
      },
      {
        "type": "TEXT",
        "content": "Erläutern Sie, warum die Tabelle <i>Lieferer</i> nicht der 3. Normalform entspricht."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TEXT",
        "content": "<span class='list-number'>2</span> <b>Aufgabe | Leicht | 25 Punkte</b>"
      },
      {
        "type": "TEXT",
        "content": "..."
      }
    ]
  },
  {
    "url": "entwickeln_und_bereitstellen_von_anwendungssystemen/uebungen_zum_thema_normalisierung_2",
    "_id": "60aa855a6f1e34465948184c",
    "topicId": "605c90fe23779759b9bb2907",
    "title": "Übungen zum Thema Normalisierung (2)",
    "description": "Thema vom 20.05.2021",
    "subject": "lf-6",
    "type": "tasks",
    "lessonDate": "2021-05-20",
    "lastUpdate": "2021-05-23",
    "schoolWeek": "25",
    "elements": [
      {
        "type": "TITLE",
        "content": "Definition"
      },
      {
        "type": "TEXT",
        "content": "<span class='list-number'>1</span> <b>Aufgabe | Leicht | 25 Punkte</b>"
      },
      {
        "type": "TEXT",
        "content": "..."
      }
    ]
  },
];
