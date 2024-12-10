import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHeartBrokenFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M405-99Q293-216 222-296.5t-111.5-139Q70-494 55-538t-15-88q0-101 68.5-172T277-869q50 0 98 20.5t90 58.5l-42 204q-3 12 5.5 21.5T450-555h68l-33 271q-1 8 6.5 9t9.5-6l75-282q3-11-5-21t-20-10h-72l66-245q28-15 62.5-22.5T683-869q100 0 169 71t69 172q0 45-15.5 88T848-436.5Q806-378 731.5-297T539-97q-14 14-31 20.5T472-70q-19 0-37-7.5T405-99" />
  </Svg>
);
