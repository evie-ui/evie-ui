import { SvgArrowBack } from "@evie-ui/icons/arrow-back";
import { SvgClose } from "@evie-ui/icons/close";
import { useContext } from "react";
import Animated, {
  interpolateColor,
  useAnimatedProps,
} from "react-native-reanimated";
import { useTheme } from "../../../theme";
import { IconButton } from "../../icon-button";
import { magicModal } from "../../magic-modal/_ref";
import { View } from "../../view";
import { ModalContext, ModalScrollContext } from "../_context";

type Props = React.ComponentProps<typeof View> & {
  onBackButtonPress?: () => void;
};

const AnimatedView = Animated.createAnimatedComponent(View);

export const ModalHeader = (props: Props) => {
  const { onBackButtonPress, children, ...rest } = props;
  const { closeable } = useContext(ModalContext);
  const { scroll } = useContext(ModalScrollContext);
  const { theme } = useTheme();

  const animatedProps = useAnimatedProps(() => ({
    borderBottomColor: interpolateColor(
      scroll.value,
      [0, 150],
      [theme.getColor("background"), theme.getColor("outline")]
    ),
  }));

  return (
    <AnimatedView
      px="xl"
      pb="md"
      gap="lg"
      h={72}
      alignItems="center"
      flexDirection="row"
      borderBottomWidth={1}
      justifyContent="space-between"
      animatedProps={animatedProps}
    >
      <View flexDirection="row" alignItems="center" flex={1} gap="sm">
        {onBackButtonPress && (
          <IconButton
            size={40}
            onPress={props.onBackButtonPress}
            rounded="none"
            ml="-sm"
            fontSize={24}
          >
            <SvgArrowBack />
          </IconButton>
        )}

        <View {...rest} justifyContent="center" minH={42} flex={1}>
          {children}
        </View>
      </View>

      {closeable && (
        <IconButton
          size={40}
          px="none"
          py="none"
          onPress={magicModal.hide}
          fontSize={24}
        >
          <SvgClose />
        </IconButton>
      )}
    </AnimatedView>
  );
};
