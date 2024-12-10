import { createContext } from "react";

type PrivateContextProps = {
  setCurrent: (current: number) => void;
  addToTotal: () => void;
  removeFromTotal: () => void;
};
export const PrivateCarouselContext = createContext<PrivateContextProps>({
  setCurrent: (_current: number) => {},
  addToTotal: () => {},
  removeFromTotal: () => {},
});

type PublicContextProps = { current: number; total: number; setCurrent: (current: number) => void };
export const PublicCarouselContext = createContext<PublicContextProps>({
  current: 0,
  total: 0,
  setCurrent: (_current: number) => {},
});

type ItemWidthContextProps = { width: number };
export const WidthCarouselContext = createContext<ItemWidthContextProps>({
  width: 0,
});
