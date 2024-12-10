import { createContext } from "react";

type Props = {
  currentState: "initial" | "image" | "fallback";
  setCurrentState: (currentState: Exclude<Props["currentState"], "initial">) => void;
};

export const AvatarContext = createContext<Props>({
  currentState: "initial",
  setCurrentState: () => {},
});
