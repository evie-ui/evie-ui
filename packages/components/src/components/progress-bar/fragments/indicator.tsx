import { useContext } from "react";
import Animated from "react-native-reanimated";
import { useComponentDefaults } from "../../../theme";
import { View } from "../../view";
import { ProgressBarContext } from "../_context";
import type { ProgressBarIndicatorProps } from "../_types";

const AnimatedView = Animated.createAnimatedComponent(View);

export const ProgressBarIndicator = (_props: ProgressBarIndicatorProps) => {
  const { style } = useContext(ProgressBarContext);
  const props = useComponentDefaults((t) => t.ProgressBar?.Indicator, _props);

  // @ts-expect-error
  return <AnimatedView bgColor={props.color} h="100%" style={style} />;
};
