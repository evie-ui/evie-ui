import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgWindowSensorFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M877.825-593Q858-593 844.5-606.625 831-620.25 831-640v-160q0-19.75 13.675-33.375Q858.351-847 878.175-847 898-847 911.5-833.375 925-819.75 925-800v160q0 19.75-13.675 33.375Q897.649-593 877.825-593M96-103v-754h675v754zm125-424h155v-40h115v40h155v-206H221zm0 300h425v-206H221zm-30 30h485v-566H191z" />
  </Svg>
);
