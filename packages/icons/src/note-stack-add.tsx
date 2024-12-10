import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgNoteStackAdd = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M279-149v-437q0-40.101 27-68.051Q333-682 372-682h439q40.213 0 67.606 27.394Q906-627.213 906-587v285q0 19.2-8 36.6-8 17.4-21 31.4L726-83q-14 13-31.4 20.5T658-55H373q-39.8 0-66.9-27.1Q279-109.2 279-149M56-718q-7-39 15.324-70.458Q93.648-819.915 133-827l431-76q39-7 70.907 14.824Q666.814-866.352 674-827l14 85h-86l-14.143-77L141-741l78 442v91q-33-3-56.404-24.051Q139.192-253.102 133-287zm310 123v453h289l164-163v-290zm179 274v42q0 19.75 13.675 33.375Q572.351-232 592.175-232 612-232 625.5-245.625 639-259.25 639-279v-42h42q19.625 0 33.812-13.675Q729-348.351 729-368.175 729-388 714.812-401.5 700.625-415 681-415h-42v-42q0-19.625-13.675-33.812Q611.649-505 591.825-505 572-505 558.5-490.812 545-476.625 545-457v42h-42q-19.75 0-33.375 13.675Q456-387.649 456-367.825 456-348 469.625-334.5 483.25-321 503-321z" />
  </Svg>
);
