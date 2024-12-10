import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgEnergy = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M360-69v-38q0-37 25-62t62-26v-282q-25-7-45-22t-32-38l-99 24q-37 9-69.5-9.5T156-577l201-48q8-42 39-70.5t73-33.5l30-106q11-37 43.5-58.5T611-904l-56 197q28 17 42.5 45.5T612-600q0 12-2.5 25t-8.5 24l77 81q25 28 26.5 66T682-337L540-486q-4 5-9.5 7t-11.5 2v282q37 1 63 26t26 62v38zm123-463q29 0 48.5-19.5T551-600q0-29-19.5-48.5T483-668q-29 0-48.5 19.5T415-600q0 29 19.5 48.5T483-532" />
  </Svg>
);
