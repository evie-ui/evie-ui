import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNestCamWiredStand = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M479.604-270q-50.437 0-86.521 36.25Q357-197.5 357-147v42h246v-42q0-50.5-35.975-86.75T479.604-270M322-657.983q0 66.698 45.5 115.841Q413-493 480-487l179 20v-383l-177.589 18.783Q413-824 367.5-774.423T322-657.983M320-10q-24 0-40.5-16.5T263-67v-79.512Q263-237 326.727-301 390.455-365 480-365q11 0 21 2t21 4l17-26-69-7q-104-10-173.5-86.149T227-658.493q0-104.48 69.5-180.994Q366-916 471-925l179-18q41.77-4 72.385 23.5Q753-892 753-850v382q0 44.188-30.659 71.594Q691.682-369 650-374l-22-2-30 46q45 29 72 77.336T697-147v80q0 24-16.5 40.5T640-10zm160-95" />
  </Svg>
);