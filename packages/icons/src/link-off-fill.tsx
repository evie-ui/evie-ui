import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLinkOffFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m766-277-74-72q48-9 84-44.6t36-83.4q0-54.333-37.833-92.667Q736.333-608 682-608H577q-19.75 0-33.375-13.675Q530-635.351 530-655.175 530-675 543.625-689 557.25-703 577-703h104q94 0 159.5 66T906-477q0 65-40 119t-100 81M608-433l-79-80h69q19.75 0 33.875 13.625T646-466q0 13-8 22.5T619-433zM824-83q-11 12-25.5 12T773-83L80-774q-11-11-11.5-25.5T80-825q11-12 25-12t26 12l693 693q11 11 11 24.5T824-83M279-255q-94 0-159.5-65.5T54-480q0-73 42-131.5T207-693l81 82h-9q-54.333 0-92.667 37.765-38.333 37.764-38.333 93Q148-425 186.333-387q38.334 38 92.667 38h112q19.75 0 33.375 13.675Q438-321.649 438-301.825 438-282 424.375-268.5 410.75-255 391-255zm72-189q-15.75 0-25.875-10.175-10.125-10.176-10.125-26Q315-496 325.125-506T351-516h40l72 72z" />
  </Svg>
);