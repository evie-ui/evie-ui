import { useComponentDefaults } from "../../../theme";
import { View } from "../../view";

type Props = React.ComponentProps<typeof View>;

export const SectionHeader = (_props: Props) => {
  const props = useComponentDefaults((t) => t.Section?.Header, _props, {
    gap: "md",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  });

  return <View {...props}>{props.children}</View>;
};
