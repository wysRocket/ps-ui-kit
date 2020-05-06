import {Identity} from "../domain/Identity";

export class Context<T extends Identity> {
  private selected?: T;
  private prevSelected?: T;

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
}
