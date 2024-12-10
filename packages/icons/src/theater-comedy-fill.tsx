import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgTheaterComedyFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M274.471-34q-106.412 0-181.942-77.75Q17-189.5 17-292v-196q0-38.75 27.625-66.375T111-582h327q38.75 0 66.375 27.625T532-488v196q0 102.5-75.309 180.25T274.471-34m-85.576-324Q205-358 216-368.218q11-10.217 11-26.3 0-16.082-10.895-27.282-10.894-11.2-27-11.2Q173-433 162-422.075T151-395q0 16.575 10.895 26.788 10.894 10.212 27 10.212m173 0Q378-358 389-368.218q11-10.217 11-26.3 0-16.082-10.895-27.282-10.894-11.2-27-11.2Q346-433 335-422.075T324-395q0 16.575 10.895 26.788 10.894 10.212 27 10.212M686-379q-27.364 0-53.682-6.5T582-403.976V-489q0-58.417-41.5-100.208Q499-631 441-631h-15v-201q0-40.213 27.625-67.606Q481.25-927 520-927h329q38.75 0 66.375 27.394Q943-872.213 943-832v205q0 101.917-75.292 174.958Q792.417-379 686-379m-85.105-314Q617-693 628-704.3t11-26.7q0-16.575-10.895-27.287-10.894-10.713-27-10.713Q585-769 574-758.07t-11 27.088Q563-716 573.895-704.5q10.894 11.5 27 11.5m172 0Q789-693 800-704.3t11-26.7q0-16.575-10.895-27.287-10.894-10.713-27-10.713Q757-769 746-758.07t-11 27.088Q735-716 745.895-704.5q10.894 11.5 27 11.5M686-623q-26 0-51.5 7.5t-42.794 27.222Q583-577 591.5-565q8.5 12 24.357 12h140.286Q772-553 780.5-565t-.206-23.278Q763-608 737.5-615.5 712-623 686-623M277.082-208q27.766 0 53.561-7.565T372-244q7-10.667-1.5-22.333Q362-278 346.442-278H207.558Q192-278 183.5-266.333 175-254.667 182-244q15.727 20.87 41.522 28.435Q249.317-208 277.082-208" />
  </Svg>
);
