import { PostArticle } from '../../app/models/post';
/* eslint-disable quotes, quote-props, max-len, comma-dangle */

const WP_POSTS: PostArticle[] = [
  {
    "url": "vernetzte_steuerungssysteme/grundlagen_speicherprogrammierte_steuerungen",
    "_id": "5f429fa0165d0ab470bc5800",
    "topicId": "6056906307c61731b8d162f1",
    "title": "SPS Grundlagen - Speicherprogrammierte Steuerungen",
    "description": "Mitschrift vom 11.08.2020",
    "subject": "wp",
    "type": "article",
    "lessonDate": "2020-08-11",
    "lastUpdate": "2021-05-15",
    "schoolWeek": "14",
    "elements": [
      {
        "type": "TITLE",
        "content": "Defintion"
      },
      {
        "type": "TEXT",
        "content": "Der Begriff SPS leitet sich vom englischen Terminus PLC (Programmable Logic Controller) ab. Speicherprogrammierte Steuerungen werden zur Steuerung von Maschinen und Anlagen eingesetzt. Bei einer speicherprogrammierten Steuerung, kurz SPS, handelt es sich um eine Komponente, die programmiert und eingesetzt wird, um eine Anlage oder Maschine zu steuern. Sie werden unter anderem in vollautomatischen Produktionsanlagen eingesetzt."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5f6fc29e59df30501b5d0d8a"
      },
      {
        "type": "TEXT",
        "content": "Nach der EN 61131 wird die SPS folgendermaßen definiert:"
      },
      {
        "type": "HINT",
        "content": "Eine SPS ist ein digital arbeitendes elektronisches System für den Einsatz in industriellen Umgebungen mit einem programmierbaren Speicher zur internen Speicherung der anwenderorientierten Steuerungsanweisungen zur Implementierung spezifischer Funktionen wie z.B. Verknüpfungssteuerung, Ablaufsteuerung, Zeit-, Zähl und arithmetische Funktionen, um durch digitale oder analoge Eingangs- und Ausgangssignale verschiedene Arten von Maschinen oder Prozessen zu steuern."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "EVA-Prinzip (Eingabe-Verarbeitung-Ausgabe)"
      },
      {
        "type": "TEXT",
        "content": "Das EVA-Prinzip beschreibt ein Grundprinzip in der Verarbeitung von Daten. Die Abkürzung leitet sich aus den ersten Buchstaben der Begriffe <b>E</b>ingabe, <b>V</b>erarbeitung und <b>A</b>usgabe ab."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5f6fc0bd59df30501b5d0d85"
      },
      {
        "type": "SUBTITLE",
        "content": "Eingabe"
      },
      {
        "type": "TEXT",
        "content": "Damit eine Datenverarbeitung stattfinden kann, müssen zuerst Daten vorhanden sein. Diese Daten lassen sich z.B. durch Tastatur, Maus, oder Gamepad eingeben."
      },
      {
        "type": "SUBTITLE",
        "content": "Verarbeitung"
      },
      {
        "type": "TEXT",
        "content": "Die Recheneinheit (CPU, Prozessor, Controller) kann auf die Daten zugreifen. Die CPU - bestehend aus Speicher, Steuer- und Rechenwerk - berechnet aus der Dateneingabe die Datenausgabe. Für die nötige Berechnung oder zur späteren Aufbewahrung werden die Daten (zwischen-)gespeichert. Die gängigsten Speicher sind: Festplatte, SSD, Arbeitsspeicher (RAM), ROM, CD, DVD oder USB-Sticks."
      },
      {
        "type": "SUBTITLE",
        "content": "Ausgabe"
      },
      {
        "type": "TEXT",
        "content": "Damit die Daten genutzt werden können, müssen sie wieder in einer bestimmten Form ausgegeben werden. Die erfolgt am häufigsten durch Bildschirm, Drucker oder Lautsprecher."
      },
      {
        "type": "LIST",
        "content": "Beispiel: Ihr habt eine Tastatur und möchtet über die Tasten einen Text in einem Texteditor eingeben.",
        "ordered": true,
        "list": [
          "Tasten werden gedrückt",
          "CPU / Prozessor des Computers verarbeitet die Eingabe (keyCode der jeweiligen Taste)",
          "Text wird im Texteditor ausgegeben"
        ]
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "<b><span class='list-number'>3</span> Zyklische Bearbeitung eines SPS-Programms</b>"
      },
      {
        "type": "TEXT",
        "content": "S1<sub>0</sub> && S2<sub>1</sub> = A1<sub>0</sub>"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5f6fc2ac59df30501b5d0d8c"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "<b><span class='list-number'>4</span> SPS - Baugruppen</b>"
      },
      {
        "type": "TEXT",
        "content": "PROFI BUS (Process Field Bus)"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "<b><span class='list-number'>5</span> Hochverfügbarkeit</b>"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5f6fc2b459df30501b5d0d8e"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "<b><span class='list-number'>6</span> Bedien-Beobachtungssysteme</b>"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5f6fc2ba59df30501b5d0d90"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "<b><span class='list-number'>7</span> SPS-Darstellung</b>"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5f6fc2c459df30501b5d0d92"
      }
    ]
  },
  {
    "url": "vernetzte_steuerungssysteme/aufbau_sps_programm_und_grafcet",
    "_id": "5f429fb1165d0ab470bc5801",
    "topicId": "6056906307c61731b8d162f1",
    "title": "Aufbau SPS-Programm & GRAFCET",
    "description": "Mitschrift vom 12.08.2020",
    "subject": "wp",
    "type": "article",
    "lessonDate": "2020-08-12",
    "lastUpdate": "2021-05-15",
    "schoolWeek": "14",
    "elements": [
      {
        "type": "SUBTITLE",
        "content": "<span class='list-number'>1</span> Auftrag / Problemstellung"
      },
      {
        "type": "TEXT",
        "content": "Ein Supermarkt verfügt über ein Kühlhaus zur Lagerung von Lebensmitteln. Zur Steuerung der Anlage steht ein \"Hand-0-Automatik-Schalter\" zur Verfügung. Die Kühlung wird im Automatikbetrieb durch ein Thermostat (B1) eingeschaltet, wenn die Temperatur über -7 °C steigt. Das Kühlaggregat kann im Handbetrieb dauerhaft eingeschaltet werden. Beim Betrieb der Kühlung leuchtet eine Meldeleuchte (P1)."
      },
      {
        "type": "TEXT",
        "content": "Löst das Motorschutzrelais (F1) aus, soll die Kühlung ausgeschaltet werden. Eine Alarmhupe wird eingeschaltet, sobald das Motorschutzrelais auslöst oder das Sicherheitsthermostat (B2) eine Temperatur von über -2 °C meldet. Sie kann über einen Quittiertaster (S2) ausgetastet werden."
      },
      {
        "type": "SUBTITLE",
        "content": "Anlegen einer Symboltabelle"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5f6fc6dd59df30501b5d0d94"
      },
      {
        "type": "SUBTITLE",
        "content": "Zeichnen des Anschlussplans"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5f6fc6ed59df30501b5d0d96"
      },
      {
        "type": "SUBTITLE",
        "content": "Erstellen des Steuerungsprogramms"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5f6fc7cb59df30501b5d0da2"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "<span class='list-number'>2</span> Symboltabelle / Anschlussplan (1-Signal = eingeschaltet)"
      },
      {
        "type": "TEXT",
        "content": "→ Drahtbruch-Sicherheit - statt 1 wird 0 ausgewertet"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "<span class='list-number'>3</span> Programm / Netzwerk"
      },
      {
        "type": "TEXT",
        "content": "→ Pro Ausgang ein Netzwerk"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "<span class='list-number'>4</span> Test"
      },
      {
        "type": "TEXT",
        "content": "FUP → Funktionsplan <br/> KOP → Kontaktplan <br/> AWL → Anweisungsliste"
      },
      {
        "type": "TEXT",
        "content": "S1<sub>0</sub> && S2<sub>1</sub> = A1<sub>0</sub>"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "<b>Speicherbaustein</b>"
      },
      {
        "type": "TEXT",
        "content": "S<sub>0</sub> && R<sub>0</sub> = Q<sub>1</sub> <br/> S<sub>0</sub> && R<sub>1</sub> = Q<sub>0</sub> <br/> S<sub>1</sub> && R<sub>1</sub> = Q<sub>0</sub> <br/> S<sub>1</sub> && R<sub>1</sub> = Q<sub>1</sub>"
      },
      {
        "type": "TEXT",
        "content": "Letzter Befehl hat Vorrang"
      },
      {
        "type": "LIST",
        "content": "Arten",
        "list": [
          "Verknüfungssteuerung",
          "Ablaufsteuerung (zB. bei einer Waschmaschine)"
        ]
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "GRAFCET"
      },
      {
        "type": "TEXT",
        "content": "Konstrukteure sollten die europäische GRAFCET-Norm (DIN EN 60848) gut kennen, denn mit ihr können Maschinen exakt beschrieben werden, um die Wahrscheinlichkeit zu erhöhen dass alle technischen Gesprächspartner einen GRAFCET-Plan verstehen. Immerhin ist GRAFCET seit vielen Jahren Bestandteil des Lehrplans von technischen Ausbildungsberufen."
      },
      {
        "type": "TEXT",
        "content": "Beispiel einer Ablaufkette nach GRAFCET: Steuerung einer Förderanlage mit Ausstoß von Objekten über einen Zylinder."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5f6fc74f59df30501b5d0d9a"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "GRAFCET - Operatoren (1)"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5f6fc7d359df30501b5d0da4"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "GRAFCET - Operatoren (2)"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5f6fc7df59df30501b5d0da6"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "GRAFCET - Operatoren (3)"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5f6fc7e859df30501b5d0da8"
      }
    ]
  },
  {
    "url": "vernetzte_steuerungssysteme/sensoren_und_schrittketten_aufbau_und_befehle",
    "_id": "5f6fcb16539ea9f7ca3856ed",
    "topicId": "6056906307c61731b8d162f1",
    "title": "Sensoren & Schrittketten - Aufbau und Befehle",
    "description": "Mitschrift vom 02.09.2020",
    "subject": "wp",
    "type": "article",
    "lessonDate": "2020-09-02",
    "lastUpdate": "2021-05-15",
    "schoolWeek": "15",
    "elements": [
      {
        "type": "TITLE",
        "content": "Definition"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5f6fcb5d59df30501b5d0daa"
      },
      {
        "type": "TEXT",
        "content": "Schrittketten / Ablaufsteuerungen benötigen wir zur Steuerung von komplexen Prozessabläufen die sequentiell - also nach und nach - und wiederholt abgearbeitet werden. Ein Ablauf ergibt sich durch die Aneinanderreihung verschiedener Schritte, wobei jede Ablaufsteuerung einen sogenannten Initial-Schritt / Start-Schritt und einen End-Schritt besitzt."
      },
      {
        "type": "TEXT",
        "content": "Zwischen den beiden Schritten können theoretisch beliebig viele Zwischenschritte eingesetzt werden - Die Anzahl kann jedoch beschränkt sein, bei S7 SPS auf 250 Schritte begrenzt."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Regeln für Schrittketten / Ablaufsteuerungen (EN 60848)"
      },
      {
        "type": "LIST",
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
    "_id": "5f7a5afe26fca377f7ed4e6a",
    "topicId": "6056906307c61731b8d162f1",
    "title": "GRAFCET Ablaufsteuerungen erstellen",
    "description": "Mitschrift vom 23.09.2020",
    "subject": "wp",
    "type": "article",
    "lessonDate": "2020-09-23",
    "lastUpdate": "2021-06-26",
    "schoolWeek": "16",
    "elements": [
      {
        "type": "TITLE",
        "content": "Definition"
      },
      {
        "type": "SUBTITLE",
        "content": "GRAFCET Ablaufsteuerung"
      },
      {
        "type": "TEXT",
        "content": "Dreh- und Angelpunkt in der GRAFCET Norm sind Schritte, Transitionen und Aktionen. Die richtige Kombination dieser Elemente erzeugt eine genaue Beschreibung eines technischen Ablaufs. Man begegnet in der Praxis häufig GRAFCET-Plänen, die offensichtlich falsch sind bzw. nicht der Norm entsprechen. Es gibt aber einige Kernpunkte, die sehr wichtig für das Verständnis dieser Beschreibungssprache sind."
      },
      {
        "type": "HINT",
        "content": "Der Begriff GRAFCET stammt aus dem Französischen und ist eine Abkürzung und steht für: <b>GRA</b>phe <b>F</b>onctionnel de <b>C</b>ommande <b>E</b>tape <b>T</b>ransition. Ins Deutsche übersetzt bedeutet dies: Darstellung der Steuerungsfunktion mit Schritten und Weiterschaltbedingungen."
      },
      {
        "type": "TEXT",
        "content": "GRAFCET ist eine europäische DIN-Norm (DIN EN60848) für das Erstellen von Funktionsplänen speziell für Ablaufsteuerungen. Mithilfe von Schritten und Transitionen (Übergängen) kann ein technischer Ablauf dargestellt werden, welche die Funktionsweise einer Maschine oder Anlage beschreibt. In Deutschland ist GRAFCET Bestandteil des Lehrplans von vielen technischen Berufen wie z.B. Mechatroniker, Elektroniker für Automatisierungstechnik, Elektroniker für Betriebstechnik, Industriemechaniker und Fachinformatiker."
      },
      {
        "type": "TEXT",
        "content": "Die Abläufe werden wie bisher in Schritte und Transitionen unterteilt. ..."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5f88c6c6e20bf42e68ab2b78"
      },
      {
        "type": "TEXT",
        "content": "Mittels dieser Norm können sich Fachleute verschiedener Bereiche über die Abläufe einer Maschine unterhalten. Der Konstrukteur konstruiert eine Maschine und beschreibt den Ablauf mit GRAFCET. Der Programmierer kann daraus ein SPS-Programm entwickeln und die Maschine in Betrieb nehmen. Das Servicepersonal kann im Störungsfall den GRAFCET-Plan zu Hilfe nehmen, um die Fehlerursache zu finden."
      },
      {
        "type": "LIST",
        "content": "Folgende Kernpunkte sind bei GRAFCET einzuhalten",
        "list": [
          "Schritte und Transitionen müssen sich immer abwechseln - zwei Schritte oder zwei Transitionen hintereinander sind nicht erlaubt",
          "Eine Transition ist freigegeben, wenn alle Schritte, die mit der Transition verbunden sind, aktiv sind. Eine Transition löst aus, wenn diese freigegeben ist und wenn die Transitionsbedingung erfüllt ist",
          "Mehrere Schritte können gleichzeitig aktiv sein"
        ]
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5f88c6d0e20bf42e68ab2b7a"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "LIST",
        "content": "Quellen:",
        "list": [
          "Aus für den Funktionsplan – jetzt gilt GRAFCET (01/2007) | 26.06.2021 | <a href='https://www.festo-didactic.com/ov3/media/customers/1100/grafcet_kompakt_2008_1.pdf'>https://www.festo-didactic.com/ov3/media/customers/1100/grafcet_kompakt_2008_1.pdf</a>"
        ]
      }
    ]
  },
  {
    "url": "vernetzte_steuerungssysteme/grafcet_ablaufsteuerung_uebung",
    "_id": "5fa12b89641a40621c5ff725",
    "topicId": "6056906307c61731b8d162f1",
    "title": "GRAFCET Ablaufsteuerung - Übung",
    "description": "Mitschrift vom 28.10.2020",
    "subject": "wp",
    "type": "tasks",
    "lessonDate": "2020-10-28",
    "lastUpdate": "2021-08-16",
    "schoolWeek": "17",
    "elements": [
      {
        "type": "TITLE",
        "content": "Definition"
      },
      {
        "type": "TABLE",
        "content": "",
        "rows": [
          {
            "type": "default",
            "columns": [
              { "align": "left", "content": "Pfeil nach oben" },
              { "align": "left", "content": "Vorgang wird ausgeführt wenn der Schritt anfängt" }
            ]
          },
          {
            "type": "default",
            "columns": [
              { "align": "left", "content": "Pfeil nach unten" },
              { "align": "left", "content": "Vorgang wird ausgeführt wenn der Schritt fertig ist" }
            ]
          },
          {
            "type": "default",
            "columns": [
              { "align": "left", "content": "<b>M</b>0.1" },
              { "align": "left", "content": "Zustands-Merker" }
            ]
          },
          {
            "type": "default",
            "columns": [
              { "align": "left", "content": "<b>Q</b>0.1" },
              { "align": "left", "content": "Ausgang" }
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
        "content": "Beispiele"
      },
      {
        "type": "SUBTITLE",
        "content": "Paket-Hebe-Steuerung"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60d71724c15b475f263c61c0",
        "size": "s"
      },
      {
        "type": "SUBTITLE",
        "content": "Rührbehälter SPS"
      },
      {
        "type": "TEXT",
        "content": "Speicherprogrammierbare Steuerung eines Rührbehälters. ... "
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5fce8bc7d58f4c4d8a43c0fa",
        "size": "m"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Rührbehälter L"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5fce8bdad58f4c4d8a43c0fc",
        "size": "m"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Autowaschanlage"
      },
      {
        "type": "TEXT",
        "content": "Der Kunde gibt ihnen folgende Ablaufbeschreibung, aus der Sie eine GRAFCET Ablaufbeschreibung erstellen sollen."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5fce8be8d58f4c4d8a43c0fe"
      },
      {
        "type": "LIST",
        "content": "Ablaufbeschreibung",
        "ordered": true,
        "list": [
          "Grundstellung: P1 =1, M1 = 0",
          "S1: M1 = 1 (gespeichert)",
          "B1: M2 = 1",
          "B2: M3 = 1, M4 =1, M5 = 1, M6 =1",
          "B3: M7 = 1 für die Dauer von 20s"
        ]
      },
      {
        "type": "LIST",
        "content": "Aufgaben",
        "ordered": true,
        "list": [
          "Erstellen Sie die Ablaufbeschreibung mit GRAFCET",
          "Entwickeln Sie aus der Ablaufbeschreibung den Funktionsplan"
        ]
      }
    ]
  },
  {
    "url": "vernetzte_steuerungssysteme/behaeltersteuerung_uebung",
    "_id": "6021009065dbdf479177a4c0",
    "topicId": "6056906307c61731b8d162f1",
    "title": "Behältersteuerung - Übung",
    "description": "Mitschrift vom 13.01.2021",
    "subject": "wp",
    "type": "article",
    "lessonDate": "2021-01-13",
    "lastUpdate": "2021-05-15",
    "schoolWeek": "20",
    "elements": [
      {
        "type": "TITLE",
        "content": "Definition"
      },
      {
        "type": "SUBTITLE",
        "content": "Entwurfstext"
      }
    ]
  },
  {
    "url": "vernetzte_steuerungssysteme/digitaltechnik",
    "_id": "6039484e4bb78f077e58b418",
    "topicId": "6056906307c61731b8d162f1",
    "title": "Digitaltechnik",
    "description": "Mitschrift vom 10.02.2021",
    "subject": "wp",
    "type": "article",
    "lessonDate": "2021-02-10",
    "lastUpdate": "2021-05-15",
    "schoolWeek": "21",
    "elements": [
      {
        "type": "TITLE",
        "content": "Definition"
      },
      {
        "type": "SUBTITLE",
        "content": "Entwurfstext"
      }
    ]
  },
  {
    "url": "vernetzte_steuerungssysteme/digitaltechnik_aufgaben",
    "_id": "604df60bec849e7897841840",
    "topicId": "6056906307c61731b8d162f1",
    "title": "Digitaltechnik - Aufgaben",
    "description": "Mitschrift vom 02.03.2021",
    "subject": "wp",
    "type": "tasks",
    "lessonDate": "2021-03-02",
    "lastUpdate": "2021-05-15",
    "schoolWeek": "22",
    "elements": [
      {
        "type": "TITLE",
        "content": "Aufgaben"
      },
      {
        "type": "SUBTITLE",
        "content": "<span class='list-number'>1</span>Aufgabe"
      },
      {
        "type": "TEXT",
        "content": "Folgende Meldung wird auf der zweistelligen 7-Segment-Anzeige des Motherboards angezeigt:"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/604deca3ec849e7897841831"
      },
      {
        "type": "TEXT",
        "content": "<span class='list-number'>1a</span>Nennen Sie das Zahlensystem, das der Meldungsanzeige zugrunde liegt."
      },
      {
        "type": "TEXT",
        "content": "Antwort: Hexadezimalsystem"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TEXT",
        "content": "<span class='list-number'>1b</span>In der Beschreibung des Motherboards sind die Ereignismeldungen in dezimaler Schreibweise aufgelistet."
      },
      {
        "type": "TEXT",
        "content": "Antwort: Hex: <sub>c</sub>5<sub>h</sub> | binär: 1100 0101<sub>b</sub> | dezimal: 197<sub>d</sub> <br/> oder 12 x 16<sup>1</sup> + 5 x 16<sup>0</sup> = 197<sub>d</sub>"
      },
      {
        "type": "TEXT",
        "content": "Wandeln Sie den angezeigten Wert von LED1 in das dezimale Zahlensystem um. Der Rechenweg ist anzugeben."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "<span class='list-number'>2</span>Aufgabe"
      },
      {
        "type": "TEXT",
        "content": "Die IT-System GmbH soll im Eingangsbereich des PC-Shops einen Kundenzähler installieren, der die Kundenzahl auf einer elektronischen Anzeige mit vier LED-Zahlendisplays anzeigt."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/604dee87ec849e7897841833"
      },
      {
        "type": "TEXT",
        "content": "Jedes LED-Zahlendisplay hat sieben Segmente, mit denen die Dezimalziffern 0 bis 9 dargestellt werden können. Die Zähler-Baugruppe gibt für jedes LED-Zahlendisplay ein BCD-codiertes Signal aus, welches im BCD-Decoder Code (engl. <i>Binary Coded Decimal Code</i>) in einen 7-Segment-Code zur Steuerung der Anzeigen-Segmente a bis g übersetzt wird."
      },
      {
        "type": "TEXT",
        "content": "Beispiel: Ansteuerung eines LED-Zahlendisplays zur Darstellung der Ziffer 1"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/604def52ec849e7897841835"
      },
      {
        "type": "TEXT",
        "content": "<span class='list-number'>2a</span>Zur Überprüfung der fehlerfreien Arbeitsweise des Decoders sollen Sie die an den Schnittstellen anliegenden Signale analysieren. Geben Sie in die folgende Wahrheitstabelle für die Ziffern 0 bis 9 den jeweiligen BCD Code an."
      },
      {
        "type": "TABLE",
        "content": "",
        "rows": [
          {
            "type": "header",
            "columns": [
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "Bit-Nr.", "colSpan": 4 }
            ]
          },
          {
            "type": "header",
            "columns": [
              { "align": "middle", "content": "Dezimal-<br/>ziffer" },
              { "align": "middle", "content": "4<br/>(D)" },
              { "align": "middle", "content": "2<br/>(C)" },
              { "align": "middle", "content": "3<br/>(B)" },
              { "align": "middle", "content": "1<br/>(A)" }
            ]
          },
          {
            "type": "default",
            "columns": [
              { "align": "middle", "content": "0" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" }
            ]
          },
          {
            "type": "default",
            "columns": [
              { "align": "middle", "content": "1" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" }
            ]
          },
          {
            "type": "default",
            "columns": [
              { "align": "middle", "content": "2" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" }
            ]
          },
          {
            "type": "default",
            "columns": [
              { "align": "middle", "content": "3" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" }
            ]
          },
          {
            "type": "default",
            "columns": [
              { "align": "middle", "content": "4" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" }
            ]
          },
          {
            "type": "default",
            "columns": [
              { "align": "middle", "content": "5" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" }
            ]
          },
          {
            "type": "default",
            "columns": [
              { "align": "middle", "content": "6" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" }
            ]
          },
          {
            "type": "default",
            "columns": [
              { "align": "middle", "content": "7" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" }
            ]
          },
          {
            "type": "default",
            "columns": [
              { "align": "middle", "content": "8" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" }
            ]
          },
          {
            "type": "default",
            "columns": [
              { "align": "middle", "content": "9" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" }
            ]
          }
        ]
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TEXT",
        "content": "<span class='list-number'>2b</span>Auf dem Display sollen die Dezimalziffern 0, 2, 5 un 8 dargestellt werden. Geben Sie in folgender Tabelle den jeweiligen 7-Segment-Code an."
      },
      {
        "type": "TABLE",
        "content": "",
        "rows": [
          {
            "type": "header",
            "columns": [
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "7-Segmente-Code", "colSpan": 7 }
            ]
          },
          {
            "type": "header",
            "columns": [
              { "align": "middle", "content": "Dezimal-<br/>ziffer" },
              { "align": "middle", "content": "g" },
              { "align": "middle", "content": "f" },
              { "align": "middle", "content": "e" },
              { "align": "middle", "content": "d" },
              { "align": "middle", "content": "c" },
              { "align": "middle", "content": "b" },
              { "align": "middle", "content": "a" }
            ]
          },
          {
            "type": "default",
            "columns": [
              { "align": "middle", "content": "0" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" }
            ]
          },
          {
            "type": "default",
            "columns": [
              { "align": "middle", "content": "2" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" }
            ]
          },
          {
            "type": "default",
            "columns": [
              { "align": "middle", "content": "5" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" }
            ]
          },
          {
            "type": "default",
            "columns": [
              { "align": "middle", "content": "8" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" },
              { "align": "middle", "content": "" }
            ]
          }
        ]
      },
      {
        "type": "TEXT",
        "content": "Die booleschen Gleichungen für jedes Segment können aus KV-Diagrammen (Karnaugh-Veitch-Diagrammen) abgeleitet werden. Die BCD-Codes, die nicht zur Darstellung der Ziffern 0 bis 9 verwendet werden, sind mit X gekennzeichnet."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TEXT",
        "content": "<span class='list-number'>2c</span>Beispiel: Segment a <br/> Das Segment a einer LED-Anzeige wird zur Darstellung der Ziffern 0, 2, 3, 5, 7, 8 und 9 benötigt."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/604df2b1ec849e7897841837"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TEXT",
        "content": "<span class='list-number'>2d</span>Leiten Sie aus folgendem KV-Diagramm die vereinfachte boolesche Gleichung für das Segment f ab."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/604df336ec849e7897841839"
      },
      {
        "type": "TEXT",
        "content": "Antwort: Boolesche Gleichung ..."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/604df58bec849e789784183e"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TEXT",
        "content": "<span class='list-number'>2e</span>Folgendes Diagramm und folgende boolesche Gleichung stehen für ein Segment der 7-Segment-Anzeige. Ermitteln Sie mithife der BCD-Code-Tabelle die vier Dezimalziffern, zu deren Anzeige dieses Segment angesteuert wird."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/604df39dec849e789784183b"
      },
      {
        "type": "TEXT",
        "content": "Antwort: 0, 2, 6, 8"
      }
    ]
  },
  {
    "url": "vernetzte_steuerungssysteme/logische_schaltungen_und_steuerlogik",
    "_id": "6042c569b0c00c20f201d170",
    "topicId": "6056906307c61731b8d162f1",
    "title": "Logische Schaltungen und Steuerlogik (ENTWURF)",
    "description": "Mitschrift vom 03.03.2021",
    "subject": "wp",
    "type": "article",
    "lessonDate": "2021-03-03",
    "lastUpdate": "2021-05-15",
    "schoolWeek": "22",
    "elements": [
      {
        "type": "TITLE",
        "content": "Definition"
      },
      {
        "type": "TEXT",
        "content": "Das Thema Logische Schaltungen/Steuerlogik, wie das KV-Diagramm oder das Vereinfachen von Funktionsgleichungen mittels Schaltalgebra gehört zum Lernfeld 4 (Informationsverarbeitung/Digitaltechnik) und dient dem Anwendungsentwickler zur eindeutigen Beschreibung des umzusetzenden Programms (IST-Analyse). Ein weiteres Verfahren dazu ist die Entscheidungstabelle. Sie hat dieselbe Funktion wie die Funktionsgleichung mit Vereinfachung durch das KV-Diagramm."
      }
    ]
  },
  {
    "url": "vernetzte_steuerungssysteme/steuerlogik_aufgabe_ersatzstromversorgung",
    "_id": "6053a521ec849e78978418ac",
    "topicId": "6056906307c61731b8d162f1",
    "title": "Steuerlogik Aufgabe - Ersatzstromversorgung",
    "description": "Aufgabe vom 03.03.2021",
    "subject": "wp",
    "type": "tasks",
    "lessonDate": "2021-03-03",
    "lastUpdate": "2021-05-26",
    "schoolWeek": "22",
    "elements": [
      {
        "type": "TITLE",
        "content": "Aufgaben"
      },
      {
        "type": "TEXT",
        "content": "<b>a) Erstellen Sie die Wertetabellen für den ungestörten und für den gestörten Betrieb</b>"
      },
      {
        "type": "ANSWER_GROUP",
        "hidden": true,
        "elements": [
          {
            "type": "SUBTITLE",
            "content": "<u>Ungestörter Betrieb</u>"
          },
          {
            "type": "TABLE",
            "content": "",
            "rows": [
              {
                "type": "header",
                "columns": [
                  { "align": "middle", "content": "M1" },
                  { "align": "middle", "content": "M2" },
                  { "align": "middle", "content": "M3" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "middle", "content": "Ein" },
                  { "align": "middle", "content": "Aus" },
                  { "align": "middle", "content": "Aus" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "middle", "content": "Aus" },
                  { "align": "middle", "content": "Ein" },
                  { "align": "middle", "content": "Aus" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "middle", "content": "Aus" },
                  { "align": "middle", "content": "Ein" },
                  { "align": "middle", "content": "Ein" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "middle", "content": "Aus" },
                  { "align": "middle", "content": "Aus" },
                  { "align": "middle", "content": "Ein" }
                ]
              }
            ]
          },
          {
            "type": "SUBTITLE",
            "content": "<u>Gestörter Betrieb</u>"
          },
          {
            "type": "TABLE",
            "content": "",
            "rows": [
              {
                "type": "header",
                "columns": [
                  { "align": "middle", "content": "M1" },
                  { "align": "middle", "content": "M2" },
                  { "align": "middle", "content": "M3" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "middle", "content": "Ein" },
                  { "align": "middle", "content": "Ein" },
                  { "align": "middle", "content": "Ein" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "middle", "content": "Ein" },
                  { "align": "middle", "content": "Ein" },
                  { "align": "middle", "content": "Aus" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "middle", "content": "Ein" },
                  { "align": "middle", "content": "Aus" },
                  { "align": "middle", "content": "Ein" }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TEXT",
        "content": "<b>b) Zeichnen Sie den Funktionsplan der Steuerlogik. Verwenden Sie für die Eingänge und Ausgänge der Steuerlogik die in Bild 3 angegebenen Variablen</b>"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a579ca59a0005b1c634b66",
        "size": "s"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a57ca859a0005b1c634b69",
        "size": "m",
        "hidden": true
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TEXT",
        "content": "<b>c) Erstellen Sie eine vollständige und eine konsolidierte Entscheidungstabelle mit den Bedingungen A, B, C und den Aktionen X, Y, Z und U</b>"
      },
      {
        "type": "ANSWER_GROUP",
        "hidden": true,
        "elements": [
          {
            "type": "SUBTITLE",
            "content": "Vollständige Entscheidungstabelle"
          },
          {
            "type": "TABLE",
            "content": "",
            "rows": [
              {
                "type": "header",
                "columns": [
                  { "align": "left", "content": "A" },
                  { "align": "middle", "content": "j" },
                  { "align": "middle", "content": "j" },
                  { "align": "middle", "content": "j" },
                  { "align": "middle", "content": "j" },
                  { "align": "middle", "content": "n" },
                  { "align": "middle", "content": "n" },
                  { "align": "middle", "content": "n" },
                  { "align": "middle", "content": "n" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "B" },
                  { "align": "middle", "content": "j" },
                  { "align": "middle", "content": "j" },
                  { "align": "middle", "content": "n" },
                  { "align": "middle", "content": "n" },
                  { "align": "middle", "content": "j" },
                  { "align": "middle", "content": "j" },
                  { "align": "middle", "content": "n" },
                  { "align": "middle", "content": "n" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "C" },
                  { "align": "middle", "content": "j" },
                  { "align": "middle", "content": "n" },
                  { "align": "middle", "content": "j" },
                  { "align": "middle", "content": "n" },
                  { "align": "middle", "content": "j" },
                  { "align": "middle", "content": "n" },
                  { "align": "middle", "content": "j" },
                  { "align": "middle", "content": "n" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "Z (M1)" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "x" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "Y (M2)" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "x" },
                  { "align": "middle", "content": "x" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "X (M3)" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "x" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "x" },
                  { "align": "middle", "content": "" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "U (Störung P1)" },
                  { "align": "middle", "content": "x" },
                  { "align": "middle", "content": "x" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" }
                ]
              }
            ]
          },
          {
            "type": "SUBTITLE",
            "content": "Konsolidierte Entscheidungstabelle"
          },
          {
            "type": "TABLE",
            "content": "",
            "rows": [
              {
                "type": "header",
                "columns": [
                  { "align": "left", "content": "A" },
                  { "align": "middle", "content": "j" },
                  { "align": "middle", "content": "j" },
                  { "align": "middle", "content": "j" },
                  { "align": "middle", "content": "n" },
                  { "align": "middle", "content": "n" },
                  { "align": "middle", "content": "n" },
                  { "align": "middle", "content": "n" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "B" },
                  { "align": "middle", "content": "j" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "n" },
                  { "align": "middle", "content": "j" },
                  { "align": "middle", "content": "j" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "n" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "C" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "j" },
                  { "align": "middle", "content": "n" },
                  { "align": "middle", "content": "j" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "j" },
                  { "align": "middle", "content": "n" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "Z (M1)" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "x" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "Y (M2)" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "x" },
                  { "align": "middle", "content": "x" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "X (M3)" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "x" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "x" },
                  { "align": "middle", "content": "" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "U (Störung P1)" },
                  { "align": "middle", "content": "x" },
                  { "align": "middle", "content": "x" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TEXT",
        "content": "<b>d) Entwickeln Sie aus der konsolidierten Entscheidungstabelle ein Struktogramm für die Funktion Ersatzstromversorgung()</b>"
      },
      {
        "type": "TABLE",
        "content": "",
        "rows": [
          {
            "type": "default",
            "columns": [
              { "align": "left", "content": "Eingabe" },
              { "align": "left", "content": "Binär - A, B, C" }
            ]
          },
          {
            "type": "default",
            "columns": [
              { "align": "left", "content": "Verarbeitung" },
              { "align": "left", "content": "entwickelte Steuerlogik" }
            ]
          },
          {
            "type": "default",
            "columns": [
              { "align": "left", "content": "Ausgabe" },
              { "align": "left", "content": "Binär - X, Y, Z, U" }
            ]
          }
        ]
      }
    ]
  },
  {
    "url": "vernetzte_steuerungssysteme/pseudocode",
    "_id": "605c92c923779759b9bb290a",
    "topicId": "6056906307c61731b8d162f1",
    "title": "Pseudocode",
    "description": "Aufgabe vom 24.03.2021",
    "subject": "wp",
    "type": "article",
    "lessonDate": "2021-03-24",
    "lastUpdate": "2021-05-15",
    "schoolWeek": "23",
    "elements": [
      {
        "type": "TITLE",
        "content": "Definition"
      },
      {
        "type": "TEXT",
        "content": "Der Pseudocode ist ein Programmcode, der nicht zur maschinellen Interpretation, sondern lediglich zur Veranschaulichung eines Paradigmas oder Algorithmus dient. Meistens ähnelt er höheren Programmiersprachen, gemischt mit natürlicher Sprache und mathematischer Notation. Mit Pseudocode kann ein Programmablauf unabhängig von zugrunde liegender Technologie beschrieben werden. Er ist damit oft kompakter und leichter verständlich als realer Programmcode. Andererseits ist er formaler und damit klarer und weniger missverständlich als eine Beschreibung in natürlicher Sprache."
      },
      {
        "type": "TEXT",
        "content": "Pseudocode wird dann eingesetzt, wenn die Funktionsweise eines Algorithmus erklärt werden soll und Einzelheiten der Umsetzung in eine Programmiersprache stören würden. Ein typisches Beispiel sind die Felder, die etwa in Pascal von Eins an indiziert werden, in anderen Sprachen wie Java dagegen von Null an. In Lehrbüchern werden deshalb Algorithmen gelegentlich in Pseudocode wiedergegeben."
      },
      {
        "type": "LIST",
        "content": "",
        "list": [
          "Programmiersprachenunabhängiger Algorithmus",
          "Keine maschinelle Interpretation (fehlende Notationsvorschrift)",
          "Dient lediglich der Veranschaulichung eines Algorithmus",
          "Enthält Elemente höhrerer Programmiersprachen, natürlicher Sprache und mathematischer Notation",
          "Die gewählten Formulierungen/Syntax sollten eindeutig, aussagekräftig und durchgängig erfolgen",
          "Die Steuerstrukturen sollten klar erkennbar sein"
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
          "Pseudocode | 23.04.2021 | <a href='https://www.biancahoegel.de/computer/sprache/pseudocode.html'>https://www.biancahoegel.de/computer/sprache/pseudocode.html</a>"
        ]
      }
    ]
  },
  {
    "url": "vernetzte_steuerungssysteme/ampelprojekt",
    "_id": "609e580f7bc55c76643cf50b",
    "topicId": "6056906307c61731b8d162f1",
    "title": "Ampelprojekt",
    "description": "Aufgabe vom 28.04.2021",
    "subject": "wp",
    "type": "tasks",
    "lessonDate": "2021-04-28",
    "lastUpdate": "2021-05-15",
    "schoolWeek": "24",
    "elements": [
      {
        "type": "TITLE",
        "content": "Definition"
      },
      {
        "type": "TEXT",
        "content": "..."
      },
    ]
  },
  {
    "url": "vernetzte_steuerungssysteme/it_sicherheit",
    "_id": "609e766d6ffc47057f484115",
    "topicId": "6056906307c61731b8d162f1",
    "title": "IT-Sicherheit",
    "description": "Aufgabe vom 30.04.2021",
    "subject": "wp",
    "type": "article",
    "lessonDate": "2021-04-30",
    "lastUpdate": "2021-05-14",
    "schoolWeek": "24",
    "elements": [
      {
        "type": "TITLE",
        "content": "Definition"
      },
      {
        "type": "TEXT",
        "content": "..."
      },
    ]
  },
  {
    "url": "vernetzte_steuerungssysteme/programm_schreiben_notstromanlage",
    "_id": "60a57c6d59a0005b1c634b68",
    "topicId": "6056906307c61731b8d162f1",
    "title": "Programm schreiben - Notstromanlage",
    "description": "Aufgabe vom 19.05.2021",
    "subject": "wp",
    "type": "tasks",
    "lessonDate": "2021-05-19",
    "lastUpdate": "2021-05-26",
    "schoolWeek": "25",
    "elements": [
      {
        "type": "TITLE",
        "content": "Aufgabe"
      },
      {
        "type": "TEXT",
        "content": "An einer Ersatzstromversorgung mit einer Leistung <i>P</i> = 8 kW sind die Antriebsmotoren M1 mit 7 kW, M2 mit 5 kW und M3 mit 2 kW angeschlossen (Bild 3). Der Motor M1 wird durch den Steuerschalter S1, Motor M2 durch S2 und Motor M3 durch S3 eingeschaltet. Eine Steuerlogik soll die Eingangssignale A, B und C der Steuerschalter überwachen und eine Überlastung des Aggregats verhindern. Zusätzlich soll eine Schalterstellung, die eine Überlastung hervorrufen würde, durch eine Meldeleuchte P1 angezeigt werden."
      },
      {
        "type": "TEXT",
        "content": "<b>a) Erstellen Sie die Wertetabellen für den ungestörten und für den gestörten Betrieb</b>"
      },
      {
        "type": "ANSWER_GROUP",
        "hidden": true,
        "elements": [
          {
            "type": "SUBTITLE",
            "content": "<u>Ungestörter Betrieb</u>"
          },
          {
            "type": "TABLE",
            "content": "",
            "rows": [
              {
                "type": "header",
                "columns": [
                  { "align": "middle", "content": "M1" },
                  { "align": "middle", "content": "M2" },
                  { "align": "middle", "content": "M3" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "middle", "content": "Ein" },
                  { "align": "middle", "content": "Aus" },
                  { "align": "middle", "content": "Aus" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "middle", "content": "Aus" },
                  { "align": "middle", "content": "Ein" },
                  { "align": "middle", "content": "Aus" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "middle", "content": "Aus" },
                  { "align": "middle", "content": "Ein" },
                  { "align": "middle", "content": "Ein" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "middle", "content": "Aus" },
                  { "align": "middle", "content": "Aus" },
                  { "align": "middle", "content": "Ein" }
                ]
              }
            ]
          },
          {
            "type": "SUBTITLE",
            "content": "<u>Gestörter Betrieb</u>"
          },
          {
            "type": "TABLE",
            "content": "",
            "rows": [
              {
                "type": "header",
                "columns": [
                  { "align": "middle", "content": "M1" },
                  { "align": "middle", "content": "M2" },
                  { "align": "middle", "content": "M3" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "middle", "content": "Ein" },
                  { "align": "middle", "content": "Ein" },
                  { "align": "middle", "content": "Ein" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "middle", "content": "Ein" },
                  { "align": "middle", "content": "Ein" },
                  { "align": "middle", "content": "Aus" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "middle", "content": "Ein" },
                  { "align": "middle", "content": "Aus" },
                  { "align": "middle", "content": "Ein" }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TEXT",
        "content": "<b>b) Zeichnen Sie den Funktionsplan der Steuerlogik. Verwenden Sie für die Eingänge und Ausgänge der Steuerlogik die in Bild 3 angegebenen Variablen</b>"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a579ca59a0005b1c634b66",
        "size": "s"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a57ca859a0005b1c634b69",
        "size": "m",
        "hidden": true
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TEXT",
        "content": "<b>c) Erstellen Sie eine vollständige und eine konsolidierte Entscheidungstabelle mit den Bedingungen A, B, C und den Aktionen X, Y, Z und U</b>"
      },
      {
        "type": "ANSWER_GROUP",
        "hidden": true,
        "elements": [
          {
            "type": "SUBTITLE",
            "content": "Vollständige Entscheidungstabelle"
          },
          {
            "type": "TABLE",
            "content": "",
            "rows": [
              {
                "type": "header",
                "columns": [
                  { "align": "left", "content": "A" },
                  { "align": "middle", "content": "j" },
                  { "align": "middle", "content": "j" },
                  { "align": "middle", "content": "j" },
                  { "align": "middle", "content": "j" },
                  { "align": "middle", "content": "n" },
                  { "align": "middle", "content": "n" },
                  { "align": "middle", "content": "n" },
                  { "align": "middle", "content": "n" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "B" },
                  { "align": "middle", "content": "j" },
                  { "align": "middle", "content": "j" },
                  { "align": "middle", "content": "n" },
                  { "align": "middle", "content": "n" },
                  { "align": "middle", "content": "j" },
                  { "align": "middle", "content": "j" },
                  { "align": "middle", "content": "n" },
                  { "align": "middle", "content": "n" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "C" },
                  { "align": "middle", "content": "j" },
                  { "align": "middle", "content": "n" },
                  { "align": "middle", "content": "j" },
                  { "align": "middle", "content": "n" },
                  { "align": "middle", "content": "j" },
                  { "align": "middle", "content": "n" },
                  { "align": "middle", "content": "j" },
                  { "align": "middle", "content": "n" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "Z (M1)" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "x" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "Y (M2)" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "x" },
                  { "align": "middle", "content": "x" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "X (M3)" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "x" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "x" },
                  { "align": "middle", "content": "" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "U (Störung P1)" },
                  { "align": "middle", "content": "x" },
                  { "align": "middle", "content": "x" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" }
                ]
              }
            ]
          },
          {
            "type": "SUBTITLE",
            "content": "Konsolidierte Entscheidungstabelle"
          },
          {
            "type": "TABLE",
            "content": "",
            "rows": [
              {
                "type": "header",
                "columns": [
                  { "align": "left", "content": "A" },
                  { "align": "middle", "content": "j" },
                  { "align": "middle", "content": "j" },
                  { "align": "middle", "content": "j" },
                  { "align": "middle", "content": "n" },
                  { "align": "middle", "content": "n" },
                  { "align": "middle", "content": "n" },
                  { "align": "middle", "content": "n" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "B" },
                  { "align": "middle", "content": "j" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "n" },
                  { "align": "middle", "content": "j" },
                  { "align": "middle", "content": "j" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "n" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "C" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "j" },
                  { "align": "middle", "content": "n" },
                  { "align": "middle", "content": "j" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "j" },
                  { "align": "middle", "content": "n" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "Z (M1)" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "x" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "Y (M2)" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "x" },
                  { "align": "middle", "content": "x" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "X (M3)" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "x" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "x" },
                  { "align": "middle", "content": "" }
                ]
              },
              {
                "type": "default",
                "columns": [
                  { "align": "left", "content": "U (Störung P1)" },
                  { "align": "middle", "content": "x" },
                  { "align": "middle", "content": "x" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" },
                  { "align": "middle", "content": "" }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TEXT",
        "content": "<b>d) Entwickeln Sie aus der konsolidierten Entscheidungstabelle ein Struktogramm für die Funktion Ersatzstromversorgung()</b>"
      },
      {
        "type": "TABLE",
        "content": "",
        "rows": [
          {
            "type": "default",
            "columns": [
              { "align": "left", "content": "Eingabe" },
              { "align": "left", "content": "Binär - A, B, C" }
            ]
          },
          {
            "type": "default",
            "columns": [
              { "align": "left", "content": "Verarbeitung" },
              { "align": "left", "content": "entwickelte Steuerlogik" }
            ]
          },
          {
            "type": "default",
            "columns": [
              { "align": "left", "content": "Ausgabe" },
              { "align": "left", "content": "Binär - X, Y, Z, U" }
            ]
          }
        ]
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TEXT",
        "content": "<b>e) Programmieren und testen Sie die Funktion Ersatzstromversorgung()</b>"
      },
      {
        "type": "TABLE",
        "content": "",
        "rows": [
          {
            "type": "default",
            "columns": [
              { "align": "left", "content": "Eingabe" },
              { "align": "left", "content": "S1, S2, S3" }
            ]
          },
          {
            "type": "default",
            "columns": [
              { "align": "left", "content": "Ausgabe" },
              { "align": "left", "content": "M1, M2, M3, P1, Leistung" }
            ]
          },
          {
            "type": "default",
            "columns": [
              { "align": "left", "content": "Programmsteuerung" },
              { "align": "left", "content": "Neueingabe, Programmende" }
            ]
          }
        ]
      },
      {
        "type": "TEXT",
        "content": "Überlegung: Unterschied zum SPS Programm und die damit verbundenen Auswirkungen."
      },
      {
        "type": "ANSWER_GROUP",
        "hidden": true,
        "elements": [
          {
            "type": "SUBTITLE",
            "content": "Beispiellösung in Java"
          },
          {
            "type": "CODE",
            "language": "java",
            "content": "package com.company;\n\nimport java.util.Scanner;\n\npublic class Main {\n\n  static boolean m1 = false;\n  static boolean m2 = false;\n  static boolean m3 = false;\n  static boolean p1 = false;\n  static int power = 0;\n\n  // value in kW\n  static int m1_consumption = 7;\n  static int m2_consumption = 5;\n  static int m3_consumption = 2;\n\n  public static void main(String[] args) {\n    start();\n  }\n\n  public static void start() {\n    System.out.println();\n    System.out.println(\"Notstromversorgung\");\n    System.out.println(\"M1 = \" + m1);\n    System.out.println(\"M2 = \" + m2);\n    System.out.println(\"M3 = \" + m3);\n    System.out.println(\"Leistung: \" + power);\n    System.out.println(\"P1: \" + p1);\n\n    Scanner input = new Scanner(Scanner.in);\n    System.out.println();\n    System.out.println(\"Enter s1 / s2 / s3\");\n    String control = input.nextLine().toUpperCase();\n    String[] args = new String[0];\n\n    switch(control) {\n      case \"S1\":\n        m1 = !m1;\n        System.out.println(\"M1 gestartet\");\n        updatePower();\n        main(args);\n      case \"S2\":\n        m2 = !m2;\n        System.out.println(\"M2 gestartet\");\n        updatePower();\n        main(args);\n      case \"S3\":\n        m3 = !m3;\n        System.out.println(\"M3 gestartet\");\n        updatePower();\n        main(args);\n      default:\n        System.out.println(\"Störung\");\n    }\n  }\n\n  public static void updatePower() {\n    int value = 0;\n    if (m1) value = value + m1_consumption;\n    if (m2) value = value + m2_consumption;\n    if (m3) value = value + m3_consumption;\n    power = value;\n\n    if (power > 7) {\n      p1 = true;\n    } else {\n      p1 = false;\n    }\n  }\n\n}"
          }
        ]
      }
    ]
  },
  {
    "url": "vernetzte_steuerungssysteme/digitaltechnik_zahlensysteme",
    "_id": "60e57904956e5a156b702e5c",
    "topicId": "6056906307c61731b8d162f1",
    "title": "Digitaltechnik - Zahlensysteme",
    "description": "Aufgabe vom 09.06.2021",
    "subject": "wp",
    "type": "article",
    "lessonDate": "2021-06-09",
    "lastUpdate": "2021-07-07",
    "schoolWeek": "26",
    "elements": [
      {
        "type": "TITLE",
        "content": "Definition"
      },
      {
        "type": "SUBTITLE",
        "content": "Mathematische Grundlagen"
      },
      {
        "type": "TEXT",
        "content": "Mathematik ist die Grundlage für die Programmierung und Funktion eines Computer und somit auch einer SPS. Die Menschen denken im Dezimalsystem, dessen Ziffernvorrat aus 0 bis 9 besteht. Das hat sich so ergeben, weil der Mensch 10 Finger hat und beim Zählen häufig die Finger benutzt wurden. Im Dezimalsystem kann man Rechenoperationen wie Addition, Subtraktion, Multiplikation, Division, Potenzen usw. durchführen und den Menschen ist der Umgang mit dem Dezimalsystem bekannt."
      },
      {
        "type": "TEXT",
        "content": "Ein Computer, wozu auch eine SPS zählt, arbeitet jedoch nicht mit dem Dezimalsystem. Die Ursache hierfür liegt im technischen Grundaufbau eines Computers, der eben nur erkennen kann, ob Strom fließt oder nicht fließt. Für den Computer ist daher nur erkennbar, ob das Signal 1 (Strom fließt) oder 0 (Strom fließt nicht) ist."
      },
      {
        "type": "TEXT",
        "content": "Daher benötigt eine SPS ein Zahlensystem, mit dem gearbeitet werden kann und das ist grundsätzlich das Dualsystem. Das Dualsystem kennt nur 2 Ziffern (0, 1) und eignet sich daher sehr gut für die interne Verarbeitung von Zahlen in einer SPS. Das Dualsystem hat jedoch einen großen Nachteil. Für selbst kleinste Zahlen benötigt man riesige Ziffernfolgen. Daher haben sich zwei weitere Zahlensysteme etabliert, mit denen bei der SPS-Programmierung gearbeitet wird. Das sind die Zahlensysteme Hexadezimalsystem und BCD Code."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Zahlensysteme"
      },
      {
        "type": "TEXT",
        "content": "Ein SPS-Programmierer sollte sich daher mit diesen 3 Zahlensystemen vertraut machen. Häufig werden Eingaben in BCD-Format, als Hexadezimalzahl oder als Dualzahl erwartet oder man muss die entsprechenden Ziffernfolgen auswerten können. Intern wird jedoch immer mit dem Dualsystem gearbeitet, da eine SPS nur die logischen Zustände 0 und 1 (An und Aus) kennt und die Arbeitsweise einer Schaltung durch diese beiden logischen Zustände beschrieben werden kann. Auch bei der SPS-Programmierung werden diese beiden logischen Zustände verwendet."
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
          "SPS-Lehrgang.de > SPS Grundlagen > Zahlensysteme | 07.07.2021 | <a href='https://www.sps-lehrgang.de/zahlensysteme/'>https://www.sps-lehrgang.de/zahlensysteme/</a>"
        ]
      }
    ]
  },
];
