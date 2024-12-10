import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgThingsToDo = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M225-186v-175h-43q-17.05 0-29.025-11.965Q141-384.93 141-401.965T152.975-431Q164.95-443 182-443h44q7-87 66-143t152-67v-174q0-19.625 13.625-33.812Q471.25-875 491-875h197q19.75 0 33.375 14.188Q735-846.625 735-827v62q0 20.75-13.625 34.375T688-717H516v64q93 11 152 67t66 143h44q17.05 0 29.025 11.965Q819-419.07 819-402.035T807.025-373Q795.05-361 778-361h-43v175h115q17.75 0 29.375 11.675Q891-162.649 891-144.825 891-127 878.875-115T849-103H110q-17.75 0-29.375-12.175Q69-127.351 69-145.175 69-163 81.125-174.5T111-186zm83 0h131v-175H308zm213 0h131v-175H521zM313-443h334q-7-58-53.387-93.5-46.386-35.5-113.5-35.5Q413-572 366.5-536.5T313-443m167 0" />
  </Svg>
);