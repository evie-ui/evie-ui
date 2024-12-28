import { useComponentDefaults } from "../../../theme";
import { View } from "../../view";

type Props = React.ComponentProps<typeof View>;

export const SectionTitleContainer = (_props: Props) => {
  const props = useComponentDefaults(
    (t) => t.Section?.TitleContainer,
    _props,
    {}
  );

  return <View {...props}>{props.children}</View>;
};
