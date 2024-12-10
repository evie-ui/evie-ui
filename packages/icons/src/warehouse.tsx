import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgWarehouse = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-763 151-632v441h98v-191q0-40.212 27.625-67.606Q304.25-477 343-477h274q38.75 0 66.375 27.394T711-382v191h98v-441zM57-191v-441q0-29 15.83-52.837Q88.66-708.673 117-720l328-131q17-6 35-6t35 6l329 131q27.34 11.327 43.17 35.163Q903-661 903-632v441q0 38.75-27.625 66.375T809-97H629v-297H331v297H151q-38.75 0-66.375-27.625T57-191m324 94v-60h60v60zm69-120v-60h60v60zm69 120v-60h60v60zM343-477h274z" />
  </Svg>
);
