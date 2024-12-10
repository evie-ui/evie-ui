import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDataInfoAlert = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M150-113q-19.75 0-33.375-13.675Q103-140.351 103-160.175 103-180 116.625-193.5 130.25-207 150-207h420q19.75 0 33.375 13.675Q617-179.649 617-159.825 617-140 603.375-126.5 589.75-113 570-113zm489.894-318Q552-431 491.5-491.606t-60.5-148.5Q431-728 491.606-789t148.5-61Q728-850 789-788.649t61 148.755Q850-552 788.649-491.5T639.894-431M150-483q-19.75 0-33.375-13.675Q103-510.351 103-530.175 103-550 116.625-563.5 130.25-577 150-577h207q6.32 26.323 16.66 49.661Q384-504 398-483zm0 185q-19.75 0-33.375-13.675Q103-325.351 103-345.175 103-365 116.625-378.5 130.25-392 150-392h352q24.8 18.364 53.9 28.182Q585-354 617-351.857V-341q0 18.625-13.625 30.812Q589.75-298 570-298zm490-209q14 0 24-9.5t10-23.5v-93q0-14.4-9.8-24.2-9.8-9.8-24.2-9.8-14 0-23.5 9.8T607-633v93q0 14 9.5 23.5T640-507m0-200q14 0 24-9.5t10-23.5q0-14-9.8-24T640-774q-14 0-23.5 9.8T607-740q0 14 9.5 23.5T640-707" />
  </Svg>
);
