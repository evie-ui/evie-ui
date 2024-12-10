import { createContext } from "react";
import type { SharedValue } from "react-native-reanimated";

type Props = {
  contentHeight: SharedValue<number>;
  translateY: SharedValue<number>;
};

export const CollapsibleContext = createContext<Props>({} as Props);
