import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgFilterVintage = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M478-46q-51 0-100-33t-71-102q-88 14-145.5-30.5T92-333q-11-37-2-77.5t53-69.5q-46-31-54.5-72.5T93-630q13-75 71.5-119T308-778q22-69 71-103t100-34q51 0 100 34t71 103q85-14 144 29.5T865-630q13 35 4 77.5T815-480q43 29 52 71t-3 76q-13 74-71 120t-144 32q-22 69-71.5 102T478-46m0-94q51 0 73-42t-1-83l-32-53q-11 3-21 4t-19 1q-10 0-19.5-1t-20.5-4l-32 53q-24 40-2 82.5t74 42.5M192-313q26 44 69.5 47t74.5-40l32-45q-5-5-13.5-15T340-386q-6-10-11.5-23t-8.5-29h-61q-47 0-70.5 40.5T192-313m429 7q31 43 75 40t70-47q27-44 3.5-84.5T699-438h-61q-4 16-8.5 29T619-386q-5 10-12.5 18.5T589-351zM320-522l8-24q4-12 11-23t14-21.5q7-10.5 15-18.5l-31-44q-31-44-76-41.5T192-647q-28 45-4 85t71 40zm379 0q47 0 69-41.5t-3-83.5q-26-44-69-46.5T621-653l-31 44q8 6 15 17t14 24q7 12 12 22t7 24zM439-642q11-2 21-3.5t19-1.5q9 0 19 1.5t21 3.5l32-53q24-41 1.5-83T479-820q-51 0-73.5 42t1.5 83zm0 0q11-2 21-3.5t19-1.5q9 0 19 1.5t21 3.5q-11-2-21-3.5t-19-1.5q-9 0-19 1.5t-21 3.5m-99 256q-6-10-11.5-23t-8.5-29q3 16 8.5 29t11.5 23q6 10 14.5 20t13.5 15q-5-5-13.5-15T340-386m-20-136 8-24q4-12 11-23t14-21.5q7-10.5 15-18.5-8 8-15 18.5T339-569q-7 11-11 23zm158 209q-10 0-19.5-1t-20.5-4q11 3 20.5 4t19.5 1q9 0 19-1t21-4q-11 3-21 4t-19 1m111-38q10-8 17.5-16.5T619-386q6-10 10.5-23t8.5-29q-4 16-8.5 29T619-386q-5 10-12.5 18.5T589-351m49-171q-2-14-7-24t-12-22q-7-13-14-24t-15-17q8 6 15 17t14 24q7 12 12 22t7 24M480-373q44 0 75.5-31.5T587-480q0-44-31.5-75.5T480-587q-44 0-75.5 31.5T373-480q0 44 31.5 75.5T480-373" />
  </Svg>
);
