import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgRttFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M430-109q-25.327 0-39.664-18Q376-145 379-169q3-19 17.594-31.5Q411.188-213 430-213h50l84-534H458l-26 155q-2.719 19.273-17.859 32.136Q399-547 378-547q-25 0-41-18.5T325-609l31-191q3.784-22.24 20.892-36.62Q394-851 417-851h418q28.102 0 46.051 21.478Q899-808.043 895-780l-30 188q-2.719 19.273-17.859 32.136Q832-547 811-547q-25 0-40.5-19T758-610l22-137H674l-85 534h33q24 0 39 18t11 41q-3 20-17 32.5T622-109zM176.352-694q-17.197 0-28.275-12.891Q137-719.783 140-737q2-12 12-20.5t24-8.5h116l-13 72zm-27.056 165Q133-529 122-541.391q-11-12.392-8-29.609 2-13 11.641-21.5 9.64-8.5 23.15-8.5H265l-11.519 72zM97-199q-17 0-27.5-12.391Q59-223.783 62-241q2-12 11.703-21 9.702-9 23.297-9h204l-12 72zm26-165q-16 0-27-12.391Q85-388.783 88-406q2-13 11.703-21.5Q109.405-436 123-436h205l-13 72z" />
  </Svg>
);
