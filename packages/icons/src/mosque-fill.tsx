import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgMosqueFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M279-654q-14 0-30-16t-16-29q0-42 19.5-78.5T306-836l122-82q24-16 52-16t52 16l122 82q34 22 53.5 58.5T727-699q0 13-15.5 29T682-654zM23-180v-451Q5-645-6-663t-11-40q0-24 26-60t61-70q35 34 61 70t26 60q0 22-11 40t-29 32v168h76v-90q0-29 18.5-48.5T253-624h454q23 3 41.5 22.5T767-553v90h76v-168q-18-14-29-32t-11-40q0-24 26-60t61-70q35 34 61 70t26 60q0 22-11 40t-29 32v451q0 40-27.5 67T843-86H628q-21 0-34.5-13.5T580-133v-130q0-39-30-69.5T480-363q-40 0-70 30.5T380-263v130q0 20-13.5 33.5T333-86H117q-39 0-66.5-27T23-180" />
  </Svg>
);