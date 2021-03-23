export interface Schedule {
  day: string;
  lessons: Lesson[];
}

interface Lesson {
  subject: string;
  teacher: string;
  block: string;
}

