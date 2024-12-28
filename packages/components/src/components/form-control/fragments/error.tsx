import { useContext } from "react";
import { useComponentDefaults } from "../../../theme";
import { Text } from "../../text";
import { FormControlContext } from "../_context";

type Props = React.ComponentProps<typeof Text> & { name: string };

export const FormControlError = (_props: Props) => {
  const { invalid } = useContext(FormControlContext);

  const props = useComponentDefaults((t) => t.FormControl?.Error, _props);

  if (props.name !== invalid) return null;
  return <Text {...props}>{props.children}</Text>;
};
