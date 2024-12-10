import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgLightbulbFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M479.965-34Q443-34 416.5-62.5T390-133h180q0 42-26.535 70.5-26.536 28.5-63.5 28.5M346.934-201q-15.909 0-25.921-10.195Q311-221.389 311-236.895q0-15.08 10.225-25.592Q331.45-273 347-273h267q15.125 0 25.062 10.518Q649-251.965 649-236.877q0 15.088-9.938 25.482Q629.125-201 614-201zM316-340q-72-47-116.5-117.794Q155-528.587 155-617.997q0-131.753 96.206-228.378T479.706-943Q612-943 709-846.375T806-618q0 89-44 160T644-340z" />
  </Svg>
);
