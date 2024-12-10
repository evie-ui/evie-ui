import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgRainyFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M566-39q-19 8-38 2t-27-24l-69-138q-8-18-2-36.5t24-27.5q18-8 37-2t27 24l69 138q8 18 2.5 37T566-39m240-1q-19 8-38 2t-27-24l-69-138q-8-18-2-36.5t24-27.5q18-8 37-2t27 24l69 138q8 18 2.5 37T806-40m-480 0q-19 8-38 2.5T261-61l-69-138q-8-18-1.5-36.5T215-263q18-8 37-2.5t27 23.5l69 139q8 18 2 36.5T326-40m-36-294q-94 0-160.5-67T63-561q0-84 58-150t145-75q35-56 90.5-89.5T480-909q93 0 158 58t84 144q82 8 128.5 61.5T897-521q0 77-54.5 132T710-334z" />
  </Svg>
);
