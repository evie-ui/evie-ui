import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgCalculate = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M319-321v63q0 10.833 7.116 17.917 7.117 7.083 18 7.083 9.884 0 17.384-7.083Q369-247.167 369-258v-63h63q9.833 0 17.417-7.116 7.583-7.117 7.583-18 0-9.884-7.583-17.384Q441.833-371 432-371h-63v-63q0-9.833-7.616-17.417-7.617-7.583-18-7.583Q333-459 326-451.417q-7 7.584-7 17.417v63h-63q-10.833 0-17.917 7.616-7.083 7.617-7.083 18Q231-335 238.083-328q7.084 7 17.917 7zm231 53h152q9.4 0 16.7-7.116 7.3-7.117 7.3-18Q726-303 719-310t-17-7H549q-10.4 0-17.2 7-6.8 7-6.8 17.384 0 10.383 7.083 17.5Q539.167-268 550-268m0-107h151q9.833 0 17.417-7.116 7.583-7.117 7.583-18 0-9.884-7.583-17.384Q710.833-425 701-425H550q-10.833 0-17.917 7.616-7.083 7.617-7.083 18Q525-389 532.083-382q7.084 7 17.917 7m73-215 43 43q6.636 8 17.182 8 10.545 0 18.818-8 7-7 7-17.368 0-10.367-7-18.632l-43-43 43-43q7-6.636 7-17.182 0-10.545-7-18.818-8.273-7-18.818-7-10.546 0-17.182 7l-43 43-43-43q-7.636-7-18.318-7Q551-712 544-705q-8 8.273-8 18.818 0 10.546 8 17.182l43 43-43 43q-8 7.714-8 18.5t8 17.5q6.636 8 17.182 8 10.545 0 18.818-8zm-352-15h146q9.833 0 17.417-7.116 7.583-7.117 7.583-18Q442-641 434.417-648q-7.584-7-17.417-7H271q-10.833 0-17.917 7.116-7.083 7.117-7.083 18Q246-619 253.083-612q7.084 7 17.917 7M189-95q-39.05 0-66.525-27.475Q95-149.95 95-189v-582q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95zm0-94h582v-582H189zm0-582v582z" />
  </Svg>
);
