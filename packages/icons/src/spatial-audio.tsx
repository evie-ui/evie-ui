import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSpatialAudio = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M678-677.5q-46-46.5-73-103T572-901q-2-17 10.173-29.5 12.172-12.5 29.862-12.5Q629-943 640.5-932t15.5 29q6 47 27 89.5t55 76.5q34 34 76 55t89 26q18 4 29 16.035t11 29.455q0 17.419-12.35 28.965Q918.3-570 902-572q-63-6-120.5-32.273Q724-630.546 678-677.5m137.146-136.129Q797-832 784-855q-13-23-18-48-4-16 8.154-28T804-943q17.2 0 30.1 12 12.9 12 20.9 26 2.368 7.949 7.184 15.974Q867-881 874-874.5q6 7.5 14 13t18 7.5q14 9 26 22t12 29.786q0 17.785-12 30.5Q920-759 904-764q-25-5-47.854-18.092-22.854-13.091-41-31.537M385.296-467q-77.703 0-126.5-49.5Q210-566 210-643.204q0-77.203 48.796-126Q307.593-818 384.796-818 462-818 511.5-769.204q49.5 48.797 49.5 126Q561-566 512-516.5T385.296-467M40-191v-25q0-49 26-81t56-47q51-26 126-44t137-18q62 0 136.5 17.5T647-346q30 16 57 48.5t27 81.5v25q0 40.462-27.269 67.731Q676.463-96 636-96H134q-40.05 0-67.025-27.269Q40-150.538 40-191m94 0h502v-22q0-15-8.5-27.391Q619-252.783 603-262q-48-27-107.5-38.5T385-312q-51 0-111 13t-108 37.217Q152-255 143-241.5t-9 28.5zm250.796-371Q420-562 443-584.465q23-22.464 23-58Q466-678 443.204-701q-22.797-23-58-23Q350-724 327-701.154t-23 58.119Q304-607 326.796-584.5q22.797 22.5 58 22.5M385-191" />
  </Svg>
);
