import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgHomeMaxDotsFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M413.912-439Q428-439 439-449.195q11-10.194 11-25.7 0-14.505-10.695-25.305-10.694-10.8-25.2-10.8-15.08 0-25.092 10.695Q379-489.611 379-475.105q0 15.505 9.912 25.805 9.913 10.3 25 10.3m-131.017 0q14.505 0 25.305-10.195 10.8-10.194 10.8-25.7 0-14.505-10.695-25.305-10.694-10.8-25.2-10.8-15.505 0-25.805 10.695-10.3 10.694-10.3 25.2 0 15.505 10.195 25.805 10.194 10.3 25.7 10.3m263 0q14.08 0 24.592-10.195Q581-459.389 581-474.895q0-14.505-10.412-25.305-10.413-10.8-24.5-10.8Q531-511 520.5-500.305q-10.5 10.694-10.5 25.2 0 15.505 10.195 25.805 10.194 10.3 25.7 10.3M677-439q15.4 0 25.7-10.195 10.3-10.194 10.3-25.7 0-14.505-10.3-25.305-10.3-10.8-25.2-10.8-15.9 0-26.2 10.695-10.3 10.694-10.3 25.2 0 15.505 10.225 25.805Q661.45-439 677-439M255-165h-83q-66.013 0-111.506-45.494Q15-255.988 15-322v-306q0-66 45.494-112Q105.987-786 172-786h616q66 0 112 46t46 112v305.725q0 66.763-46 112.019T788-165h-81.66q0 13-9.17 21.5t-21.262 8.5H285q-13 0-21.5-8.5T255-165" />
  </Svg>
);