import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSettingsAccountBox = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M581.882 21q-28.117 0-47.5-19.625Q515-18.25 515-46v-312q0-27 19.382-47 19.383-20 47.5-20H894q27 0 47 20t20 47v311.902Q961-18 941 1.5T894 21zM582-46h312v-35.984Q866-116 825.639-136.5q-40.36-20.5-88-20.5-47.639 0-87.655 20.684Q609.969-115.632 582-82zm156-156q27 0 47-19.271t20-47.229q0-27.958-20-47.229T737.5-335q-27.5 0-47 19.5t-19.5 47q0 27.5 19.417 47Q709.833-202 738-202M478-610q-55 0-92.5 38T348-480q0 44 25 77.5t64 46.5v-86.49q-6-5.51-9.5-16.51-3.5-11-3.5-21.085 0-22.464 15.655-38.19Q455.311-534 477.676-534 494-534 507-526t20 21h78q-9-45-44.5-75T478-610M435-55h-28q-17.973 0-31.486-11Q362-77 360-95l-15-94q-13-4-29.5-13.5T288-221l-86 41q-16 7-34 1.5T141-201L68-332q-10-16.25-5.5-33.231T81-393l80-58q-1-6.037-1.5-14.5-.5-8.463-.5-14.5 0-6.037.5-14.5.5-8.463 1.5-14.5l-80-58q-14-10.615-18.5-27.808Q58-612 68-628l73-130q9.111-15.636 27.056-21.818Q186-786 202-779l87.776 40Q300-747 316-756t29-13l15-97q2-17 15.514-28.5Q389.027-906 407-906h146q17.973 0 31.486 11.5Q598-883 600-866l15 96q12.806 5.053 29.403 13.526Q661-748 672-739l86-40q16-7 33.944-.818Q809.889-773.636 819-758l73 127q8 17 4 34.829T877-568l-89 63v1-1h-84.069q.069-7-2.431-19.438Q699-536.875 695-551l93-67-32-59-105 46q-23-28-53.954-47-30.953-19-67.314-23L516-811h-72.097L431-701q-35.893 6-67.446 24.5Q332-658 308-631l-104-46-32 59 91 66q-4 18-7 36t-3 36q0 18 3 36.5t7 35.5l-91 66 32 59 104-46q25 26.847 58 44.924Q399-266 435-257z" />
  </Svg>
);
