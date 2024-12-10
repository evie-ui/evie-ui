import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFlashAuto = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m704-630-30 79q-3.714 10.947-12.062 17.474Q653.589-527 642.84-527q-18.385 0-28.612-14.5Q604-556 610-573l101-279q6-18 20.637-29 14.636-11 34.03-12Q784-894 799-882t22 30l99 279q7 16.895-4.029 31.447Q904.943-527 887.104-527q-12.104 0-20.972-7.025Q857.263-541.05 854-552l-29-78zm14-56h95l-39.818-126H757zM258-290l186-268H313l89-250H148v366h110zM203.1-88.156q-10.9-4.156-18-12.086Q178-108.171 178-121v-227h-43q-33.413 0-57.206-23.794Q54-395.588 54-429v-379q0-40.213 27.625-67.606Q109.25-903 148-903h274q36.592 0 62.296 30T496-808l-53 155h66q39.873 0 55.437 32Q580-589 555-553L242-101q-8.28 10.8-18.64 13.4Q213-85 203.1-88.156M258-442H148z" />
  </Svg>
);
