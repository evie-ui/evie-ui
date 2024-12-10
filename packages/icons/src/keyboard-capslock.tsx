import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgKeyboardCapslock = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M270-223q-20 0-33.5-13.5T223-270q0-20 13.5-33.5T270-317h420q20 0 33.5 13.5T737-270q0 20-13.5 33.5T690-223zm210-403L325-471q-14 14-33 13.5T259-472q-14-14-14-33.5t14-33.5l187-187q14-14 34-14t34 14l192 192q14 14 14 33t-14 33q-14 14-33.5 14T639-468z" />
  </Svg>
);
