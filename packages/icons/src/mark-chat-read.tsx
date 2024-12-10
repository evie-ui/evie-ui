import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgMarkChatRead = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m706-260 144-144q14.455-14 33.727-13.5Q903-417 917.609-403 931-389 930.5-370T916-337L740-160q-14.455 14-33.727 14Q687-146 673-160l-92-92q-15-14-14-33.143t14-32.428Q595-332 614-331.5t33 13.5zm-491 45-79 79q-23 23-52 10.969T55-168v-643q0-39.463 27.475-67.231Q109.95-906 149-906h662q39.463 0 67.231 27.769Q906-850.463 906-811v236q0 20.75-14.263 34.375t-34 13.625Q838-527 824.5-540.625 811-554.25 811-575v-236H149v548l40-46h237q19.75 0 33.375 13.675Q473-281.649 473-261.825 473-242 459.375-228.5 445.75-215 426-215zm-66-94v-502z" />
  </Svg>
);
