import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFormatLetterSpacing2 = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M258-88q-14 14-33 14t-33-14L88-192q-14-14-14-33.5T88-259l104-102q14-14 33.5-14t36.5 17q12 13 12 30t-12 30l-26 25h488l-25-25q-13-13-12-30.5t17-32.5q14-15 33-15t33 15l103 103q14 14 13.5 33T873-192L769-88q-15 14-34.5 14T699-91q-13-12-13-29.5t13-30.5l27-27H236l25 26q12 14 12 31.5T258-88m37-432 136-361q4-11 13.5-18t21.5-7h28q12 0 22 7.5t14 18.5l135 359q8 21-5 38t-36 17q-14 0-25.5-8T583-495l-27-78H397l-27 81q-5 12-14 19t-22 7q-21 0-33.5-17t-5.5-37m119-114h130l-63-188h-4z" />
  </Svg>
);