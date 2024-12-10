import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgTimelineFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M120.761-229Q83-229 56-256.089q-27-27.088-27-65.349t27.238-65.912Q83.477-415 120.535-415q7.465 0 13.965 1.5T153-410l158-158.626Q309-580 308-586.5q-1-6.5-1-13.573 0-38.904 27.739-65.915Q362.478-693 400.735-693q38.256 0 65.261 27.39Q493-638.219 493-599.756 493-592 489-571l81.579 82q10.421-2 16.921-3t12.5-1q6 0 13 1t17.448 3L750-607.552Q748-618 747-625t-1-14.004q0-38.519 27.451-65.258 27.452-26.738 66-26.738Q878-731 904.5-704.199 931-677.398 931-638.85q0 38.549-26.888 65.7Q877.223-546 839.465-546 832-546 825-547t-17.448-3L689-430.448Q691-420 692-413t1 13.766q0 37.211-27.243 64.722Q638.513-307 600.257-307 562-307 534.5-334.512 507-362.023 507-399.465q0-7.535 1-14.035t3-17.976L431.476-511Q420-509 413.5-508q-6.5 1-13.75 1-7.75 0-28.75-4L210-350.348Q212-340 213.5-334q1.5 6 1.5 13.465 0 37.058-27.683 64.297Q159.635-229 120.761-229" />
  </Svg>
);
