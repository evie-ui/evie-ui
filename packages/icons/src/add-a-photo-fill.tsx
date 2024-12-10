import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAddAPhotoFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M829.825-700q-16.225 0-26.025-9.925-9.8-9.925-9.8-25.777V-794h-59.298q-15.427 0-25.564-10.37Q699-814.74 699-830.07q0-14.905 10.35-25.417Q719.7-866 735-866h59v-58.596q0-15.554 9.975-25.979Q813.951-961 829.675-961q15.725 0 26.025 10.494Q866-940.013 866-924.5v58.5h58.5q15.087 0 25.294 10.693Q960-844.614 960-829.702q0 14.913-10.206 25.307Q939.587-794 924.5-794H866v57.5q0 15.513-10.4 26.006Q845.199-700 829.825-700m-390.56 439Q515-261 565.5-311.265q50.5-50.264 50.5-125.5Q616-512 565.735-562.5q-50.264-50.5-125.5-50.5Q365-613 314.5-562.819 264-512.637 264-437.735 264-362 314.181-311.5 364.363-261 439.265-261m.235-80q-41.5 0-68.5-27.5t-27-69q0-41.5 27-69t68.5-27.5q41.5 0 69.5 27.5t28 69q0 41.5-28 69T439.5-341M109-95q-39.05 0-66.525-27.475Q15-149.95 15-189v-495q0-38.463 27.475-66.731Q69.95-779 109-779h125l56-60q13-14 30-20.5t36-6.5h236q19.75 0 33.375 14.188Q639-837.625 639-818v47q0 15.417 10.792 26.208Q660.583-734 676-734h58v56q0 16.583 10.792 27.292Q755.583-640 771-640h47q19.625 0 33.812 13.625Q866-612.75 866-593v404q0 39.05-28.269 66.525Q809.463-95 771-95z" />
  </Svg>
);
