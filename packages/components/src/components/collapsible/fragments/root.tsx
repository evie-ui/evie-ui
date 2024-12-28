import { NumberHelpers } from "@evie-ui/utils/number";
import { useCallback } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import {
  useAnimatedReaction,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useComponentDefaults } from "../../../theme";
import { View } from "../../view";
import { CollapsibleContext } from "../_context";

type Props = React.ComponentProps<typeof View> & {
  defaultOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  enableGesture?: boolean;
};

const GESTURE_PAN_THRESHOLD = 20;

export const CollapsibleRootFragment = (_props: Props) => {
  const props = useComponentDefaults((t) => t.Collapsible?.Root, _props, {
    defaultOpen: false,
    enableGesture: false,
  });

  const context = useSharedValue(0);
  const contentHeight = useSharedValue(0);
  const translateY = useSharedValue(
    props.defaultOpen ? contentHeight.value : 0
  );

  const goToTop = useCallback(() => {
    "worklet";
    translateY.value = withSpring(
      0,
      { dampingRatio: 0.75, clamp: { min: 0 } },
      () => {
        props.onOpenChange?.(false);
      }
    );
  }, [props.onOpenChange, translateY]);

  const goToBottom = useCallback(() => {
    "worklet";
    translateY.value = withSpring(
      contentHeight.value,
      { dampingRatio: 0.5, clamp: { max: contentHeight.value } },
      () => {
        props.onOpenChange?.(true);
      }
    );
  }, [props.onOpenChange, translateY, contentHeight]);

  useAnimatedReaction(
    () => contentHeight.value,
    () => {
      if (translateY.value === 0) {
        goToTop();
      } else {
        goToBottom();
      }
    }
  );

  const gesture = Gesture.Pan()
    .enabled(props.enableGesture)
    .onStart(() => {
      context.value = translateY.value;
    })
    .onUpdate((event) => {
      translateY.value = NumberHelpers.clamp(
        event.translationY + context.value,
        {
          min: 0,
          max: contentHeight.value,
        }
      );
    })
    .onEnd((event) => {
      const threshold = NumberHelpers.clamp(GESTURE_PAN_THRESHOLD, {
        max: contentHeight.value / 3,
      });

      if (NumberHelpers.isPositive(event.translationY)) {
        event.translationY > threshold ? goToBottom() : goToTop();
      } else if (NumberHelpers.isNegative(event.translationY)) {
        Math.abs(event.translationY) > threshold ? goToTop() : goToBottom();
      }
    });

  return (
    <CollapsibleContext.Provider value={{ contentHeight, translateY }}>
      <GestureDetector gesture={gesture}>
        <View {...props} overflow="hidden" />
      </GestureDetector>
    </CollapsibleContext.Provider>
  );
};
