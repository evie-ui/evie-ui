import { createContext } from "react";
import type { SharedValue } from "react-native-reanimated";

type Props = {
  contentHeight: SharedValue<number>;
  progress: SharedValue<number>;
  toggle: () => void;
  isOpen: boolean;
};

export const AccordionContext = createContext<Props>({} as Props);
