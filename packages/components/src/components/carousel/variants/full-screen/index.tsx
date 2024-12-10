import { forwardRef, useContext } from "react";
import { useWindowDimensions } from "react-native";
import { _BaseCarousel } from "../../_base";
import { WidthCarouselContext } from "../../_context";

type Props = React.ComponentProps<typeof _BaseCarousel.Items>;
type Ref = React.ComponentRef<typeof _BaseCarousel.Items>;

const CarouselItems = forwardRef<Ref, Props>((props, ref) => {
  const { width, height } = useWindowDimensions();
  return <_BaseCarousel.Items {...props} ref={ref} w={width} h={height} />;
});

const CarouselItem = (props: React.ComponentProps<typeof _BaseCarousel.Item>) => {
  const { width } = useContext(WidthCarouselContext);
  return <_BaseCarousel.Item {...props} w={width} />;
};

export const FullScreenCarousel = {
  Root: _BaseCarousel.Root,
  Items: CarouselItems,
  Item: CarouselItem,
  Indicator: _BaseCarousel.Indicator,
};
