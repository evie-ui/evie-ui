import { objectDeepMerge } from "@evie-ui/utils/object";
import { forwardRef, useMemo } from "react";
import { TextInput as RNTextInput } from "react-native";
import type {
  BorderPropsType,
  DimensionPropsType,
  FlexPropsType,
  OpacityPropsType,
  OverflowPropsType,
  PositionPropsType,
  RoundedPropsType,
  SpacingPropsType,
  TextInputPropsType,
  TextPropsType,
  ThemeWithGetToken,
  ZIndexPropsType,
  BackgroundPropsType as _BackgroundPropsType,
} from "../../theme";
import { createComponentDefaults, useTheme } from "../../theme";

type BackgroundPropsType = Pick<_BackgroundPropsType, "bgColor">;
type BaseComponentProps = Omit<React.ComponentProps<typeof RNTextInput>, "children">;
type Props = BaseComponentProps &
  BackgroundPropsType &
  BorderPropsType &
  DimensionPropsType &
  FlexPropsType &
  OpacityPropsType &
  OverflowPropsType &
  PositionPropsType &
  RoundedPropsType &
  SpacingPropsType &
  ZIndexPropsType &
  TextPropsType &
  TextInputPropsType;

const parseBackgroundPropsType = <Props extends BackgroundPropsType>(
  props: Props,
  theme: ThemeWithGetToken,
): Partial<BaseComponentProps> => {
  return {
    style: {
      backgroundColor: theme.getColor(props.bgColor),
    },
  };
};

const parseBorderPropsType = <Props extends BorderPropsType>(
  props: Props,
  theme: ThemeWithGetToken,
): Partial<BaseComponentProps> => {
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
  _theme: ThemeWithGetToken,
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
  theme: ThemeWithGetToken,
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
  _theme: ThemeWithGetToken,
): Partial<BaseComponentProps> => {
  return {
    style: {
      opacity: props.opacity,
    },
  };
};

const parseOverflowPropsType = <Props extends OverflowPropsType>(
  props: Props,
  _theme: ThemeWithGetToken,
): Partial<BaseComponentProps> => {
  return {
    style: {
      overflow: props.overflow,
    },
  };
};

const parsePositionPropsType = <Props extends PositionPropsType>(
  props: Props,
  theme: ThemeWithGetToken,
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
  theme: ThemeWithGetToken,
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
  theme: ThemeWithGetToken,
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
  _theme: ThemeWithGetToken,
): Partial<BaseComponentProps> => {
  return {
    style: {
      zIndex: props.zIndex,
    },
  };
};

const parseTextPropsType = <Props extends TextPropsType>(
  props: Props,
  theme: ThemeWithGetToken,
): Partial<BaseComponentProps> => {
  return {
    style: {
      color: theme.getColor(props.color),
      fontSize: theme.getFontSize(props.fontSize),
      fontStyle: props.fontStyle,
      fontWeight: "regular",
      letterSpacing: props.letterSpacing,
      textAlignVertical: props.textAlignVertical,
      textTransform: props.textTransform,
      fontFamily: theme.getFontFamily(props.fontFamily, props.fontWeight!),
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

const parseTextInputPropsType = <Props extends TextInputPropsType>(
  props: Props,
  theme: ThemeWithGetToken,
): Partial<BaseComponentProps> => {
  return {
    selectionHandleColor: theme.getColor(props.selectionHandleColor),
    selectionColor: theme.getColor(props.selectionColor),
    placeholderTextColor: theme.getColor(props.placeholderTextColor),
    cursorColor: theme.getColor(props.cursorColor),
  };
};

export const _getDefaultProps = (props: Props) =>
  createComponentDefaults(props as Props, {
    flex: 1,
    fontSize: "body",
    fontFamily: "body",
    fontWeight: "semibold",
    bgColor: "surface",
    color: "onSurface",
    py: "xl",
    px: "xl",
    rounded: "md",
    cursorColor: "onSurface",
    borderColor: "primary",
    placeholderTextColor: "onBackgroundVariant",
  });

export const BaseInput = forwardRef<React.ComponentRef<typeof RNTextInput>, Props>((_props, ref) => {
  const { theme } = useTheme();

  const defaultProps = useMemo(() => _getDefaultProps(_props), [_props]);

  const parsedBackgroundProps = parseBackgroundPropsType(defaultProps, theme);
  const parsedBorderProps = parseBorderPropsType(defaultProps, theme);
  const parsedDimensionProps = parseDimensionPropsType(defaultProps, theme);
  const parsedFlexProps = parseFlexPropsType(defaultProps, theme);
  const parsedOpacityProps = parseOpacityPropsType(defaultProps, theme);
  const parsedOverflowProps = parseOverflowPropsType(defaultProps, theme);
  const parsedPositionProps = parsePositionPropsType(defaultProps, theme);
  const parsedRoundedProps = parseRoundedPropsType(defaultProps, theme);
  const parsedSpacingProps = parseSpacingPropsType(defaultProps, theme);
  const parsedZIndexProps = parseZIndexPropsType(defaultProps, theme);
  const parsedTextProps = parseTextPropsType(defaultProps, theme);
  const parsedTextInputProps = parseTextInputPropsType(defaultProps, theme);

  const newProps = objectDeepMerge<BaseComponentProps>(
    defaultProps,
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
    parsedTextProps,
    parsedTextInputProps,
  );

  return <RNTextInput {...newProps} ref={ref} />;
});
