import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgFlashOn = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m458-290 186-268H513l89-250H348v366h110zm297-263L442-101q-8.28 10.8-18.64 13.4Q413-85 403.1-88.156q-10.9-4.156-18-12.086Q378-108.171 378-121v-227h-43q-33.412 0-57.206-23.794Q254-395.588 254-429v-379q0-40.213 27.625-67.606Q309.25-903 348-903h274q36.592 0 62.296 30T696-808l-53 155h66q39.873 0 55.437 32Q780-589 755-553M458-442H348z" />
  </Svg>
);
