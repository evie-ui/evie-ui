import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgGMobiledataFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M354-280q-35 0-59-24t-24-59v-234q0-35 24-59t59-24h249q18.125 0 29.562 11.488Q644-657.024 644-638.825 644-621 632.562-609 621.125-597 603-597H354v234h212v-77H461q-15.3 0-25.65-9.975-10.35-9.976-10.35-25.7 0-15.725 9.925-26.025 9.925-10.3 25.724-10.3H607q18.125 0 29.562 12.075Q648-487.85 648-470v107q0 35-23.5 59T566-280z" />
  </Svg>
);
