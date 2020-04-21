import {Identity} from "../domain/Identity";

export class Context<T extends Identity> {
  private selected?: T;

  setSelection(item?: T) {
    this.selected = item;
  }

  removeSelection() {
    this.setSelection();
  }

  isSelected(item: T) {
    return this.selected && item.identity === this.selected.identity;
  }
}
