import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNestCamOutdoor = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M596.127-152.97Q570-122 530.5-118.5T460-140L272-297q-27.594-22.72-48.797-51.36Q202-377 188.043-409 175-398 159-392.5t-33 5.5H31v-368h95q30.824 0 55.912 18Q207-719 217-690q43-62 109.032-97.5T468-823q50.214 0 96.607 19T649-753l191 157q30 25 33.5 64.5T852-462zM247-523q0 47.358 19.477 88.458Q285.954-393.443 322-363l201 167 272-327-199-168q-28.761-23.927-63.856-36.463Q497.05-740 461-740q-90 1-151.949 64.182Q247.103-612.637 247-523m274 55" />
  </Svg>
);
