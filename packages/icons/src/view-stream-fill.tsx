import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgViewStreamFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M182-175q-36.6 0-61.8-25.2Q95-225.4 95-262v-84q0-35.6 25.2-61.3Q145.4-433 182-433h597q35.6 0 61.3 25.7Q866-381.6 866-346v84q0 36.6-25.7 61.8Q814.6-175 779-175zm0-352q-36.6 0-61.8-25.7Q95-578.4 95-614v-85q0-35.6 25.2-61.3Q145.4-786 182-786h597q35.6 0 61.3 25.7Q866-734.6 866-699v85q0 35.6-25.7 61.3Q814.6-527 779-527z" />
  </Svg>
);
