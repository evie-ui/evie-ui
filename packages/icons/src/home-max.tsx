import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHomeMax = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M172-259h616q26.513 0 44.756-18.5Q851-296 851-322v-306q0-26.513-18.244-44.756Q814.513-691 788-691H172q-26 0-44.5 18.244Q109-654.513 109-628v306q0 26 18.5 44.5T172-259m83 94h-83q-66.488 0-111.744-45.256T15-322v-306q0-66 45.256-112T172-786h616q66 0 112 46t46 112v306q0 66.488-46 111.744T788-165h-82q0 13-9.125 21.5T676-135H285q-12.75 0-21.375-8.625T255-165m225-310" />
  </Svg>
);
