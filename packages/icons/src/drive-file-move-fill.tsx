import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDriveFileMoveFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-135q-39 0-66.5-28T55-229v-502q0-38 27.5-66.5T149-826h222q18 0 36 8t31 21l43 43h330q38 0 66.5 28t28.5 66v431q0 38-28.5 66T811-135zm355-259-26 26q-11 11-11 25.5t13 27.5q12 12 28 12t28-12l85-85q14-14 14-34t-14-34l-85-85q-12-12-28-12t-30 14q-11 11-11 25.5t11 25.5l26 26H351q-17 0-28.5 11.5T311-434q0 17 11.5 28.5T351-394z" />
  </Svg>
);
