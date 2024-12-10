import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgFileSave = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m700-238-54-55q-10-9-21.622-9T604-293q-10 10-10 21.622T604-251l92 93q14.727 14 34.364 14Q750-144 764-158l93-93q9-8.756 9-20.378T857-293q-10-9-21.622-9T815-293l-55 55v-151q0-12.75-8.675-21.375-8.676-8.625-21.5-8.625-12.825 0-21.325 8.625T700-389zM610-60h240q12.75 0 21.375 8.675Q880-42.649 880-29.825 880-17 871.375-8.5T850 0H610q-12.75 0-21.375-8.675Q580-17.351 580-30.175 580-43 588.625-51.5T610-60m-373-83q-39.05 0-66.525-27.475Q143-197.95 143-237v-566q0-39.05 27.475-66.525Q197.95-897 237-897h269q19.117 0 36.443 7.457Q559.768-882.087 573-869l176 176q13.087 13.232 20.543 30.557Q777-645.117 777-626v100q0 19.75-13.675 33.375Q749.649-479 729.825-479 710-479 696.5-492.625 683-506.25 683-526v-88H565q-29 0-50-21t-21-50v-118H237v566h236q19.75 0 33.375 13.675Q520-209.649 520-189.825 520-170 506.375-156.5 492.75-143 473-143zm0-94v-566z" />
  </Svg>
);