import { objectDeepMerge } from "@evie-ui/utils/object";
import {
  Image as ExpoImage,
  type ImageProps as ExpoImageProps,
} from "expo-image";
import { forwardRef, useState } from "react";
import type { ImageStyle as RNImageStyle } from "react-native";
import type {
  BackgroundPropsType,
  BorderPropsType,
  DimensionPropsType,
  FlexPropsType,
  OpacityPropsType,
  OverflowPropsType,
  PositionPropsType,
  RoundedPropsType,
  SpacingPropsType,
  ThemeWithGetToken,
  ZIndexPropsType,
} from "../../theme";
import { useComponentDefaults, useTheme } from "../../theme";

type Ref = React.ComponentRef<typeof ExpoImage>;
type BaseComponentProps = ExpoImageProps;
type Props = BaseComponentProps &
  BackgroundPropsType &
  BorderPropsType &
  DimensionPropsType &
  FlexPropsType &
  OpacityPropsType &
  OverflowPropsType<RNImageStyle> &
  PositionPropsType<RNImageStyle> &
  RoundedPropsType &
  SpacingPropsType &
  ZIndexPropsType & {};

const parseBackgroundPropsType = <Props extends BackgroundPropsType>(
  props: Props,
  theme: ThemeWithGetToken
): Partial<BaseComponentProps> => {
  return {
    style: {
      backgroundColor: theme.getColor(props.bgColor),
    },
  };
};

const parseBorderPropsType = <Props extends BorderPropsType>(
  props: Props,
  theme: ThemeWithGetToken
): Partial<BaseComponentProps> => {
  return {
    style: {
      borderColor: theme.getColor(props.borderColor),
      borderWidth: props.borderWidth,
      borderTopWidth: props.borderTopWidth,
      borderRightWidth: props.borderRightWidth,
      borderLeftWidth: props.borderLeftWidth,
      borderBottomWidth: props.borderBottomWidth,
    },
  };
};
const parseDimensionPropsType = <Props extends DimensionPropsType>(
  props: Props,
  _theme: ThemeWithGetToken
): Partial<BaseComponentProps> => {
  return {
    style: {
      width: props.w ?? props.size,
      height: props.h ?? props.size,
      minWidth: props.minW,
      minHeight: props.minH,
      maxWidth: props.maxW,
      maxHeight: props.maxH,
      aspectRatio: props.aspectRatio,
    },
  };
};
const parseFlexPropsType = <Props extends FlexPropsType>(
  props: Props,
  theme: ThemeWithGetToken
): Partial<BaseComponentProps> => {
  return {
    style: {
      flex: props.flex,
      flexGrow: props.flexGrow,
      flexShrink: props.flexShrink,
      flexDirection: props.flexDirection,
      gap: theme.getSpacing(props.gap),
      columnGap: theme.getSpacing(props.columnGap),
      rowGap: theme.getSpacing(props.rowGap),
      flexWrap: props.flexWrap,
      justifyContent: props.justifyContent,
      alignSelf: props.alignSelf,
      alignItems: props.alignItems,
    },
  };
};
const parseOpacityPropsType = <Props extends OpacityPropsType>(
  props: Props,
  _theme: ThemeWithGetToken
): Partial<BaseComponentProps> => {
  return {
    style: {
      opacity: props.opacity,
    },
  };
};
const parseOverflowPropsType = <Props extends OverflowPropsType<RNImageStyle>>(
  props: Props,
  _theme: ThemeWithGetToken
): Partial<BaseComponentProps> => {
  return {
    style: {
      overflow: props.overflow,
    },
  };
};
const parsePositionPropsType = <Props extends PositionPropsType<RNImageStyle>>(
  props: Props,
  theme: ThemeWithGetToken
): Partial<BaseComponentProps> => {
  return {
    style: {
      position: props.position,
      top: theme.getSpacing(props.top),
      right: theme.getSpacing(props.right),
      bottom: theme.getSpacing(props.bottom),
      left: theme.getSpacing(props.left),
    },
  };
};
const parseRoundedPropsType = <Props extends RoundedPropsType>(
  props: Props,
  theme: ThemeWithGetToken
): Partial<BaseComponentProps> => {
  return {
    style: {
      borderRadius: theme.getRadius(props.rounded),
      borderTopLeftRadius:
        theme.getRadius(props.roundedLeft) ??
        theme.getRadius(props.roundedTop) ??
        theme.getRadius(props.roundedTopLeft),
      borderTopRightRadius:
        theme.getRadius(props.roundedRight) ??
        theme.getRadius(props.roundedTop) ??
        theme.getRadius(props.roundedTopRight),
      borderBottomLeftRadius:
        theme.getRadius(props.roundedLeft) ??
        theme.getRadius(props.roundedBottom) ??
        theme.getRadius(props.roundedBottomLeft),
      borderBottomRightRadius:
        theme.getRadius(props.roundedRight) ??
        theme.getRadius(props.roundedBottom) ??
        theme.getRadius(props.roundedBottomRight),
    },
  };
};

