import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLanguageUsColemak = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M588-375h143v-211H588zm-359 95q-39.05 0-66.525-27.769Q135-335.538 135-375v-211q0-38 27.475-66T229-680h142q19.625 0 33.812 13.675Q419-652.649 419-632.825 419-613 404.812-599.5 390.625-586 371-586H229v211h142q19.625 0 33.812 14.263 14.188 14.263 14.188 34Q419-307 404.812-293.5 390.625-280 371-280zm359 0q-39.05 0-66.525-27.769Q494-335.538 494-375v-211q0-38 27.475-66T588-680h143q39.463 0 67.231 28Q826-624 826-586v211q0 39.462-27.769 67.231Q770.463-280 731-280z" />
  </Svg>
);
