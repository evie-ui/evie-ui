import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgSpecificGravityFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M277-63q-35.821 0-62.786-23.93Q187.25-110.859 183-147l-76-698q-2-20.5 11-36.25T153-897h654q22 0 35 15.75T853-845l-76 698q-4.25 36.141-31.214 60.07Q718.821-63 683-63zm-53.509-581H380q20.44-17 46.22-26.5Q452-680 480-680t53.78 9.263Q559.56-661.475 581-644h155.482L754-803H207zm256.173 197Q510-447 531.5-468.601t21.5-51.063Q553-550 531.628-571.5q-21.371-21.5-51.5-21.5Q450-593 428.5-571.628q-21.5 21.371-21.5 51.5Q407-490 428.601-468.5t51.063 21.5" />
  </Svg>
);
