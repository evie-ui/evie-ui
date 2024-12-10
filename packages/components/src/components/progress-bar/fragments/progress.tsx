import { useContext } from "react";
import Animated from "react-native-reanimated";
import { useComponentDefaults } from "../../../theme";
import { View } from "../../view";
import { ProgressBarContext } from "../_context";

type Props = React.ComponentProps<typeof View>;

const AnimatedView = Animated.createAnimatedComponent(View);

export const ProgressBarProgress = (_props: Props) => {
  const { style } = useContext(ProgressBarContext);

  const props = useComponentDefaults(_props, {
    h: "100%",
    rounded: "full",
    bgColor: "primary",
  });

  // @ts-expect-error
  return <AnimatedView {...props} style={style} />;
};
