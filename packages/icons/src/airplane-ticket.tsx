import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgAirplaneTicket = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m483-438-111 31-45-38q-1-1-15-2l-4 1q-7 2-9.5 9.162-2.5 7.162.5 13.314L343-342q3 7 11.053 11 8.052 4 15.947 1l350.337-96.085Q736.5-431 744.25-441.5t3.25-28.5q-4.5-17-17.5-23.5t-28.796-2.367L598-469 442.227-620.586Q437-626 430.667-628q-6.334-2-12.667 0l-4.737 1Q400-624 395.5-612q-4.5 12 1.5 23zM149-135q-39.8 0-66.9-27.1Q55-189.2 55-229v-136.548q0-9.637 5.22-16.908 5.22-7.271 13.78-10.236Q104-402 122.5-427t18.5-53q0-28-18.5-53.5T74-567.216q-8.56-2.985-13.78-10.333Q55-584.897 55-595v-136q0-40.213 27.1-67.606Q109.2-826 149-826h662q40.213 0 67.606 27.394Q906-771.213 906-731v502q0 39.8-27.394 66.9Q851.213-135 811-135zm0-94h662v-502H149v96q40 26 63 66.648 23 40.648 23 88T212-392.5Q189-352 149-325zm331-251" />
  </Svg>
);