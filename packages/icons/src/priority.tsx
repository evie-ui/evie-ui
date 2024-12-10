import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPriority = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M351-95q-107.25 0-181.625-74.375T95-351v-258q0-107 74.375-182T351-866h258q107 0 182 75t75 182v258q0 107.25-75 181.625T609-95zm86-222 248-248-51-51-197 197-97-97-51 51zm-86 128h258q68.237 0 115.119-46.881Q771-282.763 771-351v-258q0-68.237-46.881-115.119Q677.237-771 609-771H351q-68.237 0-115.119 46.881Q189-677.237 189-609v258q0 68.237 46.881 115.119Q282.763-189 351-189m129-291" />
  </Svg>
);
