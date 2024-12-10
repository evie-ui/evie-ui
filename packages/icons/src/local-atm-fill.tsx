import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLocalAtmFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M535-379H395q-13 0-21.5 8.5T365-349q0 13 8.5 21.5T395-319h58v15q0 13 8.5 21.5T483-274q13 0 21.5-8.5T513-304v-15h48q15 0 24.5-11.5T595-358v-115q0-16-9.5-27.5T561-512H425v-69h140q13 0 21.5-8.5T595-611q0-13-8.5-21.5T565-641h-52v-15q0-13-8.5-21.5T483-686q-13 0-21.5 8.5T453-656v15h-49q-17 0-28 11.5T365-601v114q0 15 11.5 25t27.5 10h131zM149-135q-39.05 0-66.525-27.475Q55-189.95 55-229v-502q0-39.463 27.475-67.231Q109.95-826 149-826h662q39.463 0 67.231 27.769Q906-770.463 906-731v502q0 39.05-27.769 66.525Q850.463-135 811-135z" />
  </Svg>
);
