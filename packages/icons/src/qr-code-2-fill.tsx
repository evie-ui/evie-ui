import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgQrCode2Fill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M537-51v-97h98v97zm-97-97v-235h97v235zm366-144v-188h97v188zm-97-188v-97h97v97zm-561 97v-97h98v97zm-97-97v-97h97v97zm429-332v-97h97v97zM124-691h146v-145H124zm-73 25.672V-862q0-19.75 13.625-33.375T98-909h198q19.75 0 33.375 13.625T343-862v196.672q0 21.078-13.625 34.703Q315.75-617 296-617H98q-19.75 0-33.375-13.625T51-665.328M124-124h146v-146H124zM51-98v-198q0-19.75 13.625-33.375T98-343h198q19.75 0 33.375 13.625T343-296v198q0 19.75-13.625 33.375T296-51H98q-19.75 0-33.375-13.625T51-98m640-593h145v-145H691zm-74 25.672V-862q0-19.75 13.625-33.375T665.328-909H862q19.75 0 33.375 13.625T909-862v196.672q0 21.078-13.625 34.703Q881.75-617 862-617H665.328q-21.078 0-34.703-13.625Q617-644.25 617-665.328M721-51v-143.2h-92V-292h177v144h97v97zM537-383v-97h172v97zm-194 0v-97h-97v-97h291v97h-97v97zm40-234v-195h97v103h97v92zM170-736v-55h54v55zm0 566v-54h54v54zm566-566v-55h55v55z" />
  </Svg>
);
