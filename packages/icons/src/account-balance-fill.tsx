import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAccountBalanceFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-275v-256q0-16.75 12.175-28.875 12.176-12.125 30-12.125Q249-572 260.5-559.875T272-531v257q0 17.75-11.675 29.375Q248.649-233 230.825-233 213-233 201-245.125T189-275m254 1v-257q0-16.75 12.175-28.875 12.176-12.125 29-12.125Q501-572 513-559.875T525-531v257q0 16.75-12.175 28.875-12.176 12.125-29 12.125Q467-233 455-245.125T443-274M102-102q-19.75 0-33.375-13.675Q55-129.351 55-149.175 55-169 68.625-182.5 82.25-196 102-196h756q19.75 0 33.875 13.675Q906-168.649 906-148.825 906-129 891.875-115.5 877.75-102 858-102zm586-173v-256q0-16.75 12.175-28.875 12.176-12.125 30-12.125Q748-572 759.5-559.875T771-531v257q0 17.75-11.675 29.375Q747.649-233 729.825-233 712-233 700-245.125T688-275m171-334H96q-17.583 0-29.292-12.208Q55-633.417 55-650v-29q0-11 5.5-21T76-716l359-204q20.167-11 45-11t45 11l356 202q11 7 18 18t7 24.5v18.227q0 20.591-13.475 34.432Q879.05-609 859-609" />
  </Svg>
);
