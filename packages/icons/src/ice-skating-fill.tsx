import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgIceSkatingFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M110-52q-19.75 0-33.375-13.675Q63-79.351 63-99.175 63-119 76.625-132.5 90.25-146 110-146h113v-98h-30q-37.125 0-63.562-26.875Q103-297.75 103-334v-429q0-38.75 27.625-66.375T197-857h162q40.212 0 67.606 27.625Q454-801.75 454-763v61H325q-6 0-10.5 4.5T310-687q0 6 4.5 10.5T325-672h134v44H325q-6 0-10.5 4.5T310-613q0 6 4.5 10.5T325-598h158q18 19 41.623 30.8Q548.246-555.4 574-547l76 22q54 17 87.5 61.335Q771-419.331 771-363v35q0 34.75-24.625 59.375T687-244h-30v98h72.538q48.629 0 81.045-32.667Q843-211.333 843-259q0-19.75 13.675-33.375Q870.351-306 890.175-306 910-306 923.5-292.375 937-278.75 937-259q0 85.905-60.547 146.452Q815.905-52 730-52zm207-94h246v-98H317z" />
  </Svg>
);