const parseSpacingPropsType = <Props extends SpacingPropsType>(
  props: Props,
  theme: ThemeWithGetToken
): Partial<BaseComponentProps> => {
  return {
    style: {
      padding: theme.getSpacing(props.p),
      paddingTop: theme.getSpacing(props.pt),
      paddingRight: theme.getSpacing(props.pr),
      paddingBottom: theme.getSpacing(props.pb),
      paddingLeft: theme.getSpacing(props.pl),
      paddingHorizontal: theme.getSpacing(props.px),
      paddingVertical: theme.getSpacing(props.py),

      margin: theme.getSpacing(props.m),
      marginTop: theme.getSpacing(props.mt),
      marginRight: theme.getSpacing(props.mr),
      marginBottom: theme.getSpacing(props.mb),
      marginLeft: theme.getSpacing(props.ml),
      marginHorizontal: theme.getSpacing(props.mx),
      marginVertical: theme.getSpacing(props.my),
    },
  };
};
const parseZIndexPropsType = <Props extends ZIndexPropsType>(
  props: Props,
  _theme: ThemeWithGetToken
): Partial<BaseComponentProps> => {
  return {
    style: {
      zIndex: props.zIndex,
    },
  };
};

export const Image = forwardRef<Ref, Props>(({ children, ..._props }, ref) => {
  const { theme } = useTheme();
  const [width, setWidth] = useState(2);
  const [aspectRatio, setAspectRatio] = useState(1);

  const props = useComponentDefaults((t) => t.Image, _props);

  const parsedBackgroundProps = parseBackgroundPropsType(props, theme);
  const parsedBorderProps = parseBorderPropsType(props, theme);
  const parsedDimensionProps = parseDimensionPropsType(props, theme);
  const parsedFlexProps = parseFlexPropsType(props, theme);
  const parsedOpacityProps = parseOpacityPropsType(props, theme);
  const parsedOverflowProps = parseOverflowPropsType(props, theme);
  const parsedPositionProps = parsePositionPropsType(props, theme);
  const parsedRoundedProps = parseRoundedPropsType(props, theme);
  const parsedSpacingProps = parseSpacingPropsType(props, theme);
  const parsedZIndexProps = parseZIndexPropsType(props, theme);

  const newProps = objectDeepMerge<BaseComponentProps>(
    props,
    parsedBackgroundProps,
    parsedBorderProps,
    parsedDimensionProps,
    parsedFlexProps,
    parsedOpacityProps,
    parsedOverflowProps,
    parsedPositionProps,
    parsedRoundedProps,
    parsedSpacingProps,
    parsedZIndexProps
  );

  return (
    <ExpoImage
      {...newProps}
      ref={ref}
      style={[{ height: width / aspectRatio }, newProps.style]}
      onLayout={(event) => {
        setWidth(event.nativeEvent.layout.width);
        newProps.onLayout?.(event);
      }}
      onLoad={(event) => {
        setAspectRatio(event.source.width / event.source.height);
        newProps.onLoad?.(event);
      }}
    />
  );
});
