import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHdrEnhancedSelect = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M479.941-409q-105.711 0-179.826-73.843T226-662.176q0-105.907 73.998-180.366Q373.995-917 479.706-917t180.502 74.203Q735-768.593 735-662.588q0 106.005-74.674 179.796Q585.652-409 479.941-409m.263-82Q551-491 601-541.057q50-50.056 50-121.647 0-71.59-50.204-121.443Q550.593-834 479.796-834 409-834 359-783.943q-50 50.056-50 121.647 0 71.59 50.204 121.443Q409.407-491 480.204-491M450-632v54q0 12.75 8.675 21.375 8.676 8.625 21.5 8.625 12.825 0 21.325-8.625T510-578v-54h54q12.75 0 21.375-8.675 8.625-8.676 8.625-21.5 0-12.825-8.625-21.325T564-692h-54v-54q0-12.75-8.675-21.375-8.676-8.625-21.5-8.625-12.825 0-21.325 8.625T450-746v54h-54q-12.75 0-21.375 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325T396-632zm381 478h-39q-13 0-21.5-8.79t-8.5-22.233q0-13.444 8.783-21.71Q779.567-215 793-215h38v-39q0-12.567 8.79-20.783Q848.58-283 862.023-283q13.01 0 20.994 8.483Q891-266.033 891-254v39h39q13 0 21.5 8.174 8.5 8.173 8.5 21.617 0 13.443-8.2 22.326Q943.6-154 930-154h-39v39q0 12.567-7.884 20.783Q875.233-86 862.233-86t-22.117-8.783Q831-103.567 831-117zM527-93v-192q0-12.567 8.5-20.783Q544-314 557-314h113q29.4 0 44.7 15.5Q730-283 730-255v46.834q0 19.03-9.5 32.598Q711-162 691-153l20 47q7 16-1.4 29.5T684.4-63q-10.4 0-17.9-5.5Q659-74 655-82l-21.589-56H586v46q0 12.567-8.184 20.783Q569.633-63 557.116-63 544.6-63 535.8-71.5 527-80 527-93m59-101h85v-61h-85zM59-171v79q0 12.567-8.184 20.783Q42.633-63 30.116-63 17.6-63 8.8-71.217 0-79.433 0-92v-193q0-12.567 8.474-20.783Q16.947-314 29.907-314q12.526 0 20.81 8.217Q59-297.567 59-285v60h82v-60q0-12.567 8.474-20.783Q157.947-314 170.907-314q12.526 0 20.81 8.217Q200-297.567 200-285v193q0 12.567-8.184 20.783Q183.633-63 171.116-63 158.6-63 149.8-71.5 141-80 141-93v-78zm204 78v-192q0-12.567 8.5-20.783Q280-314 293-314h110q29.4 0 44.2 15.5Q462-283 462-255v133q0 29.4-14.8 44.2Q432.4-63 403-63H293q-13 0-21.5-8.5T263-93m59-29h81v-133h-81z" />
  </Svg>
);
