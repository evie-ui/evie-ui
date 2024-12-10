import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgShoppingCartCheckoutFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M289.788-69Q260-69 239-90.212q-21-21.213-21-51Q218-171 239.212-192q21.213-21 51-21Q320-213 341-191.788q21 21.213 21 51Q362-111 340.788-90q-21.213 21-51 21m404 0Q664-69 643-90.212q-21-21.213-21-51Q622-171 643.212-192q21.213-21 51-21Q724-213 745-191.788q21 21.213 21 51Q766-111 744.788-90q-21.213 21-51 21M133-809H92q-17.425 0-29.212-11.777Q51-832.555 51-849.965q0-17.41 11.788-29.223Q74.575-891 92-891h63q14 0 26.3 6.826T198-865l152 326h285l142-247q5-9 15.129-15 10.13-6 21.867-6 23.627 0 35.315 19.5Q861-768 850-747L717-499q-13 21-32.508 34.5-19.509 13.5-44.63 13.5H344l-49 93h441q17.425 0 29.213 11.777Q777-334.445 777-317.035q0 17.41-11.787 29.223Q753.425-276 736-276H284q-44.663 0-67.332-35.5Q194-347 214-384l61-112zm365 78H361q-18.125 0-29.562-11.488Q320-753.976 320-771.684q0-17.709 11.438-29.512Q342.875-813 361-813h137l-45-45q-12-12-12.5-29t11.5-29.391Q465-929 481.5-929t29.5 13l111 111q13 14.182 13 33.091T622-739L511-627q-13 13.167-29.5 12.583Q465-615 452-627q-13-13-13-29.5t13-29.5z" />
  </Svg>
);
