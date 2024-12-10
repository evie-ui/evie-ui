import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgShareOff = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M727.035-712Q750-712 765.5-727.535q15.5-15.535 15.5-38.5T765.465-804.5q-15.535-15.5-38.5-15.5T688.5-804.465q-15.5 15.535-15.5 38.5t15.535 38.465q15.535 15.5 38.5 15.5m0 572Q750-140 765.5-155.535q15.5-15.535 15.5-38.5T765.465-232.5q-15.535-15.5-38.5-15.5T688.5-232.465q-15.5 15.535-15.5 38.5t15.535 38.465q15.535 15.5 38.5 15.5M230-40q-78 0-134-56T40-230q0-78 56-134t134-56q78 0 134 56t56 134q0 78-56 134T230-40M96-463q-4-60 37.5-107T234-617q27.308 0 51.654 10.5Q310-596 330-576l266-153q-3-8.071-4.5-18.433T590-766q0-56.417 40.309-96.708Q670.618-903 727.059-903t96.691 40.309Q864-822.382 864-765.941t-40.292 96.691Q783.417-629 727-629q-27.661 0-52.331-8Q650-645 633-665L366-520q4 17 5 31t0 29q-32-19-67-29.5T230-500q-36.217 0-70.109 9.5Q126-481 96-463M726.941-57Q670.5-57 630.25-97.388T590-194.331q0-6.624 1.5-17.289Q593-222.286 596-232l-104-61q-7-32-21-60t-34-53l196 110q17-17 40.346-26 23.346-9 53.654-9 56.417 0 96.708 40.309Q864-250.382 864-193.941T823.691-97.25Q783.382-57 726.941-57M229-189l49 48q7.636 8 19.818 7.5Q310-134 318-141.759q7-6.758 7-18.5Q325-172 318-180l-49-48 51-52q8-7.545 8-19.773Q328-312 320.071-320q-7.928-7-19.681-7-11.754 0-19.39 7l-50 50-51-50q-7.273-8-19.136-8Q149-328 142-320.071q-8 7.928-8 19.681 0 11.754 8 19.39l49 50-50 50q-9 8.818-9 20.409T141.143-141q8.143 9 20.182 9 12.039 0 19.675-9z" />
  </Svg>
);
