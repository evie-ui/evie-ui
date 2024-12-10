import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTransform = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M296-579H96.232q-18.357 0-29.794-11.488Q55-601.976 55-619.684q0-17.709 11.438-29.512Q77.874-661 96.231-661H296v-132l-39 40q-12.733 12-29.867 12-17.133 0-29.655-12Q186-765 186.5-782.5T199-812l105-105q14-14 33.5-14t33.5 14l106 106q11 12.182 12 29.091T478.043-753Q465-741 447.5-741T418-754l-39-39v411h486q17.425 0 29.213 12.125Q906-357.749 906-339.825q0 17.5-11.787 29.162Q882.425-299 865-299H666v132l39-39q11.533-13 28.667-13.038 17.133-.039 30.942 13.038Q776-194 775.5-177T763-148L657-42q-14.091 14-33.045 13.5Q605-29 591-42L485-149q-12-11-12.5-28t10.891-29q13.542-13.077 30.576-12.538Q531-218 544-206l38 39v-132H379q-34.788 0-58.894-23.444T296-382zm286 137v-137H439v-82h143q35.9 0 59.95 23.5Q666-614 666-579v137z" />
  </Svg>
);
