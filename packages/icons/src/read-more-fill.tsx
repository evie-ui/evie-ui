import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgReadMoreFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M336-433H102q-19.75 0-33.375-13.675Q55-460.351 55-480.175 55-500 68.625-513.5 82.25-527 102-527h234l-82-82q-13-14-13-33.1t14-32.9q14-14 33-14t33 14l161 161q14 14 14 34t-14 34L321-285q-14 14-33 14t-33-14q-14-14-14-33t14-33zm257 175q-19.75 0-33.375-13.675Q546-285.351 546-306.175 546-326 559.625-339.5 573.25-353 593-353h265q19.75 0 33.875 13.675Q906-325.649 906-305.825 906-285 891.875-271.5 877.75-258 858-258zm0-349q-19.75 0-33.375-13.675Q546-634.351 546-655.175 546-675 559.625-688.5 573.25-702 593-702h265q19.75 0 33.875 13.675Q906-674.649 906-654.825 906-634 891.875-620.5 877.75-607 858-607zm120 174q-19.75 0-33.375-13.675Q666-460.351 666-480.175 666-500 679.625-513.5 693.25-527 713-527h145q19.75 0 33.875 13.675Q906-499.649 906-479.825 906-460 891.875-446.5 877.75-433 858-433z" />
  </Svg>
);
