import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgPageInfo = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M722.225-107Q654-107 606.5-154.5t-47.5-116q0-68.5 47.57-116 47.571-47.5 115.5-47.5Q790-434 838-386.45T886-271q0 69-47.775 116.5-47.774 47.5-116 47.5M722-194q31.543 0 54.271-22.193Q799-238.386 799-271q0-31.543-22.729-53.771Q753.543-347 722-347t-53.771 22.229Q646-302.543 646-270.5t22.229 54.271Q690.457-194 722-194m-291-29H112q-19.75 0-33.375-13.675Q65-250.351 65-270.675 65-291 78.625-304.5 92.25-318 112-318h319q19.625 0 33.812 13.675 14.188 13.676 14.188 34Q479-250 464.812-236.5 450.625-223 431-223M238.225-526Q170-526 122.5-573.5T75-689.5q0-68.5 47.57-116 47.571-47.5 115.5-47.5Q306-853 354-805.45T402-690q0 69-47.775 116.5-47.774 47.5-116 47.5M238-613q31.543 0 54.271-22.193Q315-657.386 315-690q0-31.543-22.729-53.771Q269.543-766 238-766t-53.771 22.229Q162-721.543 162-689.5t22.229 54.271Q206.457-613 238-613m610-29H529q-19.75 0-33.375-13.675-13.625-13.676-13.625-34Q482-710 495.625-723.5 509.25-737 529-737h319q19.625 0 33.812 13.675 14.188 13.676 14.188 34Q896-669 881.812-655.5 867.625-642 848-642m-610-48" />
  </Svg>
);
