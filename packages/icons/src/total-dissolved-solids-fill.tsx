import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgTotalDissolvedSolidsFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M141-468q25-120 122-230.5T448-886q13-12 32-12t32 12q88 77 185 187.5T819-468zm687 10q7 44 .5 86T803-293L585-75q-37 18-78.5 24T422-52zm-267 50h121L351-77q-22-7-41.5-17.5T272-119zm-218 0h121L222-168q-15-15-27-33t-22-37zm-217 0h120l-97 97q-9-22-13.5-46.5T126-408" />
  </Svg>
);
