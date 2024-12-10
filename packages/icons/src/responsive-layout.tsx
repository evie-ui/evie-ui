import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgResponsiveLayout = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M89-189v-367q0-40.213 27.394-67.606Q143.788-651 184-651h132v-131q0-40.213 27.1-67.606Q370.2-877 410-877h366q40.213 0 67.606 27.394Q871-822.213 871-782v593q0 39.8-27.394 66.9Q816.213-95 776-95H184q-40.212 0-67.606-27.1Q89-149.2 89-189m556 0h131v-593H410v131h140q40.213 0 67.606 27.394Q645-596.213 645-556zm-235 0h140v-367H410zm-226 0h132v-367H184z" />
  </Svg>
);
