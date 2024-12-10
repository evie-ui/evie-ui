import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgEvShadowMinusFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M618-188q-20 0-33.5-13.5T571-235q0-20 13.5-33.5T618-282h240q20 0 34 13.5t14 33.5q0 20-14 33.5T858-188zM480-55q-88 0-165.5-33T179-179q-58-58-91-135.5T55-480q0-88 33-165.5T179-781q58-58 135.5-91.5T480-906q88 0 165.5 33.5T781-781q58 58 91.5 135.5T906-480q0 15-1.5 30.5T901-420q-29-26-67-42.5T754-481l52-65q-4-20-11-39.5T779-623L421-265q16 21 34.5 38.5T496-196q5 39 22 73.5T561-63q-19 4-39.5 6T480-55M377-336l358-357q-12-15-25.5-26.5T682-743L351-413q4 21 10.5 40t15.5 37m-27-188 260-261q-11-5-22-9t-23-7q-88 32-146 106.5T350-524" />
  </Svg>
);
