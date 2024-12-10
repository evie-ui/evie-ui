import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgStormFill = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M788.912-80Q773-80 764-94q-9-14-4-31 14-48 20-97t2-99q-42 85-122 135.5T483-135q-90.002 0-163.052-41.934-73.049-41.933-124.499-112.5Q144-360 116.5-451.352 89-542.703 89-641q0-50.286 5.72-99.15Q100.44-789.015 114-837q5.429-19.233 21.214-31.116Q151-880 172.429-880q14.696 0 23.633 14Q205-852 201-835q-14 48-19.5 97t-3.5 98q42-86 124.255-135.5T483-825q90.085 0 161.702 42.267t122.023 112.719q50.405 70.453 77.34 161.362Q871-417.744 871-320q0 51.286-5.72 100.15Q859.56-170.985 846-123q-5.429 19.233-20.484 31.116Q810.462-80 788.912-80m-306.16-239Q551-319 597.5-365.252t46.5-114.5Q644-548 597.748-594.5t-114.5-46.5Q415-641 368.5-594.748t-46.5 114.5Q322-412 368.252-365.5t114.5 46.5m.115-82Q450-401 427-424.133q-23-23.132-23-56Q404-513 427.133-536q23.132-23 56-23Q516-559 539-535.867t23 56Q562-447 538.867-424t-56 23" />
  </Svg>
);