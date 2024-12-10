import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgFormatLetterSpacingFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m317-177 25 27q12 13 12 31t-14 32q-13.067 14-32.533 14Q288-73 274-87L170-191q-14-14-14-33.5t14-33.5l103-103q14-13 34-13t36 15.609Q356-345 356-327.9T343-298l-27 26h328l-24-25q-13-13-13-31t15-33q14-14 33-14t33 14l103 103q14 15 14 34t-14 33L687-87q-14 14-33.658 14t-35.5-15.609Q605-102 604.5-119.6T617-151l27-26zm-87.175-327Q210-504 196.5-517.625 183-531.25 183-551v-307q0-19.75 13.675-33.875Q210.351-906 230.175-906 250-906 263.5-891.875 277-877.75 277-858v307q0 19.75-13.675 33.375Q249.649-504 229.825-504m250 0Q460-504 446.5-517.625 433-531.25 433-551v-307q0-19.75 13.675-33.875Q460.351-906 480.175-906 500-906 513.5-891.875 527-877.75 527-858v307q0 19.75-13.675 33.375Q499.649-504 479.825-504m250 0Q710-504 696.5-517.625 683-531.25 683-551v-307q0-19.75 13.675-33.875Q710.351-906 730.175-906 750-906 763.5-891.875 777-877.75 777-858v307q0 19.75-13.675 33.375Q749.649-504 729.825-504" />
  </Svg>
);
