import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgScienceFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M172-95q-58.777 0-82.888-53Q65-201 105-246l242-273v-244h-29q-19.75 0-33.375-13.675Q271-790.351 271-810.175 271-830 284.625-843.5 298.25-857 318-857h324q19.75 0 33.875 13.675Q690-829.649 690-809.825 690-790 675.875-776.5 661.75-763 642-763h-28v244l242 273q39 45 14.888 98Q846.777-95 788-95z" />
  </Svg>
);
