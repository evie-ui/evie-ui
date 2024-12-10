import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgEvShadowFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-97q-79 0-149-30t-122-82q-52-52-82-122T97-480q0-79 30-149t82-122q52-52 122-82t149-30q79 0 149 30t122 82q52 52 82 122t30 149q0 79-30 149t-82 122q-52 52-122 82T480-97m56-107q86-10 148-72t72-148zm-74 0 306-305q-2-16-6-31.5t-9-30.5L425-244q9 11 17.5 21.5T462-204m-61-89 330-330q-7-12-15-23t-17-21L379-347q4 13 9 26.5t13 27.5m-32-117 293-294q-11-9-22.5-16T616-734L363-482q0 19 1.5 37t4.5 35m9-161 186-184q-16-6-33.5-9t-34.5-4q-47 27-77.5 78T378-571" />
  </Svg>
);