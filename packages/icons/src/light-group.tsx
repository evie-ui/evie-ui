import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLightGroup = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M158-41q-19.75 0-33.375-13.675Q111-68.351 111-88.175 111-108 124.625-122 138.25-136 158-136h240q19.75 0 33.375 14.175Q445-107.649 445-87.825 445-68 431.375-54.5 417.75-41 398-41zm536.567-70Q654-111 624.5-140.062 595-169.125 595-211H487q-19.75 0-33.375-16T440-264q0-96 59.5-164.5T648-514v-349q0-19.75 13.675-33.375Q675.351-910 695.175-910 715-910 728.5-896.375 742-882.75 742-863v349q90 17 149.5 85.5T950-264q0 21-13.625 37T903-211H795q0 42-29 71t-71.433 29M277.825-211Q258-211 244.5-224.625 231-238.25 231-258v-272H68q-24 0-38-18.5T22-590l81-295q3.88-15.533 15.44-25.267Q130-920 147-920h263q17 0 29.06 9.733Q451.12-900.533 455-885l80 295q6 23-8 41.5T490-530H325v272q0 19.75-13.675 33.375Q297.649-211 277.825-211M543-305h306q-14-53-56.5-87T695-426q-55 0-97 34t-55 87M132-624h297l-53-201H186zm565 258" />
  </Svg>
);
