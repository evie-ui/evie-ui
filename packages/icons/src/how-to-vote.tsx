import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHowToVote = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M180-57q-39.05 0-66.525-27.475Q86-111.95 86-151v-187l156-170 67 68-115 125h573L657-439l68-68 150 169v187q0 39.05-27.769 66.525Q819.463-57 780-57zm0-94h600v-104H180zm237-257L275-552q-29-30-27.5-67.5T278-686l197-197q26.934-26.56 65.484-26.28Q579.033-909 608-881l142 144q28 28 27.5 65.5T746-603L551-408q-27 27-66 28t-68-28m258-267L540-808 349-616l134 133zM180-151v-104z" />
  </Svg>
);
