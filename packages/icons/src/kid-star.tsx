import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgKidStar = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M293.234-719.822 410-872q13-17 31.413-26t38.5-9q20.087 0 38.587 9 18.5 9 31.5 26l117.163 152.178L845-660q29.143 10.373 44.571 34.297Q905-601.778 905-573.667q0 12.241-3.967 25.944Q897.067-534.019 889-522L776-359.488 780-187q0 38.169-28 64.584Q724-96 686.529-96 686-96 667-98.057L480-150 293.217-98.077Q287-97 281.49-96q-5.51 1-10.562 1-37.528 0-64.728-26.952Q179-148.904 181-188l4-171.766L71-523q-9.067-12.038-12.533-25.761Q55-562.485 55-574.708q0-28.821 15.418-52.662Q85.836-651.212 116-660zM350-639l-198 67 130 183.87L276-192l204-57 205 57-6-196.163L808-570l-198-69-129-169zm130 138" />
  </Svg>
);
