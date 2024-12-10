import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSouthEast = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M623-271 168-727q-15-14-15-32.5t15-33.5q14-14 32.5-14t33.5 14l455 456v-223q0-19.75 13.675-33.375Q716.351-607 736.175-607 756-607 769.5-593.375 783-579.75 783-560v336q0 19.75-13.625 33.375T736-177H400q-19.75 0-33.375-13.675Q353-204.351 353-224.175 353-244 366.625-257.5 380.25-271 400-271z" />
  </Svg>
);