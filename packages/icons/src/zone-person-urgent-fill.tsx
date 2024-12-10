import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgZonePersonUrgentFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M55-775v-76q0-39.463 27.475-67.231Q109.95-946 149-946h76q19.75 0 33.375 14.263t13.625 34Q272-878 258.375-864.5 244.75-851 225-851h-76v76q0 19.75-13.675 33.375Q121.649-728 101.825-728 82-728 68.5-741.625 55-755.25 55-775m94 680q-39.05 0-66.525-27.475Q55-149.95 55-189v-76q0-19.75 13.675-33.375Q82.351-312 102.175-312 122-312 135.5-298.375 149-284.75 149-265v76h76q19.75 0 33.375 13.675Q272-161.649 272-141.825 272-122 258.375-108.5 244.75-95 225-95zm662-680v-76h-76q-19.75 0-33.375-13.675Q688-878.351 688-898.088q0-19.737 13.625-33.824Q715.25-946 735-946h76q39.463 0 67.231 27.769Q906-890.463 906-851v76q0 19.75-14.263 33.375t-34 13.625Q838-728 824.5-741.625 811-755.25 811-775M537.619-645Q502-645 477.5-669.88 453-694.761 453-730.381 453-766 477.42-790.5q24.421-24.5 60.04-24.5 35.62 0 60.08 24.539T622-730.08q0 35.43-24.38 60.255Q573.239-645 537.619-645M342-277l42-216-80 39v89q0 17.75-12.167 29.375Q279.667-324 262.333-324 245-324 233-336.125T221-366v-112q0-15.398 7.875-27.254Q236.75-517.111 251-523l147.673-58.707q34.654-14.183 48.99-18.738Q462-605 475.4-605q23.6 0 41.6 11t30 30l44 67q14 22 34.5 42.5T670-422l-41 71q-21-12-42.114-31.607Q565.773-402.214 546-429l-37 152zM610-55q-27 0-41-24t0-47l160-280q12-26 40-23.5t43 23.5l160 280q13 24-1.25 47.5T930-55zm160-38q11 0 18.5-7.929 7.5-7.928 7.5-18.5Q796-130 788.5-138q-7.5-8-18.5-8t-18.5 8.1q-7.5 8.1-7.5 18.9 0 10.4 7.5 18.2Q759-93 770-93m0-89q11 0 18.5-7.8T796-208v-119q0-10.4-7.5-18.2Q781-353 770-353t-18.5 7.8q-7.5 7.8-7.5 18.2v119q0 10.4 7.5 18.2Q759-182 770-182" />
  </Svg>
);
