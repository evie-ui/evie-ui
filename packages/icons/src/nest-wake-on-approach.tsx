import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNestWakeOnApproach = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M829.882-494q-27.965 0-47.424-19.542Q763-533.083 763-561v-259q0-27.917 19.576-47.458Q802.152-887 830.118-887q27.965 0 47.424 19.542Q897-847.917 897-820v259q0 27.917-19.576 47.458Q857.848-494 829.882-494M400-494q-73 0-124-51t-51-124.5q0-73.5 51-124T400-844q73 0 124.5 50.5t51.5 124q0 73.5-51.5 124.5T400-494M55-122v-120.795q0-41.172 22.172-75.605Q99.344-352.833 137-371q62-28 128.608-45 66.607-17 134.316-17 68.076 0 133.894 17Q599.635-399 662-371q38.906 16.245 61.453 51.311Q746-284.623 746-242.795V-122zm94-94h502v-23q0-15.931-9-28.966Q633-281 618-289q-52-24-106.478-36.5Q457.044-338 400.233-338q-56.81 0-112.522 12Q232-314 181.344-288.839 166-281 157.5-267.966 149-254.931 149-239zm251-372q34 0 57.5-23.5T481-669q0-34-23.296-57.5-23.297-23.5-57.5-23.5Q366-750 342.5-726.319T319-669.5q0 34.5 23.5 58T400-588m0 372" />
  </Svg>
);
