import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgNotificationAddFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M481-46q-36.95 0-62.975-26.231Q392-98.463 392-135h177q0 37-26.231 63Q516.537-46 481-46M206-269v-279q0-93 53-168.5T403-812v-16q0-32.583 22.708-55.292Q448.417-906 480-906q31.583 0 54.292 22.708Q557-860.583 557-828v16.364q22 3.636 40.816 12.179Q616.633-790.913 635-779q-39 35-59.5 81.674-20.5 46.675-20.5 97.184Q555-511 611.5-445T755-365v96h23q19.75 0 33.875 13.675Q826-241.649 826-221.825 826-202 811.875-188.5 797.75-175 778-175H182q-19.75 0-33.375-13.675Q135-202.351 135-222.175 135-242 148.625-255.5 162.25-269 182-269zm558-295h-88q-15.15 0-25.575-9.975Q640-583.951 640-600.175q0-16.225 9.925-26.025Q659.85-636 676-636h88v-88q0-15.15 9.975-25.575Q783.951-760 800.175-760q16.225 0 26.025 9.925Q836-740.15 836-724v88h88q15.15 0 25.575 9.975Q960-616.049 960-599.825q0 16.225-9.925 26.025Q940.15-564 924-564h-88v88q0 15.15-9.975 25.575Q816.049-440 799.825-440q-16.225 0-26.025-9.925Q764-459.85 764-476z" />
  </Svg>
);
