import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHomeMaxFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M255-165h-83q-66.013 0-111.506-45.494Q15-255.988 15-322v-306q0-66 45.494-112Q105.987-786 172-786h616q66 0 112 46t46 112v305.725q0 66.763-46 112.019T788-165h-81.66q0 13-9.17 21.5t-21.262 8.5H285q-13 0-21.5-8.5T255-165" />
  </Svg>
);