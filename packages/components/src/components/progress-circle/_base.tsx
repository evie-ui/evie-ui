import type { WithRequiredProperty } from "@evie-ui/types";
import { forwardRef } from "react";
import type { AnimatedProps } from "react-native-reanimated";
import Animated from "react-native-reanimated";
import { Circle, Svg } from "react-native-svg";
import { useTheme } from "../../theme";
import type { DeterminateProps, IndeterminateProps } from "./_types";

type Props = IndeterminateProps | DeterminateProps;

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export const ProgressCircleBase = forwardRef<
  Circle,
  WithRequiredProperty<Props, "size"> & { animatedProps?: AnimatedProps<React.ComponentProps<typeof Circle>> }
>((props, ref) => {
  const { theme } = useTheme();

  const strokeWidth = props.size * 0.075;
  const radius = (props.size - strokeWidth) / 2;
  const circum = radius * 2 * Math.PI;

  return (
    <Svg width={props.size} height={props.size}>
      <Circle
        r={radius}
        fill="none"
        cx={props.size / 2}
        cy={props.size / 2}
        strokeWidth={strokeWidth}
        stroke={theme.getColor(props.bgColor)}
      />

      <AnimatedCircle
        r={radius}
        fill="none"
        cx={props.size / 2}
        cy={props.size / 2}
        strokeLinecap="round"
        strokeWidth={strokeWidth}
        animatedProps={props.animatedProps}
        stroke={theme.getColor(props.color)}
        strokeDasharray={[circum, circum]}
        transform={`rotate(-90, ${props.size / 2}, ${props.size / 2})`}
      />
    </Svg>
  );
});
