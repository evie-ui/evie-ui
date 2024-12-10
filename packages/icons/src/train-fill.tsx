import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTrainFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M135-351v-369q0-51.793 23-87.397Q181-843 225-864.5T333.5-896Q398-906 480-906q86 0 150.5 9.5t108 31Q782-844 804-808.397q22 35.604 22 88.397v369q0 73-49 126t-119 57l26 26q19 19 8.5 43.5T655.258-74Q647-74 640-77t-12-9l-81-80H413l-80 80q-6 6-13.125 9T305-74q-27 0-37.5-24.5T276-142l26-26q-70-4-118.5-57T135-351m94-185h225v-155H229zm285 0h217v-155H514zM340-311q22 0 38.5-16t16.5-39q0-22-16.5-38.5T340-421q-23 0-39 16.5T285-366q0 23 16 39t39 16m281 0q22 0 38.5-16t16.5-39q0-22-16.5-38.5T621-421q-23 0-39 16.5T566-366q0 23 16 39t39 16" />
  </Svg>
);
