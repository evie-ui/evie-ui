import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFlaky = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480.5-55Q390-55 312.013-87.584q-77.988-32.583-134.917-89.512T87.584-312.013Q55-390 55-480.5q0-89.5 32.347-167.05 32.347-77.551 89.512-134.917 57.166-57.366 135.154-90.449Q390-906 480.5-906q89.5 0 167.106 32.954 77.605 32.953 135.012 90.302 57.407 57.349 90.395 134.877Q906-570.34 906-480q0 90-33.084 167.987-33.083 77.988-90.449 135.154-57.366 57.165-134.917 89.512Q570-55 480.5-55M350-567l34 35q9.909 9 22.455 9 12.545 0 22.045-9 9.5-9 9.5-21.941 0-12.941-9-23.059l-36-33 35-34q9-9.909 9-22.455 0-12.545-9-22.045-9-9.5-21.574-9.5-12.573 0-22.426 9l-34 36-34-35q-9.909-9-22.455-9-12.545 0-22.045 9-9.5 9-9.5 21.574 0 12.573 10 22.426l35 34-35 34q-9 9.909-9 22.455 0 12.545 9 22.045 9 9.5 21.941 9.5 12.941 0 23.059-10zm129.5 418q141.562 0 236.531-94.377Q811-337.753 811-480q0-71.363-24.936-131.144Q761.128-670.925 716-716L244-244q45.407 45.128 105.306 70.064Q409.206-149 479.5-149M562-342l79-79q9-9 21-8.5t21 10q9 9.5 9 21.545 0 12.046-9 21.955l-87 87q-14.727 15-34.364 15Q542-274 528-289l-42-42q-10-9.925-10-21.992t10-21.537Q495.471-384 508.044-384q12.574 0 21.956 9z" />
  </Svg>
);
