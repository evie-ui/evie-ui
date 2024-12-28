import { createContext } from "react";
import type { SharedValue } from "react-native-reanimated";
import type { AccordionRootProps } from "./types";

export const AccordionRootContext = createContext<{
  type: AccordionRootProps["type"];
  value: string[];
  collapsible?: AccordionRootProps["collapsible"];
  onValueChange: AccordionRootProps["onValueChange"];
}>({
  type: "single",
  value: [],
  collapsible: false,
  onValueChange: () => {},
});

export const AccordionItemContext = createContext<{
  contentHeight: SharedValue<number>;
  progress: SharedValue<number>;
  toggle: () => void;
}>({} as any);
