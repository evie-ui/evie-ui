import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgCoffeeFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M429-250q-120 0-207-82.493T135-534v-248q0-35 24-59.5t60-24.5h537q62 0 106 43.369 44 43.368 44 105.5Q906-649 863.5-598T756-547h-26v13q-4 120-92 202t-209 82M229-642h407v-129H229zm501 0h23q27 0 42.5-23t15.5-52.059q0-23.059-17-38.5Q777-771 753-771h-23zM181-95q-20.35 0-33.175-13.5Q135-122 135-142.246q0-20.245 13.5-33Q162-188 182-188h566q19.35 0 32.675 13.5Q794-161 794-140.754q0 20.245-13.5 33Q767-95 747-95z" />
  </Svg>
);
