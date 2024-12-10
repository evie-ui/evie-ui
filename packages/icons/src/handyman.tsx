import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHandyman = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M796-27q-9 0-17.5-3.5T763-41L506-298q-7-7-10.5-15.5T492-331q0-9 3.5-18t10.5-16l87-87q7-7 15.5-11t18.5-4q9 0 17.5 4t15.5 11l257 258q7 7 11 15t4 18q0 9-4.5 18T917-128l-87 87q-7 7-15.5 10.5T796-27m1-97 37-37-208-209-37 37zM164-28q-9 0-18-3t-16-10l-86-86q-7-6-10-14.5T31-160q0-9 3-18t10-16l248-247h94l35-35-187-187h-63L25-809l122-122 146 146v63l187 187 133-133-72-72 56-55H484l-27-28 154-155 28 29v112l56-56 190 191q17 18 27.5 40.5T923-614q0 26-10.5 50T886-521l-94-94-62 62-57-57-228 228v94L197-41q-7 7-15 10t-18 3m0-96 210-209v-37h-37L127-161zm0 0-37-37 19 18zm633 0 37-37z" />
  </Svg>
);
