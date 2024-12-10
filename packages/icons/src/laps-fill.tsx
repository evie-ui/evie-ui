import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLapsFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M63-520q0-123 85.5-210T357-817h246q123 0 208.5 87T897-520q0 106-64.5 188.5T665-229q-21 5-38.5-7T609-270q0-21 15.5-35t35.5-22q64-17 103.5-71T803-520q0-85-57.5-144T604-723H356q-84 0-141.5 59T157-520q0 74 44.5 131T318-321h28l-25-26q-13-13-10-30.5t16-30.5q15-14 33.5-14t33.5 14l103 103q14 15 14 34.5T497-237L393-133q-15 15-34.5 13.5T325-135q-13-13-13-31.5t13-31.5l26-26h-28q-113-8-186.5-94.5T63-520" />
  </Svg>
);
