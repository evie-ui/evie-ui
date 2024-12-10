import { CardCarousel, FullWidthCarousel, useCarousel } from "../../components/carousel";
import { Image } from "../../components/image";

const THUMB_SIZE = 56;

export type ImageObject = string;

export type Props = {
  images: string[];
  initialIndex?: number;
  renderImage?: (url: string) => React.ReactNode;
  renderIndicators?: (selected: number, actions: { changeTo: (index: number) => void }) => React.ReactNode;
};

export const ImageGallery = (props: Props) => {
  const { renderImage, images = [], initialIndex = 1 } = props;

  return (
    <FullWidthCarousel.Root initialIndex={initialIndex}>
      <FullWidthCarousel.Items>
        {images.map((image, index) => {
          return (
            <FullWidthCarousel.Item key={`${image}-${index.toString()}`}>
              {renderImage?.(image) ?? <Image contentFit="contain" source={{ uri: image }} />}
            </FullWidthCarousel.Item>
          );
        })}
      </FullWidthCarousel.Items>

      <FullWidthCarousel.Indicator>
        <Indicator {...props} />
      </FullWidthCarousel.Indicator>
    </FullWidthCarousel.Root>
  );
};

const Indicator = (props: Props) => {
  const { current, setCurrent } = useCarousel();

  return (
    <CardCarousel.Root>
      <CardCarousel.Items>
        {props.images.map((image, index) => {
          const selected = current === index + 1;

          return (
            <Image
              key={`${image}-${index.toString()}`}
              source={{ uri: image }}
              h={THUMB_SIZE}
              aspectRatio={1}
              contentFit="cover"
              borderWidth={2}
              rounded="sm"
              borderColor={selected ? "primary" : "surface"}
            />
          );
        })}
      </CardCarousel.Items>
    </CardCarousel.Root>
  );
};
