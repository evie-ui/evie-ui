import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgRebase = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M438-153h-99q-14.297 44.688-52.649 72.344Q248-53 199.943-53q-61.226 0-104.085-42.859Q53-138.716 53-199.942 53-248 80.656-286.351 108.312-324.703 153-339v-283q-45-13-72.5-51.5T53-760.057q0-61.226 42.859-104.084Q138.716-907 199.942-907q48.057 0 86.408 27.656Q324.703-851.688 339-807h98l-32-33q-15-15.5-14.5-34.408t14.109-32.75Q419.4-921 437.8-920.5q18.4.5 33.2 13.5l114 113q14 14.364 14 34.182T585-726L471-614q-7 6-15.552 9.5-8.551 3.5-17.5 4-8.948.5-17.448-3t-15.441-10.833Q391-628 391-647.5t14-33.5l32-32h-98q-11 33-35 57t-57 34v282.606Q280-328 304-304t35 57h98l-32-33q-15-14-14.5-33.158t14.109-33Q419-360 438.033-360q19.034 0 32.967 13l114 113q14 14.364 14 34.182T585-166L471-54q-4 4-23.5-3.5t-36-14Q395-78 389-76.5t16.059 23.167Q391-67 391-86.5t14-33.5zM760.176-53Q699-53 656-95.875T613-200q0-47.502 27.656-85.623Q668.312-323.743 713-339v-283q-45-14-72.5-52.198T613-760q0-61.25 42.823-104.125Q698.647-907 759.824-907 821-907 864-864.125T907-760q0 47.624-27.5 85.812Q852-636 807-622v283q44.688 14.297 72.344 52.649Q907-248 907-199.943q0 61.226-42.823 104.085Q821.353-53 760.176-53M199.5-148q23 0 38.25-14.75T253-199.5q0-23-15.113-38.25Q222.775-253 200-253q-22.5 0-37.25 15.113Q148-222.775 148-200q0 22.5 14.75 37.25T199.5-148m560 0q23 0 38.25-14.75T813-199.5q0-23-15.112-38.25Q782.775-253 760-253q-22.5 0-37.25 15.113Q708-222.775 708-200q0 22.5 14.75 37.25T759.5-148m-560-560q23 0 38.25-14.75T253-759.5q0-23-15.113-38.25Q222.775-813 200-813q-22.5 0-37.25 15.112Q148-782.775 148-760q0 22.5 14.75 37.25T199.5-708m560 0q23 0 38.25-14.75T813-759.5q0-23-15.112-38.25Q782.775-813 760-813q-22.5 0-37.25 15.112Q708-782.775 708-760q0 22.5 14.75 37.25T759.5-708m.5-52" />
  </Svg>
);
