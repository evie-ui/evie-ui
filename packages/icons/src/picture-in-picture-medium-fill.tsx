import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPictureInPictureMediumFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M343-329q-19.75 0-33.375-13.625T296-376v-243q0-19.75 13.625-33.375T343-666h321q19.75 0 33.375 13.625T711-619v243q0 19.75-13.625 33.375T664-329zM102-135q-19.75 0-33.375-13.675Q55-162.351 55-182.175 55-202 68.625-215.5 82.25-229 102-229h709v-549q0-19.75 13.675-33.875Q838.351-826 858.175-826 878-826 892-811.875 906-797.75 906-778v549q0 39-28 66.5T811-135z" />
  </Svg>
);
