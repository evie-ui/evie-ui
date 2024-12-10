import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgSportsBaseballFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M142-221q-43-57-65-123.5T55-480q0-70 22-136.5T142-740q62 46 96 114.5T272-480q0 76-34 144.5T142-221M480-55q-72 0-143-23.5T210-151q76-60 117.5-146.5T369-480q0-97-41.5-183T210-810q56-48 127-72t143-24q72 0 143.5 24T750-810q-75 61-117 147t-42 183q0 96 42 182.5T750-151q-55 49-126.5 72.5T480-55m338-166q-62-46-95.5-114.5T689-480q0-77 33.5-145.5T818-740q43 57 65.5 123.5T906-480q0 69-22.5 135.5T818-221" />
  </Svg>
);
