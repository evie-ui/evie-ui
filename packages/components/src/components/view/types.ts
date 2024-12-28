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
  type TextPropsType,
  type ZIndexPropsType,
} from "../../theme";

export type BaseComponentProps = React.ComponentProps<typeof RNView>;
export type ViewProps = BaseComponentProps &
  BackgroundPropsType &
  BorderPropsType &
  DimensionPropsType &
  FlexPropsType &
  OpacityPropsType &
  OverflowPropsType &
  PositionPropsType &
  ShadowPropsType &
  RoundedPropsType &
  SpacingPropsType &
  ZIndexPropsType &
  TextPropsType & {
    ref?: React.ForwardedRef<React.ComponentRef<typeof RNView>>;
  };
