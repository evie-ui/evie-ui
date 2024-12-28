import { forwardRef, useContext } from "react";
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useComponentDefaults, useTheme } from "../../../theme";
import { Icon } from "../../icon";
import { Pressable } from "../../pressable";
import { View } from "../../view";
import { PageScrollContext } from "../_context";

type Props = React.ComponentProps<typeof View> & {
  canGoBack?: () => boolean;
  onPressGoBack?: () => void;
};
const AnimatedView = Animated.createAnimatedComponent(View);

export const PageHeader = forwardRef<React.ComponentRef<typeof View>, Props>(
  ({ canGoBack, onPressGoBack, children, ..._props }, ref) => {
    const { translateY, lastContentOffset } = useContext(PageScrollContext);
    const { theme } = useTheme();

    const props = useComponentDefaults((t) => t.Page?.Header, _props, {
      left: 0,
      right: 0,
      zIndex: 1,
      px: "lg",
      gap: "sm",
      bgColor: "background",
      alignItems: "center",
      borderBottomWidth: 1,
      justifyContent: "center",
    });

    const animatedStyle = useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateY: withTiming(-translateY.value, {
              duration: 250,
              easing: Easing.in(Easing.ease),
            }),
          },
        ],

        borderBottomColor: interpolateColor(
          lastContentOffset.value,
          [0, 120],
          [theme.getColor("background"), theme.getColor("outline")]
        ),
      };
    });

    return (
      <View>
        <AnimatedView
          {...props}
          ref={ref}
          top={0}
          left={0}
          right={0}
          position="absolute"
          style={animatedStyle}
        >
          <View
            flexGrow={1}
            flexDirection="row"
            alignItems="center"
            gap="md"
            h={72}
          >
            {canGoBack?.() && (
              <Pressable onPress={onPressGoBack}>
                <Icon fontSize={24}>{/* <SvgArrowBack /> */}</Icon>
              </Pressable>
            )}

            <View flexGrow={1}>{children}</View>
          </View>
        </AnimatedView>
      </View>
    );
  }
);
