import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgTextRotationAngleupFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M775-489 408-123q-13 13-29.5 13T350-124q-13-13-12.5-29.5T350-182l367-365h-35q-18 0-29.5-12T641-589q0-18 12-29.5t30-11.5h127q20 0 34 13.5t14 33.5v128q0 18-12 30t-30 12q-17 0-29-12t-12-30zm-450-32 38 76q6 12 3 24.5T355-399q-15 15-36 11t-31-24L130-762q-6-11-4-22.5t11-20.5l20-20q8-8 20-10t23 3l348 158q20 8 24 30t-12 38q-10 10-23.5 12t-25.5-4l-74-34zm-34-55 93-92-177-85-3 3z" />
  </Svg>
);
