import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPatientListFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M634-403q-61 0-100.5-40T494-544q0-61 39.5-101T634-685q61 0 101 40t40 101q0 61-40 101t-101 40M419-114q-19.75 0-33.375-13.625T372-162v-41q0-24.864 12-46.932T416-282q47-34 103.5-50.5T634-349q58 0 114 18t105 49q19 13 31.5 33.5T897-203v41q0 20.75-13.625 34.375T850-114zm-69-268H143q-19.75 0-33.375-13.675Q96-409.351 96-430.175 96-450 109.625-463.5 123.25-477 143-477h207q19.75 0 33.875 13.675Q398-449.649 398-429.825 398-409 383.875-395.5 369.75-382 350-382m161-377H143q-19.75 0-33.375-13.675Q96-786.351 96-806.175 96-826 109.625-839.5 123.25-853 143-853h368q19.75 0 33.375 13.675Q558-825.649 558-805.825 558-786 544.375-772.5 530.75-759 511-759m-73 188H143q-19.75 0-33.375-13.675Q96-598.351 96-618.175 96-638 109.625-651.5 123.25-665 143-665h329q-14 20-23.227 43.921Q439.545-597.159 438-571" />
  </Svg>
);
