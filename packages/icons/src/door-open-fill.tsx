import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDoorOpenFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M143-95q-20.75 0-34.375-13.675Q95-122.351 95-143.175 95-163 108.625-176.5 122.25-190 143-190h32v-563q0-38.75 27.625-66.375T270-847h420q39.75 0 67.375 27.625T785-753v563h33q19.75 0 33.375 13.675Q865-162.649 865-142.825 865-122 851.375-108.5 837.75-95 818-95zm547-95v-563H504v-54q51 9 83.5 48.5T620-668v432q0 34.658-22.679 60.962Q574.642-148.734 541-143v-47zM427.5-437q17.5 0 30-13t12.5-30.5q0-17.5-12.625-30.5T427-524q-18 0-31 13.125T383-480q0 17 13 30t31.5 13" />
  </Svg>
);
