import { forwardRef } from "react";
import { useComponentDefaults } from "../../../../theme";
import { _BaseCarousel } from "../../_base";

type CarouselItemsProps = React.ComponentProps<typeof _BaseCarousel.Items>;
type CarouselItemsRef = React.ComponentRef<typeof _BaseCarousel.Items>;

const CarouselItems = forwardRef<CarouselItemsRef, CarouselItemsProps>(
  (_props, ref) => {
    const props = useComponentDefaults(() => ({}), _props, {
      disableIntervalMomentum: true,
      snapToAlignment: "center",
      overScrollMode: "never",
      gap: "sm",
      w: "100%",
      h: "auto",
    });

    return <_BaseCarousel.Items {...props} pagingEnabled={false} ref={ref} />;
  }
);

export const CardCarousel = {
  Root: _BaseCarousel.Root,
  Items: CarouselItems,
};
