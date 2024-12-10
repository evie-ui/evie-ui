import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAutoStoriesFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M482-132q-9 0-17.5-2t-15.5-7q-43-28-90.5-44.5T260-202q-40 0-78 11t-73 30q-32 16-62-1.5T17-215v-480q0-22 9.5-40.5T55-763q47-23 98.5-34T258-808q59 0 115.5 15T480-746v531q51-33 107-51.5T700-285q36 0 78.5 8t81.5 30v-535q12 5 23 9.5t23 9.5q19 9 28 27.5t9 40.5v492q0 31-30 45t-62-3q-35-19-73-30t-78-11q-50 0-96 16.5T516-141q-7 5-15.5 7t-18.5 2m99-213q-12 10-26.5 4T540-363v-313q0-5 1.5-9t4.5-7l212-216q11-11 26.5-5t15.5 22v341q0 5-2 9.5t-5 7.5z" />
  </Svg>
);