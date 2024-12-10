import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgRibCage = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M200-58q-49 0-84.5-35T80-178q0-16 12-27.5t28-11.5q17 0 28.5 11.5T160-178q0 17 12 29t28 12q10 0 25.5-8.5T260-168q19-13 39.5-32.5T341-244q40-46 69.5-102.5T440-458v-397q0-17 12-28.5t28-11.5q17 0 28.5 11.5T520-855v397q0 55 29.5 111.5T619-244q21 24 41.5 43.5T700-168q19 14 34.5 22.5T760-137q17 0 28.5-12t11.5-29q0-16 12-27.5t28-11.5q17 0 28.5 11.5T880-178q0 50-35 85t-85 35q-24 0-54-14t-63-39q-33-24-64.5-58T521-242q-18-22-25.5-29t-15.5-7q-8 0-15 6.5T440-242q-27 39-59 73t-64 58q-32 25-62.5 39T200-58m16-143-84-68q-14-11-21.5-25.5T103-327q0-18 6.5-33t20.5-26q9-8 19.5-7.5T168-384q8 10 7.5 21t-9.5 19q-4 2-6 6.5t-2 10.5q0 4 1.5 8t6.5 8l94 74q-15 14-21.5 20T216-201m105-108L192-415q-14-10-21.5-25.5T163-474q0-17 6.5-32.5T190-534q8-6 20-5.5t19 9.5q6 8 6 20t-9 18q-4 4-6 9t-2 10q0 5 1.5 8.5t6.5 7.5l122 98q-9 17-12.5 26T321-309m59-146L252-559q-14-11-21.5-27t-7.5-34q0-18 7.5-33.5T252-681q8-8 19.5-7t18.5 10q6 9 6 20.5t-9 18.5q-3 2-6 7.5t-3 12.5q0 2 9 17l93 75v32q0 13 1 19.5t-1 20.5m0-198-70-60q-14-10-20.5-25t-6.5-32q0-31 22-53t53-22q12 0 22 7.5t10 19.5q0 13-10 20.5t-22 7.5q-9 0-14.5 6.5T338-769q0 3 1 7t6 7l35 30zm200 198q-1-12-.5-18.5t.5-19.5v-32l94-77q4-3 9-17 0-7-3-12.5t-6-7.5q-10-8-10-19t6-20q7-9 19-10t21 7q14 12 21 27.5t7 33.5q0 18-8 33.5T709-560zm0-198v-72l36-30q2-2 4.5-6t2.5-8q0-9-6-15t-15-6q-12 0-22-7.5T570-818q0-12 10-19.5t22-7.5q31 0 53.5 22t22.5 53q0 17-7 32t-20 25zm59 343q-11-16-15-24.5T612-359l122-99q5-4 8-17 0-4-7-16-9-8-10.5-19t6.5-21q7-10 18.5-10.5T770-535q13 11 20.5 27t7.5 33q0 18-8 34t-21 26zm106 108q-17-10-23.5-15.5T701-237l94-74q3-3 8-16 0-5-2-10t-5-7q-10-8-11-19t7-21q8-9 18.5-9.5T831-386q13 11 20 26t7 33q0 18-7.5 32.5T830-269z" />
  </Svg>
);
