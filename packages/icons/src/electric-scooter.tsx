import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgElectricScooter = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M191.364-234q-49.569 0-83.466-34.024Q74-302.047 74-351.024 74-400 107.792-434q33.791-34 83.208-34 39 0 70.918 20.5Q293.836-427 304-390h219q6-74 59-131t126-68l-57.977-265H526q-14.9 0-25.45-10.175-10.55-10.176-10.55-26Q490-906 500.125-916T526-926h107q33 0 58.86 21.032Q717.72-883.935 726-852l63 292q2 10.966-4.595 19.483Q777.81-532 767-532q-67.409 0-119.205 45.5Q596-441 590-375q-2.895 23.264-17.771 40.132Q557.353-318 536-318H304.295Q294-279 262.416-256.5 230.832-234 191.364-234m-.259-72Q209-306 222.5-319.605q13.5-13.606 13.5-31.5Q236-369 222.395-382.5q-13.606-13.5-31.5-13.5Q173-396 159.5-382.395q-13.5 13.606-13.5 31.5Q146-333 159.605-319.5q13.606 13.5 31.5 13.5m578.189 72Q720-234 686-267.706t-34-83Q652-400 685.706-434t83-34Q818-468 852-434.294t34 83Q886-302 852.294-268t-83 34m-.189-72Q787-306 800.5-319.605q13.5-13.606 13.5-31.5Q814-369 800.395-382.5q-13.606-13.5-31.5-13.5Q751-396 737.5-382.395q-13.5 13.606-13.5 31.5Q724-333 737.605-319.5q13.606 13.5 31.5 13.5M529-112v42q0 13-11.5 20T494-49l-179.039-92q-8.961-4-6.506-13 2.454-9 12.545-9h117v-43q0-13 11.5-20t23.5-1l181 93q8 3.947 5 12.974Q656-112 647-112zm240-239" />
  </Svg>
);
