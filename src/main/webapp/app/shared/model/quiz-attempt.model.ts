import { Moment } from 'moment';
import { IQuiz } from 'app/shared/model/quiz.model';

export interface IQuizAttempt {
  id?: string;
  quiz?: IQuiz;
  attempted?: number;
  score?: number;
  maxScore?: number;
  createdBy?: string;
  createdDate?: string;
  updatedBy?: string;
  updatedDate?: string;
}

export const defaultValue: Readonly<IQuizAttempt> = {};
