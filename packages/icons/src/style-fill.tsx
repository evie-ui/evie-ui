import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgStyleFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m127-136-23-7q-32.596-14-44.298-48Q48-225 67-258l60-136zm186 78q-34 0-58-24t-24-58v-207l92 262q1 8 5 14t11 13zm221-9q-32 12-64.5-4.5T424-122L233-641q-14-34 2-65t51-45l318-115q33-11 65 5t46 50l191 514q9 35-5.5 68T851-183zm-73-497q16.3 0 29.15-12.45Q503-588.9 503-606q0-16.3-12.991-29.15-12.991-12.85-29.5-12.85T431.5-635.009q-12.5 12.991-12.5 29.5t12.45 29.009Q443.9-564 461-564" />
  </Svg>
);
