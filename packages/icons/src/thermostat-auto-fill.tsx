import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgThermostatAutoFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m664-550-30 79q-4 11-12 17.5t-19 6.5q-19 0-29-14.5t-4-31.5l115-309q3-9 11-15.5t18-6.5h22q11 0 18.5 6.5T766-802l114 309q7 17-4 31.5T847-447q-12 0-21-7t-12-18l-29-78zm14-56h95l-40-126h-16zM273-96q-87 0-147-60T66-303q0-51 23.5-95.5T156-473v-275q0-49 34-83.5t83-34.5q49 0 83 34.5t34 83.5v275q43 30 66.5 74.5T480-303q0 87-60 147T273-96M161-303h225q0-43-21.5-76T308-426l-12-1v-321q0-10-7-16.5t-16-6.5q-10 0-16 6.5t-6 16.5v321l-11 1q-37 15-58 48t-21 75" />
  </Svg>
);
