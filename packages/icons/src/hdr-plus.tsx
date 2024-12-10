import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHdrPlus = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M595-315h-46q-10 0-16-7t-6-16q0-9 6.5-15.5T550-360h45v-46q0-9 6.5-15.5t16-6.5q9.5 0 16 6.5T640-406v46h46q9 0 15.5 6.5T708-338q0 9-6.5 16t-15.5 7h-46v46q0 9-6.5 15.5t-16 6.5q-9.5 0-16-7t-6.5-16zM323-592v83.17q0 8.66-6.5 15.245Q310-487 301-487q-10 0-16.5-6.538T278-508.73v-191.212q0-9.058 6.5-15.558t16-6.5q9.5 0 16 6.5T323-700v63h105v-63q0-9 6.5-15.5t16-6.5q9.5 0 16 6.535 6.5 6.536 6.5 15.59v190.75q0 9.054-6.5 15.59Q460-487 450.5-487t-16-7.085Q428-501.17 428-510.3V-592zm209 81.865v-189.807q0-9.058 6.5-15.558T555-722h108q18 0 31.5 13.088t13.5 32.206v144.588Q708-513 694.5-500 681-487 663-487H555q-10 0-16.5-7.038t-6.5-16.097M421-317q5 0 8.5-3.5t3.5-8.5v-41q0-5-3.5-8.5T421-382h-92v65zm-92 43v63q0 10-6 15.5t-15 5.5q-10 0-16-6t-6-16v-190.857q0-9.062 6.5-15.603Q299-425 309-425h124q18 0 30.5 12.619t12.5 30.789v64.272q0 17.123-11.5 29.221Q453-276 436-274l22 57q4 10-2.5 18.5t-16.848 8.5Q433-190 428-193.5q-5-3.5-7-9.5l-28-71zm248-258h74q5 0 8.5-3t3.5-9v-121q0-6-3.5-9t-8.5-3h-74zM480.5-55Q390-55 312.013-87.584q-77.988-32.583-134.917-89.512T87.584-312.013Q55-390 55-480.5q0-89.5 32.347-167.05 32.347-77.551 89.512-134.917 57.166-57.366 135.154-90.449Q390-906 480.5-906q89.5 0 167.106 32.954 77.605 32.953 135.012 90.302 57.407 57.349 90.395 134.877Q906-570.34 906-480q0 90-33.084 167.987-33.083 77.988-90.449 135.154-57.366 57.165-134.917 89.512Q570-55 480.5-55m-.683-94Q621-149 716-243.326q95-94.325 95-236.5Q811-622 716.183-716.5t-236-94.5Q339-811 244-716.674q-95 94.325-95 236.5Q149-338 243.817-243.5t236 94.5M480-480" />
  </Svg>
);
