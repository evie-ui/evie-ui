import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgSubscriptFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M831-135q-14.875 0-24.938-9.929Q796-154.858 796-169.536v-44.536q0-14.678 10.062-25.303Q816.125-250 831-250h74v-25h-86q-10.2 0-16.6-6.5Q796-288 796-297t6.4-16q6.4-7 16.6-7h96q14.875 0 24.938 10.522Q950-298.956 950-284.278v44.536q0 14.678-10.062 24.71Q929.875-205 915-205h-74v25h87q9 0 15.5 7t6.5 16q0 9-6.5 15.5T928-135zm-535-80q-30.115 0-44.058-25.5Q238-266 254-291l153-241-139-217q-15-24-1.532-50.5 13.469-26.5 43.254-26.5 13.747 0 24.874 6.429Q345.724-813.143 353-802l118 186h-3l118-187q5.892-9.905 17.454-16.452Q615.015-826 626.616-826q30.737 0 45.061 26.5Q686-773 670-749L531-532l153 241q16 25 1.844 50.5t-42.25 25.5q-13.688 0-25.743-5.81Q605.796-226.619 599-238L468-447h3L339-238q-6.895 10.381-18.461 16.69Q308.974-215 296-215" />
  </Svg>
);
