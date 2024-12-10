import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgGroceryFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M660-34q-109.667 0-184.833-74.735Q400-183.471 400-293.235 400-403 475.029-478q75.03-75 184.5-75Q769-553 843.5-477.765q74.5 75.236 74.5 185Q918-183 843.625-108.5 769.25-34 660-34m-.5-95q69.5 0 117-47.332t47.5-116.5Q824-362 776.619-410 729.237-458 660-458q-70 0-117.5 47.832t-47.5 117Q495-224 542.5-176.5t117 47.5M136-129q-39.05 0-66.525-27.769Q42-184.538 42-224v-325.974Q42-566 44-576.5t8-24.5l85-185h-19q-23.775 0-37.888-14.112Q66-814.225 66-838v-22q0-22.775 14.112-36.888Q94.225-911 118.256-911H414q22.775 0 36.888 14.112Q465-882.775 465-860v22q0 23.775-14.112 37.888Q436.775-786 414-786h-20l96 219q-18 9-40.5 26.5T415-507L289-786h-47L136-559.169V-224h212q2 24 10 49.5t20 45.5zm524.248-465Q619-594 591.5-621.979 564-649.958 564-690.69q0-40.733 27.5-68.021Q619-786 660-786v192q0-41 26.789-68.5Q713.577-690 754.31-690q40.732 0 68.211 27.5T850-594z" />
  </Svg>
);
