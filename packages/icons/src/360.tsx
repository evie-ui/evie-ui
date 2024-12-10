import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const Svg360 = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M373-269q-150-17-234-72T55-486q0-100 123-158t302-58q179 0 302.5 57.5T906-486q0 67-57 116t-155 75q-18 5-33-7.5T646-335q0-21 12.5-37.5T691-396q57-18 88.5-43t31.5-47q0-34-77.5-77.5T480-607q-175 0-253 43.5T149-486q0 45 48.5 73T388-358l-59-59q-11-10-11-24.5t11-25.5q10-11 24.5-11t25.5 11l113 112q14 14 14 34t-14 34L378-173q-11 11-25.5 10.5T327-174q-11-11-10.5-25t11.5-25z" />
  </Svg>
);
