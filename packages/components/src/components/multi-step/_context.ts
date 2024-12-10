import { createContext } from "react";

type Props = {
  back: () => void;
  finish: () => void;
  navigateTo: (step: string) => void;
};

export const MultiStepContext = createContext<Props>({
  back: () => {},
  finish: () => {},
  navigateTo: () => {},
});
