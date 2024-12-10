import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTabUnselected = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M101.825-135Q82-135 68.5-148.675 55-162.351 55-182.175 55-202 68.675-215.5q13.676-13.5 33.5-13.5Q122-229 135.5-215.325q13.5 13.676 13.5 33.5Q149-162 135.325-148.5q-13.676 13.5-33.5 13.5m163.912 0Q246-135 232.5-148.675q-13.5-13.676-13.5-33.5Q219-202 232.675-215.5q13.676-13.5 33.413-13.5 19.737 0 33.824 13.675Q314-201.649 314-181.825 314-162 299.737-148.5q-14.263 13.5-34 13.5m165.088 0Q411-135 397.5-148.675q-13.5-13.676-13.5-33.5Q384-202 397.675-215.5q13.676-13.5 33.5-13.5Q451-229 464.5-215.325q13.5 13.676 13.5 33.5Q478-162 464.325-148.5q-13.676 13.5-33.5 13.5m163.912 0Q575-135 561.5-148.675q-13.5-13.676-13.5-33.5Q548-202 561.675-215.5q13.676-13.5 33.413-13.5 19.737 0 33.824 13.675Q643-201.649 643-181.825 643-162 628.737-148.5q-14.263 13.5-34 13.5M760-135q-19.75 0-33.375-13.675Q713-162.351 713-182.175 713-202 726.625-215.5 740.25-229 760-229h51v-56q0-19.75 13.675-33.375Q838.351-332 858.088-332q19.737 0 33.824 13.625Q906-304.75 906-285v79q0 29-21.021 50t-49.646 21zM101.825-299Q82-299 68.5-312.675 55-326.351 55-346.088q0-19.737 13.675-33.824Q82.351-394 102.175-394 122-394 135.5-379.737q13.5 14.263 13.5 34Q149-326 135.325-312.5q-13.676 13.5-33.5 13.5m755.912-103Q838-402 824.5-415.675 811-429.351 811-449.088q0-19.737 13.675-33.824Q838.351-497 858.088-497q19.737 0 33.824 14.263 14.088 14.263 14.088 34Q906-429 891.737-415.5q-14.263 13.5-34 13.5m-755.912-62Q82-464 68.5-477.675 55-491.351 55-511.175 55-531 68.675-544.5q13.676-13.5 33.5-13.5Q122-558 135.5-544.325q13.5 13.676 13.5 33.5Q149-491 135.325-477.5q-13.676 13.5-33.5 13.5M482-661v-117q0-19.625 13.625-33.812Q509.25-826 529-826h282q39.463 0 67.231 27.769Q906-770.463 906-731v117q0 19.75-14.188 33.375Q877.625-567 858-567H577q-40.213 0-67.606-27.1Q482-621.2 482-661m-380.175 33Q82-628 68.5-641.625 55-655.25 55-675v-80q0-28.763 21-49.881Q97-826 125.644-826H200q19.625 0 33.812 14.263 14.188 14.263 14.188 34Q248-758 233.812-744.5 219.625-731 200-731h-51v56q0 19.75-13.675 33.375Q121.649-628 101.825-628m263-103Q345-731 331.5-744.675 318-758.351 318-778.088q0-19.737 13.675-33.824Q345.351-826 365.175-826 385-826 398.5-811.737q13.5 14.263 13.5 34Q412-758 398.325-744.5q-13.676 13.5-33.5 13.5" />
  </Svg>
);
