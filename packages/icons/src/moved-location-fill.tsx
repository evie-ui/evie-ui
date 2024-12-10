import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMovedLocationFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M741-355q-53 73-104.5 140T539-94q-11 9-24 13.5T488-76q-13 0-26.5-4.5T438-94q-47-40-99-90.5t-95.5-109q-43.5-58.5-72-124T143-552q0-143 97.5-244T480-897q35 0 67.5 8.5T611-868q17 5 30 18t13 31q0 21-14.5 34.5T604-771q-4 0-26-8-23-13-47.5-18.5T480-803q-102 0-172.5 73.5T237-552q0 77 62.5 168T480-182q46-42 92.5-101.5T664-410q8-11 19-19t25-8q20 0 33.5 14t13.5 34q0 9-4 17.5T741-355m32-230q-136-15-212.5 25T437-467q39-104 131.5-164T773-695l-64-64q-11-11-11-25t11-26q12-11 26-11t25 11l135 136q14 14 14 33.5T895-607L759-471q-11 11-25 11t-25-11q-11-12-11-26t11-25z" />
  </Svg>
);