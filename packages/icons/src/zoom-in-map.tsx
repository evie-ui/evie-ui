import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgZoomInMap = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m277-209-97 97q-15 15-33.5 14T114-114q-15-14-15-33.5t15-34.5l95-95h-67q-19.75 0-33.375-13.675Q95-304.351 95-324.175 95-344 108.625-357.5 122.25-371 142-371h182q19.75 0 33.375 13.625T371-324v182q0 19.75-13.675 33.375Q343.649-95 323.825-95 304-95 290.5-108.625 277-122.25 277-142zm407 0v67q0 19.75-14.175 33.375Q655.649-95 635.825-95 616-95 602.5-108.625 589-122.25 589-142v-182q0-19.75 13.625-33.375T636-371h182q19.75 0 33.875 13.675Q866-343.649 866-323.825 866-304 851.875-290.5 837.75-277 818-277h-67l97 97q15 15 15 33.5T848-114q-15 15-34 15t-34-15zM209-684l-97-96q-15-15-14-34t16-34q14-15 33.5-15t34.5 15l95 97v-67q0-19.75 13.675-33.875Q304.351-866 324.175-866 344-866 357.5-851.875 371-837.75 371-818v182q0 19.75-13.625 33.375T324-589H142q-19.75 0-33.375-13.675Q95-616.351 95-636.175 95-656 108.625-670 122.25-684 142-684zm542 0h67q19.75 0 33.875 14.175 14.125 14.176 14.125 34Q866-616 851.875-602.5 837.75-589 818-589H636q-19.75 0-33.375-13.625T589-636v-182q0-19.75 13.675-33.875Q616.351-866 636.175-866 656-866 670-851.875 684-837.75 684-818v67l97-98q15-15 34-15t34 15q15 15 15 34t-15 34z" />
  </Svg>
);