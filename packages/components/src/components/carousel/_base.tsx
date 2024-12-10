import { forwardRef, useContext, useEffect, useState } from "react";
import { ScrollView } from "../scrollview";
import { View } from "../view";
import { PrivateCarouselContext, PublicCarouselContext, WidthCarouselContext } from "./_context";

type CarouselRootProps = React.ComponentProps<typeof View> & { initialIndex?: number };

const CarouselRoot = (props: CarouselRootProps) => {
  const [total, _setTotal] = useState(0);
  const [current, _setCurrent] = useState(props.initialIndex ?? 1);

  const addToTotal: React.ContextType<typeof PrivateCarouselContext>["addToTotal"] = () => {
    _setTotal((total) => total + 1);
  };
  const removeFromTotal: React.ContextType<typeof PrivateCarouselContext>["removeFromTotal"] = () => {
    _setTotal((total) => total - 1);
  };

  const setCurrent: React.ContextType<typeof PrivateCarouselContext>["setCurrent"] = (current) => {
    _setCurrent(current);
  };

  return (
    <View {...props}>
      <PublicCarouselContext.Provider value={{ current, total, setCurrent }}>
        <PrivateCarouselContext.Provider value={{ setCurrent, addToTotal, removeFromTotal }}>
          {props.children}
        </PrivateCarouselContext.Provider>
      </PublicCarouselContext.Provider>
    </View>
  );
};

const CarouselItems = forwardRef<React.ComponentRef<typeof ScrollView>, React.ComponentProps<typeof ScrollView>>(
  (props, ref) => {
    const { setCurrent } = useContext(PrivateCarouselContext);
    const [width, setWidth] = useState<number>(0);

    return (
      <ScrollView
        pagingEnabled
        scrollEventThrottle={100}
        {...props}
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={ref}
        onLayout={(event) => {
          setWidth(event.nativeEvent.layout.width);
          props.onLayout?.(event);
        }}
        onScroll={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width) + 1;
          setCurrent(index);
          props.onScroll?.(event);
        }}
      >
        <WidthCarouselContext.Provider value={{ width }}>{props.children}</WidthCarouselContext.Provider>
      </ScrollView>
    );
  },
);

const CarouselItem = (props: React.ComponentProps<typeof View>) => {
  const { addToTotal, removeFromTotal } = useContext(PrivateCarouselContext);

  // biome-ignore lint/correctness/useExhaustiveDependencies: This is intentional
  useEffect(() => {
    addToTotal();
    return () => removeFromTotal();
  }, []);

  return <View {...props} />;
};

const CarouselIndicator = (props: React.PropsWithChildren) => props.children;

export const _BaseCarousel = {
  Root: CarouselRoot,
  Items: CarouselItems,
  Item: CarouselItem,
  Indicator: CarouselIndicator,
};
