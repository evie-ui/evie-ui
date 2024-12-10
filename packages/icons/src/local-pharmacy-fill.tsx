import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLocalPharmacyFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M188-74q-48.011 0-76.006-39.5Q84-153 99-199l74-215-74-216q-15-46 12.994-85.5Q139.989-755 188-755h446l45-129q8-24 31-35t46.5-1.5q22.5 8.5 32.5 30t2 44.5l-31 91h35q40.112 0 62.556 33.5Q880-688 868-651l-81 237 74 214q15 46-12.994 86Q820.011-74 772-74zm258-185h72v-120h120v-71H518v-120h-72v120H327v71h119zm-259 90h587l-86-245 86-246H187l85.435 246zm12-2 82-244-82-244h563l-82 244 82 244z" />
  </Svg>
);
