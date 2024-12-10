import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDishwasherGenFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M331.667-664Q349-664 361-675.675q12-11.676 12-29.5Q373-723 360.825-734.5 348.649-746 331.316-746q-17.334 0-29.325 11.965t-11.991 29Q290-688 302.167-676q12.166 12 29.5 12m131.315 0q17.632 0 29.825-11.965Q505-687.93 505-704.965T492.632-734q-12.369-12-30-12Q445-746 433-734.325q-12 11.676-12 29.5Q421-687 433.175-675.5q12.176 11.5 29.807 11.5m17.251 427q61.015 0 104.391-41.004Q628-319.007 628-379.966 628-408 617-434t-32-47l-72-71q-14-13-33-13t-33 13l-68 67q-21 21-34 47.849-13 26.849-13 57.151-.13 60.811 43.505 101.905Q419.14-237 480.233-237m-.115-79q-26.618 0-45.868-18.845Q415-353.69 415-379.897q0-13.103 6.458-25.677 6.459-12.574 16.375-21.449L479-467l45 44q9 10 15 20.5t6 22.397q0 26.293-19.132 45.198Q506.735-316 480.118-316M229-55q-39.8 0-66.9-27.1Q135-109.2 135-149v-662q0-40.213 27.1-67.606Q189.2-906 229-906h502q40.213 0 67.606 27.394Q826-851.213 826-811v662q0 39.8-27.394 66.9Q771.213-55 731-55z" />
  </Svg>
);
