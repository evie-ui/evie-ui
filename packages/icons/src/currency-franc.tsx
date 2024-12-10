import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCurrencyFranc = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M273-142v-83h-43q-19.75 0-33.375-13.675Q183-252.351 183-272.175 183-292 196.625-305.5 210.25-319 230-319h43v-499q0-19.75 13.625-33.875T320-866h370q19.75 0 33.375 14.175 13.625 14.176 13.625 34Q737-798 723.375-784.5 709.75-771 690-771H367v244h283q19.75 0 33.375 13.675Q697-499.649 697-479.825 697-460 683.375-446.5 669.75-433 650-433H367v114h113q19.75 0 33.375 13.675Q527-291.649 527-271.825 527-252 513.375-238.5 499.75-225 480-225H367v83q0 19.75-13.675 33.375Q339.649-95 319.825-95 300-95 286.5-108.625 273-122.25 273-142" />
  </Svg>
);
