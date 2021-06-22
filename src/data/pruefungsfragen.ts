import { AuditQuestion } from '../app/models/audit-question';
/* tslint:disable: quotemark object-literal-key-quotes max-line-length */

export const auditQuestions: AuditQuestion[] = [
    {
        "question": "Welches der folgenden Betriebsmittel ist immaterieller Natur?",
        "choices": [
            "Computer",
            "Schreibtisch",
            "Lizenzen",
            "Firmenwagen",
            "Bürogebäude"
        ],
        "answer": 3
    },
    {
        "question": "Berechnen Sie den Preis pro Ticket, wenn mit einem Gewinnzuschlag von 25 % kalkuliert wird.",
        "description": "<u>Gegeben</u>: <br/>Variable Kosten/Kunde\t\t 6 EUR <br/>Fixkosten\t\t\t\t120.000 EUR <br/>Anzahl der Kunden\t\t12.000",
        "answer": 20
    },
    {
        "question": "In welcher der folgenden Marktformen ist die Einflussnahme auf den Preis seitens des Händlers am höchsten?",
        "choices": [
            "Monopol",
            "Oligopol",
            "Monopson",
            "Polypol",
            "Oligopson"
        ],
        "answer": 1
    },
    {
        "question": "Welche der folgenden Organisationsformen liegt hier zugrunde?",
        "image": "http://159.65.105.150:3000/images/60af684a914522100ea27329",
        "choices": [
            "Divisionale Organisation",
            "Matrixorganisation",
            "Tensororganisation",
            "Funktionale Organisation",
            "Stablinienorganisation"
        ],
        "answer": 4
    },
];
