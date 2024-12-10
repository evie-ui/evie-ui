"worklet";
import type { NullOrUndefined, Percentage } from "@evie-ui/types";

export const isNumber = (token: unknown): token is number => {
  "worklet";
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
