import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFormatParagraph = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M411.825-135Q392-135 378.5-148.625 365-162.25 365-183v-229h-40q-80.85-7-135.425-65.606Q135-536.212 135-617.606 135-705 195.32-765.5T342-826h356q19.625 0 33.812 14.263 14.188 14.263 14.188 34Q746-758 731.812-744.5 717.625-731 698-731h-74v548q0 20.75-14.263 34.375t-34 13.625Q556-135 542.5-148.625 529-162.25 529-183v-548h-70v548q0 20.75-13.675 34.375Q431.649-135 411.825-135" />
  </Svg>
);
