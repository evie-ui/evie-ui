import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgRemoveDone = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M834-113 593-355l-89 90q-14 14-34 14t-34-14L254-448q-14-13-14-33t15-35q13-14 32.5-13.5T322-515l148 149 56-56-389-388q-11-10-11-25t11-26q11-11 26-10.5t26 11.5l697 697q10 11 10 25t-10 25q-11 11-26 11t-26-11M266-241 85-422q-14-14-13.5-33.5T86-489q14-15 33-15t34 15l146 146 68 69-33 33q-14 14-34 14t-34-14m429-215-69-67 195-195q14-14 33.5-13.5T888-717q14 14 14 33.5T888-650zm-97-97-68-67 96-96q14-14 33-14t34 14q14 14 14 34t-14 34z" />
  </Svg>
);
