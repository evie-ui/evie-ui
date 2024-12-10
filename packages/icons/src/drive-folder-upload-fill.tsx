import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDriveFolderUploadFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-135q-39 0-66.5-28T55-229v-502q0-38 27.5-66.5T149-826h222q18 0 36 8t31 21l43 43h330q38 0 66.5 28t28.5 66v431q0 38-28.5 66T811-135zm331-141q17 0 28.5-11t11.5-28v-140l26 26q11 11 25.5 11t27.5-14q12-11 12-27t-12-28l-85-85q-14-14-34-14t-34 14l-85 85q-12 12-12 28t14 30q12 11 26 11t25-11l26-26v140q0 17 11.5 28t28.5 11" />
  </Svg>
);
