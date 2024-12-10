import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgCamping = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M70-110v-120q0-16 5-30t14-27l332-450-42-58q-6-7-8-16t-.5-17.5q1.5-8.5 6.5-17t13-14.5q15-12 34-8.5t32 18.5l24 34 25-33q12-15 31-18.5t35 8.5q15 12 18 31.5t-9 34.5l-40 56 331 450q9 13 14 27t5 30v120q0 20-13.5 33.5T843-63H118q-21 0-34.5-13.5T70-110m410-547L165-230v73h111l167-233q14-20 37-20t38 20l166 233h111v-73zm-87 500h174l-87-124zm126-233 165 233-166-233q-15-20-38-20t-37 20L276-157l167-233q14-20 37.5-20t38.5 20" />
  </Svg>
);
