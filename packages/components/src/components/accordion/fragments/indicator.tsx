import { SvgExpandMore } from "@evie-ui/icons/expand-more";
import { useContext } from "react";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Icon } from "../../icon";
import { View } from "../../view";
import { AccordionContext } from "../_context";

type Props = React.ComponentProps<typeof View>;
const AnimatedView = Animated.createAnimatedComponent(View);

export const AccordionIndicatorFragment = (props: Props) => {
  const { contentHeight, progress } = useContext(AccordionContext);

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
      <Icon>
        <SvgExpandMore />
      </Icon>
    </AnimatedView>
  );
};
