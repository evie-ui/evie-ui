import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgJumpToElementFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M551-551h33q19.75 0 33.375 13.675Q631-523.649 631-503.825 631-484 617.375-470.5 603.75-457 584-457h-80q-19.75 0-33.375-13.625T457-504v-80q0-19.75 13.675-33.375Q484.351-631 504.175-631 524-631 537.5-617.375 551-603.75 551-584zm260 0v-33q0-19.75 13.675-33.375Q838.351-631 858.175-631 878-631 892-617.375 906-603.75 906-584v80q0 19.75-14.125 33.375T858-457h-80q-19.75 0-33.375-13.675Q731-484.351 731-504.175 731-524 744.625-537.5 758.25-551 778-551zM551-811v33q0 19.75-13.675 33.375Q523.649-731 503.825-731 484-731 470.5-744.625 457-758.25 457-778v-80q0-19.75 13.625-33.875T504-906h80q19.75 0 33.375 14.175 13.625 14.176 13.625 34Q631-838 617.375-824.5 603.75-811 584-811zm260 0h-33q-19.75 0-33.375-13.675Q731-838.351 731-858.175 731-878 744.625-892 758.25-906 778-906h80q19.75 0 33.875 14.125T906-858v80q0 19.75-14.175 33.375-14.176 13.625-34 13.625Q838-731 824.5-744.625 811-758.25 811-778zM362-296 154-88q-14 15-32.5 15T88-88q-14-14-14-33t14-33l208-208H142q-19.75 0-33.375-13.675Q95-389.351 95-409.175 95-429 108.625-443 122.25-457 142-457h267q19.75 0 33.875 14.125T457-409v267q0 19.75-14.175 33.375Q428.649-95 408.825-95 389-95 375.5-108.625 362-122.25 362-142z" />
  </Svg>
);
