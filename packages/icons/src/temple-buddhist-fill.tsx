import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTempleBuddhistFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m305-729 100-132q14.312-19.5 34.172-28.75Q459.031-899 480-899t40.828 9.25Q540.688-880.5 555-861l100 132zm-93 178v-50q-51-17-90-61.1T80-766q0-20.05 13.877-34.525 13.877-14.475 34-14.475Q148-815 161.5-800.525 175-786.05 175-766q3 35 27.88 57T258-687h444.378q29.432 0 54.527-22Q782-731 785-766q0-20.05 13.877-34.525Q812.754-815 832.789-815q20.036 0 34.123 14.475Q881-786.05 881-766q-4 60-42.583 103.902Q799.833-618.196 749-601v50zm-80 422v-295q-51-17-90-61.1T0-589q0-20.175 13.877-34.088Q27.754-637 47.877-637 68-637 81.5-623.088 95-609.175 95-589q3 35 27.88 57T178-510h604q30.24 0 55.12-22T865-589q0-20.175 13.877-34.088Q892.754-637 912.789-637q20.036 0 34.123 13.912Q961-609.175 961-589q-4 61-42.583 104.469Q879.833-441.062 829-424v295q0 40.213-27.394 67.606Q774.213-34 734-34H583q-19.75 0-33.375-13.625T536-82v-130q0-23.4-15.825-39.2-15.824-15.8-40-15.8Q456-267 440-251.2q-16 15.8-16 39.2v130q0 20.75-13.625 34.375T377-34H226q-39.8 0-66.9-27.394Q132-88.787 132-129" />
  </Svg>
);