import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLineStartFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M187-373q-45.8 0-76.9-31.141-31.1-31.141-31.1-76T110.1-556q31.1-31 76.9-31 31.086 0 57.043 16.5T282-527h551q19.75 0 33.375 13.675Q880-499.649 880-479.825 880-460 866.375-446.5 852.75-433 833-433H282q-12 27-37.957 43.5T187-373" />
  </Svg>
);
