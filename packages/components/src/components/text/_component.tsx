import {
  objectDeepMerge,
  objectExtractKeysAndDeleteFromOriginal,
} from "@evie-ui/utils/object";
import { forwardRef, useContext } from "react";
import { Text as RNText } from "react-native";
import {
  type BackgroundPropsType,
  type BorderPropsType,
  type DimensionPropsType,
  type FlexPropsType,
  type OpacityPropsType,
  type OverflowPropsType,
  type PositionPropsType,
  type RoundedPropsType,
  type SpacingPropsType,
  type TextPropsType,
  type ThemeWithGetToken,
  type ZIndexPropsType,
  backgroundProps,
  borderProps,
  dimensionProps,
  flexProps,
  opacityProps,
  overflowProps,
  positionProps,
  roundedProps,
  spacingProps,
  textProps,
  useComponentDefaults,
  useTheme,
  zIndexProps,
} from "../../theme";
import { TextComponentContext } from "./_context";
import type { TextBaseComponentProps, TextProps } from "./_types";

const parseBackgroundPropsType = <Props extends BackgroundPropsType>(
  props: Props,
  theme: ThemeWithGetToken
): Partial<TextBaseComponentProps> => {
  return {
    style: {
      backgroundColor: theme.getColor(props.bgColor),
    },
  };
};

const parseBorderPropsType = <Props extends BorderPropsType>(
  props: Props,
  theme: ThemeWithGetToken
): Partial<TextBaseComponentProps> => {
  return {
    style: {
      borderColor: theme.getColor(props.borderColor),
      borderTopColor: theme.getColor(props.borderTopColor),
      borderRightColor: theme.getColor(props.borderRightColor),
      borderBottomColor: theme.getColor(props.borderBottomColor),
      borderLeftColor: theme.getColor(props.borderLeftColor),
      borderWidth: props.borderWidth,
      borderTopWidth: props.borderTopWidth,
      borderRightWidth: props.borderRightWidth,
      borderLeftWidth: props.borderLeftWidth,
      borderBottomWidth: props.borderBottomWidth,
      borderStyle: props.borderStyle,
    },
  };
};

const parseDimensionPropsType = <Props extends DimensionPropsType>(
  props: Props,
  _theme: ThemeWithGetToken
): Partial<TextBaseComponentProps> => {
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
): Partial<TextBaseComponentProps> => {
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
): Partial<TextBaseComponentProps> => {
  return {
    style: {
      opacity: props.opacity,
    },
  };
};

const parseOverflowPropsType = <Props extends OverflowPropsType>(
  props: Props,
  _theme: ThemeWithGetToken
): Partial<TextBaseComponentProps> => {
  return {
    style: {
      overflow: props.overflow,
    },
  };
};

const parsePositionPropsType = <Props extends PositionPropsType>(
  props: Props,
  theme: ThemeWithGetToken
): Partial<TextBaseComponentProps> => {
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
): Partial<TextBaseComponentProps> => {
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
): Partial<TextBaseComponentProps> => {
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
): Partial<TextBaseComponentProps> => {
  return {
    style: {
      zIndex: props.zIndex,
    },
  };
};

const parseTextPropsType = <Props extends TextPropsType>(
  props: Props,
  theme: ThemeWithGetToken
): Partial<TextBaseComponentProps> => {
  const fontSize = theme.getFontSize(props.fontSize)!;

  return {
    style: {
      color: theme.getColor(props.color),
      fontSize,
      fontStyle: props.fontStyle,
      letterSpacing: props.letterSpacing,
      textAlignVertical: props.textAlignVertical,
      fontWeight: "regular",
      textTransform: props.textTransform,
      fontFamily: theme.getFontFamily(
        props.fontFamily,
        props.fontWeight ?? "regular"
      ),
      textAlign: props.textAlign,
      textDecorationLine: props.textDecorationLine,
      textDecorationStyle: props.textDecorationStyle,
      textDecorationColor: theme.getColor(props.textDecorationColor),
      textShadowColor: theme.getColor(props.textShadowColor),
      textShadowOffset: props.textShadowOffset,
      textShadowRadius: props.textShadowRadius,
      lineHeight: props.lineHeight,
    },
  };
};

export const Text = forwardRef<RNText, TextProps>(
  ({ children, ..._props }, ref) => {
    const { theme } = useTheme();
    const parentTextProps = useContext(TextComponentContext);

    const props = useComponentDefaults(
      _props,
      {
        fontSize: "body",
        color: "onBackground",
        fontFamily: "body",
        fontWeight: "regular",
        textAlignVertical: "center",
      },
      parentTextProps
    );

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
    const parsedTextProps = parseTextPropsType(props, theme);

    objectExtractKeysAndDeleteFromOriginal(
      props,
      ...backgroundProps,
      ...flexProps,
      ...borderProps,
      ...dimensionProps,
      ...opacityProps,
      ...overflowProps,
      ...positionProps,
      ...roundedProps,
      ...spacingProps,
      ...zIndexProps
    );

    const _textProps = objectExtractKeysAndDeleteFromOriginal(
      props,
      ...textProps
    );

    const newProps = objectDeepMerge<TextBaseComponentProps>(
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
      parsedZIndexProps,
      parentTextProps,
      parsedTextProps
    );

    return (
      <RNText {...newProps} ref={ref}>
        <TextComponentContext.Provider value={_textProps}>
          {children}
        </TextComponentContext.Provider>
      </RNText>
    );
  }
);
