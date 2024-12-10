import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDataExplorationFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M800-120q19 0 30.5-12.5T842-161q0-19-13-30t-29-11q-15 0-28 11t-13 30q0 16 13 28.5t28 12.5M476-55q-119 0-210-55T126-243l177-178 96 82q14 13 32.5 12.5T463-340l153-154v38q0 17 11.5 28.5T656-416q17 0 28.5-11.5T696-456v-127q0-20-13.5-33.5T649-630H522q-17 0-28.5 11.5T482-590q0 17 11.5 28t28.5 11h38L429-419l-98-83q-14-12-33-11t-31 13L86-320q-17-39-24-78.5T55-476q0-88 33-166.5t91-137Q237-838 314.5-872T480-906q88 0 165.5 34T781-779.5q58 58.5 91.5 137T906-476v305q0 48-34.5 82T789-55z" />
  </Svg>
);
