import { objectDeepMerge, objectExtractKeysAndDeleteFromOriginal } from "@evie-ui/utils/object";
import { forwardRef } from "react";
import { ScrollView as RNScrollView, RefreshControl } from "react-native";
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
  textProps,
  useTheme,
} from "../../theme";
import { TextComponentContext } from "../text";

type BaseComponentProps = React.ComponentProps<typeof RNScrollView>;
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
  TextPropsType & {
    onRefresh?: () => void;
    refreshing?: boolean;
  };

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
      flexWrap: props.flexWrap,
      justifyContent: props.justifyContent,
      alignSelf: props.alignSelf,
      alignItems: props.alignItems,
    },
    contentContainerStyle: {
      gap: theme.getSpacing(props.gap),
      columnGap: theme.getSpacing(props.columnGap),
      rowGap: theme.getSpacing(props.rowGap),
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
    contentContainerStyle: {
      padding: theme.getSpacing(props.p),
      paddingTop: theme.getSpacing(props.pt),
      paddingRight: theme.getSpacing(props.pr),
      paddingBottom: theme.getSpacing(props.pb),
      paddingLeft: theme.getSpacing(props.pl),
      paddingHorizontal: theme.getSpacing(props.px),
      paddingVertical: theme.getSpacing(props.py),
    },
    style: {
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

export const ScrollView = forwardRef<RNScrollView, Props>(({ children, ..._props }, ref) => {
  const { theme } = useTheme();

  const _textProps = objectExtractKeysAndDeleteFromOriginal(_props, ...textProps);

  const parsedBackgroundProps = parseBackgroundPropsType(_props, theme);
  const parsedBorderProps = parseBorderPropsType(_props, theme);
  const parsedDimensionProps = parseDimensionPropsType(_props, theme);
  const parsedFlexProps = parseFlexPropsType(_props, theme);
  const parsedOpacityProps = parseOpacityPropsType(_props, theme);
  const parsedOverflowProps = parseOverflowPropsType(_props, theme);
  const parsedPositionProps = parsePositionPropsType(_props, theme);
  const parsedRoundedProps = parseRoundedPropsType(_props, theme);
  const parsedSpacingProps = parseSpacingPropsType(_props, theme);
  const parsedZIndexProps = parseZIndexPropsType(_props, theme);

  const props = objectDeepMerge<BaseComponentProps>(
    _props,
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
  );

  return (
    <RNScrollView
      {...props}
      ref={ref}
      refreshControl={
        _props.onRefresh ? (
          <RefreshControl refreshing={_props.refreshing ?? false} onRefresh={_props.onRefresh} />
        ) : undefined
      }
    >
      <TextComponentContext.Provider value={_textProps}>{children}</TextComponentContext.Provider>
    </RNScrollView>
  );
});
