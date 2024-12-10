import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLiquor = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M175-142v-128q-33-11-56.5-42.28T95-389v-304q0-20 13.5-33.5T142-740h149q20 0 33.5 13.5T338-693v304q0 42.44-23.5 75.22T259-270v128h36q17.875 0 30.438 12.789 12.562 12.79 12.562 31Q338-80 325.438-67.5 312.875-55 295-55H138q-17.875 0-30.438-12.588Q95-80.175 95-98.088 95-116 107.562-129q12.563-13 30.438-13zm7-365h69v-146h-69zm35.211 161Q231-346 241-357.15q10-11.15 10-24.85v-65h-69v65q0 13.7 10.711 24.85 10.71 11.15 24.5 11.15M530-55q-34.112 0-58.556-24.15Q447-103.3 447-137v-403.936Q447-567 458-584t32-31l28-18q23-12 35.5-29.5T566-705v-143q0-25.025 17-41.513Q600-906 627-906h96q26.6 0 43.8 16.487Q784-873.025 784-848v142.543Q784-682 796.5-663.5T832-633l30 18q21 13 32.5 30.5t11.5 43.564V-137q0 33.7-24.444 57.85T823-55zm123-720h44v-44h-44zM534-467h285v-79l-37-22q-35-21-60-53.306T697-695v-20h-44v20q0 41-21.5 71T576-572.5L534-546zm0 325h285v-103H534zm0-163h285v-102H534zm0 0v-102z" />
  </Svg>
);
