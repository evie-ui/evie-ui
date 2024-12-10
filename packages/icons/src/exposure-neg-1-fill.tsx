import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgExposureNeg1Fill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M370-399H150q-17.375 0-29.188-11.812Q109-422.625 109-440t11.812-29.188Q132.625-481 150-481h220q17.375 0 29.188 11.812Q411-457.375 411-440t-11.812 29.188Q387.375-399 370-399m280-274-63 45q-15 10-32.509 6.833-17.509-3.166-27.658-19.166Q518-654 520.4-669.988 522.8-685.977 537-696l109-79q5-3 12.25-5.5t14.417-2.5H704q18 0 31.5 13t13.5 31v513q0 20-15 34.5T699-177q-20 0-34.5-14.5T650-226z" />
  </Svg>
);
