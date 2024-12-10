import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNotificationMultipleFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M121-92q-39.05 0-66.525-27.475Q27-146.95 27-186v-475q0-20 13.5-33.5T74-708q20 0 33.5 13.5T121-661v475h524q20 0 33.5 13.5T692-139q0 20-13.5 33.5T645-92zm144-154q-34.113 0-59.056-24.444Q181-294.888 181-329v-359q0-33 13.5-58.5T233-785l324-182 76 34-60 66-16-4-288 165 288 178 289-178-38-21 64-64 10 6q28 18.429 39.5 41.214Q933-721 933-688v359q0 34.112-24.65 58.556Q883.7-246 850-246zm288-444 207-207q9-9 21-8.5t21 9.5q9 9 9 21.5t-9 21.5L587-638q-14.364 14-34.182 14T519-638l-61-61q-9-9-8.5-21.5T459-742q9-9 21.5-9t21.5 9z" />
  </Svg>
);
