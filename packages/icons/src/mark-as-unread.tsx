import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMarkAsUnread = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M150-263q-38-4-66.5-29.925T55-357v-309q0-26 11.11-46.865Q77.218-733.73 104-748l268-136q20-10 43.5-9.5T459-883l255 133q25 16 39 40.5t16 48.5h-87L417-800 150-664zM274-95q-39.05 0-66.525-27.975Q180-150.95 180-189v-347q0-38.463 27.475-66.731Q234.95-631 274-631h537q38.463 0 66.731 28.269Q906-574.463 906-536v347q0 38.05-28.269 66.025Q849.463-95 811-95zm227-270L274-474v294h537v-294L584-365q-20 10-41.5 10T501-365m42-53 262-127H280zm268-127H274z" />
  </Svg>
);
