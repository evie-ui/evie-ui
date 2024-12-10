import { deepmerge } from "@fastify/deepmerge";

export const ArrayHelpers = {
  createPlaceholder(length = 0) {
    return Array(length)
      .fill(null)
      .map((_, index) => index + 1);
  },

  chunk<T>(array: Array<T>, config: { size: number; fillRemaining?: boolean } = { size: array.length }) {
    const chunkedArray = array.reduce(
      (accumulator, currentValue, index) => {
        const innerIndex = Math.floor(index / config.size);
        if (!accumulator[innerIndex]) accumulator[innerIndex] = [];
        accumulator[innerIndex].push(currentValue);
        return accumulator;
      },
      [] as Array<Array<T | null>>,
    );

    return config.fillRemaining
      ? chunkedArray.map((chunk) => chunk.concat(this.createPlaceholder(config.size - chunk.length).map(() => null)))
      : chunkedArray;
  },

  flatten<T extends { children?: T[] }>(node: T[]): T[] {
    return node.reduce((acc, item) => {
      if (Array.isArray(item.children))
        return acc.concat({ ...item, children: undefined }).concat(this.flatten(item.children));
      return acc.concat(item);
    }, [] as T[]);
  },

  equals<T>(array1: Array<T>, array2: Array<T>) {
    if (array1.length !== array2.length) return false;

    const containsAll = <T extends Array<unknown>>(arr1: T, arr2: T) =>
      arr2.every((arr2Item) => arr1.includes(arr2Item));

    return containsAll(array1, array2) && containsAll(array2, array1);
  },

  intersection<T extends Array<unknown>>(array1: T, array2: T) {
    return array1.filter((item) => array2.includes(item));
  },

  union<T extends Array<unknown>>(array1: T, array2: T) {
    return [...new Set([...array1, ...array2])] as T;
  },

  difference<T extends Array<unknown>>(array1: T, array2: T) {
    return array1.filter((item) => !array2.includes(item)) as T;
  },

  symmetricalDifference<T extends Array<unknown>>(array1: T, array2: T) {
    return [...this.difference(array1, array2), ...this.difference(array2, array1)] as T;
  },

  unique<T extends Array<unknown>>(array: T) {
    return [...new Set(array)] as T;
  },

  join<T>(array1: Array<T>, array2: Array<T>) {
    return deepmerge()(array1, array2);
  },

  filter<T>(array: Array<T>, predicate: (item: T) => unknown) {
    return array.reduce(
      (acc, item) => {
        if (predicate(item)) {
          acc.in.push(item);
        } else {
          acc.out.push(item);
        }

        return acc;
      },
      { in: [], out: [] } as { in: T[]; out: T[] },
    );
  },
};
