import { type Hex, hexToRgbaString } from "@evie-ui/utils/color";
import { forwardRef } from "react";
import { StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  Easing,
  runOnJS,
  useSharedValue,
  withTiming,
  type WithTimingConfig,
} from "react-native-reanimated";
import { useTheme } from "../../theme";
import { ProgressCircle } from "../progress-circle";
import { View } from "../view";

type Ref = React.ComponentRef<typeof View>;
type Props = React.ComponentProps<typeof View> & {
  onPress?: () => void;
  onLongPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  disabled?: boolean;
  loading?: boolean;
  scaleDownAnimation?: "soft" | "hard" | "none";
};

const ANIMATION_CONFIG: WithTimingConfig = {
  easing: Easing.inOut(Easing.ease),
  duration: 150,
};

const AnimatedView = Animated.createAnimatedComponent(View);

export const Pressable = forwardRef<Ref, Props>((props, ref) => {
  const {
    scaleDownAnimation = "soft",
    onPress,
    onLongPress,
    onPressIn,
    onPressOut,
    children,
    loading,
    disabled,
    overflow = "hidden",
    ...rest
  } = props;
  const scaleDownAnimationValue = useSharedValue(1);
  const { theme } = useTheme();
  const height = useSharedValue(0);

  const longPressHandler = Gesture.LongPress()
    .enabled(!disabled && !loading)
    .onStart(() => {
      onLongPress && runOnJS(onLongPress)();
      onPressIn && runOnJS(onPressIn)();
    })
    .onEnd(() => {
      onPressOut && runOnJS(onPressOut)();
    })
    .onTouchesCancelled(() => {
      onPressOut && runOnJS(onPressOut)();
    });

  const pressHandler = Gesture.Tap()
    .enabled(!disabled && !loading)
    .onBegin(() => {
      const scales = { soft: 0.975, hard: 0.875, none: 1 };
      const scaleDown = scales[scaleDownAnimation];
      scaleDownAnimationValue.value = withTiming(scaleDown, ANIMATION_CONFIG);
    })
    .onEnd(() => {
      scaleDownAnimationValue.value = withTiming(1, ANIMATION_CONFIG);
      onPress && runOnJS(onPress)();
    })
    .onTouchesCancelled((_) => {
      scaleDownAnimationValue.value = withTiming(1, ANIMATION_CONFIG);
    });

  const multipleGestures = Gesture.Exclusive(pressHandler, longPressHandler);

  return (
    <GestureDetector gesture={multipleGestures}>
      <AnimatedView
        {...rest}
        ref={ref}
        opacity={disabled && !loading ? 0.33 : rest.opacity}
        pointerEvents={disabled || loading ? "none" : rest.pointerEvents}
        style={[
          { transform: [{ scale: scaleDownAnimationValue }] },
          rest.style,
        ]}
        onLayout={(event) => {
          height.value = event.nativeEvent.layout.height;
          props.onLayout?.(event);
        }}
      >
        {children}

        {loading && (
          <View
            {...StyleSheet.absoluteFillObject}
            alignItems="center"
            justifyContent="center"
          >
            <ProgressCircle.Root
              indeterminate
              size={height.value * 0.5}
              color={hexToRgbaString(theme.getColor(props.color) as Hex, 0.1)}
            >
              <ProgressCircle.Indicator color={props.color} />
            </ProgressCircle.Root>
          </View>
        )}
      </AnimatedView>
    </GestureDetector>
  );
});
