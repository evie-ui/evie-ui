import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBrightnessAuto = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M417-406h127.099L568-329q3 11 12.038 16.5 9.039 5.5 20.01 5.5Q617-307 627-321.397q10-14.398 5-31.603L518-670q-2.916-9.158-10.525-14.579Q499.866-690 491.119-690h-19.087q-10.172 0-17.587 5.421Q447.031-679.158 444-670L331-349q-5 15.9 3.5 28.95Q343-307 359.368-307q11.73 0 21.764-6.45Q391.167-319.9 394-331zm14-58 47-140h5l49 140zm-88.837 329H229q-39.8 0-66.9-27.1Q135-189.2 135-229v-112.587L63-414q-14-14-20.5-31.007-6.5-17.006-6.5-34.807 0-17.8 6.5-34.993T63-546l72-72.413V-731q0-40.213 27.1-67.606Q189.2-826 229-826h112.587L414-897q14-14 31.534-20.5t35.697-6.5q18.163 0 34.987 7.196Q533.042-909.609 547-896l71 70h113q40.213 0 67.606 27.394Q826-771.213 826-731v112.587L897-546q14 14 20.5 30.847 6.5 16.848 6.5 35Q924-462 917.5-445T897-414l-71 72.413V-229q0 39.8-27.394 66.9Q771.213-135 731-135H618l-71 70q-13.958 14.13-30.975 20.565Q499.008-38 481.197-38q-17.811 0-34.967-6.435Q429.073-50.87 415-65zM381-229l100 96 97.917-96H731v-153l99-98-99-99v-152H579l-98-99-99 99H229v152l-98 99 98 98v153zm100-252" />
  </Svg>
);
