import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLanguageFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-55q-89 0-166.5-33t-135-91Q121-237 88-315T55-482q0-89 33-166.5T178.5-783q57.5-57 135-90T480-906q89 0 166.5 33t135 90q57.5 57 91 134.5T906-482q0 89-33.5 167t-91 136q-57.5 58-135 91T480-55m-1-91q32-35 55-80.5T573-336H388q13 60 36 107t55 83m-82-12q-26-36-42.5-80T326-336H180q36 70 85 109.5T397-158m165-1q70-22 126.5-67.5T779-336H635q-13 53-30 97t-43 80M161-393h154q-3-27-3.5-48t-.5-41q0-25 1-43.5t4-42.5H161q-7 24-9.5 42t-2.5 44q0 25 2.5 45t9.5 44m216 0h207q3-31 3.5-50t.5-39q0-20-.5-37.5T584-568H377q-4 31-5 48.5t-1 37.5q0 20 1 39t5 50m267 0h154q6-24 9-44t3-45q0-26-3-44t-9-42H645q1 36 2 53t1 33q0 21-1.5 40t-2.5 49m-10-233h145q-32-67-88.5-112.5T561-802q26 36 43 78.5t30 97.5m-246 0h186q-10-51-36-100.5T479-812q-29 26-50.5 69T388-626m-208 0h147q11-52 26.5-94t42.5-81q-74 18-128.5 62T180-626" />
  </Svg>
);
