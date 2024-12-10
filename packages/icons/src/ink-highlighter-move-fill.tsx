import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgInkHighlighterMoveFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M583.544-846H285.228q-13.097 0-21.662-8.5Q255-863 255-876q0-12 8.566-21 8.565-9 21.662-9H644zM424-686H165.346q-13.147 0-21.746-8.5Q135-703 135-716q0-12 8.574-21t21.683-9H484zM264-526H45.419q-13.178 0-21.799-8.5Q15-543 15-556q0-12 8.585-21t21.71-9H324zm156-70 246 246-215 215q-28 28-77 28t-77-28l-10-9-36.9 36.6q-7.1 6.4-15.361 9.9Q226.478-94 217-94h-79q-15.25 0-21.125-15T122-135l87-86-2-3q-32-31.455-32-79.727Q175-352 207-384zm44-44 210-211q28.182-28 68.091-28Q782-879 810-851l108 109q28 28.182 27.5 70.591Q945-629 917-601L709-394z" />
  </Svg>
);
