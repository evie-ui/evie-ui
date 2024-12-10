import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBackgroundGridSmallFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95h53v-147H95v53q0 39.8 27.1 66.9Q149.2-95 189-95m113 0h148v-147H302zm208 0h147v-147H510zm209 0h52q40.213 0 67.606-27.1Q866-149.2 866-189v-53H719zM95-718h147v-148h-53q-39.8 0-66.9 27.394Q95-811.213 95-771zm0 208h147v-148H95zm0 208h147v-148H95zm207-416h148v-148H302zm0 208h148v-148H302zm0 208h148v-148H302zm208-416h147v-148H510zm0 208h147v-148H510zm0 208h147v-148H510zm209-416h147v-53q0-40.213-27.394-67.606Q811.213-866 771-866h-52zm0 208h147v-148H719zm0 208h147v-148H719z" />
  </Svg>
);
