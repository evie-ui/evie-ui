import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgFoldedHandsFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M654-335v-122l-59-114q-46 16-70.5 58T500-422v190q0 14 4 27t11 25l81 125h310l-39-500q-2-14-7.5-27.5T844-608L600-900q-8-10-20-9t-19 11q-23 43-22 90t24 90l131 248v135zm-388 0v-135l132-248q22-42 23.5-90T400-899q-8-10-20-10.5t-20 9.5L116-608q-10 12-15.5 25.5T93-555L55-55h309l81-125q7-12 11-25t4-27v-190q0-50-24-92.5T366-573l-60 116v122z" />
  </Svg>
);
