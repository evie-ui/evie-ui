import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgVapingRooms = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M309-177v-123h533q26.167 0 43.583 17.382Q903-265.235 903-239.353t-17.417 44.118Q868.167-177 842-177zm562.977-168q-13.444 0-22.21-8.783Q841-362.567 841-376v-69q0-75-49.5-123T666-616q-13 0-21.5-8.79t-8.5-22.233q0-13.01 8.5-21.494Q653-677 666-677q34 0 55.5-24t21.5-58q0-34-21.5-58T666-841q-12.833 0-21.917-8.79Q635-858.58 635-872.023q0-13.444 8.783-22.21Q652.567-903 666-903q60 0 99.5 42.493Q805-818.015 805-759q0 37.474-14 63.237Q777-670 754-656q57 14 103 72.724Q903-524.552 903-445v69q0 13.433-8.79 22.217Q885.42-345 871.977-345M766-345q-13 0-22-8.783-9-8.784-9-22.217v-24q0-41.513-24.5-66.256Q686-491 651-491h-71q-59.269 0-98.634-44.311Q442-579.621 442-638.632q0-59.01 39.5-99.189Q521-778 579-778q13.867 0 22.933 8.79Q611-760.42 611-746.977q0 13.444-8.783 22.21Q593.433-716 580-716q-35 0-56 21t-21 56q0 34 21 60.5t55.565 26.5H651q61.377 0 103.188 40.857Q796-470.286 796-413v38q0 13-8.5 21.5T766-345M268-180q-37-8-74.822-12.5Q155.355-197 118-197H93q-18.125 0-29.563-11.848Q52-220.696 52-239.429 52-257 61.5-272.5 71-288 93-280h25q37.355 0 75.178-4.5Q231-289 268-297zm140.5-33q11.5 0 18.5-7.4t7-18.1q0-11.5-6.9-18.5t-17.6-7q-11.5 0-19 6.9t-7.5 17.6q0 11.5 7.4 19t18.1 7.5" />
  </Svg>
);
