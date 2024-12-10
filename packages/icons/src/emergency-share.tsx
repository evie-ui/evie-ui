import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgEmergencyShare = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-88q81.938-79.406 127.969-146.203Q654-301 654-354q0-73.831-50.115-126.916Q553.771-534 479.885-534 406-534 356-481.04q-50 52.959-50 126.613 0 49.427 45.531 118.4Q397.062-167.054 480-88m0-529q108 0 182.5 77.244T737-354q0 48-21 96t-53.5 92.5Q630-121 591.402-81.154 552.805-41.308 518-10 509-3 499.828.5T480 4Q469.344 4 460.172.5 451-3 443-10q-36-32-74.5-71.5t-71-84Q265-210 244-258t-21-95.5Q223-463 297.5-540T480-617m.235 330Q511-287 532-308.235q21-21.236 21-52Q553-391 531.765-412q-21.236-21-52-21Q449-433 428-411.765q-21 21.236-21 52Q407-329 428.235-308q21.236 21 52 21m1.265-432q-32.5 0-62.5 10.5T363-679q-14 10-30.5 9.5T304-683q-13-11-13.02-28.341-.02-17.34 14.46-27.616Q342-768 387.283-784.5 432.567-801 481.8-801t94.017 16.5Q620.6-768 658-739q14 10 14 27.5t-11.913 29.935Q648-669 631-669t-31-10q-25-19-55.5-29.5t-63-10.5m.852-160q-63.928 0-122.281 22Q301.718-835 253-795q-14 11-32 11.5T191-796q-13-11-12.5-27.5T193-852q61-51 134.522-80 73.521-29 154-29 80.478 0 153.27 28.485Q707.584-904.03 769-854q15 12 16 29.5T773-795q-12 12-29.5 12T712-794q-49-40-107.36-62.5Q546.279-879 482.352-879M480-360" />
  </Svg>
);
