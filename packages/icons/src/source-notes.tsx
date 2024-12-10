import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgSourceNotes = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M720-8q-42.579 0-79.789-16.5Q603-41 577-69q-13-11-13.5-27.647t10.5-29Q588-142 610.5-142t41.5 12q12 13 29.712 20.5T720-102q50.129 0 85.564-35.436Q841-172.871 841-223q0-50.486-35.5-85.243T720-343q-23.203 0-41.601 7Q660-329 647-317h7q17 3 28.5 15.867Q694-288.267 694-270q0 19.4-14.083 33.2Q665.833-223 646-223H535q-19.75 0-33.375-13.625T488-270v-112q0-19.4 13.5-33.2 13.5-13.8 34-13.8 16.5 0 29 10.5T581-393v7q26-23.912 62-37.956Q679-438 720-438q89.925 0 152.463 62.553Q935-312.894 935-223.442q0 89.453-62.537 152.447Q809.925-8 720-8M189-187v-582zm452-422q12.75 0 21.375-8.675 8.625-8.676 8.625-21.5 0-12.825-8.625-21.325T641-669H319q-12.75 0-21.375 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325T319-609zm-56 101H319q-12.75 0-21.375 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325T319-448h180q18.454-17.723 40.138-32.862Q560.821-496 585-508M432-347H319q-12.75 0-21.375 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325T319-287h94q3-16 7.632-30.415Q425.263-331.831 432-347M189-92q-38.775 0-66.388-27.906Q95-147.812 95-187v-582q0-38.775 27.612-66.387Q150.225-863 189-863h582q39.188 0 67.094 27.613Q866-807.775 866-769v267q-21.746-11.737-45.873-19.368Q796-529 771-533.029V-769H189v582h221q1 26 7 49t16 46z" />
  </Svg>
);
