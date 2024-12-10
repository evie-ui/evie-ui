import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgRollerSkatingFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M243-319q-38.75 0-66.375-27.625T149-413v-425q0-38.75 27.625-66.375T243-932h162q40.212 0 67.606 27.625Q500-876.75 500-838v61H371q-6 0-10.5 4.5T356-762q0 6 4.5 10.5T371-747h129v14q0 7.75 1 15.5t4 14.5H371q-6 0-10.5 4.5T356-688q0 6 4.5 10.5T371-673h158q18 19 41.623 31.3Q594.246-629.4 620-622l76 22q54 17 87.5 61.335Q817-494.331 817-438v25q-25 24.75-41.125 59.375T723-319zM166.882-6Q116-6 81-40.882q-35-34.883-35-85.765t34.882-86.618Q115.765-249 166.647-249t86.618 35.618Q289-177.765 289-126.882 289-76 253.382-41q-35.617 35-86.5 35m626 0Q742-6 706.5-40.882 671-75.765 671-126.647t35.618-86.618Q742.235-249 793.118-249 844-249 879.5-213.382q35.5 35.617 35.5 86.5Q915-76 879.382-41q-35.617 35-86.5 35M480.118-6Q429-6 394-40.882q-35-34.883-35-85.765t34.882-86.618q34.883-35.735 86-35.735Q531-249 566-213.382q35 35.617 35 86.5Q601-76 566.118-41q-34.883 35-86 35" />
  </Svg>
);
