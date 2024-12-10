import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSwipeVertical = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M99-122Q40-200 8-291t-32-189q0-98 32-189t91-170H54q-14 0-24-9.5T20-872q0-14 10-24t24-10h126q20 0 33.5 14t13.5 34v118q0 14-10 24t-23 10q-14 0-24-10t-10-24v-67q-55 72-86 154.5T43-480q0 90 31 172.5T160-153v-68q0-13 10-23t24-10q13 0 23 10t10 23v119q0 20-13.5 33.5T180-55H54q-14 0-24-9.5T20-88q0-14 10-24t24-10zm530-33q-22 9-46 8t-46-12L260-294q-5-2-8-7t-2-10l-2 1q8-32 33-52.5t58-21.5l86-4-116-317q-5-15 2-30t22-21q16-5 31 2t21 22l134 366q6 17-5 32.5T485-318l-84 5 171 82q7 4 15 3.5t16-2.5l220-81q36-13 51.5-46t2.5-69l-69-191q-6-15 1-30.5t23-21.5q15-5 30 2t21 22l69 191q24 67-5.5 130T850-236zM492-630q-5-16 2-30.5t22-20.5q16-6 30.5 1.5T567-657l51 139q6 16-1 30.5T594-468q-15 6-29.5-1.5T544-492zm151-12q-6-15 1.5-30.5T667-694q15-5 30 1.5t21 21.5l38 102q5 16-2.5 31T730-517q-16 5-30-2t-20-22zm38 242" />
  </Svg>
);
