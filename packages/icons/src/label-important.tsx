import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgLabelImportant = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M290-480 187-640q-31-48-4.032-97T267-786h320.904q29.672 0 55.051 14.441Q668.333-757.118 686-733l141 198q18 23.718 18 54.359Q845-450 827-425L685-225q-15.783 21.588-39.8 35.794Q621.182-175 592.904-175H267q-57.064 0-84.032-48.5Q156-272 187-320zm114 0L268-269h332l150-211-150-211H268zm0 0L268-691zL268-269z" />
  </Svg>
);
