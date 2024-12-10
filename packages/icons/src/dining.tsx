import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgDining = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M332.93-197Q348-197 359-207.95T370-234v-229q29-6 52-30.914 23-24.915 23-55.169V-710q0-11-8.7-19t-19.8-8q-11.5 0-19.5 8t-8 18.63V-589h-26v-121.37q0-10.63-8-18.63-8-8-19.5-8t-19.5 8q-8 8-8 18.63V-589h-33v-121.37q0-10.63-8-18.63-8-8-19.5-8t-19.5 8q-8 8-8 19v160.917q0 30.254 23 55.169Q266-469 296-463v230q0 15.6 10.93 25.8 10.93 10.2 26 10.2m279.686 0Q628-197 638.5-207.95T649-234v-218q34-17 54.5-54.692Q724-544.385 724-595q0-62.143-31.507-102.071Q660.986-737 614.993-737 569-737 538.5-697.071 508-657.143 508-595q0 53.41 17.5 90.205T576-452v219q0 15.6 10.616 25.8 10.617 10.2 26 10.2M149-55q-39.05 0-66.525-27.475Q55-109.95 55-149v-662q0-39.463 27.475-67.231Q109.95-906 149-906h662q39.463 0 67.231 27.769Q906-850.463 906-811v662q0 39.05-27.769 66.525Q850.463-55 811-55zm0-94h662v-662H149zm0 0v-662z" />
  </Svg>
);
