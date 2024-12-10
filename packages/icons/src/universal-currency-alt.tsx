import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgUniversalCurrencyAlt = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M138-175q-33.487 0-58.244-24.756Q55-224.512 55-258v-444q0-33.9 24.756-58.95Q104.513-786 138-786h684q33.9 0 58.95 25.05Q906-735.9 906-702v444q0 33.488-25.05 58.244T822-175zm0-83h684v-444H138zm584-100h-85q-9.833 0-17.417 7.616-7.583 7.617-7.583 18Q612-322 619.583-315q7.584 7 17.417 7h88q19.75 0 33.375-13.625T772-355v-88q0-9.833-7.116-17.417-7.117-7.583-18-7.583-9.884 0-17.384 7.583Q722-452.833 722-443zm-241.941-7Q528-365 561.5-398.559t33.5-81.5Q595-528 561.441-561.5t-81.5-33.5Q432-595 398.5-561.441t-33.5 81.5Q365-432 398.559-398.5t81.5 33.5M238-597h85q9.833 0 17.417-7.616 7.583-7.617 7.583-18Q348-633 340.417-640q-7.584-7-17.417-7h-88q-19.75 0-33.375 13.625T188-600v88q0 9.833 7.116 17.417 7.117 7.583 18 7.583 9.884 0 17.384-7.583Q238-502.167 238-512zM138-258v-444z" />
  </Svg>
);
