import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTapas = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M279.825-40Q263.6-40 253.8-49.925 244-59.85 244-76v-303h-94q-40.74 0-68.87-28.387Q53-435.775 53-476.887 53-518 81.13-546T150-574h94v-63h-94q-40.74 0-68.87-28.387Q53-693.775 53-734.887 53-776 81.13-804T150-832h94v-52q0-15.3 9.975-25.65 9.976-10.35 26.2-10.35 16.225 0 26.025 9.925Q316-900.15 316-884v52h94q41.16 0 69.58 28.183t28.42 69Q508-694 479.58-665.5 451.16-637 410-637h-94v63h94q41.16 0 69.58 28.183t28.42 69Q508-436 479.58-407.5 451.16-379 410-379h-94v303q0 15.3-9.975 25.65Q296.049-40 279.825-40M150-439h260q16 0 27-11t11-27q0-16-11-26.5T410-514H150q-16 0-26.5 10.5T113-477q0 16 10.5 27t26.5 11m0-258h260q16 0 27-11t11-27q0-16-11-26.5T410-772H150q-16 0-26.5 10.5T113-735q0 16 10.5 27t26.5 11m534 586v-289q-57-11-93.5-56.582Q554-502.165 554-559.565V-873q0-19.75 13.625-33.375T601-920h238q19.75 0 33.375 13.625T886-873v313.435q0 57.4-36.5 102.983Q813-411 756-400v289h55q14.875 0 24.938 10.088Q846-90.825 846-75.912 846-61 835.938-50.5 825.875-40 811-40H629q-14.875 0-24.938-10.37Q594-60.74 594-76.07q0-14.905 10.35-24.918Q614.7-111 630-111zm36.212-355Q759-466 786.5-493.65T814-560v-89H626v89q0 38.7 27.712 66.35 27.713 27.65 66.5 27.65M626-700h188v-149H626zM113-439v-75zm0-258v-75zm607 48" />
  </Svg>
);
