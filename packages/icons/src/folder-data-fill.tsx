import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgFolderDataFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M606.5-15Q573-15 550-38t-23-56q0-23 10.5-41.5t29.5-28.879V-382q-19-10-29.5-28T527-449.589Q527-483 550-506.5t56.5-23.5q33.5 0 56.5 23.711 23 23.712 23 56.604 0 21.229-11 39.641-11 18.413-29 28.044v99l180-45v-54q-18-9.631-29-28.044-11-18.412-11-39.641 0-32.892 23-56.604Q832-530 865.5-530t57 23.711q23.5 23.712 23.5 56.604 0 21.229-11 39.641-11 18.413-29 28.044v44q0 31.176-17 57.088Q872-255 842-249l-196 46.905V-164q18 9.532 29 28.266Q686-117 686-94q0 33-23 56t-56.5 23M149-135q-39.05 0-66.525-27.975Q55-190.95 55-229v-502q0-38.463 27.475-66.731Q109.95-826 149-826h222q18 0 36 8t31 21l43.454 43H811q40.463 0 67.731 27.5Q906-699 906-660v70H606q-59 0-99 40.516-40 40.515-40 99.133Q467-422 477.5-396.5T507-352v160q-11.567 12.106-19.783 26.553Q479-151 474-135z" />
  </Svg>
);
