import { useComponentDefaults } from "../../theme";
import { Text } from "../text";

type Props = React.ComponentProps<typeof Text>;

export const Link = (_props: Props) => {
  const props = useComponentDefaults(_props, {
    color: "primary",
    fontWeight: "bold",
  });

  return <Text {...props} />;
};
