import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCloseSmall = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-413 354-288q-14 14-32.5 14.5T288-288q-14-14-14-33t14-33l125-126-125-125q-14-14-14.5-32.5T288-671q14-14 33-14t33 14l126 125 125-125q13-14 32.5-14t33.5 14q14 14 14 33t-14 33L546-480l125 126q14 14 14 33t-14 33q-14 14-33 14t-33-14z" />
  </Svg>
);
