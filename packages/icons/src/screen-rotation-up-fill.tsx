import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgScreenRotationUpFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M570-135H303q-36.812 0-62.406-25.562Q215-186.125 215-222v-424l95 94v323h260l-33-33q-14-14.5-14-33.408t14.841-32.75Q551.304-342 570.252-342T604-329l114 113q14 15 14 34.455 0 19.454-14 33.545L604-36q-15 13-33.5 13.5T537.696-36Q523-50 523-69t15-34zm175-179-95-95v-322H390l32 33q14 14.5 14 33.408t-13.609 32.75Q408-618 388.967-618q-19.034 0-32.967-14L242-745q-15-14.091-15-33.545Q227-798 242-812l114-112q14-13 33-14t33.304 13Q437-911 436.5-891.682 436-872.364 422-858l-32 32h268q35.875 0 61.438 25.594Q745-774.812 745-738z" />
  </Svg>
);
