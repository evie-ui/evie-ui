import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgGoogleWifi = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M173-551h613l-9.738-180H183h1zm-20 292h653l-13-197H167zm41.955 124L186-165h-39q-39.044 0-65.522-27.824Q55-220.647 58-261l32-480q1.975-36.213 27.636-60.607Q143.297-826 179-826h601q35.795 0 61.522 24.313Q867.25-777.373 870-741l31 480q3 40.353-23.478 68.176Q851.044-165 812-165h-39.294L764-135z" />
  </Svg>
);
