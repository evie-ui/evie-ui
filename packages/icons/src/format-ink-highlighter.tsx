import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFormatInkHighlighter = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M151 0q-30.35 0-50.675-21.252Q80-42.504 80-72.752t21.325-50.748Q122.65-144 153-144h656q30.35 0 50.675 20.252Q880-103.496 880-73.248T858.675-21.5Q837.35 0 807 0zm444-498L484-609 336-461l112 111zm-43-180 112 112 143-143-111-112zm-102-32 247 246-173 172q-28 28-76.5 28T371-292l-11-11-21 22q-14 15-32.4 23t-38.6 8h-57q-15.88 0-21.44-15-5.56-15 5.44-26l88-88-5-4q-32.231-31.835-30.615-78.418Q249-508 280-540zm0 0 181-181q28-28 67.5-28t67.5 28l108 110q28 28 27.5 70T873-641L697-464z" />
  </Svg>
);
