import {Identity} from "../domain/Identity";
import {ListAction, ListActionTypes} from "../actions/ActionCreator";

export interface IListState<T extends Identity> {
  list: T[];
  isLoading?: boolean;
  isSelecting?: boolean;
  selected?: T;
  currentPage?: number;
  itemsTotal?: number;
  itemsPerPage?: number;
}

const defaultState: <T extends Identity>() => IListState<T> = () => ({
  list: [],
});

export const createReducer = <T extends Identity>(types: ListActionTypes) => (state = defaultState<T>(), action: ListAction<T>) => {
  switch (action.type) {
    case types.GET_LIST:
      return {...state, isLoading: true};
    case types.LIST_UPDATED:
      return {...state, isLoading: false, list: action.list, currentPage: action.currentPage, itemsPerPage: action.itemsPerPage, itemsTotal: action.itemsTotal};
    case types.SELECT_ITEM:
      return {...state, isSelecting: true, selected: undefined};
    case types.ITEM_SELECTED:
      return {...state, isSelecting: false, selected: action.selected};
  }
  return state;
};
