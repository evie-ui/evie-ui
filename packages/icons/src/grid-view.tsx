import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgGridView = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-510q-38.775 0-66.388-27.638Q95-565.275 95-605v-166q0-39.188 27.612-67.094Q150.225-866 189-866h167q38.775 0 66.388 27.906Q450-810.188 450-771v166q0 39.725-27.612 67.362Q394.775-510 356-510zm0 415q-38.775 0-66.388-27.612Q95-150.225 95-189v-167q0-38.775 27.612-66.388Q150.225-450 189-450h167q38.775 0 66.388 27.612Q450-394.775 450-356v167q0 38.775-27.612 66.388Q394.775-95 356-95zm416-415q-39.725 0-67.362-27.638Q510-565.275 510-605v-166q0-39.188 27.638-67.094Q565.275-866 605-866h166q39.188 0 67.094 27.906Q866-810.188 866-771v166q0 39.725-27.906 67.362Q810.188-510 771-510zm0 415q-39.725 0-67.362-27.612Q510-150.225 510-189v-167q0-38.775 27.638-66.388Q565.275-450 605-450h166q39.188 0 67.094 27.612Q866-394.775 866-356v167q0 38.775-27.906 66.388Q810.188-95 771-95zM189-605h167v-166H189zm416 0h166v-166H605zm0 416h166v-167H605zm-416 0h167v-167H189zm167-416" />
  </Svg>
);
