import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTransferWithinAStation = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m96-78 103-532-79 36v95q0 18.375-11.312 29.688Q97.375-438 79-438q-18 0-30-11.312Q37-460.625 37-479v-120q0-13.667 7.833-26.236Q52.667-637.806 67-644l173-71q31-13 66.006-6.261Q341.013-714.522 359-685l44 66q21.767 33.667 55.383 59.833Q492-533 536-525q16.256 4.667 28.128 16.678Q576-496.31 576-479.155 576-461 562.5-449.5T532-441q-48.73-6.271-92.865-31.136Q395-497 359-545l-33 126 72 68q7 7 11.5 16.565Q414-324.87 414-316v246q0 17.675-11.95 29.337Q390.1-29 372-29q-17.675 0-29.337-11.663Q331-52.325 331-70v-205l-87-81-66 295q-4 14-14.934 23T137-29q-20 0-32.5-14.5T96-78m263.46-687q-35.54 0-60-25.16T275-850.46q0-35.54 24.46-60.04t60-24.5q35.54 0 60.04 24.619Q444-885.763 444-850q0 35.35-24.7 60.175Q394.6-765 359.46-765M808-102H621q-13.167 0-21.583-8.674Q591-119.347 591-132.907q0-13.126 8.7-21.61Q608.4-163 622-163h186l-21-21q-9-9.455-8.5-21.227Q779-217 788.143-226t21.5-9Q822-235 831-226l60 60q14 14.455 14 33.727Q905-113 891-99l-59.786 60.15q-9.785 9.85-21.5 8.85Q798-31 789-40q-9-9-9-21.436 0-12.437 9.25-22.639zM705-316l19.75 19.75q8.25 9.705 8.25 20.977Q733-264 725-255q-9.357 10-21.273 10-11.915 0-21.727-10l-60-58q-14-14.455-14-33.727Q608-366 622-380l60-60q9-9 21.5-8.5t21.5 9.643q8 9.87 8 21.363 0 11.494-8.25 20.744L705-378h186q13.6 0 22.3 9.267 8.7 9.266 8.7 22.233t-8.7 21.733Q904.6-316 891-316z" />
  </Svg>
);
