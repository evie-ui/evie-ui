import { createContext } from "react";
import type { TextProps } from "./_types";

export const TextComponentContext = createContext<Partial<TextProps>>({});
