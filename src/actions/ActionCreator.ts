import {Identity} from "../domain/Identity";
import {Action} from "redux";
import {ThunkDispatch} from "redux-thunk";
import {Sort} from "../domain/Sort";
import {Attribute} from "../domain/Attribute";

export interface ListActionTypes {
  GET_LIST: string;
  LIST_UPDATED: string;
  SELECT_ITEM: string;
  ITEM_SELECTED: string;
  ON_NEW_ITEMS: string;
  NEW_ITEMS_SHOWED: string;
}

// interface GetListAction <T extends Identity> extends Action {}
export interface ListAction<T extends Identity> extends Action {
  list?: T[];
  selected?: T;
  currentPage?: number;
  itemsTotal?: number;
  itemsPerPage?: number;
  sort?: Sort;
  filter?: string;
  extendedFilters?: Attribute[];
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
  sort?: Sort;
  filter?: string;
  extendedFilters?: Attribute[];
}

export type ListActionDispatch<T extends Identity> = ThunkDispatch<{}, undefined, ListAction<T>>;

export class ActionCreator<T extends Identity> implements ListActionTypes {
  readonly GET_LIST: string;
  readonly LIST_UPDATED: string;
  readonly SELECT_ITEM: string;
  readonly ITEM_SELECTED: string;
  readonly ON_NEW_ITEMS: string;
  readonly NEW_ITEMS_SHOWED: string;

  constructor(prefix: string) {
    this.GET_LIST = `GET_${prefix}S_LIST`;
    this.LIST_UPDATED = `${prefix}S_LIST_UPDATED`;
    this.SELECT_ITEM = `SELECT_${prefix}_ITEM`;
    this.ITEM_SELECTED = `${prefix}_ITEM_SELECTED`;
    this.ON_NEW_ITEMS = `${prefix}_ON_NEW_ITEMS`;
    this.NEW_ITEMS_SHOWED = `${prefix}_NEW_ITEMS_SHOWED`;
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

  onNewItems(): ListAction<T> {
    return {type: this.ON_NEW_ITEMS};
  }

  newItemsShowed(): ListAction<T> {
    return {type: this.NEW_ITEMS_SHOWED};
  }
}
