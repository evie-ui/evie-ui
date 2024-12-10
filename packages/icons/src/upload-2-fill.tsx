import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgUpload2Fill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M182-149h596q20 0 34 13.5t14 33.5q0 20-14 33.5T778-55H182q-20 0-33.5-13.5T135-102q0-20 13.5-33.5T182-149m191-100q-20 0-33.5-13.5T326-296v-188h-85q-30 0-42-26t7-50l237-301q8-9 17.5-12.5T480-877q10 0 19.5 3.5T517-861l237 301q18 24 6 50t-42 26h-83v188q0 20-14 33.5T587-249z" />
  </Svg>
);
