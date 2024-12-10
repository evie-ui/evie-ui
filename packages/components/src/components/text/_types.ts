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
  type ZIndexPropsType,
} from "../../theme";

export type TextBaseComponentProps = React.ComponentProps<typeof RNText>;
export type TextProps = TextBaseComponentProps &
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
  TextPropsType;
