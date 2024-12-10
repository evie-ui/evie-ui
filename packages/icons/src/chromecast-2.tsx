import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgChromecast2 = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M333.809-70Q205-70 115-160.352T25-379q0-115.206 76.646-200.41T292-684v-74q0-72.054 49.935-122.027Q391.869-930 463.868-930 504-930 540.5-913.5 577-897 601-865l236.703 298L863-589l119 150-117 94-119-151 25-21-234-296q-13-17-31.875-26t-41.319-9Q427-848 401.5-821.5T376-757.655v73.869Q490-664 566.5-578.901T643-379q0 128.296-90.407 218.648Q462.185-70 333.809-70m.071-94Q423-164 486-226.816q63-62.817 63-151.684 0-89.867-62.755-152.184Q423.49-593 334-593q-88 0-151.5 62.17T119-379q0 89.075 63.38 152.037Q245.76-164 333.88-164" />
  </Svg>
);
