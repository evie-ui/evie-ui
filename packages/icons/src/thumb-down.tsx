import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgThumbDown = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M121-343q-36.6 0-65.8-28.5Q26-400 26-438v-35.839q0-8.987-1-18.574Q24-502 28-510l130-302q12.878-30.25 42.595-51.125Q230.311-884 263-884h448v541L521-139q-21.6 23-49.687 29-28.086 6-53.813-7-24.5-12-36-39.5t-3.2-57.5L406-343zm507-51v-395H250L122-485v47h393l-44 213zm193-490q40.213 0 67.606 27.394Q916-829.213 916-789v351q0 40.212-27.394 67.606Q861.213-343 821-343H711v-95h110v-351H711v-95zm-193 95v395z" />
  </Svg>
);
