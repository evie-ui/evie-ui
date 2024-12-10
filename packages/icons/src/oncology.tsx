import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgOncology = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M86-341q0-47.833 33.083-80.917Q152.167-455 200-455h115q63 0 80.5-15.5T413-515q0-36-19.25-57T346-593q-24.75 0-42.375-17.625T286-653v-197q0-19.75 13.675-33.375Q313.351-897 333.175-897 353-897 366.5-883.375 380-869.75 380-850v164l-1 1.5q-1 1.5 1 1.5 58 6 93 54t35 114q0 68-45 111.5T315-360H200q-9.25 0-14.625 5.375T180-340v230q0 19.75-13.675 33.375Q152.649-63 132.825-63 113-63 99.5-76.625 86-90.25 86-110zm294-345v-211zl-1 1.5q-1 1.5 1 1.5 58 6 93 54t35 114q0 68-45 111.5T315-360H200q-9.25 0-14.625 5.375T180-340v277-277q0-9.25 5.375-14.625T200-360h115q103 0 148-43.5T508-515q0-66-35-114t-93-54q-2 0-1-1.5zm495 277q-19-24-43.103-42.516T780-479v-34q0-80-53.5-140T595-713q-38.75 0-66.875-27.625T500-807v-43q0-19.75 13.675-33.375Q527.351-897 547.175-897 567-897 581-883.375 595-869.75 595-850v43q115 7 197.5 92.5T875-513zM395-158v48q0 19.75-14.175 33.375Q366.649-63 346.825-63 327-63 313.5-76.625 300-90.25 300-110v-48q0-46.833 33.083-80.417Q366.167-272 415-272h52q-1 25 3.5 48.415Q475-200.169 485-178h-70q-9.25 0-14.625 5.875T395-158m303-34q30 0 50.5-20.5T769-264q0-30-20.5-50.5T698-335q-31 0-51.5 20.5T626-264q0 31 20.5 51.5T698-192m0 79q-63 0-107-44t-44-107q0-63 44-106.5T698-414q63 0 106.5 43.5T848-264q0 22.078-5.5 41.039Q837-204 826-187l79 80q12 12 12 27.5T905-52q-12 12-27.5 12T850-52l-80-79q-15 9-33.818 13.5Q717.365-113 698-113" />
  </Svg>
);
