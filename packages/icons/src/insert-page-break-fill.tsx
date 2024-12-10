import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgInsertPageBreakFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M229-55q-38.75 0-66.375-27.625T135-149v-97q0-19.75 13.625-33.375T182-293h596q19.75 0 33.875 13.625T826-246v97q0 38.75-28.125 66.375T731-55zm313-756v139q0 19.75 13.625 33.375T589-625h142zm-407 0q0-38.75 27.625-66.875T229-906h323q19.444 0 37.222 8Q607-890 620-877l179 179q13 13 20 28.778 7 15.778 7 34.222v80q0 20.75-14.125 34.375T778-507H182q-19.75 0-33.375-13.625T135-555zm256 458q-19.75 0-33.375-13.675Q344-380.351 344-400.175 344-420 357.625-433.5 371.25-447 391-447h178q19.75 0 33.375 13.675Q616-419.649 616-399.825 616-380 602.375-366.5 588.75-353 569-353zm332 0q-19.75 0-33.375-13.675Q676-380.351 676-400.175 676-420 689.625-433.5 703.25-447 723-447h167q19.75 0 33.375 13.675Q937-419.649 937-399.825 937-380 923.375-366.5 909.75-353 890-353zm-653 0q-19.75 0-33.375-13.675Q23-380.351 23-400.175 23-420 36.625-433.5 50.25-447 70-447h167q19.75 0 33.375 13.675Q284-419.649 284-399.825 284-380 270.375-366.5 256.75-353 237-353z" />
  </Svg>
);