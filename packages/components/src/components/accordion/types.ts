import type { TextButton } from "../text-button";
import type { View } from "../view";

type AccordionRootPropsSingleCollapsible = {
  collapsible: true;
  onValueChange?: (value: string | undefined) => void;
};

type AccordionRootPropsSingleNonCollapsible = {
  collapsible?: false;
  onValueChange?: (value: string) => void;
};

type AccordionRootPropsSingle = {
  type: "single";
  value?: string;
} & (
  | AccordionRootPropsSingleCollapsible
  | AccordionRootPropsSingleNonCollapsible
);

type AccordionRootPropsMultiple = {
  type: "multiple";
  value?: string[];
  collapsible?: boolean;
  onValueChange?: (value: string[]) => void;
};

export type AccordionRootProps = React.PropsWithChildren &
  (AccordionRootPropsSingle | AccordionRootPropsMultiple);

export type AccordionItemProps = React.PropsWithChildren & { value: string };

export type AccordionTriggerProps = React.ComponentProps<typeof TextButton>;
export type AccordionContentProps = React.ComponentProps<typeof View>;
export type AccordionIndicatorProps = React.ComponentProps<typeof View>;
