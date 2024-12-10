import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFullHd = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M439-446h80v64q0 10.833 7.116 17.917 7.117 7.083 18 7.083 9.884 0 17.384-7.083Q569-371.167 569-382v-196q0-10.833-7.616-17.917-7.617-7.083-18-7.083Q533-603 526-595.917q-7 7.084-7 17.917v82h-80v-82q0-10.833-7.616-17.917-7.617-7.083-18-7.083Q403-603 396-595.917q-7 7.084-7 17.917v196q0 10.833 7.116 17.917 7.117 7.083 17.5 7.083 10.384 0 17.884-7.083Q439-371.167 439-382zm186 89h84q29 0 50-21t21-50v-105q0-29.167-21-49.583Q738-603 709-603h-84q-10.833 0-17.917 7.083Q600-588.833 600-578v196q0 10.833 7.083 17.917Q614.167-357 625-357m25-50v-146h80v146zm-419-39h75q10.833 0 17.917-7.116 7.083-7.117 7.083-18Q331-482 323.917-489q-7.084-7-17.917-7h-75v-57h95q10.833 0 17.917-7.116 7.083-7.117 7.083-18Q351-589 343.917-596q-7.084-7-17.917-7H206q-10.833 0-17.917 7.083Q181-588.833 181-578v196q0 10.833 7.116 17.917 7.117 7.083 18 7.083Q217-357 224-364.083q7-7.084 7-17.917zM111-135q-39.05 0-66.525-27.475Q17-189.95 17-229v-502q0-39.463 27.475-67.231Q71.95-826 111-826h738q38.75 0 66.375 27.769Q943-770.463 943-731v502q0 39.05-27.625 66.525Q887.75-135 849-135zm0-94h738v-502H111zm0 0v-502z" />
  </Svg>
);
