import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgToll = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M598.247-135q-143.754 0-245-100.5Q252-336 252-479.753q0-143.754 101.247-245Q454.493-826 598.247-826 742-826 842.5-724.753q100.5 101.246 100.5 245Q943-336 842.5-235.5T598.247-135M201-179q-83-30-133.5-114.676Q17-378.353 17-480.176 17-582 67.5-666.5 118-751 200-780q23-15 44.5-3t21.5 36q0 11-6.5 23T244-706q-63 27-98 89.801-35 62.8-35 136.199 0 73.399 35 136.199Q181-281 244-255q9 7 15.5 18.5T266-213q0 24.939-20.5 37.469Q225-163 201-179m396.824-50Q701-229 775-302.824q74-73.823 74-177Q849-583 775.177-657q-73.824-74-177.001-74Q495-731 421-657.177q-74 73.824-74 177.001Q347-377 420.824-303q73.823 74 177 74" />
  </Svg>
);
