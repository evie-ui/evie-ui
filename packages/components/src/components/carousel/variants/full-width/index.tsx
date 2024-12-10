import { forwardRef, useContext } from "react";
import { _BaseCarousel } from "../../_base";
import { WidthCarouselContext } from "../../_context";

type Props = React.ComponentProps<typeof _BaseCarousel.Items>;
type Ref = React.ComponentRef<typeof _BaseCarousel.Items>;

const CarouselItems = forwardRef<Ref, Props>((props, ref) => {
  return <_BaseCarousel.Items h="auto" {...props} ref={ref} w="100%" flex={1} />;
});

const CarouselItem = (props: React.ComponentProps<typeof _BaseCarousel.Item>) => {
  const { width: itemWidth } = useContext(WidthCarouselContext);
  return <_BaseCarousel.Item {...props} h="100%" w={itemWidth} flex={1} />;
};

export const FullWidthCarousel = {
  Root: _BaseCarousel.Root,
  Items: CarouselItems,
  Item: CarouselItem,
  Indicator: _BaseCarousel.Indicator,
};
