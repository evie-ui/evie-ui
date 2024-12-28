import { useContext } from "react";
import { ThemeContext } from "./_context";
import type { ThemeComponents } from "./_types";

export const useTheme = () => useContext(ThemeContext);

type GenericProps = object & { children?: unknown };

export const useComponentDefaults = <Props extends GenericProps>(
  componentPath: (_: ThemeComponents) => object | undefined,
  props: Partial<Props>,
  parentProps?: NoInfer<Partial<Props>>
): Props => {
  const theme = useTheme();

  const mergedProps = {
    ...componentPath(theme.components),
    ...parentProps,
    ...props,
  };

  return mergedProps as Props;
};
