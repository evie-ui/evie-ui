import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgWallet = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M240-135q-77 0-131-54T55-320v-320q0-77 54-131.5T240-826h480q77 0 131.5 54.5T906-640v320q0 77-54.5 131T720-135zm25-505h435q31 0 59.5 10t51.5 27v-37q0-38-26.5-64.5T720-731H240q-38 0-64.5 26.5T149-640v39q24-18 53.5-28.5T265-640m-95 165 440 106q11 3 22 .5t20-9.5l136-115q-12-24-36-38t-52-14H265q-34 0-60 20t-35 50" />
  </Svg>
);
