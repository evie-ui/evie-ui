import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgUnknownDocument = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-811v286-4 380zv186zm126 393h130.814q14.186-21 31.463-38.456Q494.553-473.912 515-489H314q-14.875 0-24.938 10.088-10.062 10.087-10.062 25Q279-439 289.35-428.5 299.7-418 315-418m0 170h87q-2-18-1.5-35.5T405-319h-91q-14.875 0-24.938 10.088-10.062 10.087-10.062 25Q279-269 289.35-258.5 299.7-248 315-248M189-55q-39.05 0-66.525-27.475Q95-109.95 95-149v-662q0-39.463 27.475-67.231Q149.95-906 189-906h323q19.556 0 37.278 8Q567-890 580-877l177 177q13 13 21 30.722T786-632v135q-23-12-47-19t-48-9v-100H549q-19.75 0-33.375-13.625T502-672v-139H189v662h247q15 30 37.5 53.5T524-55zm466-414q80.51 0 137.255 56.745Q849-355.51 849-275q0 80.51-56.745 137.255Q735.51-81 655-81q-80.51 0-137.255-56.745Q461-194.49 461-275q0-80.51 56.745-137.255Q574.49-469 655-469m1.135 339Q671-130 681-139.946q10-9.946 10-25.5T680.865-190.5q-10.135-9.5-25-9.5T631-190.122q-10 9.878-10 24.365Q621-150 631.135-140q10.135 10 25 10m.291-296q-22.426 0-42.212 11.043Q594.429-403.914 581-386q-6 10-2 20t14.692 15q8.951 4 18.094.3t16.178-12.367Q633-369 640.436-373t15.378-4q13.504 0 23.845 8.35T690-346.542Q690-336 683-327q-7 9-15 15-8.579 7-17.789 14.5Q641-290 636-279.222q-4 7.333-5 15.95-1 8.617-1 16.778 0 10.494 7.5 18.994T656-219q11 0 18.5-6.387t7.5-16.903q0-11.317 7-21.014Q696-273 704.4-280q14.6-13 25.6-29.756 11-16.756 11-36.615 0-34.16-25.471-56.895Q690.059-426 656.426-426" />
  </Svg>
);
