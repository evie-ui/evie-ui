import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTextureFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M164-95q-29-10-44.5-27T95-168l700-698q25 7 44.5 27t25.5 46zM95-350v-131l384-385h131zm0-324v-97q0-39 27.5-67t66.5-28h97zM674-95l192-191v97q0 39-28 66.5T771-95zm-324 0 516-515v131L481-95z" />
  </Svg>
);
