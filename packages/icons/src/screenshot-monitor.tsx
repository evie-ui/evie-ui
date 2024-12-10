import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgScreenshotMonitor = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M677-404h-83q-15 0-26 11.616-11 11.617-11 26.5Q557-351 568-340t26 11h110q19.75 0 33.375-13.625T751-376v-110q0-14.833-11-26.417Q729-524 714-524t-26 11.583Q677-500.833 677-486zM284-637h82q14.833 0 26.417-11Q404-659 404-674t-11.583-26Q380.833-711 366-711H256q-19.75 0-33.375 13.625T209-664v110q0 15 11 26t25.884 11q14.883 0 26.5-11Q284-539 284-554zM149-175q-39.05 0-66.525-27.475Q55-229.95 55-269v-502q0-39.463 27.475-67.231Q109.95-866 149-866h662q39.463 0 67.231 27.769Q906-810.463 906-771v502q0 39.05-27.769 66.525Q850.463-175 811-175H644v33q0 19.75-14.188 33.375Q615.625-95 596-95H364q-19.75 0-33.375-13.625T317-142v-33zm0-94h662v-502H149zm0 0v-502z" />
  </Svg>
);
