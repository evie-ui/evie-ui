import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgCallSplitFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M229-665v52q0 19.75-13.675 33.375Q201.649-566 181.825-566 162-566 148.5-579.625 135-593.25 135-613v-165q0-19.75 13.625-33.875T182-826h165q19.75 0 33.375 14.175 13.625 14.176 13.625 34Q394-758 380.375-744.5 366.75-731 347-731h-51l205 205q13 13 20.5 30.778T529-459v276q0 20.75-13.675 34.375Q501.649-135 481.825-135 462-135 448.5-148.625 435-162.25 435-183v-276zm502 1L623-556q-13.8 14-33.4 14-19.6 0-33.6-14t-14.5-33.196Q541-608.391 555-622l108-109h-50q-19.75 0-33.375-13.675Q566-758.351 566-778.175 566-798 579.625-812 593.25-826 613-826h165q19.75 0 33.875 14.125T826-778v165q0 19.75-14.175 33.375-14.176 13.625-34 13.625Q758-566 744.5-579.625 731-593.25 731-613z" />
  </Svg>
);
