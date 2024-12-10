import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHistoryEduFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M321-124q-39 0-66.5-28T227-219v-61q0-20 13.5-33.5T274-327h86v-127q-34 1-65-11t-59-34q-6-5-9-12t-3-15v-38h-28q-9 0-17-3.5T164-578l-94-95q-12-11-11-27.5T73-727q38-25 79-40.5t85-15.5q25 0 60 9t63 27v-14q0-32 22-54t53-22h336q40 0 67.5 27.5T866-742v487q0 54-38.5 92.5T735-124zm133-203h198q20 0 33.5 13.5T699-280v25q0 17 10 26.5t26 9.5q16 0 26-9.5t10-26.5v-487H454v59l204 204q9 9 10.5 20t-1.5 20q-4 9-12.5 16t-20.5 7q-8 0-14.5-2.5T607-427L506-529l-13 16q-10 12-19 18t-20 12zM209-635h39q20 0 33.5 13.5T295-588v44q15 10 30.5 15t31.5 5q23 0 47.5-13.5T438-562l15-17-64-65q-32-32-70.5-50T237-712q-25 0-44 6t-39 16z" />
  </Svg>
);