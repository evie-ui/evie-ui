import { createContext } from "react";
import type { SharedValue } from "react-native-reanimated";

type ModalContextProps = { closeable: boolean };
export const ModalContext = createContext<ModalContextProps>({ closeable: false });

type ModalScrollContextProps = { scroll: SharedValue<number> };
export const ModalScrollContext = createContext<ModalScrollContextProps>({ scroll: {} as SharedValue<number> });
