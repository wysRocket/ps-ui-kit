import {Identity} from "../domain/Identity";

export class Context<T extends Identity> {
  private selected?: T;
  private prevSelected?: T;
  private itemsTotal = 0;
  private itemsPerPage = 0;
  private currentPage = 0;
  private filter?: string;

  setSelection(item?: T) {
    if (this.selected) {
      this.prevSelected = this.selected;
    }
    this.selected = item;
  }

  removeSelection() {
    this.setSelection();
  }

  isSelected(item: T) {
    return this.selected && item.identity === this.selected.identity;
  }

  selection() {
    return this.selected;
  }

  prevSelection() {
    return this.prevSelected;
  }

  total() {
    return this.itemsTotal;
  }

  setTotal(t: number) {
    this.itemsTotal = t;
  }

  perPage() {
    return this.itemsPerPage;
  }

  setPerPage(v: number) {
    this.itemsPerPage = v;
  }

  page() {
    return this.currentPage;
  }

  setPage(p: number) {
    if ((p - 1) * this.itemsPerPage < this.itemsTotal) {
      this.currentPage = p;
    }
  }

  getFilter() {
    return this.filter;
  }

  setFilter(value: string) {
    this.filter = value;
  }
}
