import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPropaneTankFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M135-419v-114q0-60.529 36.15-106.945Q207.3-686.361 263-702v-109q0-40.213 27.625-67.606Q318.25-906 357-906h246q38.75 0 66.375 27.394Q697-851.213 697-811v108.875q56.133 15.65 92.567 62.1Q826-593.575 826-533v114zM310.461-55Q237-55 186-106.031T135-230v-94h691v94q0 72.938-51.5 123.969Q723-55 651-55zM357-708h66q0-24 16.5-40.5T480-765q24 0 40.5 16.5T537-708h66v-103H357z" />
  </Svg>
);
