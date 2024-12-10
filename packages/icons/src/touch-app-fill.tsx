import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTouchAppFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M422-55q-42.383 0-79.635-17.217Q305.113-89.435 280-122L86-371q-13-18-10.9-39.091Q77.2-431.182 94-445l7-6q21.895-17.276 49.947-19.638Q179-473 205-460l78 39v-333q0-17.625 12.763-30.312Q308.526-797 326.298-797q17.771 0 30.236 12.688Q369-771.625 369-754v220h284.857q71.06 0 121.601 50.25Q826-433.5 826-363v145q0 68-48 115.5T662.449-55zm35.814-578q-17.971 0-30.392-12.756Q415-658.512 415-676.238q0-6.262 6-21.762 7-12 11-26t4-29.478Q436-799 403.882-831q-32.117-32-78-32Q280-863 248-830.917 216-798.833 216-753q0 15 4 29t11 26q3 5 4.5 10.062 1.5 5.063 1.5 11.626 0 18.062-13.04 30.687T193.04-633q-13.04 0-23.54-6t-15.667-16.839Q142-679 135.5-703.221 129-727.442 129-753.6q0-81.34 57.58-138.87T325.855-950q81.695 0 139.42 57.489Q523-835.022 523-753q0 26.681-6.704 50.473Q509.593-678.736 498-656q-5 11-16.043 17-11.044 6-24.143 6" />
  </Svg>
);
