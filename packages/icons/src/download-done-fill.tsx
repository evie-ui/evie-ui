import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDownloadDoneFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m380-470 344-344q14.4-14 33.7-13.5 19.3.5 33.3 14.447 14 13.948 14 33Q805-761 791-747L414-369q-14.364 14-34.182 14T346-369L169-547q-14-13.933-14-32.967Q155-599 168.842-613t33.3-14Q221.6-627 236-613zM222-135q-19.75 0-33.375-13.675Q175-162.351 175-182.175 175-202 188.625-215.5 202.25-229 222-229h516q19.625 0 33.812 13.675Q786-201.649 786-181.825 786-162 771.812-148.5 757.625-135 738-135z" />
  </Svg>
);
