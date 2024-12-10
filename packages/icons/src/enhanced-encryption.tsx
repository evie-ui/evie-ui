import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgEnhancedEncryption = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M444-328v89q0 15.3 9.975 25.65 9.976 10.35 26.2 10.35 16.225 0 26.025-9.925Q516-222.85 516-239v-89h89q15.3 0 25.65-10.4Q641-348.801 641-364.175q0-16.225-9.925-26.025Q621.15-400 605-400h-89v-90q0-15.3-9.975-25.65-9.976-10.35-26.2-10.35-16.225 0-26.025 10.35Q444-505.3 444-490v90h-89q-15.3 0-25.65 9.975-10.35 9.976-10.35 25.7 0 15.725 9.925 26.025Q338.85-328 355-328zM229-57q-38.775 0-66.388-27.612Q135-112.225 135-151v-416q0-39.188 27.612-67.094Q190.225-662 229-662h50v-74q0-85.19 58.366-144.595Q395.731-940 479.866-940 564-940 622.5-880.595 681-821.19 681-736v74h50q39.188 0 67.094 27.906Q826-606.188 826-567v416q0 38.775-27.906 66.388Q770.188-57 731-57zm0-94h502v-416H229zm144-511h214v-73.769q0-46.731-30.647-77.981-30.647-31.25-76-31.25T404-813.75q-31 31.25-31 77.981zM229-151v-416z" />
  </Svg>
);
