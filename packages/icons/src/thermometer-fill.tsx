import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgThermometerFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M479.852-95q-86.382 0-146.617-60.18Q273-215.36 273-302q0-52.099 23.5-97.05Q320-444 363-474.431V-748q0-49.167 33.647-83.583Q430.294-866 479.412-866q49.117 0 83.853 34.417Q598-797.167 598-748v273.569Q640-444 664-399.05q24 44.951 24 97.05 0 86.64-60.883 146.82Q566.233-95 479.852-95M457-567h46v-181q0-9.6-6.7-16.3-6.7-6.7-16.3-6.7-9.6 0-16.3 6.7-6.7 6.7-6.7 16.3z" />
  </Svg>
);
