import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgTty = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M496.57-494Q476-494 462-508.43t-14-35Q448-564 462.067-578q14.068-14 34.863-14 20.07 0 34.57 14.067Q546-563.865 546-543.07q0 20.07-14.43 34.57t-35 14.5m0-263Q476-757 462-771.638q-14-14.637-14-35.432 0-20.07 14.067-34.5Q476.135-856 496.93-856q20.07 0 34.57 14.43t14.5 35q0 20.57-14.43 35.07t-35 14.5m82 131Q558-626 544-640.067q-14-14.068-14-34.863 0-20.37 14.067-34.72Q558.135-724 578.93-724q20.07 0 34.57 14.491t14.5 35.07q0 20.579-14.43 34.509t-35 13.93m48.86 132q-20.57 0-34.5-14.43t-13.93-35Q579-564 593.067-578q14.068-14 34.863-14Q648-592 663-577.933q15 14.068 15 34.863 0 20.07-15 34.57T627.43-494m0-263q-20.57 0-34.5-14.638Q579-786.275 579-807.07q0-20.07 14.067-34.5Q607.135-856 627.93-856 648-856 663-841.57t15 35q0 20.57-15 35.07T627.43-757m82.307 131q-20.877 0-34.807-14.067Q661-654.135 661-674.93q0-20.37 14.123-34.72 14.123-14.35 35-14.35Q731-724 745.5-709.509q14.5 14.491 14.5 35.07t-14.693 34.509Q730.614-626 709.737-626m49.833 132q-20.57 0-35.07-14.43t-14.5-35Q710-564 724.638-578q14.637-14 35.432-14 20.07 0 34.5 14.067Q809-563.865 809-543.07q0 20.07-14.43 34.57t-35 14.5m0-263q-20.57 0-35.07-14.638Q710-786.275 710-807.07q0-20.07 14.638-34.5Q739.275-856 760.07-856q20.07 0 34.5 14.43t14.43 35q0 20.57-14.43 35.07t-35 14.5m82.307 131Q821-626 806.5-640.067 792-654.135 792-674.93q0-20.37 14.693-34.72Q821.386-724 842.263-724q20.877 0 34.807 14.491Q891-695.018 891-674.439t-14.123 34.509q-14.123 13.93-35 13.93m49 132Q870-494 856-508.43q-14-14.43-14-35T856.123-578q14.123-14 35-14Q912-592 926-577.933q14 14.068 14 34.863 0 20.07-14.123 34.57t-35 14.5m0-263Q870-757 856-771.638q-14-14.637-14-35.432 0-20.07 14.123-34.5t35-14.43Q912-856 926-841.57q14 14.43 14 35t-14.123 35.07q-14.123 14.5-35 14.5M797-95q-122.098 0-247.049-58Q425-211 318.5-317.5t-165-231.959Q95-674.919 95-796q0-29.429 20-49.714Q135-866 164-866h140q31 0 50.5 16.5T381-802l26.929 109.641Q412-666 406.5-646t-21.729 34.226L281-517q22 36 47 68t57 62q33 35 66.5 61t68.5 44l100-101q17-18 38.151-24 21.151-6 44.849 0l99 23q31 9 47.5 29.044T866-305v141q0 29.571-20.357 49.286Q825.286-95 797-95M234-600l80-75-22-96H191q1 36 10.457 77.441T234-600m372 367q36 17 79.5 28t85.5 14v-102.822L683-313zm0 0" />
  </Svg>
);
