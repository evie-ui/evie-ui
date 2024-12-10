import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFullscreen = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-189h96q19.625 0 33.812 13.675Q333-161.649 333-141.825 333-122 318.812-108.5 304.625-95 285-95H142q-19.75 0-33.375-13.625T95-142v-143q0-19.625 13.675-33.812Q122.351-333 142.175-333 162-333 175.5-318.812 189-304.625 189-285zm582 0v-96q0-19.625 13.675-33.812Q798.351-333 818.088-333q19.737 0 33.824 14.188Q866-304.625 866-285v143q0 19.75-14.188 33.375Q837.625-95 818-95H676.38q-21.13 0-34.755-13.675Q628-122.351 628-142.175 628-162 641.625-175.5 655.25-189 676-189zM189-771v95q0 20.75-13.675 34.375Q161.649-628 141.825-628 122-628 108.5-641.625 95-655.25 95-676.38V-818q0-19.625 13.625-33.812Q122.25-866 142-866h143q19.625 0 33.812 14.263 14.188 14.263 14.188 34Q333-798 318.812-784.5 304.625-771 285-771zm582 0h-95q-20.75 0-34.375-13.675Q628-798.351 628-818.088q0-19.737 13.625-33.824Q655.25-866 676.38-866H818q19.625 0 33.812 14.188Q866-837.625 866-818v141.62q0 21.13-14.263 34.755-14.263 13.625-34 13.625Q798-628 784.5-641.625 771-655.25 771-676z" />
  </Svg>
);
