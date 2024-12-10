import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgInstantMixFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M185.825-114Q164-114 148.5-129.625 133-145.25 133-168v-240h-29q-22.75 0-37.875-15.675Q51-439.351 51-462.175 51-484 66.125-499 81.25-514 104-514h164q22.75 0 37.875 15.675Q321-482.649 321-460.825 321-438 305.875-423 290.75-408 268-408h-29v241q0 22.75-15.175 37.875-15.176 15.125-38 15.125m0-460Q164-574 148.5-589.625 133-605.25 133-627v-166q0-22.75 15.675-37.875Q164.351-846 186.175-846 209-846 224-830.875 239-815.75 239-793v166q0 22.75-15.175 37.875-15.176 15.125-38 15.125M397-615q-21.75 0-36.875-15.675Q345-646.351 345-668.175 345-691 360.625-706 376.25-721 398-721h29v-72q0-21.75 15.675-37.375Q458.351-846 480.175-846 502-846 517.5-830.375 533-814.75 533-793v72h30q21.75 0 36.875 15.675Q615-689.649 615-667.825 615-645 599.875-630 584.75-615 563-615zm82.825 501Q458-114 442.5-129.625 427-145.25 427-168v-334q0-21.75 15.675-37.375Q458.351-555 480.175-555 502-555 517.5-539.375 533-523.75 533-502v334q0 22.75-15.675 38.375Q501.649-114 479.825-114m295 0Q752-114 736.5-129.625 721-145.25 721-168v-73h-29q-22.75 0-37.875-15.675Q639-272.351 639-295.175 639-317 654.125-332 669.25-347 692-347h165q21.75 0 36.875 15.675Q909-315.649 909-293.825 909-271 893.875-256 878.75-241 857-241h-30v74q0 22.75-15.175 37.875-15.176 15.125-37 15.125m0-293Q752-407 736.5-422.125 721-437.25 721-460v-333q0-22.75 15.675-37.875Q752.351-846 775.175-846 797-846 812-830.875 827-815.75 827-793v333q0 22.75-15.175 37.875-15.176 15.125-37 15.125" />
  </Svg>
);