import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPentagon = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M296.01-197H663l125-373-308-215-308 215zM295-103q-30.412 0-55.706-17.682Q214-138.364 205-167L81-541q-10-29-.053-58.962Q90.895-629.923 117-648l310-216q23.746-16 52.873-16T534-864l309 216q26.105 18.077 36.053 48.038Q889-570 879-541L755-167q-9 28.636-34.294 46.318Q695.412-103 665-103zm185-389" />
  </Svg>
);
