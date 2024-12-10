import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSportsFootball = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M362-194 193-363q-7 45-5 92.5t8 71.5q31 7 79.5 10t86.5-5m76-9q64-14 118-41.5t93.072-66.572Q687-348 713.5-400.5T756-523L523-756q-62 13-117.5 40.5T311-649q-38 38-64.5 92T203-438zm329-394q8-38 5.5-86t-8.5-78q-32-7-80-10t-86 5zM296-95q-58 0-106-9t-63-24.522Q112-145 103.5-192T95-296q0-131 37.5-243.5T239-721q70-70 182.423-107.5Q533.847-866 664-866q58 0 106 9.5t63 25.022Q848-815 857-768t9 104q0 130-38 243T721-239q-70 70-182.5 107T296-95m51-294 224-224q9-9 21-9t21 9q9 9 9 21t-9 21L389-347q-9 9-21 9t-21-9q-9-9-9-21t9-21" />
  </Svg>
);
