import { useComponentDefaults } from "../../../theme";
import { Text } from "../../text";

type Props = React.ComponentProps<typeof Text>;

export const CardSubtitle = (_props: Props) => {
  const props = useComponentDefaults((t) => t.Card?.Subtitle, _props);

  return <Text {...props} />;
};
