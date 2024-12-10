import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgUploadFile = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M452.397-413v175.303q0 12.621 8.477 21.159Q469.351-208 482.175-208q12.825 0 21.325-8.537t8.5-21.158V-413l62.714 62.714Q577-348 589-353t23-9q11-4 15-3.196 4 .803-10 15.41 9-7.785 8-20.5Q624-383 616-392l-102-98q-7.4-6.909-16.267-10.955-8.866-4.045-17.8-4.045-8.933 0-17.733 4.045-8.8 4.046-16.2 10.955L346-390q-10 10.273-9.962 22.273.039 12 9.962 20.597 8.727 9.047 20.864 8.088Q379-340 388-348zM229-55q-39.05 0-66.525-27.475Q135-109.95 135-149v-662q0-39.463 27.475-67.231Q189.95-906 229-906h323q19.556 0 37.278 8Q607-890 620-877l177 177q13 13 21 30.722T826-632v483q0 39.05-27.769 66.525Q770.463-55 731-55zm313-617v-139H229v662h502v-476H589q-19.75 0-33.375-13.625T542-672M229-811v186zv662z" />
  </Svg>
);
