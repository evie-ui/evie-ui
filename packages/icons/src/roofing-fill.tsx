import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgRoofingFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M112-469q-16.5 0-22.25-15T96-510l322-288q12.975-12.25 28.987-18.625Q463-823 480-823q17 0 33.013 6.375Q529.025-810.25 543-799l126 113v-58q0-19.75 13.625-33.375T716-791h8q19.75 0 33.375 13.625T771-744v151l94 83q12 11 5.816 26t-21.5 15h-43.263Q788-469 772-474.5q-16-5.5-29-17.5L480-728 217-492q-13 12-28.825 17.5t-33.887 5.5zm241 273v-160q0-19.75 13.625-33.375T400-403h160q19.75 0 33.375 13.625T607-356v160q0 19.75-13.625 33.375T560-149H400q-19.75 0-33.375-13.625T353-196" />
  </Svg>
);
