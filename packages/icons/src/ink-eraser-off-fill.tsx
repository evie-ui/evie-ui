import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgInkEraserOffFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M842-30 613-258 496-135H151l-83-85q-28-28-27-65.5T68-350l219-234L30-842l50-50L892-80zM711-361 385-688l134-145q26-27 64.5-26.5T650-832l189 199q28 28 29 66.5T841-501z" />
  </Svg>
);
