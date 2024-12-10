import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFormatListNumbered = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M150-55q-16.033 0-26.517-10.477Q113-75.954 113-91.977T123.483-119q10.484-11 26.517-11h63v-22h-30q-13 0-21.5-8.5T153-182q0-13 8.5-21.5T183-212h30v-23h-63q-16.033 0-26.517-10.477Q113-255.953 113-271.977 113-288 123.483-299q10.484-11 26.517-11h90q20.4 0 34.2 13.8Q288-282.4 288-262v32q0 20.4-13.8 34.2Q260.4-182 240-182q20.4 0 34.2 13.875Q288-154.25 288-135v33q0 19.975-13.8 33.487Q260.4-55 240-55zm-2-298q-14.2 0-24.6-10.4Q113-373.8 113-388v-75q0-19.25 13.512-33.125Q140.025-510 160-510h53v-23h-63q-16.033 0-26.517-10.477Q113-553.953 113-569.977 113-586 123.483-597q10.484-11 26.517-11h90q20.4 0 34.2 13.8Q288-580.4 288-560v62q0 20.4-13.8 34.2Q260.4-450 240-450h-52v22h62q16.467 0 27.233 10.674 10.767 10.675 10.767 27Q288-374 277.233-363.5 266.467-353 250-353zm62.326-298Q194-651 183.5-661.483 173-671.967 173-688v-150h-27q-14 0-23.5-10.217Q113-858.433 113-872q0-13.567 9.5-23.783Q132-906 146.178-906H213q14.633 0 24.817 10.183Q248-885.633 248-871v183q0 16.033-10.674 26.517-10.675 10.483-27 10.483M424-192q-19.75 0-33.375-13.675Q377-219.351 377-239.175 377-259 390.625-272.5 404.25-286 424-286h394q19.625 0 33.812 13.675Q866-258.649 866-238.825 866-219 851.812-205.5 837.625-192 818-192zm0-243q-19.75 0-33.375-13.675Q377-462.351 377-482.175 377-502 390.625-515.5 404.25-529 424-529h394q19.625 0 33.812 13.675Q866-501.649 866-481.825 866-462 851.812-448.5 837.625-435 818-435zm0-243q-19.75 0-33.375-13.675Q377-705.351 377-725.175 377-745 390.625-758.5 404.25-772 424-772h394q19.625 0 33.812 13.675Q866-744.649 866-724.825 866-705 851.812-691.5 837.625-678 818-678z" />
  </Svg>
);
