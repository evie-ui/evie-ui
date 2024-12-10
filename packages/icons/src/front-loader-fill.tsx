import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgFrontLoaderFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M134-141q-51.118 0-87.559-35.875Q10-212.75 10-264v-294q0-31.1 21.45-52.55Q52.9-632 84-632h225v-153q0-19.75 13.625-33.375T356-832h168q56.667 0 96.333 39.958Q660-752.083 660-694l1 149h60v-25q0-17.491 7.125-34.702Q735.25-621.912 748-635l34-35q17-17 42-13t35 27l107 225q11 24-3.5 45.5T921-364H795q-31.1 0-52.55-21.45Q721-406.9 721-438v-20h-60v101.91q19 18.493 30 41.935 11 23.443 11 50.155 0 51.25-35.875 87.125T579-141q-39 0-69.684-21.5Q478.632-184 465-219H246.925Q233-184 202.62-162.5T134-141m-.243-81q18.864 0 30.553-12.075Q176-246.15 176-264q0-19-12.075-31T134-307q-19 0-31 12t-12 30.5q0 18.5 12.511 30.5 12.51 12 30.246 12m444.743 0q18.5 0 30.5-12.075T621-264q0-19-12.075-31T579-307q-19 0-31 12t-12 30.5q0 18.5 12 30.5t30.5 12M868-445l-56-118q-4 4-7 8.5t-3 10.5v99zM396-545h178v-149q0-21.675-14.375-36.338Q545.25-745 524-745H396z" />
  </Svg>
);
