import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgVrpanoFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m425-419-49-66q-3-3-19-9-5 0-10 2t-9 6l-88 113q-6 9-1 19t15 8q55-7 108-10.5t108-3.5q51 0 101.5 3.5T683-348q8 1 25-2.5t3-21.5L587-532q-3-3-19-9-5 0-10 2.5t-9 6.5l-86 113q-3 3-19 9-5 0-10-2.5t-9-6.5M120-135q-27 0-46-19t-19-46v-560q0-27 19-46.5t46-19.5q15 0 42 9.5t71 20.5q44 12 104.5 21t142.5 9q82 0 142.5-9T727-796q44-11 71-20.5t42-9.5q27 0 46.5 19.5T906-760v560q0 27-19.5 46T840-135q-15 0-42-9t-71-21q-44-11-104.5-20.5T480-195q-82 0-142.5 9.5T233-165q-44 12-71 21t-42 9" />
  </Svg>
);
