import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgScanFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M890-353H70q-19.75 0-33.375-13.675Q23-380.351 23-400.175 23-420 36.625-433.5 50.25-447 70-447h820q19.75 0 33.375 13.675Q937-419.649 937-399.825 937-380 923.375-366.5 909.75-353 890-353M731-625 542-811v139q0 19.75 13.625 33.375T589-625zM229-55q-38.75 0-66.375-27.625T135-149v-144h691v144q0 38.75-28.125 66.375T731-55zm-94-452v-304q0-38.75 27.625-66.875T229-906h323q19.444 0 37.222 8Q607-890 620-877l177 177q13 13 21 30.778T826-632v125z" />
  </Svg>
);
