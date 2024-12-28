import { objectDeepMerge } from "@evie-ui/utils/object";
import { forwardRef } from "react";
import { FlatList as RNFlatList } from "react-native";
import {
  type BackgroundPropsType,
  type SpacingPropsType,
  type ThemeWithGetToken,
  useComponentDefaults,
  useTheme,
} from "../../theme";

type Ref<T> = React.ForwardedRef<React.ComponentRef<typeof RNFlatList<T>>>;
type BaseComponentProps<T = unknown> = React.ComponentProps<
  typeof RNFlatList<T>
>;
type Props<T> = BaseComponentProps<T> & BackgroundPropsType & SpacingPropsType;

const parseBackgroundPropsType = <
  Props extends BackgroundPropsType = BackgroundPropsType,
>(
  props: Props,
  theme: ThemeWithGetToken
): Partial<BaseComponentProps> => {
  return {
    contentContainerStyle: {
      backgroundColor: theme.getColor(props.bgColor),
    },
  };
};

const parseSpacingPropsType = <Props extends SpacingPropsType>(
  props: Props,
  theme: ThemeWithGetToken
): Partial<BaseComponentProps> => {
  return {
    style: {
      margin: theme.getSpacing(props.m),
      marginTop: theme.getSpacing(props.mt),
      marginRight: theme.getSpacing(props.mr),
      marginBottom: theme.getSpacing(props.mb),
      marginLeft: theme.getSpacing(props.ml),
      marginHorizontal: theme.getSpacing(props.mx),
      marginVertical: theme.getSpacing(props.my),
    },
    contentContainerStyle: {
      padding: theme.getSpacing(props.p),
      paddingTop: theme.getSpacing(props.pt),
      paddingRight: theme.getSpacing(props.pr),
      paddingBottom: theme.getSpacing(props.pb),
      paddingLeft: theme.getSpacing(props.pl),
      paddingHorizontal: theme.getSpacing(props.px),
      paddingVertical: theme.getSpacing(props.py),
    },
  };
};

const FlatListComponent = <T,>(_props: Props<T>, ref?: Ref<T>) => {
  const { theme } = useTheme();
  const props = useComponentDefaults((t) => t.FlatList, _props);

  const parsedBackgroundProps = parseBackgroundPropsType(props, theme);
  const parsedSpacingProps = parseSpacingPropsType(props, theme);

  const parsedProps = objectDeepMerge(
    parsedBackgroundProps as Partial<BaseComponentProps<T>>,
    parsedSpacingProps as Partial<BaseComponentProps<T>>
  );

  return <RNFlatList<T> {...props} {...parsedProps} ref={ref} />;
};

export const FlatList = forwardRef(FlatListComponent) as <T>(
  props: Props<T> & { ref?: Ref<T> }
) => ReturnType<typeof FlatListComponent>;
