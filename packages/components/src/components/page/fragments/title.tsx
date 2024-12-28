import { useComponentDefaults } from "../../../theme";
import { Text } from "../../text";

type Props = React.ComponentProps<typeof Text>;

export const PageTitle = (_props: Props) => {
  const props = useComponentDefaults((t) => t.Page?.Title, _props, {
    numberOfLines: 1,
    fontFamily: "title",
    fontSize: "page-title",
    fontWeight: "bold",
  });

  return <Text {...props} />;
};
