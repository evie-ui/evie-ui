import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgShutterSpeedAddFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M731-135h-77q-20 0-33.5-13.5T607-182q0-20 13.5-33.5T654-229h77v-77q0-20 13.5-34t33.5-14q20 0 34 14t14 34v77h82q20 0 33.5 13.5T955-182q0 20-13.5 33.5T908-135h-82v83q0 20-14 33.5T778-5q-20 0-33.5-13.5T731-52zM363-871q-15 0-25-10.5T328-907q0-15 10.5-25.5T364-943h232q15 0 25.5 10.5T632-907q0 15-10.5 25.5T596-871zm230 544-31-54q-2-4-6-4t-5 4L435-174q-3 5-.5 10.5t8.5 5.5q30 3 49.5 2.5T542-166v-11q-1-43 12.5-81t38.5-69m26-28q26-24 58-39.5t70-21.5l2-47q0-4-3-6.5t-6-2.5H590q-14 0-20.5 12t.5 24zM482-41q-80 0-150.5-30.5t-123-83.5q-52.5-53-83-123.5T95-430q0-79 30-148.5t82.5-121Q260-751 330-781t149-30q70 0 130 21t112 63l34-34q13-13 31-13t31 13q12 13 11 30.5T815-701l-35 34q46 55 66.5 122.5T862-404q-24-9-44-12t-40-2q2-10 2-19.5V-457q-11-116-96.5-194T480-729q-126 0-214 88.5T178-427q0 126 88 214.5T480-124q17 0 34-2.5t32-7.5q4 22 12.5 42T579-54q-23 7-47.5 10T482-41m31-467h205q8 0 12.5-6.5t.5-14.5q-20-50-56.5-87T589-676q-7-2-13 0t-10 8l-73 124q-7 13-1 24.5t21 11.5m-92 16 106-181q4-7 .5-14t-11.5-8q-55-7-106.5 5.5T314-642q-6 5-7.5 12t2.5 13l71 125q7 12 20.5 12t20.5-12m-56 116q14 0 20.5-11.5T385-411l-99-174q-4-7-12.5-7.5T260-587q-32 43-44 93t-6 102q1 7 6 11.5t12 4.5zm101 70q6-12-.5-23T446-340H246q-8 0-14 6t-2 14q19 51 58 89t88 57q6 2 12-.5t10-8.5z" />
  </Svg>
);
