// import { Children, isValidElement, useContext, useMemo } from "react";
// import { type StyleProp, View, type ViewStyle } from "react-native";
// import { TabsContext } from "../../../contexts/tabs";

// type Props = React.PropsWithChildren & { style?: StyleProp<ViewStyle> };

// export const TabsContent = (props: Props) => {
//   const { value } = useContext(TabsContext);

//   const children = useMemo(
//     () =>
//       Children.map(props.children, (child) => {
//         if (!isValidElement(child)) return;
//         const { value: childValue } = child.props as { value: typeof value };
//         if (childValue !== value) return;
//         return child;
//       }),
//     [props.children, value],
//   );

//   return (
//     <View
//       {...props}
//       style={[
//         !!children &&
//           !!value && {
//             marginTop: 20,
//           },
//         props.style,
//       ]}
//     >
//       {children}
//     </View>
//   );
// };
