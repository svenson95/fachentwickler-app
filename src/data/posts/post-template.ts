import { Post } from '../../app/models/post';
import { PostType } from '../../app/models/post-type';
/* tslint:disable: quotemark object-literal-key-quotes max-line-length */

const test: Post = {
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
            "content": "test"
        },
        {
            "type": "subtitle",
            "content": "test"
        },
        {
            "type": "text",
            "content": "test",
            "hidden": false
        },
        {
            "type": "hint",
            "content": "test"
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
            "type": "code",
            "language": "javascript",
            "content": "test"
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
            "type": "table",
            "content": "test",
            "rows": [
                {
                    "type": "default",
                    "columns": [
                        { "align": "middle", "content": "test" }
                    ]
                }
            ]
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
