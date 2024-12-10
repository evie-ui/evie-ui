import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgShutterSpeedAdd = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M731-135h-77q-20 0-33.5-13.5T607-182q0-20 13.5-33.5T654-229h77v-77q0-20 13.5-34t33.5-14q20 0 34 14t14 34v77h82q20 0 33.5 13.5T955-182q0 20-13.5 33.5T908-135h-82v83q0 20-14 33.5T778-5q-20 0-33.5-13.5T731-52zM569-436l49 82q-6 7-12.5 13.5T593-327l-32-53q-2-3-5.5-3t-4.5 3L423-155q-8 14 7 15t20 2q24 2 47.5 0t47.5-9q3 27 11.5 50T579-53q-23 7-47.5 9.5T482-41q-80 0-150.5-30.5t-123-83.5q-52.5-53-83-123.5T95-430q0-79 30-148.5t82.5-121Q260-751 330-781t149-30q70 0 130 21t112 63l34-34q13-13 30-13t30 14q12 12 12 29.5T815-701l-35 34q45 55 66.5 122.5T862-403q-23-10-46.5-12.5T767-417v-50q-6-2-12-3.5t-12-1.5H589q-14 0-20.5 12t.5 24M363-871q-15 0-25-10.5T328-907q0-15 10.5-25.5T364-943h232q15 0 25.5 10.5T632-907q0 15-10.5 25.5T596-871zm150 363h223q8 0 12-6t2-15q-23-53-58.5-93.5T600-690q-8-4-15.5-1T573-681l-80 137q-7 13-1 24.5t21 11.5m-91 16 113-194q4-8 .5-16.5T523-712q-62-9-117.5 4.5T304-657q-5 5-5.5 11.5T301-634l80 142q7 12 20.5 12t20.5-12m-56 116q14 0 20.5-11.5T386-411L278-600q-4-8-13.5-8.5T250-602q-36 46-50 98.5T192-394q1 9 6 13.5t13 4.5zm100 70q6-12-.5-23T446-340H227q-8 0-13 7t-1 16q23 54 59 92.5t90 64.5q8 3 15.5 1t11.5-9z" />
  </Svg>
);
