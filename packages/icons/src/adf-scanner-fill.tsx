import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAdfScannerFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M55-220v-169q0-54.333 34.208-89.167Q123.417-513 178-513h39v-241q0-38.75 27.1-66.375T311-848h338q40.213 0 67.606 27.625Q744-792.75 744-754v241h38q55 0 89.5 34.833Q906-443.333 906-389v169q0 39.8-27.394 66.9Q851.213-126 811-126H149q-39.8 0-66.9-27.1Q55-180.2 55-220m256-293h338v-241H311zm411.684 201q17.334 0 29.325-11.488T764-353.175q0-18.2-11.979-29.513Q740.042-394 722.333-394 705-394 693-382.512t-12 29.687q0 18.2 12.175 29.513Q705.351-312 722.684-312" />
  </Svg>
);
