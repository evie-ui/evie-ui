import Animated from "react-native-reanimated";
import { View } from "../view";

const AnimatedView = Animated.createAnimatedComponent(View);

export const ProgressBarBase = ({ style, ...props }: React.ComponentProps<typeof View>) => {
  return (
    <View {...props} w="100%" rounded="full" overflow="hidden">
      <AnimatedView h="100%" rounded="full" bgColor={props.color} style={style} />
    </View>
  );
};
