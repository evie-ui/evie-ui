import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgSendTimeExtensionFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M536-158v-35q0-16 10-28t26-17l122-35-122-35q-16-5-26-17t-10-29v-34q0-26 22-40t46-2l231 115q26 13 26 42t-26 42L604-116q-24 12-46-2t-22-40m0 77v-148l158-44-158-44v-148l384 192zM180-95q-34 0-59.5-25.5T95-180v-190q35-4 59.5-30.5T179-463q0-36-24.5-62.5T95-557v-189q0-34 25.5-60t59.5-26h155q19-44 53-71.5t77-27.5q43 0 77 27.5t53 71.5h151q34 0 60 26t26 60v361L613-494q-48-24-92.5 3.5T476-410v221q-42-5-72 25.5T370-95z" />
  </Svg>
);
