import { useEffect } from "react";
import { runOnJS, useSharedValue, withSpring } from "react-native-reanimated";
import { useComponentDefaults } from "../../../theme";
import { View } from "../../view";
import { AccordionContext } from "../_context";

type Props = React.ComponentProps<typeof View> & {
  open?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  onClose?: () => void;
};

export const AccordionRootFragment = (_props: Props) => {
  const props = useComponentDefaults(_props, { open: false });

  const contentHeight = useSharedValue(0);
  const progress = useSharedValue(props.open ? 1 : 0);

  useEffect(() => {
    if (props.open) {
      progress.value = withSpring(1, { damping: 12 });
    } else {
      progress.value = withSpring(0, { damping: 12 }, () => {
        if (props.onClose) runOnJS(props.onClose)();
      });
    }
  }, [props.open, props.onClose, progress]);

  return (
    <AccordionContext.Provider
      value={{
        isOpen: props.open,
        contentHeight,
        progress,
        toggle: () => {
          progress.value = withSpring(props.open ? 0 : 1, { damping: 12 }, () => {
            if (props.onOpenChange) runOnJS(props.onOpenChange)(!props.open);
          });
        },
      }}
    >
      <View {...props} />
    </AccordionContext.Provider>
  );
};
