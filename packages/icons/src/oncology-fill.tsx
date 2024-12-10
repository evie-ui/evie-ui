import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgOncologyFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M698-113q-63 0-107-43.853T547-263.5q0-63.794 44-107.147Q635-414 697.708-414q63.708 0 107 43.5T848-264q0 22.078-5.5 41.039Q837-204 826-187l79 80q12 12.022 12 27.511Q917-64 904.982-52t-27.5 12Q862-40 850-52l-80-80q-15 9-34 14t-38 5m0-79q30.475 0 50.737-20.556Q769-233.113 769-264q0-30.475-20.372-50.737-20.371-20.263-51-20.263Q667-335 646.5-314.628q-20.5 20.371-20.5 51Q626-233 646.556-212.5T698-192M133-63q-20 0-33.5-13.5T86-110v-231q0-47.583 33-80.792Q152-455 200-455h115q62.583 0 80.292-15.5Q413-486 413-515q0-36-19.638-57-19.637-21-47.362-21-25 0-42.5-17.5T286-653v-197q0-20 13.5-33.5T333-897h214q19.875 0 33.938 13.5Q595-870 595-850v43q115 7 197.5 92.5T875-513v104q-33-41-79-63t-98-22q-95 0-161 64t-70 157q-1 25 3.5 49t14.5 46h-70q-9 0-14.5 5.875T395-158v48q0 20-14.062 33.5Q366.875-63 347-63z" />
  </Svg>
);
