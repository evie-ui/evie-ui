import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgQuickPhrases = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M326-26v-221h-10q-115-1-191-85.5T49-532.163q0-114.997 77-197.417T318-816h37l-60-61 66-66 174 174-174 174-66-66 60-60h-38q-75 3-124.5 58.441t-49.5 130.5Q143-454 192.25-398T316-342h87v116l118-116h114q76.5 0 129.25-55.824 52.75-55.823 52.75-135Q817-611 763.75-666 710.5-721 634-721h-41v-95h41q116.904 0 197.452 83.249 80.548 83.25 80.548 200Q912-415 831.952-331T635-247h-75z" />
  </Svg>
);
