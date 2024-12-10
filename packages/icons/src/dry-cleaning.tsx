import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgDryCleaning = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M375-55q-40.212 0-67.606-27.1Q280-109.2 280-149v-152h-75q-44.75 0-77.375-31.5T95-410q0-35.422 18.466-64.777Q131.931-504.132 165-518l269-115v-33.667Q397-676 375-707t-22-71q0-53.333 37.25-90.667Q427.5-906 480.618-906q38.408 0 70.857 21.333Q583.924-863.333 600-828q3 5 3 17 0 18.125-11.945 29.562Q579.111-770 561.426-770q-12.648 0-22.685-6.82Q528.704-783.64 524-795q-6.074-13.167-18.139-20.083Q493.796-822 480.622-822q-18.664 0-32.643 12.857Q434-796.285 434-777.518q0 20.468 14.513 34.993Q463.025-728 482.5-728q17.45 0 29.475 11.5Q524-705 524-688v51l272 119q31.759 13.934 50.879 43.391Q866-445.153 866-409.61q0 45.527-32.917 77.068Q800.167-301 755-301h-74v152q0 39.8-27.394 66.9Q626.213-55 586-55zM205-385h99q7-20 26.379-32.5Q349.759-430 375-430h211q25.241 0 44.621 12.5Q650-405 657-385h98q11 0 20-6.565t9-18.101q0-9.334-4.5-16.612Q775-433.556 766-438L483-565 194.091-438.033Q187-434 182-426.5q-5 7.5-5 15.834 0 11.536 8.5 18.601Q194-385 205-385m157 247h236v-210H362zm0-210h236z" />
  </Svg>
);
