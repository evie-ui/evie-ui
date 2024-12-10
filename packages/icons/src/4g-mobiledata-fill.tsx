import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const Svg4GMobiledataFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M314.035-269q-17.41 0-29.223-11.788Q273-292.575 273-310v-77H139q-17.75 0-29.875-11.438Q97-409.875 97-428v-200q0-17.425 12.175-29.213 12.176-11.787 30-11.787Q157-669 168.5-657.213 180-645.425 180-628v158h93v-158q0-17.425 11.777-29.213Q296.555-669 313.965-669q17.41 0 29.223 11.787Q355-645.425 355-628v158h33q18.125 0 29.562 11.488Q429-447.024 429-428.825 429-411 417.562-399 406.125-387 388-387h-33v77q0 17.425-11.777 29.212Q331.445-269 314.035-269M573-269q-33.537 0-58.269-24.125Q490-317.25 490-351v-235q0-33.537 24.731-58.269Q539.463-669 573-669h249q18.125 0 29.562 11.979Q863-645.042 863-627.333 863-610 851.562-598 840.125-586 822-586H573v235h208v-79h-56q-15.3 0-25.65-10.37Q689-450.74 689-466.07q0-14.905 10.35-25.417Q709.7-502 725-502h97q18.125 0 29.562 12.075Q863-477.85 863-460v109q0 33.75-23.756 57.875Q815.487-269 781-269z" />
  </Svg>
);
