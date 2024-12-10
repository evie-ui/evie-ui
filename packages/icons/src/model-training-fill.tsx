import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgModelTrainingFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M174-169q-49-57-75.5-125T72-440q0-161 109.5-278.5T455-846q9 0 18.5.5T489-844l-78-78 50-51 184 184-184 185-50-50 93-93q-11-2-25.5-3t-21.5-1q-126 8-208 98.5T167-440q0 48 16.5 103.5T242-236zm264-10q0-24-17-48.5t-37-50q-20-25.5-36.5-54T331-392q0-62 44-105.5T480-541q62 0 105.5 43.5T629-392q0 32-16.5 60.5t-36.5 54q-20 25.5-36.5 50T523-179zm-2 102v-57h89v57zm350-92-66-66q33-40 53.5-92T794-440q0-55-19.5-107.5T712-645l69-68q49 52 78 121.5T888-440q0 80-26.5 147T786-169" />
  </Svg>
);
