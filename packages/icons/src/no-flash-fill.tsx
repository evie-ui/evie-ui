import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNoFlashFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m820-50-86-86v30q-5 23-23.5 38.5T667-52H116q-30 0-50-20t-20-50v-414q0-30 20-50.5t50-20.5h103l22-23L47-823q-10-10-10-25t11-26q11-11 25-11t25 11l773 773q10 11 10 25.5T870-50q-10 10-24.5 10T820-50M387-483q-64 1-110.5 47.5T230-324q0 66 46.5 112T389-166q65 0 111-45.5T548-322v-.5.5zm2 246q-36 0-61.5-25.5T302-324q0-36 25.5-61.5T389-411q36 0 61 25.5t25 61.5q0 36-25 61.5T389-237m348-98L409-663h55q19 0 38 8.5t32 22.5l24 25h109q29 0 49.5 20.5T737-536zm54-397h-3q-10 0-17-7t-7-17v-129q0-10 7-17t17-7h89q13 0 19.5 10.5T898-876l-37 86h16q13 0 20 11t1 23l-84 167q-5 9-14 7t-9-11z" />
  </Svg>
);
