import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgWarning = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M100-107q-14.483 0-24.98-6.925Q64.521-120.85 59-131q-6.167-9.6-6.583-22.381Q52-166.161 59-179l380-656q7-12 18.103-17.5 11.102-5.5 23-5.5Q492-858 503-852.5q11 5.5 18 17.5l380 656q7 12.839 6.583 25.619Q907.167-140.6 901-131q-5.696 9.75-16.106 16.875Q874.483-107 860-107zm63-84h634L480-739zm321.175-48q13.4 0 23.613-10.388Q518-259.776 518-273.175q0-13.4-10.388-23.113Q497.224-306 483.825-306q-13.4 0-23.613 9.888Q450-286.224 450-272.825q0 13.4 10.388 23.613Q470.776-239 484.175-239m0-109q12.825 0 21.325-8.625T514-378v-156q0-12.75-8.675-21.375-8.676-8.625-21.5-8.625-12.825 0-21.325 8.625T454-534v156q0 12.75 8.675 21.375 8.676 8.625 21.5 8.625M480-465" />
  </Svg>
);
