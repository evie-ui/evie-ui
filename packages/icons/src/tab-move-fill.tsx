import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTabMoveFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-39 0-66.5-27.5T95-189v-115q0-18 12-30.5t30-12.5q18 0 30.5 12.5T180-304v124h600v-548H180v124q0 18-12 30t-31 12q-18 0-30-12t-12-30v-167q0-39 27.5-67t66.5-28h582q39 0 67 28t28 67v582q0 39-28 66.5T771-95zm281-312H142q-20 0-33.5-13.5T95-454q0-20 13.5-34t33.5-14h328l-44-43q-13-14-13-33t14-33q14-15 33-15t34 15l123 123q14 14 14 34t-14 34L493-296q-14 15-33.5 14T426-297q-14-14-13.5-32.5T426-362z" />
  </Svg>
);
