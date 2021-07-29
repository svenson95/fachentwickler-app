import { PostArticle } from '../../app/models/post';
/* tslint:disable: quotemark object-literal-key-quotes max-line-length */

export const LF6_POSTS: PostArticle[] = [
    {
        "url": "fachliches_englisch/introductions",
        "_id": "5f429ff8165d0ab470bc5802",
        "topicId": "6056973007c61731b8d162f5",
        "title": "Introductions",
        "description": "Aufgabe vom 02.09.2019",
        "subject": "lf-5",
        "type": "tasks",
        "lessonDate": "2019-09-02",
        "lastUpdate": "2021-03-26",
        "schoolWeek": "2",
        "elements": [
            {
                "type": "title",
                "content": "Aufgaben"
            },
            {
                "type": "text",
                "content": "<b>1) Why you choose your professional field?</b> <br/> → ..."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "text",
                "content": "<b>2) What your best job-experience so far was?</b> <br/> → ..."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "text",
                "content": "<b>3) What you like to do in your free time?</b> <br/> → ..."
            }
        ]
    },
    {
        "url": "fachliches_englisch/summaries",
        "_id": "5f42a001165d0ab470bc5803",
        "topicId": "6056973007c61731b8d162f5",
        "title": "Summaries",
        "description": "Aufgabe 26.09.2019",
        "subject": "lf-5",
        "type": "tasks",
        "lessonDate": "2019-09-26",
        "lastUpdate": "2021-03-26",
        "schoolWeek": "3",
        "elements": [
            {
                "type": "title",
                "content": "Aufgaben"
            },
            {
                "type": "text",
                "content": "<b>What is a summary?</b> <br/> → A summary is giving the basic plot or content of an event, book or anything in question."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "text",
                "content": "<b>What ist the structure of a summary?\n</b> <br/> → ..."
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "1." },
                            { "align": "left", "content": "Basic sentence: Short intruduction of the object (title, author, release date, topic)" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "2." },
                            { "align": "left", "content": "- Briefly describing the plot <br/> - Usage of present tense <br/> - Neutral and formal language <br/> - Never interpret, never give up your own opinion in a summary" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "3." },
                            { "align": "left", "content": "..." }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "url": "fachliches_englisch/short_presentation_mariadb_mongodb_difference_between_sql_and_nosql",
        "_id": "5fa416f62821ae28382ab27a",
        "topicId": "6056973007c61731b8d162f5",
        "title": "Short-Presentation - MariaDB / MongoDB, Difference between SQL and NoSQL",
        "description": "Aufgabe 29.10.2020",
        "subject": "englisch",
        "type": "tasks",
        "lessonDate": "2020-10-29",
        "lastUpdate": "2021-03-26",
        "schoolWeek": "17",
        "elements": [
            {
                "type": "title",
                "content": "Aufgaben"
            },
            {
                "type": "subtitle",
                "content": "Short-Presentation"
            },
            {
                "type": "text",
                "content": "Choose a topic and explain it in a short-presentation (about 10 minutes)."
            },
            {
                "type": "line",
                "content": "<hr/>"
            },
            {
                "type": "title",
                "content": "Topic"
            },
            {
                "type": "subtitle",
                "content": "MariaDB / MongoDB, Difference between SQL and NoSQL"
            },
            {
                "type": "text",
                "content": "<u>MariaDB is an SQL table based database system</u>. SQL (engl. <i>Structured Query Language</i>) is the standard language for dealing with relational databases. Relational values have connections to other values in different tables. Database systems like MariaDB are effectively used to interact with database values / objects - basically for insert, search, update or delete database objects. But can do even more like optimizing or providing convenient methods. SQL databases consists of multiple tables, a table has <b>columns</b> which represent the attributes and <b>rows</b> for each value."
            },
            {
                "type": "table",
                "content": "",
                "rows": [
                    {
                        "type": "header",
                        "columns": [
                            { "align": "left", "content": "id" },
                            { "align": "left", "content": "firstname" },
                            { "align": "left", "content": "lastname" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "1" },
                            { "align": "left", "content": "max" },
                            { "align": "left", "content": "mustermann" }
                        ]
                    },
                    {
                        "type": "default",
                        "columns": [
                            { "align": "left", "content": "2" },
                            { "align": "left", "content": "..." },
                            { "align": "left", "content": "..." }
                        ]
                    }
                ]
            },
            {
                "type": "text",
                "content": "The counterpart to SQL is NoSQL (non-relational), one big difference between both is that <u>NoSQL databases works with document-based objects (documents), key-value pairs or graph values</u>. For example a document in a MongoDB (NoSQL) database collection looks like the JSON object below. NoSQL databases are used for distributed data stores with humongous data storage needs. It avoid joins and is easy to scale. Typically used for Big data and web apps, like Facebook and Google that collect terabytes of user data every single day."
            },
            {
                "type": "code",
                "language": "javascript",
                "content": "{\n   \"id\": 1,\n   \"firstname\": \"max\",\n   \"lastname\": \"mustermann\"\n}"
            },
            {
                "type": "text",
                "content": "NoSQL databases like MongoDB have different advantages, or disadvantages depending on how you see it. The documents doesn't need to follow any specific object model, in SQL you have to define a model for every table. Each document in a collection can have different properties, which provides more freedom but also higher error prone. The required schema in SQL databases takes care of the validity of every object, mistakes are recognized early in the development process, the database is better predictable and all necessary data is available."
            },
            {
                "type": "subtitle",
                "content": "Example - Football leagues"
            },
            {
                "type": "text",
                "content": "A football database could consist of many tables for every football leauge. These tables can be compared with each other, for instance the result of a query could show the top ten teams in europe based on the points."
            }
        ]
    },
];
