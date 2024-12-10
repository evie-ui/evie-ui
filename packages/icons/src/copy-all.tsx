import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCopyAll = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M369-234q-39.462 0-67.231-27.769Q274-289.538 274-329v-482q0-39.463 27.769-67.231Q329.538-906 369-906h362q39.463 0 67.231 27.769Q826-850.463 826-811v482q0 39.462-27.769 67.231Q770.463-234 731-234zm0-95h362v-482H369zM141.825-773Q122-773 108.5-786.675q-13.5-13.676-13.5-34Q95-841 108.675-854.5q13.676-13.5 33.5-13.5Q162-868 175.5-854.325q13.5 13.676 13.5 34Q189-800 175.325-786.5q-13.676 13.5-33.5 13.5m0 179Q122-594 108.5-607.675 95-621.351 95-641.175 95-661 108.675-674.5q13.676-13.5 33.5-13.5Q162-688 175.5-674.325q13.5 13.676 13.5 33.5Q189-621 175.325-607.5q-13.676 13.5-33.5 13.5m0 180Q122-414 108.5-427.675q-13.5-13.676-13.5-34Q95-482 108.675-495.5q13.676-13.5 33.5-13.5Q162-509 176-495.325q14 13.676 14 34Q190-441 175.825-427.5q-14.176 13.5-34 13.5m0 180Q122-234 108.5-247.675 95-261.351 95-281.088q0-19.737 13.675-33.824Q122.351-329 142.175-329 162-329 175.5-314.737q13.5 14.263 13.5 34Q189-261 175.325-247.5q-13.676 13.5-33.5 13.5m0 179Q122-55 108.5-68.675 95-82.351 95-102.175 95-122 108.675-135.5q13.676-13.5 33.5-13.5Q162-149 175.5-135.325q13.5 13.676 13.5 33.5Q189-82 175.325-68.5 161.649-55 141.825-55m178.912 0Q301-55 287.5-68.675q-13.5-13.676-13.5-33.5Q274-122 287.675-135.5q13.676-13.5 33.413-13.5 19.737 0 33.824 13.675Q369-121.649 369-101.825 369-82 354.737-68.5q-14.263 13.5-34 13.5m180.088 0Q481-55 467.5-68.675q-13.5-13.676-13.5-33.5Q454-122 467.675-135.5q13.676-13.5 33.5-13.5Q521-149 534.5-135.325q13.5 13.676 13.5 33.5Q548-82 534.325-68.5 520.649-55 500.825-55m178.912 0Q660-55 646.5-68.675q-13.5-13.676-13.5-33.5Q633-122 646.675-135.5q13.676-13.5 33.413-13.5 19.737 0 33.824 13.675Q728-121.649 728-101.825 728-82 713.737-68.5q-14.263 13.5-34 13.5" />
  </Svg>
);
