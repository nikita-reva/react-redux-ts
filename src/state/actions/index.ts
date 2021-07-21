import { ActionType } from '../action-types';

interface SearchRepsitoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepsitoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepsitoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | SearchRepsitoriesAction
  | SearchRepsitoriesSuccessAction
  | SearchRepsitoriesErrorAction;
