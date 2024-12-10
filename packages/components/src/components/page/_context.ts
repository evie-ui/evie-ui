import { createContext } from "react";
import type { SharedValue } from "react-native-reanimated";

type Props = {
  translateY: SharedValue<number>;
  isScrolling: SharedValue<boolean>;
  lastContentOffset: SharedValue<number>;
};

export const PageScrollContext = createContext<Props>({
  translateY: {} as SharedValue<number>,
  isScrolling: {} as SharedValue<boolean>,
  lastContentOffset: {} as SharedValue<number>,
});
