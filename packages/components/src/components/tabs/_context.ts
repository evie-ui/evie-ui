import { createContext } from "react";

type Props = {
  value: string | undefined;
  onValueChange: (value: string) => void;
};

export const TabsContext = createContext<Props>({
  value: "",
  onValueChange: () => {},
});
