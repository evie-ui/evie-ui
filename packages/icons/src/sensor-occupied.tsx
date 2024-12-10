import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSensorOccupied = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480.118-520Q427-520 390-557.382q-37-37.383-37-90.5Q353-701 390.176-738q37.177-37 90-37Q533-775 570.5-737.823q37.5 37.176 37.5 89.999Q608-595 570.618-557.5q-37.383 37.5-90.5 37.5m-.618-75q22.5 0 38-15.5t15.5-37q0-22.5-15.362-37.5-15.363-15-37.638-15-22 0-37 15.219T428-647.5q0 21.062 15 36.781Q458-595 479.5-595M233-340v-16q0-28 14.962-49.229Q262.923-426.458 296-444q45-22 91.68-33 46.679-11 92.32-11 46.641 0 92.821 10.5Q619-467 664-443.703 698-426 713-405.5q15 20.5 15 49.5v16q0 28-20 47.5T660-273H300q-28 0-47.5-19.5T233-340m247-73q-38.445 0-75.223 9.5Q368-394 334-376v28h292v-28q-34-18-70.777-27.5Q518.445-413 480-413m200-413q-17-10-24-28.5t1-37.5q8.054-17.714 27.027-23.857Q703-922 721-912q59 32 107.734 80.452Q877.467-783.095 911-722q9 17 3 36t-25 27.5q-18 8.5-37 1T822-682q-25-47-61.682-83.344Q723.636-801.688 680-826m-403 1q-47 26-81.344 61.068Q161.312-728.864 136-683q-10.769 18.393-29.385 25.696Q88-650 70-658q-19-8-25.5-27t3.5-37q33-60 81.5-108.5T238-912q17-10 36.5-3.5T303-891q7 19-1 37.5T277-825M136-279q25 46 60 81t82 61q17 11 25 29.5t0 37Q295-51 275.5-45T239-49q-60-32-107.88-80.462Q83.24-177.923 49-239q-11-17-4.315-36.461Q51.37-294.921 70-303q19-8 37.5-.5T136-279m687 4q11-18 29.5-26t36.318-.933q17.818 8.066 24.5 27.5Q920-255 911-237q-33.241 59.725-81.12 108.362Q782-80 721-47q-18 10-36.949 3.27Q665.103-50.463 657-69q-8-18 0-36.5t25-30.5q45-25 80.5-60t60.5-79m-343-73h146-292z" />
  </Svg>
);
