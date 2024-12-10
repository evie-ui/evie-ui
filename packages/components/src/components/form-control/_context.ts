import { createContext } from "react";

export const FormControlContext = createContext<{
  invalid?: string | null;
  disabled: boolean;
  loading: boolean;
}>({
  invalid: undefined,
  disabled: false,
  loading: false,
});
