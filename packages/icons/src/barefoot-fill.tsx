import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBarefootFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M200.825-643Q182-643 169.5-655.763t-12.5-30.5Q157-704 169.675-717q12.676-13 31-13Q219-730 231.5-717.035t12.5 31Q244-668 231.262-655.5T200.825-643M399.956-65Q327-65 276-116.031T225-240v-240q0-106.917 74.042-180.958Q373.083-735 480-735h73q74.934 0 128.467 51.152Q735-632.696 735-558.667 735-508 707.5-466.5T635-403q-28 14-44 39.5T575-307v67q0 72.906-51.06 123.953Q472.881-65 399.956-65m-97.131-670Q284-735 271.5-747.625T259-779v-40q0-17.625 12.675-30.312 12.676-12.688 31-12.688Q321-862 333.5-849.312 346-836.625 346-819v40q0 18.75-12.738 31.375T302.825-735M400-160q34 0 57.5-22.762Q481-205.525 481-240v-67q0-58.232 30.557-106.859Q542.114-462.486 595-487q20.826-10.833 33.413-30.176Q641-536.519 641-560q0-34-26.5-57.5T553-641h-73q-67.475 0-113.737 47Q320-547 320-480v240q0 34.475 22.763 57.238Q365.525-160 400-160m42.325-615Q424-775 411.5-787.625T399-819v-40q0-17.625 12.738-30.312Q424.476-902 442.175-902 461-902 473.5-889.312 486-876.625 486-859v40q0 18.75-12.675 31.375-12.676 12.625-31 12.625m139.5 0Q563-775 550.5-787.625T538-819v-60q0-17.625 12.675-30.312 12.676-12.688 31-12.688Q600-922 612.5-909.312 625-896.625 625-879v60q0 18.75-12.738 31.375T581.825-775m159.057 55Q714-720 696-738.583 678-757.167 678-784v-75q0-25.75 18.118-44.375 18.117-18.625 45-18.625Q768-922 786.5-903.375 805-884.75 805-859v75q0 26.833-18.618 45.417Q767.765-720 740.882-720" />
  </Svg>
);
