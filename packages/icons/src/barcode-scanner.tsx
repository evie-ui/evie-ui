import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBarcodeScanner = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M17-97v-205h83v122h122v83zm720 0v-83h122v-122h83v205zM153-231v-499h80v499zm121 0v-499h42v499zm122 0v-499h83v499zm125 0v-499h121v499zm163 0v-499h42v499zm83 0v-499h38v499zM17-658v-205h205v83H100v122zm842 0v-122H737v-83h205v205z" />
  </Svg>
);
