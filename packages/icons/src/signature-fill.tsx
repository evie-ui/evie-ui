import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSignatureFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M554-496q76-59 118.5-120.94T715-737.293Q715-773 701.535-796t-35.263-23q-48.082 0-84.677 73.662Q545-671.677 545-573q0 20.641 2 39.821Q549-514 554-496M145-298q-13 13-30 12.5T85-299q-13-13-13-30.5T85-360l34-33-34-34q-14-13-13.5-30.5T85-488q13-13 30.5-13t30.5 13l33 34 34-34q13-13 30.5-13t30.5 13q13 13 13 30.5T274-427l-34 34 34 34q13 13 13 30t-13 30q-13 13-30.5 13T213-299l-34-33zm493 6q-37 0-66.5-18T519-360q-17 11-33 19.5T453-323q-16 10-33 6t-26-20q-9-16-4.742-33.473T410-398q17.694-8.652 34.847-18.826Q462-427 478-437q-10-30.308-15-63.308T458-569q0-142 58.86-239.5T666-906q61.915 0 98.958 47Q802-812 802-738q0 83-55.5 166.5T591-412q12 16 26 24.5t31 8.5q30 0 58.5-20.5T760-462q7.643-13.222 21.089-17.611Q794.536-484 809-478q14.966 6.795 22.483 21.397Q839-442 838-426q-1 9-1 19v24q6-5 12.5-10t12.5-10q9-12 24-16t30 1q14 5 19.5 19t-2.5 26q-25 40-52.277 60.5T825-292q-26 0-43.5-15.5T760-350q-29 29-59.333 43.5Q670.333-292 638-292M140-95q-19 0-31.5-12.588-12.5-12.587-12.5-30.5Q96-156 108.5-169t31-13q18.5 0 31 12.789 12.5 12.79 12.5 31Q183-120 170.438-107.5 157.875-95 140-95m171 0q-19 0-31.5-12.588-12.5-12.587-12.5-30.5Q267-156 279.5-169t31-13q18.5 0 31 12.789 12.5 12.79 12.5 31Q354-120 341.438-107.5 328.875-95 311-95m170 0q-19 0-31.5-12.588-12.5-12.587-12.5-30.5Q437-156 449.5-169t31-13q18.5 0 31 12.789 12.5 12.79 12.5 31Q524-120 511.438-107.5 498.875-95 481-95m171 0q-19 0-31.5-12.588-12.5-12.587-12.5-30.5Q608-156 620.5-169t31-13q18.5 0 31 12.789 12.5 12.79 12.5 31Q695-120 682.438-107.5 669.875-95 652-95m170.211 0Q804-95 791.5-107.588q-12.5-12.587-12.5-30.5Q779-156 791.588-169q12.587-13 30.5-13Q840-182 853-169.211q13 12.79 13 31Q866-120 853.211-107.5q-12.79 12.5-31 12.5" />
  </Svg>
);
