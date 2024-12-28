import { useContext, useEffect } from "react";
import {
  interpolate,
  useAnimatedProps,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";
import { useComponentDefaults, useTheme } from "../../../theme";
import { ProgressCircleContext, ProgressCircleSizeContext } from "../_context";
import type {
  DeterminateProps,
  IndeterminateProps,
  ProgressCircleRootProps,
} from "../_types";

const DURATION = 800;

export const ProgressCircleRoot = (_props: ProgressCircleRootProps) => {
  const {
    thickness = 1,
    size = 32,
    ...props
  } = useComponentDefaults<ProgressCircleRootProps>(
    (t) => t.ProgressCircle?.Root,
    _props
  );

  const ContentParent: React.FC<React.PropsWithChildren> = props.indeterminate
    ? (Indeterminate as React.FC<React.PropsWithChildren>)
    : (Determinate as React.FC<React.PropsWithChildren>);

  const { theme } = useTheme();
  const parsedSize = theme.getSpacing(size) ?? 0;
  const radius = parsedSize / 2;
  const circum = radius * 2 * Math.PI + 10;

  const sizePlusBorderWidth = parsedSize + thickness;

  return (
    <Svg width={sizePlusBorderWidth} height={sizePlusBorderWidth}>
      <Circle
        r={radius}
        fill="none"
        cx={sizePlusBorderWidth / 2}
        cy={sizePlusBorderWidth / 2}
        strokeWidth={thickness}
        stroke={theme.getColor(props.color)}
      />

      <ProgressCircleSizeContext
        value={{
          strokeWidth: thickness,
          radius,
          circum,
          size: sizePlusBorderWidth,
        }}
      >
        <ContentParent {...props}>{props.children}</ContentParent>
      </ProgressCircleSizeContext>
    </Svg>
  );
};

const Determinate = (props: DeterminateProps & React.PropsWithChildren) => {
  const progressWidth = useSharedValue(0);
  const { circum } = useContext(ProgressCircleSizeContext);

  useEffect(() => {
    progressWidth.value = withTiming(props.progress);
  }, [props.progress, progressWidth]);

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: circum * (1 - progressWidth.value / 100),
  }));

  return (
    <ProgressCircleContext.Provider value={{ animatedProps }}>
      {props.children}
    </ProgressCircleContext.Provider>
  );
};

const Indeterminate = (props: IndeterminateProps & React.PropsWithChildren) => {
  const rotation = useSharedValue(0);
  const { radius, size } = useContext(ProgressCircleSizeContext);

  useEffect(() => {
    rotation.value = withRepeat(withTiming(1, { duration: DURATION }), -1);
  }, [rotation]);

  const animatedProps = useAnimatedProps(() => {
    const rotate = interpolate(rotation.value, [0, 1], [0, 360]);

    return {
      strokeDashoffset: radius * Math.PI * 2 * 0.9,
      transform: [
        { translateX: size / 2 },
        { translateY: size / 2 },
        { rotate: `${rotate}deg` },
        { translateX: -(size / 2) },
        { translateY: -(size / 2) },
      ],
    };
  });

  return (
    <ProgressCircleContext.Provider value={{ animatedProps }}>
      {props.children}
    </ProgressCircleContext.Provider>
  );
};
