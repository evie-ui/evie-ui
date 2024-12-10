import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgVideocamOff = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M746-435v122l-95-94v-324H327l-94-95h418q39.463 0 67.231 27.769Q746-770.463 746-731v206l119-119q10-11 25.5-5.083Q906-643.167 906-628v296q0 15.167-15.5 21.083Q875-305 865-316zm88 397L49-824q-11-11-11.5-25T49-874q11.41-12 25-12t25 12L886-88q11 11.511 10.5 25.756Q896-48 884.5-37T859-26q-14 0-25-12M148-826l94 95h-93v502h502v-93l93 93v19q-6 32-32.356 53.5Q685.287-135 651-135H149q-39.05 0-66.525-27.475Q55-189.95 55-229v-502q0-34 21.5-60.5T130-824z" />
  </Svg>
);