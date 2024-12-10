import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPartlyCloudyNightFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M245-400q45 2 83 27.5t56 67.5l10 25h28q40 0 67.5 28.5T517-182q0 40-28.5 68.5T420-85H240q-65 0-111-46T83-242q0-66 46-112t116-46m327-93q62 63 142 89t165 27q10 1 20 6t16 13q6 9 8.5 19t-1.5 22q-38 133-152.5 213.5T517-25q-14 0-28-1.5T461-29q52-15 84-57.5t32-95.5q0-62-41-106t-101-51q-28-54-80.5-87.5T240-460q-36 0-70.5 12T106-413q-1-7-1-14v-14q-1-140 79.5-248.5T396-840q12-4 23-1.5t19 8.5q8 6 14 15.5t6 22.5q-2 84 25 162.5T572-493" />
  </Svg>
);