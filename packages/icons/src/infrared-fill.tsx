import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgInfraredFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M661-479.821q0 75.821-24.616 143.396-24.617 67.576-67.946 121.436Q556-201 538-200.5T507-214q-14-13-13.308-30.5Q494.385-262 505-276q33-42 51-94.084 18-52.085 18-110Q574-538 556-590t-51-94q-10.615-14-11.308-31.5Q493-733 507-747q13-13 30.844-12.375Q555.689-758.75 568-745q43.533 53.959 68.267 121.659Q661-555.642 661-479.821M544-480q0 52.442-16 99.221T482-297q-11.067 13.625-28.033 13.812Q437-283 424-295.897q-13-12.896-13.5-30.5Q410-344 420-359q17-25 27-56.214 10-31.215 10-64.786t-10-64.786Q437-576 420-601q-10-15.208-9.5-32.604T424-664q13-13 29.967-12.812Q470.933-676.625 482-663q30 37 46 83.779 16 46.779 16 99.221m-117 0q0 27.555-8 52.777Q411-402 398-380q-9.209 14-26.105 14.5Q355-365 342-378t-14-31q-1-18 5-35 3.565-8.146 5.283-17.396Q340-470.646 340-480t-1.717-18.604Q336.565-507.854 333-516q-6-17-5-35t14-31q12.8-13 29.9-12.5Q389-594 398-580q13 22 21 47.223 8 25.222 8 52.777m-117 .089Q310-451 289.438-430.5 268.875-410 240-410v220q0 17.75-12.675 30.375Q214.649-147 196.825-147 178-147 165.5-159.625T153-190v-580q0-17.75 12.675-30.875Q178.351-814 197.175-814 215-814 227.5-800.875T240-770v220q29 0 49.5 20.589 20.5 20.588 20.5 49.5" />
  </Svg>
);
