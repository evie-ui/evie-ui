import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSentimentNeutral = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M620-527q24.5 0 42.25-17.75T680-587q0-24.5-17.75-42.25T620-647q-24.5 0-41.75 17.397T561-587.353q0 24.853 17.208 42.603Q595.417-527 620-527m-280 0q24.5 0 41.75-17.397t17.25-42.25q0-24.853-17.208-42.603Q364.583-647 340-647q-24.5 0-42.25 17.75T280-587q0 24.5 17.75 42.25T340-527m45 194h192q13 0 21.5-8.79t8.5-22.233q0-13.444-8.2-21.71Q590.6-394 577-394H384q-13 0-21.5 8.174-8.5 8.173-8.5 21.617 0 13.443 8.783 22.326Q371.567-333 385-333m95.054 278Q392-55 314.5-88T179-179q-58-58-91-135.445-33-77.446-33-165.501Q55-568 88-645.5t90.843-135.553q57.843-58.052 135.362-91.5Q391.724-906 479.862-906t165.756 33.37q77.619 33.37 135.596 91.29 57.978 57.92 91.382 135.543Q906-568.173 906-479.917q0 88.193-33.447 165.677-33.448 77.483-91.5 135.362Q723-121 645.554-88q-77.445 33-165.5 33M480-149q138.375 0 234.688-96.312Q811-341.625 811-480t-96.312-234.688Q618.375-811 480-811t-234.688 96.312Q149-618.375 149-480t96.312 234.688Q341.625-149 480-149" />
  </Svg>
);
