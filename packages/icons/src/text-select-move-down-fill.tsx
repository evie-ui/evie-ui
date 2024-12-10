import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgTextSelectMoveDownFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M160-794q-19.75 0-33.375-13.675Q113-821.351 113-841.175 113-861 126.625-874.5 140.25-888 160-888h640q19.75 0 33.375 13.675Q847-860.649 847-840.825 847-821 833.375-807.5 819.75-794 800-794zm286 491L342-407q-14-14-13.5-33.5T345-476q14-13 31-12.5t31 12.5l26 26v-190q0-19.75 13.675-33.375Q460.351-687 480.175-687 500-687 513.5-673.375 527-659.75 527-640v190l26-25q14-13 31.5-13t32.5 15q15 14 15 33t-15 34L514-303q-14 14-34 14t-34-14M160-72q-19.75 0-33.375-13.675Q113-99.351 113-119.175 113-139 126.625-153 140.25-167 160-167h640q19.75 0 33.375 14.175 13.625 14.176 13.625 34Q847-99 833.375-85.5 819.75-72 800-72z" />
  </Svg>
);
