import { Moment } from 'moment';
import { QuizType } from 'app/shared/model/enumerations/quiz-type.model';
import { QuizLevel } from 'app/shared/model/enumerations/quiz-level.model';

export interface IQuiz {
  id?: string;
  name?: string;
  sourceUrl?: string;
  type?: QuizType;
  level?: QuizLevel;
  numberOfQuestions?: number;
  createdBy?: string;
  createdDate?: string;
  updatedBy?: string;
  updatedDate?: string;
}

export const defaultValue: Readonly<IQuiz> = {};
