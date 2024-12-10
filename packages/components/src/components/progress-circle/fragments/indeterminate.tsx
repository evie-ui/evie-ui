import type { WithRequiredProperty } from "@evie-ui/types";
import { forwardRef, useEffect } from "react";
import { interpolate, useAnimatedProps, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";
import { ProgressCircleBase } from "../_base";
import type { IndeterminateProps } from "../_types";

const DURATION = 800;

type Ref = React.ComponentRef<typeof ProgressCircleBase>;

export const Indeterminate = forwardRef<Ref, WithRequiredProperty<IndeterminateProps, "size">>((props, ref) => {
  const rotation = useSharedValue(0);

  const strokeWidth = props.size * 0.075;
  const radius = (props.size - strokeWidth) / 2;

  useEffect(() => {
    rotation.value = withRepeat(withTiming(1, { duration: DURATION }), -1);
  }, [rotation]);

  const circleAnimatedProps = useAnimatedProps(() => {
    const rotate = interpolate(rotation.value, [0, 1], [0, 360]);

    return {
      strokeDashoffset: radius * Math.PI * 2 * 0.9,
      transform: [
        { translateX: props.size / 2 },
        { translateY: props.size / 2 },
        { rotate: `${rotate}deg` },
        { translateX: -(props.size / 2) },
        { translateY: -(props.size / 2) },
      ],
    };
  });

  return <ProgressCircleBase {...props} animatedProps={circleAnimatedProps} ref={ref} />;
});
