import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgExtensionFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M370-95H180q-34.025 0-59.512-25.488Q95-145.975 95-180v-190q35-4 59.5-30.5T179-463q0-36-24.5-62.5T95-557v-189q0-34.025 25.488-60.013Q145.975-832 180-832h155q19-44 53-71.5t77-27.5q43 0 77 27.5t53 71.5h151q34.025 0 60.013 25.987Q832-780.025 832-746v151q44 19 70 55t26 79q0 43-26 75.5T832-334v154q0 34.025-25.987 59.512Q780.025-95 746-95H557q-6-43-32.25-69T463-190q-35.5 0-61.75 26.125T370-95" />
  </Svg>
);
