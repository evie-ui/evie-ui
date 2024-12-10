import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDoorSlidingFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M374-449q14 0 24.5-10.5T409-484q0-14-10.5-24.5T374-519q-15 0-25 10.5T339-484q0 14 10 24.5t25 10.5m214 0q14 0 24.5-10.5T623-484q0-14-10.5-24.5T588-519q-15 0-25 10.5T553-484q0 14 10 24.5t25 10.5M119-95q-19.75 0-33.375-13.625T72-141.939Q72-163 83.5-180t35.5-9h22v-582q0-40.213 27.1-67.606Q195.2-866 235-866h229.538v677H495v-677h230q40.213 0 67.606 27.394Q820-811.213 820-771v582h21q19.75 0 33.375 13.675Q888-161.649 888-141.825 888-122 874.375-108.5 860.75-95 841-95z" />
  </Svg>
);
