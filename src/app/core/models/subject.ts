import { BaseResponse } from './base-response';
import { PostArticle } from './post';
import { PostElement } from './post-element';
import { TopicPopulated } from './topic';

interface Subject {
  subject: string;
  description: Array<PostElement>;
}

export interface SubjectPopulated extends Subject {
  topics: TopicPopulated[];
  tests?: PostArticle[];
}

export interface SubjectUnpopulated extends Subject {
  topics: string[];
  tests?: string[];
}

export interface SubjectResponse extends BaseResponse {
  data: SubjectPopulated;
}
