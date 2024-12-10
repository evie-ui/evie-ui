import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMedicalMask = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480.265-181q-64.928 0-128.597-5.25Q288-191.5 224-201.286 188-207 164.5-235.5T141-301v-5q-63-18-105-64.5T-6-480q0-62 42.5-107.5T141-653v-27.41q0-40.59 27.981-70.09T238-780q29.333 0 58.667 5.5Q326-769 357-767q30 2 60.834 3.5 30.834 1.5 62.662 1.5 30.504 0 61.004-1.5 30.5-1.5 62.5-3.9 29-.6 58.169-6.6 29.168-6 57.831-6 42 0 71 29t29 71v27q61 20 104 65.5T967-480q0 63-43 108.5T820-307v7q0 36.6-24 64.8-24 28.2-59 33.575Q673-193 608.755-187t-128.49 6M480-268q63.125 0 126.75-5.75T733-290l-.542.075q-.541.075.542-.089V-694q-63.489 9-126.494 14-63.006 5-126.905 5-62.488 0-125.887-4.794T227.973-694h-.473.5v403.51Q290.625-280 353.224-274q62.599 6 126.776 6m-3.5-69q39.141 0 78.32-5Q594-347 634-358q16-5 25-21t4.5-33.5q-4.5-17.5-20.591-26T610-443q-34 10-67.375 14.5T476-424q-31.584 0-62.792-4.5Q382-433 352-443q-18-6-34 4t-21.5 27q-4.5 18 5 32.5T328-359q35 11 72.393 16.5 37.394 5.5 76.107 5.5M141-392v-175q-28 10-44 33.85-16 23.851-16 53.128 0 30.505 16 54.763Q113-401 141-392m679-1q27-9 43.5-33.195t16.5-53.767q0-29.038-17-52.804-17-23.766-43-35.234zM476.49-497q38.804 0 78.157-5Q594-507 634-518q16-5 25-21t4.5-33.5q-4.5-17.5-20.591-26T610-603q-34 10-67.375 14.5T476-584q-31.274 0-62.637-5T352-603q-18-4-34.106 4.318T297-573q-5 18 4 34t27 21q36 11 73.061 16 37.061 5 75.429 5M228-290v-404z" />
  </Svg>
);
