import { PostArticle } from '../../app/core/models/post';
/* eslint-disable quotes, quote-props, max-len, comma-dangle */

export const LF7_1_POSTS: PostArticle[] = [
  {
    "url": "e_technik/einfuehrung",
    "title": "Einführung",
    "description": "Mitschrift vom 10.08.2020",
    "subject": "lf-7-1",
    "type": "article",
    "lessonDate": "2020-08-10",
    "lastUpdate": "2020-10-31",
    "schoolWeek": 14,
    "elements": [
      {
        "type": "TITLE",
        "content": "Themen"
      },
      {
        "type": "LIST",
        "content": "<span class='ddu-list-number'>1</span> Teil",
        "list": [
          "Wiederholung der Grundlagen | Gemischte Schaltungen | Spannungsteiler",
          "Wiederholung Bauteile im Gleichstromkreis | Wechselstromkreis",
          "Grundlagen der Wechselstromtechnik | Sinusgrößen"
        ]
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "LIST",
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
    "_id": "5f6f661b819cd4bad66c53fb",
    "topicId": "6056854807c61731b8d162ec",
    "title": "Schaltungen - Widerstände berechnen",
    "description": "Mitschrift vom 01.09.2020",
    "subject": "lf-7-1",
    "type": "tasks",
    "lessonDate": "2020-09-01",
    "lastUpdate": "2021-07-04",
    "schoolWeek": 15,
    "elements": [
      {
        "type": "TITLE",
        "content": "Definition"
      },
      {
        "type": "TEXT",
        "content": "Bauteile, wie zum Beispiel der Widerstand oder der Kondensator, lassen sich unterschiedlich in einen Stromkreis einbauen. Einmal kann man sie zum Beispiel so einbauen, dass die Teile in Reihe, also hintereinander geschaltet sind. Das wäre dann die sogenannte Reihenschaltung. Ebenfalls kannst du die Bauteile so einbauen, dass sie im Stromkreis zueinander parallel sind, also sich gegenüber liegen. Das wäre die Parallelschaltung."
      },
      {
        "type": "SUBTITLE",
        "content": "Reihenschaltung"
      },
      {
        "type": "TEXT",
        "content": "Bei der Reihenschaltung bleibt der Strom gleich, er fließt zuerst durch den ersten Widerstand und dann direkt zum nächsten. Eine Reihenschaltung ist eine Hintereinanderschaltung zweier oder mehrerer Bauelemente in einer Schaltung, dass einen Strompfad bildet. Zwei Bauelemente sind in Reihe geschaltet, wenn deren Verbindung keine Abzweigung aufweist."
      },
      {
        "type": "TEXT",
        "content": ""
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5f6f676759df30501b5d0d1b"
      },
      {
        "type": "LIST",
        "content": "",
        "list": [
          "<b>Strom I überall gleich</b>",
          "I<sub>ges</sub> = I<sub>1</sub> = I<sub>2</sub> = I<sub>3</sub>",
          "<b>Spannung U nicht überall gleich</b>",
          "U<sub>ges</sub> = U<sub>1</sub> + U<sub>2</sub> + U<sub>3</sub>",
          "<b>Widerstand R nicht überall gleich</b>",
          "R<sub>ges</sub> = R<sub>1</sub> + R<sub>2</sub> + R<sub>3</sub>",
          "Addition aller Widerstände ergibt Gesamtwiderstand",
          "Umso kleiner der Widerstand desto größer der Strom",
          "Am größten fällt die größte Spannung ab",
          "Spannungen verhalten sich wie die dazugehörigen Widerstände"
        ]
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Parallelschaltung"
      },
      {
        "type": "TEXT",
        "content": "Bei der Parallelschaltung teilt sich der Strom auf, die Spannung ist überall gleich groß. Die Spannung ist konstant und die Stromstärke lässt sich durch die Aufteilung zu einer Gesamtstromstärke aufaddieren."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5f6f676e59df30501b5d0d1d"
      },
      {
        "type": "LIST",
        "content": "",
        "list": [
          "<b>Strom I nicht überall gleich</b>",
          "I<sub>ges</sub> = I<sub>1</sub> + I<sub>2</sub> + I<sub>3</sub>",
          "<b>Spannung U überall gleich</b>",
          "U<sub>ges</sub> = U<sub>1</sub> = U<sub>2</sub> = U<sub>3</sub>",
          "<b>Widerstand R überall gleich</b>",
          "1 / R<sub>ges</sub> = (1 / R<sub>1</sub>) + (1 / R<sub>2</sub>) + (1 / R<sub>3</sub>)",
          "Geringster Widerstand / kleinster Widerstand hat den größten Strom",
          "Gesamtwiderstand ist kleiner als der kleinste Teilwiderstand"
        ]
      },
      {
        "type": "HINT",
        "content": "Es gibt auch gemischte Schaltungen, diese werden Netzwerke genannt."
      },
      {
        "type": "TEXT",
        "content": "Taschenrechner Kehrwert-Funktion (1/x bzw. x<sup>-1</sup> Taste) für Berechnungen von Parallelschaltungen. <br/> Beispiel: 1000<sub>-1</sub> + 100<sub>-1</sub> + 10<sub>-1</sub> = 0,111<sub>-1</sub> = <u>9,009 Ω</u>"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Ohmsches Gesetz"
      },
      {
        "type": "SUBTITLE",
        "content": "Formeln"
      },
      {
        "type": "TEXT",
        "content": "Spannung U = R x I <br/> Widerstand R = U / I <br/> Stromstärke I = U / R"
      },
      {
        "type": "SUBTITLE",
        "content": "<span class='list-number'>1</span> Aufgabe - Komplexe Schaltungen umstellen"
      },
      {
        "type": "TEXT",
        "content": "Komplexere Schaltungen können auch in mehrere Teilschaltungen aufgeteilt werden, dies führt zum besseren Verständnis der ganzen Schaltung. Stelle die nachfolgende Schaltung so um, dass sie für den Laien besser nachvollziehbar ist."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60d8b4bedcb27d3620a11249",
        "size": "m"
      },
      {
        "type": "ANSWER_GROUP",
        "hidden": true,
        "elements": [
          {
            "type": "SUBTITLE",
            "content": "Umstellungsmöglichkeit"
          },
          {
            "type": "IMAGE",
            "content": "http://159.65.105.150:3000/images/5f6f9cfd59df30501b5d0d63"
          },
          {
            "type": "TEXT",
            "content": "12 und 8 in Reihe <br/> 12 und 8 zu 30 parallel <br/> 12 und 8 und 30 zu 5 in Reihe"
          }
        ]
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "<span class='list-number'>2</span> Aufgabe - Widerstand & Strom berechnen"
      },
      {
        "type": "TEXT",
        "content": "Wie groß ist der Gesamtwiderstand und Gesamtstrom?"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60d8b4bedcb27d3620a11249",
        "size": "l"
      },
      {
        "type": "ANSWER_GROUP",
        "hidden": true,
        "elements": [
          {
            "type": "SUBTITLE",
            "content": "Gesamtwiderstand"
          },
          {
            "type": "LIST",
            "content": "",
            "ordered": true,
            "list": [
              "Reihenschaltung: 12 + 8 = 20 Ω",
              "Parallelschaltung: 20<sub>-1</sub> + 30<sub>-1</sub> = 0,0833 | 0,0833<sub>-1</sub> = 12 Ω",
              "Reihenschaltung: 12 + 5 = 17 Ω",
              "Parallelschaltung: 17<sub>-1</sub> + 20<sub>-1</sub> = 0,10 | 0,10<sub>-1</sub> = 9,189 Ω",
              "Reihenschaltung: 9,189 Ω + 14 = 23,1891 Ω",
              "R<sub>ges</sub> = <u>23,1891 Ω</u>"
            ]
          },
          {
            "type": "IMAGE",
            "content": "http://159.65.105.150:3000/images/60d8b4d0dcb27d3620a1124b"
          },
          {
            "type": "SUBTITLE",
            "content": "Gesamtstrom"
          },
          {
            "type": "TEXT",
            "content": "I<sub>ges</sub> = U / R<sub>ges</sub> <br/> I<sub>ges</sub> = 24 V / 23,19 Ω = <u>1,03 A</u>"
          }
        ]
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "<span class='list-number'>3</span> Aufgabe - Widerstand berechnen & Schaltung umstellen"
      },
      {
        "type": "TEXT",
        "content": "Berechne den Gesamtwiderstand dieser gemischten Schaltung"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5f6f9d0959df30501b5d0d65"
      },
      {
        "type": "TEXT",
        "content": "R<sub>1</sub> = 80 Ω <br/> R<sub>2</sub> = 60 Ω <br/> R<sub>3</sub> = 40 Ω <br/> R<sub>4</sub> = 120 Ω <br/> R<sub>5</sub> = 120 Ω <br/> R<sub>6</sub> = 160 Ω <br/> R<sub>7</sub> = 180 Ω <br/> R<sub>8</sub> = 200 Ω"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Rechnung"
      },
      {
        "type": "ANSWER_GROUP",
        "hidden": true,
        "elements": [
          {
            "type": "TEXT",
            "content": "(R<sub>1</sub> + R<sub>2</sub>) + (R<sub>6</sub> + R<sub>8</sub>) <br/> = (80 + 60) + (160 + 200) <br/> = 140 Ω + 360 Ω = 500 Ω"
          },
          {
            "type": "IMAGE",
            "content": "http://159.65.105.150:3000/images/5f6f9d1359df30501b5d0d67"
          },
          {
            "type": "TEXT",
            "content": "(R<sub>6/8</sub>) + R<sub>5</sub> + R<sub>7</sub> = 360<sub>-1</sub> + 120<sub>-1</sub> + 180<sub>-1</sub> <br/> = 0,016<sub>-1</sub> <br/> = 60 Ω"
          },
          {
            "type": "IMAGE",
            "content": "http://159.65.105.150:3000/images/60d8a5bfdcb27d3620a11241",
            "size": "m"
          },
          {
            "type": "TEXT",
            "content": "(R<sub>5/6/7/8</sub>) + R<sub>4</sub> = 60 + 120 <br/> = 180 Ω"
          },
          {
            "type": "IMAGE",
            "content": "http://159.65.105.150:3000/images/5f6f9d2159df30501b5d0d6b"
          },
          {
            "type": "TEXT",
            "content": "(R<sub>4/5/6/7/8</sub>) + R<sub>3</sub> = 180<sub>-1</sub> + 40<sub>-1</sub> <br/> = 0,030555555<sub>-1</sub> <br/> = 32,72727273 Ω"
          },
          {
            "type": "IMAGE",
            "content": "http://159.65.105.150:3000/images/60d8a5d1dcb27d3620a11243"
          },
          {
            "type": "TEXT",
            "content": "(R<sub>1/2</sub> + R<sub>3/4/5/6/7/8</sub>) = 140 + 32,72727273 <br/> = <u>172,72727273 Ω</u>"
          },
          {
            "type": "IMAGE",
            "content": "http://159.65.105.150:3000/images/5f6f9d2e59df30501b5d0d6f",
            "size": "m"
          }
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
          "Reihenschaltung und Parallelschaltung | 27.06.2021 | <a href='https://studyflix.de/elektrotechnik/reihen-und-parallelschaltung-260'>https://studyflix.de/elektrotechnik/reihen-und-parallelschaltung-260</a>"
        ]
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
    "schoolWeek": 15,
    "elements": [
      {
        "type": "TITLE",
        "content": "Definition"
      },
      {
        "type": "TEXT",
        "content": "Wechselströme haben viele Vorteile gegenüber Gleichströmen und sind heutzutage die meist genutzte Form der Energieversorgung. Der größte Vorteil ist, dass man das Spannungs- und Stromniveau mit Hilfe von Transformatoren anpassen kann bei nur geringen Leistungsverlusten. Im Stromkreis mit Wechselströmen verhalten sich elektronische Bauteile (Spule, Kondensator, ...) anders, als im Stromkreis mit Gleichströmen."
      },
      {
        "type": "TEXT",
        "content": "Für die Berechnung von Leistungen müssen Effektivwerte verwendet werden, diese lassen sich aus der Leistung bestimmen bzw. herleiten. Effektivwerte sind die Werte, die die gleiche Leistung lieferen wie in einem Gleichstrom-Kreis unter den gleichen Bedingungen."
      },
      {
        "type": "TEXT",
        "content": "Der Effektivwert einer Wechselspannung gibt die zeitlich konstante Spannung an und der Effektivwert eines Wechselstroms gibt die zeitlich konstante Stromstärke an."
      },
      {
        "type": "TEXT",
        "content": "Im Gleichstrom-Kreis gilt Leistung P = U x I. <br/> Im Wechselstromkreis ist die Leistung P durch das Produkt aus den Mittelwerten Strom und Spannung bestimmt."
      },
      {
        "type": "TEXT",
        "content": "Effektivwerte für Wechselspannung und Wechselstrom berechnen: <br/> Spannung U<sub>Effektivwert</sub> = U<sub>omega</sub> : Wurzel aus 2 <br/> Strom I<sub>Effektivwert</sub> = U<sub>omega</sub> : Wurzel aus 2"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Widerstand (Ohmscher) R [Ω]"
      },
      {
        "type": "TEXT",
        "content": "In einem Gleichstrom-Kreis haben Spulen nur einen Ohmschen Widerstand, während sie im Wechselstrom-Kreislauf einen sogenannten Wechselstromwiderstand aufweisen. Der Grund dafür sind Spannungsabfälle, da es bei einer Spule zur Selbstinduktion kommt."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5f675e8b8dcdb242a7e7c63e"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Phasenverschiebung"
      },
      {
        "type": "TEXT",
        "content": "Verringert die Leistung, durch die Verzögerung des Aufbaus der Induktivität erfolgt eine Phasenverschiebung."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5f675e958dcdb242a7e7c640"
      },
      {
        "type": "HINT",
        "content": "Merksatz: Bei Induktivitäten Ströme sich verspäten!"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Spule (Induktivität) L [H]"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5f675ebe8dcdb242a7e7c642"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Beispiel: Lampe"
      },
      {
        "type": "TEXT",
        "content": "Lampe geht verzögert an und aus."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5f675ec78dcdb242a7e7c644"
      },
      {
        "type": "LIST",
        "content": "",
        "list": [
          "Erzeugt Magnetfeld",
          "Strom kann nicht sofort durchfließen, Verzögerung durch Induktionswiderstand",
          "Beim Abschalten ist auch das Ausschalten verzögert"
        ]
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Kondensator (Kapazität) C [F]"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5f675eda8dcdb242a7e7c646"
      },
      {
        "type": "TEXT",
        "content": "Blindleisstung + Wirkleistung = Scheinleistung"
      },
      {
        "type": "IMAGE",
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
    "schoolWeek": 15,
    "elements": [
      {
        "type": "TITLE",
        "content": "Definition"
      },
      {
        "type": "TEXT",
        "content": "Periodendauer T <br/> T = 1 : f"
      },
      {
        "type": "TEXT",
        "content": "Läuft gegen den Uhrzeigersinn und in 90°-Schritten."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/5f6780e28dcdb242a7e7c64c"
      },
      {
        "type": "LIST",
        "content": "In der Elektrotechnik gilt ...",
        "list": [
          "kleines u = Momentanwert",
          "großes U = Effektivwert",
          "kleines u<sub>s</sub> = Spitzenwert Amplitude ( u<sub>s</sub> = Wurzel aus 2 x großes U)"
        ]
      },
      {
        "type": "TEXT",
        "content": "u<sub>90°</sub> = U<sub>s</sub> x sin(𝛼) <br/> ω = Kreisfrequenz <br/> ω = 2 x π x f"
      },
      {
        "type": "TEXT",
        "content": "U<sub>5ms</sub> = u<sub>s</sub> x sin(ω x t) <br/> = 10V x sin(2 x π x 50Hz x 0,005s) = "
      },
      {
        "type": "HINT",
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
    "schoolWeek": 17,
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
    "url": "e_technik/widerstandsberechnung_1",
    "title": "Widerstandsberechnung (1) (ENTWURF)",
    "description": "Mitschrift vom 17.11.2020",
    "subject": "lf-7-1",
    "type": "tasks",
    "lessonDate": "2020-11-17",
    "lastUpdate": "2020-12-21",
    "schoolWeek": 18,
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
    "url": "e_technik/widerstandsberechnung_2",
    "title": "Widerstandsberechnung (2) (ENTWURF)",
    "description": "Mitschrift vom 08.12.2020",
    "subject": "lf-7-1",
    "type": "tasks",
    "lessonDate": "2020-12-08",
    "lastUpdate": "2020-12-21",
    "schoolWeek": 19,
    "elements": [
      {
        "type": "TITLE",
        "content": "Definition"
      },
      {
        "type": "TEXT",
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
    "schoolWeek": 20,
    "elements": [
      {
        "type": "TITLE",
        "content": "LF-7-1"
      },
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
    "url": "e_technik/grundlagen_der_uebertragungstechnik_1",
    "_id": "603eb6efb0c00c20f201d122",
    "topicId": "6056854807c61731b8d162ec",
    "title": "Aufgaben - Grundlagen der Übertragungstechnik",
    "description": "Mitschrift vom 02.03.2021",
    "subject": "lf-7-1",
    "type": "tasks",
    "lessonDate": "2021-03-02",
    "lastUpdate": "2021-06-29",
    "schoolWeek": 22,
    "elements": [
      {
        "type": "TITLE",
        "content": "Aufgaben"
      },
      {
        "type": "SUBTITLE",
        "content": "Aufgabe <span class='list-number'>1</span>"
      },
      {
        "type": "TEXT",
        "content": "<b>Worin besteht das Prinzip der elektrischen Nachrichtenübertragungstechnik?</b>"
      },
      {
        "type": "TEXT",
        "content": "Übertragung von Nachrichten über Entfernungen mit Hilfe elektrischer und magnetischer Größen",
        "hidden": true
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Aufgabe <span class='list-number'>2</span>"
      },
      {
        "type": "TEXT",
        "content": "<b>Formulieren Sie in Stichworten die Aufgaben der Nachrichtentechnik</b>"
      },
      {
        "type": "TEXT",
        "content": "<u>Übertragung</u>, <u>Verarbeitung</u> und <u>Speicherung</u> von Signalen.",
        "hidden": true
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Aufgabe <span class='list-number'>3</span>"
      },
      {
        "type": "TEXT",
        "content": "<b>Welche Aufgabe hat das Signal in der Nachrichtenübertragungstechnik</b>"
      },
      {
        "type": "TEXT",
        "content": "Das Signal ist die physikalische Repräsentation der Information, welche die Nachrichten beinhaltet",
        "hidden": true
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Aufgabe <span class='list-number'>4</span>"
      },
      {
        "type": "TEXT",
        "content": "<b>Warum wird bei jedem Übertragungssystem ein Sender benötigt?</b>"
      },
      {
        "type": "TEXT",
        "content": "Er dient zur Anpassung des Signals an die Eigenschaften des Übertragungskanals. Dient zur Aufnahme, Umwandlung, Modulation, Codierung und Verarbeitung",
        "hidden": true
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Aufgabe <span class='list-number'>5</span>"
      },
      {
        "type": "TEXT",
        "content": "<b>In welchem Verhältnis müssen Nutzsignal und Störsignal stehen, um eine möglichst hohe Qualität einer Übertragung zu bewirken? Begründen Sie Ihre Antwort!</b>"
      },
      {
        "type": "TEXT",
        "content": "Das Störsignal soll gegenüber dem Nutzsignal möglichst klein sein, da nur das Nutzsignal für die Nachrichtensenke interessante Nachrichten enthält",
        "hidden": true
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Aufgabe <span class='list-number'>6</span>"
      },
      {
        "type": "TEXT",
        "content": "<b>Beschreiben Sie die wesentlichen Unterschiede zwischen den verschiedenen Übertragungsarten</b>"
      },
      {
        "type": "LIST",
        "content": "",
        "hidden": true,
        "list": [
          "Geführte Übertragung",
          "Ungeführte Übertragung",
          "Materielle Übertragung"
        ]
      }
    ]
  },
  {
    "url": "e_technik/grundlagen_der_uebertragungstechnik",
    "_id": "60428445b0c00c20f201d168",
    "topicId": "6056854807c61731b8d162ec",
    "title": "Grundlagen der Übertragungstechnik",
    "description": "Mitschrift vom 02.03.2021",
    "subject": "lf-7-1",
    "type": "article",
    "lessonDate": "2021-03-03",
    "lastUpdate": "2021-05-18",
    "schoolWeek": 22,
    "elements": [
      {
        "type": "TITLE",
        "content": "Definition"
      },
      {
        "type": "TEXT",
        "content": "Die Übertragung von Wirkungen mit Hilfe elektrischer, magnetischer oder optischer Größen"
      },
      {
        "type": "LIST",
        "content": "",
        "list": [
          "Beschreibung aus physikalischer und mathematischer Sicht",
          "Begriffsbestimmungen",
          "Abkürzungen"
        ]
      },
      {
        "type": "SUBTITLE",
        "content": "Welche elementaren Formen der Darstellung von Nachrichten gibt es?"
      },
      {
        "type": "LIST",
        "content": "",
        "list": [
          "Ton",
          "Bild",
          "Text",
          "Daten"
        ]
      },
      {
        "type": "SUBTITLE",
        "content": "Formen der Information"
      },
      {
        "type": "LIST",
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
        "type": "SUBTITLE",
        "content": "Kommunikation"
      },
      {
        "type": "TEXT",
        "content": "Einseitiger oder wechselseitiger Austausch von Informationen zwischen Menschen, technischen Einrichtungen oder Menschen und technischen Einrichtungen."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Prinzip der Nachrichtenübertragung"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a2dfa463931e24491ca436",
        "size": "s"
      },
      {
        "type": "SUBTITLE",
        "content": "Nutzsignal und Störsignal bei der Nachrichtenübertragung"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a2dff163931e24491ca438",
        "size": "s"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TEXT",
        "content": "Frage: Beschreiben Sie ein einfaches System einer Nachrichtenübertragung anhand eines Telefongespräches."
      },
      {
        "type": "TEXT",
        "content": "Antwort ..."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Die drei Formen der Übertragung"
      },
      {
        "type": "SUBTITLE",
        "content": "Geführte Übertragung"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a2e09163931e24491ca43b",
        "size": "s"
      },
      {
        "type": "SUBTITLE",
        "content": "Ungeführte Übertragung"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a2e0a163931e24491ca43d",
        "size": "s"
      },
      {
        "type": "SUBTITLE",
        "content": "Materielle Übertragung"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a2e09163931e24491ca43b",
        "size": "s"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Grundgrößen der Übertragungstechnik"
      },
      {
        "type": "SUBTITLE",
        "content": "Gleichspannung"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a2e8b959a0005b1c634a98",
        "size": "s"
      },
      {
        "type": "SUBTITLE",
        "content": "Periodischer Spannungsverlauf"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a2e8c459a0005b1c634a9a",
        "size": "s"
      },
      {
        "type": "SUBTITLE",
        "content": "Maximalwert und Minimalwert"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a2ea3d59a0005b1c634a9c",
        "size": "s"
      },
      {
        "type": "SUBTITLE",
        "content": "Sinusförmige Zeitfunktion"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a2ea4d59a0005b1c634a9e",
        "size": "s"
      },
      {
        "type": "SUBTITLE",
        "content": "Zusammenhang zwischen Sinus und Kosinus"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a2eab659a0005b1c634aa0",
        "size": "s"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Beispiel"
      },
      {
        "type": "TEXT",
        "content": "Für den dargestellten Spannungsverlauf ist der lineare Mittelwert zu ermitteln."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a2f0ed59a0005b1c634aad",
        "size": "s"
      },
      {
        "type": "TEXT",
        "content": "Aus der Zeichnung entnehmen wir die zu den Zeitpunkten t<sub>1</sub>...t<sub>10</sub> gehörenden Spannugnswerte u<sub>1</sub>...u<sub>10</sub> und setzen diese in folgende Gleichung ein:"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a2ee1459a0005b1c634aa4",
        "size": "s"
      },
      {
        "type": "TEXT",
        "content": "Der lineare Mittelwert beträgt also angenähert 1,6 V."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Beispiel Strom"
      },
      {
        "type": "SUBTITLE",
        "content": "Stromrichtungen"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a2ee6459a0005b1c634aa6",
        "size": "s"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Beispiel Leistung"
      },
      {
        "type": "SUBTITLE",
        "content": "Leistung bei Kapazität"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a2ef2d59a0005b1c634aa9",
        "size": "m"
      },
      {
        "type": "SUBTITLE",
        "content": "Leistung bei Induktivität"
      },
      {
        "type": "TEXT",
        "content": "Wirkleistung <i>P</i> (Einheit: W)"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a2ef3859a0005b1c634aab",
        "size": "m"
      },
      {
        "type": "SUBTITLE",
        "content": "Fragen zu den Grundgrößen"
      },
      {
        "type": "LIST",
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
    "schoolWeek": 23,
    "elements": [
      {
        "type": "TITLE",
        "content": "Definition"
      },
      {
        "type": "LIST",
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
        "type": "TEXT",
        "content": "Je nach der zu überbrückenden Entfernung und den zu übertragenden Datenmengen werden unterschiedliche Übertragungsleitungen benötigt. In VDE-Bestimmungen, IEC-Richtlinien, DIN-Normen sowie den EMV-Vorschriften innerhalb der EG werden Grenzwerte elektromagnetischer Strahlung festgelegt. Das CE-Kennzeichen ist beispielsweise ein Zeichen für die Einhaltung bestimmter Grenzwerte."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Symmetrische/Asymmetrische Leitungen"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/6058502037cdbc38e21c700a",
        "size": "m"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/6058502b37cdbc38e21c700e",
        "size": "m"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Grundgrößen einer Leitung"
      },
      {
        "type": "LIST",
        "content": "Der Leitungswiderstand R<sub>L</sub> ist abhängig von ...",
        "list": [
          "Leiterlänge l",
          "Material / Leiterwerkstoff (Leitfähigkeit) x / y",
          "Leiterquerschnitt A"
        ]
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/605850f437cdbc38e21c7014",
        "size": "s"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Skineffekt"
      },
      {
        "type": "LIST",
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
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Leitungskapazität"
      },
      {
        "type": "TEXT",
        "content": "Die Adern einer zweiadrigen Leitung bilden mit der dazwischen liegenden Isolation einen Kondensator"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/605851b537cdbc38e21c7016",
        "size": "s"
      },
      {
        "type": "TEXT",
        "content": "Der Blindwiderstand X<sub>C</sub> wirkt quer zwischen den Leitungsadern."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/605d677a59bf25747400349a",
        "size": "m"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Leitungsinduktivität"
      },
      {
        "type": "TEXT",
        "content": "Der durch die Leitung fließende Strom erzeugt ein magnetisches Feld, das die Leiter umgibt."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/605d687459bf25747400349c",
        "size": "m"
      },
      {
        "type": "TEXT",
        "content": "Der Blindwiderstand X<sub>L</sub> wirkt in Längsrichtung der Leiter."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/605d68b159bf25747400349e",
        "size": "m"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Isolationswiderstand"
      },
      {
        "type": "TEXT",
        "content": ""
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/605d6a4359bf2574740034a0"
      },
      {
        "type": "SUBTITLE",
        "content": "Formel"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/605d6a6a59bf2574740034a2",
        "size": "m"
      },
      {
        "type": "HINT",
        "content": "Der Leitwert G ist der Kehrwert des Isolationswiderstandswertes."
      },
      {
        "type": "TEXT",
        "content": "Er wird auch Ableitung genannt, weil er einen Querstrom I<sub>is</sub> \"ableitet\". Die Maßeinheit ist Siemens (S)."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/605d6b6759bf2574740034a4",
        "size": "m"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Leitungskennwerte"
      },
      {
        "type": "SUBTITLE",
        "content": "Widerstands-Kennwert"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/607de116c89cea0d6cda00f2",
        "size": "l"
      },
      {
        "type": "TEXT",
        "content": "Zusammenfassend alle Kennwerte und ihre Maßeinheiten:"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/607de287c89cea0d6cda00f4",
        "size": "m"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TEXT",
        "content": "In der Tabelle sind für einige Leitungsarten die Leitungskennwerte bei f = 800 Hz angegeben:"
      },
      {
        "type": "TABLE",
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
        "type": "TEXT",
        "content": "Nach Umwandlung der Gleichung für R’ lässt sich aus den Kennwerten z. B. die Leitungslänge berechnen."
      },
      {
        "type": "TEXT",
        "content": "<b>Beispiel: Kabellänge<b/> <br/> Eine Kabelleitung mit Kupferleitern von 0,6 mm Durchmesser hat einen Widerstandswert <i>R</i> = 676 Ω. <br/> Wie lang ist das Kabel?"
      },
      {
        "type": "TEXT",
        "content": "l = 676 Ω x km / 130 Ω <br/> l = <u>5,2 km</u>"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Ersatzschaltbild einer Leitung"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/607de583c89cea0d6cda00f6",
        "size": "s"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/607de5d2c89cea0d6cda00f8",
        "size": "s"
      },
      {
        "type": "SUBTITLE",
        "content": "Wirkung der Leitungsgrößen"
      },
      {
        "type": "TEXT",
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
    "schoolWeek": 23,
    "elements": [
      {
        "type": "TITLE",
        "content": "Definition"
      },
      {
        "type": "TEXT",
        "content": "Die Übertragungstechnik (ÜT) umfasst die unterschiedlichen Verfahren, welche beschreiben wie Informationen über ein definiertes Übertragungsmedium übermittelt werden. Es ist ein Teilgebiet der Nachrichten- und Kommunikationstechnik und berücksichtigt analoge und digitale Eigenscahften von Übertragungsmedien."
      },
      {
        "type": "SUBTITLE",
        "content": "Begriffe"
      },
      {
        "type": "LIST",
        "content": "",
        "list": [
          "Zweipole / Vierpole",
          "Resonanz",
          "Hochpaß / Tiefpaß",
          "Wellenwiderstand"
        ]
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Zweipole"
      },
      {
        "type": "TEXT",
        "content": "Ein passiver Zweipol nimmt nur elektrische Energie auf.<br/>Ein aktiver Zweipol kann elektrische Energie abgeben."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/605c825523779759b9bb28f8",
        "size": "s"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/605c825e23779759b9bb28fa",
        "size": "s"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Aufgaben"
      },
      {
        "type": "LIST",
        "content": "Der Leitungswiderstand R<sub>L</sub> ist abhängig von ...",
        "ordered": true,
        "list": [
          "Begründen Sie ob eine Batterie als aktiver Zweipol betrachtet werden kann oder nicht",
          "Welche Aussagen sind bei einem passiven Zweipol über die Leerlaufspannung und den Kurzschlussstrom möglich?"
        ]
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Vierpole"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/605c835023779759b9bb28fc",
        "size": "s"
      },
      {
        "type": "LIST",
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
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Resonanz"
      },
      {
        "type": "TEXT",
        "content": "Resonanz = <br/>Spule <i>L</i> und Kondensator <i>C</i> weisen gleiche Blindwiderstandswerte auf."
      },
      {
        "type": "TEXT",
        "content": "Resonanzbedingung:"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/605c843923779759b9bb28ff",
        "size": "m"
      },
      {
        "type": "TEXT",
        "content": "Resonanzfrequenz:"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a3428159a0005b1c634aba",
        "size": "m"
      },
      {
        "type": "TEXT",
        "content": "Beispiel: Durch die Parallelschaltung von C = 330 pF und L = 47 µH wird ein Resonanzkreis gebildet. Bei welcher Frequenz tritt Resonanz auf?"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "Filter"
      },
      {
        "type": "TEXT",
        "content": "Filter sind aktive oder passive Vierpole"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a342cb59a0005b1c634abe",
        "size": "s"
      },
      {
        "type": "LIST",
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
        "type": "SUBTITLE",
        "content": "Grenzfrequenzen"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a343dc59a0005b1c634ac0",
        "size": "s"
      },
      {
        "type": "TEXT",
        "content": "Bandbreite = △ƒ = <b/> Differenz zwischen den Grenzfrequenzen ƒ<sub>g</sub>"
      },
      {
        "type": "SUBTITLE",
        "content": "Spannungs- und Dämpfungsverlauf"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a344c259a0005b1c634ac2",
        "size": "s"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Tiefpaß"
      },
      {
        "type": "SUBTITLE",
        "content": "Wirkungsweise des Tiefpaßes"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a3457559a0005b1c634ac4",
        "size": "s"
      },
      {
        "type": "SUBTITLE",
        "content": "Passive Tiefpässe"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a3458959a0005b1c634ac6",
        "size": "s"
      },
      {
        "type": "SUBTITLE",
        "content": "Aktiver Tiefpaß"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a3462559a0005b1c634ac8",
        "size": "s"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Hochpaß"
      },
      {
        "type": "SUBTITLE",
        "content": "Wirkungsweise des Hochpaßes"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a3463059a0005b1c634aca",
        "size": "s"
      },
      {
        "type": "SUBTITLE",
        "content": "Passiver Hochpaß"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a3466459a0005b1c634acc",
        "size": "s"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Bandpaß"
      },
      {
        "type": "SUBTITLE",
        "content": "Wirkungsweise des Bandpaßes"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a3472059a0005b1c634ace",
        "size": "s"
      },
      {
        "type": "SUBTITLE",
        "content": "Durchlaßkurven"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a3472e59a0005b1c634ad0",
        "size": "s"
      },
      {
        "type": "SUBTITLE",
        "content": "Aktiver Bandpaß"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a34e5b59a0005b1c634ad2",
        "size": "s"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Bandsperre"
      },
      {
        "type": "SUBTITLE",
        "content": "Wirkungsweise der Bandsperre"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a34e6859a0005b1c634ad4",
        "size": "s"
      },
      {
        "type": "SUBTITLE",
        "content": "Wellenwiderstand"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a34e7459a0005b1c634ad6",
        "size": "l"
      },
      {
        "type": "TEXT",
        "content": "Der Eingangsscheinwiderstand der unendlich lang gedachten Leitung heißt <b>Wellenwiderstand Z<sub>w</sub></b>."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a3ff1559a0005b1c634b10",
        "size": "l"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a36c4e59a0005b1c634adc",
        "size": "s"
      },
      {
        "type": "TEXT",
        "content": "Die Bezeichnung Wellenwiderstand ist auf den wellenförmig verlaufenden Auf- und Entladevorgang des Kabels zurückzuführen."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Berechnung des Wellenwiderstands"
      },
      {
        "type": "SUBTITLE",
        "content": "Leerlauffall"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a3b1b759a0005b1c634ae4",
        "size": "m"
      },
      {
        "type": "TEXT",
        "content": "Im <i>Leerlauffall</i> wirken die Größen <i>C</i> und <i>G</i> mehr als <i>R</i> und <i>L</i>, denn es fehlt der durch <i>R<sub>a</sub></i> fließende Strom."
      },
      {
        "type": "SUBTITLE",
        "content": "Kurzschlussfall"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a3b1cb59a0005b1c634ae9",
        "size": "m"
      },
      {
        "type": "TEXT",
        "content": "Im <i>Kurzschlussfall</i> wirken die Größen <i>R</i> und <i>L</i> stärker als <i>C</i> und <i>G</i>, denn die Kurzschlussstromstärke ist höher als die Betriebsstromstärke durch <i>R<sub>a</sub></i>"
      },
      {
        "type": "SUBTITLE",
        "content": "Leitung mit offenem Ausgang"
      },
      {
        "type": "TEXT",
        "content": "<i>Ergebnis</i>: <br/> geringere Spannungsfälle <i>U<sub>R</sub></i> und <i>U<sub>L</sub></i> <br/> höhere Querströme <i>I<sub>C</sub></i> und <i>I<sub>G</sub></i>"
      },
      {
        "type": "SUBTITLE",
        "content": "Leitung mit kurzgeschlossenem Ausgang"
      },
      {
        "type": "TEXT",
        "content": "<i>Ergebnis</i>: <br/> höhere Spannungsfälle <i>U<sub>R</sub></i> und <i>U<sub>L</sub></i> <br/> geringere Querströme <i>I<sub>C</sub></i> und <i>I<sub>G</sub></i>"
      },
      {
        "type": "TEXT",
        "content": "Zum Ausgleich dieser Unterschiede wird der geometrische Mittelwert gebildet:"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a3b2fd59a0005b1c634aec",
        "size": "s"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TITLE",
        "content": "Leitungsgrößen"
      },
      {
        "type": "SUBTITLE",
        "content": "Niedrige Frequenzen"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a3b4ef59a0005b1c634aef",
        "size": "s"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a3b4ef59a0005b1c634aef",
        "size": "s"
      },
      {
        "type": "SUBTITLE",
        "content": "Hohe Frequenzen"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a3b51159a0005b1c634af3",
        "size": "s"
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a3b51d59a0005b1c634af5",
        "size": "s"
      },
      {
        "type": "LINE",
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
        "type": "SUBTITLE",
        "content": "Beispiel <span class='list-number'>1</span>"
      },
      {
        "type": "TEXT",
        "content": "Gesucht ist der Wellenwiderstand <i>Z<sub>w</sub> bei einer Leitung mit Kupferadern von 0,6 mm Durchmesser für eine Frequenz <i>f</i> = 800 Hz (<i>R</i> > <i>X<sub>L</sub></i>)."
      },
      {
        "type": "TEXT",
        "content": "Nach der Tabelle Leitungskennwerte ist ..."
      },
      {
        "type": "IMAGE",
        "content": "http://159.65.105.150:3000/images/60a3b87c59a0005b1c634af9",
        "size": "s"
      },
      {
        "type": "SUBTITLE",
        "content": "Beispiel <span class='list-number'>2</span>"
      },
      {
        "type": "TEXT",
        "content": "Wie groß ist der Wellenwiderstand <i>Z<ub>W</ub></i> für eine Leitung mit Kupferadern von 1,2 mm Durchmesser für eine Frequenz <i>f</i> = 120 kHz (<i>R</i> < <i>X<sub>L</sub></i>)?"
      },
      {
        "type": "TEXT",
        "content": "Nach der Tabelle Leitungskennwerte ist ..."
      },
      {
        "type": "IMAGE",
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
    "lastUpdate": "2021-05-24",
    "schoolWeek": 25,
    "elements": [
      {
        "type": "SUBTITLE",
        "content": "<span class='list-number'>1</span> Aufgabe"
      },
      {
        "type": "TEXT",
        "content": "Es werden 57,3 V gemessen. <br/> Wie groß ist der Pegel?"
      },
      {
        "type": "TEXT",
        "hidden": true,
        "content": "L = 20 x log(573 ÷ 0,775 V) = 37,38 dB"
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "SUBTITLE",
        "content": "<span class='list-number'>2</span> Aufgabe"
      },
      {
        "type": "TEXT",
        "content": "An der ersten Stelle werden 48,7 V gemessen. <br/> An der zweiten Stelle 42,8 V <br/> Dämpfung oder Gewinn?"
      },
      {
        "type": "TEXT",
        "hidden": true,
        "content": "L = 20 x log(48,7 ÷ 0,775) = 35,96 (aufgerundet) <br/> L = 20 x log(42,8 ÷ 0,775) = 34,84 (aufgerundet) <br/> = -1,12 dB (oder) <br/> = 1,12 dB"
      },
      {
        "type": "HINT",
        "content": "Der Wert kann negativ oder positiv sein, je nachdem was man berechnen möchte."
      },
      {
        "type": "LINE",
        "content": "<hr/>"
      },
      {
        "type": "TEXT",
        "content": "Gewinn-Formel: <br/> L = 20 x log (u1 ÷ u0)"
      },
      {
        "type": "TEXT",
        "content": "Dämpfungs-Formel: <br/> L = 20 x log (u1 ÷ u2)"
      }
    ]
  },
  {
    "url": "e_technik/leistungskontrolle_uebertragungstechnik_grundlagen",
    "_id": "60a412f459a0005b1c634b17",
    "topicId": "6056854807c61731b8d162ec",
    "title": "Leistungskontrolle - Übertragungstechnik Grundlagen",
    "description": "Test vom 18.05.2021",
    "subject": "lf-7-1",
    "type": "test",
    "lessonDate": "2021-05-18",
    "lastUpdate": "2021-06-29",
    "schoolWeek": 25,
    "elements": [
      {
        "type": "TITLE",
        "content": "Aufgaben"
      },
      {
        "type": "SUBTITLE",
        "content": "<span class='list-number'>1</span> Welche Formen der Darstellung von Nachrichten gibt es?"
      },
      {
        "type": "TEXT",
        "content": "..."
      },
      {
        "type": "SUBTITLE",
        "content": "<span class='list-number'>2</span> Skizziere das Prinzip der Nachrichtenübertragung mit technischen Details"
      },
      {
        "type": "TEXT",
        "content": "..."
      },
      {
        "type": "SUBTITLE",
        "content": "<span class='list-number'>3</span> Beschreibe den Skin-Effekt"
      },
      {
        "type": "TEXT",
        "content": "..."
      },
      {
        "type": "SUBTITLE",
        "content": "<span class='list-number'>4</span> Was versteht man unter Terminierung?"
      },
      {
        "type": "TEXT",
        "content": "..."
      }
    ]
  },
  {
    "url": "e_technik/pegeldiagramme",
    "_id": "60dae94d783bfa623e8bb392",
    "topicId": "6056854807c61731b8d162ec",
    "title": "Pegel-Diagramme",
    "description": "Mitschrift vom 08.06.2021",
    "subject": "lf-7-1",
    "type": "article",
    "lessonDate": "2021-06-08",
    "lastUpdate": "2021-06-29",
    "schoolWeek": 26,
    "elements": [
      {
        "type": "TITLE",
        "content": "Definition"
      },
      {
        "type": "TEXT",
        "content": "..."
      }
    ]
  },
];
