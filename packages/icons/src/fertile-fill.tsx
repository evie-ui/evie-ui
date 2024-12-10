import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFertileFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M520-846q32 37 62.526 75.827Q613.053-731.346 640-690l172-128q11-8 24-9.5t25 4.5q11 7 19 18t8 24v301q0 83.97-32.421 158.703t-87.5 129.515Q713-137 638.362-105t-158.5 32Q396-73 321.276-104.921q-74.725-31.921-129.5-87Q137-247 105-321.594 73-396.188 73-480v-301q0-13 7.5-24T99-823q12-6 25-4.5t24 9.5l172 128q26.623-42 56.812-80.5Q407-809 440-846q8-9 18.5-14t21.5-5q11 0 21.5 5t18.5 14" />
  </Svg>
);
