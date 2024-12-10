import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgSwipe = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M479.864-883Q390-883 307-852t-154 86h66q13.267 0 23.633 10Q253-746 253-732t-10 23.5q-10 9.5-24 9.5H102q-19.75 0-33.375-13.625T55-746v-126q0-13.267 9.5-23.633Q74-906 88-906t24 10q10 10 10 24v46q78-59 169-91.5T480.217-950q98.216 0 188.917 32.269Q759.834-885.463 839-826v-46q0-13.267 9.5-23.633Q858-906 872-906t24 10q10 10 10 24v126q0 19.75-14.188 33.375Q877.625-699 858-699H749q-14 0-24-9.5T715-732q0-14 10-24t24-10h58q-71-55-154.136-86t-173-31M450-55q-23.882 0-45.941-9T365-90L150-310q-4-4-5-10t1-12l-1 1q18-27 48.5-37.5t62.5.5l82 24v-336q0-16.475 11.175-28.237Q360.351-720 376.982-720q16.632 0 28.325 11.763Q417-696.475 417-680v390q0 19.091-15 29.045Q387-251 369-257l-80-24 133.178 136.178Q427-139 434.609-136.5 442.217-134 450-134h236q37 0 63.5-26.5T776-224v-204q0-16.05 11.868-27.525Q799.737-467 816.368-467 833-467 844.5-455.525T856-428v204q0 71-49.619 120Q756.763-55 686-55zm74.368-532Q541-587 552.5-575.525T564-548v148q0 16.475-11.868 28.237Q540.263-360 523.632-360 507-360 495.5-371.763 484-383.525 484-400v-148q0-16.05 11.868-27.525Q507.737-587 524.368-587m144.614 40q16.632 0 28.325 11.475Q709-524.05 709-508v107.526q0 17.224-11.868 28.849Q685.263-360 668.632-360 652-360 641-371.763 630-383.525 630-400v-108q0-16.05 11.175-27.525Q652.351-547 668.982-547M601-258" />
  </Svg>
);
