import { Schedule } from '../app/models/schedule';
/* tslint:disable: quotemark object-literal-key-quotes max-line-length */

export const schedule: Schedule = {
  "weekBegin": '2021-05-17',
  "weekEnd": '2021-05-21',
  "days": [
    {
      "day": '0',
      "lessons": [
        {
          "subject": 'lf-7-1',
          "teacher": 'pofahl',
          "room": 'A110',
          "block": '1'
        },
        {
          "subject": 'lf-9',
          "teacher": 'anders',
          "room": 'A111',
          "block": '2'
        },
        {
          "subject": 'deutsch',
          "teacher": 'nehls',
          "room": 'A114',
          "block": '3'
        }
      ]
    },
    {
      "day": '1',
      "lessons": [
        {
          "subject": null,
          "teacher": null,
          "room": null,
          "block": '1'
        },
        {
          subject: 'lf-8',
          teacher: 'kirmis',
          room: 'A022',
          block: '2'
        },
        {
          subject: 'lf-7-1',
          teacher: 'pofahl',
          room: 'A110',
          block: '3'
        }
      ]
    },
    {
      day: '2',
      lessons: [
        {
          subject: 'deutsch',
          teacher: 'nehls',
          room: 'A111',
          block: '1'
        },
        {
          subject: 'lf-6',
          teacher: 'ritter',
          room: 'A213',
          block: '2'
        },
        {
          subject: 'wp',
          teacher: 'schneider',
          room: 'A212',
          block: '3'
        },
        {
          subject: 'lf-6',
          teacher: 'ritter',
          room: 'A114',
          block: '4'
        }
      ]
    },
    {
      day: '3',
      lessons: [
        {
          subject: 'wiso',
          teacher: 'trosin',
          room: 'A114',
          block: '1'
        },
        {
          subject: 'lf-8',
          teacher: 'kirmis',
          room: 'A024',
          block: '2'
        },
        {
          subject: 'lf-6',
          teacher: 'ritter',
          room: 'A213',
          block: '3'
        },
        {
          subject: 'sport',
          teacher: 'dekarz',
          room: 'A024',
          block: '4'
        }
      ]
    },
    {
      day: '4',
      lessons: [
        {
          subject: null,
          teacher: null,
          room: null,
          block: '1'
        },
        {
          subject: 'wiso',
          teacher: 'trosin',
          room: 'A113',
          block: '2'
        },
        {
          subject: 'lf-6',
          teacher: 'ritter',
          room: 'A213',
          block: '3'
        }
      ]
    }
  ]
};
