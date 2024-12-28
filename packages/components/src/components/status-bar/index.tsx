import { objectDeepMerge } from "@evie-ui/utils/object";
import { StatusBar as RNStatusBar } from "react-native";
import type {
  ThemeWithGetToken,
  BackgroundPropsType as _BackgroundPropsType,
} from "../../theme";
import { useComponentDefaults, useTheme } from "../../theme";

type BackgroundPropsType = Pick<_BackgroundPropsType, "bgColor">;
type BaseComponentProps = React.ComponentProps<typeof RNStatusBar>;
type Props = Omit<BaseComponentProps, "backgroundColor"> & BackgroundPropsType;

const parseBackgroundPropsType = <Props extends BackgroundPropsType>(
  props: Props,
  theme: ThemeWithGetToken
): Partial<BaseComponentProps> => {
  return {
    backgroundColor: theme.getColor(props.bgColor),
  };
};

export const StatusBar = (_props: Props) => {
  const { theme } = useTheme();
  const parsedBackgroundProps = parseBackgroundPropsType(_props, theme);

  const props = useComponentDefaults((t) => t.StatusBar, _props, {
    animated: true,
    barStyle: "default",
    translucent: true,
  });

  const newProps = objectDeepMerge<BaseComponentProps>(
    props,
    parsedBackgroundProps
  );

  return <RNStatusBar {...newProps} />;
};

StatusBar.currentHeight = RNStatusBar.currentHeight;
