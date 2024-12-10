import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgTransitEnterexitFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M445-352h148q26.167 0 45.583 18.917Q658-314.167 658-288q0 26.583-19.417 45.792Q619.167-223 593-223H265q-19.75 0-33.375-13.625T218-270v-329q0-25.167 19.208-44.583Q256.417-663 283-663q26.583 0 45.292 19.417Q347-624.167 347-599v151l251-251q20.171-20 48.086-20Q674-719 695-698.864q20 20.137 20 48.5Q715-622 695-602z" />
  </Svg>
);
