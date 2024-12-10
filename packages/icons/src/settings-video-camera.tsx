import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgSettingsVideoCamera = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M820.077-55H559.542Q542-55 529-67.69t-13-30.233v-259.535Q516-375 529.19-388t30.733-13h260.535Q838-401 850.5-387.788 863-374.575 863-357v86l67-66q6-6 13-2.917 7 3.084 7 10.917v204q0 7.833-7 10.917Q936-111 930-117l-67-67v86q0 17.575-12.69 30.287Q837.62-55 820.077-55M478-610q-55 0-92.5 38T348-480q0 44 25 77.5t64 46.5v-86.49q-6-5.51-9.5-16.51-3.5-11-3.5-21.085 0-22.464 15.647-38.19 15.647-15.725 38-15.725t37.853 14.75Q531-504.5 531-482h76q-1-53-38.5-90.5T478-610M345-189q-13-4-29.5-13.5T288-221l-86 41q-16 7-34 1.5T141-201L68-332q-10-16.25-5.5-33.231T81-393l80-58q-1-6.037-1.5-14.5-.5-8.463-.5-14.5 0-6.037.5-14.5.5-8.463 1.5-14.5l-80-58q-14-10.615-18.5-27.808Q58-612 68-628l73-130q9.111-15.636 27.056-21.818Q186-786 202-779l87.776 40Q300-747 316-756t29-13l15-97q2-17 15.514-28.5Q389.027-906 407-906h146q17.973 0 31.486 11.5Q598-883 600-866l15 96q12.806 5.053 29.403 13.526Q661-748 672-739l86-40q16-7 33.944-.818Q809.889-773.636 819-758l74 129q9 15.884 5 33.442T878-567l-80 56q0 6 1 15t1 14h-96q1-20.604-2-36.802T695-551l93-67-32-59-105 46q-23-28-53.954-47-30.953-19-67.314-23L516-811h-72.097L431-701q-35.893 6-67.446 24.5Q332-658 308-631l-104-46-32 59 91 66q-4 18-7 36t-3 36q0 18 3 36.5t7 35.5l-91 66 32 59 104-46q25 26.847 58 44.924Q399-266 435-257v202h-28q-17.973 0-31.486-11Q362-77 360-95z" />
  </Svg>
);