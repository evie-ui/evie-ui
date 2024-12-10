import { useContext } from "react";
import { useComponentDefaults } from "../../../theme";
import { Text } from "../../text";
import { FormControlContext } from "../_context";

type Props = React.ComponentProps<typeof Text>;

export const FormControlHelper = ({ children, ..._props }: Props) => {
  const { invalid } = useContext(FormControlContext);

  const props = useComponentDefaults(_props, {
    fontSize: "caption",
    fontWeight: "semibold",
    color: "onBackgroundVariant",
    textAlign: "right",
    mt: "xs",
    mr: "sm",
  });

  if (invalid) return null;

  return <Text {...props}>{children}</Text>;
};
