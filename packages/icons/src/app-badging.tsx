import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgAppBadging = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M55-479.862Q55-569 88.084-646.487q33.083-77.488 90.844-134.929 57.761-57.441 135.169-91.013Q391.505-906 479.255-906q37.87 0 73.321 6 35.45 6 69.424 18-23 15-40.5 35.5T553-801q-18.049-6.4-36.11-8.2Q498.829-811 480-811q-138.256 0-234.628 96.5Q149-618 149-479.5q0 137.5 96.372 234T480-149q138 0 234.5-96.372T811-480q0-18.829-1.8-36.89T801-553q25-11 45.5-28.5T882-622q12 33.974 18 69.424 6 35.451 6 73.321 0 87.75-33.571 165.158-33.572 77.408-91.013 135.169-57.441 57.761-134.791 90.844Q569.276-55 480.138-55 392-55 314.513-88.084q-77.488-33.083-135.417-91.012T88.084-314.375Q55-391.724 55-479.862M719.647-593q-52.23 0-89.439-37.355Q593-667.711 593-719.647q0-52.936 37.355-90.145Q667.711-847 719.647-847q52.936 0 90.145 37.061Q847-772.877 847-719.647q0 52.23-37.061 89.439Q772.877-593 719.647-593" />
  </Svg>
);
