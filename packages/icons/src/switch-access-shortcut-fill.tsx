import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSwitchAccessShortcutFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M522-737q-55 48-85.5 115T406-480q0 92 43.955 171.377Q493.909-229.246 572-180q17 11 24.5 29.5T594-115q-11 18-31.5 23T524-98q-99-62-155.5-163.5T312-480q0-94.882 38-181.441T459-811H351q-19.75 0-33.375-13.675Q304-838.351 304-858.175 304-878 317.625-892 331.25-906 351-906h219q19.75 0 33.375 14.125T617-858v218q0 19.75-13.675 33.375Q589.649-593 569.825-593 549-593 535.5-606.625 522-620.25 522-640z" />
  </Svg>
);
