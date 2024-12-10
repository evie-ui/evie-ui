import { AccordionContentFragment } from "./fragments/content";
import { AccordionHeaderFragment } from "./fragments/header";
import { AccordionIndicatorFragment } from "./fragments/indicator";
import { AccordionRootFragment } from "./fragments/root";

export const Accordion = {
  Root: AccordionRootFragment,
  Header: AccordionHeaderFragment,
  Content: AccordionContentFragment,
  Indicator: AccordionIndicatorFragment,
};

export * from "./_hooks";
