import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFormatQuote = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m247-282 64-109q-5 1-11 1.5t-11 .5q-68-6-112.5-55.5T132-560q0-73.35 50.825-123.675T307-734q72 0 122.5 50.325T480-560q0 21.371-5.25 41.87Q469.5-497.632 460-480L322-238q-6.348 11.1-16.135 16.05-9.788 4.95-22.51 4.95-24.101 0-36.728-21.5Q234-260 247-282m387 1 64-110q-5 1-11 1.5t-11 .5q-68-6-112-55.5T520-560q0-73.35 50.325-123.675T694-734q72 0 123 50.325T868-560q0 21.371-5.25 41.87Q857.5-497.632 848-480L709-238q-6.348 11.1-16.135 16.05-9.788 4.95-22.51 4.95-24.101 0-36.228-21Q622-259 634-281M306.265-489Q336-489 356.5-509.588t20.5-50Q377-589 356.652-610t-49.417-21Q277-631 256.5-610.412t-20.5 50Q236-531 256.265-510q20.264 21 50 21m387.029 0Q723-489 744-509.588q21-20.588 21-50T744.36-610q-20.639-21-50.125-21-29.902 0-50.568 20.588-20.667 20.588-20.667 50T643.502-510q20.503 21 49.792 21M307-560" />
  </Svg>
);
