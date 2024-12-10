import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgConversionPathOff = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M821-50 47-823q-10-10-10-25t11-26q10-10 24.5-10T98-874l774 773q10 11 10 25.5T871-50q-10 10-24.5 10T821-50M443-198q-69 0-114-45t-45-114q0-69 45-114t114-45h12l73 72h-85q-38 0-62.5 24.5T356-357q0 38 24.5 62.5T443-270h259l146 146q-17 13-38 20t-44 7q-52 0-87.5-30.5T634-198zm449 16L714-360q12-6 24.5-8.5T766-371q57 0 97 40t40 97q0 15-2.5 27.5T892-182M603-471l-55-54q27-6 43-26.5t16-51.5q0-38-24.5-62.5T520-690H383l-57-72h194q69 0 114 45t45 114q0 45-20.5 79.5T603-471M194-589q-57 0-97-40t-40-97q0-39 18.5-70.5T126-846l188 188q-17 29-48 49t-72 20" />
  </Svg>
);
