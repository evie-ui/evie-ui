"worklet";
import type { GenericObject } from "@evie-ui/types";
import deepmerge from "@fastify/deepmerge";

export const objectKeys = <T extends GenericObject>(obj: T) =>
  Object.keys(obj ?? {}) as Array<keyof T>;

export const objectValues = <T extends GenericObject>(obj: T) =>
  Object.values(obj ?? {}) as Array<T[keyof T]>;

export const objectEntries = <T>(obj: T) =>
  Object.entries(obj ?? {}) as Array<[keyof T, T[keyof T]]>;

export const isObjectWritableProperty = <T>(obj: T, key: keyof T) => {
  const desc = Object.getOwnPropertyDescriptor(obj, key) || {};
  return Boolean(desc.writable);
};

export const objectForEach = <T, K extends keyof T>(
  obj: NonNullable<T>,
  callback: (key: K, value: T[K]) => unknown
) => {
  for (const key of Object.keys(obj)) callback(key as K, obj[key as K]);
};

export const objectRemoveUndefinedValues = <T>(obj: T) => {
  for (const prop in obj) {
    if (!isObjectWritableProperty(obj, prop)) continue;

    if (typeof obj[prop] === "object") {
      obj[prop] = objectRemoveUndefinedValues(obj[prop]);
    } else if (obj[prop] === undefined) {
      delete obj[prop];
    }
  }

  return obj;
};

export const objectToMap = <T extends GenericObject>(obj: T) =>
  new Map(objectEntries(obj)) as Map<keyof T, T[keyof T]>;

export const objectDeepMerge = <T>(...objects: (T | Partial<T>)[]) =>
  deepmerge({ all: true })(...objects.map(objectRemoveUndefinedValues)) as T;

export const objectDeleteKeys = <T, K extends keyof T>(
  obj: T,
  ...keys: K[]
): Omit<T, K> =>
  keys.reduce(
    (acc, key) => {
      delete acc[key];
      return acc;
    },
    obj as Exclude<T, K>
  );

export const objectExtractKeys = <T extends GenericObject, K extends keyof T>(
  source: T,
  ...keys: K[]
): Pick<T, K> => {
  const returnValue = {} as Pick<T, K>;
  for (const k of keys) {
    if (k in source && source[k] !== undefined) returnValue[k] = source[k];
  }
  return returnValue;
};

export const objectExtractKeysAndDeleteFromOriginal = <
  T extends GenericObject,
  K extends keyof T,
>(
  source: T,
  ...keys: K[]
) => {
  const extractedObject = objectExtractKeys(source, ...keys);
  objectDeleteKeys(source, ...keys);
  return extractedObject;
};

// const objectsCompare = (item1: TODO, item2: TODO, key: string) => {
//   // Get the object type
//   const type1 = Object.prototype.toString.call(item1);
//   const type2 = Object.prototype.toString.call(item2);

//   // If type2 is undefined it has been removed
//   if (type2 === "[object Undefined]") {
//     diffs[key] = null;
//     return;
//   }

//   // If items are different types
//   if (type1 !== type2) {
//     diffs[key] = item2;
//     return;
//   }

//   // If an object, compare recursively
//   if (type1 === "[object Object]") {
//     const objDiff = objectsDiff(item1, item2);
//     if (Object.keys(objDiff).length > 0) {
//       diffs[key] = objDiff;
//     }
//     return;
//   }

//   // If an array, compare
//   if (type1 === "[object Array]") {
//     if (!ArrayHelpers.equals(item1, item2)) {
//       diffs[key] = item2;
//     }
//     return;
//   }

//   // Else if it's a function, convert to a string and compare
//   // Otherwise, just compare
//   if (type1 === "[object Function]") {
//     if (item1.toString() !== item2.toString()) {
//       diffs[key] = item2;
//     }
//   } else {
//     if (item1 !== item2) {
//       diffs[key] = item2;
//     }
//   }
// };

// const objectsDiff = <T extends object>(obj1: T, obj2: T) => {
//   /* Find the differences between two objects and push to a new object */

//   // Make sure an object to compare is provided
//   if (!obj2 || Object.prototype.toString.call(obj2) !== "[object Object]") return obj1;

//   const diffs: Record<string, TODO> = {};
//   let key: string;

//   // Loop through the first object
//   for (key in obj1) {
//     if (obj1.hasOwnProperty(key)) {
//       compare(obj1[key], obj2[key], key);
//     }
//   }

//   // Loop through the second object and find missing items
//   for (key in obj2) {
//     if (obj2.hasOwnProperty(key)) {
//       if (!obj1[key] && obj1[key] !== obj2[key]) {
//         diffs[key] = obj2[key];
//       }
//     }
//   }

//   // Return the object of differences
//   return diffs;
// };
