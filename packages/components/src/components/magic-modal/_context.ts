import { createContext } from "react";
import type { SharedValue } from "react-native-reanimated";

type Props = {
  closeable: boolean;
  translateY: SharedValue<number>;
  gestureThreshold: number;
};

export const MagicModalContext = createContext<Props>({ closeable: false, gestureThreshold: 0 } as Props);
