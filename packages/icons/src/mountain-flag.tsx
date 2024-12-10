import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMountainFlag = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m333-421 69 45 57-27q9-5 20.5-5t21.5 5l55 29 72-48-45-93H379zM195-142h570L660-356l-74 49q-10.6 8.143-23.3 8.571Q550-298 538-304l-58-28-58 28q-12 6-24 5t-23-8l-74-50zm-65 87q-26.5 0-40.25-22T88-122l210-428q12-24 34.468-38 22.467-14 50.532-14h54v-256q0-19.75 13.625-33.875T484-906h204q12.13 0 18.565 11.5Q713-883 708-871l-19 38q-2 5-2 11t2 11l19 38q5 12-1.435 23-6.435 11-18.565 11H524v137h50q27.931 0 49.917 14.5T658-549l213 427q12 23-1.75 45T829-55zm350-277" />
  </Svg>
);
