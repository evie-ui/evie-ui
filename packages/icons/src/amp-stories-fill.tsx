import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAmpStoriesFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M302-135q-20 0-33.5-13.5T255-182v-596q0-20 13.5-34t33.5-14h356q20 0 34 14t14 34v596q0 20-14 33.5T658-135zM72-259v-443q0-19 14-33t33-14q20 0 34 14t14 34v443q0 19-14.5 32.5T119-212q-20 0-33.5-13.5T72-259m722 0v-443q0-19 14-33t33-14q20 0 33.5 14t13.5 34v443q0 19-14 32.5T841-212q-20 0-33.5-13.5T794-259" />
  </Svg>
);
