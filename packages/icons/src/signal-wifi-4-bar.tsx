import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSignalWifi4Bar = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M410-145 55-537q-11-11.081-16-25.932-5-14.852-5-29.203 0-17.865 7-34.26Q48-642.791 62-656q94-73 195.5-115T480-813q121 0 222.5 42T898-656q14 13.12 21 29.4t7 34.2q0 14.4-5 29.329-5 14.928-15 26.071L551-145q-15 17-33 24.5t-38 7.5q-20 0-38-7.5T410-145" />
  </Svg>
);
