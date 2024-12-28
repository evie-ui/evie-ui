import { createContext } from "react";
import type { AnimatedProps } from "react-native-reanimated";

export const ProgressCircleContext = createContext<{
  animatedProps: AnimatedProps<{}>;
}>({
  animatedProps: {},
});

export const ProgressCircleSizeContext = createContext<{
  strokeWidth: number;
  radius: number;
  circum: number;
  size: number;
}>({
  strokeWidth: 0,
  radius: 0,
  circum: 0,
  size: 0,
});
