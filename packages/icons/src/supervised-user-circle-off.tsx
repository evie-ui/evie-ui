import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgSupervisedUserCircleOff = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M481.052-55q-87.456 0-165.254-33.5Q238-122 180.5-180T89-315.057q-34-77.057-34-164.79 0-71.182 22.485-135.271Q99.97-679.208 139-732l-84.919-84.667Q44-826.889 44-841.444 44-856 55.105-867q10.685-11 25.5-11 14.816 0 25.395 11l761 762q10 10.182 10.5 24.59Q878-66 866.895-55q-11.106 11-25 11Q828-44 816.92-55.108L733-139q-54 40-117.485 62-63.486 22-134.463 22M424-153q29.569-55.791 73.358-87.764Q541.146-272.736 584-287L206.23-665q-26.844 39.111-41.537 85.825Q150-532.46 150-481q0 49.937 15 96.469Q180-338 204-301q40-21 83.3-32t90.118-11q27.582 0 54.082 4t48.5 14q-15 11-29 21t-26 22q-15-2-26-2h-22.089q-37.317 0-72.114 7.617Q270-269.767 238-252.533 274-214 322.819-187.5 371.637-161 424-153m407-89-70-70q20-33 35.5-76.283Q812-431.567 812-481q0-138-96.5-234T481-811q-48 0-91.115 12.625Q346.769-785.75 310-762l-68-69q50.873-35.061 111.559-55.03Q414.246-906 481-906q86.524 0 164.262 34T780.5-780Q838-722 872-645.037T906-480q0 65.645-19.5 126.323Q867-293 831-242M505-567 387-685q50-3 85 33t33 85M377-422q-56.414 0-95.707-39Q242-500 242-557q0-35.125 16-65.062Q274-652 302-670l188 188q-18 28-47.938 44-29.937 16-65.062 16m309 35L576-496q3-35 30.012-61 27.011-26 63.988-26 43.32 0 73.16 29.84Q773-523.32 773-480q0 36.977-26 63.988Q721-389 686-387m-251-49" />
  </Svg>
);