import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgArticleShortcut = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M771-95H410q-19.75 0-33.375-13.675Q363-122.351 363-142.175 363-162 376.625-175.5 390.25-189 410-189h361v-582H189v188q0 19.75-13.675 33.375Q161.649-536 141.825-536 122-536 108.5-549.625 95-563.25 95-583v-188q0-39.463 27.475-67.231Q149.95-866 189-866h582q39.463 0 67.231 27.769Q866-810.463 866-771v582q0 39.05-27.769 66.525Q810.463-95 771-95M241-55q-78.842 0-134.421-54.332Q51-163.663 51-241q0-47.776 23-88.888T137-396H96q-16.475 0-28.237-11.868Q56-419.737 56-436.368 56-453 67.763-464.5 79.525-476 96-476h160q19.75 0 33.375 14.188Q303-447.625 303-428v160q0 16.75-11.868 27.875Q279.263-229 262.632-229 246-229 235-240.125T224-268v-79q-40 6-66.5 35.691-26.5 29.69-26.5 70.088 0 44.403 32.045 75.812Q195.091-134 241-134q16.475 0 28.237 11.868Q281-110.263 281-93.632 281-77 269.237-66 257.475-55 241-55m152.298-229h133.404q12.048 0 21.173-8.675 9.125-8.676 9.125-21.5Q557-326 547.875-335t-21.173-9H393.298q-13.048 0-21.673 9.175-8.625 9.176-8.625 21.5 0 12.325 8.625 20.825t21.673 8.5M393-450h256q11.75 0 20.875-8.675 9.125-8.676 9.125-21.5 0-12.825-9.125-21.325T649-510H393q-12.75 0-21.375 8.675-8.625 8.676-8.625 21.5 0 12.825 8.625 21.325T393-450m-80.667-167H649q11.75 0 20.875-8.675 9.125-8.676 9.125-21.5Q679-659 669.875-668T649-677H312.333q-12.891 0-21.612 9.175-8.721 9.176-8.721 21.5 0 12.325 8.721 20.825t21.612 8.5" />
  </Svg>
);
