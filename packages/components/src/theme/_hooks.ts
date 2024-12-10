import { objectDeepMerge, objectEntries, objectExtractKeysAndDeleteFromOriginal } from "@evie-ui/utils/object";
import { isValidElement, useContext, useMemo } from "react";
import { ThemeContext } from "./_context";

export const useTheme = () => useContext(ThemeContext);

type GenericProps = object & { children?: unknown };
export const useComponentDefaults = <Props extends GenericProps, Default extends Props>(
  props: Props,
  defaultProps: Partial<Default>,
  parentProps?: Props,
): Omit<Props, keyof Default> & Required<Default> => {
  const { children, ...propsWithoutChildren } = props;

  // biome-ignore lint/correctness/useExhaustiveDependencies: defaultProps can't change
  const mergedProps = useMemo(
    () => {
      const propsWithJSXValue = objectEntries(propsWithoutChildren).filter(([, value]) => isValidElement(value));

      const jsxProps = objectExtractKeysAndDeleteFromOriginal(
        propsWithoutChildren,
        ...propsWithJSXValue.map(([key]) => key),
      );

      const mergedProps = objectDeepMerge(defaultProps, parentProps ?? {}, propsWithoutChildren as Props);

      mergedProps.children = children;
      for (const [key, value] of objectEntries(jsxProps)) mergedProps[key] = value;

      return mergedProps;
    },
    // biome-ignore lint/correctness/useExhaustiveDependencies: propsWithoutChildren will not change
    [propsWithoutChildren, parentProps],
  );

  return mergedProps as Omit<Props, keyof Default> & Required<Default>;
};
