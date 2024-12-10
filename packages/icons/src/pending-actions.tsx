import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPendingActions = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M705-80q-79.435 0-134.218-55.283Q516-190.565 516-269q0-78.435 54.782-133.717Q625.565-458 705-458q78.435 0 133.718 55.283Q894-347.435 894-269q0 78.435-55.282 133.717Q783.435-80 705-80m17-193.421v-91.499q0-10.08-7.414-17.08-7.415-7-17.3-7Q687-389 679-381.6q-8 7.4-8 18.681V-274q0 9.87 3.5 18.006Q678-247.857 684-241l61 63q7 7 17.5 7t17.5-8.143q7-8.143 7.5-18t-7.5-17.895zM189-95q-38.775 0-66.388-27.612Q95-150.225 95-189v-582q0-40.975 26.512-67.987Q148.025-866 189-866h174q11-36 43.206-59.5T480-949q40 0 72.5 23.5T598-866h173q40.975 0 67.987 27.013Q866-811.975 866-771v308q-22-15-45.516-25.98T771-504v-267h-55v55q0 19.75-13.625 33.375T669-669H291q-19.75 0-33.375-13.625T244-716v-55h-55v582h282q7 25 21 50t33 44zm291-690q17 0 28.5-11.5T520-825q0-16-11.5-28T480-865q-17 0-28.5 12T440-825q0 17 11.5 28.5T480-785" />
  </Svg>
);
