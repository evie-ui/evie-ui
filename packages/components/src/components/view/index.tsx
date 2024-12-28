import { usePrevious } from "@evie-ui/hooks";
import {
  objectDeepMerge,
  objectExtractKeysAndDeleteFromOriginal,
} from "@evie-ui/utils/object";
import { forwardRef, useContext, useLayoutEffect } from "react";
import { View as RNView } from "react-native";
import {
  type BackgroundPropsType,
  type BorderPropsType,
  type DimensionPropsType,
  type FlexPropsType,
  type OpacityPropsType,
  type OverflowPropsType,
  type PositionPropsType,
  type RoundedPropsType,
  type ShadowPropsType,
  type SpacingPropsType,
  type ThemeWithGetToken,
  type ZIndexPropsType,
  getFallbackColorBasedOnBgColor,
  textProps,
  useComponentDefaults,
  useTheme,
} from "../../theme";
import { TextComponentContext } from "../text";
import type { BaseComponentProps, ViewProps } from "./types";

const parseShadowPropsType = <Props extends ShadowPropsType>(
  props: Props,
  theme: ThemeWithGetToken
): Partial<BaseComponentProps> => {
  return {
    style: {
      boxShadow: props.shadow?.map((shadow) => ({
        ...shadow,
        color: theme.getColor(shadow.color),
      })),
    },
  };
};

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
const parseOverflowPropsType = <Props extends OverflowPropsType>(
  props: Props,
  _theme: ThemeWithGetToken
): Partial<BaseComponentProps> => {
  return {
    style: {
      overflow: props.overflow,
    },
  };
};
const parsePositionPropsType = <Props extends PositionPropsType>(
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

export const View = forwardRef<RNView, ViewProps>(
  ({ children, ..._props }, ref) => {
    const { theme } = useTheme();
    const _parentTextProps = useContext(TextComponentContext);

    const props = useComponentDefaults((t) => t.View, _props, {
      color: getFallbackColorBasedOnBgColor(_props.bgColor),
    });

    const oldProps = usePrevious(props);

    const _textProps = objectExtractKeysAndDeleteFromOriginal(
      props,
      ...textProps
    );

    const parsedShadowProps = parseShadowPropsType(props, theme);
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

    const finalProps = objectDeepMerge<BaseComponentProps>(
      props,
      parsedBackgroundProps,
      parsedShadowProps,
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

    const _finalTextProps = objectDeepMerge(_parentTextProps, _textProps);

    useLayoutEffect(() => {
      if (oldProps.bgColor !== props.bgColor) {
        // const newColor = theme.getColor(props.bgColor);
        // if (newColor) {
        //   finalProps.style = [
        //     ...(finalProps.style),
        //     {
        //     backgroundColor: newColor,
        //   }];
        // }

        console.log(
          "bgColor changed from",
          oldProps?.bgColor,
          "to",
          props.bgColor
        );
      }
    });

    return (
      <RNView
        {...finalProps}
        ref={ref}
        style={[
          finalProps.style,
          { backgroundColor: theme.getColor(props.bgColor) },
        ]}
      >
        <TextComponentContext.Provider value={_finalTextProps}>
          {children}
        </TextComponentContext.Provider>
      </RNView>
    );
  }
);
