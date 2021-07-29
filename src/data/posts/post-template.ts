import { Post } from '../../app/models/post';
import { PostType } from '../../app/models/post-type';
/* tslint:disable: quotemark object-literal-key-quotes max-line-length */

export const testArticle: Post = {
    "url": "test",
    "_id": "5f429107165d0ab470bxxxxx",
    "topicId": "6056185736ac2b24829xxxxx",
    "title": "Testartikel",
    "description": "Thema vom 01.01.2000",
    "subject": "lf-1",
    "type": PostType.ARTICLE,
    "lessonDate": "2020-01-01",
    "lastUpdate": "2020-01-01",
    "schoolWeek": "0",
    "elements": [
        {
            "type": "title",
            "content": "Titel"
        },
        {
            "type": "subtitle",
            "content": "Untertitel"
        },
        {
            "type": "text",
            "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aliquam, aliquid asperiores autem cumque distinctio dolorem doloribus dolorum ducimus earum ex fuga iure maiores quod soluta vel? Aliquam, cumque. Accusamus alias atque autem blanditiis consequuntur debitis ea esse est fuga in laboriosam libero, obcaecati pariatur perspiciatis ratione reprehenderit similique tenetur ullam."
        },
        {
            "type": "text",
            "content": "A ad beatae, blanditiis distinctio eaque eius eligendi esse excepturi ipsum itaque laborum minima mollitia nemo odio perferendis porro praesentium quae quas qui repudiandae sapiente veniam veritatis vitae!",
            "hidden": true
        },
        {
            "type": "hint",
            "content": "test"
        },
        {
            "type": "image",
            "content": "http://159.65.105.150:3000/images/5ef8e9424ec54c25305a5066"
        },
        {
            "type": "line",
            "content": "<hr/>"
        },
        {
            "type": "text",
            "content": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
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
            "type": "answer-group",
            "hidden": true,
            "elements": [
                {
                    "type": "subtitle",
                    "content": "Umstellungsmöglichkeit"
                },
                {
                    "type": "image",
                    "content": "http://159.65.105.150:3000/images/5f6f9cfd59df30501b5d0d63"
                },
                {
                    "type": "text",
                    "content": "12 und 8 in Reihe <br/> 12 und 8 zu 30 parallel <br/> 12 und 8 und 30 zu 5 in Reihe"
                }
            ]
        },
        {
            "type": "line",
            "content": "<hr/>"
        },
        {
            "type": "code",
            "language": "javascript",
            "content": "console.log(\"Hello World!\");"
        },
        {
            "type": "table",
            "content": "",
            "rows": [
                {
                    "type": "header",
                    "columns": [
                        { "align": "left", "content": "DSL-Variante", "rowSpan": 2 },
                        { "align": "left", "content": "Übertragung (möglich)", "rowSpan": 2 },
                        { "align": "middle", "content": "Doppel-<br/>-adern", "rowSpan": 2 },
                        { "align": "middle", "content": "Datenrate", "colSpan": 2 },
                        { "align": "middle", "content": "Reichweite", "rowSpan": 2 },
                        { "align": "middle", "content": "POTS/<br/>ISDN", "rowSpan": 2 },
                        { "align": "middle", "content": "Anwendung", "rowSpan": 2 }
                    ]
                },
                {
                    "type": "header",
                    "columns": [
                        { "align": "middle", "content": "Downstream" },
                        { "align": "middle", "content": "Upstream" }
                    ]
                },
                {
                    "type": "default",
                    "columns": [
                        { "align": "left", "content": "ADSL" },
                        { "align": "left", "content": "asymmetrisch" },
                        { "align": "middle", "content": "1" },
                        { "align": "right", "content": "8 MBit/s" },
                        { "align": "right", "content": "640 kBit/s" },
                        { "align": "right", "content": "ca. 5 km" },
                        { "align": "middle", "content": "ja" },
                        { "align": "left", "content": "Internet-Zugang" }
                    ]
                },
                {
                    "type": "default",
                    "columns": [
                        { "align": "left", "content": "ADSL2" },
                        { "align": "left", "content": "asymmetrisch" },
                        { "align": "middle", "content": "1" },
                        { "align": "right", "content": "12 MBit/s" },
                        { "align": "right", "content": "1 MBit/s" },
                        { "align": "right", "content": "" },
                        { "align": "middle", "content": "ja" },
                        { "align": "left", "content": "Internet-Zugang" }
                    ]
                },
                {
                    "type": "default",
                    "columns": [
                        { "align": "left", "content": "HDSL" },
                        { "align": "left", "content": "symmetrisch" },
                        { "align": "middle", "content": "1" },
                        { "align": "right", "content": "25 MBit/s" },
                        { "align": "right", "content": "3,5 MBit/s" },
                        { "align": "right", "content": "" },
                        { "align": "middle", "content": "ja" },
                        { "align": "left", "content": "Internet-Zugang" }
                    ]
                },
                {
                    "type": "default",
                    "columns": [
                        { "align": "left", "content": "HDSL", "rowSpan": 2 },
                        { "align": "left", "content": "symmetrisch", "rowSpan": 2 },
                        { "align": "middle", "content": "2" },
                        { "align": "right", "content": "1,544 MBit/s" },
                        { "align": "right", "content": "1,544 MBit/s" },
                        { "align": "right", "content": "ca. 4,5 km", "rowSpan": 2 },
                        { "align": "middle", "content": "nein", "rowSpan": 2 },
                        { "align": "left", "content": "WAN", "rowSpan": 2 }
                    ]
                },
                {
                    "type": "default",
                    "columns": [
                        { "align": "middle", "content": "3" },
                        { "align": "right", "content": "2,048 MBit/s" },
                        { "align": "right", "content": "2,048 MBit/s" }
                    ]
                },
                {
                    "type": "default",
                    "columns": [
                        { "align": "left", "content": "SDSL" },
                        { "align": "left", "content": "symmetrisch" },
                        { "align": "middle", "content": "1" },
                        { "align": "right", "content": "2,36 MBit/s" },
                        { "align": "right", "content": "2,36 MBit/s" },
                        { "align": "right", "content": "ca. 2,5 km" },
                        { "align": "middle", "content": "nein" },
                        { "align": "left", "content": "WAN" }
                    ]
                },
                {
                    "type": "default",
                    "columns": [
                        { "align": "left", "content": "SHDSL" },
                        { "align": "left", "content": "symmetrisch" },
                        { "align": "middle", "content": "1" },
                        { "align": "right", "content": "2,36 MBit/s" },
                        { "align": "right", "content": "2,36 MBit/s" },
                        { "align": "right", "content": "ca. 4 km" },
                        { "align": "middle", "content": "nein" },
                        { "align": "left", "content": "WAN" }
                    ]
                },
                {
                    "type": "default",
                    "columns": [
                        { "align": "left", "content": "G.SHDSL", "rowSpan": 2 },
                        { "align": "left", "content": "symmetrisch", "rowSpan": 2 },
                        { "align": "middle", "content": "1" },
                        { "align": "right", "content": "1,2 MBit/s" },
                        { "align": "right", "content": "1,2 MBit/s" },
                        { "align": "right", "content": "ca. 6 km", "rowSpan": 2 },
                        { "align": "middle", "content": "nein", "rowSpan": 2 },
                        { "align": "left", "content": "WAN", "rowSpan": 2 }
                    ]
                },
                {
                    "type": "default",
                    "columns": [
                        { "align": "middle", "content": "2" },
                        { "align": "right", "content": "2,36 MBit/s" },
                        { "align": "right", "content": "2,36 MBit/s" }
                    ]
                },
                {
                    "type": "default",
                    "columns": [
                        { "align": "left", "content": "VDSL(2)" },
                        { "align": "left", "content": "symmetrisch" },
                        { "align": "middle", "content": "1" },
                        { "align": "right", "content": "100 MBit/s" },
                        { "align": "right", "content": "100 MBit/s" },
                        { "align": "right", "content": "ca. 1 km" },
                        { "align": "middle", "content": "ja" },
                        { "align": "left", "content": "Internet-Zugang" }
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
                "TITLE | DATE | <a href='link' target=\"_blank\" rel=\"noopener noreferrer\">text</a>"
            ]
        }
    ]
};
