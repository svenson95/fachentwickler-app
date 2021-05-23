import {Post} from '../../app/models/post';

export const WP_POSTS: Post[] = [
    {
        "url": "vernetzte_steuerungssysteme/grundlagen_speicherprogrammierte_steuerungen",
        "_id": "5f429fa0165d0ab470bc5800",
        "topicId": "6056906307c61731b8d162f1",
        "title": "Grundlagen - Speicherprogrammierte Steuerungen",
        "description": "Mitschrift vom 11.08.2020",
        "subject": "wp",
        "type": "article",
        "lessonDate": "2020-08-11",
        "lastUpdate": "2021-05-15",
        "schoolWeek": "14",
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
        "_id": "5f7a5afe26fca377f7ed4e6a",
        "topicId": "6056906307c61731b8d162f1",
        "title": "GRAFCET Ablaufsteuerungen erstellen",
        "description": "Mitschrift vom 23.09.2020",
        "subject": "wp",
        "type": "article",
        "lessonDate": "2020-09-23",
        "lastUpdate": "2021-05-15",
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
        "_id": "5fa12b89641a40621c5ff725",
        "topicId": "6056906307c61731b8d162f1",
        "title": "GRAFCET Ablaufsteuerung - Übung",
        "description": "Mitschrift vom 28.10.2020",
        "subject": "wp",
        "type": "tasks",
        "lessonDate": "2020-10-28",
        "lastUpdate": "2021-05-15",
        "schoolWeek": "17",
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
                "content": "Pfeil nach oben -> Vorgang wird ausgeführt wenn der Schritt anfängt <br/> Pfeil nach unten -> Vorgang wird ausgeführt wenn der Schritt fertig ist"
            },
            {
                "type": "text",
                "content": "M0.1 (M = Merker) <br/> Q (Q = Ausgang)"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Rührbehälter SPS"
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
                "type": "subtitle",
                "content": "Rührbehälter L"
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
                "type": "subtitle",
                "content": "Autowaschanlage"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/"
            },
            {
                "type": "list",
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
                "type": "list",
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
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "subtitle",
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
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "subtitle",
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
                "type": "title",
                "content": "Aufgaben"
            },
            {
                "type": "subtitle",
                "content": "<span class='list-number'>1</span>Aufgabe"
            },
            {
                "type": "text",
                "content": "Folgende Meldung wird auf der zweistelligen 7-Segment-Anzeige des Motherboards angezeigt:"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/604deca3ec849e7897841831"
            },
            {
                "type": "text",
                "content": "<span class='list-number'>1a</span>Nennen Sie das Zahlensystem, das der Meldungsanzeige zugrunde liegt."
            },
            {
                "type": "text",
                "content": "Antwort: Hexadezimalsystem"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "text",
                "content": "<span class='list-number'>1b</span>In der Beschreibung des Motherboards sind die Ereignismeldungen in dezimaler Schreibweise aufgelistet."
            },
            {
                "type": "text",
                "content": "Antwort: Hex: <sub>c</sub>5<sub>h</sub> | binär: 1100 0101<sub>b</sub> | dezimal: 197<sub>d</sub> <br/> oder 12 x 16<sup>1</sup> + 5 x 16<sup>0</sup> = 197<sub>d</sub>"
            },
            {
                "type": "text",
                "content": "Wandeln Sie den angezeigten Wert von LED1 in das dezimale Zahlensystem um. Der Rechenweg ist anzugeben."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "<span class='list-number'>2</span>Aufgabe"
            },
            {
                "type": "text",
                "content": "Die IT-System GmbH soll im Eingangsbereich des PC-Shops einen Kundenzähler installieren, der die Kundenzahl auf einer elektronischen Anzeige mit vier LED-Zahlendisplays anzeigt."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/604dee87ec849e7897841833"
            },
            {
                "type": "text",
                "content": "Jedes LED-Zahlendisplay hat sieben Segmente, mit denen die Dezimalziffern 0 bis 9 dargestellt werden können. Die Zähler-Baugruppe gibt für jedes LED-Zahlendisplay ein BCD-codiertes Signal aus, welches im BCD-Decoder Code (engl. <i>Binary Coded Decimal Code</i>) in einen 7-Segment-Code zur Steuerung der Anzeigen-Segmente a bis g übersetzt wird."
            },
            {
                "type": "text",
                "content": "Beispiel: Ansteuerung eines LED-Zahlendisplays zur Darstellung der Ziffer 1"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/604def52ec849e7897841835"
            },
            {
                "type": "text",
                "content": "<span class='list-number'>2a</span>Zur Überprüfung der fehlerfreien Arbeitsweise des Decoders sollen Sie die an den Schnittstellen anliegenden Signale analysieren. Geben Sie in die folgende Wahrheitstabelle für die Ziffern 0 bis 9 den jeweiligen BCD Code an."
            },
            {
                "type": "table",
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
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "text",
                "content": "<span class='list-number'>2b</span>Auf dem Display sollen die Dezimalziffern 0, 2, 5 un 8 dargestellt werden. Geben Sie in folgender Tabelle den jeweiligen 7-Segment-Code an."
            },
            {
                "type": "table",
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
                "type": "text",
                "content": "Die booleschen Gleichungen für jedes Segment können aus KV-Diagrammen (Karnaugh-Veitch-Diagrammen) abgeleitet werden. Die BCD-Codes, die nicht zur Darstellung der Ziffern 0 bis 9 verwendet werden, sind mit X gekennzeichnet."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "text",
                "content": "<span class='list-number'>2c</span>Beispiel: Segment a <br/> Das Segment a einer LED-Anzeige wird zur Darstellung der Ziffern 0, 2, 3, 5, 7, 8 und 9 benötigt."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/604df2b1ec849e7897841837"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "text",
                "content": "<span class='list-number'>2d</span>Leiten Sie aus folgendem KV-Diagramm die vereinfachte boolesche Gleichung für das Segment f ab."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/604df336ec849e7897841839"
            },
            {
                "type": "text",
                "content": "Antwort: Boolesche Gleichung ..."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/604df58bec849e789784183e"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "text",
                "content": "<span class='list-number'>2e</span>Folgendes Diagramm und folgende boolesche Gleichung stehen für ein Segment der 7-Segment-Anzeige. Ermitteln Sie mithife der BCD-Code-Tabelle die vier Dezimalziffern, zu deren Anzeige dieses Segment angesteuert wird."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/604df39dec849e789784183b"
            },
            {
                "type": "text",
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
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "text",
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
        "lastUpdate": "2021-05-15",
        "schoolWeek": "22",
        "elements": [
            {
                "type": "title",
                "content": "Aufgaben"
            },
            {
                "type": "text",
                "content": "An einer Ersatzstromversorung mit einer Leistung <i>P</i> = 8 kW sind die Antriebsmotoren M1 mit 7 kW, M2 mit 5 kW und M3 mit 2 kW angeschlossen (Bild 3). Der Motor M1 wird durch den Steuerschalter S1, Motor M2 durch S2 und Motor M3 durch S3 eingeschaltet."
            },
            {
                "type": "text",
                "content": "Eine Steuerlogik soll die Eingangssignale A, B und C der Steuerschalter überwachen und eine Überlastung des Aggregats verhindern. Zusätzlich soll eine Schalterstellung, die eine Überlastung hervorrufen würde, durch eine Meldeleuchte P1 angezeigt werden."
            },
            {
                "type": "text",
                "content": "a) Erstellen Sie die Wertetabellen für ungestörten und für gestörten Betrieb."
            },
            {
                "type": "text",
                "content": "Antwort: <b>Ungestörter Betrieb</b>"
            },
            {
                "type": "table",
                "content": "Antwort",
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
                "type": "text",
                "content": "Antwort: <b>Gestörter Betrieb</b>"
            },
            {
                "type": "table",
                "content": "Antwort",
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
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "text",
                "content": "b) Zeichnen Sie den Funktionsplan der Steuerlogik. Verwenden Sie für die Eingänge und Ausgänge der Steuerlogik die in Bild 3 angegebenen Variablen."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/6053a1b3ec849e78978418a8"
            },
            {
                "type": "text",
                "content": "Antwort ..."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/6053a38dec849e78978418aa"
            },
            {
                "type": "text",
                "content": "c) Erstellen Sie eine vollständige und eine konsolidierte Entscheidungstabelle mit den Bedingungen A, B, C und den Aktionen X, Y, Z, U."
            },
            {
                "type": "table",
                "content": "Antwort: Entscheidungstabelle vollständig",
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
                "type": "table",
                "content": "Antwort: konsolidiert",
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
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "text",
                "content": "d) Entwickeln Sie aus der konsolidierten Entscheidungstabelle ein Struktogramm für die Funktion Ersatzstromversorgung()."
            },
            {
                "type": "text",
                "content": "Eingabe: binär - A, B, C <br/> Verarbeitung: entwickelte Steuerlogik <br/> Ausgabe: binär - X, Y, Z, U"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "text",
                "content": "e) Programmieren und testen Sie die Funktion Ersatzstromversorgung()."
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
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "text",
                "content": "Der Pseudocode ist ein Programmcode, der nicht zur maschinellen Interpretation, sondern lediglich zur Veranschaulichung eines Paradigmas oder Algorithmus dient. Meistens ähnelt er höheren Programmiersprachen, gemischt mit natürlicher Sprache und mathematischer Notation. Mit Pseudocode kann ein Programmablauf unabhängig von zugrunde liegender Technologie beschrieben werden. Er ist damit oft kompakter und leichter verständlich als realer Programmcode. Andererseits ist er formaler und damit klarer und weniger missverständlich als eine Beschreibung in natürlicher Sprache."
            },
            {
                "type": "text",
                "content": "Pseudocode wird dann eingesetzt, wenn die Funktionsweise eines Algorithmus erklärt werden soll und Einzelheiten der Umsetzung in eine Programmiersprache stören würden. Ein typisches Beispiel sind die Felder, die etwa in Pascal von Eins an indiziert werden, in anderen Sprachen wie Java dagegen von Null an. In Lehrbüchern werden deshalb Algorithmen gelegentlich in Pseudocode wiedergegeben."
            },
            {
                "type": "list",
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
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "list",
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
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "text",
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
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "text",
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
        "lastUpdate": "2021-05-19",
        "schoolWeek": "25",
        "elements": [
            {
                "type": "title",
                "content": "Aufgabe"
            },
            {
                "type": "text",
                "content": "An einer Ersatzstromversorgung mit einer Leistung <i>P</i> = 8 kW sind die Antriebsmotoren M1 mit 7 kW, M2 mit 5 kW und M3 mit 2 kW angeschlossen (Bild 3). Der Motor M1 wird durch den Steuerschalter S1, Motor M2 durch S2 und Motor M3 durch S3 eingeschaltet. Eine Steuerlogik soll die Eingangssignale A, B und C der Steuerschalter überwachen und eine Überlastung des Aggregats verhindern. Zusätzlich soll eine Schalterstellung, die eine Überlastung hervorrufen würde, durch eine Meldeleuchte P1 angezeigt werden."
            },
            {
                "type": "text",
                "content": "<b>a) Erstellen Sie die Wertetabellen für den ungestörten und für den gestörten Betrieb</b>"
            },
            {
                "type": "table",
                "content": "Ungestörter Betrieb",
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
                "type": "table",
                "content": "Gestörter Betrieb",
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
            },
            {
                "type": "text",
                "content": "<b>b) Zeichnen Sie den Funktionsplan der Steuerlogik. Verwenden Sie für die Eingänge und Ausgänge der Steuerlogik die in Bild 3 angegebenen Variablen</b>"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60a579ca59a0005b1c634b66",
                "size": "s"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60a57ca859a0005b1c634b69",
                "size": "m"
            },
            {
                "type": "text",
                "content": "<b>c) Erstellen Sie eine vollständige und eine konsolidierte Entscheidungstabelle mit den Bedingungen A, B, C und den Aktionen X, Y, Z und U</b>"
            },
            {
                "type": "text",
                "content": "<b>d) Entwickeln Sie aus der konsolidierten Entscheidungstabelle ein Struktogramm für die Funktion Ersatzstromversorgung()</b>"
            },
            {
                "type": "text",
                "content": "<b>d) Eingabe: Binär - A, B, C <br/> Verarbeitung: entwickelte Steuerlogik</b>"
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "header",
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
                "type": "text",
                "content": "<b>e) Programmieren und testen Sie die Funktion Ersatzstromversorgung()</b>"
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "header",
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
                "type": "text",
                "content": "Überlegung: Unterschied zum SPS Programm und die damit verbundenen Auswirkungen."
            }
        ]
    },
];
