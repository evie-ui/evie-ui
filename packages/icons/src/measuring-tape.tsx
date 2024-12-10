import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMeasuringTape = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M557-145H297q-40.212 0-67.606-27.394Q202-199.788 202-240v-260q0-148.265 103.313-251.632Q408.627-855 556.813-855 705-855 808.5-751.687 912-648.373 912-500.187 912-352 808.632-248.5 705.265-145 557-145m0-95q109.508 0 185.254-75.641Q818-391.283 818-499.576q0-108.294-75.641-184.859Q666.717-761 557.859-761 449-761 373-684.854q-76 76.146-76 184.354V-240zm.05-107Q621-347 666-391.551q45-44.55 45-108.5Q711-564 666.242-609q-44.757-45-109-45Q493-654 448.5-609.242q-44.5 44.757-44.5 109Q404-436 448.551-391.5 493.101-347 557.05-347m.685-87q-28.235 0-47.485-18.515Q491-471.029 491-499.765q0-28.735 19.181-47.985Q529.363-567 556.765-567q28.735 0 47.985 19.015Q624-528.971 624-500.235q0 28.735-19.015 47.485Q585.971-434 557.735-434M94.825-145Q75-145 61.5-158.625 48-172.25 48-192v-133q0-19.75 13.675-33.375Q75.351-372 95.175-372 115-372 128.5-358.375 142-344.75 142-325v133q0 19.75-13.675 33.375Q114.649-145 94.825-145M557-500" />
  </Svg>
);
