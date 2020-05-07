import {Identity} from "../domain/Identity";
import {Action} from "redux";
import {ThunkDispatch} from "redux-thunk";

export interface ListActionTypes {
  GET_LIST: string;
  LIST_UPDATED: string;
  SELECT_ITEM: string;
  ITEM_SELECTED: string;
}

// interface GetListAction <T extends Identity> extends Action {}
export interface ListAction<T extends Identity> extends Action {
  list?: T[];
  selected?: T;
  currentPage?: number;
  itemsTotal?: number;
  itemsPerPage?: number;
}
/*interface SelectItemAction<T extends Identity> extends Action {}
interface ItemSelectedAction<T extends Identity> extends Action {
  selected?: T;
}

export type ListAction<T extends Identity> = GetListAction<T> | ListUpdatedAction<T> | SelectItemAction<T> | ItemSelectedAction <T>;*/

export interface ListState<T extends Identity> {
  list: T[];
  itemsTotal: number;
  currentPage: number;
  itemsPerPage: number;
}

export type ListActionDispatch<T extends Identity> = ThunkDispatch<{}, undefined, ListAction<T>>;

export class ActionCreator<T extends Identity> implements ListActionTypes {
  readonly GET_LIST: string;
  readonly LIST_UPDATED: string;
  readonly SELECT_ITEM: string;
  readonly ITEM_SELECTED: string;

  constructor(prefix: string) {
    this.GET_LIST = `GET_${prefix}S_LIST`;
    this.LIST_UPDATED = `${prefix}S_LIST_UPDATED`;
    this.SELECT_ITEM = `SELECT_${prefix}_ITEM`;
    this.ITEM_SELECTED = `${prefix}_ITEM_SELECTED`;
  }

  getList(): ListAction<T> {
    return {type: this.GET_LIST};
  }

  updateList(state: ListState<T>): ListAction<T> {
    return {type: this.LIST_UPDATED, ...state};
  }

  selectItem(): ListAction<T> {
    return {type: this.SELECT_ITEM};
  }

  itemSelected(selected?: T): ListAction<T> {
    return {type: this.ITEM_SELECTED, selected};
  }
}
