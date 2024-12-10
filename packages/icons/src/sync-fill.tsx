import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSyncFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M236-477q0 59 22 102t60 75l24 15v-70q0-15 10-25t26-10q15 0 25 10t10 25v163q0 20-13.5 33.5T366-145H204q-15 0-25-10.5T169-181q0-15 10-25t26-10h69l-5-5q-65-56-96.5-117.5T141-477q0-102 56-185.5T345-787q16-7 30 3t19 28q5 18-3.5 35T366-695q-60 32-95 90.5T236-477m488-6q0-44-22.5-90T645-655l-23-20v70q0 15-10.5 25T586-570q-15 0-25.5-10.5T550-606v-162q0-20 13.5-33.5T598-815h161q15 0 25.5 10t10.5 25q0 15-10.5 25.5T759-744h-71l6 7q62 58 93.5 125T819-483q0 101-54 183.5T620-174q-16 8-31.5-1.5T568-204q-6-18 2.5-35t25.5-26q59-31 93.5-90T724-483" />
  </Svg>
);
