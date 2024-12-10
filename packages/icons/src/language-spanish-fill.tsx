import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgLanguageSpanishFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M229-367h166q18.05 0 31.025 12.738Q439-341.524 439-323.825 439-305 426.025-292.5T395-280H182q-19.75 0-33.375-13.625T135-327v-306q0-19.75 13.625-33.375T182-680h213q18.05 0 31.025 12.738Q439-654.524 439-636.825 439-618 426.025-605.5T395-593H229v73h130q16.475 0 28.237 11.868Q399-496.263 399-479.632 399-463 387.237-451.5 375.475-440 359-440H229zm350.03 87q-28.999 0-50.014-20.856Q508-321.712 508-351v-10q0-12.05 7.525-19.525 7.526-7.475 19.65-7.475h56q5.175 0 8.5 3.163Q603-381.675 603-377v10h128v-77H579q-29.287 0-50.144-20.856Q508-485.712 508-515v-95q0-28.875 20.922-49.438Q549.844-680 579.223-680h175.335q28.967 0 50.205 20.562Q826-638.875 826-610v10q0 11.75-8.463 19.875T797.825-572h-56q-4.75 0-7.788-3.162Q731-578.325 731-583v-10H603v77h152q28.525 0 49.763 20.562Q826-474.875 826-446v95q0 29.288-21.26 50.144Q783.48-280 754.481-280z" />
  </Svg>
);
