import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgColors = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M302-125 85-342q-16-15.118-23-34.559Q55-396 55-416.7t7-39Q69-474 85-490l228-227-93-94q-14-13-13.5-31.5T221-874q13-13 31.423-13T284-874l383 384q15.474 16 23.237 34.3 7.763 18.3 7.763 39t-7.763 40.141Q682.474-357.118 667-342L450-125q-15 15-33.8 22.5-18.8 7.5-39.5 7.5t-39.641-7q-18.941-7-35.059-23m74-528L148-425h456zM816.656-95q-37.345 0-63-26.682Q728-148.364 728-187q0-24.28 6.5-47.64T758-276l32-38q10-13 26-12.5t27 12.5l31 38q16 18 24 41.36t8 47.64q0 38.636-26 65.318Q854-95 816.656-95" />
  </Svg>
);
