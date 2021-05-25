import { Post } from '../../app/models/post';
/* tslint:disable: quotemark object-literal-key-quotes max-line-length */

export const LF3_POSTS: Post[] = [
    {
        "url": "netzplantechnik/regeln_der_netzplantechnik",
        "title": "Regeln der Netzplantechnik",
        "description": "Mitschrift vom 05.09.2019",
        "subject": "lf-3",
        "type": "article",
        "lessonDate": "2019-09-05",
        "lastUpdate": "2020-05-07",
        "schoolWeek": "2",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "text",
                "content": "Ein Netzplan ist eine grafische / tabellarische Darstellung einer Ablaufstruktur, er stellt einzelne Vorgänge, deren Dauer und eine zeitliche Anordnung sowie logische Abhängigkeiten dar. Mit dieser Technik können Anfangs- und Endzeitpunkte von einzelnen Vorgängen kalkuliert werden, sowie eventuelle Pufferzeiten."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Inhalte eines Netzplans"
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    "Abhängigkeiten zwischen den Teilschritten - welche Schritte müssen vor einem Vorgang erledigt werden",
                    "Dauer der Aufgaben - Wieviel Zeit muss eingeplant werden?",
                    "Pufferzeiten - An welchen Stellen kommt es zu Pufferzeiten & welche Aufgaben müssen ohne Verzögerung erledigt werden",
                    "Frühester und spätester Anfangszeitpunkt einer Aufgabe - Wann kann ein Vorgang frühestens angefangen werden und wann spätestens?",
                    "Frühester und spätester Endzeitpunkt einer Aufgabe - Wann sollten die Vorgänge frühstens und spätestens abgeschlossen sein?",
                    "Kritischer Pfad - Alle Aufgaben die ohne Verzögerung erledigt werden müssen, um im Zeitplan zu bleiben"
                ]
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Regeln der Netzplantechnik"
            },
            {
                "type": "list",
                "content": "Vorgehensweise zur Berechnung eines Projekts ...",
                "list": [
                    {
                        "content": "Strukturanalyse",
                        "sublist": [
                            "Regel 1 - Abhänigkeiten werden durch Pfeile dargestellt. Pfeilrichtung: von links nach rechts oder von unten nach oben",
                            "Regel 2 - Ein Vorgang kann mehrere Vorgänge und/oder Nachfolger haben",
                            "Regel 3 - Ein Netzplan darf keine Schleifen enthalten (Zeitrechnung wäre dann nicht möglich)",
                            "Regel 4 - Vom Projektanfang (Startknoten) bis zum Projektende (Zielknoten) muss ein ununterbrochener Ablauf gegeben sein"
                        ]
                    },
                    {
                        "content": "Vorwärtsrechnung",
                        "sublist": [
                            "Regel 5 - Startvorgang beginnt mit einem frühesten Anfangszeitpunkt (FAZ) von 0",
                            "Regel 6 - Frühester Endzeitpunkt (minEnde) = Frühester Anfangszeitpunkt (FAZ) + Dauer",
                            "Regel 7 - Das \"minEnde\" eines Vorgangs ist Frühester Anfangszeitpunkt (FAZ) aller unmittelbar nachfolgenden Vorgängen",
                            "Regel 8 - Münden mehrere Vorgänge in einen Knoten, so ist dessen \"FAZ\" der größte \"FEZ\" aller Vorgänger"
                        ]
                    },
                    {
                        "content": "Rückwärtsrechnung",
                        "sublist": [
                            "Regel 9 - Frühester Endzeitpunkt (FAZ) des Zielknotens ist Spätester Endzeitpunkt (SEZ) des Projekts",
                            "Regel 10 - Spätester Anfangszeitpunkt (SAZ) = Spätester Endzeitpunkt (SEZ) - Dauer",
                            "Regel 11 - Der \"SAZ\" eines Vorgangs ist Spätester Endzeitpunkt (SEZ) aller unmittelbar vorausgehenden Vorgänge",
                            "Regel 12 - Haben mehrere Vorgänge einen gemeinsamen Vorgänger, so ist dessen \"SEZ\" der \"SAZ\" aller Nachfolger"
                        ]
                    },
                    {
                        "content": "Zeitreserve und kritischer Weg",
                        "sublist": [
                            "Regel 13 - Gesamt Puffer = SAZ - FAZ | oder | Gesamt Puffer = SEZ - FEZ",
                            "Regel 14 - Freier Puffer<sub>Vorgang A</sub> = FAZ<sub>Nachfolger B</sub> - FEZ<sub>Vorgang A</sub>",
                            "Regel 15 - Vorgänge ohne Zeitreserve sind kritische Vorgänge",
                            "Regel 16 - Der kritische Weg ist die Kette aller kritischen Vorgänge"
                        ]
                    }
                ]
            }
        ]
    },
    {
        "url": "netzplantechnik/netzplan_und_gantt_diagramm",
        "title": "Netzplan & Gantt-Diagramm",
        "description": "Aufgaben vom 05.09.2019",
        "subject": "lf-3",
        "type": "tasks",
        "lessonDate": "2019-09-05",
        "lastUpdate": "2020-10-31",
        "schoolWeek": "2",
        "elements": [
            {
                "type": "title",
                "content": "Aufgaben"
            },
            {
                "type": "text",
                "content": "Erstelle aus den gegebenen Vorgängen ein Gantt-Diagramm und ein Netzplan. Im Artikel <a href=\"http://159.65.105.150/lf-3/netzplantechnik/regeln_der_netzplantechnik\">Regeln der Netzplantechnik</a> kannst du dir die Vorgehensweisen zur Erstellung der Ablaufstrukturen nochmal anschauen."
            },
            {
                "type": "subtitle",
                "content": "Gegeben:"
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "header",
                        "columns": [
                            { "align": "middle", "content": "Nr" },
                            { "align": "left", "content": "Vorgangsbezeichnung" },
                            { "align": "middle", "content": "Vorgänger" },
                            { "align": "middle", "content": "Dauer" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "1" },
                            { "align": "left", "content": "Estrich legen" },
                            { "align": "middle", "content": "3" },
                            { "align": "middle", "content": "2 Tage" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "2" },
                            { "align": "left", "content": "Dach stellen" },
                            { "align": "middle", "content": "6" },
                            { "align": "middle", "content": "3 Tage" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "3" },
                            { "align": "left", "content": "Innenputz" },
                            { "align": "middle", "content": "8, 9, 10" },
                            { "align": "middle", "content": "8 Tage" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "4" },
                            { "align": "left", "content": "Vorplatz" },
                            { "align": "middle", "content": "12" },
                            { "align": "middle", "content": "2 Tage" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "5" },
                            { "align": "left", "content": "Garten" },
                            { "align": "middle", "content": "12" },
                            { "align": "middle", "content": "10 Tage" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "6" },
                            { "align": "left", "content": "Fundament / Mauerwerk" },
                            { "align": "middle", "content": "13" },
                            { "align": "middle", "content": "10 Tage" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "7" },
                            { "align": "left", "content": "Zaun" },
                            { "align": "middle", "content": "4, 5" },
                            { "align": "middle", "content": "1 Tage" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "8" },
                            { "align": "left", "content": "Sanitärinstallation / Außentüren" },
                            { "align": "middle", "content": "2" },
                            { "align": "middle", "content": "10 Tage" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "9" },
                            { "align": "left", "content": "Montage Fenster / Außentüren" },
                            { "align": "middle", "content": "2" },
                            { "align": "middle", "content": "4 Tage" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "10" },
                            { "align": "left", "content": "Elektroinstallation" },
                            { "align": "middle", "content": "2" },
                            { "align": "middle", "content": "8 Tage" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "11" },
                            { "align": "left", "content": "Innentüren" },
                            { "align": "middle", "content": "1" },
                            { "align": "middle", "content": "1 Tage" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "12" },
                            { "align": "left", "content": "Außenputz" },
                            { "align": "middle", "content": "9" },
                            { "align": "middle", "content": "8 Tage" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "13" },
                            { "align": "left", "content": "Baugrube und Fundamente ausheben" },
                            { "align": "middle", "content": "-" },
                            { "align": "middle", "content": "2 Tage" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "14" },
                            { "align": "left", "content": "Bauabnahme und -übergabe" },
                            { "align": "middle", "content": "7, 11" },
                            { "align": "middle", "content": "1 Tage" }
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
                "content": "Gantt-Diagramm"
            },
            {
                "type": "text",
                "content": "Vorgänge als <u>Balken</u> darstellen, Tipp: Balken einzeichnen und anschließend Verbindungspfeil zum nächsten Vorgang setzen, Schritt für Schritt und <u>nicht</u> erstmal alle Balken und dann die Verbindungs-Pfeile!"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ed3b77623064e287c3cc792"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Netzplan"
            },
            {
                "type": "text",
                "content": "Tipp: Der End- / Zielknoten hat keine Puffer und die min-max Werte Anfangs- und Endzeitpunkt sind gleich (SAZ & SEZ). <br/> Der Gesamt Puffer ergibt sich aus SAZ - FAZ."
            },
            {
                "type": "subtitle",
                "content": "Netzplan Legende"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f19ecda8d16e73572a16f4a"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ed3c502a68f9a3083a18dc5"
            }
        ]
    },
    {
        "url": "netzplantechnik/netzplan_übungsaufgabe",
        "title": "Netzplan - Übungsaufgabe",
        "description": "Aufgaben vom 25.09.2019",
        "subject": "lf-3",
        "type": "tasks",
        "lessonDate": "2019-09-25",
        "lastUpdate": "2020-05-08",
        "schoolWeek": "3",
        "elements": [
            {
                "type": "title",
                "content": "Gegeben:"
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "header",
                        "columns": [
                            { "align": "middle", "content": "Nr" },
                            { "align": "middle", "content": "Dauer" },
                            { "align": "middle", "content": "Vorgänger" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "1" },
                            { "align": "middle", "content": "5 Tage" },
                            { "align": "middle", "content": "-" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "2" },
                            { "align": "middle", "content": "8 Tage" },
                            { "align": "middle", "content": "-" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "3" },
                            { "align": "middle", "content": "3 Tage" },
                            { "align": "middle", "content": "1" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "4" },
                            { "align": "middle", "content": "2 Tage" },
                            { "align": "middle", "content": "1, 2" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "5" },
                            { "align": "middle", "content": "5 Tage" },
                            { "align": "middle", "content": "3" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "6" },
                            { "align": "middle", "content": "7 Tage" },
                            { "align": "middle", "content": "3, 4" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "7" },
                            { "align": "middle", "content": "4 Tage" },
                            { "align": "middle", "content": "4" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "8" },
                            { "align": "middle", "content": "3 Tage" },
                            { "align": "middle", "content": "5, 6, 7" }
                        ]
                    }
                ]
            },
            {
                "type": "text",
                "content": "GP = FEZ - SEZ <br/> FP = FEZ<sub>VorgangA</sub> - FAZ<sub>VorgangB</sub> (vom kleinsten Vorgänger)"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ed11a292eefab7520ea3be0"
            }
        ]
    },
    {
        "url": "netzplantechnik/vergleich_netzplan_vs_gantt_diagramm",
        "title": "Vergleich Netzplan vs Gantt-Diagramm",
        "description": "Mitschrift vom 27.09.2019",
        "subject": "lf-3",
        "type": "article",
        "lessonDate": "2019-09-27",
        "lastUpdate": "2020-10-03",
        "schoolWeek": "3",
        "elements": [
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "header",
                        "columns": [
                            { "align": "left", "content": "Darstellung" },
                            { "align": "left", "content": "Vorteile" },
                            { "align": "left", "content": "Nachteile" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Gantt-Diagramm" },
                            { "align": "left", "content": "- Übersichtliche Struktur durch visuelle Darstellung der Dauer" },
                            { "align": "left", "content": "- Fehleranfällig beim Zeichnen <br/> - weniger Informationen <br/> - Puffer nicht erkennbar <br/> - Nur für kleinere Projekte geeignet" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Netzplan" },
                            { "align": "left", "content": "- Puffer lassen sich exakt berechnen" },
                            { "align": "left", "content": "- Mehr Informationen (FAZ, SAZ)" }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "url": "netzplantechnik/netzplan_und_gantt_diagramm_übungsaufgabe",
        "title": "Netzplan und Gantt-Diagramm - Übungsaufgabe",
        "description": "Aufgaben vom 08.06.2020",
        "subject": "lf-3",
        "type": "tasks",
        "lessonDate": "2020-06-08",
        "lastUpdate": "2020-10-03",
        "schoolWeek": "13",
        "elements": [
            {
                "type": "title",
                "content": "Gegeben:"
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "header",
                        "columns": [
                            { "align": "middle", "content": "Nr" },
                            { "align": "middle", "content": "Dauer" },
                            { "align": "middle", "content": "Vorgänger" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "1" },
                            { "align": "middle", "content": "5 Tage" },
                            { "align": "middle", "content": "2, 6" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "2" },
                            { "align": "middle", "content": "1 Tage" },
                            { "align": "middle", "content": "9" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "3" },
                            { "align": "middle", "content": "2 Tage" },
                            { "align": "middle", "content": "1" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "4" },
                            { "align": "middle", "content": "3 Tage" },
                            { "align": "middle", "content": "-" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "5" },
                            { "align": "middle", "content": "3 Tage" },
                            { "align": "middle", "content": "1" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "6" },
                            { "align": "middle", "content": "2 Tage" },
                            { "align": "middle", "content": "4" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "7" },
                            { "align": "middle", "content": "2 Tage" },
                            { "align": "middle", "content": "1" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "8" },
                            { "align": "middle", "content": "4 Tage" },
                            { "align": "middle", "content": "3, 5, 7" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "9" },
                            { "align": "middle", "content": "7 Tage" },
                            { "align": "middle", "content": "-" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "10" },
                            { "align": "middle", "content": "4 Tage" },
                            { "align": "middle", "content": "2" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "11" },
                            { "align": "middle", "content": "4 Tage" },
                            { "align": "middle", "content": "8, 10" }
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
                "content": "Netzplan"
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    "<b>Knoten verknüpfen</b> <br/> Kästchen zeichnen und Vorgangsnummer + Dauer eintragen. Tipp: Mach eine schnelle Skizze des Netzplans damit du nichts übersiehst!",
                    "<b>Vorwärtsterminierung</b> <br/> Zuerst werden die FAZ & FEZ (oben links und oben rechts) berechnet, der FAZ ist beim ersten Vorgang immer 0, ansonsten ist der FAZ der SEZ des Vorgängers. Der FEZ ergibt sich aus FAZ + Dauer.",
                    "<b>Rückwärtsterminierung</b> <br/> Jetzt werden die SEZ & SAZ (unten rechts und unten links) berechnet, beim letzten Vorgang sind FAZ & SAZ sowie SAZ & SEZ gleich. Der SEZ ergibt sich aus dem SAZ des Nachfolgers. Den SAZ berechnest du mit SEZ - Dauer.",
                    "<b>Pufferzeiten</b> <br/> Der Gesamt Puffer wird mit SAZ - FAZ ermittelt, für den Freien Puffer subtrahiert man den FAZ des Nachfolgers mit dem FEZ. (FP = FAZ<sup>2</sup> - FEZ<sup>1</sup>)",
                    "<b>Kritischer Pfad</b> <br/> Alle Schritte die ohne Verzögerung ausgeführt werden müssen markieren, also alle die keinen Gesamt- und Freien Puffer besitzen."
                ]
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f1a269b8d16e73572a16f4c"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Gantt-Diagramm"
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    "Test"
                ]
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f1a26a68d16e73572a16f4e"
            }
        ]
    },
    {
        "url": "netzplantechnik/netzplan_und_gantt_diagramm_wiederholung",
        "title": "Netzplan und Gantt Diagramm - Wiederholung",
        "description": "Mitschrift vom 11.02.2021",
        "subject": "lf-3",
        "type": "article",
        "lessonDate": "2021-02-11",
        "lastUpdate": "2021-02-26",
        "schoolWeek": "21",
        "elements": [
            {
                "type": "title",
                "content": "Gegeben:"
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "header",
                        "columns": [
                            { "align": "middle", "content": "Nr" },
                            { "align": "middle", "content": "Dauer" },
                            { "align": "middle", "content": "Vorgänger" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "1" },
                            { "align": "middle", "content": "5 Tage" },
                            { "align": "middle", "content": "2, 6" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "2" },
                            { "align": "middle", "content": "1 Tage" },
                            { "align": "middle", "content": "9" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "3" },
                            { "align": "middle", "content": "2 Tage" },
                            { "align": "middle", "content": "1" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "4" },
                            { "align": "middle", "content": "3 Tage" },
                            { "align": "middle", "content": "-" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "5" },
                            { "align": "middle", "content": "3 Tage" },
                            { "align": "middle", "content": "1" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "6" },
                            { "align": "middle", "content": "2 Tage" },
                            { "align": "middle", "content": "4" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "7" },
                            { "align": "middle", "content": "2 Tage" },
                            { "align": "middle", "content": "1" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "8" },
                            { "align": "middle", "content": "4 Tage" },
                            { "align": "middle", "content": "3, 5, 7" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "9" },
                            { "align": "middle", "content": "7 Tage" },
                            { "align": "middle", "content": "-" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "10" },
                            { "align": "middle", "content": "4 Tage" },
                            { "align": "middle", "content": "2" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "middle", "content": "11" },
                            { "align": "middle", "content": "4 Tage" },
                            { "align": "middle", "content": "8, 10" }
                        ]
                    }
                ]
            },
            {
                "type": "line",
                "content": "<hr/>"
            }
        ]
    },
    {
        "url": "visualisierung/visualisierungs_regeln",
        "title": "Visualisierungs-Regeln",
        "description": "Mitschrift vom 02.03.2020",
        "subject": "lf-3",
        "type": "article",
        "lessonDate": "2020-03-02",
        "lastUpdate": "2020-05-08",
        "schoolWeek": "9",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "text",
                "content": "test"
            }
        ]
    },
    {
        "url": "visualisierung/wirkung_von_farben",
        "title": "Wirkung von Farben",
        "description": "Mitschrift vom 02.03.2020",
        "subject": "lf-3",
        "type": "article",
        "lessonDate": "2020-03-02",
        "lastUpdate": "2020-05-09",
        "schoolWeek": "9",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "text",
                "content": "Farben wirken auf den Betrachter, der Menscht orientiert sich anhand von Farben, zum Beispiel mit Ampeln und Schildern. Farben haben eine intensive unbewusste Bedeutung, welche den Betrachter stark beeinflust. Farbempfindungen erzeugen Gefühle, diese Erkenntnis wird im Marketing schon lange gezielt eingesetzt, ebenso in der Produkt- oder Raumgestaltung."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ed11da92eefab7520ea3be6"
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Rot" },
                            { "align": "left", "content": "Wärme, nähe, erregend" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Blau" },
                            { "align": "left", "content": "Kälte, Ferne, Klarheit" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Grün" },
                            { "align": "left", "content": "Gesundheit, beruhigend" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Gelb" },
                            { "align": "left", "content": "Hell, leicht" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Schwarz" },
                            { "align": "left", "content": "Distanz, hart, schwer, eng" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Weiß" },
                            { "align": "left", "content": "Licht, leicht, leer" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Braun" },
                            { "align": "left", "content": "Gemütlich, vertraut" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Grau" },
                            { "align": "left", "content": "Leblos, langweilig" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Violett" },
                            { "align": "left", "content": "Zweideutig, unsachlich" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Orange" },
                            { "align": "left", "content": "Leuchtend" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Rosa" },
                            { "align": "left", "content": "Zart, zerbrechlich" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Gold" },
                            { "align": "left", "content": "Edel, gewichtig" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "Silber" },
                            { "align": "left", "content": "Distanziert, kühl" }
                        ]
                    }
                ]
            },
            {
                "type": "text",
                "content": "Farben können bestimmte Bereiche betonen und damit den Blick auf wichtige Aussagen lenken. Rot hat zum Beispiel eine Signalwirkung, es erzeugt Aufmerksamkeit. Dabei kann jede Farbe positiv oder negativ assoziiert werden, Rot kann unter anderem warm oder gefährlich wirken."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ed11de82eefab7520ea3be8"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "list",
                "content": "Quellen:",
                "list": [
                    "IT-Handbuch - IT-Systemelektroniker/-in & Fachinformatiker/-in | www.westermann.de",
                    "https://www.webdesign-journal.de/psychologische-wirkung-von-farben-farbkombinationen/"
                ]
            }
        ]
    },
    {
        "url": "visualisierung/diagramme",
        "title": "Diagramme",
        "description": "Mitschrift vom 02.03.2020",
        "subject": "lf-3",
        "type": "article",
        "lessonDate": "2020-03-02",
        "lastUpdate": "2020-05-10",
        "schoolWeek": "9",
        "elements": [
            {
                "type": "title",
                "content": "Kurvendiagramm / Liniendiagramm"
            },
            {
                "type": "text",
                "content": "Findet Verwendung bei der Veranschaulichung von Zahlen aus Tabellen (Zahlenvisualisierung), um Abhängigkeiten zwischen zwei Größen (Krankheitsfälle & Monate) festzustellen. Wird häufig verwendet um Entwicklungsverläufe darzustellen oder Prognosen zu verdeutlichen."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ed11f362eefab7520ea3bee"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Kreisdiagramm / Kuchen- oder Tortendiagramm"
            },
            {
                "type": "text",
                "content": "Einfache & übersichtliche Darstellung von Größenverhältnissen, verschafft einen Gesamtüberblick. Ist eine Darstellungsform für Teilwerte eines ganzen, d. h. die Gesamtmenge muss 100% entsprechen → im Beispiel: Gesamter Umsatz 100% aufgeteilt in einzelne PC Komponenten."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ed11f722eefab7520ea3bf0"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Balkendiagramm"
            },
            {
                "type": "text",
                "content": "Vergleich von zwei oder mehreren Werten in Relation zueinander, damit könnten die Umsätze von zwei Abteilungen innerhalb eines Geschäftsjahres verglichen werden. Eignet sich besonders zur Veranschaulichung von Rangfolgen."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ed11fd22eefab7520ea3bf2"
            },
            {
                "type": "title",
                "content": "Säulendiagramm"
            },
            {
                "type": "text",
                "content": "Je nach Anordnung der Balken (horizontal oder vertikal) unterscheidet man zwischen Balken- oder Säulendiagramm."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ed12a7f2eefab7520ea3c04"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Flussdiagramm"
            },
            {
                "type": "text",
                "content": "Mit einem Flussdiagramm (engl. 'flowchart') lassen sich Abläufe jeglicher Art grafisch darstellen, so lassen sich Anwendungen, Systeme oder Geschäftsprozesse besser modellieren. Es wird auch als Ablaufdiagramm, Programmstrukturplan oder Programmablaufplan bezeichnet."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ed3048c79253514444249cb"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "<u>Organigramm (Organisationsdiagramm)</u>"
            },
            {
                "type": "text",
                "content": "Stellt die interne Struktur eines Unternehmens dar, daraus lässt sich ablesen welche Rolle die unterschiedlichen Mitarbeiter oder Abteilungen innerhalb eines Unternehmens spielen. Wird auch als Organisationsplan, Strukturplan oder Stellenplan bezeichnet."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ed304e679253514444249cd"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Mindmap (Aufbau-Diagramm)"
            },
            {
                "type": "text",
                "content": "Grafisches Hilfsmittel um komplexe Themen übersichtlich darzustellen, eignet sich besonders um Informationen und Wissen zu ordnen und in eine übersichtliche Struktur zu bringen. Wird oft zum Brainstorming oder als Planungs- oder Organisationsinstrument verwendet."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5ed3052d79253514444249cf"
            }
        ]
    },
];
