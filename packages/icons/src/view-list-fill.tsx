import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgViewListFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M149-609q-19.75 0-33.375-13.625T102-656v-81q0-19.75 13.625-33.375T149-784h81q19.75 0 33.375 13.625T277-737v81q0 19.75-13.625 33.375T230-609zm228 0q-19.75 0-33.375-13.625T330-656v-81q0-19.75 13.625-33.375T377-784h434q19.75 0 33.375 13.625T858-737v81q0 19.75-13.625 33.375T811-609zm0 216q-19.75 0-33.375-13.625T330-441v-79q0-19.75 13.625-33.375T377-567h434q19.75 0 33.375 13.625T858-520v79q0 20.75-13.625 34.375T811-393zm0 217q-19.75 0-33.375-13.625T330-223v-81q0-19.75 13.625-33.375T377-351h434q19.75 0 33.375 13.625T858-304v81q0 19.75-13.625 33.375T811-176zm-228 0q-19.75 0-33.375-13.625T102-223v-81q0-19.75 13.625-33.375T149-351h81q19.75 0 33.375 13.625T277-304v81q0 19.75-13.625 33.375T230-176zm0-217q-19.75 0-33.375-13.625T102-441v-79q0-19.75 13.625-33.375T149-567h81q19.75 0 33.375 13.625T277-520v79q0 20.75-13.625 34.375T230-393z" />
  </Svg>
);
