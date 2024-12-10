import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { useMagicModalState } from "../components/magic-modal";
import { View } from "../components/view";

const AnimatedView = Animated.createAnimatedComponent(View);

export const ImageVisualizer = (props: React.PropsWithChildren) => {
  const { children } = props;
  const { closeable, translateY, gestureThreshold } = useMagicModalState();

  const bottomSheetStyle = useAnimatedStyle(() => {
    return { transform: [{ translateY: translateY.value }] };
  });

  return (
    <AnimatedView
      top={0}
      left={0}
      right={0}
      bottom={0}
      position="absolute"
      bgColor="background"
      style={bottomSheetStyle}
    >
      {children}
    </AnimatedView>
  );
};
