import { useScrollPercentage } from "@evie-ui/hooks";
import {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { useComponentDefaults } from "../../../theme";
import { ScrollView } from "../../scrollview";
import { ModalScrollContext } from "../_context";

type Props = React.ComponentProps<typeof ScrollView> & {
  showScrollToTopButton?: boolean;
};
type Ref = {
  scrollToStart: () => void;
  scrollToEnd: () => void;
  getScrollPercentage: () => number;
  getContentSize: () => { width: number; height: number };
};

export const ModalScrollView = forwardRef<Ref, Props>((_props, ref) => {
  const { handlers, values } = useScrollPercentage();
  const { scroll } = useContext(ModalScrollContext);
  const [contentSize, setContentSize] = useState({ width: 0, height: 0 });
  const props = useComponentDefaults((t) => t.Modal?.ScrollView, _props);

  const internalRef = useRef<React.ComponentRef<typeof ScrollView>>(null);
  useImperativeHandle(ref, () => ({
    getContentSize: () => contentSize,
    getScrollPercentage: () => values.scrollPercentage,
    scrollToStart: () => {
      internalRef.current?.scrollTo({ y: 0, animated: true });
    },
    scrollToEnd: () => {
      internalRef.current?.scrollTo({ y: contentSize.height, animated: true });
    },
  }));

  useEffect(() => {
    return () => {
      scroll.value = 0;
    };
  }, [scroll]);

  return (
    <ScrollView
      {...props}
      ref={internalRef}
      showsVerticalScrollIndicator={false}
      onLayout={(event) => {
        handlers.onLayout(event);
        props.onLayout?.(event);
        setContentSize(event.nativeEvent.layout);
      }}
      onScroll={(event) => {
        scroll.value = event.nativeEvent.contentOffset.y;
        handlers.onScroll(event);
        props.onScroll?.(event);
      }}
      onContentSizeChange={(width, height) => {
        handlers.onContentSizeChange(width, height);
        props.onContentSizeChange?.(width, height);
        setContentSize({ width, height });
      }}
    />
  );
});
