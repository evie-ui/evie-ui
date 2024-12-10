import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSentimentVerySatisfied = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M479.504-261q59.752 0 109.624-28Q639-317 669-366.4q6-12.6-1.729-24.1-7.729-11.5-22.155-11.5H314.77q-14.844 0-22.307 11Q285-380 292-367.4q29 49.477 79 77.938Q421-261 479.504-261M347-571l26 25q7.636 9 21.318 9Q408-537 417-545.5q9-8.5 9-21.5t-9-22l-36-37q-14.2-14-33.6-14-19.4 0-33.4 14l-37 37q-9 9.091-8.5 22.045Q269-554 278-545q9 9 22 8.5t22-9.5zm267.477 0L640-546q7.714 9 21 9t22-8.5q9-8.136 9-21.818Q692-581 683-590l-36-36q-14.2-14-33.6-14-19.4 0-33.4 14l-35 37q-9 8.714-9 21.5t9 21.5q8.636 9 21.818 9Q580-537 589-546zM480.138-55Q392-55 314.5-88T179-179q-58-58-91-135.362t-33-165.5Q55-568 88-645.5t90.843-135.553q57.843-58.052 135.278-91.5Q391.557-906 479.779-906q88.221 0 165.839 33.37 77.619 33.37 135.596 91.29 57.978 57.92 91.382 135.46T906-480q0 88.276-33.447 165.76-33.448 77.483-91.5 135.362Q723-121 645.638-88t-165.5 33M480-149q138.375 0 234.688-96.312Q811-341.625 811-480t-96.312-234.688Q618.375-811 480-811t-234.688 96.312Q149-618.375 149-480t96.312 234.688Q341.625-149 480-149" />
  </Svg>
);
