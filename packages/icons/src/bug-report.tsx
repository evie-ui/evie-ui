import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBugReport = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480.091-95q-73.46 0-136.776-36Q280-167 251-234h-79.618q-16.532 0-26.457-9.975-9.925-9.976-9.925-26.2 0-16.225 9.925-26.025Q154.85-306 171-306h55q-6.25-23-6.125-46.667Q220-376.333 220-400h-50q-16.15 0-26.075-9.975-9.925-9.976-9.925-26.2 0-16.225 9.925-26.025Q153.85-472 170-472h50q0-26 .375-51.5T228-574h-57q-16.15 0-26.075-9.975-9.925-9.976-9.925-26.2 0-16.225 9.925-26.025Q154.85-646 171-646h87q12-31 35.5-53.5T346-737l-52.771-50.776Q282-799 282.5-812.786q.5-13.785 10.921-24.357Q304.14-848 317.57-848q13.43 0 24.749 11.159L412-768q31.721-14 65.86-15Q512-784 545-770l71-71q9.843-11 24.394-11 14.551 0 24.406 10.421Q675-830.86 675-817.063q0 13.796-10 24.063l-50 50q32 17 55.539 43.619T709.023-640H794q12.75 0 22.875 9.888T827-606.825q0 13.4-10.125 23.112Q806.75-574 794-574h-62q8.25 24.667 8.125 50.5T740-472h51q15.3 0 25.65 9.975 10.35 9.976 10.35 26.2 0 16.225-10.35 26.025Q806.3-400 791-400h-51v47.333q0 23.334-6 46.667h57q15.3 0 25.65 9.975 10.35 9.976 10.35 26.2 0 16.225-10.35 26.025Q806.3-234 791-234h-80q-30 67-93.355 103-63.354 36-137.554 36m.068-94Q552-189 598.5-239.206 645-289.413 645-361v-150q0-72.412-46.659-123.206Q551.681-685 479.841-685 408-685 361.5-634.206T315-511v150q0 71.587 46.659 121.794Q408.319-189 480.159-189M436-314h88q15.3 0 25.65-9.975 10.35-9.976 10.35-26.2 0-16.225-9.925-26.025Q540.15-386 524-386h-88q-15.3 0-25.65 9.975-10.35 9.976-10.35 26.2 0 16.225 9.925 26.025Q419.85-314 436-314m0-173h88q15.3 0 25.65-9.975 10.35-9.976 10.35-26.2 0-16.225-9.925-26.025Q540.15-559 524-559h-88q-15.3 0-25.65 9.975-10.35 9.976-10.35 26.2 0 16.225 9.925 26.025Q419.85-487 436-487m44 50h.5zh.5zh.5zh.5z" />
  </Svg>
);
