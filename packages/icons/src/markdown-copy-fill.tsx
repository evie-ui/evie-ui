import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMarkdownCopyFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M326-192q-39.05 0-66.525-27.475Q232-246.95 232-286v-542q0-39.463 27.475-67.231Q286.95-923 326-923h422q39.463 0 67.231 27.769Q843-867.463 843-828v542q0 39.05-27.769 66.525Q787.463-192 748-192zM172-37q-39.462 0-67.231-27.769Q77-92.537 77-132v-589q0-19.75 13.675-33.375 13.676-13.625 34-13.625Q145-768 158.5-754.375 172-740.75 172-721v589h469q19.75 0 33.375 13.675Q688-104.649 688-84.325 688-64 674.375-50.5 660.75-37 641-37zm284-590h57v102q0 9.833 7.616 17.417 7.617 7.583 18 7.583Q549-500 556-507.583q7-7.584 7-17.417v-102h56v165q0 9.833 7.616 17.417 7.617 7.583 18 7.583Q655-437 662-444.583q7-7.584 7-17.417v-181q0-15.45-8.987-24.725Q651.025-677 636-677H439q-14.025 0-23.513 9.275Q406-658.45 406-643v181q0 9.833 7.616 17.417 7.617 7.583 18 7.583Q442-437 449-444.583q7-7.584 7-17.417z" />
  </Svg>
);