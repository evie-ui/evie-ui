import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBedroomBaby = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M481.692-226q72.656 0 140.482-23t123.488-69.833Q756-327.257 757.5-340.629 759-354 750-362q-10-9-22-8.5t-22.333 7.885L692.5-353.5Q686-349 679-345l-39-75.652v-100.123h30.286q6.514 0 11.114-5.211 4.6-5.21 4.6-12.157Q686-544 681.114-549q-4.885-5-11.4-5H453l-63-105q-5.714-10.35-16.571-16.675Q362.571-682 350-682h-71.525Q270-682 269-673.5t6 10.5l13 6-51 54q-7 7.135-7 16.5t6.429 15.929L240-567q6.192 6.222 14.596 7.111 8.404.889 15.09-4.808L321-599v178l-38.815 76q-7.791-4-15.382-9-7.591-5-14.667-10-10.136-8-21.743-7.5t-18.977 9.029Q201-354 202-341.621q1 12.379 10 20.621 57 47 126.151 71t143.541 24m.774-57Q443-283 402.5-291.5 362-300 321-322l45-74q30 11 57.927 17t56.071 6q28.479 0 56.241-6Q564-385 594-396l46 74q-41 21-79.534 30-38.534 9-78 9M149-55q-39.05 0-66.525-27.475Q55-109.95 55-149v-662q0-39.463 27.475-67.231Q109.95-906 149-906h662q39.463 0 67.231 27.769Q906-850.463 906-811v662q0 39.05-27.769 66.525Q850.463-55 811-55zm0-94h662v-662H149zm0 0v-662z" />
  </Svg>
);
