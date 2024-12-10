import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgArOnYouFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M480-815q139 0 237 98t98 237q0 139-98 237t-237 98q-139 0-237-98t-98-237q0-139 98-237t237-98m0 479q40.631 0 74.316-20Q588-376 612-409q6-10.667-.75-22.833Q604.5-444 589.776-444H370.115Q356-444 349-431.833q-7 12.166 0 22.833 23 33 56.684 53 33.685 20 74.316 20M336-563q0 19.55 12.513 32.275Q361.025-518 381-518q18.55 0 31.275-12.73Q425-543.46 425-563.018q0-18.557-12.73-31.769Q399.54-608 380.982-608q-19.557 0-32.27 13.012Q336-581.975 336-563m199 0q0 19.55 12.73 32.275Q560.46-518 579.018-518q19.557 0 32.269-12.73Q624-543.46 624-563.018q0-18.557-12.512-31.769Q598.975-608 579-608q-18.55 0-31.275 13.012Q535-581.975 535-563M58.825-731Q41-731 29-743.125T17-773v-35q0-55.917 39.542-95.458Q96.083-943 152-943h36q18.125 0 29.562 11.488Q229-920.024 229-901.825 229-884 217.562-872 206.125-860 188-860h-36q-22.1 0-37.05 14.95Q100-830.1 100-808v36q0 18.125-11.488 29.562Q77.024-731 58.825-731M152-17q-55.917 0-95.458-39.542Q17-96.083 17-152v-36q0-18.125 12.175-29.562Q41.351-229 59.175-229 77-229 88.5-217.562 100-206.125 100-188v36q0 22.1 14.95 37.05Q129.9-100 152-100h36q18.125 0 29.562 11.488Q229-77.024 229-58.825 229-41 217.562-29 206.125-17 188-17zm620-4q-18.125 0-29.562-12.175Q731-45.351 731-63.175 731-81 743.125-92.5T773-104h35q22.1 0 37.05-14.95Q860-133.9 860-156v-37q0-18.125 12.175-29.562 12.176-11.438 30-11.438Q920-234 931.5-222.562 943-211.125 943-193v37q0 55.917-39.542 95.458Q863.917-21 808-21zm88-752v-35q0-22.1-14.95-37.05Q830.1-860 808-860h-36q-18.125 0-29.562-12.175-11.438-12.176-11.438-30Q731-920 743.125-931.5T773-943h35q55.917 0 95.458 39.542Q943-863.917 943-808v36q0 18.125-11.488 29.562Q920.024-731 901.825-731 884-731 872-743.125T860-773" />
  </Svg>
);
