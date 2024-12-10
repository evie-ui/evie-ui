import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgRocketLaunch = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M294-549q14-27 30-54.5t34-53.5l-69-14-84 85zm518-283q-102 9-175 45.5T491-677q-30 30-60 75.5T369-493l127 127q62-32 108-61t76-59q73-74 109-147t46-175q1-6-.5-10.5T830-827q-4-3-8-4.5t-10-.5M597-592q-19-19-19-46t19-46q19-18 45-18t45 18q19 19 19 46t-19 46q-19 18-45 18t-45-18m-45 302 37 88 85-84-13-69q-26 17-54 34t-55 31m386-596q0 146-46 256.5T756-428q-3 2-6 5t-6 5l23 112q5 24-2.5 47T741-219L607-86q-18 18-42.5 13.5T531-101l-74-171-181-182-172-73q-24-9-28-34t14-42l134-134q17-17 38.5-24t45.5-2l113 22 4.5-4.5q2.5-2.5 5.5-4.5 92-92 201.5-137.5T888-934q10 0 18.5 4t15.5 11q8 7 12 15.5t4 17.5M118-321q43-43 102-43.5T322-322q42 42 41.5 101.5T321-119q-55 55-132.5 67T34-33q7-78 18.5-156T118-321m67 67q-20 22-25.5 50T149-148q27-5 55.5-11.5T254-186q16-13 15.5-33.5T255-256q-16-14-36.5-14T185-254" />
  </Svg>
);
