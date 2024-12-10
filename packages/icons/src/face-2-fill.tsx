import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFace2Fill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-15q-22 0-43-2t-43-6q-96 68-210 42T11-109q-45-76-35.5-161T47-420v-1q-61-57-68-150.5T11-734q34-57 101.5-96.5T258-865q35-55 93.5-88T480-986q70 0 128.5 33t94.5 88q77-5 144.5 34.5T949-734q39 69 32 162.5T914-421v1q61 65 70.5 150T950-109Q890-7 776 19T565.586-23Q544-19 523-17t-43 2m0-94q138.375 0 235.188-95.812Q812-300.625 812-439q0-29-5.5-58.5T791-555q-29 23-65.5 36.5T645-505q-98.837 0-168.918-67.582Q406-640.163 401-738v-11.5q0-5.5 1-11.5-110 27-181 116t-71 206q0 138.375 96.312 234.188Q342.625-109 480-109M357.775-341Q334-341 318-357.225q-16-16.226-16-40Q302-421 318.225-437q16.226-16 40-16Q382-453 398-436.775q16 16.226 16 40Q414-373 397.775-357q-16.226 16-40 16m245 0Q579-341 563-357.225q-16-16.226-16-40Q547-421 563.225-437q16.226-16 40-16Q627-453 643.5-436.775q16.5 16.226 16.5 40Q660-373 643.275-357q-16.726 16-40.5 16" />
  </Svg>
);
