import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPlagiarismFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M229-55q-39.05 0-66.525-27.475Q135-109.95 135-149v-662q0-39.463 27.475-67.231Q189.95-906 229-906h323q19.111 0 37.056 8Q607-890 620-877l177 177q13 13 21 30.944 8 17.945 8 37.056v483q0 39.05-27.769 66.525Q770.463-55 731-55zm313-617q0 20 13.5 33.5T589-625h142L542-811zM439-294q20 0 40.5-5.5T519-317l90 90q8 8 20 8t20-8q8-8 8-20t-8-20l-91-91q11-17 15.5-36t4.5-39q0-59-40-99t-99-40q-59 0-99 40t-40 99q0 59 40 99t99 40m0-60q-34 0-56.5-22.5T360-433q0-34 22.5-56.5T439-512q34 0 56.5 22.5T518-433q0 34-22.5 56.5T439-354" />
  </Svg>
);
