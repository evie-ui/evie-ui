import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTibiaAltFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M373.924-80q-14.959-43-21.942-85-6.982-42-9.482-80.5Q340-284 342-317t4-57.657v.021-.021q-23.458-6.106-52.052-14.833-28.594-8.726-59.771-22.118Q203-425 170-443.5q-33-18.5-64-43.429L371-858l257 118q69.546 32 110.773 96.137Q780-579.726 780-503v423zm164.119-119q9.715 0 18.351-4.891 8.635-4.892 13.523-12.979 5.866 8.087 14.474 12.979Q593-199 603.047-199q17.099 0 28.026-11.333Q642-221.667 642-239.833q0-16.467-11.213-27.317Q619.575-278 603-278h-5v-172h5q16.75 0 27.875-11.971T642-490.833Q642-507 630.835-518.5 619.671-530 603.167-530q-9.834 0-18.723 4.346-8.888 4.346-14.464 12.654-4.647-8.308-13.393-12.654Q547.84-530 538.061-530q-17.551 0-28.806 11.757Q498-506.487 498-489.868 498-474 509.5-462q11.5 12 28.5 12h5v172h-5q-17 0-28.5 11.107-11.5 11.106-11.5 27.525Q498-222 509.25-210.5t28.793 11.5" />
  </Svg>
);
