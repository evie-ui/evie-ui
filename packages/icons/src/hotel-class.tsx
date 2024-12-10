import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHotelClass = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m712-327 172-148 19 2q20 2 32.5 16.097 12.5 14.097 12.5 30.709 0 10.065-4.5 19.629Q939-397 931-390l-113 96 34 148q1 2.538 1.5 5.962.5 3.423.5 5.961Q854-114 839.433-101q-14.566 13-32.655 13-6.778 0-12.903-1.5Q787.75-91 782-95l-19-12zM602-667l-52-122 7-13q5.654-13.64 17.827-20.82Q587-830 600.25-830q13.25 0 25.125 7T643-801l61 143zM277-225l143-85 143 86-39-161 126-110-166-14-64-152-64 152-166 13 126 109zm-116 87 50-214L45-497q-8-8-13-17.167-5-9.166-5-17.833 0-17.684 12-31.842Q51-578 72-579l219.078-19.092L376-801q5.75-15 18.125-22t25.625-7q13.25 0 25.827 7 12.577 7 18.423 22l84.922 202.908L769-579q20 1 32 15.13 12 14.131 12 31.783Q813-523 808-514t-13 17L629-352l50 214q0 .265 2 11.796 0 19.837-14.488 33.52Q652.024-79 633.214-79 628-79 608-87L420-201 232-87q-6 3-12.625 5.5T207-79q-21.5 0-36.75-17.5T161-138m259-286" />
  </Svg>
);
