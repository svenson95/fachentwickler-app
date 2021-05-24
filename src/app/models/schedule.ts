export interface Schedule {
  weekBegin: string;
  weekEnd: string;
  days: SchoolDay[];
}

export interface SchoolDay {
  day: string;
  lessons: Lesson[];
}

interface Lesson {
  subject: string;
  teacher: string;
  block: string;
  room: string;
}

