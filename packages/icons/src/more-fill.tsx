import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMoreFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M371-175q-29.576 0-54.955-14.176Q290.667-203.353 273-228L133-425q-18-25.141-18-55.07Q115-510 133-535l140-197q17.645-24.118 43.035-39.059Q341.424-786 371-786h400q39.188 0 67.094 27.906Q866-730.188 866-691v422q0 38.775-27.906 66.388Q810.188-175 771-175zm-4.43-255q21.995 0 36.213-14.41Q417-458.821 417-480.123t-14.355-35.59Q388.29-530 367.07-530q-22.495 0-36.782 14.41Q316-501.179 316-479.877t14.288 35.589Q344.575-430 366.57-430m159.36 0q22.495 0 36.783-14.41Q577-458.821 577-480.123t-14.287-35.59Q548.425-530 526.43-530t-36.213 14.41Q476-501.179 476-479.877t14.355 35.589Q504.71-430 525.93-430m160.5 0q21.995 0 36.283-14.41Q737-458.821 737-480.123t-14.355-35.59Q708.29-530 687.07-530q-22.495 0-36.283 14.41Q637-501.179 637-479.877t13.717 35.589Q664.435-430 686.43-430" />
  </Svg>
);
