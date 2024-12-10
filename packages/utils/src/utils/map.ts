"worklet";

import type { MapKeys, MapValues } from "@evie-ui/types";

function replacer(_key: unknown, value: unknown) {
  if (value instanceof Map) return Object.fromEntries(value.entries());
  return value;
}

// function reviver<V extends Record<string, unknown>>(_key: unknown, value: V) {
//   if (typeof value === "object" && value !== null) {
//     if (value.dataType === "Map")
//       return "value" in value ? Object.fromEntries(value.value as [unknown, unknown][]) : {};
//   }
//   return value;
// }

export const MapHelpers = {
  getFirstItem: <T extends Map<unknown, unknown>>(map: T) =>
    Array.from(map)[0] as [MapKeys<T>, MapValues<T>],
  getLastItem: <T extends Map<unknown, unknown>>(map: T) =>
    Array.from(map)[map.size - 1] as [MapKeys<T>, MapValues<T>],

  stringify: (value: unknown) => JSON.stringify(value, replacer),
  parse: <T extends Record<string, unknown>>(json = "{}") =>
    JSON.parse(json) as T,

  toObject<T extends Map<unknown, unknown>>(map: T) {
    return Object.fromEntries(map.entries()) as Record<
      MapKeys<T>,
      MapValues<T>
    >;
  },
};
