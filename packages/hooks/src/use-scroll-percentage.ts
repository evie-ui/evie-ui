import { useState } from "react";
import type { LayoutChangeEvent, NativeScrollEvent, NativeSyntheticEvent } from "react-native";

export const useScrollPercentage = () => {
  const [contentSize, setContentSize] = useState(0);
  const [scrollViewHeight, setScrollViewHeight] = useState(0);
  const [contentOffset, setContentOffset] = useState({ x: 0, y: 0 });

  const scrollElementHeightPercent = Math.round((scrollViewHeight / contentSize) * 100);

  const contentScrollOffset = Math.ceil(
    (contentOffset.y / (contentSize - scrollViewHeight)) * (100 - scrollElementHeightPercent),
  );

  const scrollPercentage = contentScrollOffset + scrollElementHeightPercent;

  const onLayout = (event: LayoutChangeEvent) => {
    setScrollViewHeight(event.nativeEvent.layout.height);
  };

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setContentOffset(event.nativeEvent.contentOffset);
  };

  const onContentSizeChange = (_w: number, h: number) => {
    setContentSize(h);
  };

  return {
    handlers: {
      onLayout,
      onScroll,
      onContentSizeChange,
    },

    values: {
      scrollPercentage,
      contentScrollOffset,
      isScrollable: contentSize > scrollViewHeight,
      showTopShadow: contentScrollOffset > 2,
      showBottomShadow: scrollPercentage < 90,
      scrollElementHeightPercent,
    },
  };
};
