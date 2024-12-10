import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPoolFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-128q-33 0-64 21t-73 21q-42 0-73.5-21t-64.608-21Q182-128 159-116q-23 12-48 22-16 5-29-5.321-13-10.322-13-29.5Q69-147 81-161q12-14 30-21 23-9 42.144-19.5t51.432-10.5Q251-212 282.5-190.5q31.5 21.5 64 21.5 33.5 0 60.5-21.5t73-21.5q46 0 77.5 21.5T622-169q33 0 60.5-21.5t73.924-21.5q32.288 0 51.432 10.5Q827-191 849-182q18 7 30 21.017t12 32Q891-110 878-99.5T849-94q-25-10-47-22t-45.892-12Q723-128 693.5-107T622-86q-42 0-75.5-21T480-128m-.459-199Q447-327 417-306t-70 21q-40 0-74.5-21t-67.608-21Q181-327 157.5-314.5 134-302 109-293q-15.439 6-27.72-5Q69-309 69-326.271t12-30.5Q93-370 110-377q23-8 42.644-18.5t51.932-10.5Q251-406 280-387q29 19 62.986 19Q376-368 405-387t75-19q46 0 76 19t61.5 19q33.5 0 63-19t75.5-19q34 0 52.809 10.5Q827.618-385 851-377q17 7 28.5 20.229t11.5 30.5Q891-309 879.219-298q-11.78 11-27.219 5-25-9-48-21.5T756-327q-33 0-63.748 21-30.749 21-69.987 21Q582-285 547.5-306t-67.959-21M269-514l136-136-46-45q-22-23-47-34t-62-16q-21.367-2.765-35.684-18.382Q200-779 200-799.561 200-821 215.5-835.5T253-847q58 7 103 29t80 57l256 255.041Q678-493 656.5-486.5t-38.076 6.5q-39.273 0-68.848-21Q520-522 480-522q-40 0-69.076 21-29.076 21-68.348 21Q323-480 301.5-490T269-514m409.521-347q45.521 0 76 30.754Q785-799.493 785-755.225 785-710 754.521-679.5q-30.479 30.5-76 30.5T602.5-679.266Q572-709.532 572-754.745 572-799 602.5-830q30.5-31 76.021-31" />
  </Svg>
);
