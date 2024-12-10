import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgHive = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M314.538-186H234q-25.571 0-47.132-12.488Q165.307-210.976 152-234l-43-77q-12-20.5-12-45.75T109-403l43-77-43-77q-12-20.5-12-45.75T109-649l43-77q13.307-23.024 34.868-35.512T234-774h80.538L358-850q12.021-21.902 33.349-34.451Q412.678-897 439-897h82q26.322 0 47.651 12.549Q589.979-871.902 603-850l42.577 76H726q25.571 0 47.132 12.488Q794.693-749.024 808-726l44 77q11 20.5 11 45.75T851-557l-42 77 42 77q12 20.5 12 45.75T852-311l-44 77q-13.307 23.024-34.868 35.512T726-186h-80.423L603-110q-13.021 21.902-34.349 34.451Q547.322-63 521-63h-82q-26.322 0-47.651-12.549Q370.021-88.098 358-110zm333.897-340H727l45-77-45.385-77H648l-45 77zM441.209-405H520l45-75-45.209-75H441l-45 75zm-1.332-244H520l44-77-44.26-77H440l-44 77zM359-603l-45.462-77H235l-45 77 45.462 77H314zm0 246-46.435-77H234l-45 77 46.462 77H314zm81 46-44 77 44.26 77H520l44-77-43.877-77zm208.462 31H727l45-77-45.462-77H648l-42 77z" />
  </Svg>
);