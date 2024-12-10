import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSearchHandsFreeFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-55q-88 0-165-33.5T180-180q-58-58-91.5-135T55-480q0-88 33.5-165T180-780q58-58 135-92t165-34q88 0 165 34t135 92q58 58 92 135t34 165q0 88-34 165t-92 135q-58 58-135 91.5T480-55m-30-96v-145q-56-10-97-51t-57-97H153q13 117 96.5 199T450-151m60 0q118-11 201-93.5T808-444H664q-16 56-56.5 97T510-296zM153-516h147l78-83q13-14 31-21.5t37-7.5h68q19 0 37 7.5t32 21.5l77 83h148q-14-126-108-210.5T480-811q-126 0-220 84.5T153-516" />
  </Svg>
);
