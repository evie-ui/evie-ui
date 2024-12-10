import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFoodBankFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M229-95q-40 0-67-27t-27-67v-377q0-22 9.5-42t27.5-33l251-189q25-19 57-19t57 19l251 189q18 13 28 33t10 42v377q0 40-27.5 67T731-95zm191-145q8 0 14-6t6-14v-140q25 0 42.5-17.5T500-460v-100q0-8-6-14t-14-6q-8 0-14 6t-6 14v100h-20v-100q0-8-6-14t-14-6q-8 0-14 6t-6 14v100h-20v-100q0-8-6-14t-14-6q-8 0-14 6t-6 14v100q0 25 17.5 42.5T400-400v140q0 8 6 14t14 6m160 0q8 0 14-6t6-14v-294q0-11-7.5-18.5T574-580q-27 0-40.5 25T520-500v90q0 13 6.5 25.5T550-380h10v120q0 8 6 14t14 6" />
  </Svg>
);
