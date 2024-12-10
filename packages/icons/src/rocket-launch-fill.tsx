import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgRocketLaunchFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M247-478q32-77 75-146.5T420-757l-80-15q-29-5-56.5 3T235-740L106-610q-18 18-13 42t27 34zm624-429q-111-3-211.5 40T480-746q-55 55-96.5 116T313-499q-7 15-6 31t13 28l133 133q12 12 28 13t31-7q70-28 131-70t116-97q78-78 121.5-178.5T921-858q-1-9-4.5-18T906-892q-7-7-16-10.5t-19-4.5M612-600q-18-19-18-45.5t18-45.5q19-18 46-18t46 18q18 19 18 45.5T704-600q-19 19-46 19t-46-19M492-235l55 128q9 24 34 28t43-15l129-129q21-20 29-47.5t3-56.5l-15-80q-62 54-132 97t-146 75m-362-82q42-42 101-42t102 42q42 43 42 102t-42 101q-56 56-133.5 67T44-28q8-78 19-155.5T130-317" />
  </Svg>
);
