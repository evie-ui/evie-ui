import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDatabaseFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M479-522q172 0 279.5-53T866-694q0-68-107.5-120T479-866q-171 0-277.5 52T95-694q0 66 106.5 119T479-522m1 91q73 0 142-11.5t123.5-33Q800-497 833-527t33-66v122q0 37-33 67t-87.5 51Q691-332 622-320.5T480-309q-73 0-142-11.5t-123.5-33Q160-375 127-405t-33-66v-122q0 36 33 65.5t87.5 51Q269-455 338-443t142 12m0 213q73 0 142-11.5t123.5-33Q800-284 833-314t33-67v124q0 36-33 66t-87.5 51.5Q691-118 622-106.5T480-95q-73 0-142-12t-123.5-33.5Q160-162 127-191.5T94-257v-124q0 36 33 66t87.5 51.5Q269-242 338-230t142 12" />
  </Svg>
);
