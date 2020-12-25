import { Schedule } from '../app/models/schedule';

export const schedule: Schedule[] = [
  {
    day: 0,
    lessons: [
      {
        subject: 'sp',
        teacher: 'test',
        block: 1
      },
      {
        subject: 'lf-9',
        teacher: 'lüdke',
        block: 2
      },
      {
        subject: 'lf-6',
        teacher: 'ritter',
        block: 3
      },
      {
        subject: 'wiso',
        teacher: 'fischer',
        block: 4
      }
    ]
  },
  {
    day: 1,
    lessons: [
      {
        subject: 'lf-7-1',
        teacher: 'test',
        block: 1
      },
      {
        subject: 'lf-7',
        teacher: 'lüdke',
        block: 2
      },
      {
        subject: 'lf-7-2',
        teacher: 'ritter',
        block: 3
      },
      {
        subject: 'wiso',
        teacher: 'fischer',
        block: 4
      }
    ]
  },
  {
    day: 2,
    lessons: [
      {
        subject: 'deutsch',
        teacher: 'nehls',
        block: 1
      },
      {
        subject: 'lf-6',
        teacher: 'ritter',
        block: 2
      },
      {
        subject: 'wp',
        teacher: 'test',
        block: 3
      },
      {
        subject: 'lf-8',
        teacher: 'anders',
        block: 4
      }
    ]
  },
  {
    day: 3,
    lessons: [
      {
        subject: 'sp',
        teacher: 'pia',
        block: 1
      },
      {
        subject: 'deutsch',
        teacher: 'nehls',
        block: 2
      },
      {
        subject: 'englisch',
        teacher: 'foo',
        block: 3
      }
    ]
  },
  {
    day: 4,
    lessons: [
      {
        subject: 'lf-7-2',
        teacher: 'lüdke',
        block: 1
      },
      {
        subject: 'lf-7-2',
        teacher: 'lüdke',
        block: 2
      },
      {
        subject: 'lf-6',
        teacher: 'ritter',
        block: 3
      }
    ]
  }
];
