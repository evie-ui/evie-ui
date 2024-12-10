import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLockPersonFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M367-662h215v-70.769q0-47.981-31.397-80.106Q519.206-845 474.353-845 429-845 398-812.875q-31 32.125-31 80.106zM776-31q-80 0-136.5-56T583-224q0-81 56.5-137T776-417q81 0 137 56t56 137q0 81-56 137T776-31M586-57H224q-39.188 0-67.094-27.612Q129-112.225 129-151v-416q0-39.188 27.906-67.094Q184.812-662 224-662h49v-71q0-86.435 58.366-146.718Q389.731-940 473.866-940 558-940 617-879.718 676-819.435 676-733v71h49q39.188 0 67.094 27.906Q820-606.188 820-567v93q-13.5-1.5-28-2.75t-29-.25q-102 4-171 77.5T523-224q0 47.306 16.5 89.653Q556-92 586-57m190-177q27.917 0 47.458-19.559Q843-273.118 843-301.059T823.458-348Q803.917-367 776-367q-27.5 0-46.75 19.353t-19.25 47Q710-273 729.25-253.5T776-234m-.214 133Q809-101 838-116.5t47-42.5q-25-14-52.329-22.5T776-190q-28 0-55.5 8.5T667-159q18 27 46.786 42.5 28.785 15.5 62 15.5" />
  </Svg>
);
