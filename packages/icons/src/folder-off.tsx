import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFolderOff = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m890-179-79-78v-403H485l-79-79h-77l-87-87h149q19.2 0 36.6 8 17.4 8 31.488 21.088L501-754h310q38.463 0 66.731 27.975Q906-698.05 906-660v431q0 13-4.556 25.889Q896.889-190.222 890-179m-741 44q-39.05 0-66.525-27.975Q55-190.95 55-229v-502q0-31.7 20.5-57.85Q96-815 127-823h34l91 92H149v502h506L65-818q-11-11-10.5-25.5t10.457-24.457Q76-879 90-879t25 11L897-87q10 10.91 10 25.455Q907-47 897-36.61q-10.727 10.692-25.364 10.15Q857-27 847-37l-97-98zm422-363" />
  </Svg>
);