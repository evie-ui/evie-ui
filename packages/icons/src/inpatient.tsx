import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgInpatient = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M145-43q-40.213 0-67.606-27.1Q50-97.2 50-137v-686q0-40.213 27.394-67.606Q104.787-918 145-918h358q40.213 0 67.606 27.394Q598-863.213 598-823v686q0 39.8-27.394 66.9Q543.213-43 503-43zm-8-495q17.9-13.048 40.206-20.524Q199.513-566 225-566h198q25.487 0 47.794 7.476Q493.1-551.048 511-538v-293H137zm186.911-78Q294-616 273-636.942q-21-20.941-21-51.647 0-30.705 21.089-51.558 21.088-20.853 51-20.853Q355-761 376-740.058q21 20.941 21 51.647 0 30.705-21.089 51.558-21.088 20.853-52 20.853M137-130h374v-261q0-36.4-25.8-62.2Q459.4-479 423-479H225q-36.4 0-62.2 25.8Q137-427.4 137-391zm146-135v26q0 16.75 11.868 27.875Q306.737-200 323.368-200 340-200 351.5-211.125T363-239v-26h25q16.475 0 28.237-11.175Q428-287.351 428-303.982q0-16.632-11.763-28.325Q404.475-344 388-344h-25v-25q0-16.475-11.868-28.237Q339.263-409 322.632-409 306-409 294.5-397.237 283-385.475 283-369v25h-25q-16.475 0-28.238 11.868Q218-320.263 218-303.632 218-287 229.762-276q11.763 11 28.238 11zM137-130h374zm682.158-191.5Q806.249-309 788.625-309 771-309 759-321L657-424q-15-14.455-15-33.727Q642-477 657-491l102-103q11.867-12 29.467-12 17.6 0 30.533 12 12 12 13.5 28t-8.5 29l-35 36h102q18.75 0 31.375 12.738T935-457.825Q935-439 922.375-426.5T891-414H789l34 35q10 13.067 9 29.533Q831-333 819.158-321.5" />
  </Svg>
);