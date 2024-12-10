import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgLocalCafeFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M182-95q-19.75 0-33.375-13.675Q135-122.351 135-142.175 135-162 148.625-175.5 162.25-189 182-189h596q19.625 0 33.812 13.675Q826-161.649 826-141.825 826-122 811.812-108.5 797.625-95 778-95zm124-159q-72.113 0-121.556-49.5Q135-353 135-424v-347q0-40.213 27.1-67.606Q189.2-866 229-866h583q39.213 0 66.606 27.894Q906-810.213 906-772v160q0 38.75-27.394 66.375Q851.213-518 812-518h-82v94q0 71-49.944 120.5T558-254zm424-358h81v-160h-81z" />
  </Svg>
);
