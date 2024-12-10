import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgShieldQuestionFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M479.937-55Q329.105-92.81 232.052-227.409 135-362.007 135-522.674v-255.788L480-907l346 128.571V-523q0 160.79-97.616 295.49Q630.769-92.81 479.937-55m.08-237Q495-292 506-303.017t11-26Q517-344 505.983-355t-26-11Q465-366 454-354.983t-11 26Q443-314 454.017-303t26 11M482-406q7.742 0 14.871-5.5Q504-417 506-425q.911-6.731 2.733-12.981 1.823-6.25 6.267-11.019 4.656-7.882 11.953-15.922Q534.25-472.961 542-480q20-17 34-39.254 14-22.253 14-48.746 0-42-31.5-69.5T483-665q-30.256 0-56.628 14T383-612q-6 8-2.357 17.778Q384.286-584.444 394-580q9.268 4 18.537-.2 9.268-4.2 16.463-12.8 9-12 23.311-19T483-619q22.6 0 38.8 15.01 16.2 15.009 16.2 38.101 0 18.889-10.618 32.743Q516.765-519.293 502-508q-9 8-17.033 17.382Q476.933-481.235 471-471q-6 10-10 20.101-4 10.101-4 20.201 0 10.279 7.083 17.488Q471.167-406 482-406" />
  </Svg>
);
