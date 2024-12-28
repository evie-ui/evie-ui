import { useComponentDefaults } from "../../theme";
import { Text } from "../text";

type Props = React.ComponentProps<typeof Text>;

export const Link = (_props: Props) => {
  const props = useComponentDefaults((t) => t.Link, _props);

  return <Text {...props} />;
};
