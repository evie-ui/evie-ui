import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgHowToVoteFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M180-57q-39.05 0-66.525-27.475Q86-111.95 86-151v-187l156-170 67 68-115 125h573L657-439l68-68 150 169v187q0 39.05-27.769 66.525Q819.463-57 780-57zm238-352L274-553q-29-30-27-67t31-66l197-197q27-27 65.516-27.5Q579.033-911 608-882l142 145q28 28 27.5 65.5T747-604L552-409q-28 28-66.5 29T418-409m257-265L541-808 349-616l134 134z" />
  </Svg>
);
