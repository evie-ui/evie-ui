import { useContext } from "react";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { View } from "../../view";
import { AccordionItemContext } from "../_context";

type Props = React.ComponentProps<typeof View> & {
  children: React.ReactNode;
};
const AnimatedView = Animated.createAnimatedComponent(View);

export const AccordionIndicator = (props: Props) => {
  const { progress } = useContext(AccordionItemContext);

  const style = useAnimatedStyle(() => {
    const rotation = interpolate(
      progress.value,
      [0, 1],
      [0, 180],
      Extrapolation.CLAMP
    );
    return { transform: [{ rotate: `${rotation}deg` }] };
  });

  return (
    <AnimatedView {...props} style={[style, props.style]}>
      {props.children}
    </AnimatedView>
  );
};
