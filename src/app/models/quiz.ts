
export interface Quiz {
  _id?: string;
  url: string;
  title: string;
  description: string;
  subject: string;
  type: string;
  topicId: string;
  lessonDate: string;
  lastUpdate: string;
  schoolWeek: string;
  questions: Question[];
}

interface Question {
  question: string;
  answer: number;
  choice1: string;
  choice2: string;
}
