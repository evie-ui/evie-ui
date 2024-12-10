import type { Progress } from "@evie-ui/types";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  clamp,
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  type WithSpringConfig,
} from "react-native-reanimated";
import { ProgressBar } from "../../components/progress-bar";
import type { DeterminateProps } from "../../components/progress-bar/_types";
import { View } from "../../components/view";

const DefaultSpringConfig: WithSpringConfig = {
  mass: 1,
  damping: 15,
  stiffness: 180,
};

type Props = Omit<DeterminateProps, "indeterminate"> & {
  disabled?: boolean;
  onChange?: (progress: Progress) => void;
};

const AnimatedView = Animated.createAnimatedComponent(View);

export const Slider = (props: Props) => {
  const startXDistance = useSharedValue(0);
  const currentXDistance = useSharedValue(0);
  const startingWidth = useSharedValue(props.progress);
  const sliderState = useSharedValue(props.progress);

  // These are the min and max points along the x-axis
  const MIN_X = 0;
  const MAX_X = 100;

  const panGesture = Gesture.Pan()
    .enabled(!props.disabled)
    .onBegin((event) => {
      startXDistance.value = event.x;
    })
    .onChange((event) => {
      currentXDistance.value = event.x;

      const interpolatedValue = interpolate(
        currentXDistance.value,
        [MIN_X, startXDistance.value, MAX_X],
        [0, startingWidth.value, 100],
        Extrapolation.CLAMP,
      );

      const computedValue = Math.round(interpolatedValue) as Progress;
      sliderState.value = withSpring(computedValue, DefaultSpringConfig);
    })
    .onFinalize(() => {
      props.onChange && runOnJS(props.onChange)(sliderState.value);
      startingWidth.value = sliderState.value;
    });

  const containerStyle = useAnimatedStyle(() => {
    return { left: `${clamp(sliderState.value, 0, 100)}%` };
  });

  console.log(startXDistance.value, currentXDistance.value, startingWidth.value, sliderState.value);

  return (
    <GestureDetector gesture={panGesture}>
      <View>
        <ProgressBar.Root h={3} progress={props.progress}>
          <ProgressBar.Progress bgColor="onBlue" />
        </ProgressBar.Root>

        {/* <AnimatedView
          h={props.h}
          w={props.h}
          bgColor={props.bgColor}
          rounded="full"
          {...StyleSheet.absoluteFillObject}
          style={containerStyle}
        /> */}
      </View>
    </GestureDetector>
  );
};
