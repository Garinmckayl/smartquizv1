import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IQuizAttempt, defaultValue } from 'app/shared/model/quiz-attempt.model';

export const ACTION_TYPES = {
  FETCH_QUIZATTEMPT_LIST: 'quizAttempt/FETCH_QUIZATTEMPT_LIST',
  FETCH_QUIZATTEMPT: 'quizAttempt/FETCH_QUIZATTEMPT',
  CREATE_QUIZATTEMPT: 'quizAttempt/CREATE_QUIZATTEMPT',
  UPDATE_QUIZATTEMPT: 'quizAttempt/UPDATE_QUIZATTEMPT',
  DELETE_QUIZATTEMPT: 'quizAttempt/DELETE_QUIZATTEMPT',
  RESET: 'quizAttempt/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IQuizAttempt>,
  entity: defaultValue,
  updating: false,
  totalItems: 0,
  updateSuccess: false,
};

export type QuizAttemptState = Readonly<typeof initialState>;

// Reducer

export default (state: QuizAttemptState = initialState, action): QuizAttemptState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_QUIZATTEMPT_LIST):
    case REQUEST(ACTION_TYPES.FETCH_QUIZATTEMPT):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_QUIZATTEMPT):
    case REQUEST(ACTION_TYPES.UPDATE_QUIZATTEMPT):
    case REQUEST(ACTION_TYPES.DELETE_QUIZATTEMPT):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_QUIZATTEMPT_LIST):
    case FAILURE(ACTION_TYPES.FETCH_QUIZATTEMPT):
    case FAILURE(ACTION_TYPES.CREATE_QUIZATTEMPT):
    case FAILURE(ACTION_TYPES.UPDATE_QUIZATTEMPT):
    case FAILURE(ACTION_TYPES.DELETE_QUIZATTEMPT):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_QUIZATTEMPT_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
        totalItems: parseInt(action.payload.headers['x-total-count'], 10),
      };
    case SUCCESS(ACTION_TYPES.FETCH_QUIZATTEMPT):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_QUIZATTEMPT):
    case SUCCESS(ACTION_TYPES.UPDATE_QUIZATTEMPT):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_QUIZATTEMPT):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: {},
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

const apiUrl = 'api/quiz-attempts';

// Actions

export const getEntities: ICrudGetAllAction<IQuizAttempt> = (page, size, sort) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
  return {
    type: ACTION_TYPES.FETCH_QUIZATTEMPT_LIST,
    payload: axios.get<IQuizAttempt>(`${requestUrl}${sort ? '&' : '?'}cacheBuster=${new Date().getTime()}`),
  };
};

export const getEntity: ICrudGetAction<IQuizAttempt> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_QUIZATTEMPT,
    payload: axios.get<IQuizAttempt>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IQuizAttempt> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_QUIZATTEMPT,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IQuizAttempt> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_QUIZATTEMPT,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IQuizAttempt> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_QUIZATTEMPT,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
