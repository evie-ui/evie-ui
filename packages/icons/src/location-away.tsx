import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgLocationAway = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M55-95v-518l345-259 266 199q-32-3-62.5 4T547-645L400-754 149-565.667V-189h182q-1 6-1.5 11.167-.5 5.166-.5 10.833v72zm334 0v-87.67Q389-206 400.5-227t32.5-34q47-27 99.674-42Q585.348-318 640-318q54.652 0 107.231 14.509Q799.81-288.982 847-261q21 12 32.5 33.509Q891-205.983 891-183v88zm97-77h309v-29q-37-18-76.05-29-39.051-11-79.45-11-40.055 0-78.277 11.5Q523-218 486-200zm154.412-177Q586-349 547.5-387.088q-38.5-38.088-38.5-92.5t38.088-92.912q38.088-38.5 92.5-38.5t92.912 38.088q38.5 38.088 38.5 92.5T732.912-387.5q-38.088 38.5-92.5 38.5m-.307-77q22.995 0 38.445-15.555Q694-457.111 694-480.105q0-22.995-15.555-38.445Q662.889-534 639.895-534q-22.995 0-38.445 15.555Q586-502.889 586-479.895q0 22.995 15.555 38.445Q617.111-426 640.105-426M641-172" />
  </Svg>
);
