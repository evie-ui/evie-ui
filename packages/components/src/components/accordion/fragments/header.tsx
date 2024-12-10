import { Pressable } from "../../pressable";
import { useAccordion } from "../_hooks";

type Props = React.ComponentProps<typeof Pressable>;

export const AccordionHeaderFragment = (props: Props) => {
  const { toggle } = useAccordion();

  return (
    <Pressable {...props} onPress={toggle}>
      {props.children}
    </Pressable>
  );
};
