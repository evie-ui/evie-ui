import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgEditDocument = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M542-102v-78q0-8.565 3.5-16.568Q549-204.571 556-212l211.612-210.773q11.284-11.297 25.075-16.762Q806.478-445 820.132-445q14.894 0 28.43 6 13.535 6 25.438 17l37 37q10.882 11.151 15.941 24.78Q932-346.591 932-332.962q0 14.962-5.529 28.743-5.53 13.781-16.554 25.343L700-68q-7.236 7-15.249 10-8.013 3-17.751 3h-78q-19.75 0-33.375-13.625T542-102m315-231-37-37zM617-130h38l118-118.767-18-19.12L736-286 617-168.239zM214-55q-39.05 0-66.525-27.475Q120-109.95 120-149v-662q0-39.463 27.475-67.231Q174.95-906 214-906h302q19.556 0 37.278 8Q571-890 584-877l198 198q13 13 21 30.722T811-611v65h-95v-45H543q-19.75 0-33.375-13.625T496-638v-173H214v662h268v94zm0-94v-662zm541-119-19-18 37 37z" />
  </Svg>
);