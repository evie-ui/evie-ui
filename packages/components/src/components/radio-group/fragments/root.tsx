// import { type StyleProp, View, type ViewStyle } from "react-native";
// import { RadioGroupContext } from "../../../contexts/radio-group";

// type NonNullable = {
//   nullable?: false;
//   value: string | undefined;
//   onValueChange: (value: string) => void;
// };

// type Nullable = {
//   nullable: true;
//   value: string | null | undefined;
//   onValueChange: (value: string | null) => void;
// };

// type Props = React.PropsWithChildren & { style?: StyleProp<ViewStyle> } & (Nullable | NonNullable);

// export const RadioGroupRoot = (props: Props) => {
//   return (
//     <RadioGroupContext.Provider
//       value={
//         props.nullable
//           ? {
//               value: props.value,
//               onValueChange: props.onValueChange,
//               nullable: props.nullable,
//             }
//           : {
//               value: props.value,
//               onValueChange: props.onValueChange,
//               nullable: props.nullable ?? false,
//             }
//       }
//     >
//       <View style={[{ gap: 8 }, props.style]}>{props.children}</View>
//     </RadioGroupContext.Provider>
//   );
// };
