import { createContext, use, useState } from "react";
import { type LayoutRectangle } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useComponentDefaults } from "../../theme";
import { Pressable } from "../pressable";
import { View } from "../view";
import type { SwitchIndicatorProps, SwitchRootProps } from "./types";

const AnimatedView = Animated.createAnimatedComponent(View);
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const SwitchContext = createContext<{
  checked: boolean;
  parentLayout: LayoutRectangle;
}>({
  checked: false,
  parentLayout: {
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  },
});

const DURATION = 300;

const SwitchRoot = ({
  checked = false,
  children,
  ..._props
}: SwitchRootProps) => {
  const props = useComponentDefaults(
    (t) => t.Switch?.({ state: checked ? "checked" : "unchecked" }).Root,
    _props
  );

  const [parentLayout, setParentLayout] = useState<LayoutRectangle>({
    height: 0,
    width: 0,
    x: 0,
    y: 0,
  });

  return (
    <AnimatedPressable
      {...props}
      // style={trackAnimatedStyle}
      onPress={() => props.onCheckedChange(!checked)}
      onLayout={(ev) => {
        setParentLayout(ev.nativeEvent.layout);
        props.onLayout?.(ev);
      }}
    >
      <SwitchContext value={{ checked, parentLayout: parentLayout }}>
        {children}
      </SwitchContext>
    </AnimatedPressable>
  );
};

const SwitchIndicator = (_props: SwitchIndicatorProps) => {
  const { checked, parentLayout } = use(SwitchContext);
  const props = useComponentDefaults(
    (t) => t.Switch?.({ state: checked ? "checked" : "unchecked" }).Indicator,
    _props
  );
  const [layout, setLayout] = useState<LayoutRectangle>({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });

  const thumbAnimatedStyle = useAnimatedStyle(() => {
    const moveValue = interpolate(
      Number(checked),
      [0, 1],
      [0, parentLayout.width - parentLayout.height - layout.x / 2]
    );
    const translateValue = withTiming(moveValue, { duration: DURATION });

    return {
      transform: [{ translateX: translateValue }],
    };
  });

  return (
    <AnimatedView
      {...props}
      onLayout={(ev) => {
        setLayout(ev.nativeEvent.layout);
        props.onLayout?.(ev);
      }}
      style={[thumbAnimatedStyle, props.style]}
    />
  );
};

export const Switch = {
  Root: SwitchRoot,
  Indicator: SwitchIndicator,
};

// export const Switch1 = (_props: Props) => {
//   const { theme } = useTheme();

//   const props = useComponentDefaults(() => ({}), _props, {
//     bgColor: "surface",
//     color: "primary",
//     overflow: "visible",
//   });

//   const padding = theme.getSpacing("xs") ?? 0;

//   const colors = {
//     color1: theme.getColor(props.bgColor)!,
//     color2: theme.getColor(props.color)!,
//   };

//   const trackAnimatedStyle = useAnimatedStyle(() => {
//     const color = interpolateColor(
//       Number(props.checked),
//       [0, 1],
//       [colors.color1, colors.color2]
//     );
//     const colorValue = withTiming(color, { duration: 300 });
//     return { backgroundColor: colorValue };
//   });

//   const thumbAnimatedStyle = useAnimatedStyle(() => {
//     const moveValue = interpolate(
//       Number(props.checked),
//       [0, 1],
//       [0, (HEIGHT * ASPECT_RATIO) / 2 - padding]
//     );
//     const translateValue = withTiming(moveValue, { duration: 300 });

//     const color = interpolateColor(
//       Number(props.checked),
//       [0, 1],
//       [colors.color2, colors.color1]
//     );
//     const colorValue = withTiming(color, { duration: 300 });

//     return {
//       backgroundColor: colorValue,
//       transform: [{ translateX: translateValue }],
//     };
//   });

//   return (
//     <AnimatedView
//       h="100%"
//       rounded="full"
//       aspectRatio={1}
//       bgColor="onPrimary"
//       style={thumbAnimatedStyle}
//     />
//   );
// };
