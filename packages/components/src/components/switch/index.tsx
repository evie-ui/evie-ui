import Animated, { interpolate, interpolateColor, useAnimatedStyle, withTiming } from "react-native-reanimated";
import { useComponentDefaults, useTheme } from "../../theme";
import { Pressable } from "../pressable";
import { View } from "../view";

type Props = React.ComponentProps<typeof View> & {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
};

const AnimatedView = Animated.createAnimatedComponent(View);
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const HEIGHT = 32;
const ASPECT_RATIO = 1.75;

export const Switch = (_props: Props) => {
  const { theme } = useTheme();

  const props = useComponentDefaults(_props, {
    bgColor: "surface",
    color: "primary",
    overflow: "visible",
  });

  const padding = theme.getSpacing("xs") ?? 0;

  const colors = {
    color1: theme.getColor(props.bgColor)!,
    color2: theme.getColor(props.color)!,
  };

  const trackAnimatedStyle = useAnimatedStyle(() => {
    const color = interpolateColor(Number(props.checked), [0, 1], [colors.color1, colors.color2]);
    const colorValue = withTiming(color, { duration: 300 });
    return { backgroundColor: colorValue };
  });

  const thumbAnimatedStyle = useAnimatedStyle(() => {
    const moveValue = interpolate(Number(props.checked), [0, 1], [0, (HEIGHT * ASPECT_RATIO) / 2 - padding]);
    const translateValue = withTiming(moveValue, { duration: 300 });

    const color = interpolateColor(Number(props.checked), [0, 1], [colors.color2, colors.color1]);
    const colorValue = withTiming(color, { duration: 300 });

    return { backgroundColor: colorValue, transform: [{ translateX: translateValue }] };
  });

  return (
    <AnimatedPressable
      h={HEIGHT}
      p={padding}
      rounded="full"
      justifyContent="center"
      bgColor={props.bgColor}
      style={trackAnimatedStyle}
      aspectRatio={ASPECT_RATIO}
      onPress={() => props.onCheckedChange(!props.checked)}
    >
      <AnimatedView h="100%" rounded="full" aspectRatio={1} bgColor="onPrimary" style={thumbAnimatedStyle} />
    </AnimatedPressable>
  );
};
