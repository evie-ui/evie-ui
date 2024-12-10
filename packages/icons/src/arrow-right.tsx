import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgArrowRight = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M407.316-272Q397-272 390-278.8q-7-6.8-7-17.2v-368q0-10.4 7.136-17.2 7.137-6.8 17.319-6.8Q410-688 424-680l175.2 175.2q4.8 4.8 7.3 11.453 2.5 6.654 2.5 13.438 0 6.784-2.5 13.347-2.5 6.562-7.304 11.366L423.882-279.882Q420-276 415.873-274q-4.127 2-8.557 2" />
  </Svg>
);
