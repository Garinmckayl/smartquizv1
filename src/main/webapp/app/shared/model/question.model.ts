import { Moment } from 'moment';

export interface IQuestion {
  id?: string;
  text?: string;
  createdBy?: string;
  createdDate?: string;
  updatedBy?: string;
  updatedDate?: string;
}

export const defaultValue: Readonly<IQuestion> = {};
