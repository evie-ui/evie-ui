import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgUnlicenseFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m741-339-68-67q31-38 44.5-76.5T731-565q0-105-73-178t-178-73q-41 0-83 14.5T321-758l-68-68q49-44 107.5-64T480-910q146 0 246 99.5T826-565q0 56-19.5 116.5T741-339M574-505 420-657q11-10 26.5-15t33.5-5q46 0 79 33t33 79q0 22-6 36t-12 24M480-98 295-37q-23 8-42.5-7T233-83v-242q-48-44-73-108.5T135-565q0-41 8.5-78.5T166-710l-92-92q-11-10-11.5-24.5T74-853q11-11 25-11t26 11l740 741q11 11 11 24.5T865-63q-11 12-25.5 11.5T814-64l-87-85v66q0 24-19.5 39T666-37zm0-216q15 0 33.5-2.5T549-327L243-634q-7 17-10.5 35t-3.5 34q0 106 73 178.5T480-314" />
  </Svg>
);
