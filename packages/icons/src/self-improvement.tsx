import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSelfImprovement = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M261-149q-31.333 0-51.167-19.871Q190-188.742 190-220.129 190-242 201-261.5q11-19.5 31.227-27.5L397-354v-113q-59 65-117.632 100.836Q220.737-330.329 149-323q-16.381 3-28.19-9.895Q109-345.789 109-363q0-16.756 12-28.878T150-407q57.374-7.133 103.687-36.567Q300-473 336-520l58-66q11.419-14 27.145-22.5Q436.871-617 456-617h48q19.129 0 35.355 9 16.226 9 27.645 23l58 67q38 45 83.313 74.433Q753.626-414.133 810-407q17 3 29 15.122T851-363q0 17.211-11.81 30.105Q827.381-320 811-323q-71.737-7.329-130.368-43.164Q622-402 563-467v113l166 65q19 8 30 27.449t11 41.256Q770-189 750.167-169 730.333-149 699-149H396v-22q0-29 16.5-43.5T454-229h133q8 0 14-6t6-14q0-8-6-14t-14-6H454q-43 0-69.5 27T358-171v22zm219.248-528Q445-677 420.5-701.619 396-726.237 396-762q0-35.35 24.252-59.675Q444.504-846 479.752-846 515-846 539.5-821.54t24.5 60q0 35.54-24.252 60.04t-59.5 24.5" />
  </Svg>
);
