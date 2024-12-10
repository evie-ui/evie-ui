import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSetMeal = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M117-360q-38.75 0-66.375-27.394T23-455v-365q0-40.213 27.625-67.606Q78.25-915 117-915h726q38.75 0 66.375 27.394Q937-860.213 937-820v365q0 40.212-27.625 67.606Q881.75-360 843-360zm0-460v365h726v-365zm696 586-658 35q-19.903 2-34.452-11.5Q106-224 105-243q-2-19.903 11.5-34.452Q130-292 149-293l659-35q19-1 33.579 12.069T858-284q1 20-12.5 34.5T813-234m-3 165H150q-20 0-33.5-14.083Q103-97.167 103-117q0-19.4 13.5-33.2Q130-164 150-164h660q20 0 33.5 13.919 13.5 13.918 13.5 33.5Q857-97 843.5-83 830-69 810-69M427.728-528q62.744 0 121.508-21Q608-570 656-613q8 27 29.5 43t49.5 21q9 2 18.5-3.5T763-570v-134q0-12-10-18t-19-4q-29 6-51 22.5T654-661q-47.645-41.037-105.692-63.519Q490.26-747 427.757-747 359-747 300-724.5T193-653q-3 3-5 15.5 0 .5 5 16.5 48 49 107 71t127.728 22M117-820v365z" />
  </Svg>
);
