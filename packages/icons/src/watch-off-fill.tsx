import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgWatchOffFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M779-73 650-202 617-86q-6 23-25 37.5T549-34H411q-24 0-42.5-14.5T343-86l-41-146q-52-31-89.5-96T175-480q0-36 9.5-78t31.5-79L76-776q-10-10-10-24.5T76-825q10-10 25-10t25 10l703 703q9 10 9 24.5T829-73q-10 10-25 10t-25-10M480-269q23 0 44.5-5t40.5-14L289-565q-10 20-15 41t-5 44q0 89 61 150t150 61m252-35-70-70q12-20 20.5-46t8.5-60q0-89-61-150t-150-61q-33 0-60 8.5T374-662l-70-70 39-142q6-23 25-37.5t43-14.5h138q24 0 42.5 14.5T617-874l41 146q66 44 97 110t31 138q0 47-14.5 94.5T732-304" />
  </Svg>
);
