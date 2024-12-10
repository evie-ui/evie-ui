import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgUTurnLeft = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M268-273q-10 0-18.5-4T234-288L98-424q-15-14-15-33t15-33q14-14 32.5-14t33.5 14l57 57v-172q0-108 76-184.5T482-866q108 0 184.5 76.5T743-605v434q0 20-14 33.5T695-124q-20 0-33.5-13.5T648-171v-434q0-69-48.5-117.5T482-771q-70 0-118.5 48.5T315-605v172l59-58q14-14 31.5-13.5T437-490q15 15 15 33.5T438-424L302-288q-7 7-16 11t-18 4" />
  </Svg>
);
