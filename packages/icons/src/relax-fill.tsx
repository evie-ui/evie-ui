import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgRelaxFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-110q-20 0-38.5-7.5T409-139L141-408q-16-17-28.5-36T91-485h389q21 0 35.5 14.5T530-435q0 21-14.5 35.5T480-385q-15 0-27.06-7-12.06-7-17.94-20l-58 16.35Q389-363 417-344t63 19q46 0 78-32t32-78q0-13-3-25.5t-9-24.5h60q46 0 78-32t32-78q0-46-32-78t-78-32q-35 0-63 19.5T535-634l58 16q6-13 18.5-20t26.5-7q21 0 35.5 14.5T688-595q0 21-14.422 35.5Q659.155-545 638.27-545H73l-2-22q-1-11-1-21.432Q70-697 141.141-773.5 212.282-850 314-850q46 0 88.717 18 42.716 18 77.496 50Q514-814 556.5-832q42.5-18 88.5-18 103 0 174 76.01t71 184.076Q890-538 871.5-491.5T819-409L550-139q-14 14-32 21.5t-38 7.5" />
  </Svg>
);
