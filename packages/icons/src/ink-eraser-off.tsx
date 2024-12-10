import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgInkEraserOff = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M817.682-54.326 613-258 510-150q-6.98 7-15.456 11-8.475 4-17.544 4H170q-8.913 0-17.314-3-8.4-3-15.686-10l-69-72q-28.167-27.967-27.083-65.484Q42-323 68-350l219-234L54-817q-10-10.2-10.5-24.6Q43-856 54.158-867q10.737-11 25.5-11T105-867l762 762q10 10.182 10.5 24.59Q878-66 866.842-55t-25 11Q828-44 817.682-54.326M191-229h268l88-95-194-195-215 234zm520-132-66-66 131-143-192-202-134 150-65-66 134-145q26-27 64.6-26.5 38.6.5 66.4 27.5l189 199q28 27.967 29 66.484Q869-528 841-501zm-261-60" />
  </Svg>
);