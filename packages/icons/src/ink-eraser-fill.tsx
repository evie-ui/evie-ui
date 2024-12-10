import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgInkEraserFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M719-229h203v94H624zm-568 94-83-85q-28-28-27-65.5T68-350l451-483q26-27 64.5-26.5T650-832l189 199q28 28 29 66.5T841-501L496-135z" />
  </Svg>
);
