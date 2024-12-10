import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPetSuppliesFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M368-55q-61 0-105.5-38.554Q218-132.107 218-193v-25h-25q-60.893 0-99.446-44.5Q55-307 55-368q0-65 43-108.5T206-520q32.59 0 57.577 12 24.987 12 38.423 21l171-172q-8-12-20-37.123-12-25.123-12-57.877 0-65 43-108.5T592-906q61 0 105.5 38.843T742-767v13.447Q742-743 743-743q0 1 10.553 1H767q61.314 0 100.157 44.5Q906-653 906-592q0 65-43.5 108T754-441q-32.754 0-57.877-12Q671-465 659-473L487-302q9 13.436 21 38.423Q520-238.59 520-206q0 65-43.5 108T368-55" />
  </Svg>
);
