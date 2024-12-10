import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgAddNotes = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M189-92q-38.775 0-66.388-27.906Q95-147.812 95-187v-582q0-38.775 27.612-66.387Q150.225-863 189-863h582q39.188 0 67.094 27.613Q866-807.775 866-769v355q-22-16-46-26.5t-49-15.476V-769H189v582h289.914q2.086 26 9.109 50.172Q495.045-112.655 506-92zm0-118v23-582 313-3zm100-106.825q0 12.825 8.625 21.325T319-287h167.595Q492-303 499-317.5q7-14.5 18-29.5H319q-12.75 0-21.375 8.675-8.625 8.676-8.625 21.5m0-161q0 12.825 8.625 21.325T319-448h312.864q10.136-1 19.229-1.702 9.092-.702 19.907-4.298v-10q2-18-7-31t-23-13H319q-12.75 0-21.375 8.675-8.625 8.676-8.625 21.5m0-161q0 12.825 8.625 21.325T319-609h322q12.75 0 21.375-8.675 8.625-8.676 8.625-21.5 0-12.825-8.625-21.325T641-669H319q-12.75 0-21.375 8.675-8.625 8.676-8.625 21.5M723.5-25Q646-25 591-80t-55-132q0-77.435 54.99-133.217Q645.98-401 724-401q77 0 132.5 55.783Q912-289.435 912-212q0 77-55.5 132t-133 55M698-183v82q0 11.8 8.443 19.9 8.443 8.1 19.7 8.1t19.057-8.7q7.8-8.7 7.8-20.3v-81h83q11.4 0 19.2-8.743 7.8-8.743 7.8-20.4 0-11.257-7.8-19.057-7.8-7.8-19.2-7.8h-83v-83q0-11.4-7.8-19.2-7.8-7.8-19.057-7.8-11.257 0-19.7 7.8T698-322v83h-83q-11.4 0-19.2 7.929-7.8 7.928-7.8 19.357 0 11.428 8.4 20.071T616-183z" />
  </Svg>
);
