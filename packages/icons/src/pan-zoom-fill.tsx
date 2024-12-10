import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPanZoomFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M256-189h68q19.75 0 33.375 13.675Q371-161.649 371-141.825 371-122 357.375-108.5 343.75-95 324-95H142q-19.75 0-33.375-13.625T95-142v-182q0-19.75 13.675-33.375Q122.351-371 142.175-371 162-371 175.5-357.375 189-343.75 189-324v68l98-98q14-14 33.5-14t33.5 14q14 14 14 33.5T354-287zm515-515-97 97q-14 14-33 13.5T608-608q-14-14-14-33.5t14-33.5l96-96h-68q-19.75 0-33.375-13.675Q589-798.351 589-818.175 589-838 602.625-852 616.25-866 636-866h182q19.75 0 33.875 14.125T866-818v182q0 19.75-14.175 33.375-14.176 13.625-34 13.625Q798-589 784.5-602.625 771-616.25 771-636z" />
  </Svg>
);
