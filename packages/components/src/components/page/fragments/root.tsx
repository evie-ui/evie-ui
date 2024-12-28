import { forwardRef } from "react";
import { useSharedValue } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useComponentDefaults } from "../../../theme";
import { View } from "../../view";
import { PageScrollContext } from "../_context";

type Props = React.ComponentProps<typeof View> & {
  safeAreaTop?: boolean;
  safeAreaBottom?: boolean;
};

export const PageRoot = forwardRef<React.ComponentRef<typeof View>, Props>(
  (_props, ref) => {
    const insets = useSafeAreaInsets();
    const translateY = useSharedValue(0);
    const isScrolling = useSharedValue(false);
    const lastContentOffset = useSharedValue(0);

    const props = useComponentDefaults((t) => t.Page?.Root, _props, {
      flex: 1,
      safeAreaTop: true,
      color: "onBackground",
      bgColor: "background",
    });

    const safeAreaTop = props.safeAreaTop ? insets.top : 0;
    const safeAreaBottom = props.safeAreaBottom ? insets.bottom : 0;

    return (
      <PageScrollContext.Provider
        value={{ translateY, isScrolling, lastContentOffset }}
      >
        <View {...props} ref={ref} pt={safeAreaTop} pb={safeAreaBottom} />
      </PageScrollContext.Provider>
    );
  }
);
