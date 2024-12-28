import { useComponentDefaults } from "../../../theme";
import { Text } from "../../text";

type Props = React.ComponentProps<typeof Text>;

export const SectionTitle = (_props: Props) => {
  const props = useComponentDefaults((t) => t.Section?.Title, _props, {
    fontWeight: "bold",
    fontSize: "section-title",
    fontFamily: "title",
  });

  return <Text {...props}>{props.children}</Text>;
};
