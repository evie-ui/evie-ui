import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgDecimalIncrease = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M733-181H510q-17.625 0-30.312-12.738Q467-206.476 467-224.175 467-243 479.688-255.5 492.375-268 510-268h223l-30-30q-13-13-13-30.5t13-30.5q13-13 31.182-13T765-359l101 101q14 14.455 14 33.727Q880-205 866-191L765-90q-12.636 14-30.818 13.5Q716-77 703-90t-13-30.5q0-17.5 13-30.5zM112-443H67q-19.75 0-33.375-13.625T20-490v-45q0-19.75 13.625-33.375T67-582h45q19.75 0 33.375 13.625T159-535v45q0 19.75-13.625 33.375T112-443m259.242 0q-62.871 0-107.556-44.514Q219-532.029 219-595v-160q0-62.971 44.443-107.486Q307.887-907 370.758-907q62.871 0 107.556 44.514Q523-817.971 523-755v160q0 62.971-44.443 107.486Q434.113-443 371.242-443m384 0q-62.871 0-107.556-44.514Q603-532.029 603-595v-160q0-62.971 44.443-107.486Q691.887-907 754.758-907q62.871 0 107.556 44.514Q907-817.971 907-755v160q0 62.971-44.443 107.486Q818.113-443 755.242-443m-384.301-87Q398-530 417-548.958q19-18.959 19-46.042v-160q0-27.083-18.941-46.042-18.941-18.958-46-18.958T325-801.042Q306-782.083 306-755v160q0 27.083 18.941 46.042 18.941 18.958 46 18.958m384 0Q782-530 801-548.958q19-18.959 19-46.042v-160q0-27.083-18.941-46.042-18.941-18.958-46-18.958T709-801.042Q690-782.083 690-755v160q0 27.083 18.941 46.042 18.941 18.958 46 18.958" />
  </Svg>
);
