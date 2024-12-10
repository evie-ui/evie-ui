import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSentimentWorried = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M452-233h56q58.333 0 99.167-37.059 40.833-37.059 40.833-90T607-450.5Q566-488 508-488h-56q-58 0-98.5 37.265-40.5 37.264-40.5 90.5Q313-307 353.5-270t98.5 37m-.483-75q-26.35 0-44.934-15.235-18.583-15.236-18.583-37Q388-382 406.583-397.5q18.584-15.5 44.934-15.5h56.966q26.35 0 45.434 15.441Q573-382.118 573-360.059 573-338 553.917-323q-19.084 15-45.434 15zM320-553q44.615 0 79.307-27.77Q434-608.539 443-653q3-13.613-7-24.306Q426-688 409.75-688 396-688 384-679.5T366-658q-7.33 12.895-19.058 21.447Q335.214-628 320.358-628H278q-16.467 0-27.233 10.674-10.767 10.675-10.767 27Q240-574 250.767-563.5 261.533-553 278-553zm320 0h43q15.333 0 26.167-10.477Q720-573.953 720-589.977 720-606 709.167-617 698.333-628 683-628h-42.83q-15.035 0-26.904-9.053Q601.396-646.105 594-660q-6-12-17.793-20T550-688q-16.586 0-26.793 10.5T516-652.226Q526-608 560.385-580.5 594.771-553 640-553M480.054-55Q392-55 314.5-88T179-179q-58-58-91-135.445-33-77.446-33-165.501Q55-568 88-645.5t90.843-135.553q57.843-58.052 135.362-91.5Q391.724-906 479.862-906t165.756 33.37q77.619 33.37 135.596 91.29 57.978 57.92 91.382 135.543Q906-568.173 906-479.917q0 88.193-33.447 165.677-33.448 77.483-91.5 135.362Q723-121 645.554-88q-77.445 33-165.5 33M480-149q138.375 0 234.688-96.312Q811-341.625 811-480t-96.312-234.688Q618.375-811 480-811t-234.688 96.312Q149-618.375 149-480t96.312 234.688Q341.625-149 480-149" />
  </Svg>
);
