import { use, useEffect } from "react";
import { runOnJS, useSharedValue, withSpring } from "react-native-reanimated";
import { useComponentDefaults } from "../../../theme";
import { View } from "../../view";
import { AccordionItemContext, AccordionRootContext } from "../_context";
import type { AccordionItemProps, AccordionRootProps } from "../types";

const isSingle = (
  type: AccordionRootProps["type"],
  onValueChange: AccordionRootProps["onValueChange"]
): onValueChange is (value: string) => void => {
  if (type === "single") return true;
  return false;
};

const isSingleCollapsible = (
  collapsible: AccordionRootProps["collapsible"],
  onValueChange: AccordionRootProps["onValueChange"]
): onValueChange is (value: string | undefined) => void => {
  return collapsible ?? false;
};

export const AccordionItem = (_props: AccordionItemProps) => {
  const { value: componentValue, ...props } = useComponentDefaults(
    (t) => t.Accordion?.Item,
    _props
  );
  const { type, value, onValueChange, collapsible } = use(AccordionRootContext);
  const isOpen = value.includes(componentValue);

  const contentHeight = useSharedValue(0);
  const progress = useSharedValue(isOpen ? 1 : 0);

  useEffect(() => {
    if (isOpen) {
      progress.value = withSpring(1, { damping: 12 });
    } else {
      progress.value = withSpring(0, { damping: 12 });
    }
  }, [isOpen]);

  const toggle = () => {
    if (!onValueChange) return;

    if (isSingle(type, onValueChange)) {
      if (isSingleCollapsible(collapsible, onValueChange)) {
        runOnJS(onValueChange)(isOpen ? undefined : componentValue);
      } else {
        runOnJS(onValueChange)(componentValue);
      }
    } else {
      if (isOpen) {
        if (collapsible) {
          runOnJS(onValueChange)(value.filter((v) => v !== componentValue));
        } else {
          const valuesWithoutCurrent = value.filter(
            (v) => v !== componentValue
          );
          runOnJS(onValueChange)(
            valuesWithoutCurrent.length > 0
              ? value.filter((v) => v !== componentValue)
              : value
          );
        }
      } else {
        runOnJS(onValueChange)(value.concat(componentValue));
      }
    }
  };

  return (
    <View {...props}>
      <AccordionItemContext value={{ contentHeight, progress, toggle }}>
        {props.children}
      </AccordionItemContext>
    </View>
  );
};
