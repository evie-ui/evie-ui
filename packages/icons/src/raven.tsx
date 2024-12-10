import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgRaven = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m384-189-37 89q-7 18-25 25t-36 0q-19-7-26.5-25.5t.5-37.5l29-69q-105-34-169.5-122.5T55-530.242V-734q0-72 50.681-122Q156.363-906 229-906q17.119 0 33.681 2.826Q279.244-900.348 295-893l229 94q14 5.719 14 22.359Q538-760 523-754l-122 45v57l477 312q8 6 14.1 13.952 6.1 7.953 7.9 17.048l28 153q4 21-9.5 36T885-105h-28q-11.407 0-21.204-5-9.796-5-16.367-15.13L782-189H571v88q0 20.1-13.675 33.05Q543.649-55 523.079-55t-33.325-13.625Q477-82.25 477-102v-87zM229.175-702q-12.824 0-21.5-8.675-8.675-8.676-8.675-21.5Q199-745 207.675-753q8.676-8 21.5-8Q242-761 250-753t8 20.825q0 12.824-8 21.5Q242-702 229.175-702M397-282h399l-99-64H397q-42.091 0-77.545-16Q284-378 258-405q-21-21-33.5-48.355Q212-480.71 212-512q0-19.975 13.625-33.487Q239.25-559 258.611-559q18.833 0 30.611 11Q301-537 304-521q0 36 27.767 58.5T397-440h157L308-601v-133q0-32.175-22.907-55.088Q262.186-812 228.593-812T171.5-789.5Q148-767 148-734v204q0 103.667 72.917 175.833Q293.833-282 397-282" />
  </Svg>
);
