import { useEffect } from "react";
import { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";
import { ProgressBarBase } from "../_base";
import type { IndeterminateProps } from "../_types";

const DURATION = 800;

export const Indeterminate = (props: IndeterminateProps) => {
  const translateX = useSharedValue(-100);

  useEffect(() => {
    translateX.value = withRepeat(withTiming(100, { duration: DURATION }), -1);
  }, [translateX]);

  const progressStyle = useAnimatedStyle(() => ({ left: `${translateX.value}%` }));

  return <ProgressBarBase {...props} style={progressStyle} />;
};
