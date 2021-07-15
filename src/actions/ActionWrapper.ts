import {cloneDeep, filter} from "lodash";
import {ActionCreator} from "./ActionCreator";
import {Identity} from "../domain/Identity";
import {GetCondition, ListItemApi} from "../api/ListItemApi";
import {Context} from "./Context";
import {Attribute} from "../domain/Attribute";
import {Sort} from "../domain/Sort";

export interface DropFilterOptions {
  leaveAsIs?: boolean;
  filtersToDrop?: string[];
  filtersToSave?: string[];
}

export class ActionWrapper<T extends Identity, P = undefined> {
  constructor(
    protected ACTIONS: ActionCreator<T>,
    protected api: ListItemApi<T, any, P>,
    protected context: Context<T>
  ) {}

  getList(parent?: P) {
    return async (dispatch: any) => {
      dispatch(this.ACTIONS.getList());
      const limit = this.context.perPage();
      const offset = (this.context.page() - 1) * limit;
      const resp = await this.api.list(this.extendCondition(this.ACTIONS.GET_LIST, {
        parent,
        range: {limit, offset},
        sort: this.context.getSort(),
        filters: this.context.getExtendedFilters(),
        commonFilter: this.context.getFilter(),
      }));
      this.context.setTotal(resp.itemsTotal);
      dispatch(this.ACTIONS.updateList({
        list: resp.list,
        itemsTotal: this.context.total(),
        currentPage: this.context.page(),
        itemsPerPage: this.context.perPage(),
        sort: this.context.getSort(),
        filter: this.context.getFilter(),
        extendedFilters: this.context.getExtendedFilters()
      }));
    };
  }

  setPage(page: number, parent?: P) {
    return async (dispatch: any) => {
      this.context.setPage(page);
      await this.getList(parent)(dispatch);
    };
  }

  setPageSize(size: number, parent?: P) {
    return async (dispatch: any) => {
      this.context.setPage(1);
      this.context.setPerPage(size);
      await this.getList(parent)(dispatch);
    };
  }

  setSort(sort: Sort, parent?: P) {
    return async (dispatch: any) => {
      this.context.setPage(1);
      this.context.setSort(sort);
      await this.getList(parent)(dispatch);
    };
  }

  setCommonFilter(textFilter?: string, parent?: P) {
    return async (dispatch: any) => {
      this.context.setPage(1);
      this.context.setFilter(textFilter);
      await this.getList(parent)(dispatch);
    };
  }

  setExtendedFilters(filters?: Attribute[], parent?: P) {
    return async (dispatch: any) => {
      this.context.setPage(1);
      this.context.setExtendedFilters(filters);
      await this.getList(parent)(dispatch);
    };
  }

  setSelection(item: T) {
    return async (dispatch: any) => {
      dispatch(this.ACTIONS.selectItem());
      this.context.setSelection(item);
      await this.doSetSelection(item);
      dispatch(this.ACTIONS.itemSelected(cloneDeep(this.context.selection())));
    };
  }

  dropSelection() {
    return async (dispatch: any) => {
      dispatch(this.ACTIONS.selectItem());
      await this.doDropSelection();
      this.context.removeSelection();
      dispatch(this.ACTIONS.itemSelected());
    };
  }

  save(item: T|undefined, changes: any, parent?: P) {
    return async (dispatch: any) => {
      dispatch(this.ACTIONS.selectItem());
      await this.doSave(item, changes, parent);
      dispatch(this.ACTIONS.itemSelected(cloneDeep(this.context.selection())));
    };
  }

  delete(item: T, parent?: P) {
    return async (dispatch: any) => {
      dispatch(this.ACTIONS.selectItem());
      if (this.context.isSelected(item)) {
        this.context.removeSelection();
      }
      await this.api.delete(item, {parent});
      await this.doDelete(item, parent);
      dispatch(this.ACTIONS.itemSelected(cloneDeep(this.context.selection())));
    };
  }

  notifyAboutNewItems() {
    return async (dispatch: any) => {
      dispatch(this.ACTIONS.onNewItems());
    };
  }

  goToBegin(opt: DropFilterOptions = {}, parent?: P) {
    return async (dispatch: any) => {
      this.context.setPage(1);
      this.context.setSort();
      if (!opt.leaveAsIs) {
        this.context.setFilter();
        const dropSet = new Set<string>(opt.filtersToDrop);
        const saveSet = new Set<string>(opt.filtersToSave);
        const filters = filter(
          this.context.getExtendedFilters(),
          (f) => dropSet.size > 0 && !dropSet.has(f.name) || saveSet.has(f.name)
        );
        this.context.setExtendedFilters(filters);
      }
      await this.getList(parent)(dispatch);
      dispatch(this.ACTIONS.newItemsShowed());
    };
  }

  protected extendCondition(action: string, condition?: GetCondition<P>) {
    // extend if needed
    return condition;
  }

  protected async doSetSelection(item: T) {
    // extend
  }

  protected async doDropSelection() {
    // extend
  }

  protected async doSave(item: T|undefined, changes: any, parent?: P): Promise<T> {
    const id = item ? item.identity : undefined;
    const updated: any = item || {};
    Object.keys(changes).forEach((k) => updated[k] = changes[k]);
    let newItem = updated;
    if (!id) {
      newItem = await this.api.create(updated);
    } else {
      await this.api.save(updated, {prevIdentity: id, parent});
    }
    this.context.setSelection(newItem);
    return newItem;
  }

  protected async doDelete(item: T, parent?: P) {
    // extend
  }
}
