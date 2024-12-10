import type Svg from "react-native-svg";
import type { SvgProps } from "react-native-svg";

export type SvgComponentProps = Omit<SvgProps, "width" | "height"> & {
  size?: number | string;
  ref?: React.RefObject<Svg>;
};
