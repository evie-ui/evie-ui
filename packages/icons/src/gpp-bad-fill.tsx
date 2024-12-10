import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgGppBadFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m480-441 68 65q11 11 26 11t27-12q12-12 12-27t-12-26l-67-65 67-66q11-11 11.5-26T601-614q-12-11-26.5-11T548-614l-68 65-68-65q-11-11-25.5-11.5T360-614q-11 11-11.5 26.5T360-561l66 66-66 66q-12 11-12 25.5t12 26.5q12 12 26.5 12t26.5-12zm0 381q-8 0-15.5-1.5T450-66q-144-47-229.5-177.5T135-523v-189q0-30 16.5-55t44.5-35l251-94q16-6 33-6t33 6l251 94q28 10 45 35t17 55v189q0 149-86 279.5T510-66q-7 3-14.5 4.5T480-60" />
  </Svg>
);
