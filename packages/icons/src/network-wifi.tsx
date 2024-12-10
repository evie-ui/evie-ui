import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNetworkWifi = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M192-518q62-49 135-77.5T480-624q80 0 153 28.5T768-518l61-70q-77-58-165-94t-184-36q-96 0-184 36t-164 94zm218 373L55-537q-11-11-16-26t-5-29q0-18 7-34.5T62-656q94-73 195.5-115T480-813q121 0 222.5 42T898-656q14 13 21 29.5t7 34.5q0 14-5 29t-15 26L551-145q-15 17-33 24.5t-38 7.5q-20 0-38-7.5T410-145" />
  </Svg>
);
