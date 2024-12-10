import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgTapAndPlay = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M644-17v-94h45v-648H271v264h-94v-354q0-39.05 27.475-66.525Q231.95-943 271-943h418q39.05 0 66.525 27.475Q783-888.05 783-849v738q0 39.05-27.475 66.525Q728.05-17 689-17zM370.225-210Q401-179 420.5-138.5T446-54q3 14.718-7.721 25.859Q427.557-17 412.776-17q-15.249 0-26.012-10.5Q376-38 373-53q-5-31-19-57.5T319-159q-22-21-49-35t-57-19q-15-3-25.5-13.759-10.5-10.758-10.5-26Q177-268 188.141-278.5T214-286q44 6 84.725 25.5 40.725 19.5 71.5 50.5M475-292q44 48 72 107.5T582-57q2 16.372-8.214 28.186Q563.573-17 548.286-17 533-17 522.5-27.5 512-38 510-53q-6-54.725-28-102.862Q460-204 424-243q-41-45-96.5-73t-119.711-34Q193-351 185-362.053q-8-11.052-8-25.78 0-15.649 9.705-25.908Q196.41-424 209.696-423 289-417 356.5-382T475-292M271-819h418v-30H271zm0 0v-30zM235.07-17q-25.47 0-41.77-16.23Q177-49.46 177-74.43q0-24.97 16.23-41.77 16.23-16.8 41.2-16.8 24.97 0 41.77 16.655Q293-99.69 293-75.07q0 25.47-16.655 41.77Q259.69-17 235.07-17" />
  </Svg>
);
