import { NumberHelpers } from "@evie-ui/utils/number";
import { forwardRef, useContext } from "react";
import { useComponentDefaults } from "../../../theme";
import { ScrollView } from "../../scrollview";
import { PageScrollContext } from "../_context";

type Props = React.ComponentProps<typeof ScrollView>;
type Ref = React.ComponentRef<typeof ScrollView>;

export const PageContent = forwardRef<Ref, Props>((_props, ref) => {
  const { translateY, isScrolling, lastContentOffset } =
    useContext(PageScrollContext);

  const props = useComponentDefaults((t) => t.Page?.Content, _props, {
    pt: 80,
    flex: 1,
    pb: 140,
    px: "lg",
    gap: "md",
    bounces: false,
    overflow: "hidden",
    showsVerticalScrollIndicator: false,
  });

  return (
    <ScrollView
      {...props}
      ref={ref}
      onScroll={({ nativeEvent: event }) => {
        if (isScrolling.value) {
          if (lastContentOffset.value > event.contentOffset.y) {
            translateY.value = 0;
          } else if (lastContentOffset.value < event.contentOffset.y) {
            translateY.value = 120;
          }
        }

        lastContentOffset.value = NumberHelpers.clamp(event.contentOffset.y, {
          min: 0,
        });
      }}
      onScrollBeginDrag={() => {
        isScrolling.value = true;
      }}
      onScrollEndDrag={() => {
        isScrolling.value = false;
      }}
    />
  );
});
