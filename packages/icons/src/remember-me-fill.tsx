import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgRememberMeFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M271-17q-38.775 0-66.388-27.612Q177-72.225 177-111v-738q0-38.775 27.612-66.387Q232.225-943 271-943h418q38.775 0 66.387 27.613Q783-887.775 783-849v738q0 38.775-27.613 66.388Q727.775-17 689-17zm209-343q55.394 0 107.697 13.5Q640-333 689-308v-451H271v451q50-25 101.803-38.5T480-360m1.235-57Q433-417 399-450.765q-34-33.764-34-82Q365-581 398.765-615q33.764-34 82-34Q529-649 563-615.235q34 33.764 34 82Q597-485 563.235-451q-33.764 34-82 34" />
  </Svg>
);
