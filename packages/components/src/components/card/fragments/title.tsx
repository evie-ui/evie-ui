import { useComponentDefaults } from "../../../theme";
import { Text } from "../../text";

type Props = React.ComponentProps<typeof Text>;

export const CardTitle = (_props: Props) => {
  const props = useComponentDefaults((t) => t.Card?.Title, _props);

  return <Text {...props} />;
};
