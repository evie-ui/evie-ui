import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAccessibilityFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480.212-740Q445-740 420.5-764.748t-24.5-59.5Q396-859 420.288-884q24.287-25 59.5-25Q515-909 539.5-884.094q24.5 24.907 24.5 59.882 0 34.562-24.288 59.387Q515.425-740 480.212-740M359-113v-483H161q-18.125 0-29.562-12.175-11.438-12.176-11.438-30Q120-656 132.125-667.5T162-679h637q18.125 0 29.562 11.488Q840-656.024 840-637.825 840-620 828.562-608 817.125-596 799-596H602v483q0 17.425-12.125 29.213Q577.749-72 559.825-72q-17.5 0-29.163-11.787Q519-95.575 519-113v-227h-78v227q0 17.425-11.979 29.213Q417.042-72 399.333-72q-17.708 0-29.021-11.787Q359-95.575 359-113" />
  </Svg>
);
