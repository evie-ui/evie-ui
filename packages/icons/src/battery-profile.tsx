import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBatteryProfile = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M297-55q-20.75 0-34.375-13.625T249-102v-692q0-19.75 13.625-33.875T297-842h86v-16q0-19.75 13.625-33.875T430-906h100q19.75 0 33.375 14.125T577-858v16h87q19.75 0 33.375 14.125T711-794v298q-25-1-48.415 2-23.416 3-46.585 11v-264H344v598h109q6 26 17.783 50.088Q482.565-74.825 500-55zm385.625 35Q674-20 667-25t-7.909-14.627L655-71q-17-5-36.5-15.5T588-109l-28 12.118Q552-94 543.5-96t-12.875-9.755l-21.25-35.49Q504-148 506-156.5t9-14.5l25-20q-6-18-5.5-37t5.5-38l-25-19q-7-6-9-14.5t3.375-16.368l21.25-35.264Q535-358 543.5-360.5t16.5.382L587-348q12-10 31.5-21t36.5-16l4.091-32.235Q660-426 667-431.5t15.625-5.5h36.75Q728-437 735-431.5t7.909 14.265L747-385q17 5 36 16.5t31 22.5l27-13.118q8-2.882 16.5-.382t13.875 9.368l21.25 37.264Q897-306 895.5-297.5T887-283l-25 20q6 18 5.5 36.5T862-190l25 20q7 6 9 14.5t-3.375 15.255l-21.25 35.49Q866-98 857.5-95.5 849-93 841.1-96L814-109q-12 12-31 22.5T747-71l-4.091 31.373Q742-30 735-25t-15.625 5zM700-132q41 0 69-27.5t28-68.5q0-41-28-68.5T700-324q-41 0-68.5 27.5T604-228q0 41 27.5 68.5T700-132" />
  </Svg>
);
