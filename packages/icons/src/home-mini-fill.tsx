import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHomeMiniFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480.137-786q80.776 0 157.301 20.384 76.524 20.384 136.043 59.5Q833-667 869.5-610.012 906-553.023 906-480H55q0-73.057 35.765-130.071 35.766-57.015 95.448-96.102 59.681-39.088 136.415-59.457Q399.361-786 480.137-786M350-175q-107.261 0-187.631-69.5Q82-314 61-420h838q-22.093 107.995-105.994 176.497Q709.105-175 600-175z" />
  </Svg>
);
