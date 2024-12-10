import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgExerciseFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M834-573 573-835l28-28q26-27 63.5-27t64.5 27l133 133q26 27 26.5 64.5T862-602zM359-98q-27 27-64.5 27T230-98L83-245q-21-21-20.5-50T84-345l43-42 260 260zm132-6q-12 12-29.5 12T432-104L103-433q-12-12-11.5-29t12.5-29l99-99q12-12 28.5-12t28.5 12l65 66 111-111-65-65q-12-12-12-29t12-29l99-100q12-11 28.5-11t28.5 11l330 330q12 12 12 29t-11 29l-100 99q-12 12-29.5 12T699-371l-64-65-111 111 65 65q12 12 12.5 28.5T590-203z" />
  </Svg>
);
