import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgNetworkNode = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M201.556-55q-61.085 0-103.82-42.973Q55-140.946 55-201.737q0-60.792 42.99-104.027Q140.982-349 201.798-349q16.86 0 33.091 4.206T266-334l167-166v-119q-44-15-72-52.492-28-37.491-28-86.508 0-61.314 43.08-104.657Q419.159-906 480.101-906t103.92 43.343Q627-819.314 627-758q0 49.017-28 86.508Q571-634 527-619v119l167 166q15.318-6.588 31.568-10.794T758.316-349q61.184 0 104.434 43.18T906-201.556q0 61.085-43.337 103.82Q819.327-55 758.242-55q-61.084 0-104.163-42.99Q611-140.982 611-201.798q0-16.86 4.206-33.091T626-266L480-413 334-266q6.588 14.881 10.794 31.112Q349-218.657 349-201.797q0 60.816-43.18 103.806Q262.64-55 201.556-55m150.326-94q22.035 0 37.576-15.424Q405-179.848 405-201.882q0-22.035-15.424-37.576Q374.152-255 352.118-255q-22.035 0-37.576 15.424Q299-224.152 299-202.118q0 22.035 15.424 37.576Q329.848-149 351.882-149m331-150q22.535 0 37.826-15.424Q736-329.848 736-351.882q0-22.035-15.424-37.576Q705.152-405 683.118-405q-22.535 0-37.326 15.424Q631-374.152 631-352.118q0 22.035 14.674 37.576Q660.348-299 682.882-299m-278-257q22.035 0 37.576-14.674Q458-585.348 458-607.882q0-22.535-15.424-37.826Q427.152-661 405.118-661q-22.035 0-37.576 15.424Q352-630.152 352-608.118q0 22.535 15.424 37.326Q382.848-556 404.882-556" />
  </Svg>
);
