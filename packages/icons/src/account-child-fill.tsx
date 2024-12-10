import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAccountChildFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-906q89 0 166.5 33.5t135 91q57.5 57.5 91 135T906-480q0 89-33.5 166.5t-91 135Q724-121 646.5-88T480-55q-89 0-166.5-33t-135-90.5Q121-236 88-313.5T55-480q0-89 33-166.5t90.5-135q57.5-57.5 135-91T480-906m-86 220q0 38 24 62t62 24q38 0 62-24t24-62q0-38-24-62t-62-24q-38 0-62 24t-24 62m86 126q-66 0-133 28.5T280-450v159q0 48 70.5 81T502-183v-78q-34-1-70-9t-61-22q1-26 32.5-41.5T480-349q45 0 77 12t32 34v99q45-10 68-35.5t23-51.5v-159q0-53-67-81.5T480-560m0 189q-24 0-40-16t-16-40q0-24 16-40t40-16q24 0 40 16t16 40q0 24-16 40t-40 16" />
  </Svg>
);
