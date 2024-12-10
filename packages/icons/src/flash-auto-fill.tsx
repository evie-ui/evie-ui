import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFlashAutoFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m704-630-30 79q-4 11-12 17.5t-19 6.5q-19 0-29-14.5t-4-31.5l101-279q6-18 21-29t34-12q18-1 33 11t22 30l99 279q7 17-4 31.5T887-527q-12 0-21-7t-12-18l-29-78zm14-56h95l-40-126h-16zM203-88q-11-4-18-12t-7-21v-227h-43q-34 0-57.5-23.5T54-429v-379q0-40 27.5-67.5T148-903h274q37 0 62.5 30t11.5 65l-53 155h66q40 0 55.5 32t-9.5 68L242-101q-8 11-18.5 13.5T203-88" />
  </Svg>
);
