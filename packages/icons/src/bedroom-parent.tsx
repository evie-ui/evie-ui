import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBedroomParent = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M276-334h408v20.395q0 18.372 12.907 30.488 12.907 12.117 31 12.117t30.593-12.933Q771-296.867 771-315v-143.367q0-17.893-13.5-38.299Q744-517.071 723-528v-79q0-32-18.5-50.5T654-676H527.234Q511-676 499-671t-20 15q-8-10-20-15t-28-5H306q-32 0-50.5 18.5T237-607v79q-21 11-34.5 31.5T189-458v144q0 18.633 12.907 30.817 12.907 12.183 31 12.183t30.593-12.792Q276-296.583 276-314.5zm0-72v-31q0-19 10.5-29.5t29.053-10.5h328.894Q663-477 673.5-466.5T684-437v31zm34-121v-77h145v77zm195 0v-77h145v77zM149-55q-39.05 0-66.525-27.475Q55-109.95 55-149v-662q0-39.463 27.475-67.231Q109.95-906 149-906h662q39.463 0 67.231 27.769Q906-850.463 906-811v662q0 39.05-27.769 66.525Q850.463-55 811-55zm0-94h662v-662H149zm0 0v-662z" />
  </Svg>
);