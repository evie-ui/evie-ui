import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHumidityPercentage = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M580.118-250Q601-250 615.5-264.618q14.5-14.617 14.5-35.5Q630-321 615.382-335.5q-14.617-14.5-35.5-14.5Q559-350 544.5-335.382q-14.5 14.617-14.5 35.5Q530-279 544.618-264.5q14.617 14.5 35.5 14.5M357-277q9 9 21 9t21-9l204-204q9-9 9-21t-9.053-21q-9.052-9-21.5-9Q569-532 560-523L357-319q-9 8.8-9 20.9 0 12.1 9 21.1m23.118-173Q401-450 415.5-464.618q14.5-14.617 14.5-35.5Q430-521 415.382-535.5q-14.617-14.5-35.5-14.5Q359-550 344.5-535.382q-14.5 14.617-14.5 35.5Q330-479 344.618-464.5q14.617 14.5 35.5 14.5m99.779 395q-147.659 0-246.278-101.165Q135-257.329 135-408q0-54 21.5-110.542t61-115Q257-692 312-752t121-120q11-9 22.874-13 11.873-4 24.312-4 12.439 0 24.126 4Q516-881 527-872q66 60 121.115 120.201 55.116 60.201 94.5 118.5Q782-575 804-518.5 826-462 826-408q0 150.671-99.222 251.835Q627.556-55 479.897-55m.033-94Q588-149 659.5-222.942q71.5-73.941 71.5-185.38Q731-482 667-578T480-787Q357-674 293-578t-64 169.678q0 111.439 71.43 185.38Q371.86-149 479.93-149m.07-335" />
  </Svg>
);