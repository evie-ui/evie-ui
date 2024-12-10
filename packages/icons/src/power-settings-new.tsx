import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPowerSettingsNew = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M433-485v-337q0-20 13.5-34t33.5-14q20 0 33.5 14t13.5 34v337q0 20-13.5 33.5T480-438q-20 0-33.5-13.5T433-485m47 392q-80 0-150-30t-122.5-82.5Q155-258 125-328T95-478q0-72 24.5-136T192-731q14-15 35-16t36 13q14 14 13 33.5T263-665q-36 38-55 86t-19 101q0 121 85 206t206 85q121 0 206-85t85-206q0-54-19.5-102T698-667q-13-16-14-36t13-34q15-15 36-13.5t36 17.5q47 53 72 118.5T866-478q0 80-30.5 150t-83 122.5Q700-153 630-123T480-93" />
  </Svg>
);
