import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgBidLandscapeDisabledFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M754-95H189q-39.05 0-66.525-27.475Q95-149.95 95-189v-565l-73-74q-11-10.304-11-24.848 0-14.543 11-24.848Q32-888 46.5-888t25.393 10.893L882.107-66.893Q893-56 893-41.5t-11 25Q871-6 857.1-6 843.2-6 833-16zm112-73L644-390l127-127v-102L594-441 168-866h603q39.463 0 67.231 27.769Q866-810.463 866-771zM189-290l178-178 171 170q1.833 3 5.917 3 4.083 0 7.083-3L323-525 189-391z" />
  </Svg>
);
