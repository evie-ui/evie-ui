import { useBackButton } from "@evie-ui/hooks";
import { useCallback, useImperativeHandle, useRef, useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import Animated, { LinearTransition, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useKeyboardHeight } from "../../_experimental";
import { ModalContext } from "../modal/_context";
import { Pressable } from "../pressable";
import { View } from "../view";
import type { IModal } from "./_ref";
import { magicModalRef } from "./_ref";

type ModalCallback = (returns?: unknown) => void;
const AnimatedView = Animated.createAnimatedComponent(View);

const IN_DURATION = 700;
const OUT_DURATION = 500;

export const MagicModalPortal = () => {
  const callbackRef = useRef<ModalCallback>(() => {});

  const insets = useSafeAreaInsets();
  const keyboardHeight = useKeyboardHeight();
  // const { height: keyboardHeight, progress: showKeyboardProgress } = useReanimatedKeyboardAnimation();

  const [Content, setContent] = useState<React.ComponentType | null>(null);
  const visible = useSharedValue(false);
  const [closeable, setCloseable] = useState(true);

  useBackButton(() => {
    if (visible.value) _close("back-button");
    return visible.value;
  });

  const hide = useCallback<IModal["hide"]>(
    async (returns) => {
      setContent(null);

      await new Promise((resolve) => {
        setTimeout(resolve, OUT_DURATION);
      });

      visible.value = false;
      callbackRef.current(returns);
    },
    [visible],
  );

  const show = useCallback<IModal["show"]>(
    async (NewComponent, props = {}) => {
      if (Content) return;

      const { closeable = true } = props;

      visible.value = true;
      setContent(() => NewComponent as React.ComponentType);
      setCloseable(closeable);

      return new Promise((resolve) => {
        callbackRef.current = resolve as ModalCallback;
      });
    },
    [Content, visible],
  );

  const lock: IModal["lock"] = () => setCloseable(false);
  const unlock: IModal["unlock"] = () => setCloseable(true);

  useImperativeHandle(magicModalRef, () => ({
    hide,
    show,
    lock,
    unlock,
  }));

  const _close = (reason: "backdrop" | "back-button" | "swipe") => {
    if (!closeable) return;

    switch (reason) {
      case "backdrop":
      case "back-button":
      case "swipe":
        hide();
        break;
    }
  };

  const animatedStyle = useAnimatedStyle(() => ({ pointerEvents: visible.value ? "auto" : "none" }));

  return (
    <AnimatedView {...StyleSheet.absoluteFillObject} style={animatedStyle}>
      {Content && (
        <AnimatedView
          {...StyleSheet.absoluteFillObject}
          // entering={FadeIn.duration(IN_DURATION)}
          // exiting={FadeOut.duration(OUT_DURATION)}
        >
          <Pressable
            opacity={0.8}
            bgColor="backdrop"
            scaleDownAnimation="none"
            {...StyleSheet.absoluteFillObject}
            onPress={() => _close("backdrop")}
          />
        </AnimatedView>
      )}

      {Content && (
        <ModalContext.Provider value={{ closeable }}>
          <AnimatedView
            left="sm"
            right="sm"
            rounded="lg"
            overflow="hidden"
            position="absolute"
            bgColor="background"
            bottom={insets.bottom + keyboardHeight}
            // entering={SlideInDown.duration(IN_DURATION)}
            // exiting={SlideOutDown.duration(OUT_DURATION)}
            layout={LinearTransition}
            maxH={Dimensions.get("window").height * 0.6}
          >
            <Content />
          </AnimatedView>
        </ModalContext.Provider>
      )}
    </AnimatedView>
  );
};
