import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTenancy = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M140.765-109q-55.236 0-93-37.765Q10-184.529 10-239.765 10-295 47.833-333 85.667-371 141-371q9.269 0 17.135 1 7.865 1 15.818 4L339-591q-14-19-22-41.426-8-22.426-8-47.574 0-71.35 49.752-121.175t121-49.825Q551-851 601-801.175T651-680q0 24.79-7.392 47.32Q636.216-610.151 622-591l164.047 226q7.953-4 15.838-5 7.884-1 17.115-1 55.333 0 93.167 37.765 37.833 37.764 37.833 93Q950-185 912.235-147q-37.764 38-93 38Q764-109 726-146.833 688-184.667 688-240q0-19.889 5.5-36.944Q699-294 710-309L553-525q-5.861 3.333-12.536 5-6.675 1.667-13.464 2.943V-361q37 14 60.5 46.693T611-240q0 55.333-37.765 93.167-37.764 37.833-93 37.833Q425-109 387-146.833 349-184.667 349-240q0-41.61 23-74.805Q395-348 433-361v-156.057q-6.789-1.276-13.464-2.943-6.675-1.667-12.536-5L250-310q10 15 16.5 32.5T273-240q0 55.333-38.5 93.167Q196-109 140.765-109M145-191q20.125 0 34.562-14.438Q194-219.875 194-240t-14.438-34.562Q165.125-289 145-289t-34.562 14.438Q96-260.125 96-240t14.438 34.562Q124.875-191 145-191m335 0q20.125 0 34.562-14.438Q529-219.875 529-240t-14.438-34.562Q500.125-289 480-289t-34.562 14.438Q431-260.125 431-240t14.438 34.562Q459.875-191 480-191m338.509 0q20.616 0 35.053-14.438Q868-219.875 868-240t-14.438-34.562Q839.125-289 818.509-289t-34.563 14.438Q770-260.125 770-240t13.946 34.562Q797.893-191 818.509-191M480-592q36.4 0 62.2-25.8Q568-643.6 568-680q0-36.4-25.8-62.2Q516.4-768 480-768q-36.4 0-62.2 25.8Q392-716.4 392-680q0 36.4 25.8 62.2Q443.6-592 480-592" />
  </Svg>
);
