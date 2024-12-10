import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFireHydrantFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M218-152v-85h-18q-43 0-72.5-30T98-340v-80q0-42 29.5-72t72.5-30h18v-85h-28q-19.75 0-33.375-13.675Q143-634.351 143-654.175 143-674 156.625-688 170.25-702 190-702h35q21-87 91-144t164-57q94 0 164 57t91 144h35q19.75 0 33.375 14.175 13.625 14.176 13.625 34Q817-634 803.375-620.5 789.75-607 770-607h-27v85h17q43 0 73 30t30 72v80q0 43-30 73t-73 30h-17v85h27q19.75 0 33.375 13.675Q817-124.649 817-104.825 817-85 803.375-71.5 789.75-58 770-58H190q-19.75 0-33.375-13.675Q143-85.351 143-105.175 143-125 156.625-138.5 170.25-152 190-152zm262-103q52 0 88.5-36.5T605-380q0-51-36.5-88T480-505q-52 0-88.5 37T355-380q0 52 36.5 88.5T480-255m.235-75Q459-330 444.5-344.265q-14.5-14.264-14.5-35.5Q430-400 444.265-415q14.264-15 35.5-15Q501-430 515.5-415.235q14.5 14.764 14.5 35Q530-359 515.735-344.5q-14.264 14.5-35.5 14.5" />
  </Svg>
);
