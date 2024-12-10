import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgEnergyProgramSaving = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M465-284q75 0 127.5-52.646T645-464.5V-645H464.5q-75.208 0-127.854 52.494Q284-540.011 284-465.019q0 29.37 8.5 54.695Q301-385 317-362l-23 22q-10 11-10 23.5t10 22.5q10 10 22.5 10t23.5-10.185L362-317q23 16 48.095 24.5Q435.189-284 465-284m-.165-65q-14.585 0-28.835-4.286-14.25-4.285-28-8.714l101-101q9-10 9.5-22.5T509-509q-11-10-23.5-9.5T463-509L362-408q-4.429-13.75-8.714-27.833Q349-449.917 349-465q0-48.72 33.22-82.36T465-581h116v116q0 49.56-33.688 82.78T464.835-349M480 0 329.138-117.558 141-141l-23.442-188.138L0-480l118.047-150.868L141-820l188.138-22.442L480-960l150.784 117.367 189.027 22.822 22.822 189.027L960-480 842.442-329.138 820-141l-189.132 22.953zm.414-121 112.77-87.005 141.817-18.131 16.934-141.852L839-480.414l-87.005-112.77-18.084-140.759-141.485-17.992L480.293-839l-112.477 87.005-142.711 18.084-17.04 141.485L121-480.293l87.005 112.477 18.131 142.711 141.852 17.04zM480-480" />
  </Svg>
);
