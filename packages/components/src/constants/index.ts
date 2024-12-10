import { LayoutAnimation, type LayoutAnimationConfig } from "react-native";

export const CONSTANTS = {
  Animation: {
    MULTI_STEP_CONTENT_ANIMATION_PRESET: {
      ...LayoutAnimation.Presets.linear,
      duration: 200,
    } satisfies LayoutAnimationConfig,
  },
};
