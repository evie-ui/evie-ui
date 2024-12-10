import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLocalBarFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M433-197v-208L116-747q-9-9-12.5-21.5t-3.5-25.527Q100-823 119.565-844.5 139.129-866 169-866h623q28.871 0 48.935 21.25Q861-823.5 861-794q0 13-4 25.5T844-747L527-405v208h163q19.75 0 33.375 13.675Q737-169.649 737-149.825 737-130 723.375-116.5 709.75-103 690-103H270q-19.75 0-33.375-13.675Q223-130.351 223-150.175 223-170 236.625-183.5 250.25-197 270-197zM294-695h372l75-72H219z" />
  </Svg>
);
