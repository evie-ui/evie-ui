import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSportsScoreFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M398-747h65v-64h-65zm129 0v-64h65v64zM398-489v-64h65v64zm258-129v-64h65v64zm0 129v-64h65v64zm-129 0v-64h65v64zm129-258v-64h65v64zm-193 65v-65h64v65zM286.325-137Q266-137 252.5-150.625 239-164.25 239-184v-580q0-19.75 13.675-33.375 13.676-13.625 34-13.625 20.325 0 33.922 13.625Q334.194-783.75 334.194-764v17H398v64.667h-64v64.666h64V-553h-64v369q0 19.75-13.675 33.375-13.676 13.625-34 13.625M592-553v-65h64v65zm-129 0v-65h64v65zm-65-65v-64h65v64zm129 0v-64h65v64zm65-64v-65h64v65z" />
  </Svg>
);
