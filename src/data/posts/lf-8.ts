import {Post} from '../../app/models/post';

export const LF8_POSTS: Post[] = [
    {
        "url": "uebertragungstechnik/ports",
        "title": "Ports",
        "description": "Mitschrift vom 10.08.2020",
        "subject": "lf-8",
        "type": "article",
        "lessonDate": "2020-08-10",
        "lastUpdate": "2020-10-31",
        "schoolWeek": "14",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "text",
                "content": "Ein Netzwerk-Port ist eine Adresse, mit deren Hilfe sich Verbindungen eindeutig besimmten Anwendungen zuordnen lassen. Insgesamt stehen die Ports der Nummern 0 bis 65536 zur Verfügung. Zusammen mit der IP-Adresse bildet der Netzwerk-Port die vollständige Adresse einer Anwendung auf einem Ziel- oder Absendersystem. Sie werden auf der Kommunikationsebene von den Protokollen TCP und UDP verwendet."
            },
            {
                "type": "text",
                "content": "Insgesamt stehen die Ports 0 bis 65536 für die Verwendung zur Verfügung. Bestimmte Portnummern sind allerdings fest einzelnen Anwendungen zugeordnet. Zu jeder TCP- oder UDP-Verbindung gehören zwei Ports, ein Netzwerk-Port auf der Client-Seite und einer auf der Server-Seite."
            },
            {
                "type": "text",
                "content": "Wichtige Protokolle der IP-Welt wie HTTP, Telnet oder FTP besitzen feste zugewiesene Ports, sie sind von der IANA (Internet Assigned Numbers Authority) vergeben und werden auch Standard-Ports genannt."
            },
            {
                "type": "table",
                "content": "Wichtige und oft benötigte Netzwerkports ...",
                "rows": [
                    {
                        "type": "header",
                        "columns": [
                            { "align": "left", "content": "TCP / UDP" },
                            { "align": "left", "content": "Port" },
                            { "align": "left", "content": "Beschreibung / Funktion" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "TCP" },
                            { "align": "left", "content": "20" },
                            { "align": "left", "content": "FTP - Daten" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "TCP" },
                            { "align": "left", "content": "21" },
                            { "align": "left", "content": "FTP - Steuerdaten" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "TCP" },
                            { "align": "left", "content": "22" },
                            { "align": "left", "content": "SSH - Secure Shell" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "TCP" },
                            { "align": "left", "content": "80" },
                            { "align": "left", "content": "HTTP Anfragen (Alternativen: 8080 und 8088)" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "TCP / UDP" },
                            { "align": "left", "content": "110" },
                            { "align": "left", "content": "POP3" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "TCP" },
                            { "align": "left", "content": "143" },
                            { "align": "left", "content": "IMAP" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "TCP" },
                            { "align": "left", "content": "443" },
                            { "align": "left", "content": "HTTPS Anfragen (Alternativ: 8443)" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "TCP" },
                            { "align": "left", "content": "993" },
                            { "align": "left", "content": "IMAP over SSL" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "TCP" },
                            { "align": "left", "content": "995" },
                            { "align": "left", "content": "POP3 over SSL" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "TCP" },
                            { "align": "left", "content": "1433" },
                            { "align": "left", "content": "SQL Server-Standardinstanz" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "TCP" },
                            { "align": "left", "content": "1434" },
                            { "align": "left", "content": "SQL Server-Browserdienst" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "TCP" },
                            { "align": "left", "content": "8080" },
                            { "align": "left", "content": "HTTP Proxy" }
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
                    "<a href='https://www.ip-insider.de/was-ist-ein-netzwerk-port-a-691212/'>https://www.ip-insider.de/was-ist-ein-netzwerk-port-a-691212/</a>"
                ]
            }
        ]
    },
    {
        "url": "netze_und_dienste/duplex_und_duplexing_simplex_halbduplex_und_vollduplex",
        "title": "Duplex und Duplexing - Simplex, Halbduplex und Vollduplex",
        "description": "Mitschrift vom 13.08.2020",
        "subject": "lf-7-2",
        "type": "article",
        "lessonDate": "2020-08-13",
        "lastUpdate": "2021-03-25",
        "schoolWeek": "14",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "text",
                "content": "In der Übertragungstechnik gibt es zwei Übertragungsrichtungen, vom Empfänger zum Sender und vom Sender zum Empfänger. Bei Datenübertragungen spricht man dabei von Downlink/Downstream und Uplink/Upstream genannt. Ein Duplex ist eine Übertragungsart und bezeichnet, wie Sende- und Empfangsrichtungen zwischen Sender und Empfänger aufgeteilt werden und funktionieren."
            },
            {
                "type": "hint",
                "content": "Bei Vollduplex-, Halbduplex- und Semi-Duplex-Übertragungsverfahren sind prinzipiell beide Richtungen möglich."
            },
            {
                "type": "text",
                "content": "Bei einer Asymmetrischen Übertragung ist der Datenverkehr vom Server zum Nutzer höher als umgekehrt - bedeutet es werden mehr Daten heruntergeladen als hochgeladen, wie es bei den meisten Websites der Fall ist. Bei einer Symmetrischen Übertragung wie in Telefonie- und Sprach-Anwendungen ist der Datenverkehr zwischen Sender und Empfänger gleich groß."
            },
            {
                "type": "subtitle",
                "content": "Simplex"
            },
            {
                "type": "text",
                "content": "Bei Simplex ist die Übertragung nur in eine Richtung möglich, also entweder Senden <u>oder</u> Empfangen, ein Wechsel der Richtung ist nicht möglich. Typische Beispiele für Simplex-Kommunikationen sind Rundfunk, Fernsehen und die Übertragung von Audiosignalen von einem Verstärker zu einem Lautsprecher - bei Lautsprecher Anlagen mit mehreren Boxen die zum Verstärker führen."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f4088b391ef1048612e0969"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Halbduplex"
            },
            {
                "type": "text",
                "content": "Beim Halbduplex läuft die Übertragung pro Kanal zeitlich hinteinander, dabei können gleichzeitig mehrere Übertragungen der gleichen Richtung stattfinden - also mehrere Donwloads und anschließend die Uploads. Es können jedoch mehrere Kanäle geschaltet werden, womit auch hier gleichzeitiges up- und downloaden möglich ist. Dafür ist eine Umschaltvorrichtung nötig, die zeitgesteuert immer hin und her schaltet."
            },
            {
                "type": "hint",
                "content": "Typische Anwendungsbereiche sind Wechselsprechanlagen oder ISDN (engl. 'integrated Services Digital Network') - ein Internationaler Standard für digitale Telekommunkationsnetze für Kanäle wie Telefonie und Internet."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f4088c291ef1048612e096b"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Vollduplex"
            },
            {
                "type": "text",
                "content": "Nur bei der Vollduplex-Übertragung erfolgt die Datenübertragung gleichzeitig in beide Richtungen auf der gleichen Leitung / dem gleichen Kanal, es hat zwei eigenständige Übertragungskanäle. Es ist auch möglich Vollduplex aus einer Halbduplex-Übertragung zu emulieren, bei diesem Verfahren erfolgt die Umschaltung per Mikroprozessor so schnell, dass man von dem Übertragungsstop der jeweiligen Richtung nichts merkt."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f4088c791ef1048612e096d"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Duplexverfahren"
            },
            {
                "type": "text",
                "content": "Wie oben bereits erwähnt, gibt es Übertragungstechniken in denen gepaarte Kanäle/Frequenzblöcke zum Einsatz kommen. Es gibt also einen Kanal zum Upload/Uplink und einen Download/Downlink Kanal, der Abstand zwischen diesen beiden wird als Duplexabstand bezeichnet. Im GSM-Standard ist beispielsweise im 1,8-GHz-Frequenzband ein Duplexabstand von 190 MHz zwischen Hin- und Rückkanal vorgeschrieben. Wenn ein Netzbetreiber den Frequenzbereich von 1,92 GHz bis 1,925 für den Uplink verwendet, muss für den Downlink 2,11 GHz bis 2,115 GHz benutzt werden. Hier unterscheidet man zwischen Zeit- und Frequenz-Duplexverfahren, auch eine Mischform aus FDD und TDD sind als Halbduplex möglich - dabei nutzen Sender und Empfänger je ein Band pro Richtung, wechseln sich aber beim Zeitmultiplex ab. Daraus resultieren geringere Anforderungen an die Endgeräte, lassen sich also günstiger herstellen."
            },
            {
                "type": "subtitle",
                "content": "Zeitduplexverfahren - TDD / Time Division Duplex"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f4088d591ef1048612e096f"
            },
            {
                "type": "text",
                "content": "Bei TDD werden Up- und Downlink Kanäle zeitlich versetzt / hintereinander <b>auf einer Frequenz</b> übertragen. Es wird nur ein Frequenzband benutzt und Sender und Empfänger wechseln sich bei der Übertragung ab. Deshalb ist nur eine RF-Einheit (Radio-Frequenz) für Sende- und Empfangsrichtung notwendig, womit die Übertragungssysteme günstiger werden. Eignet sich für asymmetrische, flexible und kostengünstige Systeme, kommen bevorzugt im lizenzfreien Frequenzbereichen zum Einsatz."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "subtitle",
                "content": "Frequenzduplexverfahren - FDD / Frequency Division Duplex"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/5f4088da91ef1048612e0971"
            },
            {
                "type": "text",
                "content": "Bei FFD werden Up- und Downlink Kanäle gleichzeitig <b>auf zwei unterschiedlichen Frequenzen</b> übertragen, das bedeutet für die Sende- und Empfangsrichtung steht ein gepaartes Frequenzspektrum zur Verfügung. Hier benötigt jede Übertragungsrichtung seine eigene RF-Einheit (Radio-Frequenz), die sehr einfach gestaltet sein kann. Eignet sich für symmetrische Systeme und Anwendungen mit geringer Latenzzeit, kommt typischerweise in lizenzbehafteten Frequenzbereichen zum Einsatz."
            }
        ]
    },
    {
        "url": "uebertragungstechnik/produktpolitik_und_marketing_1",
        "title": "Produktpolitik & Marketing (1) (ENTWURF)",
        "description": "Mitschrift vom 09.12.2020",
        "subject": "lf-8",
        "type": "article",
        "lessonDate": "2020-12-09",
        "lastUpdate": "2021-02-08",
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
        "url": "uebertragungstechnik/produktpolitik_und_marketing_2",
        "title": "Produktpolitik & Marketing (2) (ENTWURF)",
        "description": "Mitschrift vom 12.01.2021",
        "subject": "lf-8",
        "type": "article",
        "lessonDate": "2021-01-12",
        "lastUpdate": "2021-02-08",
        "schoolWeek": "20",
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
        "url": "uebertragungstechnik/kommunikationspolitk",
        "title": "Kommunikationspolitk (ENTWURF)",
        "description": "Mitschrift vom 09.02.2021",
        "subject": "lf-8",
        "type": "tasks",
        "lessonDate": "2021-02-09",
        "lastUpdate": "2021-02-26",
        "schoolWeek": "21",
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
        "url": "uebertragungstechnik/instrumente_der_kommunikationspolitik_werbung",
        "title": "Instrumente der Kommunikationspolitk - Werbung (ENTWURF)",
        "description": "Mitschrift vom 10.02.2021",
        "subject": "lf-8",
        "type": "article",
        "lessonDate": "2021-02-10",
        "lastUpdate": "2021-02-26",
        "schoolWeek": "21",
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
        "url": "uebertragungstechnik/instrumente_der_kommunikationspolitik_oeffentlichkeitsarbeit",
        "title": "Instrumente der Kommunikationspolitk - Öffentlichkeitsarbeit",
        "description": "Mitschrift vom 04.03.2021",
        "subject": "lf-8",
        "type": "article",
        "lessonDate": "2021-03-04",
        "lastUpdate": "2021-03-13",
        "schoolWeek": "22",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "text",
                "content": "Eine andere Bezeichnung für Öffentlichkeitsarbeit ist Public Relations, kurz PR. Dazu gehört das Management aller Prozesse zur Kommunikation eines Unternehmens, das Pflegen von Beziehungen zwischen Unternehmen und der Zielgruppe, sowie Geschäftspartner und Journalisten. Ein Unternehmen, welches sich das gewünschte Image in der Öffentlichkeit aufgebaut hat, profitiert von der Glaubwürdigkeit. Ein in der Öffentlichkeit angesehenes und gut platziertes Unternehmen kann in der Regel einen besseren Absatz vorweisen."
            },
            {
                "type": "text",
                "content": "Da die Kommunikationspolitik eine Marktstrategie ist, und Öffentlichkeitsarbeit wiederum ein Teil der Kommunikationspolitik, gehört die Öffentlichkeitsarbeit im Grunde zum Marketing eines Unternehmens. Werbung und Öffentlichkeitsarbeit wird häufig miteinander in Verbindung gebracht, da sie ähnliche Methoden der Kommunikation und die gleichen Medien nutzen. Dennoch sind es zwei unterschiedliche Bereiche, nicht nur im Bezug auf die zu erreichenden Ziele unterscheiden sie sich."
            },
            {
                "type": "subtitle",
                "content": "Unterschiede - Öffentlichkeitsarbeit & Werbung"
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/604c97aab0c00c20f201d224",
                "size": "s"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "list",
                "content": "Quellen:",
                "list": [
                    "<a href='https://sevdesk.de/blog/oeffentlichkeitsarbeit/'>Öffentlichkeitsarbeit – warum und wie du sie betreiben solltest | https://sevdesk.de/blog/oeffentlichkeitsarbeit/ | 13.03.2021</a>"
                ]
            }
        ]
    },
    {
        "url": "uebertragungstechnik/instrumente_der_kommunikationspolitik_produktplatzierung",
        "title": "Instrumente der Kommunikationspolitk - Produktplatzierung",
        "description": "Mitschrift vom 04.03.2021",
        "subject": "lf-8",
        "type": "article",
        "lessonDate": "2021-03-04",
        "lastUpdate": "2021-03-13",
        "schoolWeek": "22",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "text",
                "content": "Bei der Produktplatzierung (engl. <i>Product Placement</i>) werden Vereinbarungen mit Film- oder Fernsehproduzenten getroffen, um Produkte eines Unternehmens in Filmen, Serien oder Shows zu platzieren. Für das Unternehmen hat das den Vorteil, dass gerade bei international ausgerichteten Kinofilmen eine weltweite Präsenz des produkts erreicht wird. Während klassische Werbung teilweise als störend empfunden wird und nicht sehr aufmerksam verfolgt, wenn man zum Beispiel an Fernsehwerbung oder Werbebanner auf Internetseiten denkt."
            },
            {
                "type": "hint",
                "content": "Beim <b>Product Placement</b> platzieren Unternehmen ihre Produkte in Filmen, Fernsehsendungen und Printmedien. Diese subtile Art des Marketings ist für Konsumenten nicht auf den ersten Blick erkennbar, und unterliegt gesetzlichen Regeln."
            },
            {
                "type": "text",
                "content": "Die Vergütung sind von der Popularität und der Zielgruppen-Reichweite abhängig, es kommt auch vor, dass sich das Product Placement darauf beschränkt, dass die Produkte wie z. B. ein Auto kostenlos zur Verfügung gestellt wird. Als Beispiel der Autohersteller Audi, dieser ist Sponsor von einigen Fußballvereinen, weshalb die Profis kostenlos Autos als Dienstwagen bereitgestellt bekommen, um damit in der Öffentlichkeit Werbung für die Automarke zu machen. Bei Fernsehsendungen und -shows ist der Umfang vom Produktplatzierungen rechtlich eingeschränkt."
            },
            {
                "type": "text",
                "content": "Die Abwicklung erfolgt meist über spezialisierte Agenturen für Product Placement. Grundsätzlich lassen sich hinsichtlich der Kosten zwei Formen unterscheiden."
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    "Kostenlose Produktplatzierung - Unternehmen stellt Produkt zur Verfügung",
                    "Produktplatzierung gegen Entgelt - Unternehmen zahlt Geld für die Produktplatzierung"
                ]
            },
            {
                "type": "subtitle",
                "content": "Effekte"
            },
            {
                "type": "text",
                "content": "Die Unternehmen welche auf Product Placements setzen, erhoffen sich dadurch ihr Image zu verbessern. Wenn ein Autohersteller Marketing in einem Actionfilm betreibt, will er die Leistungsstärke seiner Modelle vermitteln. Neue Marken können ihre Bekanntheit steigern und im besten Fall Neukunden gewinnen. Um dies zu erreichen erfordert es Fingerspitzengefühl im Bezug auf die Kommunikation mit dem Kunden - zu aufdringliche Werbung kann den gegenteiligen Effekt verursachen, wodurch sich potentielle Kunden genervt fühlen könnten."
            },
            {
                "type": "subtitle",
                "content": "Arten der Produktplatzierung"
            },
            {
                "type": "list",
                "content": "",
                "list": [
                    "Creative Placement - Produkt ist integraler Bestandteil der Handlung. Actionheld fährt bestimmte Automarke.",
                    "On Set Placement - Das Produkt kommt nur nebenbei als Requisite vor. Werbeplakat im Hintergrund einer Szene.",
                    "Generic Placement - Produktkategorie steht im Vordergrund. Milchlobby investiert in positive Darstellung von Milch.",
                    "Information Placement - Unternehmen stellen Redaktionen Inhalte zur Verfügung. Medien nehmen Informationen in Berichterstattung auf oder verbreiten den Beitrag."
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
                    "<a href='https://welt-der-bwl.de/Product-Placement'>Product Placement Definition | https://welt-der-bwl.de/Product-Placement | 13.03.2021</a>",
                    "<a href='https://www.rechnungswesen-verstehen.de/lexikon/product-placement.php'>Product Placement | https://www.rechnungswesen-verstehen.de/lexikon/product-placement.php | 13.03.2021</a>"
                ]
            }
        ]
    },
    {
        "url": "uebertragungstechnik/instrumente_der_kommunikationspolitik_verkaufsfoerderung",
        "title": "Instrumente der Kommunikationspolitk - Verkaufsförderung",
        "description": "Mitschrift vom 23.03.2021",
        "subject": "lf-8",
        "type": "article",
        "lessonDate": "2021-03-23",
        "lastUpdate": "2021-03-23",
        "schoolWeek": "23",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "text",
                "content": "Bei der Verkaufsförderung ..."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "list",
                "content": "Quellen:",
                "list": [
                    "<a href='https://welt-der-bwl.de/Product-Placement'>Product Placement Definition | https://welt-der-bwl.de/Product-Placement | 13.03.2021</a>",
                    "<a href='https://www.rechnungswesen-verstehen.de/lexikon/product-placement.php'>Product Placement | https://www.rechnungswesen-verstehen.de/lexikon/product-placement.php | 13.03.2021</a>"
                ]
            }
        ]
    },
    {
        "url": "uebertragungstechnik/instrumente_der_kommunikationspolitik_sponsoring",
        "_id": "6059d3d51197a87e0b452a49",
        "topicId": "60568ab607c61731b8d162ef",
        "title": "Instrumente der Kommunikationspolitk - Sponsoring",
        "description": "Mitschrift vom 26.03.2021",
        "subject": "lf-8",
        "type": "article",
        "lessonDate": "2021-03-26",
        "lastUpdate": "2021-03-26",
        "schoolWeek": "23",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "text",
                "content": "Beim Sponsoring ..."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "list",
                "content": "Quellen:",
                "list": [
                    "<a href='https://welt-der-bwl.de/Product-Placement'>Product Placement Definition | https://welt-der-bwl.de/Product-Placement | 13.03.2021</a>",
                    "<a href='https://www.rechnungswesen-verstehen.de/lexikon/product-placement.php'>Product Placement | https://www.rechnungswesen-verstehen.de/lexikon/product-placement.php | 13.03.2021</a>"
                ]
            }
        ]
    },
    {
        "url": "uebertragungstechnik/distributionspolitik",
        "title": "Distributionspolitik",
        "description": "Mitschrift vom 25.03.2021",
        "subject": "lf-8",
        "type": "article",
        "lessonDate": "2021-03-25",
        "lastUpdate": "2021-03-25",
        "schoolWeek": "23",
        "elements": [
            {
                "type": "title",
                "content": "Definition"
            },
            {
                "type": "text",
                "content": "..."
            },
            {
                "type": "image",
                "content": "http://159.65.105.150:3000/images/605c9a6c23779759b9bb2910",
                "size": "m"
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "list",
                "content": "Quellen:",
                "list": [
                    "<a href=''></a>"
                ]
            }
        ]
    },
];
