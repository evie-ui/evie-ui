import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPrivateConnectivityFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480.033-183Q366-183 284-256.5 202-330 186.105-439H75.658q-17.783 0-29.72-11.777Q34-462.555 34-479.965q0-17.41 12.002-29.223Q58.005-521 75.748-521H186q16-109 97.967-182.5 81.968-73.5 196-73.5Q594-777 676-703.5 758-630 773.99-521H885q17.425 0 29.213 11.777Q926-497.445 926-480.035q0 17.41-11.787 29.223Q902.425-439 885-439H773.99Q758-330 676.033-256.5q-81.968 73.5-196 73.5M406.71-345h146.838q16.877 0 28.165-10.703Q593-366.406 593-383.966v-112.147Q593-513 581.787-524.5 570.575-536 554-536h-1v-33q0-30-21.168-52.5t-52.46-22.5Q449-644 428-621.706T407-568v32h-1q-16.15 0-27.575 11.415Q367-513.169 367-496.255v112.34Q367-367 378.417-356q11.416 11 28.293 11M480-406q-15 0-24.5-9.5T446-440q0-15 9.5-25t24.5-10q15 0 25 9.884 10 9.883 10 25Q515-425 504.783-415.5 494.567-406 480-406m-37-130v-31.368Q443-584 453.602-596.5t26.275-12.5q15.673 0 26.398 12.5T517-567.368V-536z" />
  </Svg>
);