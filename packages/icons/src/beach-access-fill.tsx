import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBeachAccessFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M770-132 530-372l70-72 241 241q14 15 14 35t-14 35q-15 15-35.5 15.5T770-132m-521-63q-17 17-39 15.5T175-199Q92-315 87-451.5T155-701q-9 42 7 93.5t46.5 105Q239-449 278.5-397t78.5 95zm149-148q-56-56-97-116t-64-114q-23-54-26-97t18-66q22-23 66-21.5t99 23.5q55 22 116.5 62.5T629-575zm375-454q18 13 19 35.5T776-722L671-616q-42-39-95-78t-108-69q-55-30-108.5-45t-95.5-6q113-78 252-73.5T773-797" />
  </Svg>
);
