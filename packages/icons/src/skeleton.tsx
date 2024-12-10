import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgSkeleton = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480.287-68q-46.714 0-81.5-10Q364-88 324-114l-111-70q-27-18-42-47.5t-15-62.12q0-64.38 45.5-103.88T312.047-437q36.953 0 65.239 11.5Q405.571-414 430-389q1 2 3.618 2.667 2.617.666 12.382 1.333v-77q-59-2-105.5-12t-79-26q-32.5-16-50-38T194-586.671q0-19.756 13-37.542Q220-642 245-658q-5-9-8-19.318-3-10.318-3-21.682 0-23 16.5-42t45.5-35q-1-3-1.5-7.115-.5-4.116-.5-8.885 0-28 30-53t76-36v78q-4.545 2.071-10.273 4.536Q384-796 381-794q5 5 19.5 10t45.5 8v-134h68v134q31-3 45.5-8t19.5-10q-3-3-8.5-5.5t-11.5-3.127L560-881q46 11 76 36t30 53q0 5-2 15.545Q693-760 709.5-740.5t16.5 41.853Q726-688 723-677q-3 11-8 20 25 15 38 32.787 13 17.786 13 37.542Q766-560 748.5-538t-50 38q-32.5 16-79 26T514-462v77q9-1 11.5-1.5t3.5-2.5q23-25 54.5-36.5t64.794-11.5Q713-437 759-397t46 104q0 33.823-16 63.16-16 29.337-44 47.234L636-114q-40.615 26-74.307 36Q528-68 480.287-68m-.063-72q35.224 0 60.895-7.712Q566.79-155.424 598-175l109-69q12-7 19-20t7-29.31q0-32.817-25.5-52.253Q682-365 648-365q-17 0-33.218 5.5Q598.564-354 586-344q-23 20-50 30.5T480-303q-29 0-56-10.5T374-344q-12.564-10-28.782-15.5T312-365q-34 0-59 19t-25 52q0 15 6.5 29t18.5 21l111 70q30 20 55.5 27t60.724 7M446-537v-45q-48-2-80-8t-58-17q-14 6-23 11.905-9 5.905-14 11.095 12 15 56 29t119 18M330-253q12 0 21-8.5t9-21.5q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 13 9 21.5t21 8.5m116-404v-43.786Q412-703 390.409-707T351-719q-16 6-26 12t-14 12q6 12 41 23t94 15m68 120q75-4 119-18t56-29q-3-3-13.5-10T651-607q-26 11-58 17t-79 8.161zm0-120q59-3 93.5-14.5T650-695q-5-6-16-12.5T608-719q-17.574 7-38.84 11.5Q547.894-703 514-701zm116 404q12 0 21-8.5t9-21.5q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 13 9 21.5t21 8.5m-150 0" />
  </Svg>
);
