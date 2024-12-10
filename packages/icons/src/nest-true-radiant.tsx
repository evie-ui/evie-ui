import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgNestTrueRadiant = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M226-103q-55 0-93.5-38.208Q94-179.417 94-234v-376q0-19.75 13.675-33.375Q121.351-657 141.175-657 161-657 174.5-643.375 188-629.75 188-610v376q0 15.725 11.188 26.363Q210.375-197 226.07-197q16.57 0 26.75-10.637Q263-218.275 263-234v-491q0-55 38.706-93.5t94-38.5Q451-857 489-818.5t38 93.5v491q0 15.725 11.188 26.363Q549.375-197 565.07-197q16.57 0 26.75-10.637Q602-218.275 602-234v-491q0-55 38.706-93.5t94-38.5Q790-857 828-818.5t38 93.5v375q0 19.75-13.675 33.375Q838.649-303 818.825-303 799-303 785.5-316.625 772-330.25 772-350v-375q0-15.625-10.617-26.812Q750.765-763 735.07-763q-16.57 0-27.32 11.188Q697-740.625 697-725v491q0 54.583-38.5 92.792Q620-103 565-103t-93.5-38.208Q433-179.417 433-234v-491q0-15.625-10.617-26.812Q411.765-763 396.07-763q-16.57 0-27.32 11.188Q358-740.625 358-725v491q0 54.583-38.5 92.792Q281-103 226-103" />
  </Svg>
);
