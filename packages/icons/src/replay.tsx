import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgReplay = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-50q-80 0-150.5-30t-123-82.5Q154-215 124-285T94-436q0-20 13.5-33.5T141-483q20 0 33.5 13.5T188-436q0 122 85.5 206.5T480-145q121 0 206.5-85T772-436q0-122-83-206.5T484-727h-22l42 42q11 11 11 25t-11 25q-11 11-25.5 10.5T453-636L346-743q-15-14-15-33.5t15-33.5l108-109q10-9 25-9.5t25 9.5q10 10 9.5 25.5T503-869l-47 47h23q81 0 151.5 30t123 82.5Q806-657 836-587t30 151q0 80-30 150.5t-82.5 123Q701-110 630.5-80T480-50" />
  </Svg>
);
