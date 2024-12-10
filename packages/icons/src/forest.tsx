import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgForest = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M280-102v-102H32q-29 0-43-25t3-49l142-200H97q-20 0-29-16.5t2-33.5l240-340q14-20 39-20t39 20l92 130 92-130q14-20 39-20t40 20l239 340q11 17 2 33.5T864-478h-36l141 200q16 24 2 49t-42 25H681v102q0 20-13.5 33.5T634-55h-44q-20 0-33.5-13.5T543-102v-102H418v102q0 20-13.5 33.5T371-55h-44q-20 0-33.5-13.5T280-102m411-196h146L645-572h94L611-753l-70 101 86 124q11 16 2 33t-29 17h-36zm-567 0h450L382-572h95L349-753 221-572h95zm0 0h192-95 256-95 192zm567 0H564h99-122 198-94 192zm-148 94h138zm214 0" />
  </Svg>
);
