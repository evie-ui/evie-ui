import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHomeImprovementAndTools = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M479.889-53Q471-53 462.55-56.545 454.1-60.091 447-67l-81-81q-13.087-13.232-20.543-30.402Q338-195.571 338-215v-468L236-829q-17-24-4.681-49.5Q243.638-904 273-904h414q29.362 0 41.681 25.5Q741-853 725-829L623-683v468q0 19-8 36.5T594-148l-81 81q-7.167 6.91-15.694 10.455Q488.778-53 479.889-53M432-541h96v-178l63-91H369l63 91zm96 60h-96v118h96zm0 261v-83h-96v83l48 48zm-48-83" />
  </Svg>
);
