import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDataLossPrevention = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M430.584-580Q462-580 484-602.084q22-22.084 22-54.5Q506-688 483.911-709.5 461.823-731 430.407-731q-32.416 0-54.411 21.589Q354-687.823 354-656.407q0 32.416 22.084 54.411Q398.168-580 430.584-580m-.084 171q41.5 0 78.208-16.877Q545.417-442.753 575-478q-36-21-72-31.5T430-520q-37 0-73 10.5T285-478q31 35 67.5 52t78 17m-.437 177Q289-232 190.5-330.5T92-570q0-141 98.5-240T430-909q141 0 240 99t99 240.063Q769-516 749.5-462.5T700-366l179 179q15 15 15 33.5T879-121q-14 15-33 15t-33-15L633-300q-42 31-95 49.5T430.063-232m.908-94q100.97 0 172-71.5Q674-469 674-570.971q0-100.97-70.946-172Q532.108-814 430.471-814 329-814 257.5-743.054T186-570.471Q186-469 257.5-397.5T430.971-326M430-570" />
  </Svg>
);
