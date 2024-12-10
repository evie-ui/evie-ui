import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLocationCity = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M86-180v-438q0-40.213 27.1-67.606Q140.2-713 180-713h153v-31q0-18.444 6.5-35.222Q346-796 360-808l54-53q27.648-27 65.824-27T546-861l53 51q14 14 21.5 31.522T628-742v195h152q40.213 0 67.606 27.394Q875-492.212 875-452v272q0 39.8-27.394 66.9Q820.213-86 780-86H180q-39.8 0-66.9-27.1Q86-140.2 86-180m94 0h106v-106H180zm0-166h106v-106H180zm0-166h106v-106H180zm247 332h106v-106H427zm0-166h106v-106H427zm0-166h106v-106H427zm0-166h106v-106H427zm247 498h106v-106H674zm0-166h106v-106H674z" />
  </Svg>
);
