import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgClarifyFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M299.218-300h190.564q12.968 0 21.593-8.675 8.625-8.676 8.625-21.5 0-12.825-8.625-21.325t-21.593-8.5H299.218q-12.968 0-21.593 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325t21.593 8.5m361.607-360Q648-660 639.5-651.375T631-630v300q0 12.75 8.675 21.375 8.676 8.625 21.5 8.625 12.825 0 21.325-8.625T691-330v-300q0-12.75-8.675-21.375-8.676-8.625-21.5-8.625M299.218-450h190.564q12.968 0 21.593-8.675 8.625-8.676 8.625-21.5 0-12.825-8.625-21.325t-21.593-8.5H299.218q-12.968 0-21.593 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325t21.593 8.5m0-150h190.564q12.968 0 21.593-8.675 8.625-8.676 8.625-21.5 0-12.825-8.625-21.325t-21.593-8.5H299.218q-12.968 0-21.593 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325t21.593 8.5M141-95q-39.05 0-66.525-27.475Q47-149.95 47-189v-582q0-39.463 27.475-67.231Q101.95-866 141-866h678q39.463 0 67.231 27.769Q914-810.463 914-771v582q0 39.05-27.769 66.525Q858.463-95 819-95z" />
  </Svg>
);
