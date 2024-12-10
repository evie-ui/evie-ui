import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgWaterfallChartFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M147.941-135Q125-135 110-150.042 95-165.083 95-188v-210.351q0-21.566 15.059-37.107 15.059-15.542 38-15.542Q171-451 186.5-435.542 202-420.083 202-398v210q0 22.917-15.767 37.958Q170.466-135 147.941-135m166-276q-22.524 0-38.233-15.75Q260-442.5 260-465v-59q0-22.083 15.767-37.542Q291.534-577 314.059-577q22.524 0 38.233 15.458Q368-546.083 368-524v58.615q0 23.302-15.767 38.843Q336.466-411 313.941-411m167-206q-22.524 0-38.233-15.75Q427-648.5 427-671v-56.615q0-23.302 15.767-38.843Q458.534-782 481.059-782q22.524 0 38.233 15.75Q535-750.5 535-728v56.615q0 23.302-15.767 38.843Q503.466-617 480.941-617m165-80Q623-697 608-712.733q-15-15.733-15-38.208v-20q0-22.476 15.059-38.267 15.059-15.792 38-15.792Q669-825 684.5-809.267q15.5 15.733 15.5 38.208v20q0 22.476-15.767 38.267Q668.466-697 645.941-697m166 562q-22.524 0-38.233-15.042Q758-165.083 758-188v-583q0-22.5 15.767-38.25T812.059-825q22.524 0 38.233 15.75Q866-793.5 866-771v583q0 22.917-15.767 37.958Q834.466-135 811.941-135" />
  </Svg>
);
