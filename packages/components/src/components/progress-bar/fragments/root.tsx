import { useEffect } from "react";
import {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { useComponentDefaults } from "../../../theme";
import { View } from "../../view";
import { ProgressBarContext } from "../_context";
import type {
  DeterminateProps,
  IndeterminateProps,
  ProgressBarRootProps,
} from "../_types";

export const ProgressBarRoot = (_props: ProgressBarRootProps) => {
  const { color, ...props } = useComponentDefaults<ProgressBarRootProps>(
    (t) => t.ProgressBar?.Root,
    _props
  );

  const ContentParent: React.FC<React.PropsWithChildren> = props.indeterminate
    ? (Indeterminate as React.FC<React.PropsWithChildren>)
    : (Determinate as React.FC<React.PropsWithChildren>);

  return (
    <View {...props} overflow="hidden" bgColor={color}>
      <ContentParent {...props}>{props.children}</ContentParent>
    </View>
  );
};

const Determinate = (props: DeterminateProps & React.PropsWithChildren) => {
  const progressWidth = useSharedValue(0);

  useEffect(() => {
    progressWidth.value = withTiming(props.progress);
  }, [progressWidth, props.progress]);

  const style = useAnimatedStyle(() => ({ width: `${progressWidth.value}%` }));

  return (
    <ProgressBarContext.Provider value={{ style }}>
      {props.children}
    </ProgressBarContext.Provider>
  );
};

const Indeterminate = (props: IndeterminateProps & React.PropsWithChildren) => {
  const translateX = useSharedValue(-100);

  useEffect(() => {
    translateX.value = withRepeat(withTiming(100, { duration: 800 }), -1);
  }, [translateX]);

  const style = useAnimatedStyle(() => ({ left: `${translateX.value}%` }));

  return (
    <ProgressBarContext.Provider value={{ style }}>
      {props.children}
    </ProgressBarContext.Provider>
  );
};
