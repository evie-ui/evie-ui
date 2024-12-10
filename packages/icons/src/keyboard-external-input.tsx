import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgKeyboardExternalInput = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M140-260v-440zm0 94q-39 0-66.5-28T46-260v-440q0-39 27.5-67t66.5-28h680q39 0 67 28t28 67v285q-20-18-44.103-32.661Q846.794-462.323 820-469v-231H140v440h342q-3 12-3.5 23.451t-.5 23.5q0 12.049.5 24.049t3.5 23zm190-159h172q7-17 17.5-31.5T541-385H330q-12.75 0-21.375 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325T330-325m404 159H624q-19.75 0-33.375-13.675Q577-193.351 577-213.175 577-233 590.625-246.5 604.25-260 624-260h110l-25-26q-13-14-13-31.5t15-32.5q14-14 33-14t33 14l104 103q14 15 14 34.5T881-179L777-76q-14 14-33.5 14T708-78q-14-14-13.5-31t13.5-31zM233.175-575q12.825 0 21.325-8.675 8.5-8.676 8.5-21.5 0-12.825-8.675-21.325-8.676-8.5-21.5-8.5-12.825 0-21.325 8.675-8.5 8.676-8.5 21.5 0 12.825 8.675 21.325 8.676 8.5 21.5 8.5m124 0q12.825 0 21.325-8.675 8.5-8.676 8.5-21.5 0-12.825-8.675-21.325-8.676-8.5-21.5-8.5-12.825 0-21.325 8.675-8.5 8.676-8.5 21.5 0 12.825 8.675 21.325 8.676 8.5 21.5 8.5m123 0q12.825 0 21.325-8.675 8.5-8.676 8.5-21.5 0-12.825-8.675-21.325-8.676-8.5-21.5-8.5-12.825 0-21.325 8.675-8.5 8.676-8.5 21.5 0 12.825 8.675 21.325 8.676 8.5 21.5 8.5m124 0q12.825 0 21.325-8.675 8.5-8.676 8.5-21.5 0-12.825-8.675-21.325-8.676-8.5-21.5-8.5-12.825 0-21.325 8.675-8.5 8.676-8.5 21.5 0 12.825 8.675 21.325 8.676 8.5 21.5 8.5m123 0q12.825 0 21.325-8.675 8.5-8.676 8.5-21.5 0-12.825-8.675-21.325-8.676-8.5-21.5-8.5-12.825 0-21.325 8.675-8.5 8.676-8.5 21.5 0 12.825 8.675 21.325 8.676 8.5 21.5 8.5m-494 125q12.825 0 21.325-8.675 8.5-8.676 8.5-21.5 0-12.825-8.675-21.325-8.676-8.5-21.5-8.5-12.825 0-21.325 8.675-8.5 8.676-8.5 21.5 0 12.825 8.675 21.325 8.676 8.5 21.5 8.5m124 0q12.825 0 21.325-8.675 8.5-8.676 8.5-21.5 0-12.825-8.675-21.325-8.676-8.5-21.5-8.5-12.825 0-21.325 8.675-8.5 8.676-8.5 21.5 0 12.825 8.675 21.325 8.676 8.5 21.5 8.5m123 0q12.825 0 21.325-8.675 8.5-8.676 8.5-21.5 0-12.825-8.675-21.325-8.676-8.5-21.5-8.5-12.825 0-21.325 8.675-8.5 8.676-8.5 21.5 0 12.825 8.675 21.325 8.676 8.5 21.5 8.5M608-449q5 1 8.5-.5t6.5-5.5q5-4 8-10.545 3-6.546 3-14.455 0-12.75-8.675-21.375-8.676-8.625-21.5-8.625-12.825 0-21.325 8.625T574-480q0 14 10 23t24 8m89-27q11-2 23-3t25-1q2.902 0 5.768-.333 2.866-.334 6.232-.667v1q0-12.75-8.675-21.375-8.676-8.625-21.5-8.625-12.825 0-21.325 8.695t-8.5 21.549z" />
  </Svg>
);
