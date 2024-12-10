import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgGavelFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M160-146h443q15 0 25.5 10.5T639-110q0 15-10.5 25.5T603-74H159q-15 0-25-10.5T124-110q0-15 10.5-25.5T160-146m140-206L186-466q-27-27-27.5-65.5T186-598l28-30 248 246-30 30q-27 27-65.5 27T300-352m352-221L406-821l30-29q28-26 66-26t66 27l114 114q28 28 28 66.5T682-603zm153 410L278-690l66-67 527 528q14 14 14 33t-14 33q-14 14-33 14t-33-14" />
  </Svg>
);
