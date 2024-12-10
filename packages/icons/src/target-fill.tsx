import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";

export const SvgTargetFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M479.769-34Q388-34 306.587-68.71q-81.414-34.711-142-95.001Q104-224 69-305.731q-35-81.731-35-173.5 0-92.507 35-173.638t95.357-142.157q60.357-61.027 142.155-96Q388.31-926 480.155-926t173.554 34.974q81.708 34.973 142 96Q856-734 891-652.638t35 173.869q0 91.769-34.895 173.182-34.894 81.414-95.5 142Q735-103 653.269-68.5 571.538-34 479.769-34m.478-83q151.128 0 256.941-105.488Q843-327.975 843-479q0-152.375-106.059-258.188Q630.882-843 479.753-843q-151.128 0-256.941 105.812Q117-631.375 117-479.5t106.059 257.188Q329.118-117 480.247-117m-.129-88Q365-205 285.5-284.882 206-364.765 206-479.176q0-114.412 79.382-194.618Q364.765-754 479.882-754 595-754 675-673.912t80 194.5Q755-365 675.118-285q-79.883 80-195 80m-.251-83Q560-288 615.5-343.367q55.5-55.368 55.5-135.5Q671-559 615.633-615q-55.367-56-135.5-56Q400-671 344.5-615 289-559 289-478.867q0 80.132 55.367 135.5Q399.735-288 479.867-288m-.23-89Q437-377 407-406.712q-30-29.713-30-72.35 0-42.637 30.363-73.288 30.363-30.65 73-30.65T553-552.429q30 30.571 30 73.5T552.637-406.5q-30.363 29.5-73 29.5" />
  </Svg>
);
