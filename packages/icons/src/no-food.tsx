import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNoFood = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m883-174-85-85 38-410H440l-4.333-43.076Q434-732 447.744-747.5T483-763h153v-139q0-18.125 12.175-29.562 12.176-11.438 30-11.438Q696-943 707.5-931.562 719-920.125 719-902v139h173q19.357 0 34.179 15.75Q941-731.5 938-712zM832-39 47-823q-10-9.933-10.5-24.467Q36-862 47.158-873q10.737-11 25.5-11T98-873L882-89q10 11.182 10.5 25.09Q893-50 881.842-39t-25.4 11Q842.2-28 832-39M52-171q-14.875 0-24.938-10.37Q17-191.74 17-207.07q0-14.905 10.063-24.918Q37.124-242 52-242h538q14.875 0 24.938 10.088 10.062 10.087 10.062 25Q625-192 614.938-181.5 604.875-171 590-171zm0 154q-14.875 0-24.938-10.37Q17-37.74 17-53.07q0-14.905 10.063-24.917Q37.124-88 52-88h538q14.875 0 24.938 10.088Q625-67.825 625-52.912 625-38 614.938-27.5 604.875-17 590-17zm394-509v72q-29-6-60.824-9-31.823-3-64.176-3-91 0-139.5 26T114-375h481l72 71H73q-21.818 0-35.91-16.885Q23-337.771 27-359q6.853-50.645 36.926-84.823Q94-478 136.5-499t91-29.5Q276-537 321-537q33 0 64.5 3t60.5 8M321-375" />
  </Svg>
);
