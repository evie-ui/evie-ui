import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDeployedCodeUpdate = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M433-895q22.328-12 47.164-12Q505-907 527-895l291 168q23.25 13.426 35.625 35.213T866-645v173q-19.655-20.156-43.828-35.078Q798-522 771-530v-70l-96 57q-80 4-143.5 49T437-380v-76L189-599v284l251 144q10 36 31 67t51 54q-22 5-45.5 1T433-66L142-233q-23.25-13.426-35.125-35.213T95-315v-330q0-25 11.875-46.787T142-727zm47 82L236-672l244 142 244-142zm195 580-58-57q-5.182-5-13.091-5.5Q596-296 590-289.857q-6 6.143-6 14.5T590-261l72 73q14.364 15 33.682 15T729-188l74-73q6-6 5.5-14.5t-6.643-14.5q-6.143-5-14-5.5T774-290l-57 57v-142q0-7.8-6.143-13.9-6.143-6.1-15-6.1-7.857 0-14.357 6.1-6.5 6.1-6.5 13.9zm11 148q-78 0-134-55.399-56-55.4-56-134Q496-353 552-409t134-56q77 0 133.5 55.867Q876-353.265 876-274q0 78.435-56.5 133.717Q763-85 686-85" />
  </Svg>
);
