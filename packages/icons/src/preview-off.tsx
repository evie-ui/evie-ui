import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgPreviewOff = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-285q-80 0-143-43t-92-112q19-48 57.5-83.5T390-578l40 40q-41 9-75 35t-55 63q27 49 75 77t105 28q32 0 62-9t56-27l34 35q-32 24-70.5 37.5T480-285m196-94-35-35q5-5 9.5-12t9.5-14q-22-40-59-65t-83-31l-57-57q82-8 151.5 33.5T715-440q-8 17-18 32.5T676-379M189-95q-39 0-66.5-27.5T95-189v-583l-19-20q-11-10-10.5-25T76-842q11-11 25.5-11t25.5 11l726 726q10 11 10.5 25.5T853-65q-10 11-25.5 10.5T802-65l-30-30zm0-94h489L189-679zm677 0-86-85v-414H367L189-866h582q39 0 67 28t28 67z" />
  </Svg>
);
