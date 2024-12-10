import { createContext } from "react";

type Nullable = {
  nullable: true;
  value: string | null | undefined;
  onValueChange: (value: string | null) => void;
};
type NonNullable = {
  nullable: false;
  value: string | undefined;
  onValueChange: (value: string) => void;
};

type Props = Nullable | NonNullable;

export const RadioGroupContext = createContext<Props>({
  value: "",
  onValueChange: () => {},
  nullable: false,
});
