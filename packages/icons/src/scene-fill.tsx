import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSceneFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M843-18v-693q0-36-24.5-60.5T758-796h-41v52q0 14.714-10.643 24.857Q695.714-709 682-709H423q-20 0-29-19.5t-2-35.5l85-180q8-17 23.9-27.5Q516.8-982 538-982h113q27.714 0 46.857 20T717-914v24h41q76 0 128 51.5T938-711v693zm-683 0q-58.75 0-98.375-39.625T22-156v-118q0-32 22-54t54-22q33 0 54.5 22t21.5 54v108h421v-113q0-32 22-52t54-21q32 0 53.5 20.5T746-279v123q0 58.75-39.625 98.375T609-18zm55-189v-72q0-57-23.5-83T129-392v-86q0-38.75 28.125-66.375T224-572h321q38.75 0 66.875 27.625T640-478v86q-39 4-62.5 30T554-279v72z" />
  </Svg>
);
