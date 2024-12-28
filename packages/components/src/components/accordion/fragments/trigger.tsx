import { useContext } from "react";
import { useComponentDefaults } from "../../../theme";
import { TextButton } from "../../text-button";
import { AccordionItemContext } from "../_context";
import type { AccordionTriggerProps } from "../types";

export const AccordionTrigger = (_props: AccordionTriggerProps) => {
  const { toggle } = useContext(AccordionItemContext);
  const props = useComponentDefaults((t) => t.Accordion?.Trigger, _props);

  return (
    <TextButton {...props} onPress={toggle}>
      {props.children}
    </TextButton>
  );
};
