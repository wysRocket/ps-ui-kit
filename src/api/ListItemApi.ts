import {Identity} from "../domain/Identity";
import {wait} from "../utils/TimeUtils";
import {Converter, StubConverter} from "./Converter";

export abstract class ListItemApi<T extends Identity, A, P = undefined> {
  protected cache = new Map<string|number, T>();
  protected parent!: P;

  constructor(protected converter: Converter<T, A, P>) {}

  async list(parent?: P) {
    this.parent = parent as P;
    const resp = await this.fetchList();
    this.cache = new Map<string|number, T>();
    resp.forEach((obj) => {
      const item = this.converter.apiObjectToItem(obj, this.parent);
      this.cache.set(item.identity, item);
    });
    return this.listFromCache();
  }

  async save(item: T, prevId?: string|number) {
    this.assertParent();
    const id = prevId || item.identity;
    const cached = this.cache.get(id);
    if (!cached) {
      throw new Error('Item is not found in list');
    }
    await this.fetchSave(this.converter.itemToApiObject(item));
    if (id !== item.identity) {
      this.cache.delete(id);
    }
    this.cache.set(item.identity, item);
  }

  async create(item: T) {
    this.assertParent();
    const cached = this.cache.get(item.identity);
    if (cached) {
      throw new Error('Item with that identity already exists');
    }
    const createdObj = await this.fetchCreate(this.converter.itemToApiObject(item));
    const created = this.converter.apiObjectToItem(createdObj, this.parent);
    this.cache.set(created.identity, created);
    return created;
  }

  async delete(item: T) {
    this.assertParent();
    const cached = this.cache.get(item.identity);
    if (!cached) {
      throw new Error('item is not found in list');
    }
    await this.fetchDelete(this.converter.itemToApiObject(item));
    this.cache.delete(cached.identity);
  }

  listFromCache() {
    return [...this.cache.values()];
  }

  getParent() {
    return this.parent;
  }

  protected abstract fetchList(): Promise<A[]>;
  protected abstract fetchSave(item: A): Promise<void>;
  protected abstract fetchCreate(item: A): Promise<A>;
  protected abstract fetchDelete(item: A): Promise<void>;

  protected abstract assertParent(): void;
}

export abstract class StubbedListApi<T extends Identity, P = undefined> extends ListItemApi<T, T, P> {
  constructor() {
    super(new StubConverter<T>());
  }
  protected async fetchSave(item: T) {
    await wait(200);
  }

  protected async fetchCreate(item: T) {
    await wait(200);
    return item;
  }

  protected async fetchDelete(item: T) {
    await wait(200);
  }
}
