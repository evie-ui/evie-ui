import { useEffect } from "react";
import { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { ProgressBarBase } from "../_base";
import type { DeterminateProps } from "../_types";

export const Determinate = (props: DeterminateProps) => {
  const progressWidth = useSharedValue(0);

  useEffect(() => {
    progressWidth.value = withTiming(props.progress);
  }, [props.progress, progressWidth]);

  const progressStyle = useAnimatedStyle(() => ({ width: `${progressWidth.value}%` }));

  return <ProgressBarBase {...props} style={progressStyle} />;
};
