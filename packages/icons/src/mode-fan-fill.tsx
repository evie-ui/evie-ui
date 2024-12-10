import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgModeFanFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M418-22q-63.077 0-96.038-37.5Q289-97 289-148.3q0-31.2 13.766-60.504T347-258q20-13 34-34.5t22-59.5q2 1 4.5 2t3.552 2L290-306q-19.959 8-39.48 12.5Q231-289 212-289q-76 0-133-64.444Q22-417.889 22-542q0-62.077 37-95.538Q96-671 145-671q32 0 62.5 13.5T258-613q13 20 36 35.5t58 20.5q0 2-1 3.5t-3 3.552L306-670q-8-18.947-12.5-37.956-4.5-19.009-4.5-38.017 0-76.036 64.148-134.531Q417.297-939 542-939q62.077 0 95.538 38Q671-863 671-816q0 32-14 63t-44 50q-24 17-38 42.5T558-607q-2 0-4-2t-4.052-2L670-656q19-7 37.919-11 18.918-4 37.732-4Q843-671 891-592.722 939-514.444 939-418q0 62.587-40 95.793Q859-289 811.047-289 780-289 751-303.5 722-318 703-347q-14-20-35.5-34.5T608-404q0-2 1-3t2-3.052L655-290q7 18 11.5 36.5T671-217q0 77.061-63.972 136.03Q543.056-22 418-22m62.118-404Q503-426 518.5-442.118q15.5-16.117 15.5-38Q534-503 518.382-518.5q-15.617-15.5-38.5-15.5Q458-534 442-518.382q-16 15.617-16 38.5Q426-458 442.118-442q16.117 16 38 16" />
  </Svg>
);