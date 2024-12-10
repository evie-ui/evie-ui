import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgViewModule = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M87-269v-422q0-39.188 27.612-67.094Q142.225-786 181-786h599q39.188 0 67.094 27.906Q875-730.188 875-691v422q0 38.775-27.906 66.388Q819.188-175 780-175H181q-38.775 0-66.388-27.612Q87-230.225 87-269m534-241h159v-181H621zm-221 0h161v-181H400zm-219 0h159v-181H181zm0 241h159v-181H181zm219 0h161v-181H400zm221 0h159v-181H621z" />
  </Svg>
);
