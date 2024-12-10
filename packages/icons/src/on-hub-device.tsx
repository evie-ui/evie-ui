import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgOnHubDevice = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M344-80q-19.75 0-33.375-13.675Q297-107.351 297-127.175 297-147 310.625-160.5 324.25-174 344-174h272q19.75 0 33.375 13.675Q663-146.649 663-126.825 663-107 649.375-93.5 635.75-80 616-80zm-50-168-39-557q-3-37 18.53-58.5T332-885h297q36 0 57.5 21.5T705-805l-39 557q-.75 18.838-14.27 31.419Q638.211-204 619-204H341q-19.211 0-32.73-12.581Q294.75-229.162 294-248m92-51h187.845L611-791H350zm0-492h-36 261z" />
  </Svg>
);
