import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgWatchButtonPress = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M836-480q-21 0-34.5-13.5T788-527v-283q0-20 13.5-33.5T836-857q20 0 33.5 13.5T883-810v283q0 20-13.5 33.5T836-480M331-34q-32 0-57-19.5T240-103l-35-129q-57-37-92.5-102T77-480q0-81 35.5-146.5T205-729l35-128q9-30 34-49.5t57-19.5h103q33 0 58 19.5t33 49.5l36 128q57 37 92 102.5T688-480q0 81-35 146t-92 102l-36 129q-8 30-33 49.5T434-34zm52-235q88 0 149.5-61T594-480q0-89-61.5-150T383-691q-89 0-150 61t-61 150q0 89 61 150t150 61m-78-503q19-5 38.5-8t39.5-3q20 0 40 3t38 8l-17-71H322zm17 655h122l17-71q-19 4-38.5 7t-39.5 3q-20 0-39.5-3t-38.5-7zm-17-726h156zm17 726h-17 156z" />
  </Svg>
);
