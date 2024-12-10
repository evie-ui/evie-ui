import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAdminPanelSettingsFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M693-270q26 0 44-19t18-45q0-26-18.5-44T693-396q-27 0-45.5 18T629-334q0 26 18.5 45t45.5 19m-1 125q33 0 59.5-13.5T798-198q-27-14-53-21.5t-53-7.5q-28 0-55 7.5T585-198q19 26 45.5 39.5T692-145m1 65q-78 0-133-55.5T505-267q0-78 55-133.5T693-456q77 0 132.5 55.5T881-267q0 76-55.5 131.5T693-80M480-54Q331-89 233-221t-98-301v-190q0-30 16.5-55t44.5-35l251-94q16-6 33-6t33 6l251 94q28 10 45 35t17 55v236q-32-19-64.5-29.5T693-516q-103 0-175.5 73T445-267q0 53 25 105.5T542-74q-15 8-31 12t-31 8" />
  </Svg>
);