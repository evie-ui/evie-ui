import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPermMedia = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M105-95q-39.725 0-67.362-27.612Q10-150.225 10-189v-484q0-19.75 13.675-33.375Q37.351-720 57.088-720q19.737 0 33.824 13.625Q105-692.75 105-673v484h713q19.625 0 33.812 13.675Q866-161.649 866-141.825 866-122 851.812-108.5 837.625-95 818-95zm154-154q-38.775 0-66.388-27.638Q165-304.275 165-344v-467q0-39.188 27.612-67.094Q220.225-906 259-906h181q18.689 0 36.344 8Q494-890 507-877l52 51h297q38.775 0 66.387 27.906Q950-770.188 950-731v387q0 39.725-27.613 67.362Q894.775-249 856-249zm0-95h597v-387H520l-80-80H259zm0 0v-467zm262-127-55-64q-7-9-18-8.5t-18 9.5l-48 54q-10 12.438-3.083 25.719Q385.833-441 401-441h315q14.625 0 20.812-13Q743-467 735-479l-85-113q-7-9-18.5-9t-18.5 9z" />
  </Svg>
);
