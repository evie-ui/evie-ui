import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgFireHydrant = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M218-152v-85h-18q-42.7 0-72.35-29.944Q98-296.888 98-340v-80q0-42 29.65-72T200-522h18v-85h-28q-19.75 0-33.375-13.675Q143-634.351 143-654.088q0-19.737 13.625-33.824Q170.25-702 190-702h35q21-87 91-144t164-57q94 0 164 57t91 144h35q19.75 0 33.375 14.263t13.625 34Q817-634 803.375-620.5 789.75-607 770-607h-27v85h17q43.112 0 73.056 30Q863-462 863-420v80q0 43.112-29.944 73.056Q803.112-237 760-237h-17v85h27q19.75 0 33.375 13.675Q817-124.649 817-104.825 817-85 803.375-71.5 789.75-58 770-58H190q-19.75 0-33.375-13.675Q143-85.351 143-105.175 143-125 156.625-138.5 170.25-152 190-152zm108-550h308q-17-46-58.605-76t-95.186-30q-53.582 0-95.395 30Q343-748 326-702m-14 550h336v-180h120v-96H648v-179H312v179H192v96h120zm168.152-103Q532-255 568.5-291.666q36.5-36.667 36.5-88.536Q605-431 568.349-468q-36.652-37-88.501-37Q428-505 391.5-467.798t-36.5 88.5Q355-328 391.652-291.5q36.651 36.5 88.5 36.5m.319-75Q459-330 444.5-344.029q-14.5-14.03-14.5-35Q430-400 444.029-415q14.03-15 35.5-15Q501-430 515.5-415.554q14.5 14.446 14.5 35.083Q530-359 515.971-344.5q-14.03 14.5-35.5 14.5M480-607" />
  </Svg>
);
