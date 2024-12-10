import Svg, { Path } from "react-native-svg";
import type { SvgComponentProps } from "./types";
export const SvgBidLandscapeDisabled = (props: SvgComponentProps) => (
  <Svg width={props.size ?? "100%"} height={props.size ?? "100%"} viewBox="0 -960 960 960" {...props}>
    <Path d="M754-95H189q-39.05 0-66.525-27.475Q95-149.95 95-189v-565l-73-74q-11-10.504-11-24.948 0-14.443 10.842-24.748Q31.684-888 46.342-888t25.55 10.893L882.108-66.893Q893-56 893-41.5t-10.947 25Q871.105-6 857.153-6 843.2-6 833-16zM366-467 189-290v101h469L547-301q-6 0-12.5-2t-10.5-7zM189-659v268l134-134zm-21-207h603q39.463 0 67.231 27.769Q866-810.463 866-771v603l-95-94v-255L644-390l-50-51 177-178v-152H262zm347 347" />
  </Svg>
);
