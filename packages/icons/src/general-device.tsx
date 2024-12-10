import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgGeneralDevice = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M342-202q-19.75 0-33.375-13.625T295-249v-539q0-40.213 27.1-67.606Q349.2-883 389-883h182q40.213 0 67.606 27.394Q666-828.213 666-788v539q0 19.75-14.188 33.375Q637.625-202 618-202zm47-94h182v-492H389zm-47 124h276q19.625 0 33.812 13.675 14.188 13.676 14.188 34Q666-104 651.812-90.5 637.625-77 618-77H342q-19.75 0-33.375-13.675-13.625-13.676-13.625-34Q295-145 308.625-158.5 322.25-172 342-172m47-124h182z" />
  </Svg>
);
