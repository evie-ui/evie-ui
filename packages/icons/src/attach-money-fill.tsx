import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAttachMoneyFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M483-109q-16 0-26-9.5T447-144v-51q-52-9-86.5-36.5T306-300q-7-15 1-31.5t25-23.5q14-5 29 1t26 22q17 30 44 44t58 14q45 0 71.5-20.5T587-350q0-39-28-62.5T456-459q-70-21-106.5-62.5T313-623q0-52 33-92.5T447-766v-50q0-16 10-25.5t26-9.5q16 0 25.5 9.5T518-816v50q35 7 65.5 24t50.5 46q9 14 3 30t-23 23q-13 6-28 1.5T556-660q-13-14-32-21.5t-43-7.5q-41 0-63 16.5T396-626q0 32 24 53.5T529-525q70 23 105.5 64.5T670-354q0 66-38.5 107T518-194v50q0 16-10 25.5t-25 9.5" />
  </Svg>
);
