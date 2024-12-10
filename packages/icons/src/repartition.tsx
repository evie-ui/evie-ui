import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgRepartition = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m236-678 26 25q12 12.8 12 30.4 0 17.6-15.053 33.1-14.052 14.5-33.8 14.5Q205.4-575 191-590L88-692q-14-14.091-14-33.545Q74-745 88-759l104-104q14.5-14 33.908-13.5t35.25 16.109Q274-847 274-829.533q0 17.466-12 30.533l-26 26h435q81.288 0 138.144 57.124Q866-658.752 866-578.376T809.04-441q-56.96 57-138.393 57H142q-19.75 0-33.375-13.675Q95-411.351 95-431.175 95-451 108.625-464.5 122.25-478 142-478h529q41.075 0 70.537-29.594Q771-537.188 771-578.447q0-41.259-29.463-70.406Q712.075-678 671-678zM95-149v-90q0-40.212 27.1-67.606Q149.2-334 189-334h582q40.213 0 67.606 27.394Q866-279.212 866-239v90q0 39.8-27.394 66.9Q811.213-55 771-55H189q-39.8 0-66.9-27.1Q95-109.2 95-149m94 0h144v-90H189zm224 0h134v-90H413zm214 0h144v-90H627z" />
  </Svg>
);
