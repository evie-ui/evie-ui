import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgLineStyle = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M128.518-102q-15.482 0-24.5-10.412-9.018-10.413-9.018-25Q95-152 105.07-162q10.07-10 24.335-10 15.095 0 24.845 10.5Q164-151 164-136.412q0 14.587-10.415 24.5Q143.171-102 128.518-102m175.784 0q-14.802 0-24.052-10.412-9.25-10.413-9.25-25Q271-152 281.07-162q10.07-10 24.335-10 14.659 0 24.627 10.5Q340-151 340-136.412q0 14.587-10.448 24.5Q319.103-102 304.302-102m175 0q-14.802 0-24.052-10.412-9.25-10.413-9.25-25Q446-152 455.795-162q9.795-10 24.275-10 14.48 0 24.705 10.088 10.225 10.087 10.225 25Q515-122 504.552-112q-10.449 10-25.25 10m176.023 0q-14.737 0-24.531-10.4Q621-122.801 621-137.281q0-14.905 10.241-24.812Q641.483-172 655.991-172q14.509 0 24.259 10.5t9.75 24.886q0 14.386-9.969 24.5T655.325-102m175.394 0q-14.904 0-24.812-10.4Q796-122.801 796-137.281q0-14.905 10.088-24.812 10.087-9.907 25-9.907Q846-172 856-161.912q10 10.087 10 25Q866-122 855.6-112q-10.401 10-24.881 10M141-220q-19 0-32.5-14T95-267.412q0-19.413 13.625-33.5Q122.25-315 142-315h133q18.385 0 32.192 14.588 13.808 14.587 13.808 34Q321-247 307.375-233.5T274-220zm272 0q-19 0-32.5-14T367-267.412q0-19.413 13.625-33.5Q394.25-315 414-315h133q19 0 32.5 14.588 13.5 14.587 13.5 34Q593-247 579.375-233.5T546-220zm273 0q-18.82 0-32.91-14Q639-248 639-267.412q0-19.413 13.625-33.5Q666.25-315 687-315h132q18.82 0 32.91 14.588 14.09 14.587 14.09 34Q866-247 851.812-233.5 837.625-220 818-220zM141-363q-19 0-32.5-14.588-13.5-14.587-13.5-34Q95-431 108.625-444.5T142-458h262q19 0 32.5 14.275T450-410.5q0 20.5-13.625 34T403-363zm415 0q-19 0-32.5-14.588-13.5-14.587-13.5-34Q510-431 523.625-444.5T557-458h262q18.82 0 32.91 14.275Q866-429.45 866-410.5q0 20.5-14.188 34Q837.625-363 818-363zM142-518q-20 0-33.5-14T95-565.211v-245.578Q95-830 108.5-844t33.5-14h676q20 0 34 14t14 33.211v245.578Q866-546 852-532t-34 14z" />
  </Svg>
);
