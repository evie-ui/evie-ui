import type { TODO } from "@evie-ui/types";
import { useContext, useEffect } from "react";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useTheme } from "../../theme";
import { FormControlContext } from "../form-control/_context";
import { View } from "../view";
import { _getDefaultProps } from "./_base";

type Props = React.PropsWithChildren & { focused: boolean };
const AnimatedView = Animated.createAnimatedComponent(View);

export const BottomLine = ({ children, focused, ..._props }: Props) => {
  const { theme } = useTheme();
  const { invalid: _invalid } = useContext(FormControlContext);
  const props = _getDefaultProps(_props as TODO);

  const animationProgress = useSharedValue(0);
  const lastAnimationProgress = useSharedValue(0);

  const colors = {
    color1: theme.getColor(props.bgColor)!,
    color2: theme.getColor(props.borderColor)!,
    color3: theme.getColor("error")!,
  };

  const underlineColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        animationProgress.value,
        [0, 1, 2],
        [colors.color1, colors.color2, colors.color3]
      ),
    };
  });

  // biome-ignore lint/correctness/useExhaustiveDependencies: This is intentional
  useEffect(() => {
    "worklet";
    const invalid = _invalid !== undefined && _invalid !== null;

    const newValue = invalid ? 2 : focused ? 1 : 0;
    animationProgress.value = withSpring(newValue, { damping: 12 });
    lastAnimationProgress.value = newValue;
  }, [_invalid, focused]);

  return (
    <View overflow="hidden" rounded="md" flexGrow={1}>
      {children}

      <AnimatedView
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        h={3}
        style={underlineColorStyle}
      />
    </View>
  );
};
