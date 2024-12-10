import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgEndocrinology = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M395-268q19 0 32-13t13-32q0-38-24-75.5T350-458v145q0 19 13.5 32t31.5 13m170 0q18 0 31.5-13t13.5-32v-145q-42 32-66 69.5T520-313q0 19 13 32t32 13m-431-51v-475q-11-13-20-28l-18-30q-8-14-1-30t24-23q16-8 33.5-1t26.5 22q49 84 128 131.5T480-705q93 0 172-46.5T780-880q10-17 27-25t34 0q17 7 23.5 24t-2.5 33q-8 14-17 27.5T826-794v475q0 32 16 60t44 47q14 11 19 28t1 33q-6 16-20.5 24t-28.5 0q-53-29-85.5-77.5T739-319v-389q-55 43-121 66.5T480-618q-72 0-137.5-23T221-708v389q0 59-32 109t-84 81q-15 9-31 2t-21-24q-6-16 1-33t21-28q28-20 43.5-48t15.5-59m261 131q-52 0-88-36t-36-89v-210q0-18 13.5-29t30.5-6l16 4q48 12 86 40.5t63 68.5q25-40 63-68.5t86-40.5l16-4q17-5 30.5 6t13.5 29v210q0 53-36 89t-88 36q-25 0-46.5-9T480-223q-17 17-38.5 26t-46.5 9m0-125" />
  </Svg>
);