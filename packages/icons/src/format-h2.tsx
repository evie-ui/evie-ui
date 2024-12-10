import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgFormatH2 = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M141.825-258Q122-258 108.5-271.625 95-285.25 95-306v-349q0-19.75 13.675-33.375Q122.351-702 142.175-702 162-702 175.5-688.375 189-674.75 189-655v128h137v-128q0-19.75 13.675-33.375Q353.351-702 373.175-702 393-702 406.5-688.375 420-674.75 420-655v349q0 20.75-13.675 34.375Q392.649-258 372.825-258 353-258 339.5-271.625 326-285.25 326-306v-127H189v127q0 20.75-13.675 34.375Q161.649-258 141.825-258M587-258q-19.75 0-33.375-13.625T540-306v-127q0-38.75 27.394-66.375Q594.787-527 635-527h136v-80H587q-19.75 0-33.375-13.675-13.625-13.676-13.625-34Q540-675 553.625-688.5 567.25-702 587-702h184q40.213 0 67.606 27.394Q866-647.213 866-607v80q0 38.75-27.394 66.375Q811.213-433 771-433H635v80h183q19.625 0 33.812 13.675 14.188 13.676 14.188 34Q866-285 851.812-271.5 837.625-258 818-258z" />
  </Svg>
);
