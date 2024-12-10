import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTrendingUpFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M89-236q-14-14-14.5-33.5T89-304l221-218q26.934-28 65.467-28T442-522l101 100 203-205h-71q-19.75 0-33.375-13.675Q628-654.351 628-674.175 628-694 641.625-707.5 655.25-721 675-721h183q19.75 0 33.875 13.625T906-674v183q0 19-13.272 33t-33.5 14Q840-444 826-458t-14-33v-68L608-356q-27.934 28-66.467 28T476-356l-101-99-219 219q-14 14-33.5 14T89-236" />
  </Svg>
);
