import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgMicrowaveFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M408-530q-18 0-34.5-7T342-554q-9-5-16.738-10.5Q317.524-570 308-570q-12 0-21.115 5.789-9.116 5.79-17.092 14.211-4.793 5-9.716 7-4.923 2-11.077 2-13.175 0-22.087-8.625Q218-558.25 218-571q0-6 2.5-11.5t7.292-10.5q16.208-17 36.265-27 20.057-10 43.457-10 18.135 0 34.743 7.407Q358.866-615.185 375-605q7 5 15.31 10 8.309 5 17.69 5 14 0 38-20 4-5 9.703-7 5.703-2 12.22-2 13.077 0 21.577 8.625Q498-601.75 498-589q0 6-2.5 11t-6.5 10q-17 17-37.5 27.5T408-530m0 200q-18 0-34.5-7T342-354q-9-5-16.738-10.5Q317.524-370 308-370q-12 0-21.115 5.789-9.116 5.79-17.092 14.211-4.793 5-9.716 7-4.923 2-11.077 2-13.175 0-22.087-8.625Q218-358.25 218-371q0-6 2.5-11.5t7.292-10.5q16.208-17 36.265-27 20.057-10 43.457-10 18.135 0 34.743 7.407Q358.866-415.185 375-405q7 5 15.31 10 8.309 5 17.69 5 16.8 0 29.4-14.5Q450-419 467.714-419q13.286 0 21.786 8.5Q498-402 498-389q0 6-2.5 11t-6.5 10q0 .286-.273.554-.272.267-.727.446-17 17-36.895 27-19.894 10-43.105 10M149-135q-39.05 0-66.525-27.475Q55-189.95 55-229v-502q0-39.463 27.475-67.231Q109.95-826 149-826h662q39.463 0 67.231 27.769Q906-770.463 906-731v502q0 39.05-27.769 66.525Q850.463-135 811-135zm0-94h418v-502H149zm581.5-221q12.5 0 21-9t8.5-21.5q0-12.5-8.625-21T730-510q-12 0-21 8.625T700-480q0 12 9 21t21.5 9m0 170q12.5 0 21-9t8.5-21.5q0-12.5-8.625-21T730-340q-12 0-21 8.625T700-310q0 12 9 21t21.5 9M724-620h13q9 0 16-7.6t7-16.4v-13q0-9-7.6-16t-16.4-7h-13q-9 0-16 7.6t-7 16.4v13q0 9 7.6 16t16.4 7" />
  </Svg>
);
