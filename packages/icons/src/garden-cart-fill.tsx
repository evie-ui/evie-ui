import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgGardenCartFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M283.275-103Q243-103 214-131q-29-28-29-68v-384l-74-180H73q-19.75 0-33.375-13.675Q26-790.351 26-810.175 26-830 39.625-843.5 53.25-857 73-857h69q14.081 0 26.149 7.54Q180.216-841.92 186-829l56.462 134H850q26.128 0 40.564 23T893-626L779-401q52 10 86.5 50.968 34.5 40.969 34.5 95.566Q900-192 856.432-148q-43.568 44-105.518 44Q688-104 644.5-148.036 601-192.071 601-254q0-16 4-32t11-30l-112-9-106 158q-24 35-51.49 49.5-27.49 14.5-63.235 14.5M290-180l15-8 100-146q-29-3-64-12.5T285-391l-13-28v221q0 8 5.5 13t12.5 5m459.651-14Q776-194 794.5-212.273q18.5-18.274 18.5-44.378Q813-284 794.75-302 776.5-320 750-320q-26.25 0-44.625 17.75T687-257q0 26.25 18.273 44.625Q723.547-194 749.651-194" />
  </Svg>
);
