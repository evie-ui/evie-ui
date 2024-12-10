import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgBusinessMessagesFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M265-135q-39.462 0-67.231-27.475Q170-189.95 170-229v-399L43-787q-10-12-3.5-25.5T62-826h758q39.463 0 67.231 27.769Q915-770.463 915-731v502q0 39.05-27.769 66.525Q859.463-135 820-135zm254-246h176q13 0 21.5-8.5T725-411q0-13-8.5-21.5T695-441H430q-15.5 0-21.25 14.5T415-401l103 103q9 9 21 9t21-9q9-9 9-21.5t-9-21.5zm60-198H403q-13 0-21.5 8.5T373-549q0 13 8.5 21.5T403-519h265q15.5 0 21.25-14.5T684-559L579.653-662.347Q571-670 559-670q-12 0-21 8-9 9-9 21.5t9 21.5z" />
  </Svg>
);
