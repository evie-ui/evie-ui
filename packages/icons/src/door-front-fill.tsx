import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDoorFrontFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M142-95q-19.75 0-33.375-13.675Q95-122.351 95-142.175 95-162 108.625-175.5 122.25-189 142-189h33v-582q0-39.463 27.475-67.231Q229.95-866 269-866h422q39.463 0 67.231 27.769Q786-810.463 786-771v582h32q19.625 0 33.812 13.675Q866-161.649 866-141.825 866-122 851.812-108.5 837.625-95 818-95zm425-354q14.45 0 24.225-9.775Q601-468.55 601-483q0-14.45-9.775-24.225Q581.45-517 567-517q-14.45 0-24.225 9.775Q533-497.45 533-483q0 14.45 9.775 24.225Q552.55-449 567-449" />
  </Svg>
);
