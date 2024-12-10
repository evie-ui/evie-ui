import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgCrowdsource = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M670.5-575q-26.5 0-45-18.708Q607-612.417 607-639q0-26.583 18.588-44.792 18.588-18.208 45-18.208t44.912 18.208Q734-665.583 734-639q0 26.583-18.5 45.292Q697-575 670.5-575M290-575q-26.583 0-44.792-18.708Q227-612.417 227-639q0-26.583 18.088-44.792Q263.176-702 289.588-702t44.912 18.208Q353-665.583 353-639q0 26.583-18.417 45.292Q316.167-575 290-575m190 116q-26.583 0-45.292-18Q416-495 416-522t18.708-45.5Q453.417-586 480-586q26.583 0 45.292 18.708Q544-548.583 544-522q0 27-18.708 45-18.709 18-45.292 18m0-232q-26.583 0-45.292-18.708Q416-728.417 416-755q0-26.583 18.708-45.292Q453.417-819 480-819q26.583 0 45.292 18.708Q544-781.583 544-755q0 26.583-18.708 45.292Q506.583-691 480-691m-.247 550Q460-141 438.5-144.5T398-153v-151.787Q398-342 421-369q23-27 59-27t59.5 27q23.5 27 23.5 64.213V-153q-20 5-41.747 8.5t-41.5 3.5M334-175q-20-8-40-18.5T256-217q-30-20-47.5-53.5T191-344q0-27-5-52t-20.833-46.394Q154-455 124-482.5T71-534q-14-15-14-31t13.5-30q14.5-15 30-15t29.5 15l163 153q19 19 30 45.522t11 53.015zm292 0v-168.345q0-26.54 13.5-53.097Q653-423 673-442l157-153q13-12 30-12t30 12q13 14 13 30t-13 31q-24 24-54 50.5T794.833-442Q779-421 774-396q-5 25-5 51.795 0 39.717-17.5 73.461t-47.793 53.96q-17.609 11.568-37.658 22.676Q646-183 626-175" />
  </Svg>
);
