import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCable = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M190-109q-17.675 0-29.337-11.662Q149-132.325 149-150v-39h-10q-18 8-24-4t-6-25.529V-350q0-17.675 11.662-29.337Q132.325-391 150-391h39v-299q0-69.35 49.752-115.175t121-45.825Q428-851 474.5-804.675T521-690v420q0 32.812 23.133 55.906t56 23.094Q636-191 662.5-213.269T689-270v-299h-39q-17.675 0-29.338-11.662Q609-592.325 609-610v-131.471Q609-755 615-767t24-4h10v-39q0-17.675 11.662-29.338Q672.325-851 690-851h80q17.675 0 29.338 11.662Q811-827.675 811-810v39h10q18-8 24 4t6 25.529V-610q0 17.675-11.662 29.338Q827.675-569 810-569h-39v299q0 69.35-49.752 115.175t-121 45.825Q532-109 485.5-155.325T439-270v-420q0-32.812-23.133-55.906-23.132-23.094-56-23.094Q324-769 297.5-746.731 271-724.463 271-690v299h39q17.675 0 29.337 11.663Q351-367.675 351-350v131.471Q351-205 345-193t-24 4h-10v39q0 17.675-11.663 29.338Q287.675-109 270-109z" />
  </Svg>
);
