import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgCameraIndoor = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M229-95q-39.8 0-66.9-27.1Q135-149.2 135-189v-377q0-22.036 9.547-41.752Q154.094-627.469 172-641l251-189q24.68-19 56.84-19Q512-849 537-830l251 189q18.375 13.531 28.188 33.248Q826-588.036 826-566v377q0 39.8-27.394 66.9Q771.213-95 731-95zm0-94h502v-381L480-752 229-569.667zm121-85h178q14.45 0 24.225-9.775Q562-293.55 562-308v-54l65 33q4.931 3 10.966-.157Q644-332.314 644-339v-113q0-6.686-6.034-9.843Q631.931-465 627-462l-65 33v-54q0-14.45-9.775-24.225Q542.45-517 528-517H350q-14.025 0-23.513 9.775Q317-497.45 317-483v175q0 14.45 9.487 24.225Q335.975-274 350-274" />
  </Svg>
);
