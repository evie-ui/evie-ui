import type { WithRequiredProperty } from "@evie-ui/types";
import { forwardRef, useEffect } from "react";
import { useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";
import { ProgressCircleBase } from "../_base";
import type { DeterminateProps } from "../_types";

type Ref = React.ComponentRef<typeof ProgressCircleBase>;

export const Determinate = forwardRef<Ref, WithRequiredProperty<DeterminateProps, "size">>((props, ref) => {
  const progressWidth = useSharedValue(0);

  const strokeWidth = props.size * 0.075;
  const radius = (props.size - strokeWidth) / 2;

  useEffect(() => {
    progressWidth.value = withTiming(props.progress);
  }, [props.progress, progressWidth]);

  const progressProps = useAnimatedProps(() => ({
    strokeDashoffset: radius * Math.PI * 2 * (1 - progressWidth.value / 100),
  }));

  return <ProgressCircleBase {...props} animatedProps={progressProps} ref={ref} />;
});
