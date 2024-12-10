import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgDictionaryFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M159-391h54l16.543-53H330l19 53h53l-95-258h-54zm87-98 33.25-97H281l34 97zm314-87v-48q33-14 67.5-21t72.5-7q26 0 51 4t49 10v44q-24-9-48.5-13.5T700-612q-38 0-73 9.5T560-576m0 220v-49q33-13.5 67.5-20.25T700-432q26 0 51 4t49 10v44q-24-9-48.5-13.5T700-392q-38 0-73 9t-67 27m0-110v-48q33-14 67.5-21t72.5-7q26 0 51 4t49 10v44q-24-9-48.5-13.5T700-502q-38 0-73 9.5T560-466M248-302q53.566 0 104.283 12.5T452-252v-427q-45-30-97.619-46.5Q301.763-742 248-742q-38 0-74.5 9.5T100-709v434q31-14 70.5-20.5T248-302m264 50q50-25 98-37.5T712-302q38 0 78.5 6t69.5 16v-429q-34-18-71.822-25.5Q750.355-742 712-742q-54 0-104.5 16.5T512-679zm-27.821 117Q432-172 372.326-195.5 312.651-219 248-219q-34.146 0-67.073 9.5Q148-200 115-189q-33.1 17-65.55-2.16Q17-210.319 17-249v-462q0-25 11-46.3 11-21.3 33-32.7 44-19.5 90.395-27.75 46.394-8.25 94.55-8.25Q310-826 370-808.5T482-754q51-36 110-54t122.055-18q47.813 0 93.879 9T898-790q22 11.4 33.5 32.7Q943-736 943-711v473q0 36.936-33 52.968Q877-169 844-189q-32-12-64.927-21-32.927-9-67.073-9-63.224 0-119.933 24.5Q535.358-170 484.179-135M248-302q-38 0-77.5 6.5T100-275v-434q37-14 73.5-23.5T248-742q53.763 0 106.381 16.5Q407-709 452-679v427q-49-25-99.717-37.5T248-302" />
  </Svg>
);
