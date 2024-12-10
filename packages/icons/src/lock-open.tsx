import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgLockOpen = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M229-57q-38.775 0-66.388-27.612Q135-112.225 135-151v-416q0-39.188 27.612-67.094Q190.225-662 229-662h358v-73.769q0-46.731-30.75-77.981Q525.5-845 480-845q-35.621 0-62.336 20.652Q390.948-803.697 381-772q-8.172 16.194-22.586 26.097Q344-736 325.753-736q-20.68 0-32.217-17.5Q282-771 288-792q17-65 69.699-106.5Q410.399-940 480-940q84.19 0 142.595 59.405T681-736v74h50q39.188 0 67.094 27.906Q826-606.188 826-567v416q0 38.775-27.906 66.388Q770.188-57 731-57zm0-94h502v-416H229zm251.168-131Q512-282 534.5-304.031T557-357q0-30-22.668-54.5t-54.5-24.5Q448-436 425.5-411.5t-22.5 55q0 30.5 22.668 52.5t54.5 22M229-151v-416z" />
  </Svg>
);
