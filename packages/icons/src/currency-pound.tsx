import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCurrencyPound = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M269-95q-21 0-34.5-13.5T221-142v-21q0-12 5-21.5t15-16.5q40-34 68.5-63t28.5-88q0-10-1-20.5t-3-20.5h-88q-20 0-33.5-13.5T199-440q0-20 13.5-33.5T246-487h39q-35-52-44.5-92t-9.5-79q0-95 66.5-161.5T459-886q65 0 117 28t85 79q10 15 3 33t-25 25q-17 8-35 2.5T574-739q-21-25-51-38.5T459-791q-56 0-94.5 38T326-658q0 36 11 74t60 97h132q20 0 33.5 13.5T576-440q0 20-13.5 33.5T529-393H428q2 10 3.5 21.5T433-352q0 46-18.5 88T362-189h197q29 0 54.5-15.5T650-261q4-18 16-30t31-12q18 0 32 13.5t14 32.5q0 68-61 115T559-95z" />
  </Svg>
);
