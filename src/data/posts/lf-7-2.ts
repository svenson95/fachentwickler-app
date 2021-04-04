import {Post} from '../../app/models/post';

export const LF7_2_POSTS: Post[] = [
    {
        "url": "e_technik/raeumliche_netzwerkbereiche_und_osi_referenzmodell",
        "title": "Räumliche Netzwerkbereiche und OSI-Referenzmodell",
        "description": "Mitschrift vom 21.09.2020",
        "subject": "lf-7-2",
        "type": "article",
        "lessonDate": "2020-09-21",
        "lastUpdate": "2020-10-27",
        "schoolWeek": "16",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "subtitle",
                "content": "Netztypen"
            },
            {
                "type": "text",
                "content": "Es gibt verschiedene Arten von Netzwerken, welche verschiedene Vor- und Nachteile mit sich bringen. Netzwerke werden mit dem Ziel eingerichtet, Daten von einem System auf ein anderes zu übertragen, oder um gemeinsame Ressourcen wie Server, Datenbanken oder Drucker im Netzwerk zur Verfügung zu stellen. Jeder Netzwerktyp wurde für spezielle Anwendungsbereiche entwickelt und beruht auf jeweils eigenen Techniken und Standards."
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    {
                        "content": "BAN (Body Area Network)",
                        "sublist": [
                            "Körpersensoren",
                            "Reichweite: ~0,1m - 1m"
                        ]
                    },
                    {
                        "content": "CAN (Controller Area Network)",
                        "sublist": [
                            "Steuerelemente in der Automatisierungstechnik",
                            "Reichweite: ~0,1m - 1m"
                        ]
                    },
                    {
                        "content": "PAN (Personal Area Network)",
                        "sublist": [
                            "Vernetzung von (Klein-)Geräten innerhalb eines Raumes, zB ein Smartphone mit einem WLAN-fähigen Drucker",
                            "Reichweite: ~10m"
                        ]
                    },
                    {
                        "content": "LAN (Local Area Network)",
                        "sublist": [
                            "innerhalb eines Gebäudes",
                            "Reichweite: ~10m - 100m"
                        ]
                    },
                    {
                        "content": "MAN (Metropolitan Area Network)",
                        "sublist": [
                            "Verbindungen zwischen Gebäuden in der Nähe (Grundstück, Stadtgebiet, Campus)",
                            "Reichweite: bis 60km"
                        ]
                    },
                    {
                        "content": "WAN (Wide Area Network)",
                        "sublist": [
                            "Fernstrecken, erstrecken sich über große Bereiche wie Länder oder Kontinente"
                        ]
                    },
                    {
                        "content": "GAN (Global Area Network)",
                        "sublist": [
                            "Weltweite Verbindungen, Zusammenschaltungen mehrerer WAN"
                        ]
                    },
                    {
                        "content": "Intranet",
                        "sublist": [
                            "Privates, nicht öffentliches Datennetzwerk (LAN bis WAN von der Ausdehnung her möglich)"
                        ]
                    },
                    {
                        "content": "Internet",
                        "sublist": [
                            "Weltweites, öffentliches Datennetzwerk"
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
                "content": "OSI-Schichtenmodell"
            },
            {
                "type": "text",
                "content": "Das OSI-Modell (engl. <i>Open Systems Interconnection</i>) beschreibt die unterschiedlichen Schichten auf die eine Netzwerkarchitektur basiert. Das OSI-Referenzmodell besteht aus insgesamt 7 Schichten, bei den verschiedenen Schichten handelt es sich um vereinheitlichte Verfahren und Regelungen für den Austausch von Daten. Die Schichten 1 bis 4 werden als \"Transportschichten\" bezeichnet. In diesen findet zwischen den physikalischen Endpunkten der physikalische Datentransport statt."
            },
            {
                "type": "text",
                "content": "Die Schichten 5 bis 7 stellen die \"Anwendungsorientierten Schichten\" dar, hier findet die eigentliche Handhabung der Schnittstellen statt. Das OSI-Referenzmodell ermöglicht die Vergegenwärtigung, wie Daten in einem Netzwerk wandern. Denn durch die unterschiedlichen Schichten kann man die Netzwerkfunktionen seperat betrachten. Funktionsweise von Netzgeräten wie Switch oder Router werden erst mit dem OSI-Referenzmodell richtig klar."
            },
            {
                "type": "list",
                "content": "Die 7 Schichten des OSI-Modells",
                "ordered": true,
                "list": [
                    "Bitübertragungsschicht (engl. <i>Physical Layer</i>) ➞ Physikalischer Transport der digitalen Daten",
                    "Sicherungsschicht (engl. <i>Data-Link Layer</i>) ➞ Ankommende und abgehende Datenpakete werden auf Vollständigkeit und Unversehrtheit überprüft",
                    "Vermittlungsschicht (engl. <i>Network Layer</i>) ➞ Hier wird sichergestellt, dass die Daten am gewünschten Ziel eintreffen",
                    "Transportschicht (engl. <i>Transport Layer</i>) ➞ Segmentiert die Daten beim Sender und setzt sie beim Empfänger wieder zusammen, hier wird erkannt, ob es zu Datentransportfehlern gekommen ist und falls ja werden diese behoben",
                    "Sitzungsschicht (engl. <i>Session Layer</i>) ➞ Datenaustausch und geordneter Ablauf zwischen den Endsystemen wird hier geregelt",
                    "Darstellungsschicht (engl. <i>Presentation Layer</i>) ➞ Beinhaltet Protokolle eines Betriebssystems, legt Zeichensatz fest (z. B. ASCII), Datenkompression und Verschlüsselung, soll sicherstellen dass die Daten auf dem Empfänger-System gelesen werden können",
                    "Anwendungsschicht (engl. <i>Application Layer</i>) ➞ Verbindet Anwendungsprogramme mit dem OSI-Referenzmodell"
                ]
            },
            {
                "type": "list",
                "content": "Geräte die auf den jeweiligen Schichten arbeiten",
                "list": [
                    {
                        "content": "Schicht 3",
                        "sublist": [
                            "Router",
                            "Layer 3 Switch"
                        ]
                    },
                    {
                        "content": "Schicht 2",
                        "sublist": [
                            "Layer 2 Switch",
                            "Netzwerkkarte",
                            "Bridge"
                        ]
                    },
                    {
                        "content": "Schicht 1",
                        "sublist": [
                            "Repeater",
                            "Hub",
                            "Reciever"
                        ]
                    }
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
                    "<a href='http://www.easy-network.de/netztypen.html'>http://www.easy-network.de/netztypen.html</a>",
                    "<a href='http://www.easy-network.de/osi.html'>http://www.easy-network.de/osi.html</a>"
                ]
            }
        ]
    },
    {
        "url": "e_technik/duplexing_topology_und_uebertragungsraten",
        "title": "Duplexing, Topology und Übertragungsraten",
        "description": "Mitschrift vom 22.09.2020",
        "subject": "lf-7-2",
        "type": "article",
        "lessonDate": "2020-09-22",
        "lastUpdate": "2020-10-31",
        "schoolWeek": "16",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "subtitle",
                "content": "Topology"
            },
            {
                "type": "list",
                "content": "Es gibt zwei Arten von Topologiedefinitionen:",
                "list": [
                    {
                        "content": "Die <b>physikalische Topologie</b>, welches das aktuelle Layout der Kabel (Medium) definiert",
                        "sublist": [
                            "Bus - Topologie",
                            "Ring - Topologie",
                            "Stern - Topologie",
                            "Erweiterte Stern - Topologie",
                            "Hierarische - Topologie",
                            "Misch - Topologie"
                        ]
                    },
                    {
                        "content": "Die <b>logische Topologie</b>, welche definiert wird durch den Medienzugriff der Hosts. Sie beschreibt wie die Hosts über das Medium kommunizieren. Im Allgemeinen werden zwei Arten der logischen Topologie genutzt:",
                        "sublist": [
                            "Broadcast",
                            "Tokenpassingverfahren"
                        ]
                    }
                ]
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f9cb87dd58f4c4d8a43c049"
            },
            {
                "type": "hint",
                "content": "Eine Bridge ist ein Medien Konverter, Bridge und Switch arbeiten auf OSI Level 2."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Übertragungskapazität"
            },
            {
                "type": "text",
                "content": "Bandbreite: Zahl der übertragenen Informationen pro Zeiteinheit <br/> Übertragungsgeschwindigkeit: Kilobits pro Sekunde"
            },
            {
                "type": "text",
                "content": "Ein wichtiges Merkmal eines Trägermediums ist dessen Übertragungskapazität. Diese ist abhängig von der verwendeten Bandbreite, d. h. dem Frequenzbereich, in dem die Signale übertragen werden."
            },
            {
                "type": "hint",
                "content": "Je größer die Bandbreite, desto größer ist die Zahl der Informationen, die pro Zeiteinheit übertragen werden können. <br/> Die Bandbreite wird in Hertz (Hz) bzw. kHz, MHz oder GHz angegeben."
            },
            {
                "type": "text",
                "content": "Die Übertragungsgeschwindigkeit wird in Kilobits pro Sekunde (kbps, Mbps, etc.) angegeben, ebenso wie die Kanalkapazität. Durch verschiedene Formen der Kanal-Kodierung kann bei gleicher Bandbreite die Kanalkapazität vergrößert werden."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Verbindungen sind Drähte"
            },
            {
                "type": "text",
                "content": "Simplex-Verbindung ➞ Datenübertragung nur in eine Richtung <br/> Halbduplex-Verbindung ➞ Richtung der Datenübertragung kann sich ändern <br/> Vollduplex-Verbindung ➞ Datenübertragung in beide Richtungen gleichzeitig möglich"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f9cbe9ed58f4c4d8a43c056"
            },
            {
                "type": "hint",
                "content": "Beispiele für ... <br/> Simplex - Radio <br/> Halbduplex - Hub, Walkie Talkie <br/> Vollduplex - Switch, Router, Internet"
            },
            {
                "type": "text",
                "content": "Erfolgt die Übertragung in beide Richtungen mit gleicher Übertragungsrate, so handelt es sich um eine symmetrische Verbindung, ansonsten um eine asymmetrische Verbindung."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Kommunikationsprotokolle"
            },
            {
                "type": "text",
                "content": "Regeln - nach denen die Vorgänge zwischen Sender und Empfänger ablaufen - werden Protokolle gennant. Diese steuern die Datenkommunikation zwischen Geräten, Systemen und Programmen, die Verarbeitung der Botschaften in Signale und umgekehrt. Wir kennen Protokolle aus der ganz normalen menschlichen Kommunikation, z. B. zuzuhören wenn der Partner spricht oder nachzufragen wenn man etwas nicht verstanden hat."
            },
            {
                "type": "text",
                "content": "Ethernet ist das zur Zeit am häufigsten installierte lokale Netz. Die Spezifikation dieses Basisband-LAN wurde in den 70er Jahren zusammen von DEC, Intel und Xerox entwickelt (DIX-Standard). 1992 stellte die DIX-Gruppe die Spezifikationen für die Ethernet-Version 2 vor."
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    "Zugangskontrolle ➞ Regelungen über die Zugangsberechtigungen von Endeinrichtungen",
                    "Initialisierung ➞ Prozess zum Starten und Beenden der Übertragung, Informationen zum Verbindungsaufbau und -abbau",
                    "Addressierung ➞ Identifizierung von Endsystemen (und des Absenders)",
                    "Blockbildung ➞ Regeln zur Kennzeichnung von Blockbeginn und Blockende",
                    "Blocknummerierung ➞ Fortlaufende Nummerierung von Datenblöcken, um den Verlust von Datenblöcken zu erkennen",
                    "Steuerung ➞ Überwachung des Ablaufes der Datenübertragung",
                    "Flusskontrolle ➞ Mechanismus zur Drosselung des Datenverkehrs, damit ein Sender einen Empfänger nicht mit Daten überschwemmt",
                    "Fehlererkennung ➞ Durch entsprechende Sicherungsverfahren, Prüfsumme zum Erkennen von Übertragungsfehlern"
                ]
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Datenübertragung & Übertragungsraten"
            },
            {
                "type": "text",
                "content": "Die einfachste Form der Datenübermittlung ist eine Punkt-zu-Punkt Verbindung. In Datennetzen wie dem Internet handelt es sich immer um eine Zweiwege-Kommunikation."
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    "Verbindungsaufbau",
                    "Verbindungskontrolle",
                    "Verbindungsabbau"
                ]
            }
        ]
    },
    {
        "url": "e_technik/kollisionen_kollisionsdomaene_5er_regel_und_abschlusswiderstaende",
        "title": "Kollisionen / Kollisionsdomäne, 5er-Regel und Abschlusswiderstände",
        "description": "Mitschrift vom 25.09.2020",
        "subject": "lf-7-2",
        "type": "article",
        "lessonDate": "2020-09-25",
        "lastUpdate": "2020-12-21",
        "schoolWeek": "16",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "text",
                "content": "Wenn ein Netzwerk-Gerät auf ein Medium (Server / Netzwerk) zugreift, spricht man von einer Kollision. Die Netzwerke sind in den meisten Fällen nicht nur mit einem Gerät verbunden sondern mit mehreren gleichzeitig. Ein Netzwerk ist daher eine Kollisionsdomäne, über das Kollisionsverfahren erhalten andere Geräte Zugriff auf das Übertragungsmedium."
            },
            {
                "type": "text",
                "content": "<u>Eine Kollisionsdomäne ist das geteilte Medium, auf dem die gleichen physikalischen Größen miteinander kollidieren.</u> Sie umfasst alle Geräte die mit einem gemeinsamen Medium verbunden sind. Das Medium ist also eine zwischen allen Netzwerk-Geräten geteilte Ressource. Repeater und Hub's erweitern die Reichweite einer Kollisionsdomäne. Eine Bridge, Switch oder Router begrenzen die Kollisionsdomäne."
            },
            {
                "type": "list",
                "content": "5er-Regel",
                "list": [
                    "<span class='ddu-list-number'>5</span> Segmente",
                    "<span class='ddu-list-number'>4</span> Repeater",
                    "<span class='ddu-list-number'>3</span> Workstation-Segmente",
                    "<span class='ddu-list-number'>2</span> Links-Segmente",
                    "<span class='ddu-list-number'>1</span> Kollisionsdomäne"
                ]
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f9892e0d58f4c4d8a43bfec"
            },
            {
                "type": "text",
                "content": "Ein Repeater ist ein Netzwerkgerät der Bitübertragungsschicht. Damit arbeitet der Repeater auf der ersten Schicht des OSI 7 Schichtenmodells. Die Hauptaufgabe eines Repeaters ist es Signale aufzuarbeiten. Aufgrund der Dämpfung sind beispielsweise die Längen von Netzwerkkabeln begrenzt."
            },
            {
                "type": "text",
                "content": "Hier kann ein <b>Repeater</b> als Netzwerkgerät verwendet werden, <b>um längere Strecken eines LANs zu überbrücken</b>. Der Repeater empfängt ein Signal, entfernt bzw. korrigiert Verzerrungen und sendet das Signal wieder los."
            },
            {
                "type": "text",
                "content": "Die Repeater-Regel besagt, dass ein Ethernet-Netzwerk nicht beliebig erweitert werden kann. Repeater vergrößern die Kollisionsdomäne, d. h. dass es mehr Möglichkeiten gibt, wo in der Datenkommunikation Kollisionen durch gleichzeitig sendende Stationen auftreten können."
            },
            {
                "type": "hint",
                "content": "<b>Fünf</b> Segmente dürfen über <b>vier</b> Repeater miteinander verbunden werden. Lediglich auf <b>drei</b> aktiven (Workshop-) Segmenten dürfen Komponenten angeschlossen sein. Auf <b>zwei</b> Segmenten dürfen keine Komponenten angeschlossen werden. Diese Segmente dienen lediglich der Verlängerung des Gesamtnetzwerks. Das Gesamtnetzwerk stellt <b>eine</b> große Kollisionsdomäne dar."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Abschlusswiderstände"
            },
            {
                "type": "text",
                "content": "Abschlusswiderstände sind Widerstände an Leitungsenden, die der Impedanz des Kabels entsprechen und dieses Impedanz-richtig abschließen. Durch den Abschluss laufen die auf dem Übertragungsmedium übertragenen Wellen im Unendlichen aus und können nicht reflektiert werden."
            },
            {
                "type": "text",
                "content": "<u>Bei der Übertragung von Signalen hat man nicht nur mit Leitungsverlusten zu rechnen</u>, sondern auch mit <b>Reflexionen des Signals</b> und die damit verbundenen möglichen <b>Verfälschungen der Daten</b>. Reflexionen gibt es bei elektrischen Wellen, um zu verstehen was Reflexionen bedeuten, hilft es die Signale als Wellen zu betrachten."
            },
            {
                "type": "hint",
                "content": "Sie werden benötigt um reflektierende Impulse zu verhindern."
            },
            {
                "type": "text",
                "content": "Reflexionen sind Wellen, die sich in beiden Richtungen auf der Übertragungsleitung fortpflanzen, so wie ein Echo. Sie treten hauptsächlich an Leitungsenden und Leitungsübergangen auf, können aber auch dadurch entstehen, dass Leitungen beschädigt werden was schon durch zu starke Biegung geschehen kann. Dabei muss kein sichtbarer Schaden vorhanden sein, und es kommt dennoch zu einer schlechteren Signalübertragung."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "list",
                "content": "Quellen:",
                "list": [
                    "<a href='https://www.airnet.de/cr2-eg/de/html/EntwLANBer_learningObject3.xml'>https://www.airnet.de/cr2-eg/de/html/EntwLANBer_learningObject3.xml</a>",
                    "<a href='https://www.elektronik-kompendium.de/sites/grd/0301035.htm'>https://www.elektronik-kompendium.de/sites/grd/0301035.htm</a>",
                    "<a href='https://www.itwissen.info/Abschlusswiderstand-terminator.html'>https://www.itwissen.info/Abschlusswiderstand-terminator.html</a>",
                    "<a href='https://www.itwissen.info/Kollisionsdomaene-collision-domain.html'>https://www.itwissen.info/Kollisionsdomaene-collision-domain.html</a>"
                ]
            }
        ]
    },
    {
        "url": "e_technik/berechnungen_zur_datenuebertragung_datenspeicherung",
        "title": "Berechnungen zur Datenübertragung / Datenspeicherung",
        "description": "Mitschrift vom 25.09.2020",
        "subject": "lf-7-2",
        "type": "article",
        "lessonDate": "2020-09-25",
        "lastUpdate": "2020-10-19",
        "schoolWeek": "16",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "text",
                "content": "Bei Berechnungen von Datenübertragung und Dateigrößen wird in mehreren unterschiedlichen Umrechnungsfaktoren und Einheiten, sowie Groß- und Kleinschreibung unterschieden. GB - Giga Byte, Gb - Giga bit."
            },
            {
                "type": "subtitle",
                "content": "Allgemeine Verwirrung durch Marketingtricks"
            },
            {
                "type": "text",
                "content": "Die Anbieter von Netzwerk-, Internet- und Speicherhardware greifen immer zu einem Umrechnungsfaktor von 1000, da dann die Leistung ihrer Produkte höher zu sein scheint als bei einem Umrechnungsfaktor von 1024."
            },
            {
                "type": "text",
                "content": "Beispiel Festplatte <br/> Eine Festplatte mit einer angepriesenen Kapazität von 100GB (Gigabyte) stellt ein theoretisches Fassungsvermögen von 100.000.000.000 Byte dar. Das wären aber nur ca. 93GB nach Umrechnung mit 1024, was würden Sie als Kunde lieber kaufen? Eine Festplatte mit 100GB oder eine Festplatte mit 93GB?"
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "header",
                        "columns": [
                            { "align": "right", "content": "TB" },
                            { "align": "right", "content": "GB" },
                            { "align": "right", "content": "MB" },
                            { "align": "right", "content": "KB" },
                            { "align": "right", "content": "Byte" },
                            { "align": "right", "content": "Bit" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "right", "content": "" },
                            { "align": "right", "content": "" },
                            { "align": "right", "content": "" },
                            { "align": "right", "content": "" },
                            { "align": "right", "content": "1" },
                            { "align": "right", "content": "8" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "right", "content": "" },
                            { "align": "right", "content": "" },
                            { "align": "right", "content": "" },
                            { "align": "right", "content": "1" },
                            { "align": "right", "content": "1024" },
                            { "align": "right", "content": "8192" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "right", "content": "" },
                            { "align": "right", "content": "" },
                            { "align": "right", "content": "1" },
                            { "align": "right", "content": "1024" },
                            { "align": "right", "content": "1048576" },
                            { "align": "right", "content": "8388608" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "right", "content": "" },
                            { "align": "right", "content": "1" },
                            { "align": "right", "content": "1024" },
                            { "align": "right", "content": "1048576" },
                            { "align": "right", "content": "1073741824" },
                            { "align": "right", "content": "8589934592" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "right", "content": "1" },
                            { "align": "right", "content": "1024" },
                            { "align": "right", "content": "1048576" },
                            { "align": "right", "content": "1073741824" },
                            { "align": "right", "content": "1099511627776" },
                            { "align": "right", "content": "8796093022208" }
                        ]
                    }
                ]
            },
            {
                "type": "text",
                "content": "In den Produktdetails findet man dann auch ..."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Umrechnungsfaktor \"1000\""
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    "Mengeneinheit: <b>k</b>ilo, <b>m</b>ega, <b>g</b>iga etc.",
                    "Kleingeschriebene Mengeneinheiten stellen einen Umrechnungsfaktor von 1000 dar"
                ]
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Umrechnungsfaktor \"1024\""
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    "Mengeneinheit: <b>K</b>ilo, <b>M</b>ega, <b>G</b>iga etc.",
                    "Großgeschriebene Mengeneinheiten stellen einen Umrechnungsfaktor von 1024 dar"
                ]
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Datenübertragung"
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    "Einheit: bit/s oder bps (Bit pro Sekunde - bits per second)",
                    "Umrechnungsfaktor 1000, d.h. kleingeschriebene Einheiten",
                    "Öfters sieht man auch das \"bit\" als \"b\" abgekürzt oder speziell bei Modems die Einheit \"bit\" ganz fehlt, etwa \"56k\" statt \"56kbit/s\" oder \"56kbps\"."
                ]
            },
            {
                "type": "list",
                "content": "z.B. 56k Modem",
                "list": [
                    "56kbit/s bzw. 56kbps",
                    "56.000 Bit pro Sekunde (bit/s, bps)"
                ]
            },
            {
                "type": "list",
                "content": "z.B. DSL (hier T-DSL 768)",
                "list": [
                    "768kbit/s bzw. 56kbps",
                    "768.000 Bit pro Sekunde (bit/s, bps)"
                ]
            },
            {
                "type": "list",
                "content": "z.B. LAN (hier 100 Base-TX)",
                "list": [
                    "100mbit/s bzw. 100mbps",
                    "100.000.000 Bit pro Sekunde (bit/s, bps)"
                ]
            },
            {
                "type": "text",
                "content": "Natürlich kann man auch Übertragungsraten mit dem Faktor 1024 und der Einheit Byte kombinieren, das bedeutet dann aber nur, dass eine bestimmte Dateigröße pro einer Sekunde übertragen werden kann. Ein Netzwerk kann z. B. theoretisch ca. 11,92 MB/s (Megabyte pro Sekunde) übertragen."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Dateigrößen"
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    "Einheit: Byte oder nur \"B\"",
                    "Umrechnungsfaktor 1024, d. h. großgeschriebene Einheiten"
                ]
            },
            {
                "type": "list",
                "content": "z .B. 5KB Datei",
                "list": [
                    "5 x 1024 Byte = 5120 Byte"
                ]
            },
            {
                "type": "list",
                "content": "z .B. 5MB Datei",
                "list": [
                    "5 x 1024 KB = 5 x 1024 x 1024 Byte = 5.242.880 Byte"
                ]
            },
            {
                "type": "list",
                "content": "z. B. 5GB Datei",
                "list": [
                    "5 x 1024 MB = 5 x 1024 x 1024 KB = 5 x 1024 x 1024 x 1024 Byte = 5.368.709.120 Byte"
                ]
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Umrechnung zwischen Dateigröße und Datenübertragung"
            },
            {
                "type": "text",
                "content": "Möchte man eine 20MB Datei per 56k Modem übertragen und errechnen, wieviel Zeit wird dafür benötigt, geht man folgendermaßen vor."
            },
            {
                "type": "text",
                "content": "(1) Umrechnung in Bit <br/> 20MB = 20 x 1024 x 1024 Byte = 20.971.520 Byte <br/> 20.971.520 Byte x 8 = 167.772.160 Bit"
            },
            {
                "type": "text",
                "content": "56k Modem = 56.000bit/s"
            },
            {
                "type": "text",
                "content": "(2) Teilung von Dateigröße durch Übertragung pro Sekunde <br/> Dateigröße in bit / Datenübertragung in bit/s = Zeit in s <br/> 167.772.160bit / 56.000bit/s = 2995,9314285714285714285714285714s"
            },
            {
                "type": "list",
                "content": "Da sicherlich die Zeit in Minuten bzw. Sekunden gesucht ist, kann man je nach Aufgabe auf ganzzahlige Ergebnisse <u>aufrunden</u>.",
                "list": [
                    "Zeit = 2996 Sekunden (s)",
                    "49 Minuten und 56 Sekunden"
                ]
            },
            {
                "type": "hint",
                "content": "Falls in den Prüfungen Aufgaben zur Datenübertragung kommen, wird in der Regel die Übertragungsrate in Bit angegeben oder ein Zusatz weist auf den Umrechnungsfaktor hin. Wenn das nicht der Fall sein sollte und man nicht sicher ist, schreibt an den Anfang der Lösung: Unter Annahme, dass der \"56k Modem\" 56.000 <b>Bit</b> pro Sekunde überträgt."
            },
            {
                "type": "text",
                "content": "Die Umrechnungsfaktoren in Groß geschrieben beziehen sich auf Byte und die Angaben in klein geschrieben beziehen sich auf Bit. Die Berechnung mit den 1024 als Umrechnungsfaktor kommt daher, weil ein Byte eine Menge von 8bit enthält, und somit alle Zahlen in den Speichermengenangaben durch 8 teilbar sein sollen."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Aufgabe"
            },
            {
                "type": "text",
                "content": "Es soll ein Bild mit folgenden Informationen heruntergeladen werden, wielange dauer die Übertragung mindestens? <br/> → 2.500 mal 800 Pixel, Speicherung von 8 Bit je RGB-Farbkanal. <br/>"
            },
            {
                "type": "text",
                "content": "Bei RGB sollten es 3 Farbkanäle sein - Rot, Grün und Blau. Also 8bit pro Farbkanal → 24bit pro Pixel - Man rechnet hier mit bit, dann muss nachher nicht mehr so viel umgerechnet werden."
            },
            {
                "type": "text",
                "content": "Angenommene Bild-Größe, einfach eine Zahl ausgedacht 347.743 Bits."
            },
            {
                "type": "text",
                "content": "Downloadgeschwindigkeit = 16.000 kbit/s = 16.000.000 bit/s."
            },
            {
                "type": "text",
                "content": "347.743 bit / 16.000.000 bit/s = ca. 0,21733s"
            },
            {
                "type": "list",
                "content": "so lange dauert es mindestens sofern die Datenrate nicht über 16.000kbit/s liegt",
                "list": [
                    "Pro Pixel kann doch nur ein Kanal (SW)? <br/> 2.500 x 800 Pixel = 2.000.000 Pixel → 2.000.000 Pixel x 8 bit/Pixel = 16.000.000 Bit",
                    "Pro Pixel drei Kanäle (Farbe) <br/> 2.500 x 800 Pixel = 2.000.000 Pixel x 24bit/Pixel = 48.000.000 bit / 8 = 60.000.000 Byte"
                ]
            }
        ]
    },
    {
        "url": "e_technik/topologien_im_detail_1_ring_bus_und_stern_topologie",
        "title": "Topologien im Detail (1) - Ring-, Bus- und Stern-Topologie (Entwurf)",
        "description": "Mitschrift vom 29.10.2020",
        "subject": "lf-7-2",
        "type": "article",
        "lessonDate": "2020-10-29",
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
        "url": "e_technik/topologien_im_detail_2_baum_vermaschte_und_unregelmäßige_topologie",
        "title": "Topologien im Detail (2) - Baum-, vermaschte & unregelmäßige Topologie (ENTWURF)",
        "description": "Mitschrift vom 30.10.2020",
        "subject": "lf-7-2",
        "type": "article",
        "lessonDate": "2020-10-30",
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
        "url": "e_technik/wlan_umts_und_lte",
        "title": "WLAN, UMTS und LTE (ENTWURF)",
        "description": "Mitschrift vom 16.11.2020",
        "subject": "lf-7-2",
        "type": "article",
        "lessonDate": "2020-11-16",
        "lastUpdate": "2020-12-20",
        "schoolWeek": "18",
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
        "url": "e_technik/topologien_wiederholung",
        "title": "Topologien Wiederholung (Entwurf)",
        "description": "Mitschrift vom 20.11.2020",
        "subject": "lf-7-2",
        "type": "tasks",
        "lessonDate": "2020-11-20",
        "lastUpdate": "2020-12-20",
        "schoolWeek": "18",
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
        "url": "e_technik/intranet_und_extranet",
        "title": "Intranet & Extranet (ENTWURF)",
        "description": "Mitschrift vom 08.12.2020",
        "subject": "lf-7-2",
        "type": "article",
        "lessonDate": "2020-12-08",
        "lastUpdate": "2020-12-20",
        "schoolWeek": "19",
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
        "url": "netze_und_dienste/ipv4",
        "_id": "5fdfd39c8c8c2a5e54a4a405",
        "topicId": "6056856207c61731b8d162ed",
        "title": "IPv4",
        "description": "Mitschrift vom 11.12.2020",
        "subject": "lf-7-2",
        "type": "article",
        "lessonDate": "2020-12-11",
        "lastUpdate": "2021-03-27",
        "schoolWeek": "19",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "text",
                "content": "IPv4 ist ein Netzwerkprotokoll (IP, engl. <i>Internet Protocol</i>) welches für die Adressierung im Netzwerk verantwortlich ist. Es ist die erste Version die sich weltweit verbreitet hat. IPv4 wurde im September 1981 als RFC 791 veröffentlicht, die Version 6 (IPv6) wurde im Dezember 1998 als RFC 2460 veröffentlicht. Die IP bildet eine wichtige technische Grundlage des Internets, eine IP-Adresse muss weltweit einmalig sein. IPv4-Adressen bestehen aus 4 Oktetten / binären Adressblöcken je maximal 2^8 (=256), z.B. <code>192.168.2.1</code>."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/605f9f8559bf2574740034f0"
            },
            {
                "type": "text",
                "content": "Da die Anzahl an möglichen Adressen relativ begrenzt war - was angesichts der steigenden Popularität des Internets zum Problem wurde - kam mit IPv6 ein neues Adressierungsschema, welches deutlich länger ist und mit einer hexadezimalen Schreibweise arbeitet. Dabei wird eine Zahl in 8 Blöcke zu je 16 Bit unterteilt, diese Blöcke werden durch Doppelpunkte getrennt. Eine IPv6 Adresse könnte z.B. so aussehen <code>2001:0db4:84a3:28b3:1319:5a2e:0370:7344</code>. Führende Nullen dürfen ausgelassen werden, z.B. <code>2001:db8:85a3:8d3:1319:8a2e:370:7344</code>."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "list",
                "content": "Allgemeine Grundlagen",
                "list": [
                    "TCP/IP ist der Name für eine Protokollfamilie, die für mehr als 100 Kommunikationsprotokolle steht",
                    "TCP/IP wird im Internet genutzt und hat dadurch eine enorme Verbreitung erfahren",
                    {
                        "content": "Transmission Control Protocol (TCP)",
                        "sublist": [
                            "Transportprotokoll (Schicht 4)",
                            "erbringt den gesicherten (zuverlässigen) Datentransport",
                            "Zuverlässigkeit bedeutet eine positive Bestätigung des Empfanges mit Neuübertragung bei aufgetretenen Fehlern"
                        ]
                    },
                    {
                        "content": "Internet Protokoll (IP)",
                        "sublist": [
                            "Netzprotokoll (Schicht 3)",
                            "stellt den ungesicherten Transport von Daten zur Verfügung",
                            "IPv4",
                            "IPv6"
                        ]
                    }
                ]
            },
            {
                "type": "table",
                "content": "Boolesche Verknüfung",
                "rows": [
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Position" },
                            { "align": "middle", "content": "7" },
                            { "align": "middle", "content": "6" },
                            { "align": "middle", "content": "5" },
                            { "align": "middle", "content": "4" },
                            { "align": "middle", "content": "3" },
                            { "align": "middle", "content": "2" },
                            { "align": "middle", "content": "1" },
                            { "align": "middle", "content": "0" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Dual" },
                            { "align": "middle", "content": "2^7" },
                            { "align": "middle", "content": "2^6" },
                            { "align": "middle", "content": "2^5" },
                            { "align": "middle", "content": "2^4" },
                            { "align": "middle", "content": "2^3" },
                            { "align": "middle", "content": "2^2" },
                            { "align": "middle", "content": "2^1" },
                            { "align": "middle", "content": "2^0" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Dezimal" },
                            { "align": "middle", "content": "128" },
                            { "align": "middle", "content": "64" },
                            { "align": "middle", "content": "32" },
                            { "align": "middle", "content": "16" },
                            { "align": "middle", "content": "8" },
                            { "align": "middle", "content": "4" },
                            { "align": "middle", "content": "2" },
                            { "align": "middle", "content": "1" }
                        ]
                    }
                ]
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Byte" },
                            { "align": "middle", "content": "1" },
                            { "align": "middle", "content": "1" },
                            { "align": "middle", "content": "1" },
                            { "align": "middle", "content": "1" },
                            { "align": "middle", "content": "1" },
                            { "align": "middle", "content": "1" },
                            { "align": "middle", "content": "1" },
                            { "align": "middle", "content": "1" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Dual" },
                            { "align": "middle", "content": "2^7" },
                            { "align": "middle", "content": "2^6" },
                            { "align": "middle", "content": "2^5" },
                            { "align": "middle", "content": "2^4" },
                            { "align": "middle", "content": "2^3" },
                            { "align": "middle", "content": "2^2" },
                            { "align": "middle", "content": "2^1" },
                            { "align": "middle", "content": "2^0" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Summe" },
                            { "align": "middle", "content": "255" },
                            { "align": "middle", "content": "127" },
                            { "align": "middle", "content": "63" },
                            { "align": "middle", "content": "31" },
                            { "align": "middle", "content": "15" },
                            { "align": "middle", "content": "7" },
                            { "align": "middle", "content": "3" },
                            { "align": "middle", "content": "1" }
                        ]
                    }
                ]
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "list",
                "content": "Regeln für die IP-Adressierung",
                "list": [
                    "4 Byte Binärzahlen <br/> (xxxx xxxx . xxxx xxxx . xxxx xxxx . xxxx xxxx)",
                    "Beinhaltet Netzwerk- und Hostadresse",
                    "Darstellung in dezimaler Punktnotation <br/> (192.168.100.20)",
                    "Jede Adresse darf nur einmal in einem autonomen System vergeben werden"
                ]
            },
            {
                "type": "subtitle",
                "content": "Autonomes System"
            },
            {
                "type": "list",
                "content": "Autonom (= <i>unabhängig, eigenständig</i>)",
                "list": [
                    "Ein autonomes System wird durch eine Schnittstelle zu einem WAN begrenzt",
                    "Router innerhalb eines autonomen Systems verwenden interne Routingprotokolle (z. B. RIP, IGRP, OSPF, EIGRP)"
                ]
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/605d9fd159bf2574740034c3"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "MAC Adresse"
            },
            {
                "type": "text",
                "content": "Jedes internetfähige Gerät hat auf seiner Netzwerkschnittstelle eine eindeutige MAC-Adresse (engl. <i>Media-Access-Control Address</i>). Diese identifiziert ein Gerät bei einer Datenverbindung. Sofern ein Gerät (PC, Server, Switch) mehr als ein physisches Interface hat, besitzt jedes Netzwerk-Interface eine eigene MAC-Adresse. Bei Microsoft wird diese auch \"<b>physikalische Adresse</b>\" genannt. Format einer MAC-Adresse: <code>00-11-22-33-44-55</code> - es können alle hexadezimalen Zeichen vorkommen (0 bis 9, A bis F)."
            }
        ]
    },
    {
        "url": "e_technik/datensicherheit_und_datenuebertragung_1",
        "title": "Datensicherheit und Datenübertragung (1) (ENTWURF)",
        "description": "Mitschrift vom 12.01.2021",
        "subject": "lf-7-2",
        "type": "article",
        "lessonDate": "2021-01-12",
        "lastUpdate": "2021-02-08",
        "schoolWeek": "20",
        "elements": [
            {
                "type": "title",
                "content": "LF-7-2"
            },
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
        "url": "e_technik/datensicherheit_und_datenuebertragung_2",
        "title": "Datensicherheit und Datenübertragung (2) (ENTWURF)",
        "description": "Mitschrift vom 15.01.2021",
        "subject": "lf-7-2",
        "type": "article",
        "lessonDate": "2021-01-15",
        "lastUpdate": "2021-02-08",
        "schoolWeek": "20",
        "elements": [
            {
                "type": "title",
                "content": "LF-7-2"
            },
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
        "url": "e_technik/viren_und_malware_1",
        "title": "Viren und Malware (1)",
        "description": "Mitschrift vom 09.02.2021",
        "subject": "lf-7-2",
        "type": "tasks",
        "lessonDate": "2021-02-09",
        "lastUpdate": "2021-03-07",
        "schoolWeek": "21",
        "elements": [
            {
                "type": "title",
                "content": "LF-7-2"
            },
            {
                "type": "title",
                "content": "Aufgaben"
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    "Arbeiten Sie den u. angehängten Text durch",
                    "Ergänzen und überprüfen Sie den Text durch Ihre Internet-Recherche",
                    "Dir Ergänzungen bitte in den Abgabeordner hochladen"
                ]
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Grundbauplan eines Virus"
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    {
                        "content": "Ein Virus besteht aus mehreren funktionalen Komponenten, von denen eine obligatorisch ist, die anderen aber nicht unbedingt vorhanden sein müssen",
                        "sublist": [
                            "Infektion",
                            "Payload (Nutzlast)",
                            "Tarnung"
                        ]
                    },
                    "<b>Grundsätzlich</b>: Ein Virus ist ein Programm",
                    "Dieses spezielle Programm enthält die Befehle, die zur Erzeugung einer Kopie des Programms führen",
                    "Der Teil des Computervirus, der sich mit der Anfertigung von Kopien seiner selbst beschäftigt, wird Infektionsroutine genannt",
                    {
                        "content": "Das aus dem militärischen Bereich stammende Wort Payload bezeichnet die „Nutzlast“ eines Virus. Man bezeichnet damit die verankerten Schadensfunktionen",
                        "sublist": [
                            "Je nach Absichten und Einfallsreichtum des Programmierers kann ein Virus die unterschiedlichsten Aktionen ausführen",
                            "Dies reicht von der Anzeige von störenden Bildschirmmeldungen bis zum Löschen von Dateien oder dem Unbrauchbarmachen von ganzen Datenträgern",
                            "Schadensfunktionen gekoppelt an bestimmte Ereignisse <br/> → z.B. an ein bestimmtes Datum (z. B. Freitag, den 13.) <br/> → oder an ein anderes Ereignis zu koppeln (z. B. 50. Neustart des Rechners) <br/> → Es existieren allerdings auch Viren, die keine Payload mit sich führen, da sie z. B. nur als konzeptionelle Viren geschrieben wurden",
                            "Auch Viren ohne Payload sind nicht ganz ungefährlich"
                        ]
                    },
                    "Durch fehlerhaft programmierte Infektionsroutinen können auch diese zu einem Datenverlust führen",
                    "Um auf einem System nach der Infektion nicht entdeckt zu werden, enthalten die meisten Viren spezielle Tarnroutinen. Dies kann sich auf die Art und Weise der Infektion oder Manipulation des befallenen Systems auswirken"
                ]
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Bootsektorvirus"
            },
            {
                "type": "text",
                "content": "Bootsektorviren besetzen den Lebensraum des Bootsektors einer Platte. Ein Bootsektorvirus nutzt die Tatsache, dass jeder Computer irgendwann einmal gestartet werden muss."
            },
            {
                "type": "text",
                "content": "Arbeitsweise eines Bootsektorvirus ..."
            },
            {
                "type": "subtitle",
                "content": "Allgemein – Der Startvorgang des Rechnersystems"
            },
            {
                "type": "text",
                "content": "Als Erstes nach dem Einschalten führt das BIOS eine Fehlererkennung durch (POST) und leitet dann den Start des Betriebssystems ein, in dem auf den verfügbaren Datenträgern nach einem Bootsektor gesucht wird. Der Inhalt des Bootsektors wird in den Speicher geladen und ausgeführt. Der Code im Bootsektor enthält weitere Anweisungen, wie und wo die Startdateien des Betriebssystems zu laden sind."
            },
            {
                "type": "text",
                "content": "Bootsektorviren nutzen diese Vorgehensweise, um vor dem Start des eigentlichen Betriebssystems vom befallenen Rechner ausgeführt zu werden.Eine weitere Verbreitung dieser Viren erfolgt über die Infektion der Bootsektoren von Disketten, USB-Sticks usw."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Infektionsmethode"
            },
            {
                "type": "text",
                "content": "Die nebenstehende Abbildung zeigt schematisch die Festplatte eines virusfreien PCs. Der Bootsektor des Systems befindet sich auf dem ersten Sektor des Datenträgers und wird grundsätzlich vom BIOS geladen, um den Startvorgang des Betriebssystems einzuleiten."
            },
            {
                "type": "text",
                "content": "Wird dieser PC eingeschaltet, so lädt das BIOS den Bootsektorcode © und startet diesen. Der Code enthält Anweisungen und Informationen, die es erlauben, den Rest des Betriebssystems von den jeweiligen Sektoren der Festplatte zu laden."
            },
            {
                "type": "text",
                "content": "Disketten besitzen ebenfalls einen Bootsektor. Auch wenn ein Computer nicht von einer Diskette gestartet werden kann, so befindet sich im dortigen Sektor ein Miniprogramm, das eine Fehlermeldung ausgibt."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/6045112bb0c00c20f201d191"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Start des PCs nach einer Bootsektorinfektion:"
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    "Nehmen Sie an, der Benutzer dieses Computers hat eine Diskette mit einem Bootsektorvirus erhalten und Dateien von dieser Diskette kopiert. Der Rechner muss irgendwann einmal neu gestartet werden und die Diskette wurde im Laufwerk vergessen.",
                    "Nachdem der POST erfolgreich durchgeführt wurde, sucht das BIOS gemäß der eingestellten Bootreihenfolge nach startbaren Laufwerken – meist LW – C: <br/> <u>Von der noch im Laufwerk befindlichen Diskette wird der Bootsektor ausgelesen und ausgeführt. <br/> In diesem Fall wird der Virus aktiv.</u>"
                ]
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/6045118db0c00c20f201d193"
            },
            {
                "type": "list",
                "content": "Virus infizierte HD",
                "list": [
                    "Die <u>Infektionsroutine</u> des Virus <u>sucht</u> nun <u>andere installierte Datenträger</u> und erkennt das C-Laufwerk.",
                    "<u>Zur Infektion</u> des Laufwerks <u>erstellt</u> der Virus <u>zuerst eine Kopie</u> des originalen Bootsektors (1). Hierzu wird meist eine im Virus fest programmierte Sektoradresse als Speicher-Ort für die Backup-Kopie gewählt.",
                    "Anschließend <u>schreibt der Virus sich selbst an die Stelle des Bootsektors</u> (2). Um den erfolgreichen Infektionsvorgang zu vertuschen, wäre es jetzt für den Virus möglich, eine Fehlermeldung auf dem Bildschirm auszugeben, die besagt, dass eine nicht bootfähige Diskette im Laufwerk liegt. Der Benutzer wird sich an <u>die Diskette im Laufwerk erinnern</u>, diese entfernen und den <u>Rechner neu starten</u>.",
                    "Beim nächsten Neustart ohne eingelegte Diskette liest das BIOS den Virus-Sektor und startet diesen. Wiederum würde nach infizierbaren Disketten oder Festplatten gesucht, mit der Ausnahme, dass der Virus nun weiß, dass er von einer bootfähigen Festplatte gestartet wurde. Da die Adresse für das Backup des Originalsektors bekannt ist, verzweigt der Virus nach Abarbeitung seines Codes an die Adresse des originalen Bootsektors, und der PC startet wie gewöhnlich."
                ]
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Speicherresistente Bootsektorviren"
            },
            {
                "type": "text",
                "content": "Speicherresident ist ein Virus dann, wenn er im Speicher verbleibt und weiterhin aktiv ist – unabhängig davon ob die Ursache des „Virenstartes“ beendet wurde oder nicht. Viren dieser Art werden manchmal auch TSR-Viren genannt („Terminate and Stay Resident“)."
            },
            {
                "type": "subtitle",
                "content": "Arbeitsweise Speicherresidenter Bootsektorviren:"
            },
            {
                "type": "list",
                "content": "Ein speicherresidenter Bootsektorvirus würde bei seiner Ausführung zuerst über eine BIOS-Funktion den Wert für den maximal verfügbaren Speicher um den Betrag seiner eigenen Größe reduzieren.",
                "list": [
                    "Ein Virus ist z.B. 1 kB groß, so wird ein für die DOS-Architektur geschriebener Bootsektorvirus den Wert für verfügbaren Speicher von 640 kB auf 639 kB reduzieren. Anschließend kopiert sich der Virus in den als „nicht existent“ markierten Arbeitsspeicher.",
                    "<b>Damit der Virus auch wirklich aktiv bleiben kann, wird die Software-IRQ-Tabelle des PCs manipuliert.</b> Die Software-IRQs stellen grundlegende PC-Funktionalitäten zur Verfügung, auf denen Programmierer auch ohne Vorhandensein eines Betriebssystems aufbauen können. In der IRQ-Tabelle ist zu einer bestimmten IRQ-Nummer (entspricht einer Funktion) die Speicheradresse abgelegt, an der die entsprechende Funktion aufgerufen werden kann. <b>Der Virus liest einen Wert für einen gewünschten IRQ aus</b> (z. B. den IRQ für Datenträgerzugriffe) und <b>schreibt seine eigene Adresse im Speicher in diese Tabelle. Die ursprüngliche IRQ-Adresse wird im Virus gespeichert.</b>",
                    "Anschließend kann sich diese Instanz des Virus beenden; seine gerade angelegte Kopie bleibt im Speicher aktiv und wird von allen anderen Programmen unabsichtlich immer dann aufgerufen, wenn sie die entsprechende IRQ-Funktion benutzen. Der residente Virus hat dann bei seiner Ausführung Gelegenheit, weitere Ziele zu infizieren, Schadensfunktionen auszuführen oder den Funktionsaufruf an die Originalfunktion weiterzuleiten.Im letzteren Fall würde die Anwesenheit eines Virus nicht weiter auffallen, da der PC normal zu arbeiten scheint."
                ]
            },
            {
                "type": "subtitle",
                "content": "Programmierfehler in Bootsektorviren:"
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    "Nicht jeder Bootsektorvirus, implementiert Schadensroutine.",
                    "Oft führen Programmierfehler oder Designfehler in diesen Viren bei der Infektion eines Systems zu empfindlichen Datenverlusten.",
                    "Auch der „gut gemeinte“ Scherzvirus kann auf Grund eines Programmierfehlers oder einer Inkompatibilität nicht selten zu empfindlichen Datenverlusten führen.",
                    {
                        "content": "Beispiel:",
                        "sublist": [
                            "Ist der vom Virus für das Backup des Originalsektors verwendete Platz schon belegt, so werden diese Daten überschrieben und sind somit verloren.",
                            "Drastischer sind die Folgen einer Doppelinfektion mit zwei verschiedenen Viren, bei denen einer nur eine Variante des anderen ist."
                        ]
                    }
                ]
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60451274b0c00c20f201d195"
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    "Wird das mit Virus A bereits infizierte System zusätzlich noch von Virus B befallen und hat der Programmierer der Variante B diesen Sonderfall nicht berücksichtigt, so wird Virus B den Inhalt des Bootsektors von seinem gewohnten Platz an die Stelle des Backup-Platzes kopieren. In diesem Fall befindet sich aber nicht der Original-Bootsektor, sondern Virus A im betreffenden Sektor.",
                    "Der an der Backup-Stelle befindliche originale Bootsektor wird hierbei durch Virus A überschrieben. Wird dieses System nun gestartet, so verzweigt Virus B, der zuerst gestartet wird, auf Virus A (1).",
                    "Dieser wiederum würde nach seinem Programmablauf den eigentlichen Bootsektor aufrufen, der sich an der Backup-Adresse befindet. In diesem Fall ruft Virus A sich in einer Endlosschleife selbst immer wieder auf, da er selbst an dieser Adresse sitzt (2). Das System kann ohne Eingriff von außen nicht mehr starten."
                ]
            }
        ]
    },
    {
        "url": "e_technik/viren_und_malware_2",
        "title": "Viren und Malware (2) (ENTWURF)",
        "description": "Mitschrift vom 12.02.2021",
        "subject": "lf-7-2",
        "type": "article",
        "lessonDate": "2021-02-12",
        "lastUpdate": "2021-02-26",
        "schoolWeek": "21",
        "elements": [
            {
                "type": "title",
                "content": "LF-7-2"
            },
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
        "url": "e_technik/serverlizenzen_und_lizenzstrukturen_1",
        "title": "Aufgabe - Serverlizenzen und Lizenzstrukturen",
        "description": "Mitschrift vom 02.03.2021",
        "subject": "lf-7-2",
        "type": "tasks",
        "lessonDate": "2021-03-02",
        "lastUpdate": "2021-03-03",
        "schoolWeek": "22",
        "elements": [
            {
                "type": "title",
                "content": "LF-7-2"
            },
            {
                "type": "title",
                "content": "Aufgaben"
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    {
                        "content": "Erarbeiten Sie sich die Lizenz-Strukturen der Windows Betriebssysteme für ...",
                        "sublist": [
                            "1.1 Clients",
                            "1.2 Server",
                            "1.3 Welche Dienste können von den Servern angeboten werden",
                            "1.4 Untersuchen Sie äquivalent das Linux Betriebssystem <br/> Bei Microsoft können Sie sich die aktuellen Informationen holen, z.B. für den Standard.-, Datacenterserver, für User Kerne usw. <br/><br/> Produktbestimmungen für Microsoft-Volumenlizenzierung (Deutsch, Juni 2019 <br/><br/> Lizenzen waren schon Prüfungsrelevant! Ich persönlich finde es nur ziemlich \"belastend\", da MS seine Rahmenbedingungen gelegentlich verändert. z. B. von der Kauflizenz zur monatlichen Liasinlizenz inklusive der Veränderung der Lizenzbedingungen. Ich hoffe, dass Sie bis zu Ihrer Prüfung keine Veränderung mehr bekommen und so zumindest den Überblick behalten."
                        ]
                    },
                    {
                        "content": "Für mich ist auch der Vergleich mit Linux und Mac wichtig. Sie sollten immer Argumente für den Kunden und seine Aufgaben haben. Als Facharbeiter haben Sie immer eine Beratungspflicht.",
                        "sublist": [
                            "2.1 Erarbeiten Sie sich das Linux – Lizenzmodell",
                            "2.2 Erarbeiten Sie sich das MAC-OS – Lizenzmodell"
                        ]
                    },
                    "Vergleichen Sie die Lizenzmodelle miteinander. Stellen Sie die Vor- und Nachteile gegenüber. "
                ]
            },
            {
                "type": "text",
                "content": "<a href='http://159.65.105.150/lf-7/e_technik/serverlizenzen_und_lizenzstrukturen_2'>Aufgabe gelöst? Zur Musterlösung</a>"
            }
        ]
    },
    {
        "url": "e_technik/serverlizenzen_und_lizenzstrukturen_2",
        "title": "Serverlizenzen und Lizenzstrukturen",
        "description": "Mitschrift vom 05.03.2021",
        "subject": "lf-7-2",
        "type": "article",
        "lessonDate": "2021-03-05",
        "lastUpdate": "2021-03-02",
        "schoolWeek": "22",
        "elements": [
            {
                "type": "title",
                "content": "LF-7-2"
            },
            {
                "type": "title",
                "content": "Aufgaben"
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    {
                        "content": "Erarbeiten Sie sich die Lizenz-Strukturen der Windows Betriebssysteme für ...",
                        "sublist": [
                            "1.1 Clients",
                            "1.2 Server",
                            "1.3 Welche Dienste können von den Servern angeboten werden",
                            "1.4 Untersuchen Sie äquivalent das Linux Betriebssystem <br/> Bei Microsoft können Sie sich die aktuellen Informationen holen, z.B. für den Standard.-, Datacenterserver, für User Kerne usw. <br/><br/> Produktbestimmungen für Microsoft-Volumenlizenzierung (Deutsch, Juni 2019 <br/><br/> Lizenzen waren schon Prüfungsrelevant! Ich persönlich finde es nur ziemlich \"belastend\", da MS seine Rahmenbedingungen gelegentlich verändert. z. B. von der Kauflizenz zur monatlichen Liasinlizenz inklusive der Veränderung der Lizenzbedingungen. Ich hoffe, dass Sie bis zu Ihrer Prüfung keine Veränderung mehr bekommen und so zumindest den Überblick behalten."
                        ]
                    },
                    {
                        "content": "Für mich ist auch der Vergleich mit Linux und Mac wichtig. Sie sollten immer Argumente für den Kunden und seine Aufgaben haben. Als Facharbeiter haben Sie immer eine Beratungspflicht.",
                        "sublist": [
                            "2.1 Erarbeiten Sie sich das Linux – Lizenzmodell",
                            "2.2 Erarbeiten Sie sich das MAC-OS – Lizenzmodell"
                        ]
                    },
                    "Vergleichen Sie die Lizenzmodelle miteinander. Stellen Sie die Vor- und Nachteile gegenüber. "
                ]
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "text",
                "content": "Es gibt eine ganze Reihe an unterschiedlichen Arten von Softwarelizenzen. Bei einer Softwarelizenz handelt es sich um eine Vereinbarung zwischen Nutzer und Softwarehersteller. Durch die Lizenz werden die Nutzungsbedingungen bestimmt und der Nutzer hat die Berechtigung die Software zu verwenden."
            },
            {
                "type": "list",
                "content": "Softwarelizenzen lassen sich in verschiedene Kategorien unterteilen …",
                "list": [
                    {
                        "content": "Freeware",
                        "sublist": [
                            "darf kostenlos genutzt werden"
                        ]
                    },
                    {
                        "content": "Public Domain („geemeinfrei“)",
                        "sublist": [
                            "darf kostenlos genutzt werden, zusätzlich verzichtet der Hersteller auf sein Urheberrecht (in Deutschland ist es nicht möglich aufs Urheberrecht zu verzichten)"
                        ]
                    },
                    {
                        "content": "Open Source",
                        "sublist": [
                            "bedeutet, dass der Quellcode frei zugänglich ist. Die Nutzung muss deswegen aber nicht automatisch kostenlos sein"
                        ]
                    },
                    {
                        "content": "Freie Softwarelizenz",
                        "sublist": [
                            "heißt, dass die Nutzung kostenfrei. Anpassungen des Quellcodes sind problemlos möglich. Der Urheber ist bei dieser Lizenzform zu einer Offenlegung des Codes verpflichtet"
                        ]
                    },
                    {
                        "content": "Kommerzielle Software",
                        "sublist": [
                            "muss käuflich erworben werden, dazu zählen auch „kostenfreie Käufe“, wenn der Nutzer beispielsweise kostenlos eine Lizenz vom Hersteller erhält zu Promotionzwecken"
                        ]
                    },
                    {
                        "content": "Proprietäre Lizenz",
                        "sublist": [
                            "gibt dem Nutzer das Recht, mehrere Kopien der Anwendung zu nutzen"
                        ]
                    },
                    {
                        "content": "Arbeitsstation Lizenz",
                        "sublist": [
                            "gestattet die Nutzung nur auf einem dedizierten Computer"
                        ]
                    },
                    {
                        "content": "Copyleft-Lizenz/GNU General Public Lizenz",
                        "sublist": [
                            "gehört in die Kategorie Open Source. Quellcode darf verändert werden, muss aber laut GNU GPL für jedermann zugänglich gemacht werden"
                        ]
                    },
                    {
                        "content": "Current Use Lizenz",
                        "sublist": [
                            "erlaubt dem Nutzer, die Software auf mehreren Geräten gleichzeitig zu nutzen. Die maximale Nutzungsanzahl wird über die Nutzungsbedingungen vorgegeben"
                        ]
                    },
                    {
                        "content": "Standardlizenz (Concurrent Use Lizenz)",
                        "sublist": [
                            "erlaubt dem Nutzer, die software auf mehreren Geräten zu installieren aber pro Lizenz nur eine aktive Nutzung gleichzeitig"
                        ]
                    }
                ]
            },
            {
                "type": "subtitle",
                "content": "Lizenzstrukturen der Windows Betriebssysteme"
            },
            {
                "type": "text",
                "content": "Mit Windows 10 hat sich die Art und Weise der Lizenzierung geändert, nun ist das Betriebssystem als „Windows-as-a-Service“ zu erwerben. Das bedeutet auch, dass es in Zukunft keine neuen Hauptversionen von Windows geben wird. Nach wie vor gibt es verschiedene Editionen und Leistungsumfänge. Es gibt beispielsweise Betriebssysteme die für <b>Clients</b> (Benutzer) oder für <b>Server</b> (Website-Hosting, Netzwerke, ...) ausgerichtet sind."
            },
            {
                "type": "subtitle",
                "content": "Lizenzstrukturen der Windows Betriebssysteme"
            },
            {
                "type": "text",
                "content": "Mit Windows 10 hat sich die Art und Weise der Lizenzierung geändert, nun ist das Betriebssystem als „Windows-as-a-Service“ zu erwerben. Das bedeutet auch, dass es in Zukunft keine neuen Hauptversionen von Windows geben wird. Nach wie vor gibt es verschiedene Editionen und Leistungsumfänge. Es gibt beispielsweise Betriebssysteme die für <b>Clients</b> (Benutzer) oder für <b>Server</b> (Website-Hosting, Netzwerke, ...) ausgerichtet sind."
            },
            {
                "type": "subtitle",
                "content": "Device CAL"
            },
            {
                "type": "text",
                "content": "Die <u>Device CAL</u> Lizenz erlaubt einem Gerät den Zugriff auf die Serversoftware. Das Gerät kann von mehreren Nutzern verwendet werden. Diese Art der Lizenzierung ist sinnvoll, wenn jeder Mitarbeiter nur an seinem eigenen PC arbeitet oder sogar PC’s von Mitarbeitern gemeinsam benutzt werden."
            },
            {
                "type": "subtitle",
                "content": "User CAL"
            },
            {
                "type": "text",
                "content": "Mit der User-Lizenz kann ein Benutzer von verschiedenen Geräten aus auf die Server-Software zugreifen. Gut geeignet wenn Mitarbeiter mit mehreren Geräten arbeiten."
            },
            {
                "type": "subtitle",
                "content": "Server CAL / Windows CAL"
            },
            {
                "type": "text",
                "content": "Wie oben bereits erklärt, werden Zugriffslizenzen benötigt um auf Microsoft Server Software zuzugreifen. Die Kosten für Zugriffslizenzen übersteigen oft bei weitem die Ausgaben für <u>Server-Lizenzen</u>. Deshalb gibt es in diesem Bereich oft ein erhebliches Sparpotential."
            },
            {
                "type": "list",
                "content": "Beispiele von verschiedenen Zugriffslizenz-Modellen:",
                "list": [
                    "Device CALs (gerätegebundene Zugriffslizenzen). Beliebig viele Nutzer",
                    "User CALs (personengebundene Zugriffslizenzen). Mehrere Geräte",
                    "Core CALs sind CAL-Bundles. Zugriffsrecht auf mehrere Server",
                    "Windows Server CAL",
                    "Office SharePoint Server CAL",
                    "SQL Server CAL",
                    "System Center Configuration Manager CAL"
                ]
            },
            {
                "type": "subtitle",
                "content": "Client Access License"
            },
            {
                "type": "text",
                "content": "Eine CAL, zu deutsch (Client-)Zugriffslizenz, ist eine besondere Form von Lizenz, die hauptsächlich bei Microsoft Produkten verbreitet ist. Dieses Modell erfordert drei Lizenzen – für den Client, für den Server und <u>Zugriffslizenzen</u>, durch die der Server autorisiert wird Clientverbindungen anzunehmen."
            },
            {
                "type": "hint",
                "content": "„A CAL is not a software product; rather, it is a license that gives a user the right to access the services of the server.“ Microsoft, 2021<sup>1</sup>"
            },
            {
                "type": "list",
                "content": "Es gibt hierbei zwei Lizenzierungsmöglichkeiten:",
                "list": [
                    "Lizenz pro Gerät (Client) → beliebig viele Nutzer pro Gerät",
                    "Lizenz pro Nutzer (User) → beliebig viele Geräte pro Nutzer"
                ]
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Linux Client- und Server-Lizenzen"
            },
            {
                "type": "text",
                "content": "Im Vergleich ..."
            },
            {
                "type": "subtitle",
                "content": "Linux und Windows im direkten Vergleich"
            },
            {
                "type": "table",
                "content": "test",
                "rows": [
                    {
                        "type": "header",
                        "columns": [
                            { "align": "left", "content": "" },
                            { "align": "left", "content": "Windows" },
                            { "align": "left", "content": "Linux" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Kosten" },
                            { "align": "left", "content": "Lizenzkosten pro Benutzer" },
                            { "align": "left", "content": "Lizenzkostenfrei; je nach Distribution Kosten für Support" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Standardbedienung" },
                            { "align": "left", "content": "Grafische Benutzeroberfläche" },
                            { "align": "left", "content": "Kommandozeile" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Remote-Zugriff" },
                            { "align": "left", "content": "Terminal-Server/Client muss installiert und konfiguriert werden" },
                            { "align": "left", "content": "Integrierte Lösung (Terminal und Shell)" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Software & Features" },
                            { "align": "left", "content": "Unterstützt gängige Programme; Nutzung von Microsoft-Anwendungen möglich" },
                            { "align": "left", "content": "Nicht für alle Programme existieren Portierungen; großes Arsenal an mitgelieferten Anwendungen" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Hardware-Unterstützung" },
                            { "align": "left", "content": "Neue Hardware standardmäßig auf Windows-Systeme ausgerichtet" },
                            { "align": "left", "content": "Hardware-Treiber für Linux-Distributionen in der Regel erst etwas später nutzbar" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Support" },
                            { "align": "left", "content": "Hohes Nutzerfehlerpotenzial; integriertes Interface als potenzieller Angriffspunkt" },
                            { "align": "left", "content": "Gewöhnliche Nutzer haben keinen Zugriff auf elementare Systemeinstellungen; bekannte Sicherheitslücken werden schnell geschlossen" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Dokumentation" },
                            { "align": "left", "content": "System und Systemanwendungen ausgezeichnet dokumentiert; API-Komponenten und Datenformate eher weniger" },
                            { "align": "left", "content": "Kompletter Quellcode von System, API, Bibliotheken und Anwendungen offengelegt; Man- und Info-Pages (größtenteils englischsprachig)" }
                        ]
                    }
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
                    "<sup>1</sup> Client Access Licenses and Management Licenses, 05.03.2021 17:23 | <a href='https://www.microsoft.com/en-us/licensing/product-licensing/client-access-license'>https://www.microsoft.com/en-us/licensing/product-licensing/client-access-license</a>",
                    "<a href='http://www.informatik.uni-oldenburg.de/~iug09/igr/koenigssee.informatik.uni-oldenburg.de_1211/index.php/software/23-lizenzen/78-formen-von-softwarelizenzen.html'>http://www.informatik.uni-oldenburg.de/~iug09/igr/koenigssee.informatik.uni-oldenburg.de_1211/index.php/software/23-lizenzen/78-formen-von-softwarelizenzen.html</a>",
                    "<a href='https://www.bsh-ag.de/it-wissensdatenbank/lizenz/'>https://www.bsh-ag.de/it-wissensdatenbank/lizenz/</a>",
                    "<a href='https://de.wikipedia.org/wiki/Client_Access_License'>https://de.wikipedia.org/wiki/Client_Access_License</a>",
                    "<a href='https://www.software-express.de/lizenzierung/server-cal-windows-cal-microsoft-cal-core-cal/'>https://www.software-express.de/lizenzierung/server-cal-windows-cal-microsoft-cal-core-cal/</a>"
                ]
            }
        ]
    },
    {
        "url": "netze_und_dienste/netzwerkgeraete",
        "_id": "605c866f23779759b9bb2902",
        "topicId": "6056856207c61731b8d162ed",
        "title": "Netzwerkgeräte",
        "description": "Mitschrift vom 23.03.2021",
        "subject": "lf-7-2",
        "type": "article",
        "lessonDate": "2021-03-23",
        "lastUpdate": "2021-03-28",
        "schoolWeek": "23",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "text",
                "content": "In einem Netzwerk gibt es meist mehrere Netzwerkgeräte, die auf mehreren Ebenen eine Rolle spielen, wie Hubs, Switches und Router. Oft sind diese 3 Komponenten in einem einzigen Gerät integriert."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Hub"
            },
            {
                "type": "text",
                "content": "Ein Hub wird häufig zur Verbindung von Segmenten eines LAN (Local Area Network) verwendet. Ein Hub enthält mehrere Ports. Wenn ein Paket an einem Port eintrifft, wird es auf die anderen Ports kopiert, so dass alle Segmente des LANs alle Pakete sehen können. Ein Hub fungiert als gemeinsamer Verbindungspunkt für Geräte in einem Netzwerk."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/605fd88e59bf2574740034f4"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Switch"
            },
            {
                "type": "text",
                "content": "Ein Switch arbeitet auf der Datenverbindungsschicht (Layer 2) und manchmal auf der Netzwerkschicht (Layer 3) des OSI (Open Systems Interconnection)-Referenzmodells und unterstützt daher jedes beliebige Paketprotokoll. LANs, die zur Verbindung von Segmenten Switches verwenden, werden als geswitchte LANs oder, im Falle von Ethernet-Netzwerken, als geswitchte Ethernet-LANs bezeichnet. In Netzwerken ist der Switch das Gerät, das Pakete zwischen LAN-Segmenten filtert und weiterleitet."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/605fd89b59bf2574740034f6"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Router"
            },
            {
                "type": "text",
                "content": "Ein Router ist mit mindestens zwei Netzwerken verbunden, in der Regel zwei LANs oder WANs (Wide Area Networks) oder ein LAN und sein ISP (Internet Service Provider) Netzwerk. Der Router befindet sich in der Regel an Gateways, den Stellen, an denen zwei oder mehr Netzwerke miteinander verbunden sind. Anhand von Headern und Weiterleitungstabellen bestimmt der Router den besten Weg zur Weiterleitung der Pakete. Darüber hinaus verwendet der Router Protokolle wie ICMP (Internet Control Message Protocol), um miteinander zu kommunizieren, und konfiguriert die beste Route zwischen zwei beliebigen Hosts. Mit einem Wort: Der Router leitet Datenpakete weiter."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "list",
                "content": "Quellen:",
                "list": [
                    "<a href='https://community.fs.com/de/blog/whats-the-difference-hub-vs-switch-vs-router.html'>Was ist der Unterschied zwischen Hub, Switch und Router? | https://community.fs.com/de/blog/whats-the-difference-hub-vs-switch-vs-router.html</a>"
                ]
            }
        ]
    },
];
