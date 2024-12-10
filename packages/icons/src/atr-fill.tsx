import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgAtrFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M202-80q-69 0-118-49T35-247q0-69 49-118.5T202-415q69 0 118.5 49.5T370-247q0 69-49.5 118T202-80m556 0q-69 0-118.5-49T590-247q0-69 49.5-118.5T758-415q70 0 118.5 49.5T925-247q0 69-48.5 118T758-80M480-546q-69 0-118.5-49.667Q312-645.333 312-713q0-69 49.5-118T480-880q69 0 118.5 49T648-713.5q0 68.5-49.5 118T480-546" />
  </Svg>
);
