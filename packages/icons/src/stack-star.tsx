import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgStackStar = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m612-289 59 36q7 4 13.5-.5T690-265l-16-69 53-46q6-4.118 3-11.059Q727-398 719-399l-69.211-6.833L623-470q-3.25-7-10.625-7T601-470l-26.789 64.167L505-399q-8 .833-11 7.833T498-380l52 46-16 69q-1 7 5.5 11.5t13.5.5zm-464-30q-38.75 0-66.375-27.1T54-413v-398q0-40.213 27.625-67.606Q109.25-906 148-906h398q40.213 0 67.606 27.394Q641-851.213 641-811v66q0 17.625-12.675 30.312-12.676 12.688-31 12.688Q579-702 566.5-714.688 554-727.375 554-745v-74H141v413h74q18.05 0 31.025 12.965Q259-380.07 259-362.035T246.025-331.5Q233.05-319 215-319zM413-55q-39.8 0-66.9-27.1Q319-109.2 319-149v-398q0-40.213 27.1-67.606Q373.2-642 413-642h398q40.213 0 67.606 27.394Q906-587.213 906-547v398q0 39.8-27.394 66.9Q851.213-55 811-55zm-7-87h413v-413H406zm206-206" />
  </Svg>
);
