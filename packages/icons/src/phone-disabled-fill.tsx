import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPhoneDisabledFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M788-86 595-276q-110 90-218 135.5T164-95q-29 0-49-19.5T95-164v-141q0-30 17.5-51.5T159-384l99-23q24-7 44.5-.5T341-383l100 101q23-9 46-27.5t41-33.5L88-784q-11-12-11-26t12-25q11-11 26-10.5t26 10.5l699 700q10 11 9.5 24.5T838-86q-11 10-25 10.5T788-86m-90-291-71-69q13-16 26.5-35t26.5-36l-104-95q-19-16-24-34.5t1-45.5l27-110q6-32 26.5-48t50.5-16h140q30 0 49.5 19.5T866-796q0 99-45 213.5T698-377" />
  </Svg>
);
