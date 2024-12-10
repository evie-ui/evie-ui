import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgSwapDrivingAppsFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M643-777H346q-15.55 0-25.775-9.8Q310-796.6 310-812.5q0-15.9 9.8-26.2Q329.6-849 346-849h299l-40-38q-9-9-9-22t9-22q9-9 22-9t22 9l85 85q14 14.455 14 33.727Q748-793 734-779l-85 84q-9 10-22 9.979-13-.021-22-9.479-9-9.5-9-22t9-22.5zM290-249q22 0 38.5-16t16.5-39q0-22-16.5-38.5t-39-16.5q-22.5 0-38.5 16.5t-16 39q0 22.5 16 38.5t39 16m381 0q22 0 38.5-16t16.5-39q0-22-16.5-38.5t-39-16.5q-22.5 0-38.5 16.5t-16 39q0 22.5 16 38.5t39 16M218-627l38 38q8.893 9 8.877 22-.016 13-8.877 22-10 9-22.633 9-12.634 0-21.367-9l-85-84q-14-14.727-14-34.364Q113-683 127-697l84.629-82.753Q221-789 233.5-789q12.5 0 22.5 9 9 9 9 22t-9 22l-38 38h484q30.053 0 55.211 17.889Q782.368-662.222 792-633l68 208q2 7 4 13.833 2 6.834 2 15.167v326q0 22.417-15.515 37.708Q834.971-17 812.235-17 790-17 774-33.042 758-49.083 758-71v-36H202v37q0 22.417-15.292 37.708Q171.417-17 149-17q-23 0-38.5-15.292Q95-47.583 95-70v-302q0-39 26.975-66.5T189-466h555l-51-161z" />
  </Svg>
);