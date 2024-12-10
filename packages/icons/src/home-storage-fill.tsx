import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHomeStorageFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M268-71q-35 0-61-22t-32-57l-63-376q-4-22 10-38.5t36-16.5h644q22 0 36 16.5t10 38.5l-63 376q-6 35-32 57t-60 22zm132-251h160q20 0 33.5-14t13.5-34q0-20-13.5-33.5T560-417H400q-19 0-33 13.5T353-370q0 20 14 34t33 14M240-641q-19 0-33-13.5T193-688q0-20 14-33.5t33-13.5h480q20 0 33.5 13.5T767-688q0 20-13.5 33.5T720-641zm80-154q-19 0-33-14t-14-33q0-20 14-34t33-14h320q20 0 33.5 14t13.5 34q0 19-13.5 33T640-795z" />
  </Svg>
);
