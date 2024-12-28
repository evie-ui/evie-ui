import { useComponentDefaults } from "../../../theme";
import { Text } from "../../text";

type Props = React.ComponentProps<typeof Text>;

export const ModalTitle = (_props: Props) => {
  const props = useComponentDefaults((t) => t.Modal?.Title, _props);

  return <Text {...props} />;
};
