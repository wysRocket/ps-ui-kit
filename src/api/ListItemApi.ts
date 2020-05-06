import {Identity} from "../domain/Identity";
import {wait} from "../utils/TimeUtils";
import {Converter, StubConverter} from "./Converter";
import {Limit, Sort} from "../domain/Sort";
import {Attribute} from "../domain/Attribute";

export interface GetCondition<P> {
  parent?: P;
  sort?: Sort;
  filters?: Attribute[];
  commonFilter?: string;
  limit?: Limit;
}

export interface ChangeOptions<P> {
  parent?: P;
  prevIdentity?: string | number;
}

export abstract class ListItemApi<T extends Identity, A, P = undefined> {
  protected cache = new Map<string|number, T>();

  protected constructor(protected converter: Converter<T, A, P>) {}

  async list(condition?: GetCondition<P>) {
    const resp = await this.fetchList(condition);
    this.cache = new Map<string|number, T>();
    const parent = condition ? condition.parent : undefined;
    resp.forEach((obj) => {
      const item = this.converter.apiObjectToItem(obj, parent);
      this.cache.set(item.identity, item);
    });
    return this.listFromCache();
  }

  async one(condition?: GetCondition<P>) {
    const obj = await this.fetchOne(condition);
    const parent = condition ? condition.parent : undefined;
    const item = this.converter.apiObjectToItem(obj, parent);
    this.cache.set(item.identity, item);
    return item;
  }

  async save(item: T, opt?: ChangeOptions<P>) {
    const id = opt && opt.prevIdentity ? opt.prevIdentity : item.identity;
    const cached = this.cache.get(id);
    if (!cached) {
      throw new Error('Item is not found in list');
    }
    await this.fetchSave(this.converter.itemToApiObject(item), opt);
    if (id !== item.identity) {
      this.cache.delete(id);
    }
    this.cache.set(item.identity, item);
  }

  async create(item: T, opt?: ChangeOptions<P>) {
    const cached = this.cache.get(item.identity);
    if (cached) {
      throw new Error('Item with that identity already exists');
    }
    const createdObj = await this.fetchCreate(this.converter.itemToApiObject(item), opt);
    const parent = opt ? opt.parent : undefined;
    const created = this.converter.apiObjectToItem(createdObj, parent);
    this.cache.set(created.identity, created);
    return created;
  }

  async delete(item: T, opt?: ChangeOptions<P>) {
    const cached = this.cache.get(item.identity);
    if (!cached) {
      throw new Error('item is not found in list');
    }
    await this.fetchDelete(this.converter.itemToApiObject(item), opt);
    this.cache.delete(cached.identity);
  }

  listFromCache() {
    return [...this.cache.values()];
  }

  getByIdentity(identity: string|number) {
    return this.cache.get(identity);
  }

  protected abstract fetchOne(condition?: GetCondition<P>): Promise<A>;
  protected abstract fetchList(condition?: GetCondition<P>): Promise<A[]>;
  protected abstract fetchSave(item: A, opt?: ChangeOptions<P>): Promise<void>;
  protected abstract fetchCreate(item: A, opt?: ChangeOptions<P>): Promise<A>;
  protected abstract fetchDelete(item: A, opt?: ChangeOptions<P>): Promise<void>;
}

export abstract class StubbedListApi<T extends Identity, P = undefined> extends ListItemApi<T, T, P> {
  protected constructor() {
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
