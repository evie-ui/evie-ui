import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgToolsLadderFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M224-103q-23 0-36-17.5t-6-40.5l184-663q4-15 16-24t27-9q23 0 36.5 17.5T453-800l-20 73h230l28-97q4-15 16.5-24t27.5-9q23 0 36 17.5t7 39.5L595-137q-4 16-16.5 25t-27.5 9q-23 0-36.5-17.5T508-161l18-72H297l-28 96q-4 16-17 25t-28 9m154-424h230l30-106H408zm-56 200h231l30-106H351z" />
  </Svg>
);
