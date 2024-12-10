import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFullscreenExit = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M238-238h-96q-19.75 0-33.375-13.675Q95-265.351 95-285.088q0-19.737 13.625-33.824Q122.25-333 142-333h143q19.625 0 33.812 14.188Q333-304.625 333-285v143q0 19.75-14.263 33.375t-34 13.625Q265-95 251.5-108.625 238-122.25 238-142zm485 0v96q0 19.75-13.675 33.375Q695.649-95 675.325-95 655-95 641.5-108.625 628-122.25 628-142v-143q0-19.625 13.625-33.812Q655.25-333 676.38-333H818q19.625 0 33.812 14.263 14.188 14.263 14.188 34Q866-265 851.812-251.5 837.625-238 818-238zM238-723v-95q0-19.625 13.675-33.812Q265.351-866 285.088-866q19.737 0 33.824 14.188Q333-837.625 333-818v141.62q0 21.13-14.188 34.755Q304.625-628 285-628H142q-19.75 0-33.375-13.675Q95-655.351 95-675.675 95-696 108.625-709.5 122.25-723 142-723zm485 0h95q19.625 0 33.812 13.675 14.188 13.676 14.188 34Q866-655 851.812-641.5 837.625-628 818-628H676.38q-21.13 0-34.755-13.625Q628-655.25 628-676.38V-818q0-19.625 13.675-33.812 13.676-14.188 34-14.188Q696-866 709.5-851.812 723-837.625 723-818z" />
  </Svg>
);