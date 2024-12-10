import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgSubdirectoryArrowLeft = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="m316-308 113 113q14 15 13.5 33.455-.5 18.454-14.553 32.545-14.452 15-33.7 15Q375-114 361-129L168-323q-6.909-7.167-10.955-16.328Q153-348.489 153-357.244q0-8.756 4.045-17.706Q161.091-383.9 168-391l191-191q14.364-14 34.182-14.5t34.209 13.786q14.776 14.285 14.192 34Q441-529 427-515L315-402h376v-376q0-19.625 13.675-33.812Q718.351-826 738.088-826q19.737 0 33.824 14.188Q786-797.625 786-778v376q0 38.75-27.394 66.375Q731.213-308 691-308z" />
  </Svg>
);
