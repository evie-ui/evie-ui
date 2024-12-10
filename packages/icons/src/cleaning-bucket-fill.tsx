import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCleaningBucketFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M347-10q-34.785 0-62.373-23.196Q257.038-56.39 253-92l-67-504q-2-20.6 11-36.8 13-16.2 35-16.2h497q22 0 35 16.2t11 36.8L708-92q-5.038 35.609-32.127 58.804Q648.785-10 614-10zm133-300q48 0 81.5-33t33.5-81v-28q0-16.475-11.868-28.237Q571.263-492 554.632-492 538-492 526.5-480.237 515-468.475 515-452v28q0 15.25-9.825 25.125-9.824 9.875-25 9.875Q465-389 455-398.875T445-424v-28q0-16.475-11.868-28.237Q421.263-492 404.632-492 388-492 377-480.237 366-468.475 366-452v28q0 48 33 81t81 33m143-392q-29 0-49.5-20.5t-20.5-49q0-29.5 20.5-49.5t50-20q28.583 0 48.542 20.333Q692-800.333 692-771q0 28-20.042 48.5Q651.917-702 623-702m-245.338-29q-44.338 0-77-32.662T268-841.162Q268-887 300.662-918.5q32.662-31.5 77.5-31.5Q424-950 455.5-918.4q31.5 31.6 31.5 77.738 0 44.338-31.6 77T377.662-731" />
  </Svg>
);
