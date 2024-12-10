import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgThumbDownFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M116-343q-37 0-66-29t-29-66v-36q0-13 3.5-29.5T33-532l120-280q12-30 42.092-51 30.093-21 62.908-21h377q39 0 66.5 27.269Q729-829.463 729-789v408q0 18.429-6.417 35.098Q716.167-329.232 703-316L544-146q-22 23-51 29.5t-55-6.5q-25-12-37-39.5t-5-58.5l25-122zm736.5-541q25.5 0 44 18.603 18.5 18.602 18.5 44.044v415.911Q915-380 897.5-361.5t-42 18.5h-4q-25.5 0-44-18.413Q789-379.825 789-405v-416.273q0-25.475 18.5-44.101Q826-884 851.5-884z" />
  </Svg>
);
