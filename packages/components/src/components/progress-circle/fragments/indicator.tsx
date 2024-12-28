import { useContext } from "react";
import Animated from "react-native-reanimated";
import { Circle } from "react-native-svg";
import { useComponentDefaults, useTheme } from "../../../theme";
import { ProgressCircleContext, ProgressCircleSizeContext } from "../_context";
import type { ProgressCircleIndicatorProps } from "../_types";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export const ProgressCircleIndicator = (
  _props: ProgressCircleIndicatorProps
) => {
  const { theme } = useTheme();
  const { animatedProps } = useContext(ProgressCircleContext);
  const { size, circum, radius, strokeWidth } = useContext(
    ProgressCircleSizeContext
  );
  const props = useComponentDefaults(
    (t) => t.ProgressCircle?.Indicator,
    _props
  );

  return (
    <AnimatedCircle
      r={radius}
      fill="none"
      cx={size / 2}
      cy={size / 2}
      strokeLinecap="round"
      strokeWidth={strokeWidth}
      stroke={theme.getColor(props.color)}
      animatedProps={animatedProps}
      // strokeDasharray={[circum, circum]}
      strokeDasharray={`${circum} ${circum}`}
      transform={`rotate(-90, ${size / 2}, ${size / 2})`}
    />
  );
};
