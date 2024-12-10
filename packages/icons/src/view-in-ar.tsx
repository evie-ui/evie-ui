import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgViewInAr = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M431-160 234-276q-21.775-13.426-33.887-35.42Q188-333.414 188-358v-231q0-24.586 12.113-46.58Q212.225-657.574 234-671l198-119q22-13 48-13t48 13l198 119q21.775 13.426 33.888 35.42Q772-613.586 772-589v231q0 24.586-12.375 46.58T725-276L525-160q-22.328 14-47.164 14Q453-146 431-160m19-99v-197.3L283-553v192.35zm60 0 168-101.65V-553l-168 96.7zM96.333-652Q79-652 67-663.438 55-674.875 55-693v-118q0-40.213 27.1-67.606Q109.2-906 149-906h118q17.75 0 29.875 12.181T309-863.632Q309-846 296.875-834T267-822H138v129q0 18.125-11.979 29.562Q114.042-652 96.333-652M149-55q-39.8 0-66.9-27.1Q55-109.2 55-149v-118q0-17.75 12.175-29.875Q79.351-309 96.685-309q17.333 0 29.324 12.125Q138-284.75 138-267v129h129q17.75 0 29.875 11.979T309-96.333Q309-79 296.875-67T267-55zm662 0H693q-18.125 0-29.562-12.175Q652-79.351 652-96.685q0-17.333 11.438-29.324Q674.875-138 693-138h129v-129q0-17.75 12.175-29.875Q846.351-309 863.982-309q17.632 0 29.825 12.125Q906-284.75 906-267v118q0 39.8-27.394 66.9Q851.213-55 811-55m11-638v-129H693q-18.125 0-29.562-12.175Q652-846.351 652-863.982q0-17.632 11.438-29.825Q674.875-906 693-906h118q40.213 0 67.606 27.394Q906-851.213 906-811v118q0 18.125-12.181 29.562Q881.638-652 863.632-652 846-652 834-663.438 822-674.875 822-693M480-511l168-97-168-97-168 97zm-30 55" />
  </Svg>
);
