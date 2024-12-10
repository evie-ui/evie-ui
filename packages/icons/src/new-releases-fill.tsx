import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNewReleasesFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m437-441-68-72q-11-12-26.5-12T315-515q-12 13-12 28t12 27l88 87q14 15 34 15t34-15l174-173q11-10 11-26t-12-27q-11-9-26-8.5T594-597zM314-65l-60-103-120-25q-18-3-29-18t-9-33l14-116-76-89q-12-13-12-31t12-31l76-88-14-116q-2-18 9-33t29-19l120-24 60-104q9-15 26.5-21.5T375-915l105 49 105-49q17-7 34.5-1.5T646-896l61 105 119 24q18 4 29 19t9 33l-14 116 76 88q12 13 12 31t-12 31l-76 89 14 116q2 18-9 33t-29 18l-119 25-61 104q-9 15-26.5 20.5T585-45L480-94 375-45q-17 7-34.5 1T314-65" />
  </Svg>
);