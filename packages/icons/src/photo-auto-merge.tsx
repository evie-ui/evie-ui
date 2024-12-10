import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgPhotoAutoMerge = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M287-193q-39.05 0-66.525-27.769Q193-248.538 193-288v-483q0-39.463 27.475-67.231Q247.95-866 287-866h296q-3 25-2 49t8 46H288v467q42.854-58.477 106.021-92.239Q457.189-430 529.106-430q70.591 0 134.243 35Q727-360 770-304q0 1-.5.5t.5-.5v-290q23 6 47 8t49-2v300q0 39.462-27.769 67.231Q810.463-193 771-193zM156 13q-39.18 5-69.955-19.391Q55.27-30.783 51-70l-61-478q-5-40.341 19.68-71.171Q34.36-650 73-654l60-7v96l-51 5 63 481 464-54h130q0 35-24.5 59.5T654-46zm632.376-783-11.318 34.351Q775-729 769.5-725q-5.5 4-13.5 4-12.435 0-18.717-10Q731-741 735-752l62.779-176.599q2.268-7.723 8.506-11.562Q812.523-944 820.462-944h15.089q7.545 0 13.997 4T858-928.966l63.131 180.264q3.869 10.813-2.856 19.258Q911.55-721 900.233-721q-7.202 0-12.25-3.714Q882.935-728.429 880-735l-13-35zM799-804h57l-28-90zM528.717-358Q483-358 441.5-340.5T370-289h318q-30-34-71.783-51.5-41.782-17.5-87.5-17.5M529-750q48 0 82.5 34.5t34.5 82.564q0 48.064-34.709 81.5T529-518q-48 0-82-33.436t-34-81.5Q413-681 447-715.5q34-34.5 82-34.5m.209 72Q511-678 498-664.407t-13 31.5Q485-615 498.093-602t31 13Q547-589 560.5-602.093t13.5-31Q574-651 560.709-664.5q-13.29-13.5-31.5-13.5" />
  </Svg>
);
