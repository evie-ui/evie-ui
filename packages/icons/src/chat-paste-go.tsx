import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgChatPasteGo = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M710-223H600q-19.75 0-33.375-13.675Q553-250.351 553-270.175 553-290 566.625-303.5 580.25-317 600-317h110l-27-27q-13-12-12-30t16-33q13.818-14 32.727-14T753-407l104 103q14 14.727 14 34.364Q871-250 857-236L753-133q-14.364 14-33.682 13.5T684-136q-12-12-13-30.5t12-30.5zm-493.137 0L114-120q-11 11-26 5.458Q73-120.083 73-136v-587q0-38.75 27.625-66.375T167-817h516q38.75 0 66.375 27.625T777-723v210q-13.667-4.333-28.333-5.667Q734-520 719.75-520q-9.25 0-18.5 1.167Q692-517.667 683-515v-208H167v406h318q-2.667 9-3.833 18.25Q480-289.5 480-280.25q0 14.25 1.333 28.917Q482.667-236.667 487-223zM283-566h285q17.425 0 29.213-11.777Q609-589.555 609-606.965q0-17.41-11.787-29.223Q585.425-648 568-648H283q-17.425 0-29.212 11.777Q242-624.445 242-607.035q0 17.41 11.788 29.223Q265.575-566 283-566m0 164h165q17.425 0 29.212-11.777Q489-425.555 489-442.965q0-17.41-11.788-29.223Q465.425-484 448-484H283q-17.425 0-29.212 11.777Q242-460.445 242-443.035q0 17.41 11.788 29.223Q265.575-402 283-402m-116 85v-406z" />
  </Svg>
);
