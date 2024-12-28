import { useComponentDefaults } from "../../../theme";
import { AccordionRootContext } from "../_context";
import type { AccordionRootProps } from "../types";

export const AccordionRoot = (_props: AccordionRootProps) => {
  const props = useComponentDefaults<AccordionRootProps>(
    (t) => t.Accordion?.Root,
    _props
  );

  return (
    <AccordionRootContext
      value={{
        type: props.type,
        onValueChange: props.onValueChange,
        collapsible: props.collapsible,
        value: !props.value
          ? []
          : props.type === "single"
            ? [props.value]
            : props.value,
      }}
    >
      {props.children}
    </AccordionRootContext>
  );
};
