import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBrightnessEmpty = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M342.163-135H229q-39.8 0-66.9-27.1Q135-189.2 135-229v-112.587L63-414q-14-14-20.5-31.108-6.5-17.109-6.5-34.807 0-17.699 6.5-34.892T63-546l72-72.413V-731q0-40.213 27.1-67.606Q189.2-826 229-826h112.587L414-897q14-14 31.773-20.5 17.772-6.5 35.458-6.5t34.749 7.196Q533.042-909.609 547-896l71 70h113q40.213 0 67.606 27.394Q826-771.213 826-731v112.587L897-546q14 14 20.5 31.086t6.5 34.761q0 17.676-6.5 34.914Q911-428 897-414l-71 72.413V-229q0 39.8-27.394 66.9Q771.213-135 731-135H618l-71 70q-13.958 14.13-31.077 20.565Q498.805-38 481.095-38q-17.709 0-34.865-6.435Q429.073-50.87 415-65zM381-229l100 96 97.917-96H731v-153l99-98-99-99v-152H579l-98-99-99 99H229v152l-98 99 98 98v153zm100-252" />
  </Svg>
);
