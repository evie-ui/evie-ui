import { SvgExpandMore } from "@evie-ui/icons/expand-more";
import { useContext } from "react";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Icon } from "../../icon";
import { View } from "../../view";
import { CollapsibleContext } from "../_context";

type Props = React.ComponentProps<typeof View>;
const AnimatedView = Animated.createAnimatedComponent(View);

export const CollapsibleIndicatorFragment = (props: Props) => {
  const { contentHeight, translateY } = useContext(CollapsibleContext);

  const style = useAnimatedStyle(() => {
    const rotation = interpolate(
      translateY.value,
      [0, contentHeight.value],
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
