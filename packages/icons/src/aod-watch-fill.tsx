import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAodWatchFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M398-490q-16.7 0-28.35-11.709-11.65-11.71-11.65-28.5Q358-547 369.65-558.5T398-570h165q16.267 0 27.633 11.709Q602-546.581 602-529.791 602-513 590.633-501.5 579.267-490 563-490zm40 124q-16.7 0-28.35-11.512-11.65-11.511-11.65-28Q398-422 409.65-433.5T438-445h85q16.267 0 27.633 11.367Q562-422.267 562-406q0 16.7-11.367 28.35Q539.267-366 523-366zm-9 332q-33 0-58.127-19.325Q345.745-72.649 338-103l-36-129q-57-37-92-101.878t-35-146Q175-561 210.179-626.5 245.358-692 302-729l36-128q7.745-30.351 32.873-49.675Q396-926 429-926h103q31.855 0 56.928 19.5Q614-887 623-857l35 128q57.094 36.93 92.547 102.324Q786-561.282 786-480.141 786-399 750.5-334 715-269 658-232l-35 129q-9 30-34.072 49.5Q563.855-34 532-34zm51-235q89 0 150-61t61-150q0-89-61-150t-150-61q-89 0-150 61t-61 150q0 89 61 150t150 61" />
  </Svg>
);
