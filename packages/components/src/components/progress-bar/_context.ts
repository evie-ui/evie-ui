import { createContext } from "react";
import type { AnimatedStyle } from "react-native-reanimated";

type Props = { style: AnimatedStyle };

export const ProgressBarContext = createContext<Props>({
  style: {} as AnimatedStyle,
});
