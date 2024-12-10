import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgKeyboardCommandKeyFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M250.636-103Q190-103 146.5-146.278q-43.5-43.278-43.5-104.5T146.571-354.5Q190.143-397 250-397h53v-166h-53q-59.857 0-103.429-43.278Q103-649.556 103-710.778T146.278-814.5q43.278-42.5 104.5-42.5T354.5-813.95Q397-770.9 397-710v53h166v-53q0-60.9 43.278-103.95Q649.556-857 710.778-857T814.5-814.136q42.5 42.863 42.5 103.5Q857-650 813.95-606.5 770.9-563 710-563h-53v166h53q60.9 0 103.95 42.864Q857-311.273 857-250.636 857-190 814.136-146.5q-42.863 43.5-103.5 43.5Q650-103 606.5-146.571 563-190.143 563-250v-53H397v53q0 59.857-42.864 103.429Q311.273-103 250.636-103m.011-94Q273-197 288-212.458q15-15.459 15-37.542v-53h-53q-22.083 0-37.542 15.235-15.458 15.236-15.458 37Q197-229 212.647-213t38 16m460 0Q733-197 748-212.647t15-38Q763-273 747.833-288q-15.166-15-37.421-15H657v52.706q0 21.961 15.647 37.627 15.647 15.667 38 15.667M397-397h166v-166H397zM250-657h53v-53.412q0-22.255-15.235-37.421-15.236-15.167-37-15.167Q229-763 213-747.765q-16 15.236-16 37Q197-689 212.458-673q15.459 16 37.542 16m407 0h53.412q22.255 0 37.421-15.647 15.167-15.647 15.167-38T747.765-748q-15.236-15-37-15Q689-763 673-747.833q-16 15.166-16 37.421z" />
  </Svg>
);
