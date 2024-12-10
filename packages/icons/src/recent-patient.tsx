import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgRecentPatient = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M580-122H229q-39.8 0-66.9-27.625Q135-177.25 135-216v-27q0-44.302 22.828-77.516Q180.656-353.73 217-371q69-31 133.469-46.5T480-433q25.25 0 50.5 3t49.5 7.571V-329q-25-5-49.667-7-24.666-2-50.333-2-56 0-108.5 11t-110.214 37.844Q247-282.441 238-268.425q-9 14.016-9 29.425v23h351zm-351-94h351zm250.796-278q-77.203 0-126-48.796Q305-591.593 305-668.796 305-746 353.796-795q48.797-49 126-49Q557-844 606.5-795T656-668.796q0 77.203-49.5 126Q557-494 479.796-494m0-94Q515-588 538-610.846t23-58.119q0-35.685-22.796-58.36-22.797-22.675-58-22.675Q445-750 422-727.279t-23 57.819q0 35.51 22.796 58.485 22.797 22.975 58 22.975M720-200h-32q-20.75 0-34.375-13.625T640-248v-145q0-19.75 13.625-33.375T688-440h135q19.429 0 29.714 17Q863-406 855-388l-55 108h19q21 0 31.5 18t-.5 36L741.899-39.833Q737-31 728.5-33.333 720-35.667 720-45z" />
  </Svg>
);
