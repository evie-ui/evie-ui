import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDisplayExternalInputFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M758-173H619q-19.75 0-33.375-13.675Q572-200.351 572-220.175 572-240 585.625-253.5 599.25-267 619-267h139l-39-40q-12-13.5-12-31.25T719-368q15-15 35-16t34 13l118 118q14 15 14 33.5T906-187L788-69q-14 15-34 14t-35-17q-13-12.067-13-30.033Q706-120 719-133zM189-95q-39 0-66.5-27.5T95-189v-116q0-19.75 13.675-33.375Q122.351-352 142.175-352 162-352 175.5-338.375 189-324.75 189-305v116h116q19.75 0 33.375 13.675Q352-161.649 352-141.825 352-122 338.375-108.5 324.75-95 305-95zM95-655v-116q0-39 27.5-67t66.5-28h116q19.75 0 33.375 14.175 13.625 14.176 13.625 34Q352-798 338.375-784.5 324.75-771 305-771H189v116q0 19.75-13.675 33.375Q161.649-608 141.825-608 122-608 108.5-621.625 95-635.25 95-655m676 0v-116H655q-19.75 0-33.375-13.675Q608-798.351 608-818.175 608-838 621.625-852 635.25-866 655-866h116q39 0 67 28t28 67v116q0 19.75-14.175 33.375-14.176 13.625-34 13.625Q798-608 784.5-621.625 771-635.25 771-655" />
  </Svg>
);
