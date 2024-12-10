import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFastForwardFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M41-282v-396q0-21.3 14.133-34.15Q69.267-725 87.778-725q8.222 0 14.722 2.5T115-716l286 197q10 7 15 17.741 5 10.74 5 21.259t-5 21.259Q411-448 401-441L115-244q-6 4-12.273 6.5T88.061-235Q69-235 55-247.85T41-282m462 0v-396q0-21.3 14.2-34.15Q531.4-725 550-725q7 0 14 2.5t13 6.5l285 197q11 6.957 16 17.478Q883-491 883-480q0 11-5 21.522-5 10.521-16 17.478L577-244q-6 4-13 6.5t-14 2.5q-18.6 0-32.8-12.85Q503-260.7 503-282" />
  </Svg>
);
