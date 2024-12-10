import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgMedicationFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M440-363v80q0 16.667 11.735 28.333Q463.471-243 480.235-243 497-243 508.5-254.667 520-266.333 520-283v-80h80q16.667 0 28.333-11.735 11.667-11.736 11.667-28Q640-419 628.333-431 616.667-443 600-443h-80v-80q0-15.667-11.735-27.833Q496.529-563 479.765-563 463-563 451.5-550.833 440-538.667 440-523v80h-80q-16.667 0-28.333 12.235Q320-418.529 320-402.265 320-386 331.667-374.5 343.333-363 360-363zM260-68q-38.775 0-66.388-27.906Q166-123.812 166-163v-479q0-38.775 27.612-66.387Q221.225-736 260-736h440q39.188 0 67.094 27.613Q795-680.775 795-642v479q0 39.188-27.906 67.094Q739.188-68 700-68zm4-729q-19.75 0-33.375-13.675-13.625-13.676-13.625-34Q217-865 230.625-878.5 244.25-892 264-892h432q19.75 0 33.375 13.675 13.625 13.676 13.625 34Q743-824 729.375-810.5 715.75-797 696-797z" />
  </Svg>
);