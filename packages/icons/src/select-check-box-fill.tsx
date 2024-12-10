import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSelectCheckBoxFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-95q-38.775 0-66.388-27.612Q95-150.225 95-189v-582q0-39.188 27.612-67.094Q150.225-866 189-866h582q14.545 0 32.273 7.5Q821-851 831-843l-76 76v-4H189v582h582v-325l95-95v420q0 38.775-27.906 66.388Q810.188-95 771-95zm278-299 366-366q11.488-11 25.601-11t24.756 11Q894-749 894-734.957q0 14.044-10 23.957L501-328q-14.727 14-34.364 14Q447-314 433-328L270-491q-11-11-11-25t11-25q11-11 24.5-11t24.5 11z" />
  </Svg>
);
