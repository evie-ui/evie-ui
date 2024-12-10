import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSettingsTimelapseFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M757-133q-6 4-12 .5t-6-10.5v-226q0-6 6-9.5t12 .5l187 113q6 3 6 9.5t-6 9.5zm-223 0q-5 4-11.5.5T516-143v-226q0-6 6.5-9.5t11.5.5l187 113q6 3 6 9.5t-6 9.5zm-99 78h-28q-18 0-31.5-11T360-95l-15-94q-13-4-29.5-13.5T288-221l-86 41q-16 7-34 1.5T141-201L68-332q-10-16-5.5-33T81-393l80-58q-1-6-1.5-14.5T159-480q0-6 .5-14.5T161-509l-80-58q-14-11-18.5-28t5.5-33l73-130q9-16 27-22t34 1l88 40q10-8 26-17t29-13l15-97q2-17 15.5-28.5T407-906h146q18 0 31.5 11.5T600-866l15 96q13 5 29.5 13.5T672-739l86-40q16-7 34-1t27 22l74 129q9 16 5 33.5T878-567l-80 56q0 8 1 18.5t1 17.5v13q0 6 1 13H604q2-8 3-15.5t1-15.5q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 43 24 76.5t63 46.5z" />
  </Svg>
);