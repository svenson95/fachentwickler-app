interface Lesson {
  subject: string;
  teacher: string;
  block: string;
  room: string;
}

export interface SchoolDay {
  day: string;
  lessons: Lesson[];
}

export interface Schedule {
  weekBegin: string;
  weekEnd: string;
  days: SchoolDay[];
}
