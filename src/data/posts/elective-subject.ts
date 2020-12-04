import {Post} from '../../app/models/post';

export const WP_POSTS: Post[] = [
  {
    "url": "vernetzte_steuerungssysteme/grundlagen",
    "topic": "Vernetzte Steuerungssysteme",
    "subject": "wp",
    "lessonDate": "2020-08-11",
    "lastUpdate": "2020-10-29",
    "schoolWeek": "5",
    "elements": [
      {
        "type": "subtitle",
        "content": "<b><span class='list-number'>1</span> Grundlagen - SPS</b>"
      },
      {
        "type": "text",
        "content": "Der Begriff SPS leitet sich vom englischen Terminus PLC (Programmable Logic Controller) ab. Speicherprogrammierte Steuerungen werden zur Steuerung von Maschinen und Anlagen eingesetzt. Bei einer speicherprogrammierten Steuerung, kurz SPS, handelt es sich um eine Komponente, die programmiert und eingesetzt wird, um eine Anlage oder Maschine zu steuern. Sie werden unter anderem in vollautomatischen Produktionsanlagen eingesetzt."
      },
      {
        "type": "image",
        "content": "http://159.65.105.150:3000/images/5f6fc29e59df30501b5d0d8a"
      },
      {
        "type": "text",
        "content": "Nach der EN 61131 wird die SPS folgendermaßen definiert:"
      },
      {
        "type": "hint",
        "content": "Eine SPS ist ein digital arbeitendes elektronisches System für den Einsatz in industriellen Umgebungen mit einem programmierbaren Speicher zur internen Speicherung der anwenderorientierten Steuerungsanweisungen zur Implementierung spezifischer Funktionen wie z.B. Verknüpfungssteuerung, Ablaufsteuerung, Zeit-, Zähl und arithmetische Funktionen, um durch digitale oder analoge Eingangs- und Ausgangssignale verschiedene Arten von Maschinen oder Prozessen zu steuern."
      },
      {
        "type": "line",
        "content": "<hr/>"
      },
      {
        "type": "subtitle",
        "content": "<b><span class='list-number'>2</span> EVA-Prinzip (Eingabe-Verarbeitung-Ausgabe)</b>"
      },
      {
        "type": "text",
        "content": "Das EVA-Prinzip beschreibt ein Grundprinzip in der Verarbeitung von Daten. Die Abkürzung leitet sich aus den ersten Buchstaben der Begriffe <b>E</b>ingabe, <b>V</b>erarbeitung und <b>A</b>usgabe ab."
      },
      {
        "type": "image",
        "content": "http://159.65.105.150:3000/images/5f6fc0bd59df30501b5d0d85"
      },
      {
        "type": "subtitle",
        "content": "Eingabe"
      },
      {
        "type": "text",
        "content": "Damit eine Datenverarbeitung stattfinden kann, müssen zuerst Daten vorhanden sein. Diese Daten lassen sich z.B. durch Tastatur, Maus, oder Gamepad eingeben."
      },
      {
        "type": "subtitle",
        "content": "Verarbeitung"
      },
      {
        "type": "text",
        "content": "Die Recheneinheit (CPU, Prozessor, Controller) kann auf die Daten zugreifen. Die CPU - bestehend aus Speicher, Steuer- und Rechenwerk - berechnet aus der Dateneingabe die Datenausgabe. Für die nötige Berechnung oder zur späteren Aufbewahrung werden die Daten (zwischen-)gespeichert. Die gängigsten Speicher sind: Festplatte, SSD, Arbeitsspeicher (RAM), ROM, CD, DVD oder USB-Sticks."
      },
      {
        "type": "subtitle",
        "content": "Ausgabe"
      },
      {
        "type": "text",
        "content": "Damit die Daten genutzt werden können, müssen sie wieder in einer bestimmten Form ausgegeben werden. Die erfolgt am häufigsten durch Bildschirm, Drucker oder Lautsprecher."
      },
      {
        "type": "list",
        "content": "Beispiel: Ihr habt eine Tastatur und möchtet über die Tasten einen Text in einem Texteditor eingeben.",
        "ordered": true,
        "list": [
          "Tasten werden gedrückt",
          "CPU / Prozessor des Computers verarbeitet die Eingabe (keyCode der jeweiligen Taste)",
          "Text wird im Texteditor ausgegeben"
        ]
      },
      {
        "type": "line",
        "content": "<hr/>"
      },
      {
        "type": "subtitle",
        "content": "<b><span class='list-number'>3</span> Zyklische Bearbeitung eines SPS-Programms</b>"
      },
      {
        "type": "text",
        "content": "S1<sub>0</sub> && S2<sub>1</sub> = A1<sub>0</sub>"
      },
      {
        "type": "image",
        "content": "http://159.65.105.150:3000/images/5f6fc2ac59df30501b5d0d8c"
      },
      {
        "type": "line",
        "content": "<hr/>"
      },
      {
        "type": "subtitle",
        "content": "<b><span class='list-number'>4</span> SPS - Baugruppen</b>"
      },
      {
        "type": "text",
        "content": "PROFI BUS (Process Field Bus)"
      },
      {
        "type": "line",
        "content": "<hr/>"
      },
      {
        "type": "subtitle",
        "content": "<b><span class='list-number'>5</span> Hochverfügbarkeit</b>"
      },
      {
        "type": "image",
        "content": "http://159.65.105.150:3000/images/5f6fc2b459df30501b5d0d8e"
      },
      {
        "type": "line",
        "content": "<hr/>"
      },
      {
        "type": "subtitle",
        "content": "<b><span class='list-number'>6</span> Bedien-Beobachtungssysteme</b>"
      },
      {
        "type": "image",
        "content": "http://159.65.105.150:3000/images/5f6fc2ba59df30501b5d0d90"
      },
      {
        "type": "line",
        "content": "<hr/>"
      },
      {
        "type": "subtitle",
        "content": "<b><span class='list-number'>7</span> SPS-Darstellung</b>"
      },
      {
        "type": "image",
        "content": "http://159.65.105.150:3000/images/5f6fc2c459df30501b5d0d92"
      }
    ]
  },
  {
    "url": "vernetzte_steuerungssysteme/aufbau_sps_programm_und_grafcet",
    "topic": "Vernetzte Steuerungssysteme",
    "subject": "wp",
    "lessonDate": "2020-08-12",
    "lastUpdate": "2020-10-31",
    "schoolWeek": "6",
    "elements": [
      {
        "type": "subtitle",
        "content": "<span class='list-number'>1</span> Auftrag / Problemstellung"
      },
      {
        "type": "text",
        "content": "Ein Supermarkt verfügt über ein Kühlhaus zur Lagerung von Lebensmitteln. Zur Steuerung der Anlage steht ein \"Hand-0-Automatik-Schalter\" zur Verfügung. Die Kühlung wird im Automatikbetrieb durch ein Thermostat (B1) eingeschaltet, wenn die Temperatur über -7 °C steigt. Das Kühlaggregat kann im Handbetrieb dauerhaft eingeschaltet werden. Beim Betrieb der Kühlung leuchtet eine Meldeleuchte (P1)."
      },
      {
        "type": "text",
        "content": "Löst das Motorschutzrelais (F1) aus, soll die Kühlung ausgeschaltet werden. Eine Alarmhupe wird eingeschaltet, sobald das Motorschutzrelais auslöst oder das Sicherheitsthermostat (B2) eine Temperatur von über -2 °C meldet. Sie kann über einen Quittiertaster (S2) ausgetastet werden."
      },
      {
        "type": "subtitle",
        "content": "Anlegen einer Symboltabelle"
      },
      {
        "type": "image",
        "content": "http://159.65.105.150:3000/images/5f6fc6dd59df30501b5d0d94"
      },
      {
        "type": "subtitle",
        "content": "Zeichnen des Anschlussplans"
      },
      {
        "type": "image",
        "content": "http://159.65.105.150:3000/images/5f6fc6ed59df30501b5d0d96"
      },
      {
        "type": "subtitle",
        "content": "Erstellen des Steuerungsprogramms"
      },
      {
        "type": "image",
        "content": "http://159.65.105.150:3000/images/5f6fc7cb59df30501b5d0da2"
      },
      {
        "type": "line",
        "content": "<hr/>"
      },
      {
        "type": "subtitle",
        "content": "<span class='list-number'>2</span> Symboltabelle / Anschlussplan (1-Signal = eingeschaltet)"
      },
      {
        "type": "text",
        "content": "→ Drahtbruch-Sicherheit - statt 1 wird 0 ausgewertet"
      },
      {
        "type": "line",
        "content": "<hr/>"
      },
      {
        "type": "subtitle",
        "content": "<span class='list-number'>3</span> Programm / Netzwerk"
      },
      {
        "type": "text",
        "content": "→ Pro Ausgang ein Netzwerk"
      },
      {
        "type": "line",
        "content": "<hr/>"
      },
      {
        "type": "subtitle",
        "content": "<span class='list-number'>4</span> Test"
      },
      {
        "type": "text",
        "content": "FUP → Funktionsplan <br/> KOP → Kontaktplan <br/> AWL → Anweisungsliste"
      },
      {
        "type": "text",
        "content": "S1<sub>0</sub> && S2<sub>1</sub> = A1<sub>0</sub>"
      },
      {
        "type": "line",
        "content": "<hr/>"
      },
      {
        "type": "subtitle",
        "content": "<b>Speicherbaustein</b>"
      },
      {
        "type": "text",
        "content": "S<sub>0</sub> && R<sub>0</sub> = Q<sub>1</sub> <br/> S<sub>0</sub> && R<sub>1</sub> = Q<sub>0</sub> <br/> S<sub>1</sub> && R<sub>1</sub> = Q<sub>0</sub> <br/> S<sub>1</sub> && R<sub>1</sub> = Q<sub>1</sub>"
      },
      {
        "type": "text",
        "content": "Letzter Befehl hat Vorrang"
      },
      {
        "type": "list",
        "content": "Arten",
        "list": [
          "Verknüfungssteuerung",
          "Ablaufsteuerung (zB. bei einer Waschmaschine)"
        ]
      },
      {
        "type": "line",
        "content": "<hr/>"
      },
      {
        "type": "subtitle",
        "content": "GRAFCET"
      },
      {
        "type": "text",
        "content": "Konstrukteure sollten die europäische GRAFCET-Norm (DIN EN 60848) gut kennen, denn mit ihr können Maschinen exakt beschrieben werden, um die Wahrscheinlichkeit zu erhöhen dass alle technischen Gesprächspartner einen GRAFCET-Plan verstehen. Immerhin ist GRAFCET seit vielen Jahren Bestandteil des Lehrplans von technischen Ausbildungsberufen."
      },
      {
        "type": "text",
        "content": "Beispiel einer Ablaufkette nach GRAFCET: Steuerung einer Förderanlage mit Ausstoß von Objekten über einen Zylinder."
      },
      {
        "type": "image",
        "content": "http://159.65.105.150:3000/images/5f6fc74f59df30501b5d0d9a"
      },
      {
        "type": "line",
        "content": "<hr/>"
      },
      {
        "type": "subtitle",
        "content": "GRAFCET - Operatoren (1)"
      },
      {
        "type": "image",
        "content": "http://159.65.105.150:3000/images/5f6fc7d359df30501b5d0da4"
      },
      {
        "type": "line",
        "content": "<hr/>"
      },
      {
        "type": "subtitle",
        "content": "GRAFCET - Operatoren (2)"
      },
      {
        "type": "image",
        "content": "http://159.65.105.150:3000/images/5f6fc7df59df30501b5d0da6"
      },
      {
        "type": "line",
        "content": "<hr/>"
      },
      {
        "type": "subtitle",
        "content": "GRAFCET - Operatoren (3)"
      },
      {
        "type": "image",
        "content": "http://159.65.105.150:3000/images/5f6fc7e859df30501b5d0da8"
      }
    ]
  },
  {
    "url": "vernetzte_steuerungssysteme/sensoren_und_schrittketten_aufbau_und_befehle",
    "topic": "Vernetzte Steuerungssysteme",
    "subject": "wp",
    "lessonDate": "2020-09-02",
    "lastUpdate": "2020-09-27",
    "schoolWeek": "2",
    "elements": [
      {
        "type": "title",
        "content": "Definition"
      },
      {
        "type": "image",
        "content": "http://159.65.105.150:3000/images/5f6fcb5d59df30501b5d0daa"
      },
      {
        "type": "text",
        "content": "Schrittketten / Ablaufsteuerungen benötigen wir zur Steuerung von komplexen Prozessabläufen die sequentiell - also nach und nach - und wiederholt abgearbeitet werden. Ein Ablauf ergibt sich durch die Aneinanderreihung verschiedener Schritte, wobei jede Ablaufsteuerung einen sogenannten Initial-Schritt / Start-Schritt und einen End-Schritt besitzt."
      },
      {
        "type": "text",
        "content": "Zwischen den beiden Schritten können theoretisch beliebig viele Zwischenschritte eingesetzt werden - Die Anzahl kann jedoch beschränkt sein, bei S7 SPS auf 250 Schritte begrenzt."
      },
      {
        "type": "line",
        "content": "<hr/>"
      },
      {
        "type": "subtitle",
        "content": "Regeln für Schrittketten / Ablaufsteuerungen (EN 60848)"
      },
      {
        "type": "list",
        "content": "",
        "list": [
          "Eine Ablaufkette besteht aus Schritten und Weiterschaltbedingungen (Transitionen)",
          "Zwischen zwei Schritten steht immer eine Transition",
          "Der Anfangsschritt ist zu Beginn einer Ablaufkette ohne Bedingung aktiv",
          "In linearen Ablaufketten ist immer nur ein Schritt aktiv",
          "Man gelangt von einem Schritt in den nächste, wenn der vorherige Schritt aktiv ist und die Transition erfüllt ist",
          "Der nachfolgende Schritt setzt den vorherigen Schritt zurück",
          "Den Schritten sind Aktionen zugeordnet, die vom jeweiligen Schritt ausgelöst werden"
        ]
      }
    ]
  },
  {
    "url": "vernetzte_steuerungssysteme/grafcet_ablaufsteuerungen_erstellen",
    "topic": "Vernetzte Steuerungssysteme",
    "subject": "wp",
    "lessonDate": "2020-09-23",
    "lastUpdate": "2020-10-16",
    "schoolWeek": "16",
    "elements": [
      {
        "type": "title",
        "content": "Definition"
      },
      {
        "type": "subtitle",
        "content": "GRAFCET Ablaufsteuerung"
      },
      {
        "type": "text",
        "content": "Dreh- und Angelpunkt in der GRAFCET Norm sind Schritte, Transitionen und Aktionen. Die richtige Kombination dieser Elemente erzeugt eine genaue Beschreibung eines technischen Ablaufs. Man begegnet in der Praxis häufig GRAFCET-Plänen, die offensichtlich falsch sind bzw. nicht der Norm entsprechen. Es gibt aber einige Kernpunkte, die sehr wichtig für das Verständnis dieser Beschreibungssprache sind."
      },
      {
        "type": "text",
        "content": "GRAFCET ist eine europäische DIN-Norm (DIN EN60848) für das Erstellen von Funktionsplänen speziell für Ablaufsteuerungen. Mithilfe von Schritten und Transitionen (Übergängen) kann ein technischer Ablauf dargestellt werden, welche die Funktionsweise einer Maschine oder Anlage beschreibt. In Deutschland ist GRAFCET Bestandteil des Lehrplans von vielen technischen Berufen wie z.B. Mechatroniker, Elektroniker für Automatisierungstechnik, Elektroniker für Betriebstechnik, Industriemechaniker und Fachinformatiker."
      },
      {
        "type": "image",
        "content": "http://159.65.105.150:3000/images/5f88c6c6e20bf42e68ab2b78"
      },
      {
        "type": "text",
        "content": "Mittels dieser Norm können sich Fachleute verschiedener Bereiche über die Abläufe einer Maschine unterhalten. Der Konstrukteur konstruiert eine Maschine und beschreibt den Ablauf mit GRAFCET. Der Programmierer kann daraus ein SPS-Programm entwickeln und die Maschine in Betrieb nehmen. Das Servicepersonal kann im Störungsfall den GRAFCET-Plan zu Hilfe nehmen, um die Fehlerursache zu finden."
      },
      {
        "type": "list",
        "content": "Folgende Kernpunkte sind bei GRAFCET einzuhalten",
        "list": [
          "Schritte und Transitionen müssen sich immer abwechseln - zwei Schritte oder zwei Transitionen hintereinander sind nicht erlaubt",
          "Eine Transition ist freigegeben, wenn alle Schritte, die mit der Transition verbunden sind, aktiv sind. Eine Transition löst aus, wenn diese freigegeben ist und wenn die Transitionsbedingung erfüllt ist",
          "Mehrere Schritte können gleichzeitig aktiv sein"
        ]
      },
      {
        "type": "line",
        "content": "<hr/>"
      },
      {
        "type": "image",
        "content": "http://159.65.105.150:3000/images/5f88c6d0e20bf42e68ab2b7a"
      }
    ]
  },
  {
    "url": "vernetzte_steuerungssysteme/grafcet_ablaufsteuerung_uebung",
    "topic": "Vernetzte Steuerungssysteme",
    "subject": "wp",
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
        "content": "GRAFCET Ablaufsteuerung Entwurfstext"
      }
    ]
  },








  {
    "url": "test",
    "topic": "test",
    "subject": "wp",
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
