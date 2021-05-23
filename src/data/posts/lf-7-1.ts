import {Post} from '../../app/models/post';

export const LF7_1_POSTS: Post[] = [
    {
        "url": "e_technik/einfuehrung",
        "title": "Einführung",
        "description": "Mitschrift vom 10.08.2020",
        "subject": "lf-7-1",
        "type": "article",
        "lessonDate": "2020-08-10",
        "lastUpdate": "2020-10-31",
        "schoolWeek": "14",
        "elements": [
            {
                "type": "title",
                "content": "Themen"
            },
            {
                "type": "list",
                "content": "<span class='ddu-list-number'>1</span> Teil",
                "list": [
                    "Wiederholung der Grundlagen | Gemischte Schaltungen | Spannungsteiler",
                    "Wiederholung Bauteile im Gleichstromkreis | Wechselstromkreis",
                    "Grundlagen der Wechselstromtechnik | Sinusgrößen"
                ]
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "list",
                "content": "<span class='ddu-list-number'>2</span> Teil",
                "list": [
                    "Grundbegriffe der Übertragungstechnik",
                    "Übertragungstechnik | Pegel | Wellenwiderstand",
                    "Modulation | analog | digital"
                ]
            }
        ]
    },
    {
        "url": "e_technik/schaltungen_widerstaende_berechnen",
        "title": "Schaltungen - Widerstände berechnen",
        "description": "Mitschrift vom 01.09.2020",
        "subject": "lf-7-1",
        "type": "tasks",
        "lessonDate": "2020-09-01",
        "lastUpdate": "2020-09-26",
        "schoolWeek": "15",
        "elements": [
            {
                "type": "title",
                "content": "Reihenschaltung"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f6f676759df30501b5d0d1b"
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    "<b>Strom I überall gleich</b>",
                    "R<sub>ges</sub> = R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub>",
                    "Addition aller Widerstände ergibt Gesamtwiderstand",
                    "Umso kleiner der Widerstand desto größer der Strom",
                    "U = U<sub>1</sub> + U<sub>2</sub> + U<sub>3</sub>",
                    "Am größten fällt die größte Spannung ab",
                    "Spannungen verhalten sich wie die dazugehörigen Widerstände"
                ]
            },
            {
                "type": "title",
                "content": "Parallelschaltung"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f6f676e59df30501b5d0d1d"
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    "U = U<sub>1</sub> = U<sub>2</sub> = U<sub>3</sub>",
                    "<b>Spannung U überall gleich</b>",
                    "I = I<sub>1</sub> + I<sub>2</sub> + I<sub>3</sub>",
                    "I nicht überall gleich",
                    "1 / R<sub>ges</sub> = (1 / R<sub>1</sub>) + (1 / R<sub>2</sub>) + (1 / R<sub>3</sub>)",
                    "Geringster Widerstand / kleinster Widerstand hat den größten Strom",
                    "Gesamtwiderstand ist kleiner als der kleinste Teilwiderstand"
                ]
            },
            {
                "type": "hint",
                "content": "Es gibt auch gemischte Schaltungen, diese werden Netzwerke genannt."
            },
            {
                "type": "text",
                "content": "Taschenrechner Funktion: x<sup>-1</sup> Taste → 1000<sub>-1</sub> + 100<sub>-1</sub> + 10<sub>-1</sub> = x<sub>-1</sub> = <u>9,009 Ω</u>"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Ohmsches Gesetz"
            },
            {
                "type": "text",
                "content": "U = R X I <br/> R = U / I <br/> I = U / R"
            },
            {
                "type": "subtitle",
                "content": "Aufgabe - Komplexe Schaltungen umstellen"
            },
            {
                "type": "text",
                "content": "Bei komplexeren Schaltungen können diese auch in mehrere Teilschaltungen aufgeteilt werden, dies macht zum besseren Verständnis der ganzen Schaltung."
            },
            {
                "type": "subtitle",
                "content": "Umstellung 1"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f6f9cf559df30501b5d0d61"
            },
            {
                "type": "subtitle",
                "content": "Umstellung 2"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f6f9cfd59df30501b5d0d63"
            },
            {
                "type": "text",
                "content": "12 und 8 in Reihe <br/> 12 und 8 zu 30 parallel <br/> 12 und 8 und 30 zu 5 in Reihe"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Aufgabe 2 - Widerstand & Strom berechnen"
            },
            {
                "type": "text",
                "content": "Wie groß ist der Gesamtwiderstand und Gesamtstrom?"
            },
            {
                "type": "list",
                "content": "",
                "ordered": true,
                "list": [
                    "12 + 8 = 20 Ω",
                    {
                        "content": "20<sub>-1</sub> + 30<sub>-1</sub> = 0,0833 Ω",
                        "sublist": [
                            "Ergebnis<sub>-1</sub> = 12 Ω"
                        ]
                    },
                    "12 Ω + 5 = 17 Ω",
                    {
                        "content": "17<sub>-1</sub> + 20<sub>-1</sub> = 0,10 Ω",
                        "sublist": [
                            "Ergebnis Kehrwert nehmen = 9,189 Ω"
                        ]
                    },
                    "9,189 Ω + 14 = 23,1891 Ω"
                ]
            },
            {
                "type": "text",
                "content": "I = U / R<sub>ges</sub> = 24 V / 23,19 Ω = <u>1,03 A</u>"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Aufgabe 3 - ?"
            },
            {
                "type": "text",
                "content": "14 Ω = R x I = 1,03 x 14 = <u>14,42 V</u>"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Aufgabe 4 - Widerstand berechnen & Schaltung umstellen"
            },
            {
                "type": "text",
                "content": "Wie groß ist der Gesamtwiderstand?"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f6f9d0959df30501b5d0d65"
            },
            {
                "type": "text",
                "content": "R<sub>1</sub> = 80 Ω <br/> R<sub>2</sub> = 60 Ω <br/> R<sub>3</sub> = 40 Ω <br/> R<sub>4</sub> = 120 Ω <br/> R<sub>5</sub> = 120 Ω <br/> R<sub>6</sub> = 160 Ω <br/> R<sub>7</sub> = 180 Ω <br/> R<sub>8</sub> = 200 Ω"
            },
            {
                "type": "text",
                "content": "Fehler: Erst R4 dann R3 dazurechnen, Rechnung korrigieren!"
            },
            {
                "type": "list",
                "content": "",
                "ordered": true,
                "list": [
                    "R<sub>6</sub> + R<sub>8</sub> = 160 + 200 = 360 Ω",
                    "(R<sub>6</sub> + R<sub>8</sub>) + R<sub>5</sub> = 360<sub>-1</sub> + 120<sub>-1</sub> <br/> = 0,011<sub>-1</sub> <br/> = 90 Ω",
                    "(R<sub>6</sub> + R<sub>8</sub> + R<sub>5</sub>) + R<sub>7</sub> = 90<sub>-1</sub> + 180<sub>-1</sub> <br/> = 0,016<sub>-1</sub> <br/> = 60 Ω",
                    "(R<sub>6</sub> + R<sub>8</sub> + R<sub>5</sub> + R<sub>7</sub>) + R<sub>3</sub> = 60<sub>-1</sub> + 40<sub>-1</sub> <br/> = 0,042<sub>-1</sub> <br/> = 24 Ω",
                    "(R<sub>6</sub> + R<sub>8</sub> + R<sub>5</sub> + R<sub>7</sub> + R<sub>3</sub>) + R<sub>4</sub> = 24 + 120 <br/> = 144 Ω",
                    "(R<sub>6</sub> + R<sub>8</sub> + R<sub>5</sub> + R<sub>7</sub> + R<sub>3</sub> + R<sub>4</sub>) + R<sub>2</sub> + R<sub>1</sub> = 144 + 60 + 80 <br/> = <u>284 Ω</u>"
                ]
            },
            {
                "type": "subtitle",
                "content": "1."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f6f9d1359df30501b5d0d67"
            },
            {
                "type": "subtitle",
                "content": "2."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f6f9d1959df30501b5d0d69"
            },
            {
                "type": "text",
                "content": "I3 = U3 / R3 = 20,82 / 40 = <u>0,52 A</u>"
            },
            {
                "type": "subtitle",
                "content": "3."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f6f9d2159df30501b5d0d6b"
            },
            {
                "type": "text",
                "content": "U<sub>1/2</sub> = I x R<sub>ges</sub> = 89,18 V"
            },
            {
                "type": "text",
                "content": "U3 = U<sub>ges</sub> - U<sub>1/2</sub> = 20,82 V"
            },
            {
                "type": "subtitle",
                "content": "4."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f6f9d2759df30501b5d0d6d"
            },
            {
                "type": "text",
                "content": "I = U / R<sub>ges</sub> = <u>0,64 A</u>"
            },
            {
                "type": "subtitle",
                "content": "5."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f6f9d2e59df30501b5d0d6f"
            },
            {
                "type": "text",
                "content": "R<sub>ges</sub> = 172,73 Ω"
            },
            {
                "type": "text",
                "content": "I<sub>pu</sub> = I<sub>ges</sub> - I<sub>3</sub> = 0,12 A <br/> U<sub>p</sub> = U<sub>5</sub> = I<sub>pu</sub> x R<sub>p</sub> = 7,2 V"
            }
        ]
    },
    {
        "url": "e_technik/bauteile_im_wechselstromkreis",
        "title": "Bauteile im Wechselstromkreis",
        "description": "Mitschrift vom 04.09.2020",
        "subject": "lf-7-1",
        "type": "article",
        "lessonDate": "2020-09-04",
        "lastUpdate": "2020-10-03",
        "schoolWeek": "15",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "text",
                "content": "Wechselströme haben viele Vorteile gegenüber Gleichströmen und sind heutzutage die meist genutzte Form der Energieversorgung. Der größte Vorteil ist, dass man das Spannungs- und Stromniveau mit Hilfe von Transformatoren anpassen kann bei nur geringen Leistungsverlusten. Im Stromkreis mit Wechselströmen verhalten sich elektronische Bauteile (Spule, Kondensator, ...) anders, als im Stromkreis mit Gleichströmen."
            },
            {
                "type": "text",
                "content": "Für die Berechnung von Leistungen müssen Effektivwerte verwendet werden, diese lassen sich aus der Leistung bestimmen bzw. herleiten. Effektivwerte sind die Werte, die die gleiche Leistung lieferen wie in einem Gleichstrom-Kreis unter den gleichen Bedingungen."
            },
            {
                "type": "text",
                "content": "Der Effektivwert einer Wechselspannung gibt die zeitlich konstante Spannung an und der Effektivwert eines Wechselstroms gibt die zeitlich konstante Stromstärke an."
            },
            {
                "type": "text",
                "content": "Im Gleichstrom-Kreis gilt Leistung P = U x I. <br/> Im Wechselstromkreis ist die Leistung P durch das Produkt aus den Mittelwerten Strom und Spannung bestimmt."
            },
            {
                "type": "text",
                "content": "Effektivwerte für Wechselspannung und Wechselstrom berechnen: <br/> Spannung U<sub>Effektivwert</sub> = U<sub>omega</sub> : Wurzel aus 2 <br/> Strom I<sub>Effektivwert</sub> = U<sub>omega</sub> : Wurzel aus 2"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Widerstand (Ohmscher) R [Ω]"
            },
            {
                "type": "text",
                "content": "In einem Gleichstrom-Kreis haben Spulen nur einen Ohmschen Widerstand, während sie im Wechselstrom-Kreislauf einen sogenannten Wechselstromwiderstand aufweisen. Der Grund dafür sind Spannungsabfälle, da es bei einer Spule zur Selbstinduktion kommt."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f675e8b8dcdb242a7e7c63e"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Phasenverschiebung"
            },
            {
                "type": "text",
                "content": "Verringert die Leistung, durch die Verzögerung des Aufbaus der Induktivität erfolgt eine Phasenverschiebung."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f675e958dcdb242a7e7c640"
            },
            {
                "type": "hint",
                "content": "Merksatz: Bei Induktivitäten Ströme sich verspäten!"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Spule (Induktivität) L [H]"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f675ebe8dcdb242a7e7c642"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Beispiel: Lampe"
            },
            {
                "type": "text",
                "content": "Lampe geht verzögert an und aus."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f675ec78dcdb242a7e7c644"
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    "Erzeugt Magnetfeld",
                    "Strom kann nicht sofort durchfließen, Verzögerung durch Induktionswiderstand",
                    "Beim Abschalten ist auch das Ausschalten verzögert"
                ]
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Kondensator (Kapazität) C [F]"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f675eda8dcdb242a7e7c646"
            },
            {
                "type": "text",
                "content": "Blindleisstung + Wirkleistung = Scheinleistung"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f675ee18dcdb242a7e7c648"
            }
        ]
    },
    {
        "url": "e_technik/sinus_wechselspannung",
        "title": "Sinus-Wechselspannung",
        "description": "Mitschrift vom 04.09.2020",
        "subject": "lf-7-1",
        "type": "article",
        "lessonDate": "2020-09-04",
        "lastUpdate": "2020-09-20",
        "schoolWeek": "15",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "text",
                "content": "Periodendauer T <br/> T = 1 : f"
            },
            {
                "type": "text",
                "content": "Läuft gegen den Uhrzeigersinn und in 90°-Schritten."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f6780e28dcdb242a7e7c64c"
            },
            {
                "type": "list",
                "content": "In der Elektrotechnik gilt ...",
                "list": [
                    "kleines u = Momentanwert",
                    "großes U = Effektivwert",
                    "kleines u<sub>s</sub> = Spitzenwert Amplitude ( u<sub>s</sub> = Wurzel aus 2 x großes U)"
                ]
            },
            {
                "type": "text",
                "content": "u<sub>90°</sub> = U<sub>s</sub> x sin(𝛼) <br/> ω = Kreisfrequenz <br/> ω = 2 x π x f"
            },
            {
                "type": "text",
                "content": "U<sub>5ms</sub> = u<sub>s</sub> x sin(ω x t) <br/> = 10V x sin(2 x π x 50Hz x 0,005s) = "
            },
            {
                "type": "hint",
                "content": "Im Taschenrechner Radiant-Modus einstellen sonst falsches Ergebnis! <br/> 2 x n x 50 x 0,005 = 1.57... <br/> 1.57... Sinus = 1 <br/> 1 x 10V = <u>10</u>"
            }
        ]
    },
    {
        "url": "e_technik/r_c_reihenschaltung",
        "title": "R-C-Reihenschaltung (ENTWURF)",
        "description": "Mitschrift vom 27.10.2020",
        "subject": "lf-7-1",
        "type": "article",
        "lessonDate": "2020-10-27",
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
        "url": "e_technik/widerstandsberechnung_1",
        "title": "Widerstandsberechnung (1) (ENTWURF)",
        "description": "Mitschrift vom 17.11.2020",
        "subject": "lf-7-1",
        "type": "tasks",
        "lessonDate": "2020-11-17",
        "lastUpdate": "2020-12-21",
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
        "url": "e_technik/widerstandsberechnung_2",
        "title": "Widerstandsberechnung (2) (ENTWURF)",
        "description": "Mitschrift vom 08.12.2020",
        "subject": "lf-7-1",
        "type": "tasks",
        "lessonDate": "2020-12-08",
        "lastUpdate": "2020-12-21",
        "schoolWeek": "19",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "text",
                "content": "R-L-C-Rechnung <br/> <a href='https://www.elektroniktutor.de/analogtechnik/zkomplex.html'>Komplexe Widerstandsberechnung von R-C-L-Kombinationen</a>"
            }
        ]
    },
    {
        "url": "e_technik/wechselstromwiderstaende_berechnen",
        "title": "Wechselstromwiderstände berechnen (ENTWURF)",
        "description": "Mitschrift vom 12.01.2021",
        "subject": "lf-7-1",
        "type": "article",
        "lessonDate": "2021-01-12",
        "lastUpdate": "2021-02-08",
        "schoolWeek": "20",
        "elements": [
            {
                "type": "title",
                "content": "LF-7-1"
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
        "url": "e_technik/grundlagen_der_uebertragungstechnik_1",
        "_id": "603eb6efb0c00c20f201d122",
        "title": "Aufgaben - Grundlagen der Übertragungstechnik",
        "description": "Mitschrift vom 02.03.2021",
        "subject": "lf-7-1",
        "type": "tasks",
        "lessonDate": "2021-03-02",
        "lastUpdate": "2021-03-19",
        "schoolWeek": "22",
        "elements": [
            {
                "type": "title",
                "content": "LF-7-1"
            },
            {
                "type": "title",
                "content": "Aufgaben"
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    "Worin besteht das Prinzip der elektrischen Nachrichten-Übertragungstechnik?",
                    "Formulieren Sie in Stichworten die Aufgaben der Nachrichtentechnik.",
                    "Welche Aufgabe hat das Signal in der Nachrichten-Übertragungstechnik?",
                    "Warum wird bei jedem Übertragungssystem ein Sender benötigt?",
                    "In welchem Verhältnis müssen Nutzsignal und Störsignal stehen, um eine möglichst hohe Qualität einer Übertragung zu bewirken? Begründen Sie Ihre Antwort!",
                    "Beschreiben Sie die wesentlichen Unterschiede zwischen den verschiedenen Übertragunsarten?"
                ]
            },
            {
                "type": "text",
                "content": "<a href='http://159.65.105.150/lf-7/e_technik/grundlagen_der_uebertragungstechnik_2'>Aufgabe gelöst? Zur Musterlösung</a>"
            }
        ]
    },
    {
        "url": "e_technik/grundlagen_der_uebertragungstechnik",
        "_id": "60428445b0c00c20f201d168",
        "title": "Grundlagen der Übertragungstechnik",
        "description": "Mitschrift vom 02.03.2021",
        "subject": "lf-7-1",
        "type": "article",
        "lessonDate": "2021-03-03",
        "lastUpdate": "2021-05-18",
        "schoolWeek": "22",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "text",
                "content": "Die Übertragung von Wirkungen mit Hilfe elektrischer, magnetischer oder optischer Größen"
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    "Beschreibung aus physikalischer und mathematischer Sicht",
                    "Begriffsbestimmungen",
                    "Abkürzungen"
                ]
            },
            {
                "type": "subtitle",
                "content": "Welche elementaren Formen der Darstellung von Nachrichten gibt es?"
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    "Ton",
                    "Bild",
                    "Text",
                    "Daten"
                ]
            },
            {
                "type": "subtitle",
                "content": "Formen der Information"
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    {
                        "content": "Geben Sie eine Darstellung für einen einfachen Fall der Zuordnung von Signal und Information aus dem Alltagsleben",
                        "sublist": [
                            "Antwort"
                        ]
                    },
                    {
                        "content": "Nennen Sie typische Störsignale, die alltäglich bei Radio und Fernsehen möglich sind",
                        "sublist": [
                            "Antwort"
                        ]
                    }
                ]
            },
            {
                "type": "subtitle",
                "content": "Kommunikation"
            },
            {
                "type": "text",
                "content": "Einseitiger oder wechselseitiger Austausch von Informationen zwischen Menschen, technischen Einrichtungen oder Menschen und technischen Einrichtungen."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Prinzip der Nachrichtenübertragung"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60a2dfa463931e24491ca436",
                "size": "s"
            },
            {
                "type": "subtitle",
                "content": "Nutzsignal und Störsignal bei der Nachrichtenübertragung"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60a2dff163931e24491ca438",
                "size": "s"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "text",
                "content": "Frage: Beschreiben Sie ein einfaches System einer Nachrichtenübertragung anhand eines Telefongespräches."
            },
            {
                "type": "text",
                "content": "Antwort ..."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Die drei Formen der Übertragung"
            },
            {
                "type": "subtitle",
                "content": "Geführte Übertragung"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60a2e09163931e24491ca43b",
                "size": "s"
            },
            {
                "type": "subtitle",
                "content": "Ungeführte Übertragung"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60a2e0a163931e24491ca43d",
                "size": "s"
            },
            {
                "type": "subtitle",
                "content": "Materielle Übertragung"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60a2e09163931e24491ca43b",
                "size": "s"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "list",
                "content": "Lösungen der Aufgaben",
                "list": [
                    {
                        "content": "Frage: <b>Worin besteht das Prinzip der elektrischen Nachrichtenübertragungstechnik?</b>",
                        "sublist": [
                            "Übertragung von Nachrichten über Entfernungen mit Hilfe elektrischer und magnetischer Größen"
                        ]
                    },
                    {
                        "content": "Frage: <b>Formulieren Sie in Stichworten die Aufgaben der Nachrichtentechnik</b>",
                        "sublist": [
                            "<u>Übertragung</u>, <u>Verarbeitung</u> und <u>Speicherung</u> von Signalen."
                        ]
                    },
                    {
                        "content": "Frage: <b>Welche Aufgabe hat das Signal in der Nachrichtenübertragungstechnik</b>",
                        "sublist": [
                            "Das Signal ist die physikalische Repräsentation der Information, welche die Nachrichten beinhaltet"
                        ]
                    },
                    {
                        "content": "Frage: <b>Warum wird bei jedem Übertragungssystem ein Sender benötigt?</b>",
                        "sublist": [
                            "Er dient zur Anpassung des Signals an die Eigenschaften des Übertragungskanals",
                            "Zur Aufnahme, Umwandlung, Modulation, Codierung und Verarbeitung"
                        ]
                    },
                    {
                        "content": "Frage: <b>In welchem Verhältnis müssen Nutzsignal und Störsignal stehen, um eine möglichst hohe Qualität einer Übertragung zu bewirken? Begründen Sie Ihre Antwort!</b>",
                        "sublist": [
                            "Das Störsignal soll gegenüber dem Nutzsignal möglichst klein sein, da nur das Nutzsignal für die Nachrichtensenke interessante Nachrichten enthält"
                        ]
                    },
                    {
                        "content": "Frage: <b>Beschreiben Sie die wesentlichen Unterschiede zwischen den verschiedenen Übertragungsarten</b>",
                        "sublist": [
                            "Geführte Übertragung",
                            "Ungeführte Übertragung",
                            "Materielle Übertragung"
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
                "content": "Grundgrößen der Übertragungstechnik"
            },
            {
                "type": "subtitle",
                "content": "Gleichspannung"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60a2e8b959a0005b1c634a98",
                "size": "s"
            },
            {
                "type": "subtitle",
                "content": "Periodischer Spannungsverlauf"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60a2e8c459a0005b1c634a9a",
                "size": "s"
            },
            {
                "type": "subtitle",
                "content": "Maximalwert und Minimalwert"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60a2ea3d59a0005b1c634a9c",
                "size": "s"
            },
            {
                "type": "subtitle",
                "content": "Sinusförmige Zeitfunktion"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60a2ea4d59a0005b1c634a9e",
                "size": "s"
            },
            {
                "type": "subtitle",
                "content": "Zusammenhang zwischen Sinus und Kosinus"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60a2eab659a0005b1c634aa0",
                "size": "s"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Beispiel"
            },
            {
                "type": "text",
                "content": "Für den dargestellten Spannungsverlauf ist der lineare Mittelwert zu ermitteln."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60a2f0ed59a0005b1c634aad",
                "size": "s"
            },
            {
                "type": "text",
                "content": "Aus der Zeichnung entnehmen wir die zu den Zeitpunkten t<sub>1</sub>...t<sub>10</sub> gehörenden Spannugnswerte u<sub>1</sub>...u<sub>10</sub> und setzen diese in folgende Gleichung ein:"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60a2ee1459a0005b1c634aa4",
                "size": "s"
            },
            {
                "type": "text",
                "content": "Der lineare Mittelwert beträgt also angenähert 1,6 V."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Beispiel Strom"
            },
            {
                "type": "subtitle",
                "content": "Stromrichtungen"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60a2ee6459a0005b1c634aa6",
                "size": "s"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Beispiel Leistung"
            },
            {
                "type": "subtitle",
                "content": "Leistung bei Kapazität"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60a2ef2d59a0005b1c634aa9",
                "size": "m"
            },
            {
                "type": "subtitle",
                "content": "Leistung bei Induktivität"
            },
            {
                "type": "text",
                "content": "Wirkleistung <i>P</i> (Einheit: W)"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60a2ef3859a0005b1c634aab",
                "size": "m"
            },
            {
                "type": "subtitle",
                "content": "Fragen zu den Grundgrößen"
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    {
                        "content": "In welcher Weise kann ein beliebiger Punkt P in einem rechtwinkligen Koordinatensystem beschrieben werden?",
                        "sublist": [
                            "..."
                        ]
                    },
                    {
                        "content": "Wie groß ist der lineare Mittelwert eines rechtförmigen Spannungsverlaufes mit Mittelwert û = 5,2 V und Mittelwert û = 5,2 V?",
                        "sublist": [
                            "..."
                        ]
                    },
                    {
                        "content": "Welche Bedeutung hat der Effektivwert der Spannung bzw. des Stromes bezogen auf die umgesetzte Leistung?",
                        "sublist": [
                            "..."
                        ]
                    },
                    {
                        "content": "Wodurch unterscheiden sich die Wirkleistung P und die Blindleistung Q?",
                        "sublist": [
                            "..."
                        ]
                    },
                    {
                        "content": "Unter welchen Umständen nimmt eine Impedanz einen reinen reelen Wert an? Welcher Phasenwinkel tritt dabei auf?",
                        "sublist": [
                            "..."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "url": "e_technik/gebundene_uebertragung_leitungsgebundene_uebertragungstechnik",
        "_id": "605855a237cdbc38e21c701c",
        "title": "Gebundene Übertragung - Leitungsgebundene Übertragungstechnik",
        "description": "Mitschrift vom 22.03.2021",
        "subject": "lf-7-1",
        "type": "article",
        "lessonDate": "2021-03-22",
        "lastUpdate": "2021-04-19",
        "schoolWeek": "23",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    "Leitungsaufbau / prinz. Unterschied?",
                    "Grundgrößen einer Leitung?",
                    "Skineffekt?",
                    "Ersatzschaltbild einer Leitung?",
                    "Bedeutung der Leitungskennwerte?",
                    "Wirkung der Leitungsgrößen?"
                ]
            },
            {
                "type": "text",
                "content": "Je nach der zu überbrückenden Entfernung und den zu übertragenden Datenmengen werden unterschiedliche Übertragungsleitungen benötigt. In VDE-Bestimmungen, IEC-Richtlinien, DIN-Normen sowie den EMV-Vorschriften innerhalb der EG werden Grenzwerte elektromagnetischer Strahlung festgelegt. Das CE-Kennzeichen ist beispielsweise ein Zeichen für die Einhaltung bestimmter Grenzwerte."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Symmetrische/Asymmetrische Leitungen"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/6058502037cdbc38e21c700a",
                "size": "m"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/6058502b37cdbc38e21c700e",
                "size": "m"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Grundgrößen einer Leitung"
            },
            {
                "type": "list",
                "content": "Der Leitungswiderstand R<sub>L</sub> ist abhängig von ...",
                "list": [
                    "Leiterlänge l",
                    "Material / Leiterwerkstoff (Leitfähigkeit) x / y",
                    "Leiterquerschnitt A"
                ]
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/605850f437cdbc38e21c7014",
                "size": "s"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Skineffekt"
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    "Der Skineffekt tritt durch Wirbelströme innerhalb des Leiters auf, welche durch hohe Frequenzen entstehen (ab 20kHz).",
                    "Dadurch löschen sich die Ströme in der Mitte des Leiters aus und drängen nach außen.",
                    {
                        "content": "Es wird somit eine geringe Fläche zur Stromübertragung nutzbar, was umgekehrt bedeutet, das der Leitungswiderstand zunimmt!",
                        "sublist": [
                            "bei der Übertragung von sehr hohen Frequenzen werden Hohlleiter verwendet"
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
                "content": "Leitungskapazität"
            },
            {
                "type": "text",
                "content": "Die Adern einer zweiadrigen Leitung bilden mit der dazwischen liegenden Isolation einen Kondensator"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/605851b537cdbc38e21c7016",
                "size": "s"
            },
            {
                "type": "text",
                "content": "Der Blindwiderstand X<sub>C</sub> wirkt quer zwischen den Leitungsadern."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/605d677a59bf25747400349a",
                "size": "m"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Leitungsinduktivität"
            },
            {
                "type": "text",
                "content": "Der durch die Leitung fließende Strom erzeugt ein magnetisches Feld, das die Leiter umgibt."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/605d687459bf25747400349c",
                "size": "m"
            },
            {
                "type": "text",
                "content": "Der Blindwiderstand X<sub>L</sub> wirkt in Längsrichtung der Leiter."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/605d68b159bf25747400349e",
                "size": "m"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Isolationswiderstand"
            },
            {
                "type": "text",
                "content": ""
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/605d6a4359bf2574740034a0"
            },
            {
                "type": "subtitle",
                "content": "Formel"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/605d6a6a59bf2574740034a2",
                "size": "m"
            },
            {
                "type": "hint",
                "content": "Der Leitwert G ist der Kehrwert des Isolationswiderstandswertes."
            },
            {
                "type": "text",
                "content": "Er wird auch Ableitung genannt, weil er einen Querstrom I<sub>is</sub> \"ableitet\". Die Maßeinheit ist Siemens (S)."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/605d6b6759bf2574740034a4",
                "size": "m"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Leitungskennwerte"
            },
            {
                "type": "subtitle",
                "content": "Widerstands-Kennwert"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/607de116c89cea0d6cda00f2",
                "size": "l"
            },
            {
                "type": "text",
                "content": "Zusammenfassend alle Kennwerte und ihre Maßeinheiten:"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/607de287c89cea0d6cda00f4",
                "size": "m"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "text",
                "content": "In der Tabelle sind für einige Leitungsarten die Leitungskennwerte bei f = 800 Hz angegeben:"
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "header",
                        "columns": [
                            { "align": "left", "content": "Leitungsart" },
                            { "align": "left", "content": "Leiter-Werkstoff" },
                            { "align": "middle", "content": "Durchmesser <br/> mm" },
                            { "align": "middle", "content": "R‘ <br/> Ω/km" },
                            { "align": "middle", "content": "C‘ <br/> nF/km" },
                            { "align": "middle", "content": "L‘ <br/> mH/km" },
                            { "align": "middle", "content": "G‘ <br/> μS/km" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Freileitung" },
                            { "align": "left", "content": "Bronze <br/> Hartkupfer" },
                            { "align": "middle", "content": "2 <br/> 3" },
                            { "align": "middle", "content": "17,7 <br/> 5,5" },
                            { "align": "middle", "content": "5,4 <br/> 6,0" },
                            { "align": "middle", "content": "2,2 <br/> 2,0" },
                            { "align": "middle", "content": "1 <br/> 1" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Kabelleitung, symmetrisch, sternverteilt", "rowSpan": 2 },
                            { "align": "left", "content": "Kupfer, Isolierung mit Papier oder Zell-Polyethylen", "rowSpan": 2 },
                            { "align": "middle", "content": "0,4 <br/> 0,6 <br/> 0,8" },
                            { "align": "middle", "content": "300 <br/> 130 <br/> 73,2" },
                            { "align": "middle", "content": "36 <br/> 38 <br/> 40" },
                            { "align": "middle", "content": "0,7 <br/> 0,7 <br/> 0,7" },
                            { "align": "middle", "content": "0,1 <br/> 0,1 <br/> 0,1" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "0,9 <br/> 1,2 <br/> 1,4" },
                            { "align": "middle", "content": "56,6 <br/> 31,8 <br/> 23,4" },
                            { "align": "middle", "content": "34 <br/> 35 <br/> 36" },
                            { "align": "middle", "content": "0,7 <br/> 0,7 <br/> 0,7" },
                            { "align": "middle", "content": "0,1 <br/> 0,1 <br/> 0,1" }
                        ]
                    }
                ]
            },
            {
                "type": "text",
                "content": "Nach Umwandlung der Gleichung für R’ lässt sich aus den Kennwerten z. B. die Leitungslänge berechnen."
            },
            {
                "type": "text",
                "content": "<b>Beispiel: Kabellänge<b/> <br/> Eine Kabelleitung mit Kupferleitern von 0,6 mm Durchmesser hat einen Widerstandswert <i>R</i> = 676 Ω. <br/> Wie lang ist das Kabel?"
            },
            {
                "type": "text",
                "content": "l = 676 Ω x km / 130 Ω <br/> l = <u>5,2 km</u>"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Ersatzschaltbild einer Leitung"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/607de583c89cea0d6cda00f6",
                "size": "s"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/607de5d2c89cea0d6cda00f8",
                "size": "s"
            },
            {
                "type": "subtitle",
                "content": "Wirkung der Leitungsgrößen"
            },
            {
                "type": "text",
                "content": "Die Leitungsgrößen <i>R</i> und <i>L</i> rufen Spannungsfälle hervor, die die Ausgangsspannung <i>U<sub>2</sub></i> der Leitung herabsetzen. Die Leitungsgrößen <i>C</i> und <i>G</i> lassen Querströme fließen, die die Ausgangsstromstärke <i>I<sub>2</sub></i> herabsetzen."
            }
        ]
    },
    {
        "url": "e_technik/begriffe_der_uebertragungstechnik",
        "_id": "605c84de23779759b9bb2901",
        "topicId": "6056854807c61731b8d162ec",
        "title": "Begriffe der Übertragungstechnik",
        "description": "Mitschrift vom 23.03.2021",
        "subject": "lf-7-1",
        "type": "article",
        "lessonDate": "2021-03-23",
        "lastUpdate": "2021-05-18",
        "schoolWeek": "23",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "text",
                "content": "Die Übertragungstechnik (ÜT) umfasst die unterschiedlichen Verfahren, welche beschreiben wie Informationen über ein definiertes Übertragungsmedium übermittelt werden. Es ist ein Teilgebiet der Nachrichten- und Kommunikationstechnik und berücksichtigt analoge und digitale Eigenscahften von Übertragungsmedien."
            },
            {
                "type": "subtitle",
                "content": "Begriffe"
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    "Zweipole / Vierpole",
                    "Resonanz",
                    "Hochpaß / Tiefpaß",
                    "Wellenwiderstand"
                ]
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Zweipole"
            },
            {
                "type": "text",
                "content": "Ein passiver Zweipol nimmt nur elektrische Energie auf.<br/>Ein aktiver Zweipol kann elektrische Energie abgeben."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/605c825523779759b9bb28f8",
                "size": "s"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/605c825e23779759b9bb28fa",
                "size": "s"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Aufgaben"
            },
            {
                "type": "list",
                "content": "Der Leitungswiderstand R<sub>L</sub> ist abhängig von ...",
                "ordered": true,
                "list": [
                    "Begründen Sie ob eine Batterie als aktiver Zweipol betrachtet werden kann oder nicht",
                    "Welche Aussagen sind bei einem passiven Zweipol über die Leerlaufspannung und den Kurzschlussstrom möglich?"
                ]
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Vierpole"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/605c835023779759b9bb28fc",
                "size": "s"
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    {
                        "content": "Aktive Vierpole",
                        "sublist": [
                            "Wirkleistung am Ausgang > Wirkleistung am Eingang, d.h. P<sub>2</sub> > P<sub>1</sub>"
                        ]
                    },
                    {
                        "content": "Passive Vierpole",
                        "sublist": [
                            "Wirkleistung am Ausgang < Wirkleistung am Eingang, d.h. P<sub>2</sub> < P<sub>1</sub>"
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
                "content": "Resonanz"
            },
            {
                "type": "text",
                "content": "Resonanz = <br/>Spule <i>L</i> und Kondensator <i>C</i> weisen gleiche Blindwiderstandswerte auf."
            },
            {
                "type": "text",
                "content": "Resonanzbedingung:"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/605c843923779759b9bb28ff",
                "size": "m"
            },
            {
                "type": "text",
                "content": "Resonanzfrequenz:"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60a3428159a0005b1c634aba",
                "size": "m"
            },
            {
                "type": "text",
                "content": "Beispiel: Durch die Parallelschaltung von C = 330 pF und L = 47 µH wird ein Resonanzkreis gebildet. Bei welcher Frequenz tritt Resonanz auf?"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Filter"
            },
            {
                "type": "text",
                "content": "Filter sind aktive oder passive Vierpole"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60a342cb59a0005b1c634abe",
                "size": "s"
            },
            {
                "type": "list",
                "content": "",
                "ordered": true,
                "list": [
                    "Es werden nur alle Frequenzen <b>unterhalb</b> einer Grenzfrequenz <b>durchgelassen</b> = Tiefpaß (TP) [engl. <i>lowpass</i>]",
                    "Es werden nur alle Frequenzen <b>oberhalb</b> einer Grenzfrequenz <b>durchgelassen</b> = Hochpaß (HP) [engl. <i>highpass</i>]",
                    "Es werden nur alle Frequenzen <b>zwischen</b> zwei Grenzfrequenzen <b>durchgelassen</b> = Bandpaß (BP) [engl. <i>bandpass</i>]",
                    "Es werden nur alle Frequenzen <b>zwischen</b> zwei Grenzfrequenzen <b>gesperrt</b> = Bandsperre (BS) [engl. <i>bandstop</i>]"
                ]
            },
            {
                "type": "subtitle",
                "content": "Grenzfrequenzen"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60a343dc59a0005b1c634ac0",
                "size": "s"
            },
            {
                "type": "text",
                "content": "Bandbreite = △ƒ = <b/> Differenz zwischen den Grenzfrequenzen ƒ<sub>g</sub>"
            },
            {
                "type": "subtitle",
                "content": "Spannungs- und Dämpfungsverlauf"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60a344c259a0005b1c634ac2",
                "size": "s"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Tiefpaß"
            },
            {
                "type": "subtitle",
                "content": "Wirkungsweise des Tiefpaßes"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60a3457559a0005b1c634ac4",
                "size": "s"
            },
            {
                "type": "subtitle",
                "content": "Passive Tiefpässe"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60a3458959a0005b1c634ac6",
                "size": "s"
            },
            {
                "type": "subtitle",
                "content": "Aktiver Tiefpaß"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60a3462559a0005b1c634ac8",
                "size": "s"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Hochpaß"
            },
            {
                "type": "subtitle",
                "content": "Wirkungsweise des Hochpaßes"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60a3463059a0005b1c634aca",
                "size": "s"
            },
            {
                "type": "subtitle",
                "content": "Passiver Hochpaß"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60a3466459a0005b1c634acc",
                "size": "s"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Bandpaß"
            },
            {
                "type": "subtitle",
                "content": "Wirkungsweise des Bandpaßes"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60a3472059a0005b1c634ace",
                "size": "s"
            },
            {
                "type": "subtitle",
                "content": "Durchlaßkurven"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60a3472e59a0005b1c634ad0",
                "size": "s"
            },
            {
                "type": "subtitle",
                "content": "Aktiver Bandpaß"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60a34e5b59a0005b1c634ad2",
                "size": "s"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Bandsperre"
            },
            {
                "type": "subtitle",
                "content": "Wirkungsweise der Bandsperre"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60a34e6859a0005b1c634ad4",
                "size": "s"
            },
            {
                "type": "subtitle",
                "content": "Wellenwiderstand"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60a34e7459a0005b1c634ad6",
                "size": "l"
            },
            {
                "type": "text",
                "content": "Der Eingangsscheinwiderstand der unendlich lang gedachten Leitung heißt <b>Wellenwiderstand Z<sub>w</sub></b>."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60a3ff1559a0005b1c634b10",
                "size": "l"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60a36c4e59a0005b1c634adc",
                "size": "s"
            },
            {
                "type": "text",
                "content": "Die Bezeichnung Wellenwiderstand ist auf den wellenförmig verlaufenden Auf- und Entladevorgang des Kabels zurückzuführen."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Berechnung des Wellenwiderstands"
            },
            {
                "type": "subtitle",
                "content": "Leerlauffall"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60a3b1b759a0005b1c634ae4",
                "size": "m"
            },
            {
                "type": "text",
                "content": "Im <i>Leerlauffall</i> wirken die Größen <i>C</i> und <i>G</i> mehr als <i>R</i> und <i>L</i>, denn es fehlt der durch <i>R<sub>a</sub></i> fließende Strom."
            },
            {
                "type": "subtitle",
                "content": "Kurzschlussfall"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60a3b1cb59a0005b1c634ae9",
                "size": "m"
            },
            {
                "type": "text",
                "content": "Im <i>Kurzschlussfall</i> wirken die Größen <i>R</i> und <i>L</i> stärker als <i>C</i> und <i>G</i>, denn die Kurzschlussstromstärke ist höher als die Betriebsstromstärke durch <i>R<sub>a</sub></i>"
            },
            {
                "type": "subtitle",
                "content": "Leitung mit offenem Ausgang"
            },
            {
                "type": "text",
                "content": "<i>Ergebnis</i>: <br/> geringere Spannungsfälle <i>U<sub>R</sub></i> und <i>U<sub>L</sub></i> <br/> höhere Querströme <i>I<sub>C</sub></i> und <i>I<sub>G</sub></i>"
            },
            {
                "type": "subtitle",
                "content": "Leitung mit kurzgeschlossenem Ausgang"
            },
            {
                "type": "text",
                "content": "<i>Ergebnis</i>: <br/> höhere Spannungsfälle <i>U<sub>R</sub></i> und <i>U<sub>L</sub></i> <br/> geringere Querströme <i>I<sub>C</sub></i> und <i>I<sub>G</sub></i>"
            },
            {
                "type": "text",
                "content": "Zum Ausgleich dieser Unterschiede wird der geometrische Mittelwert gebildet:"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60a3b2fd59a0005b1c634aec",
                "size": "s"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Leitungsgrößen"
            },
            {
                "type": "subtitle",
                "content": "Niedrige Frequenzen"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60a3b4ef59a0005b1c634aef",
                "size": "s"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60a3b4ef59a0005b1c634aef",
                "size": "s"
            },
            {
                "type": "subtitle",
                "content": "Hohe Frequenzen"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60a3b51159a0005b1c634af3",
                "size": "s"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60a3b51d59a0005b1c634af5",
                "size": "s"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "Der Wellenwiderstand ist ...",
                "content": "",
                "list": [
                    "bei niedrigen Frequenzen frequenzabhängig",
                    "bei hohen Frequenzen frequenzabhängig"
                ]
            },
            {
                "type": "subtitle",
                "content": "Beispiel <span class='list-number'>1</span>"
            },
            {
                "type": "text",
                "content": "Gesucht ist der Wellenwiderstand <i>Z<sub>w</sub> bei einer Leitung mit Kupferadern von 0,6 mm Durchmesser für eine Frequenz <i>f</i> = 800 Hz (<i>R</i> > <i>X<sub>L</sub></i>)."
            },
            {
                "type": "text",
                "content": "Nach der Tabelle Leitungskennwerte ist ..."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60a3b87c59a0005b1c634af9",
                "size": "s"
            },
            {
                "type": "subtitle",
                "content": "Beispiel <span class='list-number'>2</span>"
            },
            {
                "type": "text",
                "content": "Wie groß ist der Wellenwiderstand <i>Z<ub>W</ub></i> für eine Leitung mit Kupferadern von 1,2 mm Durchmesser für eine Frequenz <i>f</i> = 120 kHz (<i>R</i> < <i>X<sub>L</sub></i>)?"
            },
            {
                "type": "text",
                "content": "Nach der Tabelle Leitungskennwerte ist ..."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/60a3b88859a0005b1c634afb",
                "size": "s"
            }
        ]
    },
    {
        "url": "e_technik/pegel_leistungsberechnung",
        "_id": "60a414ed59a0005b1c634b18",
        "topicId": "6056854807c61731b8d162ec",
        "title": "Pegel Leistungsberechnung",
        "description": "Mitschrift vom 17.05.2021",
        "subject": "lf-7-1",
        "type": "tasks",
        "lessonDate": "2021-05-17",
        "lastUpdate": "2021-05-18",
        "schoolWeek": "25",
        "elements": [
            {
                "type": "subtitle",
                "content": "<span class='list-number'>1</span> Aufgabe"
            },
            {
                "type": "text",
                "content": "Es werden 57,3 V gemessen. <br/> Wie groß ist der Pegel?"
            },
            {
                "type": "text",
                "content": "L = 20 x log(573 ÷ 0,775 V) = 37,38 dB"
            },
            {
                "type": "subtitle",
                "content": "<span class='list-number'>2</span> Aufgabe"
            },
            {
                "type": "text",
                "content": "An der ersten Stelle werden 48,7 V gemessen. <br/> An der zweiten Stelle 42,8 V <br/> Dämpfung oder Gewinn?"
            },
            {
                "type": "text",
                "content": "L = 20 x log(48,7 ÷ 0,775) = 35,96 (aufgerundet) <br/> L = 20 x log(42,8 ÷ 0,775) = 34,84 (aufgerundet) <br/> = -1,12 dB (oder) <br/> = 1,12 dB"
            },
            {
                "type": "hint",
                "content": "Der Wert kann negativ oder positiv sein, je nachdem was man berechnen möchte."
            },
            {
                "type": "text",
                "content": "Gewinn-Formel: <br/> L = 20 x log (u1 ÷ u0)"
            },
            {
                "type": "text",
                "content": "Dämpfungs-Formel: <br/> L = 20 x log (u1 ÷ u2)"
            }
        ]
    },
    {
        "url": "e_technik/test",
        "_id": "60a412f459a0005b1c634b17",
        "topicId": "6056854807c61731b8d162ec",
        "title": "Leistungskontrolle - Übertragungstechnik Grundlagen",
        "description": "Test vom 18.05.2021",
        "subject": "lf-7-1",
        "type": "test",
        "lessonDate": "2021-05-18",
        "lastUpdate": "2021-05-18",
        "schoolWeek": "25",
        "elements": [
            {
                "type": "title",
                "content": "Aufgaben"
            },
            {
                "type": "subtitle",
                "content": "<span class='list-number'>1</span> Welche Formen der Darstellung von Nachrichten gibt es?"
            },
            {
                "type": "text",
                "content": "..."
            },
            {
                "type": "subtitle",
                "content": "<span class='list-number'>2</span> Skizziere das Prinzip der Nachrichtenübertragung mit technischen Details"
            },
            {
                "type": "text",
                "content": "..."
            },
            {
                "type": "subtitle",
                "content": "<span class='list-number'>3</span> Beschreibe den Skin-Effekt"
            },
            {
                "type": "text",
                "content": "..."
            },
            {
                "type": "subtitle",
                "content": "<span class='list-number'>4</span> Was versteht man unter Terminierung?"
            },
            {
                "type": "text",
                "content": "..."
            }
        ]
    },
];
