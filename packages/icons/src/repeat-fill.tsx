import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgRepeatFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m261-189 42 42q13 13 13 30.5t-12.679 30.66q-12.285 13.16-30.303 13.5Q255-72 242-85L128-199q-7.455-6.8-11.227-15.533-3.773-8.734-3.773-18.1 0-9.367 3.773-17.967 3.772-8.6 11.227-15.4l114-114q13-13 31.5-12.5t30.413 13.5q12.337 13 12.212 31T303-318l-42 42h438v-117q0-17.625 12.763-30.312Q724.526-436 742.263-436 760-436 773-423.312q13 12.687 13 30.312v109q0 40.212-27.394 67.606Q731.213-189 691-189zm439-488H262v117q0 17.625-12.965 30.312Q236.07-517 218.035-517T187.5-529.688Q175-542.375 175-560v-109q0-40.213 27.1-67.606Q229.2-764 269-764h431l-42-42q-14-12-14-30t13.293-31.12q12.957-13.12 30.832-13.5Q706-881 719-868l114 114q7 7.16 11 16.313 4 9.154 4 17.9 0 8.747-4 17.767T833-686L719-572q-14.067 13-31.971 12.54-17.904-.46-30.404-13.5Q643.75-586 643.875-604T658-635z" />
  </Svg>
);
