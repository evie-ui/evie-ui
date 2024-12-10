import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgCalendarViewMonthFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M72-557.308v-194.384q0-23.931 16.1-40.12Q104.2-808 127.773-808H261q23.8 0 39.9 16.188 16.1 16.189 16.1 40.12v194.384q0 23.931-16.1 40.12Q284.8-501 261-501H127.773Q104.2-501 88.1-517.188 72-533.377 72-557.308M415-501q-24.8 0-40.4-16.184-15.6-16.184-15.6-40.109V-751.61q0-23.925 15.6-40.157Q390.2-808 415-808h131.338q23.462 0 39.562 16.188 16.1 16.189 16.1 40.12v194.384q0 23.931-16.1 40.12Q569.8-501 546.338-501zm284 0q-23.8 0-39.9-16.233-16.1-16.232-16.1-40.142v-194.163q0-23.997 16.1-40.229Q675.2-808 699-808h133.227q23.573 0 39.673 16.233 16.1 16.232 16.1 40.229v194.163q0 23.91-16.1 40.142Q855.8-501 832.227-501zM261-152H127.773Q104.2-152 88.1-168.233 72-184.465 72-208.462v-194.163q0-23.91 16.1-40.142Q104.2-459 127.773-459H261q23.8 0 39.9 16.233 16.1 16.232 16.1 40.142v194.163q0 23.997-16.1 40.229Q284.8-152 261-152m154 0q-24.8 0-40.4-16.184-15.6-16.184-15.6-40.109V-402.61q0-23.925 15.6-40.157Q390.2-459 415-459h131.338q23.462 0 39.562 16.188 16.1 16.189 16.1 40.12v194.384q0 23.931-16.1 40.12Q569.8-152 546.338-152zm284 0q-23.8 0-39.9-16.233-16.1-16.232-16.1-40.142v-194.163q0-23.997 16.1-40.229Q675.2-459 699-459h133.227q23.573 0 39.673 16.233 16.1 16.232 16.1 40.229v194.163q0 23.91-16.1 40.142Q855.8-152 832.227-152z" />
  </Svg>
);
