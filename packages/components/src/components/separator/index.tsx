import { useComponentDefaults } from "../../theme";
import { View } from "../view";

type Props = React.ComponentProps<typeof View> & {
  orientation?: "horizontal" | "vertical";
};

export const Separator = (_props: Props) => {
  const props = useComponentDefaults(_props, {
    bgColor: "outline",
    orientation: "horizontal",
  });

  const style = props.orientation === "horizontal" ? { h: 1, w: "100%" } : { w: 1, h: "100%" };

  return <View {...style} {...props} />;
};
