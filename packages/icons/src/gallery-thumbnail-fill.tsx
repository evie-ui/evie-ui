import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgGalleryThumbnailFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M120-185q-40.463 0-67.731-27.269Q25-239.538 25-280v-401q0-39 27.269-66.5Q79.537-775 120-775h401q39 0 66.5 27.5T615-681v401q0 40.462-27.5 67.731Q560-185 521-185zm600-320q-22.875 0-38.938-16.062Q665-537.125 665-560v-160q0-22.875 16.062-38.938Q697.125-775 720-775h160q22.875 0 38.938 16.062Q935-742.875 935-720v160q0 22.875-16.062 38.938Q902.875-505 880-505zM182.818-360h274.364q6.818 0 9.818-6.5t-1-12.5l-81.169-108.253Q381-491 375.231-491T365-487l-65 87-46-60q-3-4-9-4t-9.765 3.647L174-379q-4 6-1 12.5t9.818 6.5M720-185q-22.875 0-38.938-16.062Q665-217.125 665-240v-160q0-22.875 16.062-38.938Q697.125-455 720-455h160q22.875 0 38.938 16.062Q935-422.875 935-400v160q0 22.875-16.062 38.938Q902.875-185 880-185z" />
  </Svg>
);
