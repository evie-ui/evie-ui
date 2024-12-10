import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBeenhereFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-41q-15 0-29.5-4.5T423-60L172-248q-18-13-27.5-33t-9.5-43v-495q0-38 27.5-66t66.5-28h502q39 0 67 28t28 66v495q0 23-10 43t-28 33L537-60q-13 10-27.5 14.5T480-41m-43-417-74-75q-11-10-25.5-10.5T312-533q-11 11-10.5 25.5T313-482l92 90q14 14 33 14t33-14l176-175q11-10 10.5-25T646-618q-11-10-25.5-10T596-617z" />
  </Svg>
);
