import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgShieldWithHouseFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M393-320q0-20 13.5-33.5T440-367h80q20 0 33.5 13.5T567-320v207q0 9 8 13t16 0q69-38 119.5-98.5T789-333L480-570 171-334q27 73 77.5 133.5T368-102q8 4 16.5-1t8.5-15zM135-712v177q0 24 2.5 52.5T143-431l279-214q26-20 58-20t58 20l279 214q3-23 6-51.5t3-52.5v-177q0-30-17-55t-45-35l-251-94q-16-6-33-6t-33 6l-251 94q-28 10-44.5 35T135-712" />
  </Svg>
);
