import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFrontHand = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M518.368-950Q535-950 546.5-938.237 558-926.475 558-910v348q0 16.475-11.868 28.237Q534.263-522 517.632-522 501-522 489.5-533.763 478-545.525 478-562v-348q0-16.475 11.868-28.237Q501.737-950 518.368-950m-172.193 44q16.125 0 27.475 11.763Q385-882.475 385-866v304q0 16.475-11.667 28.237-11.666 11.763-28 11.763Q329-522 317.5-533.763 306-545.525 306-562v-304q0-16.475 11.813-28.237Q329.626-906 346.175-906M495.033-15q-150.249 0-255.141-104.279Q135-223.559 135-374v-412q0-16.475 11.175-28.237Q157.351-826 173.982-826q16.632 0 28.325 11.763Q214-802.475 214-786v412.337q0 116.886 81.434 198.275Q376.867-94 494.434-94 612-94 695-175.823T786-376v-144h-16q-17.725 0-28.862 11.281Q730-497.438 730-479.5v91.5q0 19.75-13.625 33.375T683-341h-73q-33.875 0-56.938 23.681Q530-293.638 530-260v30q0 16.75-11.868 27.875Q506.263-191 489.632-191 473-191 461.5-202.125T450-230v-30q0-67 46.5-113.5T610-420h40v-406q0-16.475 11.868-28.237Q673.737-866 690.368-866 707-866 718.5-854.237 730-842.475 730-826v235q9-5 19.467-7 10.466-2 20.533-2h48q19.625 0 33.812 13.625Q866-572.75 866-553v177q-8 152.2-114.359 256.6Q645.282-15 495.033-15M540-347" />
  </Svg>
);
