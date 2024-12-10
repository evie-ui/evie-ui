import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgDisabledVisible = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M499-55q-93 4-174-28t-141-89.5Q124-230 89.5-309T55-480q0-89 32.5-167t90-135.5Q235-840 312.5-873T480-906q89 0 167 33t135.5 90.5Q840-725 873-647t33 167q0 9-1 18.5t-2 17.5q-22-16-45-29.5T809-495q-5-138-100-227t-233-89q-58 0-109 17.5T278-744l261 261q-22 9-41 21t-37 27L215-681q-32 41-49 92.5T149-480q0 111 63 194.5T378-174q22 38 52.5 68T499-55m181-85q63 0 120-31.5t94-88.5q-37-57-94-88.5T680-380q-63 0-120 31.5T466-260q37 57 94 88.5T680-140m0 71q-97 0-176.5-52T387-260q37-87 116.5-139T680-451q97 0 176.5 52T973-260q-37 87-116.5 139T680-69m0-125q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19" />
  </Svg>
);
