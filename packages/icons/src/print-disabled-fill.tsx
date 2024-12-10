import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPrintDisabledFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M817-55 649-222h95v46q0 38.75-27.394 66.375Q689.213-82 649-82H311q-39.8 0-66.9-27.625Q217-137.25 217-176v-99h-68q-39.8 0-66.9-27.394Q55-329.788 55-370v-172q0-48.925 30.5-85.463Q116-664 163-671h37L54-817q-10-10.2-10.5-24.6Q43-856 54.158-867q10.737-11 25.5-11T105-867l762 762q10 10.182 10.5 24.59Q878-66 866.842-55t-25 11Q828-44 817-55M311-171h338v-51l-84-83H311zm486-104L400-674h376q55.25 0 92.625 38.675T906-542v224q0 17.75-12.888 30.375Q880.225-275 863-275zm-53-429H370L207-866h442q40.213 0 67.606 27.394Q744-811.213 744-771zm-5 234q15.4 0 25.7-10.3Q775-490.6 775-506q0-15.4-10.3-25.7-10.3-10.3-25.2-10.3-14.9 0-25.7 10.3Q703-521.4 703-506q0 15.4 10.725 25.7Q724.45-470 739-470" />
  </Svg>
);
