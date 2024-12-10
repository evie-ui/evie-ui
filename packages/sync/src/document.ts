import { database } from "./database";

type DocumentParams<T extends object> = {
  key: string;
  pull: (...props: unknown[]) => Promise<T>;
  push: (local: T | undefined, ...props: unknown[]) => Promise<void>;
};

type DeleteParams = { sync?: false };
type UpdateParams = { sync?: false };

export type InferDocumentType<T> = T extends Document<infer T> ? T : never;

const getCanSyncKey = (key: string) => `${key}:canSync`;

export class Document<T extends object> {
  private _key: string;
  private _item: T | undefined = undefined;
  private _pull: DocumentParams<T>["pull"];
  private _push: DocumentParams<T>["push"];
  private _canSync: boolean;
  private _listeners: ((item: T | undefined) => void)[] = [];

  constructor(params: DocumentParams<T>) {
    this._key = params.key;
    this._pull = params.pull;
    this._push = params.push;

    const value = database.getString(this._key);
    this._item = value ? JSON.parse(value) : undefined;
    this._canSync = database.getBoolean(getCanSyncKey(this._key)) ?? true;
  }

  get canSync() {
    return this._canSync;
  }

  set canSync(value) {
    this._canSync = value;
    database.set(getCanSyncKey(this._key), value);
  }

  get key() {
    return this._key;
  }

  addListener(listener: (item: T | undefined) => void) {
    this._listeners.push(listener);

    return () => {
      this._listeners = this._listeners.filter((l) => l !== listener);
    };
  }

  _notifyListeners = () => {
    for (const listener of this._listeners) listener(this._item);
  };

  pull = async (...props: unknown[]) => {
    this._item = await this._pull(...props);
    database.set(this._key, JSON.stringify(this._item));
    this._notifyListeners();
  };

  push = async (...props: unknown[]) => {
    if (!this._canSync) return;
    await this._push(this._item, ...props);
  };

  get value() {
    return this._item;
  }

  update = (fn: (current: T | undefined) => T, props?: UpdateParams) => {
    this.canSync = props?.sync !== false;
    this._item = fn(this._item);
    database.set(this._key, JSON.stringify(this._item));
    this._notifyListeners();
  };

  delete = (props?: DeleteParams) => {
    this.canSync = props?.sync !== false;
    this._item = undefined;
    database.delete(this._key);
    this._notifyListeners();
  };
}
