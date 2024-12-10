import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgE911Emergency = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M240-120q-19.75 0-33.375-13.675Q193-147.351 193-167.175 193-187 206.625-200.5 220.25-214 240-214h18l77-252q9-30 33.5-49t56.5-19h110q32 0 56.5 19t33.5 49l77 252h18q19.75 0 33.375 13.675Q767-186.649 767-166.825 767-147 753.375-133.5 739.75-120 720-120zm118-94h244l-68-226H426zm75-499v-120q0-19.75 13.675-33.875Q460.351-881 480.175-881 500-881 513.5-866.875 527-852.75 527-833v120q0 19.75-13.675 33.375Q499.649-666 479.825-666 460-666 446.5-679.625 433-693.25 433-713m242 63 85-85q15-13 34.1-13t32.9 14q14 14 14 33t-14 33l-85 86q-14 14-33.5 14T675-582.053q-15-14.052-15-34Q660-636 675-650m141 203h120q19.75 0 33.375 13.675Q983-419.649 983-399.825 983-380 969.375-366.5 955.75-353 936-353H816q-19.75 0-33.375-13.675Q769-380.351 769-400.175 769-420 782.625-433.5 796.25-447 816-447M218-583l-85-85q-13-14-13-33.1t14-32.9q14-15 33-15t34 14l85 85q14 14 14 33.5T285.947-583q-14.052 15-34 14.5Q232-569 218-583M24-353q-19.75 0-33.375-13.675Q-23-380.351-23-400.175-23-420-9.375-433.5 4.25-447 24-447h120q19.75 0 33.875 13.675Q192-419.649 192-399.825 192-380 177.875-366.5 163.75-353 144-353zm456 139" />
  </Svg>
);
