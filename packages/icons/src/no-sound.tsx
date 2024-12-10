import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgNoSound = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m750-413-80 81q-15 14-33.5 14T604-332q-15-14-15-33.5t15-33.5l80-80-81-80q-15-14-15-33t15-33q14-14 33-14t34 14l80 80 80-81q14-14 32.5-14t33.5 14q14 14 14 33.5T896-559l-80 80 81 80q14 14 14 33t-14 33q-15 14-34 14t-33-14zm-504 78H118q-20 0-33.5-13.5T71-382v-196q0-20 13.5-34t33.5-14h128l155-155q23-22 52-10t29 43v535q0 32-29 44t-52-11zm141-291-101 95H165v102h121l101 96zM287-481" />
  </Svg>
);
