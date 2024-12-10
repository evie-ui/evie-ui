import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPattern = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M215-137q-32.825 0-55.413-22.541Q137-182.081 137-214.381q0-32.699 22.587-55.159Q182.175-292 215-292q7.25 0 14 1.5t14 3.5l165-165q-9-21-3.805-43.901 5.195-22.902 21-39Q441-551 464-556t44 4l164-163.932Q671-724 669.5-731t-1.5-14q0-32.825 22.301-55.412 22.301-22.588 55-22.588t55.199 22.541q22.5 22.54 22.5 54.839 0 32.7-22.588 55.16Q777.825-668 745-668q-12 0-30-4L552-509q8 22 3.5 45t-20.565 39.065Q519-408 496-404t-46-4L287-245h120.874q9.126-21 28.721-34t42.456-13Q503-292 522.5-279q19.5 13 29.095 34H674q10.486-21.2 29.461-34.1Q722.435-292 745-292q32.825 0 55.412 22.301 22.588 22.301 22.588 55T800.412-159.5Q777.825-137 745-137q-23.039 0-42.412-12.9Q683.214-162.8 674-185H552.495q-10.495 21-30.19 34.5T480.047-137q-23.836 0-43.293-12.9Q417.298-162.8 408-185H287q-10 22-29.026 35-19.027 13-42.974 13m-.301-266q-32.299 0-54.999-22.093-22.7-22.093-22.7-54.5t22.416-54.907q22.416-22.5 54.54-22.5 32.124 0 55.084 22.208t22.96 54.5Q292-448 269.293-425.5T214.699-403m-.425-265q-32.124 0-54.699-22.301-22.575-22.301-22.575-55t22.541-55.199q22.54-22.5 54.84-22.5 32.699 0 55.159 22.394T292-746.12q0 32.093-22.801 55.107Q246.398-668 214.274-668m266.018 0Q448-668 425.5-690.707T403-745.301q0-32.299 22.093-54.999 22.093-22.7 54.5-22.7t54.907 22.416q22.5 22.416 22.5 54.54 0 32.124-22.208 55.084t-54.5 22.96m265.752 265q-32.124 0-55.084-22.208t-22.96-54.5Q668-512 690.707-534.5t54.594-22.5q32.299 0 54.999 22.093 22.7 22.093 22.7 54.5T800.584-425.5q-22.416 22.5-54.54 22.5" />
  </Svg>
);
