import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBorderAll = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M95-189v-582q0-39.188 27.612-67.094Q150.225-866 189-866h582q39.188 0 67.094 27.906Q866-810.188 866-771v582q0 38.775-27.906 66.388Q810.188-95 771-95H189q-38.775 0-66.388-27.612Q95-150.225 95-189m415-261v261h261v-261zm0-60h261v-261H510zm-60 0v-261H189v261zm0 60H189v261h261z" />
  </Svg>
);
