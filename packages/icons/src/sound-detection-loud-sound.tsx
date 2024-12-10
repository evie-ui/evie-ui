import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgSoundDetectionLoudSound = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M488-226 375-112q-27 27-66.5 27T242-112L113-242q-27-27-27-66t27-66l113-113v-164q0-31 29-43.5t52 10.5l377 377q23 23 10.5 52T651-226zm47-95L321-533v84L180-308l128 128 141-141zm171-386q-65-64-153-80t-172 18q-14 6-28.5.5T333-788q-6-15-.5-30t20.5-21q103-42 212.5-20.5T756-757q78 78 100.5 182T844-371q-6 18-21 28t-33 5q-14-4-19.5-18t-.5-29q33-83 16-170.5T706-707m-84 85q30 31 42.5 71.5T673-467q-4 11-16 13t-20-8q-15-16-30-31t-29-30q0-11-3.5-21T562-563q-7-7-16-11t-20-4q-16-14-30-28.5T468-637q-7-8-5.5-21t13.5-15q40-4 78 9t68 42M357-356" />
  </Svg>
);