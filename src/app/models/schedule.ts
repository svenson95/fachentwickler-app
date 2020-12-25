export interface Schedule {
  day: number;
  lessons: Lesson[];
}

interface Lesson {
  subject: string;
  teacher: string;
  block: number;
}
