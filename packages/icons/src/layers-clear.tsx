import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgLayersClear = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m673-409-67-67 121-94-247-192-91 69-67-67 100-78q26-20 57.947-19.5Q511.895-857 538-837l247 193q37 28.353 37 73.676Q822-525 785-496zm111 110-68-67 61-47q13.105-9 28.553-9 15.447 0 28.595 10Q852-398 852.5-375T835-338zm13 214L671-210 538-107q-25.316 20-57.658 19.5T422-108L127-337q-19-14.294-18.5-37.147Q109-397 127.075-411q14.302-10 29.614-10Q172-421 186-411l294 229 124-96.482L550-333h27l-51 41q-20.842 15.056-45.921 14.528Q455-278 435-294L152.05-513.828Q124-535.882 123.5-570.529 123-605.176 151-627l58-46L91-791q-11-10-11-24.5T91.053-841q10.631-11 25.5-11 14.868 0 25.447 11l706 707q11 11 11.5 24.5T848-85q-11.411 12-25.5 12T797-85M498-585" />
  </Svg>
);
