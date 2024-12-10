import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFreeCancellation = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m679-150 150-151q14.364-14 34.182-13.5t33.601 14.571q13.217 14.072 13.217 33Q910-248 896-234L714-51q-14.364 14-34.182 14T646-51l-99-99q-14-14-14-33t14-33q14-14 33-14t33 14zM388-315l-38 38q-14 14-33 14t-33-14q-14-14-14-33t14-33l38-38-38-38q-14-14-14-33t14-33q14-14 33-14t33 14l38 38 38-38q14-14 33-14t33 14q14 14 14 33t-14 33l-38 38 38 38q14 14 14 33t-14 33q-14 14-33 14t-33-14zM189-55q-39.05 0-66.525-27.475Q95-109.95 95-149v-602q0-39.463 27.475-67.231Q149.95-846 189-846h56v-19q0-16.75 12.393-28.875t28.8-12.125q16.832 0 28.82 12.125Q327-881.75 327-865v19h306v-19q0-16.75 12.393-28.875t28.8-12.125q16.832 0 28.82 12.125Q715-881.75 715-865v19h56q39.463 0 67.231 27.769Q866-790.463 866-751v329l-95 96v-244H189v421h273l94 94zm0-575h582v-121H189zm0 0v-121z" />
  </Svg>
);