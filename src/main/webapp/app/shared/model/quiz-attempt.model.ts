import { Moment } from 'moment';

export interface IQuizAttempt {
  id?: string;
  attempted?: number;
  score?: number;
  maxScore?: number;
  createdBy?: string;
  createdDate?: string;
  updatedBy?: string;
  updatedDate?: string;
}

export const defaultValue: Readonly<IQuizAttempt> = {};
