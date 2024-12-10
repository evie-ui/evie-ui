import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgWrapText = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M181-448q-19.75 0-32.875-13.675Q135-475.351 135-495.175 135-515 148.625-528 162.25-541 182-541h505q74 0 126.5 52T866-363q0 75-52.5 128T687-182h-88l30 28q5 13 2.125 26.786-2.875 13.785-13.125 24Q603-88 581.5-87 560-86 546-100l-95-97q-7-6-11-15.133-4-9.134-4-18 0-9.867 4-18.367t11-15.5l97-98q14.8-15 34.9-13 20.1 2 36.1 16.842 10.25 10.842 12.625 24T630-308l-31 31h88q35.214 0 60.107-25T772-363.152q0-35.151-24.893-60Q722.214-448 687-448zm1 266q-19.75 0-33.375-13.675Q135-209.351 135-229.175 135-249 148.625-263 162.25-277 182-277h130q19.75 0 33.375 14.175 13.625 14.176 13.625 34Q359-209 345.375-195.5 331.75-182 312-182zm-1-529q-19.75 0-32.875-13.675Q135-738.351 135-759.175 135-779 148.625-792 162.25-805 182-805h597q19.75 0 33.375 13.175 13.625 13.176 13.625 33Q826-738 811.875-724.5 797.75-711 778-711z" />
  </Svg>
);
