import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMotionMode = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M159-731v502q-19-24.36-34-50.38Q110-305.4 99-333v-294q11-27.6 26-53.62 15-26.02 34-50.38m159-124v749q-21-9.4-41-20.1-20-10.7-39-24.839v-658.122q19-14.139 39-24.839t41-21.1M597-92v-776q127 36.488 208.5 142.92Q887-618.648 887-480q0 138.648-81.5 245.08Q724-128.488 597-92M480-73q-22 0-41.833-1.993Q418.333-76.985 398-80.97V-879q20.333-4 40.167-6Q458-887 480-887q10 0 19.667-.03 9.666-.03 18.333.909V-73.94q-8.667.94-18.333.94z" />
  </Svg>
);
