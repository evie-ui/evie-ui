import { useComponentDefaults } from "../../../theme";
import { Text } from "../../text";

type Props = React.ComponentProps<typeof Text>;

export const SectionTitle = (_props: Props) => {
  const props = useComponentDefaults(_props, {
    fontWeight: "bold",
    fontSize: "title",
    fontFamily: "title",
  });

  return <Text {...props}>{props.children}</Text>;
};
