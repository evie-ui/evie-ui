import { useContext } from "react";
import { useComponentDefaults } from "../../../theme";
import { Text } from "../../text";
import { FormControlContext } from "../_context";

type Props = React.ComponentProps<typeof Text> & { name: string };

export const FormControlError = (_props: Props) => {
  const { invalid } = useContext(FormControlContext);

  const props = useComponentDefaults(_props, {
    fontSize: "caption",
    textAlign: "right",
    fontWeight: "bold",
    color: "error",
    mt: "xs",
    mr: "sm",
  });

  if (props.name !== invalid) return null;
  return <Text {...props}>{props.children}</Text>;
};
