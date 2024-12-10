import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDecimalDecreaseFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m618-181 30 30q13 13 13 30.5T647.947-90q-13.052 13-31.166 13.5T586-90L485-191q-14-14.091-14-33.545Q471-244 485-258l101-101q12.733-13 30.367-13Q634-372 647-359t13.5 30.5Q661-311 648-298l-30 30h223q17.625 0 30.312 12.675 12.688 12.676 12.688 31Q884-206 871.312-193.5 858.625-181 841-181zM112-443H67q-19.75 0-33.375-13.625T20-490v-45q0-19.75 13.625-33.375T67-582h45q19.75 0 33.375 13.625T159-535v45q0 19.75-13.625 33.375T112-443m259.242 0Q308-443 263.5-487.329 219-531.657 219-595v-160q0-63.343 44.258-107.671Q307.515-907 370.758-907 434-907 478.5-862.671 523-818.343 523-755v160q0 63.343-44.258 107.671Q434.485-443 371.242-443m-.536-87Q398-530 417-548.792q19-18.791 19-46.208v-160q0-27.417-18.706-46.208-18.706-18.792-46-18.792T325-801.208Q306-782.417 306-755v160q0 27.417 18.706 46.208 18.706 18.792 46 18.792" />
  </Svg>
);
