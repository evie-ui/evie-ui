import { useContext } from "react";
import { PublicCarouselContext, WidthCarouselContext } from "./_context";

export const useCarousel = () => useContext(PublicCarouselContext);
export const useCarouselWidth = () => useContext(WidthCarouselContext);
