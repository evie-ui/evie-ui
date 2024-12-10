import { CollapsibleContentFragment } from "./fragments/content";
import { CollapsibleHeaderFragment } from "./fragments/header";
import { CollapsibleIndicatorFragment } from "./fragments/indicator";
import { CollapsibleRootFragment } from "./fragments/root";

export const Collapsible = {
  Root: CollapsibleRootFragment,
  Header: CollapsibleHeaderFragment,
  Content: CollapsibleContentFragment,
  Indicator: CollapsibleIndicatorFragment,
};

export * from "./_hooks";
