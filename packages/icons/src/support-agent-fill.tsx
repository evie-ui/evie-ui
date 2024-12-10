import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgSupportAgentFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M470-95q-19.75 0-33.375-13.675Q423-122.351 423-142.175 423-162 436.625-175.5 450.25-189 470-189h300v-305q0-115.611-85.195-194.805Q599.611-768 481-768q-119.357 0-205.179 79.657Q190-608.686 190-493v232q0 16.5-10.75 26.75T153-224h-4q-38.938 0-66.469-26.678Q55-277.356 55-316.5V-409q0-22 11-41t29-32v-20q2-76 33.5-142.5T212-760q52-49 120.888-77.5t147-28.5Q558-866 627-837.5T748-760q52 49 83.5 115.5T865-501l1 19q18 12 29 30.857T906-410v94q0 24.571-10 47.286Q886-246 866-233v45q0 37.8-26.625 65.4Q812.75-95 775-95zM368.825-390q-14.4 0-24.113-9.772-9.712-9.772-9.712-24t9.888-23.728q9.888-9.5 24.287-9.5 14.4 0 24.113 9.6Q403-437.799 403-423.825q0 14.4-9.888 24.113Q383.224-390 368.825-390m222 0q-14.4 0-24.112-9.772-9.713-9.772-9.713-24t9.888-23.728q9.888-9.5 24.287-9.5 14.4 0 24.112 9.6Q625-437.799 625-423.825q0 14.4-9.888 24.113Q605.224-390 590.825-390M250-482q-4-96 65.145-162.5T481-711q81.589 0 142.295 53.5Q684-604 698-523q-79-1-147.5-38T440.719-666Q422-597 370.5-549 319-501 250-482" />
  </Svg>
);
