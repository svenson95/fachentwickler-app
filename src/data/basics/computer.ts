import { PostArticle } from "@models/post";

export const computer: PostArticle[] = [
  {
    "url": "grundlagen/aufbau_eines_computers",
    "_id": "62dc3b38913d158df3744762",
    "topicId": "62dc279e5dfa97f3dc4e884d",
    "title": "Aufbau eines Computers",
    "description": "Artikel vom 04.03.2021",
    "subject": "computer",
    "schoolWeek": null,
    "type": "article",
    "lessonDate": "2022-07-23",
    "lastUpdate": "2022-07-23",
    "elements": [
      {
        "type": "TITLE",
        "content": "Definition"
      },
      {
        "type": "SUBTITLE",
        "content": "Was ist ein Computer?"
      },
      {
        "type": "TEXT",
        "content": 'Das Wort "Computer" vom gleichbedeutenden englischen Wort "to compute" (dts. <i>rechnen</i>) wurde vom lateinischen <i>computare</i> übernommen.'
      },
      {
        "type": "TEXT",
        "content": "Ein Computer (dts. <i>Rechner</i>) berechnet Informationen aus Daten bzw. bearbeitet diese. Diese Berechnungen erfolgen nach den Regeln eines geschriebenen Programms - Programme sind eine Reihe von Befehlen. Per Definition sind Computer Recheneinheiten, die auf mechanischer, elektrischer oder elektronischer Basis rechnen. Auch Smartphones, Tablets und Bankautomaten sind Computer, welche programmiert wurden und elektronisch Daten verarbeiten."
      },
      {
        "type": "HINT",
        "content": "Ein PC (Personal Computer) ist definitiv ein Computer, aber nicht jeder Computer ist auch ein PC."
      },
      {
        "type": "TEXT",
        "content": "Jeder Computer funktioniert nach dem <b>EVA-Prinzip</b> (Eingabe-Verarbeitung-Ausgabe) - dieses beschreibt die elektronische Datenverarbeitung. Als Beispiel: Ihr schreibt eine SMS, die CPU des Computers verarbeitet die Tastaturanschläge, welche als Ergebnis auf dem Display angezeigt werden."
      },
      {
        "type": "SUBTITLE",
        "content": "Bestandteile eines Computers"
      },
      {
        "type": "LIST",
        "content": "",
        "list": ["<b>Motherboard</b> - Das Fundament", "<b>BIOS</b> - Das Herz", "<b>Prozessor (CPU)</b> - Das Gehirn", "<b>Grafikkarte</b> - Die optische Ausgabe", "<b>Arbeitsspeicher (RAM)</b> - Der Schreibtisch", "<b>Festplatte / SSD</b> - Das Archiv"]
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Motherboard"
      },
      {
        "type": "TEXT",
        "content": 'Das Motherboard, auch Mainboard genannt, ist die Hauptplatine und damit das Kernstück eines Computers, welcher alle Komponenten miteinander verbindet. Über kleine Datenleitungen (BUS) kommunizieren alle Bauteile miteinander und leiten Informationen / Daten weiter. Technisch betrachtet ist das Mainboard eine Leiterplatte (engl. <i>PCB - printed circuit board</i>) aus einem "Faster-Kunststoff-Verbund", auf der sich bis zu acht miteinander verklebte Schichten befinden.'
      },
      {
        "type": "TEXT",
        "content": "Es gibt verschiedene Formate für Mainboards, am meisten verbreitet sind Mini-ITX (<i>Integrated Technology Extended</i>) & Micro-ATX für Kompakt-PC's, die Standardgröße ist das ATX-Format (<i>Advanced Technology Extended</i>) welches 1996 von Intel eingeführt wurde. Im Mainboard selbst sind Widerstände, Kondensatoren, Spulen, Mikrochips & Anschlüsse für die Komponenten verbaut. Auf modernen Mainboards sind die meisten Hardware-Komponenten wie Soundkarte, (einfache) Grafikkarte und Netzwerkkarte bereits integriert."
      },
      {
        "type": "TEXT",
        "content": "Wenn man sich einen PC selbst zusammen bauen möchte, sollte man sich vorher gut informieren ob das Mainboard mit den gewünschten Komponenten wie Prozessor, Arbeitsspeicher oder Grafikkarte kompatibel ist. Eine CPU benötigt beispielsweise einen bestimmten Sockel, der die Anzahl an PINs auf der Prozessor-Unterseite bestimmt. Wenn du also planst deinen Computer in Zukunft aufzurüsten, so beachte die Gegebenheiten deines Mainboards, unter Umständen muss für leistungsstärkere Komponenten ein neues Mainboard gekauft und eingebaut werden."
      },
      {
        "type": "IMAGE",
        "content": "62dc1e57b9cd068122009868"
      },
      {
        "type": "IMAGE",
        "content": "62dc25c1dddd3492248c1a0b"
      },
      {
        "type": "IMAGE",
        "content": "62dc25d2dddd3492248c1a12"
      },
      {
        "type": "TEXT",
        "content": "Der Platform Controller Hub koordiniert die Vorgänge im Mainboard, früher nannte man diesen Chip auch Chipsatz der sich aus Southbridge & Northbridge zusammensetzte. Mittlerweile werden immer mehr Aufgaben in die CPU integriert, weshalb ein einzelner Chip für die Steuerung des Mainboards ausreicht. Es sind aber immer noch einzelne kleinere Chips, sogenannte Controller, auf dem Board vorhanden, die nur für einzelne Bauteile zuständig sind."
      },
      {
        "type": "IMAGE",
        "content": "62dc25fcdddd3492248c1a1d"
      },
      {
        "type": "IMAGE",
        "content": "62dc2608dddd3492248c1a24"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/bios"
      },
      {
        "type": "TEXT",
        "content": "Die Firmware wird vor dem Betriebssystem geladen, diese überprüft die einzelnen Komponenten des Computers und stellt Informationen zu diesen bereit, damit diese für den Bootvorgang von der Festplatte abgerufen werden können. Der UEFI-Chip ist minimalistischer als das BIOS und gibt die Kontrolle früher an das Betriebssystem ab, außerdem kann damit mehr Speicher addressiert werden. Es ist modular und wird in C programmiert, was es den Programmieren einfacher macht."
      },
      {
        "type": "IMAGE",
        "content": "62dc1d79b9cd0681220097e7"
      },
      {
        "type": "TEXT",
        "content": "Die CMOS-Batterie stellt veränderliche Daten wie Datum, Uhrzeit und Boot-Informationen für das BIOS bereit."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/24_und_8_pin_leiter"
      },
      {
        "type": "TEXT",
        "content": "Zur Energieversorung aller Komponenten wird eine 24-Pin & eine 8-Pin Leitung vom Netzteil am Mainboard angeschlossen. Die 8-Pin Leitung ist insbesondere für die Versorgung der CPU zuständig."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/spannungswandler"
      },
      {
        "type": "TEXT",
        "content": "Da die 12 Volt, die das Netzteil durch die 8-Pin Leitung zur Verfügung stellt, viel zu groß für die CPU sind, gibt es einen Spannungswandler auf dem Mainboard. Ein Controller, MOSFETS, Kondensatoren und Spulen splitten die 12 Volt schließlich in mehrere kleinere Spannungen. Zusätzlich zu dem großen Spannungswandler für die CPU gibt es auch noch mehrere kleinere Spannungswandler auf dem Mainboard für andere Bauteile."
      },
      {
        "type": "IMAGE",
        "content": "62dc1f08dddd3492248c199f"
      },
      {
        "type": "IMAGE",
        "content": "62dc1eb1dddd3492248c1960"
      },
      {
        "type": "IMAGE",
        "content": "62dc025b8ccc44605ed8c3bb"
      },
      {
        "type": "TEXT",
        "content": "Alle Bauteile werden mit Leiterbahnen verbunden um Daten miteinander auszutauschen, eine Datenbahn nennt man im Computer allgemein BUS (engl. <i>binary unit system</i>). Datenbusse, Steuerbusse und Addressbusse und einige andere bilden somit die Grundlage für die Kommunikation aller Komponenten eines Computers."
      },
      {
        "type": "TEXT",
        "content": "In folgendem Video wird alles nochmal ausführlich erklärt."
      },
      {
        "type": "YOUTUBE_VIDEO",
        "content": "https://www.youtube.com/embed/JnMAqsPbV_w"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "BIOS"
      },
      {
        "type": "TEXT",
        "content": "Das BIOS (engl. <i>Basic Input Output System</i>) ist eine Firmware auf dem Mainboard, die beim Einschalten des Computers als erstes gestartet wird. Dieses prüft ob alle Komponenten ordnungsgemäß funktionieren, anschließend werden die Komponenten gestartet und das Betriebssystem wird geladen. Der Nachfolger des BIOS heißt UEFI - eine aktuellere Form des BIOS die sich auch mit der Maus bedienen lässt. Während des Boot-Vorgangs kann das BIOS mit einer bestimmten Taste geöffnet werden, welche Taste das ist wird meist im Boot-Bildschirm für kurze Zeit angezeigt. um die Computer-Komponenten zu konfigurieren. Hierbei ist vorsicht geboten, falsche BIOS-Einstellungen können zum Ausfall des PCs führen - dann hilft ein BIOS-Reset."
      },
      {
        "type": "TEXT",
        "content": "Ältere PCs haben in der Regel ein BIOS, das in einem Blauton gehalten ist und wo man mit den Pfeiltasten der Tastatur durch das Menü navigiert. Ein modernes BIOS (UEFI) lässt sich auch mit der Maus bedienen und kann Grafiken darstellen."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Prozessor"
      },
      {
        "type": "TEXT",
        "content": 'Die Ghz Zahl gibt an wieviele Befehle pro Kern ausgeführt werden, ein Prozessor mit 3,0 Ghz und 4 Kernen kann also (3 Millionen x 4) 12 Millionen Befehle pro Sekunde ausführen. Durch Hyper-Threading ist es zudem möglich dass ein physischer Kern wie zwei "logische Kerne" funktioniert, also effizienter arbeitet als ein Single-Thread-Kern.'
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Grafikkarte"
      },
      {
        "type": "TEXT",
        "content": ""
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Arbeitsspeicher"
      },
      {
        "type": "TEXT",
        "content": ""
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Festplatte / SSD"
      },
      {
        "type": "TEXT",
        "content": ""
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "LIST",
        "content": "Quellen:",
        "list": ["Computer | 03.07.2022 | <a href='https://de.wiktionary.org/wiki/Computer' target='_blank'>https://de.wiktionary.org/wiki/Computer</a>", "Wie funktioniert ein Computer? | 03.07.2022 | <a href='https://www.giga.de/downloads/windows-10/specials/wie-funktioniert-ein-computer-erklaerung-fuer-laien-profis' target='_blank'>https://www.giga.de/downloads/windows-10/specials/wie-funktioniert-ein-computer-erklaerung-fuer-laien-profis</a>", "Was ist das EVA-Prinzip? – Beispiel zur Eingabe, Verarbeitung & Ausgabe | 03.07.2022 | <a href='https://www.giga.de/ratgeber/specials/eva-prinzip/' target='_blank'>https://www.giga.de/ratgeber/specials/eva-prinzip/</a>", "Was ist ein Mainboard/Motherboard? | 03.07.2022 | <a href='https://www.giga.de/ratgeber/specials/was-ist-ein-mainboard-motherboard/' target='_blank'>https://www.giga.de/ratgeber/specials/was-ist-ein-mainboard-motherboard/</a>", "BIOS öffnen – mit diesen Tasten geht's | 03.07.2022 | <a href='https://www.giga.de/extra/bios/tipps/bios-starten-wie-komme-ich-ins-bios/' target='_blank'>https://www.giga.de/extra/bios/tipps/bios-starten-wie-komme-ich-ins-bios/</a>", "Wie funktioniert ein Mainboard? #2 | 03.07.2022 | <a href='https://www.youtube.com/watch?v=JnMAqsPbV_w' target='_blank'>https://www.youtube.com/watch?v=JnMAqsPbV_w</a>"]
      }
    ]
  }
];
