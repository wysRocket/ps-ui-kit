import {Identity} from "../domain/Identity";
import {ListAction, ListActionTypes} from "../actions/ActionCreator";

export interface IListState<T extends Identity> {
  list: T[];
  isLoading?: boolean;
  selected?: T;
}

const defaultState: <T extends Identity>() => IListState<T> = () => ({
  list: [],
});

export const createReducer = <T extends Identity>(types: ListActionTypes) => (state = defaultState<T>(), action: ListAction<T>) => {
  switch (action.type) {
    case types.GET_LIST:
      return {...state, isLoading: true};
    case types.LIST_UPDATED:
      return {...state, isLoading: false, list: action.list};
    case types.SELECT_ITEM:
      return {...state, selected: undefined};
    case types.ITEM_SELECTED:
      return {...state, selected: action.selected};
  }
  return state;
};
