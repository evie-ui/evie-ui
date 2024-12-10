import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgUpgrade = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M310-135q-20 0-33.5-13.5T263-182q0-20 13.5-33.5T310-229h340q20 0 33.5 13.5T697-182q0 20-13.5 33.5T650-135zm170-204q-20 0-33.5-13.5T433-386v-291l-71 71q-14 15-33 14.5T296-606q-14-14-14-32.5t14-33.5l150-150q7-7 16-11t18-4q9 0 18 4t16 11l150 150q14 15 14 34t-14 32q-14 15-33 15t-33-15l-71-71v291q0 20-13.5 33.5T480-339" />
  </Svg>
);
