export type MonthYearDate = { month: number; year: number };
export type DayMonthYearDate = MonthYearDate & { day: number };
export type HourMinuteDate = { hour: number; minute: number };
export type DayMonthYearHourMinuteDate = DayMonthYearDate & HourMinuteDate;

export type Status = "success" | "warning" | "danger";

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export function isNonNullable<TValue>(
  value: TValue | undefined | null
): value is TValue {
  return value !== null && value !== undefined;
}

export type GenericObject = { [x: string]: unknown };

export type MapKeys<T extends Map<unknown, unknown>> =
  T extends Map<infer I, unknown> ? (I extends string ? I : never) : never;
export type MapValues<T extends Map<unknown, unknown>> =
  T extends Map<unknown, infer I> ? I : never;

export type LiteralUnion<LiteralType extends string> =
  | LiteralType
  | Record<never, never>;

export type WithRequiredProperty<Type, Key extends keyof Type> = Type &
  Required<{ [Property in Key]: Type[Property] }>;

export type WithNonNullableProperty<Type, Key extends keyof Type> = Type & {
  [Property in Key]: NonNullable<Type[Property]>;
};

export type Satisfies<T extends U, U> = T;

export type Progress = number;

export type Percentage = `${number}%`;

export type NullOrUndefined = null | undefined;

export type TODO = any;

export type VoidFunction = () => void;

export type ArrayAtLeastOne<T> = [T, ...T[]];

export type ArrayAtLeastTwo<T> = [T, T, ...T[]];

/* To get only specific keys from a class */
type Constructor<T = any> = new (...args: any[]) => T;
type Class<T = any> = InstanceType<Constructor<T>>;
export type GetClassProperties<C extends Class, K extends keyof C> = Pick<C, K>;

/* To allow only a specific quantity of keys in an object */
export type RequireAtLeastOne<
  T extends Record<string, unknown>,
  Keys extends keyof T = keyof T,
> = Pick<T, Exclude<keyof T, Keys>> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
  }[Keys];

export type RequireOnlyOne<
  T extends Record<string, unknown>,
  Keys extends keyof T = keyof T,
> = Pick<T, Exclude<keyof T, Keys>> &
  {
    [K in Keys]-?: Required<Pick<T, K>> &
      Partial<Record<Exclude<Keys, K>, undefined>>;
  }[Keys];

export type Exact<Type> = Type;

export type SnakeToCamelCase<S extends string> =
  S extends `${infer P1}_${infer P2}${infer P3}`
    ? `${Lowercase<P1>}${Uppercase<P2>}${SnakeToCamelCase<P3>}`
    : S;

export type KeysToCamelCase<T> = {
  [K in keyof T as SnakeToCamelCase<string & K>]: T[K];
};

export type CamelToSnakeCase<S extends string> =
  S extends `${infer T}${infer U}`
    ? `${T extends Capitalize<T> ? "_" : ""}${Lowercase<T>}${CamelToSnakeCase<U>}`
    : S;

export type KeysToSnakeCase<T> = {
  [K in keyof T as CamelToSnakeCase<string & K>]: T[K];
};

export type ObjectKeyTypes = string | number | symbol;

export type CamelizeString<ObjectProperty extends string> =
  ObjectProperty extends `${infer F}_${infer R}`
    ? `${F}${Capitalize<CamelizeString<R>>}`
    : ObjectProperty;

export type MMYYYY = `${number}/${number}`;
export type DDMMYYYY = `${number}/${MMYYYY}`;

export type KeysMatchingType<T extends object, V> = {
  [K in keyof T]-?: T[K] extends V ? K : never;
}[keyof T];

export const isNumber = (token: unknown): token is number => {
  return typeof token === "number" && !Number.isNaN(token);
};

export const isTemplateString = (
  token: unknown
): token is TemplateStringsArray => {
  return typeof token === "object" && "raw" in (token ?? {});
};

export const isNull = (token: unknown): token is null => token === null;

export const isUndefined = (token: unknown): token is undefined =>
  token === undefined;

export const isInvalid = (token: unknown): token is NullOrUndefined =>
  isUndefined(token) || isNull(token);

export const isPercentage = (token: unknown): token is Percentage =>
  typeof token === "string" ? token.endsWith("%") : false;
