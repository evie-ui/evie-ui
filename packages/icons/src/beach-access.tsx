import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBeachAccess = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M770-132 530-372l70-72 240 241q15 15 15 35t-15 35q-15 15-35 15.5T770-132m-595-67q-46-62-68.5-131T84-469q0-83 30.5-160T206-767q61-61 137.5-90.5T502-887q70 0 139.5 22T773-798q18 13 19.5 36T777-722L250-195q-17 17-39 15.5T175-199m44-100 67-66q-16-22-31-45.5T228-460q-12-26-20-54.5T198-573q-25 70-18 141t39 133m114-112 229-230q-43-32-87-51t-83-26q-39-7-71-1.5T271-696q-18 19-22.5 49.5t3.5 69q8 38.5 28.5 81T333-411m342-343q-62-37-133.5-42T399-775q29 3 56.5 11t53.5 19.5q26 11.5 50.5 26.5t47.5 31z" />
  </Svg>
);
