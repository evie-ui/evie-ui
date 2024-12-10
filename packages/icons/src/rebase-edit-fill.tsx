import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgRebaseEditFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M402-127v-126q0-9 3-17.3t10-15.7l272-272q14.316-14 32.281-20 17.965-6 34.719-6 18 0 35.024 6.5Q806.049-571 820-557l58 57q15 15 21.5 32.693Q906-449.614 906-432q0 17.955-6.5 35.977Q893-378 879-364L608-93q-7.4 7-15.7 10-8.3 3-17.3 3H449q-20 0-33.5-13.5T402-127m359-233 71-73-79-78-72 71zM200.176-53Q139-53 96-95.859q-43-42.858-43-104.084Q53-248 80.656-286.445 108.312-324.89 153-339v-283q-45-13-72.5-51.5T53-760.057q0-61.226 42.859-104.084Q138.716-907 199.942-907q48.057 0 86.408 27.656Q324.703-851.688 339-807h98l-32-33q-15-14.364-14.5-33.682T405-907q14-14 32.667-13.5Q456.333-920 471-907l114 113q14 14.364 14 34.182T585-726L471-614q-14 13-33 13t-33-14q-14-14-14-32.8 0-18.8 14-33.2l32-32h-98q-11 33-35 57t-57 34v283q44.688 14.297 72.344 52.649Q347-248 347-199.943q0 61.226-42.824 104.085Q261.353-53 200.176-53m559.648-854Q821-907 864-864.177q43 42.824 43 104.001Q907-699 864.177-656q-42.824 43-104.001 43Q699-613 656-655.823q-43-42.824-43-104.001Q613-821 655.823-864q42.824-43 104.001-43" />
  </Svg>
);
