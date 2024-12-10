import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgUnfoldLessDoubleFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M481-126 380-27q-12.25 11-26.625 11t-25.853-10.956Q316-39 316-53.745 316-68.49 328-80l118-119q7.167-6.909 16.194-10.955Q471.222-214 480.111-214q8.889 0 17.839 4.045Q506.9-205.909 514-199L635-78q12 12.25 11.5 26.625T633.809-26q-11.118 12-25.405 12Q594.118-14 583-26zm0-200L380-226q-12.214 11-26.536 11-14.321 0-25.464-12-12-11-12-26t12-26l118-120q7.16-6 16.18-10.5t17.9-4.5q8.88 0 17.9 4.5Q507-405 514-399l121 122q12 12.25 11.5 26.625T633.809-225q-11.118 12-25.405 12-14.286 0-25.404-12zm-1-310 100.782-98.891Q592-746 607-746t26.5 11q11.5 11 11.5 27.045 0 16.046-11 26.955L514-562q-6.8 6.909-15.4 10.955Q490-547 480.5-547q-9.5 0-18.5-4t-15-11L327-682q-12-11.304-11.5-26.348.5-15.043 12.435-26.348Q339.152-746 353.576-745.5 368-745 380-735zm0-198 100.782-99.782Q592-945 607-945t26.5 11q11.5 11 11.5 27.045 0 16.046-11 26.955L514-761q-6.8 6.909-15.4 10.955Q490-746 480.5-746q-9.5 0-18.5-4t-15-11L327-881q-12-11.13-11.5-25.935.5-14.804 12.423-25.935Q339-944 353.5-944q14.5 0 26.609 11.216z" />
  </Svg>
);
