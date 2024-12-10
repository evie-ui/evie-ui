import { useComponentDefaults } from "../../../theme";
import { Text } from "../../text";

type Props = React.ComponentProps<typeof Text>;

export const CardTitle = (_props: Props) => {
  const props = useComponentDefaults(_props, { fontWeight: "bold", fontSize: "section-title" });

  return <Text {...props} />;
};
