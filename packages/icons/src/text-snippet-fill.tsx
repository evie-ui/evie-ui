import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTextSnippetFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-38.775 0-66.388-27.612Q95-150.225 95-189v-582q0-39.188 27.612-67.094Q150.225-866 189-866h375q19.2 0 36.6 8 17.4 8 31.4 21l205 205q13 14 21 31.4t8 36.6v375q0 38.775-27.906 66.388Q810.188-95 771-95zm114.816-202h353.569q13.365 0 22.49-9.888 9.125-9.888 9.125-23.48 0-13.593-9.2-22.612Q670.6-362 657-362H302.656q-13.406 0-22.531 9.195Q271-343.61 271-330.018q0 13.593 9.837 23.306Q290.675-297 303.816-297m-.048-147h352.665q13.317 0 22.942-9.888T689-477.175q0-13.4-9.838-23.113-9.837-9.712-22.93-9.712H303.567q-13.317 0-22.942 9.888T271-476.825q0 13.4 9.837 23.113Q290.675-444 303.768-444M304-592h211.922q13.828 0 23.453-9.888T549-625.175q0-13.4-9.838-23.112Q529.325-658 516-658H304.078q-13.828 0-23.453 9.888T271-624.825q0 13.4 9.837 23.112Q290.675-592 304-592" />
  </Svg>
);
