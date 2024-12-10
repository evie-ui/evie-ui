import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLineCurve = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M760-143q-20 0-33.5-14T711-191q-9-104-53-195T544-546.5q-70-69.5-161.5-113T187-711q-19-1-31.5-15.5T143-760q0-21 15-34t36-12q121 10 228 60t188.5 131Q692-534 743-428t62 227q2 23-10.5 40.5T760-143" />
  </Svg>
);
