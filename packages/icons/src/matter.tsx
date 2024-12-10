import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMatter = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-562q-63 0-124-27t-112-74l85-50q23 17 49 30t55 19v-205l47-29 47 29v205q30-7 56.5-20t48.5-29l85 50q-52 47-113 74t-124 27m-72 440-86-47q2-13 3-22.5t1-16.5q0-17-4-36.5T311-285L135-177l-49-26v-56l175-106q-21-21-45-37.5T166-429v-98q111 33 182.5 120.5T420-208q0 17-3 38.5t-9 47.5m144 0q-5-23-8.5-43t-3.5-43q0-111 72-198.5T795-527v98q-28 11-52 27t-44 36l176 107v56l-49 26-177-108q-7 21-10.5 40.5T635-208q0 7 .5 16.5T638-169z" />
  </Svg>
);
