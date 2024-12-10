import { useComponentDefaults } from "../../../theme";
import { View } from "../../view";

type Props = React.ComponentProps<typeof View>;

export const SectionTitleSubtitleContainer = (_props: Props) => {
  const props = useComponentDefaults(_props, {
    
  });

  return <View {...props}>{props.children}</View>;
};
