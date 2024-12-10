import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNestProtectFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M311-95q-90.76 0-153.38-62.62Q95-220.24 95-311v-339q0-89.9 62.62-152.95Q220.24-866 311-866h339q89.9 0 152.95 63.05Q866-739.9 866-650v339q0 90.76-63.05 153.38Q739.9-95 650-95zm0-94h338q51.375 0 86.688-35.425Q771-259.85 771-311v-338q0-51.375-35.312-86.688Q700.375-771 649-771H311q-51.15 0-86.575 35.312Q189-700.375 189-649v338q0 51.15 35.425 86.575Q259.85-189 311-189m168.549-90Q396-279 337.5-337.746q-58.5-58.747-58.5-142.5Q279-565 337.746-623q58.747-58 142.5-58Q565-681 623-622.999q58 58 58 143.45Q681-396 622.999-337.5q-58 58.5-143.45 58.5m.451-95q45.375 0 76.188-30.388Q587-434.775 587-480q0-45.375-30.812-76.188Q525.375-587 479.5-587q-44.875 0-75.188 30.812Q374-525.375 374-479.5q0 44.875 30.388 75.188Q434.775-374 480-374" />
  </Svg>
);
