import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSwordsFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M759-78 648-190l-88 88-38-38q-27-28-27-66t27-66l170-170q28-27 66-27t66 27l38 38-88 88 111 111q14 14 14 34t-14 34l-58 59q-14 14-34 14t-34-14m138-639L441-261l16 17q11 26 6 54.5T437-140l-38 38-88-88L200-78q-14 14-33.5 14T133-78l-59-59q-15-14-15-34t15-34l112-111-88-88 37-38q22-21 50.5-26t54.5 7l17 16 456-456h184zM263-516 63-717v-184h185l201 201z" />
  </Svg>
);
