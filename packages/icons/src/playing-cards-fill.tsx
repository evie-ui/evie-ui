import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPlayingCardsFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m618-409 27-96q3-15-1.5-29T626-556l-82-57q-10-6-21.5-2T507-599l-26 96q-4 15 .5 29t17.5 22l83 56q10 7 21.5 3t14.5-16M170-152l-67-25q-33-14-44-48.5t8-67.5l103-245zm142 59q-34 0-58-23.5T230-174v-314l136 368q3 8 7 14t10 13zm223-12q-37 13-71.5-3T415-161L227-668q-13-37 3.5-72t53.5-49l304-110q37-13 72.5 3.5T710-843l187 506q14 37-2 72.5T842-216z" />
  </Svg>
);
