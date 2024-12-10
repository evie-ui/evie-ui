import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgViewCarouselFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M93-274q-19.75 0-33.375-13.625T46-321v-318q0-19.75 13.625-33.375T93-686h74q19.75 0 33.375 13.625T214-639v318q0 19.75-13.625 33.375T167-274zm228 97q-19.75 0-33.375-13.625T274-224v-512q0-19.75 13.625-33.375T321-783h318q19.75 0 33.375 13.625T686-736v512q0 19.75-13.625 33.375T639-177zm472-97q-19.75 0-33.375-13.625T746-321v-318q0-19.75 13.625-33.375T793-686h74q19.75 0 33.875 13.625T915-639v318q0 19.75-14.125 33.375T867-274z" />
  </Svg>
);
