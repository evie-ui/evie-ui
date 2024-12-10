import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgThermostatCarbon = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-49q-18 0-34.976-7.304Q428.049-63.61 414-77L77-414q-13.391-14.049-20.696-31.024Q49-462 49-480t7.152-35.281Q63.304-532.561 77-546l337-337q14.049-14.609 31.024-21.304Q462-911 480-911t35.281 6.848Q532.561-897.304 546-883l337 337q14.304 13.439 21.152 30.719Q911-498 911-480t-6.696 34.976Q897.609-428.049 883-414L546-77q-13.439 13.696-30.719 20.848Q498-49 480-49m0-96 336-335-336-336-335 336zm0-335" />
  </Svg>
);
