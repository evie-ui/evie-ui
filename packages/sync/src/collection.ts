import type { KeysMatchingType } from "@evie-ui/types";
import { ArrayHelpers } from "@evie-ui/utils/array";
import { database } from "./database";

type CollectionChanges<T> = {
  created: T[];
  updated: T[];
  deleted: string[];
};

type CollectionParams<T extends object> = {
  key: string;
  uniqueKey: KeysMatchingType<T, string>;
  pull: (...props: unknown[]) => Promise<CollectionChanges<T>>;
  push: (changes: CollectionChanges<T>) => Promise<void>;
};

type FunctionParams = { sync?: false };
type ReplaceParams = FunctionParams & {
  whenNoItems?: () => void;
};

export type InferCollectionType<T> = T extends Collection<infer T> ? T : never;

export class Collection<T extends object> {
  private _key: string;
  private _uniqueKey: KeysMatchingType<T, string>;
  private _items: T[] = [];
  private _pull: CollectionParams<T>["pull"];
  private _push: CollectionParams<T>["push"];
  private _listeners: ((item: T[]) => void)[] = [];

  constructor(params: CollectionParams<T>) {
    this._key = params.key;
    this._uniqueKey = params.uniqueKey;
    this._pull = params.pull;
    this._push = params.push;

    const value = database.getString(this._key);
    this._items = value ? JSON.parse(value) : [];
  }

  addListener(listener: (item: T[]) => void) {
    this._listeners.push(listener);

    return () => {
      this._listeners = this._listeners.filter((l) => l !== listener);
    };
  }

  pull = async (...props: unknown[]) => {
    const result = await this._pull(...props);
    const itemsWithoutDeleted = this._items.filter(
      (item) => !result.deleted.includes(item[this._uniqueKey] as string)
    );

    const items = [
      ...itemsWithoutDeleted,
      ...ArrayHelpers.join(itemsWithoutDeleted, result.updated),
      ...result.created,
    ];

    this._items = items;
    this._saveAndNotifyListeners();
  };

  private async push(changes: CollectionChanges<T>) {
    await this._push(changes);
  }

  private _saveAndNotifyListeners = () => {
    database.set(this._key, JSON.stringify(this._items));
    for (const listener of this._listeners) listener(this._items);
  };

  get value() {
    return this._items;
  }

  set = (v: T[], props?: FunctionParams) => {
    this._items = [...v];
    this._saveAndNotifyListeners();
  };

  append = (v: T[], props?: FunctionParams) => {
    this._items = [...this._items, ...v];
    this._saveAndNotifyListeners();
  };

  prepend = (v: T[], props?: FunctionParams) => {
    this._items = [...v, ...this._items];
    this._saveAndNotifyListeners();
  };

  removeAt = (i: number, props?: FunctionParams) => {
    this._items = [...this._items.filter((_, index) => index !== i)];
    this._saveAndNotifyListeners();
  };

  replaceAt = (i: number, v: T, props?: FunctionParams) => {
    this._items[i] = v;
    this._items = [...this._items];
    this._saveAndNotifyListeners();
  };

  move = (from: number, to: number, props?: FunctionParams) => {
    const item = this._items[from];
    this._items.splice(from, 1);
    this._items.splice(to, 0, item);
    this._items = [...this._items];
    this._saveAndNotifyListeners();
  };

  insertAt = (i: number, v: T, props?: FunctionParams) => {
    this._items.splice(i, 0, v);
    this._items = [...this._items];
    this._saveAndNotifyListeners();
  };

  remove = (cb: (v: T) => unknown, props?: FunctionParams) => {
    this._items = [...this._items.filter((v) => !cb(v))];
    this._saveAndNotifyListeners();
  };

  replace = (
    cb: (v: T) => unknown,
    v: (item: T) => T,
    props?: ReplaceParams
  ) => {
    const indexes = this._items
      .map((_, index) => index)
      .filter((index) => cb(this._items[index]));
    for (const index of indexes) this._items[index] = v(this._items[index]);
    this._items = [...this._items];
    this._saveAndNotifyListeners();
    if (indexes.length === 0) props?.whenNoItems?.();
  };

  clear = (props?: FunctionParams) => {
    this._items = [];
    this._saveAndNotifyListeners();
  };
}
