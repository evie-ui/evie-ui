import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgOilBarrel = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M152-95q-20 0-33.5-13.5T105-142q0-20 13.5-33.5T152-189h17v-244h-27q-20 0-33.5-14T95-480.5q0-19.5 13.5-33T142-527h27v-244h-17q-20 0-33.5-14T105-818.412q0-19.413 13.5-33.5Q132-866 152-866h656q19.75 0 33.375 14.213Q855-837.575 855-817.912 855-799 841.375-785T808-771h-17v244h27q19.625 0 33.812 13.625Q866-499.75 866-480q0 19-14.188 33-14.187 14-33.812 14h-27v244h17q19.75 0 33.375 13.625T855-141.5q0 19.5-13.625 33T808-95zm112-94h432v-244q-19 0-33-14t-14-33.5q0-19.5 14-33t33-13.5v-244H264v244q19.75 0 33.375 13.625T311-480q0 19-13.625 33T264-433zm216-154q42.765 0 72.882-29.085Q583-401.169 583-442.739q0-17.094-4.5-29.678Q574-485 563-500l-46-55q-14.592-17-36.796-16.5T444-555l-47 54q-11 15-15 27.728-4 12.729-4 29.664 0 42.392 29.618 71.5Q437.235-343 480-343M264-189v-582z" />
  </Svg>
);
