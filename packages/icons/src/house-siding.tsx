import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHouseSiding = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-196v-273h-77q-16.5 0-22.25-15T96-510l353-317q13.186-11 31.093-11T511-827l354 317q11 11 5.25 26T849-469h-78v273q0 19.75-15.675 33.375Q739.649-149 707.825-149 694-149 685.5-157.625T677-180v-30H283v30q0 13.75-10.675 22.375-10.676 8.625-36.5 8.625Q216-149 202.5-162.625 189-176.25 189-196m188-440h207l-104-92zm-94 166h394v-68l-4-4H287l-4 4zm0 166h394v-72H283z" />
  </Svg>
);
