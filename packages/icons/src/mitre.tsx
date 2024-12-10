import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgMitre = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M540-441v-78q0-38.75 27.394-66.375Q594.787-613 635-613h5v-87h-5q-40.213 0-67.606-27.394Q540-754.787 540-795v-76q0-40.213 27.394-67.606Q594.787-966 635-966h110q40.213 0 67.606 27.394Q840-911.213 840-871v76q0 40.213-27.394 67.606Q785.213-700 745-700h-5v87h5q40.213 0 67.606 27.625Q840-557.75 840-519v78q0 38.75-27.394 66.375Q785.213-347 745-347H635q-40.213 0-67.606-27.625Q540-402.25 540-441m95 0h110v-78H635zm0-354h110v-76H635zM120-89v-77q0-38.75 27.394-66.375T215-260h5v-87h-5q-40.212 0-67.606-27.625Q120-402.25 120-441v-78q0-38.75 27.394-66.375T215-613h5v-87h-5q-40.212 0-67.606-27.394Q120-754.787 120-795v-76q0-40.213 27.394-67.606Q174.788-966 215-966h111q38.75 0 66.375 27.394Q420-911.213 420-871v76q0 40.213-27.625 67.606Q364.75-700 326-700h-6v87h6q38.75 0 66.375 27.625T420-519v78q0 38.75-27.625 66.375T326-347h-6v87h6q38.75 0 66.375 27.625T420-166v77q0 40.212-27.625 67.606Q364.75 6 326 6H215q-40.212 0-67.606-27.394Q120-48.788 120-89m95 0h111v-77H215zm0-352h111v-78H215zm0-354h111v-76H215zm56-38" />
  </Svg>
);
