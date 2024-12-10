import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgAccountCircleOffFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-149q50 0 97-13.5t89-41.5L533-338q-15-2-29.5-3.5T475-343q-67 1-128 21t-120 54q53 56 112.5 87.5T480-149m340 98-87-87q-55 41-119.5 62T480-55q-88 0-165.5-33T179-179q-58-58-91-135.5T55-480q0-69 21-132.5T138-731l-91-92q-10-10-10-25t11-26q11-11 25.5-11T99-874l772 773q10 11 10.5 25T871-51q-11 11-25.5 11T820-51m11-190L582-490q19-18 30-43t11-53q0-60-41.5-101.5T480-729q-28 0-53 11t-43 31L241-831q53-36 113.5-55.5T480-906q88 0 165.5 33.5T781-781q58 58 91.5 135.5T906-480q0 65-19.5 125.5T831-241" />
  </Svg>
);