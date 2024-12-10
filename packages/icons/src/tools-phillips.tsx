import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgToolsPhillips = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M305-80q-19.75 0-33.375-13.675Q258-107.351 258-128.175 258-148 271.625-161.5 285.25-175 305-175h350q19.75 0 33.875 13.675Q703-147.649 703-127.825 703-107 688.875-93.5 674.75-80 655-80zm0-155q-19.75 0-33.375-13.625T258-282v-352q0-14.75 4.5-29.25T276-691l127.812-168.766Q411-869 421.5-874.5T443-880h74q11 0 21.5 5.5T556-860l128 169q9 13.25 14 27.75t5 29.25v352q0 19.75-14.125 33.375T655-235zm47-94h256v-63L480-520 352-392zm0-185 85-85v-147l-85 112zm256 0v-120l-84-112v147zm0 185H352z" />
  </Svg>
);
