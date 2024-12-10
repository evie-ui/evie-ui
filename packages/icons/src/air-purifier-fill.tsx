import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgAirPurifierFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M420-330q63 0 106.5-43.5T570-480q0-63-43.5-106.5T420-630q-63 0-106.5 43.5T270-480q0 63 43.5 106.5T420-330m-.381-71Q385-401 363-423.381q-22-22.38-22-57Q341-515 363.381-537q22.38-22 57-22Q455-559 477-536.619q22 22.38 22 57Q499-445 476.619-423q-22.38 22-57 22M714.5-500q-15.671 0-26.585-9.975Q677-519.951 677-535.675q0-15.725 10.415-26.025Q697.829-572 714-572q12.522 0 22.761-5Q747-582 753-596q12-28 40.384-45.5Q821.767-659 855-659q15.3 0 25.65 10.4Q891-638.199 891-622.825q0 16.225-9.925 26.025Q871.15-587 855-587q-12.333 0-23.167 6.5Q821-574 815.75-563q-14.75 29-41.718 46-26.967 17-59.532 17m0 166q-15.671 0-26.585-10.4Q677-354.801 677-370.175q0-16.225 10.415-26.025Q697.829-406 714-406q12.522 0 22.998-5.5T753-431q12-28 40.091-44t60.409-16q15.671 0 26.585 9.975Q891-471.049 891-455.325q0 15.725-10.415 26.025Q870.171-419 854-419q-12.522 0-22.761 4.5Q821-410 815.75-398q-14.75 29-41.718 46.5Q747.065-334 714.5-334M189-95q-39.8 0-66.9-27.1Q95-149.2 95-189v-503q0-69.025 51.844-121.513Q198.688-866 268-866h304q69.025 0 121.513 52.487Q746-761.025 746-692v21h-57.328Q668-671 654.5-657.375 641-643.75 641-624v323q0 19.75 13.625 33.375T688.224-254H746v65q0 39.8-27.394 66.9Q691.213-95 651-95z" />
  </Svg>
);
