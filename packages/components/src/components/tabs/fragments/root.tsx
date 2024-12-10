// import { LayoutAnimation, type StyleProp, type ViewStyle } from "react-native";
// import { CONSTANTS } from "../../../constants";
// import { TabsContext } from "../../../contexts/tabs";

// type Props = React.PropsWithChildren & {
//   style?: StyleProp<ViewStyle>;
//   value: string | undefined;
//   onValueChange: (value: string) => void;
// };

// export const TabsRoot = (props: Props) => {
//   return (
//     <TabsContext.Provider
//       value={{
//         value: props.value,
//         onValueChange: (value) => {
//           LayoutAnimation.configureNext(CONSTANTS.Animation.MULTI_STEP_CONTENT_ANIMATION_PRESET);
//           props.onValueChange?.(value);
//         },
//       }}
//     >
//       {props.children}
//     </TabsContext.Provider>
//   );
// };
